// ===== CURTAIN ANIMATION =====
window.addEventListener('load', () => {
  const curtain = document.getElementById('curtain');
  if (curtain) {
    setTimeout(() => curtain.classList.add('open'), 300);
    setTimeout(() => curtain.style.display = 'none', 1800);
  }
});

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ===== PLAYS GRID =====
function renderPlaysGrid() {
  const grid = document.getElementById('playsGrid');
  if (!grid || typeof playsData === 'undefined') return;

  grid.innerHTML = playsData.map((play, i) => `
    <article class="play-card" style="animation-delay:${i * 0.1}s" onclick="window.location='play.html?id=${play.id}'">
      <div class="play-card-img-wrap">
        <img src="${play.cover}" alt="${play.title}" class="play-card-img"
          onerror="this.parentElement.classList.add('placeholder-img')"/>
        <div class="play-card-overlay">
          <span class="play-card-view">View Production →</span>
        </div>
      </div>
      <div class="play-card-body">
        <span class="play-card-genre">${play.genre}</span>
        <h3 class="play-card-title">${play.title}</h3>
        <p class="play-card-year">${play.year} · ${play.role}</p>
        <p class="play-card-teaser">${play.teaser}</p>
      </div>
    </article>
  `).join('');
}
renderPlaysGrid();

// ===== GALLERY LIGHTBOX =====
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentGalleryIdx = 0;
const galleryImgs = [...galleryItems];

galleryImgs.forEach((img, i) => {
  img.parentElement.style.cursor = 'pointer';
  img.parentElement.addEventListener('click', () => openLightbox(i));
});

function openLightbox(i) {
  currentGalleryIdx = i;
  lightboxImg.src = galleryImgs[i].src;
  lightbox?.classList.add('open');
}
lightboxClose?.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
lightboxPrev?.addEventListener('click', () => {
  currentGalleryIdx = (currentGalleryIdx - 1 + galleryImgs.length) % galleryImgs.length;
  lightboxImg.src = galleryImgs[currentGalleryIdx].src;
});
lightboxNext?.addEventListener('click', () => {
  currentGalleryIdx = (currentGalleryIdx + 1) % galleryImgs.length;
  lightboxImg.src = galleryImgs[currentGalleryIdx].src;
});

// ===== PRESS TABS =====
document.querySelectorAll('.press-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.press-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.press-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab)?.classList.add('active');
  });
});

// ===== CONTACT FORM =====
// ===== CONTACT FORM =====
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  const btn = this.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  // Hide previous messages
  success.style.display = 'none';
  error.style.display = 'none';
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const data = {
    name:    document.getElementById('fname').value,
    email:   document.getElementById('femail').value,
    subject: document.getElementById('fsubject').value,
    message: document.getElementById('fmessage').value,
  };

  try {
    const res = await fetch('https://formspree.io/f/mgopyrnl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      success.style.display = 'block';
      this.reset();
    } else {
      error.style.display = 'block';
    }
  } catch (err) {
    error.style.display = 'block';
  }

  btn.textContent = 'Send Message';
  btn.disabled = false;
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.12 });
document.querySelectorAll('.timeline-item, .play-card, .gallery-item, .press-card, .quote-card, .stat').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
