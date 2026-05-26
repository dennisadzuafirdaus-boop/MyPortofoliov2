/* ============================================================
   PORTFOLIO — script.js
   Pure Vanilla JavaScript. No framework.
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────
   DATA — ubah sesuai profil kamu
───────────────────────────────────────── */
const DATA = {
  name:    'Dennis Adzua.',
  tagline: 'Junior Web Developer.',
  badge:   'Tersedia untuk Project Baru',
  sub:     'Junior Web Developer spesialis Laravel. Membangun dashboard admin, e-commerce, dan landing page yang cepat, rapi, dan modern.',
  stack:   ['PHP', 'Laravel','MySQL', 'Bootsrap', 'Laragon'],
  cvLink:  'img/resume2026.pdf',   // ganti dengan link CV kamu

  stats: [
    // { num: '1+',  label: 'Tahun Pengalaman' },
    { num: '3+', label: 'Project Selesai' },
    // { num: '15+', label: 'Klien Puas' },
    { num: '100%',label: 'Komitmen' },
  ],

  about: {
    expYears: 3,
    desc: 'Saya adalah fullstack web developer yang berfokus pada Laravel. Saya senang membangun dashboard admin yang powerful, aplikasi e-commerce yang mulus, dan landing page yang memikat. Setiap baris kode saya tulis dengan tujuan memberikan pengalaman terbaik bagi pengguna.',
    items: [
      { icon:'📍', label:'Lokasi',     value:'Indonesia' },
      { icon:'🎓', label:'Pendidikan', value:'Informatika / Ilmu Komputer' },
      { icon:'💼', label:'Status',     value:'Freelance & Open for Work' },
      { icon:'🛠', label:'Spesialis',  value:'Laravel,MySQL, Reactjs'},
    ],
  },

  projects: [
    {
      title: 'Dashboard Admin POS',  year: '2025', type: 'Web App',
      desc:  'Sistem Point of Sale lengkap dengan manajemen stok, laporan penjualan, dan multi-kasir. Dibangun dengan Laravel12 di lengkapi sweetalert untuk notifikasi interaktif, juga tampilan menggunakan dashboard adminlte.',
      tags:  ['Laravel','vite.js','MySQL','Bootsrap'],
      image: 'img/pos.png',
      demo:  '#', repo: '#',
    },
    {
      title: 'E-Commerce Platform',  year: '2025', type: 'E-Commerce',
      desc:  'Platform belanja online lengkap dengan keranjang, payment gateway Midtrans, manajemen produk, dan panel admin. Platform ini sedang dikembangkan.',
      tags:  ['Laravel','Midtrans','MySQL'],
      image: 'img/ecommers.png',
      demo:  '#', repo: '#',
    },
    {
      title: 'Sistem Pakar',  year: '2025', type: 'Aplikasi',
      desc:  'Aplikasi sistem pakar untuk diagnosis penyakit ibu hamil berbasis dekstop secara otomatis menggunakan bahasa pemrograman java, aplikasi ini',
      tags:  ['Netbeans','MySQL'],
      image: 'img/appsistempakar.png',
      demo:  '#', repo: '#',
    },
    {
      title: 'Company Profile', year: '2026', type: 'Web App',
      desc:  'Landing page ini untuk club neval yang di dalamnya ada penjelasan tentang dokumentasi latihan dan kontak untuk mendaftar club',
      tags:  ['React.Js','Bootstrap'],
      image: 'img/nevalvc.png',
      demo:  'https://neval-vc.vercel.app/', repo: '#',
    },
    {
      title: 'Company Profile', year: '2025', type: 'Web App',
      desc:  'Sebuah landing page untuk melihat tentang kampus kita, jurusan apa saja yang paling top dan rekomended dan juga bisa ngelihat pekerjaan yang berhubungan dengan jurusan',
      tags:  ['HTML','Javascript','css'],
      image: 'img/ubp.png',
      demo:  'https://ubp-bogor.vercel.app/', repo: '#',
    },
  ],

  skills: [
    { icon:'🐘', name:'PHP',           level:'expert' },
    { icon:'🔴', name:'Laravel',       level:'expert' },
    { icon:'🗄',  name:'MySQL',         level:'expert' },
    { icon:'🎨', name:'Bootsrap',      level:'expert' },
    { icon:'🟡', name:'JavaScript',    level:'advanced' },
    { icon:'⚡', name:'Vite',          level:'advanced' },
    { icon:'🐙', name:'Git & GitHub',  level:'advanced' },
    { icon:'🟠', name:'HTML5',         level:'expert' },
    { icon:'🔷', name:'CSS3',          level:'expert' },
    { icon:'🌐', name:'Laragon',       level:'expert' },
    { icon:'🎭', name:'Figma',         level:'intermediate' },
  ],

  contact: {
    desc:  'Butuh website profesional? Dashboard admin? E-commerce? Atau sekedar ingin konsultasi? Yuk ngobrol — saya siap membantu mewujudkan project kamu!',
    email: 'dennisadzuafirdaus@gmail.com',
    phone: '+62 858-1049-7177',
    wa:    'https://wa.me/6285810497177',
    location: 'Indonesia (Remote Available)',
    socials: [
      { icon:'💼', label:'LinkedIn',  href:'https://www.linkedin.com/in/dennis-adzua-firdaus-22b4a3322/' },
      { icon:'🐙', label:'GitHub',    href:'https://github.com/dennisadzuafirdaus-boop' },
      { icon:'📸', label:'Instagram', href:'https://www.instagram.com/adzuaaa' },
    ],
  },
};

