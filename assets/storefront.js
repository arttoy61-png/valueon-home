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
