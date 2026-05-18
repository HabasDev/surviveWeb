(function () {
  const packTitle = document.querySelector('#packTitle');
  const packPrice = document.querySelector('#packPrice');
  const packItems = document.querySelector('#packItems');
  const heroCopy = document.querySelector('#heroCopy');
  const essentialProducts = document.querySelector('#essentialProducts');
  const recommendedProducts = document.querySelector('#recommendedProducts');
  const affiliateNotice = document.querySelector('#affiliateNotice');

  if (!packTitle || !packPrice || !packItems || !heroCopy || !essentialProducts || !recommendedProducts) return;

  const params = new URLSearchParams(window.location.search);
  const budget = params.get('budget') || 'medium';
  const people = params.get('people');
  const zone = params.get('zone') || 'city';
  const products = window.getRecommendedProducts
    ? window.getRecommendedProducts({ budget, zone })
    : [];
  const essentials = products.filter((product) => ['agua', 'luz', 'botiquin', 'mochila'].includes(product.categoria));
  const recommended = products.filter((product) => !essentials.includes(product));

  packTitle.textContent = 'Tu kit VitaGuardia recomendado';
  packPrice.textContent = 'Consultar en tienda';
  packItems.innerHTML = products.map((product) => `<li class="rounded-xl border border-white/10 bg-white/5 p-3">${product.nombre}</li>`).join('');

  if (people) {
    heroCopy.textContent = `Lista recomendada para ${people} persona${Number(people) > 1 ? 's' : ''}. Cubre lo esencial y deja margen para ajustar agua, comida y necesidades personales.`;
  }

  const renderProduct = (product, index) => `
    <article class="rounded-xl border border-white/10 bg-white/5 p-4">
      <div class="flex gap-3">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-survival-500 text-xs font-black text-black">${index + 1}</span>
        <div class="min-w-0 flex-1">
          <h3 class="font-black text-white">${product.nombre}</h3>
          <p class="mt-1 text-sm text-white/55">${product.proveedor} · ${product.tierLabel || 'Consultar en tienda'}</p>
          <a class="mt-3 inline-flex rounded-lg bg-survival-500 px-4 py-2 text-sm font-black text-black hover:bg-survival-300" href="${product.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver oferta disponible</a>
        </div>
      </div>
    </article>
  `;

  essentialProducts.innerHTML = essentials.map(renderProduct).join('');
  recommendedProducts.innerHTML = recommended.map(renderProduct).join('');
  if (affiliateNotice) affiliateNotice.classList.remove('hidden');
})();
