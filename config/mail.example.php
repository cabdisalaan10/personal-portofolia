<?php
// Copy to a private config/mail.php on the server. Never commit real credentials.
return [
    'host' => 'SMTP_HOST_HERE',
    'username' => 'hello@abdis.ink',
    'password' => 'SMTP_PASSWORD_HERE',
    'port' => 587, // Replace with the port shown in cPanel Connect Devices.
    'encryption' => 'tls', // tls = STARTTLS; ssl = implicit SSL/TLS. Match cPanel.
    'from_email' => 'hello@abdis.ink',
    'from_name' => 'abdis.ink',
    'recipient' => 'hello@abdis.ink',
];