/* ─────────────────────────────────────────
   RENDER HELPERS
───────────────────────────────────────── */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const html = (tag, cls, inner='') => `<${tag} class="${cls}">${inner}</${tag}>`;

/* ─────────────────────────────────────────
   BUILD DOM
───────────────────────────────────────── */
function buildPage() {
  buildNav();
  buildHero();
  buildStats();
  buildAbout();
  buildProjects();
  buildSkills();
  buildContact();
  buildFooter();
}

/* ── NAV ── */
function buildNav() {
  $('#nav-logo').textContent = DATA.name;
  // nav links already in HTML template; skip dynamic build
}

/* ── HERO ── */
function buildHero() {
  $('#hero-badge-txt').textContent = DATA.badge;
  $('#hero-sub').textContent = DATA.sub;
  // Stack pills
  const row = $('#stack-row');
  DATA.stack.forEach(s => {
    const span = document.createElement('span');
    span.className = 'pill'; span.textContent = s;
    row.appendChild(span);
  });
  // CV link
  const cvBtn = $('#cv-btn');
  if (cvBtn) cvBtn.href = DATA.cvLink;
}

/* ── STATS ── */
function buildStats() {
  const row = $('#stats-row');
  if (!row) return;
  DATA.stats.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'stat-item';
    div.innerHTML = `<div class="stat-num" data-target="${s.num}">${s.num}</div><div class="stat-label">${s.label}</div>`;
    row.appendChild(div);
    if (i < DATA.stats.length - 1) {
      const dv = document.createElement('div');
      dv.className = 'stat-divider'; row.appendChild(dv);
    }
  });
}

/* ── ABOUT ── */
function buildAbout() {
  const desc = $('#about-desc');
  if (desc) desc.textContent = DATA.about.desc;
  const expBadge = $('#exp-num');
  if (expBadge) expBadge.textContent = DATA.about.expYears + '+';
  const list = $('#about-items');
  if (!list) return;
  DATA.about.items.forEach(it => {
    list.innerHTML += `
      <div class="aitem">
        <span class="aitem-icon">${it.icon}</span>
        <div>
          <div class="aitem-label">${it.label}</div>
          <div class="aitem-val">${it.value}</div>
        </div>
      </div>`;
  });
}

/* ── PROJECTS ── */
function buildProjects() {
  const grid = $('#projects-grid');
  if (!grid) return;
  DATA.projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pcard reveal';
    card.style.transitionDelay = (i * 0.1) + 's';
    card.innerHTML = `
      <div class="pcard-thumb">
        <img src="${p.image}" alt="${p.title}" class="pcard-img">
      </div>
      <div class="pcard-body">
        <div class="pcard-top">
          <div class="pcard-title">${p.title}</div>
          <div class="pcard-year">${p.year}</div>
        </div>
        <p class="pcard-desc">${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag-item">${t}</span>`).join('')}</div>
        <div class="pcard-footer">
          <span class="pcard-type">${p.type}</span>
          <div class="pcard-links">
            <a href="${p.demo}" class="pcard-btn demo" target="_blank">Demo</a>
            <a href="${p.repo}" class="pcard-btn" target="_blank">GitHub</a>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── SKILLS ── */
