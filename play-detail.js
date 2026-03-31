// ===== NAV =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// ===== GET PLAY FROM URL =====
const params = new URLSearchParams(window.location.search);
const playId = params.get('id');
const play = typeof playsData !== 'undefined' ? playsData.find(p => p.id === playId) : null;
const playIndex = typeof playsData !== 'undefined' ? playsData.findIndex(p => p.id === playId) : -1;

if (!play) {
  document.body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;background:#0d0a06;color:#f0ebe2;">
      <div>
        <h1 style="font-family:'Bebas Neue',sans-serif;font-size:4rem;margin:0">Play not found</h1>
        <a href="index.html#plays" style="color:#c9a84c;font-family:'DM Sans',sans-serif">← Back to all productions</a>
      </div>
    </div>`;
} else {
  renderPlay(play);
}

function renderPlay(p) {
  // Accent color
  document.documentElement.style.setProperty('--accent', p.accentColor || '#c9a84c');

  // Hero
  document.title = `${p.title} — Theater Portfolio`;
  const heroBg = document.getElementById('playHeroBg');
  if (heroBg) heroBg.style.backgroundImage = `url('${p.cover}')`;
  setText('playGenre', p.genre);
  setText('playTitle', p.title + (p.subtitle ? `<br/><em>${p.subtitle}</em>` : ''));
  setText('playYear', p.year);

  // Meta bar
  setText('metaRole', p.role);
  setText('metaLang', p.language);
  setText('metaVenue', p.venue);
  setText('metaShows', p.shows);
  setText('metaPlaywright', p.playwright);

  // Synopsis & Journey
  setHTML('playSynopsis', p.synopsis || '');
  setHTML('playJourney', p.journey || '');

  // Cast
  const castGrid = document.getElementById('castGrid');
  if (castGrid && p.cast?.length) {
    castGrid.innerHTML = p.cast.map(m => `
      <div class="cast-card">
        <span class="cast-name">${m.name}</span>
        <span class="cast-role">${m.role}</span>
      </div>`).join('');
  } else {
    document.getElementById('castSection')?.remove();
  }

  // Photos
  const photosGrid = document.getElementById('playPhotosGrid');
  if (photosGrid && p.photos?.length) {
    photosGrid.innerHTML = p.photos.map((src, i) => `
      <div class="play-photo-item" data-index="${i}">
        <img src="${src}" alt="Production photo ${i + 1}"
          onerror="this.parentElement.classList.add('placeholder-img')"/>
      </div>`).join('');

    // Lightbox for play photos
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    let currentIdx = 0;

    photosGrid.querySelectorAll('.play-photo-item').forEach((item, i) => {
      item.addEventListener('click', () => {
        currentIdx = i;
        lightboxImg.src = p.photos[i];
        lightbox.classList.add('open');
      });
    });
    lightboxClose?.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    lightboxPrev?.addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + p.photos.length) % p.photos.length;
      lightboxImg.src = p.photos[currentIdx];
    });
    lightboxNext?.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % p.photos.length;
      lightboxImg.src = p.photos[currentIdx];
    });
  } else {
    document.getElementById('photosSection')?.remove();
  }

  // Press
  const pressList = document.getElementById('playPressList');
  if (pressList && p.press?.length) {
    pressList.innerHTML = p.press.map(pr => `
      <div class="play-press-card">
        ${pr.image ? `<div class="play-press-img-wrap">
          <img src="${pr.image}" alt="Press clipping" onerror="this.parentElement.classList.add('placeholder-img')"/>
        </div>` : ''}
        <div class="play-press-text">
          <p class="play-press-source">${pr.source}</p>
          <blockquote>"${pr.quote}"</blockquote>
        </div>
      </div>`).join('');
  } else {
    document.getElementById('playPressSection')?.remove();
  }

  // Awards
  const awardsList = document.getElementById('awardsList');
  if (awardsList && p.awards?.length) {
    awardsList.innerHTML = p.awards.map(a => `
      <div class="award-item">
        <span class="award-icon">✦</span>
        <span>${a}</span>
      </div>`).join('');
  } else {
    document.getElementById('playAwardsSection')?.remove();
  }

  // Prev / Next navigation
  const prevPlay = document.getElementById('prevPlay');
  const nextPlay = document.getElementById('nextPlay');
  if (playIndex > 0) {
    prevPlay.href = `play.html?id=${playsData[playIndex - 1].id}`;
    prevPlay.textContent = `← ${playsData[playIndex - 1].title}`;
  } else {
    prevPlay.style.visibility = 'hidden';
  }
  if (playIndex < playsData.length - 1) {
    nextPlay.href = `play.html?id=${playsData[playIndex + 1].id}`;
    nextPlay.textContent = `${playsData[playIndex + 1].title} →`;
  } else {
    nextPlay.style.visibility = 'hidden';
  }

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.play-section, .cast-card, .play-photo-item, .play-press-card, .award-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}
function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}
