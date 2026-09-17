<?php
declare(strict_types=1);

function request(string $method, string $path, array $postData = [], array $headers = []): array {
    $url = 'http://127.0.0.1:8000' . $path;
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    
    $headerList = [];
    foreach ($headers as $k => $v) {
        $headerList[] = "$k: $v";
    }
    if (!isset($headers['Accept'])) {
        $headerList[] = 'Accept: application/json';
    }
    
    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headerList);
    
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    return ['status' => $status, 'body' => $response];
}

function resetRateLimit(): void {
    $dir = realpath(__DIR__ . '/..');
    $path = sys_get_temp_dir() . '/abdis-contact-' . hash('sha256', $dir) . '.json';
    if (is_file($path)) {
        @unlink($path);
    }
}

function assertTest(bool $condition, string $label): void {
    if (!$condition) {
        echo "FAIL: $label\n";
        exit(1);
    }
    echo "PASS: $label\n";
}

echo "Running Contact Endpoint Verification Tests...\n\n";
resetRateLimit();

// 1. GET Method
$res = request('GET', '/contact.php');
assertTest($res['status'] === 405, 'GET /contact.php returns 405 Method Not Allowed');
$json = json_decode($res['body'], true);
assertTest($json['success'] === false && str_contains($json['message'], 'POST'), 'GET response JSON is properly structured');

// 2. Empty POST (rejected by validation; should NOT consume rate limit quota)
$res = request('POST', '/contact.php', []);
assertTest($res['status'] === 422, 'Empty POST returns 422');

// 3. Honeypot submission (rejected by validation; should NOT consume rate limit quota)
$res = request('POST', '/contact.php', [
    'name' => 'Spam Bot',
    'email' => 'bot@spammer.com',
    'subject' => 'Buy things',
    'message' => 'Cheap prices',
    'website' => 'http://spam.example.com'
]);
assertTest($res['status'] === 422, 'Filled honeypot returns 422 without consuming rate quota');

// 4. Overlong Name
$res = request('POST', '/contact.php', [
    'name' => str_repeat('a', 101),
    'email' => 'alice@example.com',
    'subject' => 'Hello',
    'message' => 'World',
    'website' => ''
]);
assertTest($res['status'] === 422, 'Overlong name (>100) returns 422 without consuming rate quota');

// 5. Header injection attempt in name/subject
$res = request('POST', '/contact.php', [
    'name' => "Alice\r\nBcc: evil@example.com",
    'email' => 'alice@example.com',
    'subject' => 'Hello',
    'message' => 'World',
    'website' => ''
]);
assertTest($res['status'] === 422, 'CRLF injection in Name returns 422 without consuming rate quota');

// 6. Cross-site Sec-Fetch-Site
$res = request('POST', '/contact.php', [
    'name' => 'Alice',
    'email' => 'alice@example.com',
    'subject' => 'Hello',
    'message' => 'World',
    'website' => ''
], ['Sec-Fetch-Site' => 'cross-site']);
assertTest($res['status'] === 403, 'Cross-site Sec-Fetch-Site returns 403');

// 7. First valid submission: passes validation and records attempt #1
$validPayload = [
    'name' => 'Abdi Visitor',
    'email' => 'visitor@example.com',
    'subject' => 'Portfolio Feedback',
    'message' => 'Great website!',
    'website' => ''
];
$res = request('POST', '/contact.php', $validPayload);
assertTest($res['status'] === 503, 'First valid submission consumes rate quota and returns 503 (no mail config)');
$json = json_decode($res['body'], true);
assertTest($json !== null && $json['success'] === false, '503 returns clean JSON with success: false');
assertTest(!str_contains($res['body'], 'Exception') && !str_contains($res['body'], 'Fatal') && !str_contains($res['body'], '\\'), '503 does NOT expose stack traces or internal paths');

// 8. Immediate second valid submission (< 30s): rate limiter triggers 429!
$res = request('POST', '/contact.php', $validPayload);
assertTest($res['status'] === 429, 'Immediate second valid submission triggers rate limiter (429 Too Many Requests)');
$json = json_decode($res['body'], true);
assertTest($json['success'] === false && str_contains($json['message'], 'Too many attempts'), '429 response JSON message is clear and polite');

// 9. HTML fallback check
$res = request('GET', '/contact.php', [], ['Accept' => 'text/html']);
assertTest($res['status'] === 405, 'HTML fallback GET returns 405');
assertTest(str_contains($res['body'], '<!doctype html>'), 'HTML fallback renders safe HTML');

echo "\nAll Endpoint Verification Tests Passed Successfully!\n";
