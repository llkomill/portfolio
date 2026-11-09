// ВСЯ ИНФОРМАЦИЯ САЙТА — В ЭТОМ БЛОКЕ.
// Пустые кавычки у работы или контакта означают «пока не заполнено».
const SITE = {
  name: 'Комил Умаров',
  status: 'Открыт для новых проектов',
  headline: ['Создаю сайты,', 'которые работают', 'на ваш бизнес'],
  sub: '',
  // preview: 'live' — живой сайт, 'phone' — обложка с телефоном, 'Ü' или другой знак — обложка
  works: [
    { name: 'dex.tj', title: 'Deutsch Extra Dushanbe', type: 'Корпоративный сайт', url: 'https://dex.tj', preview: 'live' },
    { name: 'umlaut.dex.tj', title: 'Подготовка к telc B1/B2', type: 'Платформа', url: 'https://umlaut.dex.tj', preview: 'Ü' },
    { name: 'DEX App', host: 'dex.tj/appdex', title: 'Немецкий язык по карточкам', type: 'Мобильное приложение', url: 'https://dex.tj/appdex.html?v=2', preview: 'phone', mobileOnly: true },
    { name: 'anaesth.tj', title: 'Ассоциация анестезиологов-реаниматологов', type: 'Сайт организации', url: 'https://www.anaesth.tj', preview: 'live' },
  ],
  tech: [
    { name: 'Фронтенд', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'React Router', 'Tailwind'] },
    { name: 'Бэкенд и базы данных', items: ['PHP', 'MySQL'] },
    { name: 'В изучении', items: ['Java'], learning: true },
  ],
  services: [
    { key: 'landing', name: 'Лендинги', text: 'Одна страница для услуги, продукта или рекламы.' },
    { key: 'corporate', name: 'Корпоративные сайты', text: 'Полноценная презентация компании.' },
    { key: 'catalog', name: 'Каталоги', text: 'Товары и услуги с поиском и фильтрами.' },
    { key: 'store', name: 'Интернет-магазины', text: 'Корзина, заказы и уведомления.' },
    { key: 'platform', name: 'Платформы', text: 'Личные кабинеты, роли и интеграции.' },
  ],
  contacts: [
    { icon: 'telegram', value: '@llkomill', url: 'https://t.me/llkomill' },
    { icon: 'whatsapp', value: '+992987916575', url: 'https://wa.me/992987916575' },
    { icon: 'mail', value: 'olimovih.ku@gmail.com', url: 'mailto:olimovih.ku@gmail.com' },
  ],
};

document.documentElement.classList.add('js');
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const arrow = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8"/></svg>';

// Заполняем страницу
document.title = `${SITE.name}: портфолио`;
$$('[data-name]').forEach((e) => { e.textContent = SITE.name; });
$('#status').textContent = SITE.status;
$('#sub').textContent = SITE.sub;
$('#year').textContent = new Date().getFullYear();
$('#headline').innerHTML = SITE.headline.map((t, i) => `<span class="ln"><i style="--i:${i}">${t}</i></span>`).join('');
$('#tech-list').innerHTML = SITE.tech.map((g) => `
  <div class="t-group rv"><h3>${g.name}</h3><ul class="${g.learning ? 'learning' : ''}">${g.items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`).join('');

function preview(w) {
  if (w.preview === 'live') return `<iframe data-src="${w.url}" title="Превью сайта ${w.name}" tabindex="-1" loading="lazy" aria-hidden="true"></iframe>`;
  if (w.preview === 'phone') return '<div class="phone" aria-hidden="true"><div><b>DEX</b><i></i><i></i><i></i></div></div>';
  if (w.preview) return `<div class="glyph" aria-hidden="true">${w.preview}</div>`;
  return '<div class="skel" aria-hidden="true"><i></i><i></i><i></i><i></i></div>';
}
$('#stack').innerHTML = SITE.works.map((w, i) => `
  <article class="card" style="--i:${i}"><div class="card-in">
    <div class="c-text">
      <div class="c-type">${w.type}</div>
      <h3>${w.name}</h3>
      <p class="c-title">${w.title}</p>
      <div class="c-bottom">${w.url
        ? `<a class="btn" href="${w.url}" target="_blank" rel="noopener">${w.mobileOnly ? 'Открыть приложение' : 'Открыть сайт'} ${arrow}</a>${w.mobileOnly ? '<p class="c-note">Открывается только на телефоне или планшете</p>' : ''}`
        : '<span class="soon">Ссылка появится позже</span>'}</div>
    </div>
    <div class="frame"><div class="bar"><i></i><i></i><i></i><span>${w.host || w.name}</span></div><div class="view">${preview(w)}</div></div>
  </div></article>`).join('');

const box = (x, y, w, h, c = '') => `<rect ${c ? `class="${c}"` : ''} x="${x}" y="${y}" width="${w}" height="${h}" rx="2"/>`;
const icons = {
  landing: box(1, 1, 98, 70) + box(10, 12, 80, 22, 'f') + box(10, 42, 24, 20) + box(38, 42, 24, 20) + box(66, 42, 24, 20),
  corporate: box(36, 1, 28, 22) + '<path d="M50 23v9M14 42v-10h72v10M50 32v10"/>' + box(1, 42, 26, 22) + box(37, 42, 26, 22, 'f') + box(73, 42, 26, 22),
  catalog: box(1, 1, 98, 70) + box(10, 10, 56, 8, 'f') + [10, 38, 66].map((x) => box(x, 26, 24, 16) + box(x, 47, 24, 16)).join(''),
  store: box(1, 1, 98, 70) + [10, 53].map((x) => box(x, 11, 37, 20) + box(x, 36, 37, 16)).join('') + box(10, 58, 80, 7, 'f'),
  platform: box(1, 1, 98, 70) + '<path d="M26 1v70"/>' + [10, 20, 30].map((y) => box(7, y, 13, 4, 'f')).join('') + box(34, 10, 57, 18) + [36, 46, 56].map((y) => box(34, y, 57, 5, 'f')).join(''),
};
$('#bento').innerHTML = SITE.services.map((s) => `
  <div class="tile rv"><svg viewBox="0 0 100 72" aria-hidden="true">${icons[s.key]}</svg><div><h3>${s.name}</h3><p>${s.text}</p></div></div>`).join('');

