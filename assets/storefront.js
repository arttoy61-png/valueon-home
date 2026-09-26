// Storefront-only behavior. No order, sales, authentication, or database integration.
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const shopCards = [...document.querySelectorAll('[data-category]')];
function filterProducts(category) {
  const selected = filterButtons.some(b => b.dataset.filter === category) ? category : 'ALL';
  document.querySelector('.curated-grid')?.classList.toggle('is-filtered', selected !== 'ALL');
  filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === selected)));
  shopCards.forEach(card => { card.hidden = selected !== 'ALL' && card.dataset.category !== selected; });
  const count = document.querySelector('.filter-count');
  if (count) count.textContent = `${shopCards.filter(card => !card.hidden).length}개의 상품`;
}
if (filterButtons.length) {
  filterProducts(new URLSearchParams(location.search).get('category') || 'ALL');
  filterButtons.forEach(button => button.addEventListener('click', () => filterProducts(button.dataset.filter)));
}
const selectedProduct = document.getElementById('selected-product');
if (selectedProduct) {
  const names = {'item-01':'황금 한입 고구마칩 250g','item-02':'HANBUL 헤어드라이어','item-03':'오모나 참깨강정 160g','item-04':'데일리 핸드케어 세트','item-05':'소프트 노트 & 펜 세트','item-06':'펫 다이닝 보울 세트'};
  const id = new URLSearchParams(location.search).get('product');
  if (Object.hasOwn(names, id)) {
    selectedProduct.hidden = false;
    document.getElementById('selected-product-name').textContent = names[id];
    document.getElementById('selected-product-link').href = `../product/${id}/`;
  }
}


// Homepage hero carousel
const heroCarousel = document.querySelector('[data-hero-carousel]');
if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll('[data-hero-slide]')];
  const dots = [...heroCarousel.querySelectorAll('[data-hero-dot]')];
  const prev = heroCarousel.querySelector('.hero-prev');
  const next = heroCarousel.querySelector('.hero-next-btn');
  let current = 0;
  let timer = null;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const showHero = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  };
  const stopHero = () => { if (timer) { clearInterval(timer); timer = null; } };
  const startHero = () => {
    stopHero();
    if (!reduceMotion && slides.length > 1) timer = setInterval(() => showHero(current + 1), 5000);
  };

  prev?.addEventListener('click', () => { showHero(current - 1); startHero(); });
  next?.addEventListener('click', () => { showHero(current + 1); startHero(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { showHero(i); startHero(); }));
  heroCarousel.addEventListener('mouseenter', stopHero);
  heroCarousel.addEventListener('mouseleave', startHero);
  heroCarousel.addEventListener('focusin', stopHero);
  heroCarousel.addEventListener('focusout', startHero);
  startHero();
}
