/**
 * Abdisalam Faysal Ali - Main Portfolio JavaScript
 * Modern, responsive interactions, theme switching, and data hydration.
 * Domain: abdis.ink
 */

document.addEventListener('DOMContentLoaded', () => {
  // Each component can fail without preventing unrelated components from starting.
  [initTheme, hydratePortfolioData, initNavigation, initScrollSpy, initContactForm, initCopyEmail]
    .forEach(initialize => {
      try {
        initialize();
      } catch (error) {
        console.error(`Unable to initialize ${initialize.name}`, error);
      }
    });
});

/* ==========================================================================
   1. THEME SWITCHER (Dark First + LocalStorage Persistence)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem('theme');
  } catch {
    // Storage may be blocked; theme switching still works for this page.
  }
  
  // Prefer stored theme, otherwise default to dark
  const activeTheme = storedTheme === 'light' ? 'light' : 'dark';
  applyTheme(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      storedTheme = nextTheme;
      try {
        localStorage.setItem('theme', nextTheme);
      } catch {
        // Keep the selected theme in memory when persistence is unavailable.
      }
    });
  }

  // Listen for system theme changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!storedTheme) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  if (theme === 'light') {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    themeToggleBtn.setAttribute('title', 'Switch to dark theme');
  } else {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    themeToggleBtn.setAttribute('title', 'Switch to light theme');
  }
}

/* ==========================================================================
   2. DATA HYDRATION (Injects from js/data.js)
   ========================================================================== */
