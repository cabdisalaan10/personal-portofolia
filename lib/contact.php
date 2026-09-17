<?php
declare(strict_types=1);

function validateContact(array $input): ?array
{
    $limits = ['name' => 100, 'email' => 254, 'subject' => 150, 'message' => 5000];
    $clean = [];
    foreach ($limits as $key => $limit) {
        if (!isset($input[$key]) || !is_string($input[$key])) return null;
        $raw = $input[$key];
        if (!mb_check_encoding($raw, 'UTF-8') || mb_strlen($raw, 'UTF-8') > $limit) return null;
        // Header fields cannot contain control characters, even at their edges.
        $pattern = $key === 'message' ? '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/' : '/[\x00-\x1F\x7F]/';
        if (preg_match($pattern, $raw)) return null;
        $clean[$key] = trim($raw);
        if ($clean[$key] === '') return null;
    }
    if (!filter_var($clean['email'], FILTER_VALIDATE_EMAIL)) return null;
    $honeypot = $input['website'] ?? '';
    if (!is_string($honeypot) || trim($honeypot) !== '') return null;
    return $clean;
}

// Locked state prevents parallel requests bypassing the limit. Old entries expire.
function allowContactAttempt(string $path, string $ip, int $now): bool
{
    $handle = fopen($path, 'c+');
    if (!$handle) throw new RuntimeException('rate-storage');
    try {
        if (!flock($handle, LOCK_EX)) throw new RuntimeException('rate-lock');
        $raw = stream_get_contents($handle);
        $state = [];
        if ($raw !== false && $raw !== '') {
            $decoded = json_decode($raw, true);
            if (is_array($decoded)) {
                $state = $decoded;
            }
        }
        foreach ($state as $key => $attempts) {
            if (!is_array($attempts)) {
                unset($state[$key]);
                continue;
            }
            $state[$key] = array_values(array_filter($attempts, fn($time) => is_int($time) && $time > $now - 600));
            if (!$state[$key]) unset($state[$key]);
        }
        $key = hash('sha256', $ip);
        $attempts = $state[$key] ?? [];
        $allowed = count($attempts) < 5 && (!$attempts || $now - end($attempts) >= 30);
        // Bound disk/memory use under a distributed flood; fail closed when full.
        if (!isset($state[$key]) && count($state) >= 10000) $allowed = false;
        if ($allowed) $state[$key][] = $now;
        $encoded = json_encode($state, JSON_THROW_ON_ERROR);
        rewind($handle);
        if (!ftruncate($handle, 0) || fwrite($handle, $encoded) !== strlen($encoded) || !fflush($handle)) {
            throw new RuntimeException('rate-write');
        }
        return $allowed;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

function contactMailer(array $config, array $input): \PHPMailer\PHPMailer\PHPMailer
{
    foreach (['host', 'username', 'password', 'from_email', 'from_name', 'recipient', 'encryption'] as $key) {
        if (!isset($config[$key]) || !is_string($config[$key]) || $config[$key] === '') throw new RuntimeException('mail-config');
    }
    $port = is_int($config['port'] ?? null) ? $config['port'] : (is_string($config['port'] ?? null) && ctype_digit($config['port']) ? (int)$config['port'] : 0);
    if (!in_array($config['encryption'], ['tls', 'ssl'], true)
        || $port < 1 || $port > 65535
        || !filter_var($config['from_email'], FILTER_VALIDATE_EMAIL)
        || !filter_var($config['recipient'], FILTER_VALIDATE_EMAIL)
        || !preg_match('/^[^@]+@abdis\.ink$/i', $config['from_email'])
        || str_contains($config['host'], 'SMTP_HOST_HERE') || $config['password'] === 'SMTP_PASSWORD_HERE') {
        throw new RuntimeException('mail-config');
    }
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;
    $mail->Host = $config['host'];
    $mail->Port = $config['port'];
    $mail->SMTPSecure = $config['encryption'];
    $mail->Username = $config['username'];
    $mail->Password = $config['password'];
    $mail->Timeout = 15;
    $mail->Timelimit = 20;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['recipient']);
    $mail->addReplyTo($input['email'], $input['name']);
    $mail->isHTML(false);
    $mail->Subject = '[abdis.ink Contact] ' . $input['subject'];
    $mail->Body = "New message from abdis.ink\n\nName: {$input['name']}\nEmail: {$input['email']}\nSubject: {$input['subject']}\nSubmitted: "
        . gmdate('Y-m-d H:i:s') . " UTC\n\nMessage:\n{$input['message']}";
    return $mail;
}
