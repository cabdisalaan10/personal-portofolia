# Abdisalam Faysal Ali — Personal Developer Portfolio & DaryeelX Showcase

A modern, fast, responsive personal portfolio website for **Abdisalam Faysal Ali** (Domain: [abdis.ink](https://abdis.ink)).

Centering Abdisalam's identity as a **Software Developer, Technology Builder, and Founder**, with **DaryeelX** highlighted as his flagship technology venture and platform.

---

## 🌟 Key Features

- **Personal Brand First**: Professional presentation tailored for recruiters, universities, scholarship committees, and technical partners.
- **DaryeelX Venture Showcase**: Dedicated spotlight for DaryeelX and its flagship healthcare booking concept, **eBallan DaryeelX**.
- **Real-World Projects**: Detailed cards for the **Hotel Management System** (PHP & MySQL), **eBallan DaryeelX**, and the **Personal Portfolio**.
- **Dark-First Modern Aesthetics**: Sophisticated dark theme by default with an instant Dark/Light mode toggle stored in `localStorage`.
- **Centralized Data Configuration (`js/data.js`)**: Update personal details, bio, education degree title, projects, and skills in one clean configuration file.
- **Zero Framework Bloat**: Pure vanilla HTML5, CSS3 (custom properties), and ES6+ JavaScript. Fast loading and zero dependency vulnerability risk.
- **Full Responsiveness**: Seamless experience on ultra-wide screens, laptops, tablets, and mobile phones.
- **Production-Ready SEO**: Open Graph tags, Twitter cards, meta descriptions, semantic headings, `robots.txt`, and `sitemap.xml`.

---

## 📁 Project Structure

```text
personal-portfolio/
├── index.html                   # Semantic HTML5 website structure & SEO metadata
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap for search engines
├── README.md                    # Project documentation & deployment guide
├── css/
│   └── style.css                # CSS variables, typography, layout, themes
├── js/
│   ├── data.js                  # Centralized content configuration (EASY TO EDIT)
│   └── main.js                  # Theme toggle, scroll-spy, mobile menu, hydration
└── assets/
    ├── icons/
    │   └── favicon.svg          # Portfolio monogram favicon
    └── images/
        ├── abdisalam_original.webp # Optimized WebP hero portrait
        ├── abdisalam_original.png  # High-resolution PNG hero fallback
        ├── abdisalam.png           # Social preview portrait
        ├── daryeelx-preview.svg    # eBallan DaryeelX healthtech concept UI mockup
        ├── hotel-preview.svg       # Hotel Management System UI mockup
        └── portfolio-preview.svg   # Developer portfolio architecture mockup
```

---

## 🚀 How to Run Locally

You do not need to install heavy dependencies or build tools. You can run the website locally using any standard static file server:

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and click **"Open with Live Server"**.

### Option 2: Python HTTP Server
If you have Python installed, open terminal in the project folder and run:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3: Node.js `npx serve`
If you have Node.js installed:
```bash
npx serve .
```

---

## ✏️ How to Edit Content (Centralized in `js/data.js`)

All personal details, projects, skills, education, and social links are kept in [`js/data.js`](js/data.js).

- **Update Education / Degree**:
  Open `js/data.js` and locate the `education` array to change your degree title, expected graduation year, or coursework notes.
- **Add or Edit Projects**:
  Modify or append to the `projects` array in `js/data.js`. Project cards automatically render on the page with tags, preview images, and links.
- **Update Skills**:
  Add new frontend, backend, database, or learning technologies inside the `skills` object in `js/data.js`.
- **Change Contact Details / Social Links**:
  Update `personal.email`, `personal.socials.github`, and `personal.socials.linkedin`.

---

## 🌐 Deployment Guides

### Deploying to GitHub Pages (Free & Easy)
1. Create a GitHub repository named `portfolio` (or `<your-username>.github.io`).
2. Push your files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of abdis.ink portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In GitHub, navigate to **Settings** > **Pages**.
4. Under **Branch**, select `main` and root (`/`), then click **Save**.
5. Under **Custom domain**, enter `abdis.ink` and click **Save**. Check **Enforce HTTPS**.

### Deploying to Vercel (Instant & Fast)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** and import this repository.
3. Keep default settings (Framework Preset: *Other*) and click **Deploy**.
4. Go to **Settings** > **Domains** and add `abdis.ink`.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and drag-and-drop the project folder, or connect via Git.
2. Go to **Domain management** > **Add a custom domain** and input `abdis.ink`.

---

## 🔗 Connecting Your Namecheap Domain (`abdis.ink`)

You registered the domain **abdis.ink** on Namecheap. Follow these steps to point it to your hosting provider:

### Step 1: Log in to Namecheap
1. Sign in to your [Namecheap Dashboard](https://www.namecheap.com/).
2. Go to **Domain List** and click **Manage** next to `abdis.ink`.
3. Under the **Nameservers** section, verify it is set to **Namecheap BasicDNS** (unless you are using custom Cloudflare or Vercel nameservers).

### Step 2: Open Advanced DNS
Click the **Advanced DNS** tab at the top of the page.

### Step 3: Add DNS Records According to Your Chosen Host

#### If using Vercel:
| Type | Host | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` | Automatic |
| **CNAME Record** | `www` | `cname.vercel-dns.com` | Automatic |

#### If using GitHub Pages:
| Type | Host | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` | `185.199.108.153` | Automatic |
| **A Record** | `@` | `185.199.109.153` | Automatic |
| **A Record** | `@` | `185.199.110.153` | Automatic |
| **A Record** | `@` | `185.199.111.153` | Automatic |
| **CNAME Record** | `www` | `<your-username>.github.io` | Automatic |

*(Also create a file named `CNAME` containing `abdis.ink` in your project root if using GitHub Pages).*

#### If using Netlify:
| Type | Host | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` | `75.2.60.5` | Automatic |
| **CNAME Record** | `www` | `<your-site-name>.netlify.app` | Automatic |

> [!NOTE]
> DNS changes take between 15 minutes to 24 hours to propagate globally. Once propagated, your SSL certificate (HTTPS) will be issued automatically by Vercel, Netlify, or GitHub Pages.

---

## 📄 License & Attribution
Designed and built with care for **Abdisalam Faysal Ali**. All rights reserved © 2026.

---

## 📬 Contact Form Setup

### Architecture

The HTML form posts to contact.php. JavaScript uses Fetch/FormData and JSON feedback; without JavaScript the same POST endpoint returns a plain confirmation page. All four fields are required. Failed AJAX requests retain the draft; only confirmed success clears an unchanged draft.

Requires PHP 8.1+, mbstring, OpenSSL and official phpmailer/phpmailer (Composer, pinned in composer.lock). No third-party form service. The visitor address is Reply-To; your domain mailbox is From.

### Namecheap mailbox and SMTP settings

1. Namecheap → Hosting List → Go to cPanel → Email Accounts → Create.
2. Select abdis.ink, enter username hello, choose a strong mailbox password and storage limit, then create the account.
3. Beside the account choose Connect Devices (or Set Up Mail Client).
4. Copy the secure outgoing SMTP hostname, port, encryption and full email username. The password is the mailbox password. Do not substitute Namecheap Private Email settings, which belong to a different service.
5. Do not change DNS or mail records for this setup. If the domain/account is missing, confirm its hosting configuration with Namecheap.

Official references:
- [Create a cPanel mailbox](https://www.namecheap.com/support/knowledgebase/article/110/31/how-to-create-an-email-account-in-cpanel/)
- [Shared-hosting mail settings](https://www.namecheap.com/support/knowledgebase/article.aspx/9142/2186/general-configuration-for-mail-clients-and-mobile-devices/)
- [cPanel Connect Devices](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)
- [Official PHPMailer](https://github.com/PHPMailer/PHPMailer)

### Private configuration

Deployment creates /home/abdiswyi/abdis-private/config/mail.example.php outside public_html. Confirm this existing account path against your cPanel home directory before deployment.

In File Manager, open that private config folder, copy mail.example.php to mail.php and edit the copy on the server:

| Field | Value |
| --- | --- |
| host | Exact outgoing SMTP hostname from Connect Devices |
| username | Full mailbox address |
| password | Mailbox password, entered only in this private file |
| port | Secure SMTP port shown by cPanel, as an integer |
| encryption | ssl for implicit SSL/TLS; tls for STARTTLS; match the selected port/settings |
| from_email | Created domain mailbox, normally hello@abdis.ink |
| from_name | abdis.ink |
| recipient | Verified mailbox that should receive inquiries |

The example port/encryption must be confirmed against your account. Never paste the password into chat, JavaScript, Git, README or the example. Use the most restrictive permissions supported by Namecheap/cPanel, such as 700 for private directories and 600 or 640 for mail.php where available; confirm PHP can read them.

For local development, config/mail.php is supported and ignored by Git. Apache access to config and lib is denied by their .htaccess files. PHP's built-in server does NOT honor .htaccess: bind to localhost only. Prefer an external private file through the ABDIS_MAIL_CONFIG environment variable. Never serve this repository using a static server while real PHP secrets are present.

### Deployment behavior

.cpanel.yml copies contact.php and the existing public website, and copies lib, vendor and mail.example.php into the private sibling folder. It never copies or overwrites real mail.php and never deletes server-only configuration.

Composer does not need to run on Namecheap. Install dependencies locally with:

    composer install --no-dev --prefer-dist --no-plugins --no-scripts --optimize-autoloader

Supply vendor with the release. The deployment checks vendor/autoload.php before copying anything. A Git push alone does not necessarily deploy; use the cPanel Git deployment workflow. Review this phase before committing or deploying.

### Security and behavior

Server limits: name 100, email 254, subject 150, message 5000 characters. Validation rejects missing/array values, invalid UTF-8/email, inappropriate control characters and header injection; the hidden website honeypot must be empty. User text is included only in a plain-text message and is never echoed to visitors.

An IP limiter uses a locked temporary file and hashed REMOTE_ADDR: five attempts per ten minutes, at least 30 seconds apart. Expired entries are pruned during requests. It does not trust forwarded IP headers; shared networks share limits and reverse proxies need review. Corrupt/unwritable storage fails closed. No visitor messages or credentials are logged.

No CSRF token: the public form uses no authenticated session or privileged account action. Cross-site Fetch Metadata requests are rejected, while honeypot/rate limiting address direct bots. No minimum typing-time requirement is imposed, avoiding autofill false positives.

Errors expose generic feedback only. SMTP debug is disabled. SMTP acceptance does not prove inbox delivery; verify the mailbox and spam folder. If a request times out, delivery may have occurred: wait before retrying to avoid duplicates.

### Local and live testing

A static server such as python -m http.server cannot execute PHP. Use:

    php -S localhost:8000

Tests:

    php tests/contact-validation.php
    node tests/contact-frontend.cjs
    php -l contact.php
    php -l lib/contact.php

Mailer composition tests do not send real email. Live verification requires the mailbox and private SMTP configuration: check HTTPS, submit a test inquiry, verify receipt and Reply-To, test non-JavaScript submission, verify config protection and rate limiting, and check generic failure feedback and server logs. AJAX failures retain fields; without JavaScript, use browser Back after failure to return to the draft.