function hydratePortfolioData() {
  if (typeof portfolioData === 'undefined') {
    console.warn('portfolioData is not defined in data.js');
    return;
  }

  // Hydrate Projects
  renderProjects(portfolioData.projects);

  // Hydrate Skills
  renderSkills(portfolioData.skills);

  // Hydrate Timeline & Education
  renderExperience(portfolioData.experience);
  renderEducation(portfolioData.education);

  // Hydrate What I'm Building Now
  renderCurrentlyBuilding(portfolioData.currentlyBuilding);
}

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container || !projects) return;

  container.innerHTML = projects.map(project => {
    let badgeClass = 'dev';
    if (project.statusType === 'live') badgeClass = 'live';
    if (project.statusType === 'university') badgeClass = 'univ';

    const techTagsHtml = project.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');
    const featuresHtml = project.features ? project.features.map(f => `<span class="feature-pill">• ${escapeHtml(f)}</span>`).join('') : '';

    const githubBtn = project.githubUrl ? `
      <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="project-btn" title="View Source Code">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        <span>View Source</span>
      </a>
    ` : '';

    const destination = project.liveUrl || project.learnMoreUrl;
    const destinationLabel = project.liveUrl ? 'Live Demo' : 'Learn More';
    const externalAttributes = destination && !destination.startsWith('#')
      ? ' target="_blank" rel="noopener noreferrer"' : '';
    const liveBtn = destination ? `
      <a href="${escapeHtml(destination)}"${externalAttributes} class="project-btn" title="${destinationLabel}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        <span>${destinationLabel}</span>
      </a>
    ` : '';

    return `
      <article class="project-card" id="project-${escapeHtml(project.id)}">
        <div class="project-preview">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} preview" loading="lazy">
        </div>
        <div class="project-body">
          <div class="project-meta-row">
            <span class="category-pill">${escapeHtml(project.category)}</span>
            <span class="status-badge ${badgeClass}">${escapeHtml(project.status)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-description">${escapeHtml(project.description)}</p>
          ${featuresHtml ? `
            <div class="project-features">
              <div class="feature-pill-list">${featuresHtml}</div>
            </div>
          ` : ''}
          <div class="tech-tags" style="margin-bottom: 20px;">
            ${techTagsHtml}
          </div>
          <div class="project-footer">
            <div class="project-links">
              ${githubBtn}
              ${liveBtn}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container || !skills) return;

  const iconSvgMap = {
    code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    server: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    database: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    tool: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    compass: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`
  };

  container.innerHTML = Object.keys(skills).map(key => {
    const group = skills[key];
    const iconSvg = iconSvgMap[group.icon] || iconSvgMap.code;
    const chipsHtml = group.items.map(item => `
      <div class="skill-chip">
        <span>${escapeHtml(item)}</span>
      </div>
    `).join('');

    return `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${iconSvg}</div>
          <h3 class="skill-cat-title">${escapeHtml(group.category)}</h3>
        </div>
        <div class="skill-items-wrap">
          ${chipsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function renderExperience(experiences) {
  const container = document.getElementById('experience-timeline');
  if (!container || !experiences) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker daryeelx-marker"></div>
      <div class="timeline-card">
        <div class="timeline-top">
          <div>
            <h4 class="timeline-role">${escapeHtml(exp.role)}</h4>
            <div class="timeline-org">${escapeHtml(exp.organization)} • <span style="color: var(--daryeelx-light);">${escapeHtml(exp.badge)}</span></div>
          </div>
          <span class="timeline-period daryeelx-period">${escapeHtml(exp.period)}</span>
        </div>
        <p class="timeline-desc">${escapeHtml(exp.description)}</p>
        ${exp.bullets ? `
          <ul class="timeline-bullets">
            ${exp.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderEducation(educations) {
  const container = document.getElementById('education-timeline');
  if (!container || !educations) return;

  container.innerHTML = educations.map(edu => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-top">
          <div>
            <h4 class="timeline-role">${escapeHtml(edu.degree)}</h4>
            <div class="timeline-org">${escapeHtml(edu.institution)}</div>
          </div>
          <span class="timeline-period">${escapeHtml(edu.period)}</span>
        </div>
        <p class="timeline-desc">${escapeHtml(edu.description)}</p>
        <div style="margin-top: 10px;">
          <span class="status-badge univ">${escapeHtml(edu.status)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCurrentlyBuilding(items) {
  const container = document.getElementById('now-building-container');
  if (!container || !items) return;

  container.innerHTML = items.map((item, index) => `
    <div class="now-card">
      <div class="now-header">
        <span class="now-number">0${index + 1}</span>
        <span class="now-badge">${escapeHtml(item.badge)}</span>
      </div>
      <h3 class="now-title">${escapeHtml(item.title)}</h3>
      <p class="now-desc">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   3. NAVIGATION (Mobile Drawer + Smooth Scrolling)
   ========================================================================== */
function initNavigation() {
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggleBtn && mobileDrawer) {
    const closedIcon = mobileToggleBtn.innerHTML;
    const desktopLayout = window.matchMedia('(min-width: 901px)');

    function setMenuOpen(isOpen) {
      mobileDrawer.classList.toggle('open', isOpen);
      mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
      mobileToggleBtn.setAttribute('aria-label', isOpen ? 'Close mobile menu' : 'Open mobile menu');
      mobileToggleBtn.innerHTML = isOpen
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
        : closedIcon;
    }

    mobileToggleBtn.addEventListener('click', () => {
      setMenuOpen(!mobileDrawer.classList.contains('open'));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        setMenuOpen(false);
        mobileToggleBtn.focus();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
        // Move keyboard focus into the selected section, not into a hidden drawer.
        const destination = document.getElementById(link.getAttribute('href').slice(1));
        if (destination) {
          destination.setAttribute('tabindex', '-1');
          destination.focus({ preventScroll: true });
        }
      });
    });

    desktopLayout.addEventListener('change', event => {
      if (!event.matches) return;
      const focusWasInMenu = mobileDrawer.contains(document.activeElement)
        || document.activeElement === mobileToggleBtn;
      setMenuOpen(false);
      if (focusWasInMenu) document.querySelector('.nav-brand')?.focus();
    });
  }

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   4. SCROLL SPY & HEADER SHADOW
   ========================================================================== */
function initScrollSpy() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = 'var(--shadow-sm)';
    } else {
      header.style.boxShadow = 'none';
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   5. CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  // Prevent implicit submission; the button explicitly prepares a local email draft.
  form.addEventListener('submit', event => event.preventDefault());
  const openEmailButton = document.getElementById('open-email-app');
  if (!openEmailButton) return;

  openEmailButton.addEventListener('click', () => {
    if (!form.reportValidity()) return;

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim() || 'Portfolio Contact from abdis.ink';
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }

    // Client email helper: open user's default email client
    const targetEmail = (typeof portfolioData !== 'undefined' && portfolioData.personal?.email) ? portfolioData.personal.email : 'hello@abdis.ink';
    const emailSubject = encodeURIComponent(`[${subject}] Message from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via portfolio abdis.ink`);

    showFeedback('Draft prepared for your email app. Send it there to deliver your message. If no app opens, copy your text and email hello@abdis.ink directly.', 'success');
    window.location.href = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;
  });

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `form-feedback ${type}`;
    setTimeout(() => {
      feedback.className = 'form-feedback';
    }, 6000);
  }
}

/* ==========================================================================
   6. COPY EMAIL UTILITY
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = (typeof portfolioData !== 'undefined' && portfolioData.personal?.email) ? portfolioData.personal.email : 'hello@abdis.ink';
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--success);"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span style="color: var(--success); font-size: 0.82rem; font-weight: 600;">Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2500);
      });
    }
  });
}

/* Utility to escape HTML and protect DOM */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