function buildSkills() {
  const wrap = $('#skills-wrap');
  if (!wrap) return;
  DATA.skills.forEach((sk, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.transitionDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <span class="skill-icon">${sk.icon}</span>
      <span class="skill-name">${sk.name}</span>
      <span class="skill-level level-${sk.level}">${sk.level}</span>`;
    wrap.appendChild(card);
  });
}

/* ── CONTACT ── */
function buildContact() {
  const el = id => document.getElementById(id);
  if (el('contact-desc')) el('contact-desc').textContent = DATA.contact.desc;
  if (el('contact-email')) el('contact-email').textContent = DATA.contact.email;
  if (el('contact-phone')) el('contact-phone').textContent = DATA.contact.phone;
  if (el('contact-location')) el('contact-location').textContent = DATA.contact.location;
  if (el('wa-btn')) el('wa-btn').href = DATA.contact.wa;

  const socials = $('#socials');
  if (socials) {
    DATA.contact.socials.forEach(s => {
      socials.innerHTML += `<a href="${s.href}" class="soc-btn" title="${s.label}">${s.icon}</a>`;
    });
  }
}

/* ── FOOTER ── */
function buildFooter() {
  const logo = $('#footer-logo');
  if (logo) logo.innerHTML = DATA.name + '<span style="color:var(--a3)">.</span>';
}

/* ─────────────────────────────────────────
   NAVBAR — scroll & active section
───────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  const sections = ['hero','about','projects','skills','contact'];
  const links = $$('.nav-link');

  function onScroll() {
    // scrolled class
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // active link
    let active = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 130) active = id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.dataset.section === active);
    });
    // reveal
    revealOnScroll();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────── */
function initMobileNav() {
  const menu   = $('#mobile-nav');
  const open   = $('#hamburger');
  const close  = $('#close-nav');
  if (!menu || !open) return;

  open.addEventListener('click', () => menu.classList.add('open'));
  close.addEventListener('click', () => menu.classList.remove('open'));
  $$('.mnav-link').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open')));
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function revealOnScroll() {
  $$('.reveal, .reveal-l, .reveal-r').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80)
      el.classList.add('visible');
  });
}

/* ─────────────────────────────────────────
   CODE TYPEWRITER (hero)
───────────────────────────────────────── */
function initTypewriter() {
  const lines = [
    `<span class="cm">// portfolio.js — Web Developer</span>`,
    `<span class="kw">const</span> <span class="fn">developer</span> = {`,
    `  name: <span class="st">"Web Developer"</span>,`,
    `  stack: [<span class="st">"Laravel"</span>, <span class="st">"Vue.js"</span>],`,
    `  database: <span class="st">"MySQL"</span>,`,
    `  env: <span class="st">"Laragon"</span>,`,
    `  passion: <span class="st">"Build cool things"</span>,`,
    `  available: <span class="cl">true</span>`,
    `}`,
  ];
  const container = $('#code-lines');
  if (!container) return;
  let i = 0;
  function addLine() {
    if (i >= lines.length) return;
    const span = document.createElement('span');
    span.className = 'code-line';
    span.innerHTML = lines[i++];
    container.appendChild(span);
    setTimeout(addLine, 220);
  }
  setTimeout(addLine, 800);
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const project = document.getElementById('project').value;
  const message = document.getElementById('message').value;

  const text = `Hai Kak Dennis\nSaya *${name}*\nEmail saya *${email}*\nSaya mau konsultasi pembuatan website *${project}*\n\n*${message}*`;
  const url = "https://api.whatsapp.com/send?phone=6285810497177&text=" + encodeURIComponent(text);

  // Ambil elemen dulu sebelum dipakai
  const toast = document.getElementById('toast');
  const form = document.getElementById('contact-form');

  if (toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  form.reset();
  window.open(url, '_blank');
}


/* ─────────────────────────────────────────
   BACK TO TOP
───────────────────────────────────────── */
function initBackTop() {
  const btn = $('#back-top');
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─────────────────────────────────────────
   CURSOR GLOW (optional effect)
───────────────────────────────────────── */
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  Object.assign(glow.style, {
    position:'fixed', width:'300px', height:'300px', borderRadius:'50%',
    background:'radial-gradient(circle, rgba(124,109,255,.06) 0%, transparent 70%)',
    pointerEvents:'none', zIndex:'0', transform:'translate(-50%,-50%)',
    transition:'left .08s linear, top .08s linear',
    left:'-999px', top:'-999px',
  });
  document.body.appendChild(glow);
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

/* ─────────────────────────────────────────
   HERO COUNTER ANIMATION
───────────────────────────────────────── */
function initCounters() {
  const nums = $$('.stat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.dataset.target || el.textContent;
      const suffix = raw.replace(/[0-9]/g, '');
      const target = parseInt(raw) || 0;
      let current = 0;
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => { n.dataset.target = n.textContent; observer.observe(n); });
}

/* ─────────────────────────────────────────
   FLOATING BADGES parallax-lite
───────────────────────────────────────── */
function initParallaxBadges() {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    $$('.floating-badge').forEach((b, i) => {
      b.style.transform = `translateY(${Math.sin(y * .003 + i) * 12}px)`;
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildPage();
  initNavbar();
  initMobileNav();
  initTypewriter();
  initForm();
  initBackTop();
  initCursorGlow();
  initCounters();
  initParallaxBadges();
  revealOnScroll();
});