const contactIcons = {
  telegram: { label: 'Telegram', svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#fff"/><path fill="#26A5E4" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' },
  whatsapp: { label: 'WhatsApp', svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>' },
  mail: { label: 'Почта', svg: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#C9A86A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4.5" width="20" height="15" rx="2.5"/><path d="m3 6.5 9 7 9-7"/></svg>' },
};
$('#contact-list').innerHTML = SITE.contacts.map((c) => {
  const icon = contactIcons[c.icon];
  const external = /^https?:/.test(c.url) ? ' target="_blank" rel="noopener"' : '';
  return `<a class="c-row" href="${c.url}"${external} aria-label="${icon.label}: ${c.value}">${icon.svg}<span>${c.value}</span></a>`;
}).join('');

// Живое превью: сайт масштабируется под размер окошка и грузится при подходе
function fitFrames() {
  $$('.view iframe').forEach((f) => {
    const v = f.parentElement;
    const k = v.clientWidth / 1440;
    f.style.transform = `scale(${k})`;
    f.style.height = `${v.clientHeight / k}px`;
  });
}
fitFrames();
const frameLoader = new IntersectionObserver((items) => items.forEach((item) => {
  if (item.isIntersecting) {
    item.target.addEventListener('load', () => item.target.classList.add('ready'), { once: true });
    item.target.src = item.target.dataset.src;
    frameLoader.unobserve(item.target);
  }
}), { rootMargin: '400px' });
$$('.view iframe').forEach((f) => frameLoader.observe(f));

// Подсветка плитки услуг за курсором
$('#bento').addEventListener('pointermove', (e) => {
  const tile = e.target.closest('.tile');
  if (!tile) return;
  const r = tile.getBoundingClientRect();
  tile.style.setProperty('--x', `${e.clientX - r.left}px`);
  tile.style.setProperty('--y', `${e.clientY - r.top}px`);
});

// Появление блоков
const seen = new IntersectionObserver((items) => items.forEach((item) => {
  if (item.isIntersecting) { item.target.classList.add('in'); seen.unobserve(item.target); }
}), { threshold: 0.12 });
$$('.rv').forEach((e) => seen.observe(e));

// Прокрутка: карточки уходят назад
const cards = $$('.card');
let ticking = false;
function onScroll() {
  ticking = false;
  const sticky = window.getComputedStyle(cards[0]).position === 'sticky';
  cards.forEach((c, i) => {
    const inner = c.firstElementChild;
    const next = cards[i + 1];
    if (!sticky || !next) { inner.style.transform = ''; return; }
    const height = inner.offsetHeight;
    const p = Math.max(0, Math.min(1, 1 - (next.getBoundingClientRect().top - c.getBoundingClientRect().top) / height));
    inner.style.transform = `scale(${1 - p * 0.05})`;
  });
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
window.addEventListener('resize', () => { fitFrames(); onScroll(); });
onScroll();

// Рельеф гор на первом экране, поднимается под курсором
(function terrain() {
  const canvas = $('#terrain');
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  let W = 0; let H = 0; let visible = true;
  const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth; H = hero.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const ridge = (x, r, t) => 1 - Math.abs(Math.sin(x * 0.0052 + r * 0.31 + t * 0.32));

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const rows = W < 700 ? 30 : 46;
    const step = W < 700 ? 9 : 7;
    const wide = W >= 860;
    for (let r = 0; r < rows; r += 1) {
      const d = r / (rows - 1);
      const base = H * (0.5 + 0.56 * Math.pow(d, 1.7));
      const amp = 16 + 150 * d;
      ctx.beginPath();
      ctx.moveTo(-10, H + 10);
      for (let x = -10; x <= W + 10; x += step) {
        const env = wide ? 0.1 + 0.9 * smooth(W * 0.22, W * 0.74, x) : 0.75;
        const wave = ridge(x, r, t) * 0.62 + (Math.sin(x * 0.0135 - r * 0.22 + t * 0.21) + 1) * 0.16 + (Math.sin(x * 0.034 + r * 0.74 - t * 0.4) + 1) * 0.05;
        const dx = x - mouse.x; const dy = base - mouse.y;
        const lift = Math.exp(-(dx * dx + dy * dy * 2.4) / 24000) * 70 * (0.4 + d);
        ctx.lineTo(x, base - wave * amp * env - lift);
      }
      ctx.lineTo(W + 10, H + 10);
      ctx.closePath();
      ctx.fillStyle = '#0B0C0F';
      ctx.fill();
      const alpha = 0.1 + 0.62 * d;
      ctx.strokeStyle = `rgba(${201 + 36 * (1 - d) | 0},${168 + 64 * (1 - d) | 0},${106 + 117 * (1 - d) | 0},${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
  function frame(now) {
    if (visible) {
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      draw(now / 1000);
    }
    requestAnimationFrame(frame);
  }
  size();
  window.addEventListener('resize', () => { size(); if (calm) draw(0); });
  if (calm) { draw(0); return; }
  hero.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    if (mouse.tx < -999) { mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; }
    mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top;
  });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(hero);
  requestAnimationFrame(frame);
})();
