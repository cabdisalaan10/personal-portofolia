<?php
declare(strict_types=1);
require __DIR__ . '/../lib/contact.php';
function check(bool $condition, string $label): void {
    if (!$condition) throw new RuntimeException($label);
    echo "PASS: $label\n";
}
$valid = ['name' => 'Test Visitor', 'email' => 'visitor@example.org', 'subject' => 'Test subject', 'message' => 'Test message', 'website' => ''];
check(validateContact($valid) !== null, 'valid submission');
foreach (['name', 'email', 'subject', 'message'] as $key) {
    check(validateContact(array_replace($valid, [$key => ''])) === null, "empty $key");
    check(validateContact(array_replace($valid, [$key => []])) === null, "array $key");
}
foreach (['name' => 100, 'email' => 254, 'subject' => 150, 'message' => 5000] as $key => $limit) {
    check(validateContact(array_replace($valid, [$key => str_repeat('a', $limit + 1)])) === null, "overlong $key");
}
check(validateContact(array_replace($valid, ['email' => 'invalid'])) === null, 'invalid email');
check(validateContact(array_replace($valid, ['website' => 'bot'])) === null, 'honeypot');
foreach (['name', 'email', 'subject'] as $key) {
    check(validateContact(array_replace($valid, [$key => "injection\r\nBcc: victim@example.org"])) === null, "header injection $key");
}
check(validateContact(array_replace($valid, ['message' => "Hello\nA second line"])) !== null, 'multiline message');
$path = tempnam(sys_get_temp_dir(), 'contact-test-');
try {
    check(allowContactAttempt($path, 'test-ip', 1000), 'initial attempt');
    check(!allowContactAttempt($path, 'test-ip', 1001), 'rapid attempt blocked');
    foreach ([1030, 1060, 1090, 1120] as $time) check(allowContactAttempt($path, 'test-ip', $time), 'spaced attempt');
    check(!allowContactAttempt($path, 'test-ip', 1150), 'sixth attempt blocked');
    check(allowContactAttempt($path, 'test-ip', 1800), 'limit expires');
} finally { unlink($path); }
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require __DIR__ . '/../vendor/autoload.php';
    $config = ['host' => '127.0.0.1', 'username' => 'hello@abdis.ink', 'password' => 'dummy-test-only', 'port' => 1, 'encryption' => 'tls', 'from_email' => 'hello@abdis.ink', 'from_name' => 'abdis.ink', 'recipient' => 'hello@abdis.ink'];
    $mail = contactMailer($config, $valid);
    check($mail->From === 'hello@abdis.ink', 'domain From');
    check(isset($mail->getReplyToAddresses()['visitor@example.org']), 'visitor Reply-To');
    check($mail->preSend(), 'message composition (no delivery)');
    $mail->Timeout = 1;
    try { $mail->send(); check(false, 'SMTP failure expected'); }
    catch (\PHPMailer\PHPMailer\Exception $e) { check(true, 'PHPMailer connection failure handled by exception'); }
} else { echo "SKIP: PHPMailer not installed\n"; }
