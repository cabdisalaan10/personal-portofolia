<?php
// Copy to a private config/mail.php on the server. Never commit real credentials.
return [
    'host' => 'abdis.ink',
    'username' => 'hello@abdis.ink',
    'password' => 'YOUR_EMAIL_PASSWORD_HERE',
    'port' => 465, // Replace with the port shown in cPanel Connect Devices.
    'encryption' => 'ssl', // tls = STARTTLS; ssl = implicit SSL/TLS. Match cPanel.
    'from_email' => 'hello@abdis.ink',
    'from_name' => 'abdis.ink',
    'recipient' => 'hello@abdis.ink',
];
