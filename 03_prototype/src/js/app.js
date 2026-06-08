async function loadProducts() {
  const response = await fetch('src/data/products.json');
  if (!response.ok) throw new Error('Could not load products.json');
  return response.json();
}

function createProductCard(product) {
  const encodedTitle = encodeURIComponent(product.title);
  const whatsappText = encodeURIComponent(`Hello Manolis, I saw this piece on your website: "${product.title}". Is this or something similar available for shipping?`);

  return `
    <article class="product-card" data-category="${product.category}">
      <img src="${product.image}" alt="${product.alt}" />
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>${product.availability}</strong></p>
        <a class="button" href="https://wa.me/0000000000?text=${whatsappText}" target="_blank" rel="noopener">Ask about this piece</a>
      </div>
    </article>
  `;
}

function renderProducts(container, products) {
  container.innerHTML = products.map(createProductCard).join('');
}

function setupCategoryFilters(products) {
  const gallery = document.querySelector('#product-gallery');
  const filters = document.querySelectorAll('[data-category]');
  if (!gallery || !filters.length) return;

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      const filtered = category === 'All'
        ? products
        : products.filter((product) => product.category === category);
      renderProducts(gallery, filtered);
    });
  });
}

loadProducts()
  .then((products) => {
    const featured = document.querySelector('#featured-products');
    const gallery = document.querySelector('#product-gallery');

    if (featured) renderProducts(featured, products.slice(0, 3));
    if (gallery) renderProducts(gallery, products);

    setupCategoryFilters(products);
  })
  .catch((error) => {
    console.warn(error);
  });
