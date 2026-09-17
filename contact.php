<?php
declare(strict_types=1);
ini_set('display_errors', '0');

function contactResponse(int $status, bool $success, string $message): never
{
    http_response_code($status);
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    if (str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json')) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => $success, 'message' => $message]);
    } else {
        header('Content-Type: text/html; charset=utf-8');
        header("Content-Security-Policy: default-src 'none'; base-uri 'none'; frame-ancestors 'none'");
        echo '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Contact — abdis.ink</title><main><h1>Contact</h1><p>'
            . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . '</p><p><a href="/index.html#contact">Return to contact</a></p></main></html>';
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    contactResponse(405, false, 'Please submit the contact form using POST.');
}
$failure = 'Unable to send your message right now. Please try again later.';
try {
    if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) contactResponse(413, false, 'Your message is too large.');
    // Reject cross-site browser submissions; no cookies or authenticated actions are used.
    if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') contactResponse(403, false, $failure);
    $private = dirname(__DIR__) . '/abdis-private';
    $library = is_file($private . '/lib/contact.php') ? $private : __DIR__;
    require $library . '/lib/contact.php';
    $ratePath = sys_get_temp_dir() . '/abdis-contact-' . hash('sha256', __DIR__) . '.json';
    if (!allowContactAttempt($ratePath, $_SERVER['REMOTE_ADDR'] ?? 'unknown', time())) {
        header('Retry-After: 600');
        contactResponse(429, false, 'Too many attempts. Please wait 10 minutes before trying again.');
    }
    $input = validateContact($_POST);
    if ($input === null) contactResponse(422, false, 'Please check all required fields and their length limits.');
    $configPath = getenv('ABDIS_MAIL_CONFIG') ?: (is_file($private . '/config/mail.php') ? $private . '/config/mail.php' : __DIR__ . '/config/mail.php');
    if (!is_file($configPath) || !is_file($library . '/vendor/autoload.php')) throw new RuntimeException('mail-setup');
    $config = require $configPath;
    if (!is_array($config)) throw new RuntimeException('mail-setup');
    require $library . '/vendor/autoload.php';
    $mail = contactMailer($config, $input);
    if (!$mail->send()) throw new RuntimeException('mail-delivery');
    contactResponse(200, true, 'Your message has been sent successfully.');
} catch (Throwable $error) {
    // Never log exception text: SMTP responses may contain private information.
    error_log('abdis contact: delivery or configuration unavailable');
    contactResponse(503, false, $failure);
}
