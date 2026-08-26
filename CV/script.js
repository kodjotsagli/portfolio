/**
 * PORTFOLIO PROFESSIONNEL - KODJO TSAGLI
 * Script JavaScript Vanilla : Bilingue FR/EN, Thème Sombre/Clair, 
 * Navigation interactive, Rendu dynamique depuis config.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // État global de l'application
  const state = {
    currentLang: localStorage.getItem('kt_portfolio_lang') || (navigator.language.startsWith('en') ? 'en' : 'fr'),
    currentTheme: localStorage.getItem('kt_portfolio_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  };

  // Helper pour obtenir les icônes SVG intégrées
  const SVG_ICONS = {
    'project-diagram': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"/><path d="M21 12H16.5"/></svg>`,
    'handshake': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-3-3"/><path d="m14 14 2.5 2.5"/><path d="m18 10 3 3a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0l-2.6-2.6"/><path d="M2 14h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z"/></svg>`,
    'language': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
    'clipboard-check': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/></svg>`,
    'chart-line': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 7 7 4-4 7 7"/><path d="M14 6h7v7"/></svg>`,
    'file-alt': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    'globe': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    'globe-africa': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 0 0 9.5-6.8"/><path d="M2.5 9a10 10 0 0 0 19 0"/><path d="M12 12a4 4 0 0 0 4 4"/></svg>`,
    'users': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    'translate': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
    'shield': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    'tasks': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>`,
    'comments': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    'chart-bar': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
    'laptop-code': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    'fist-raised': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    'camera': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    'compass': `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    'check': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    'envelope': `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    'phone': `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    'whatsapp': `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/></svg>`,
    'linkedin': `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    'map-marker': `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  /**
   * 1. GESTION DU THÈME SOMBRE / CLAIR
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.currentTheme = theme;
    localStorage.setItem('kt_portfolio_theme', theme);
  }

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
  applyTheme(state.currentTheme);

  /**
   * 2. MOTEUR DE TRADUCTION ET DE RENDU MULTILINGUE (FR / EN)
   */
  function renderLanguage(lang) {
    if (!PORTFOLIO_CONFIG || !PORTFOLIO_CONFIG.content[lang]) return;
    state.currentLang = lang;
    localStorage.setItem('kt_portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const data = PORTFOLIO_CONFIG.content[lang];
    const profile = PORTFOLIO_CONFIG.profile;

    // Mise à jour de l'état actif du bouton de langue
    document.querySelectorAll('.lang-opt').forEach(el => {
      if (el.getAttribute('data-lang-val') === lang) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Balises Meta & Titre de page
    document.title = data.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.meta.description);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', data.meta.keywords);
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', data.meta.title);
    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', data.meta.description);

    // Éléments avec attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n').split('.');
      let val = data;
      for (const k of keyPath) {
        if (val && val[k] !== undefined) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Hero Section
    const heroAvailability = document.getElementById('hero-availability');
    if (heroAvailability) heroAvailability.textContent = profile.availabilityBadge[lang];

    const profileImg = document.getElementById('profile-img');
    if (profileImg && profile.avatar) {
      profileImg.src = profile.avatar;
    }

    const heroCvBtn = document.getElementById('btn-hero-cv');
    const heroCvText = document.getElementById('hero-cv-text');
    if (heroCvBtn && heroCvText) {
      heroCvBtn.href = profile.cvDocuments[lang];
      heroCvText.textContent = data.hero.btnCv;
    }

    // Hero Stats
    const heroStatsContainer = document.getElementById('hero-stats');
    if (heroStatsContainer && data.hero.stats) {
      heroStatsContainer.innerHTML = data.hero.stats.map(s => `
        <div class="stat-card">
          <div class="stat-val">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('');
    }

    // About Paragraphs
    const aboutParagraphs = document.getElementById('about-paragraphs');
    if (aboutParagraphs && data.about.paragraphs) {
      aboutParagraphs.innerHTML = data.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    // About Highlights
    const aboutHighlights = document.getElementById('about-highlights');
    if (aboutHighlights && data.about.highlights) {
      aboutHighlights.innerHTML = data.about.highlights.map(h => `
        <div class="highlight-card">
          <div class="highlight-icon">
            ${SVG_ICONS[h.icon] || SVG_ICONS['globe']}
          </div>
          <div class="highlight-info">
            <h4>${h.title}</h4>
            <p>${h.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Services Grid
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && data.services.items) {
      servicesContainer.innerHTML = data.services.items.map(s => `
        <div class="service-card">
          <div class="service-icon-box">
            ${SVG_ICONS[s.icon] || SVG_ICONS['project-diagram']}
          </div>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-description">${s.description}</p>
          <div class="service-details-list">
            ${s.details.map(d => `
              <div class="service-detail-item">
                ${SVG_ICONS['check']}
                <span>${d}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    // Experience Timeline
    const experienceTimeline = document.getElementById('experience-timeline');
    if (experienceTimeline && data.experience.items) {
      experienceTimeline.innerHTML = data.experience.items.map(exp => `
        <div class="timeline-card-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content-card">
            <div class="timeline-meta-header">
              <span class="timeline-period-pill">${exp.period}</span>
              <span class="timeline-type-badge">${exp.type}</span>
            </div>
            <h3 class="timeline-job-title">${exp.title}</h3>
            <div class="timeline-company-loc">
              <span>${exp.organization}</span> • <span>${exp.location}</span>
            </div>
            <div class="timeline-achievements-list">
              ${exp.achievements.map(a => `
                <div class="timeline-achievement-item">${a}</div>
              `).join('')}
            </div>
            <div class="timeline-tags-wrap">
              ${exp.tags.map(t => `<span class="timeline-tag-chip">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Projects Grid
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && data.projects.items) {
      projectsContainer.innerHTML = data.projects.items.map(proj => `
        <div class="project-card">
          <div class="project-image-wrap">
            <img src="${proj.image}" alt="${proj.title}" class="project-image" loading="lazy">
            <span class="project-badge">${proj.badge}</span>
          </div>
          <div class="project-body">
            <div class="project-meta-row">
              <span class="project-client-name">${proj.client}</span>
              <span class="project-period">${proj.period}</span>
            </div>
            <h3 class="project-card-title">${proj.title}</h3>
            <p class="project-context-text">${proj.context}</p>
            <div class="project-details-box">
              <p><strong>${lang === 'fr' ? 'Rôle :' : 'Role:'}</strong> ${proj.role}</p>
              <p><strong>${lang === 'fr' ? 'Résultats :' : 'Key Results:'}</strong> ${proj.results}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Skills Categories
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && data.skills.categories) {
      skillsContainer.innerHTML = data.skills.categories.map(cat => `
        <div class="skill-category-card">
          <div class="skill-cat-header">
            <div class="skill-cat-icon">
              ${SVG_ICONS[cat.icon] || SVG_ICONS['tasks']}
            </div>
            <h3 class="skill-cat-title">${cat.name}</h3>
          </div>
          <div class="skill-badges-flow">
            ${cat.skills.map(sk => `
              <span class="skill-badge-item">
                ${SVG_ICONS['check']}
                ${sk}
              </span>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    // Languages Grid
    const languagesContainer = document.getElementById('languages-container');
    if (languagesContainer && data.languages.items) {
      languagesContainer.innerHTML = data.languages.items.map(l => `
        <div class="language-card">
          <div class="lang-flag-box">
            ${SVG_ICONS['translate']}
          </div>
          <h3 class="lang-name">${l.name}</h3>
          <span class="lang-level-badge">${l.badge} — ${l.level}</span>
          <p class="lang-desc-text">${l.desc}</p>
        </div>
      `).join('');
    }

    // Education & Certifications
    const degreesContainer = document.getElementById('degrees-container');
    if (degreesContainer && data.education.degrees) {
      degreesContainer.innerHTML = data.education.degrees.map(deg => `
        <div class="edu-item-card">
          <div class="edu-meta-top">
            <span class="edu-year-pill">${deg.year}</span>
            <span class="edu-institution">${deg.institution} — ${deg.location}</span>
          </div>
          <h4 class="edu-card-title">${deg.title}</h4>
          <p class="edu-card-desc">${deg.desc}</p>
        </div>
      `).join('');
    }

    const certificationsContainer = document.getElementById('certifications-container');
    if (certificationsContainer && data.education.certifications) {
      certificationsContainer.innerHTML = data.education.certifications.map(cert => `
        <div class="edu-item-card">
          <div class="edu-meta-top">
            <span class="edu-year-pill">${cert.year}</span>
            <span class="edu-badge-tag">${cert.badge}</span>
          </div>
          <h4 class="edu-card-title">${cert.title}</h4>
          <div class="edu-institution">${cert.issuer}</div>
          <p class="edu-card-desc">${cert.desc}</p>
        </div>
      `).join('');
    }

    const interestsCard = document.getElementById('interests-card');
    if (interestsCard && data.education.additional) {
      interestsCard.innerHTML = `
        <h3 class="interests-heading">${data.education.additional.title}</h3>
        <div class="interests-list">
          ${data.education.additional.items.map(it => `
            <div class="interest-item">
              <div class="interest-icon-box">
                ${SVG_ICONS[it.icon] || SVG_ICONS['shield']}
              </div>
              <div class="interest-info">
                <h4>${it.name}</h4>
                <p>${it.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Why Work With Me
    const whyMeContainer = document.getElementById('why-me-container');
    if (whyMeContainer && data.whyMe.items) {
      whyMeContainer.innerHTML = data.whyMe.items.map(item => `
        <div class="why-me-card">
          <div class="why-me-number">${item.number}</div>
          <h3 class="why-me-title">${item.title}</h3>
          <p class="why-me-desc">${item.desc}</p>
        </div>
      `).join('');
    }

    // Contact Information Cards
    const contactCardsContainer = document.getElementById('contact-info-cards');
    if (contactCardsContainer && data.contact.infoCards) {
      contactCardsContainer.innerHTML = data.contact.infoCards.map(c => `
        <a href="${c.link}" class="contact-info-card" target="_blank" rel="noopener noreferrer">
          <div class="contact-card-icon">
            ${SVG_ICONS[c.icon] || SVG_ICONS['envelope']}
          </div>
          <div class="contact-card-text">
            <span class="contact-card-title">${c.title}</span>
            <span class="contact-card-val">${c.value}</span>
          </div>
        </a>
      `).join('');
    }

    // Contact Form Placeholders & Labels
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    if (nameInput) nameInput.placeholder = data.contact.form.namePlaceholder;
    if (emailInput) emailInput.placeholder = data.contact.form.emailPlaceholder;
    if (subjectInput) subjectInput.placeholder = data.contact.form.subjectPlaceholder;
    if (messageInput) messageInput.placeholder = data.contact.form.messagePlaceholder;
  }

  // Initialisation de la langue
  renderLanguage(state.currentLang);

  // Basculer la langue au clic sur le bouton
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = state.currentLang === 'fr' ? 'en' : 'fr';
      renderLanguage(newLang);
    });
  }

  /**
   * 3. MENU NAVIGATION MOBILE
   */
  const mobileToggleBtn = document.getElementById('mobile-nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggleBtn && mainNav) {
    mobileToggleBtn.addEventListener('click', () => {
      const isExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
      mobileToggleBtn.setAttribute('aria-expanded', !isExpanded);
      mobileToggleBtn.classList.toggle('open');
      mainNav.classList.toggle('open');
    });

    // Fermer le menu lors du clic sur un lien
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggleBtn.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
      });
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) {
        mobileToggleBtn.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
      }
    });
  }

  /**
   * 4. SCROLL SPY & STICKY HEADER
   */
  const siteHeader = document.getElementById('site-header');
  const scrollTopBtn = document.getElementById('scroll-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header Réduit
    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Bouton Scroll to Top
    if (scrollTopBtn) {
      if (scrollPos > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active Nav Link Highlight (ScrollSpy)
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * 5. TRAITEMENT DU FORMULAIRE DE CONTACT
   */
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();
      const langData = PORTFOLIO_CONFIG.content[state.currentLang].contact.form;

      if (!name || !email || !subject || !message) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = state.currentLang === 'fr' 
            ? 'Veuillez remplir tous les champs obligatoires.' 
            : 'Please fill in all required fields.';
        }
        return;
      }

      // Construction du lien mailto sécurisé
      const recipient = PORTFOLIO_CONFIG.profile.email;
      const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject} - ${name}`);
      const mailtoBody = encodeURIComponent(
        `Nom: ${name}\nEmail: ${email}\nObjet: ${subject}\n\nMessage:\n${message}\n\n---\nEnvoyé depuis le portfolio professionnel de Kodjo Tsagli`
      );

      // Ouvrir le client mail
      window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = langData.success;
      }

      contactForm.reset();
    });
  }

  // Année dynamique dans le footer
  const yearPlaceholder = document.getElementById('year-placeholder');
  if (yearPlaceholder) {
    yearPlaceholder.textContent = new Date().getFullYear();
  }
});
