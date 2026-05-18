(function () {
  const packTitle = document.querySelector('#packTitle');
  const packPrice = document.querySelector('#packPrice');
  const packItems = document.querySelector('#packItems');
  const heroCopy = document.querySelector('#heroCopy');
  const kitItems = document.querySelector('#kitItems');
  const affiliateNotice = document.querySelector('#affiliateNotice');
  const emptyKitHint = document.querySelector('#emptyKitHint');
  const clearKitBtn = document.querySelector('#clearKitBtn');

  if (!packTitle || !packPrice || !packItems || !kitItems || !window.VitaGuardiaKit) return;

  const params = new URLSearchParams(window.location.search);
  const people = params.get('people');

  if (people && heroCopy) {
    heroCopy.textContent = `Kit para ${people} persona${Number(people) > 1 ? 's' : ''}. Añade, quita y revisa articulos antes de abrir las tiendas externas.`;
  }

  function pluralize(total, singular, plural) {
    return total === 1 ? singular : plural;
  }

  function renderSummary(items) {
    const total = items.reduce((sum, item) => sum + Number(item.qty || 1), 0);
    const categories = new Set(items.map((item) => item.categoria).filter(Boolean));

    packTitle.textContent = 'Mi kit VitaGuardia';
    packPrice.textContent = `${total} ${pluralize(total, 'articulo', 'articulos')}`;

    const summaryItems = items.length
      ? [
          `${items.length} ${pluralize(items.length, 'producto distinto', 'productos distintos')}`,
          `${categories.size} ${pluralize(categories.size, 'categoria cubierta', 'categorias cubiertas')}`,
          'Compra final en tiendas externas'
        ]
      : ['Tu kit esta vacio', 'Añade productos desde equipamiento o el generador'];

    packItems.innerHTML = summaryItems
      .map((text) => `<li class="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2">${text}</li>`)
      .join('');
  }

  function renderEmptyKit() {
    kitItems.innerHTML = `
      <article class="rounded-xl border border-white/10 bg-white/[.03] p-5 md:col-span-2">
        <h3 class="text-xl font-black text-white">Tu kit esta vacio</h3>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-white/60">Añade articulos desde equipamiento o genera una lista base y guarda solo los productos que quieras revisar aqui.</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <a class="rounded-lg bg-survival-500 px-4 py-2 text-sm font-black text-black hover:bg-survival-300" href="equipamiento/index.html">Ir a equipamiento</a>
          <a class="rounded-lg border border-white/15 px-4 py-2 text-sm font-bold text-white/70 hover:bg-white/10" href="generador.html">Usar generador</a>
        </div>
      </article>
    `;
  }

  function renderKit() {
    const items = window.VitaGuardiaKit.read();
    renderSummary(items);

    if (emptyKitHint) emptyKitHint.classList.toggle('hidden', items.length > 0);

    if (!items.length) {
      renderEmptyKit();
      return;
    }

    kitItems.innerHTML = items.map((item) => `
      <article class="rounded-xl border border-white/10 bg-white/5 p-4">
        <div class="flex gap-3">
          ${window.getProductVisual ? window.getProductVisual(item, { compact: true }) : ''}
          <div class="min-w-0 flex-1">
            <h3 class="font-black text-white">${item.nombre}</h3>
            <p class="mt-1 text-sm text-white/55">${item.proveedor} · ${item.tierLabel || 'Consultar en tienda'}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <a class="inline-flex rounded-lg bg-survival-500 px-4 py-2 text-sm font-black text-black hover:bg-survival-300" href="${item.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon</a>
              <div class="inline-flex overflow-hidden rounded-lg border border-survival-500/45 bg-survival-500/15 text-sm font-black text-survival-300">
                <button class="px-3 py-2 hover:bg-black/20" type="button" data-decrease-kit="${item.id}" data-kit-url="${item.enlace}" aria-label="Quitar una unidad">-</button>
                <span class="border-x border-survival-500/30 px-3 py-2">x${item.qty || 1}</span>
                <button class="px-3 py-2 hover:bg-survival-500/20" type="button" data-add-kit="${item.id}" data-kit-url="${item.enlace}" aria-label="Añadir una unidad">+</button>
              </div>
              <button class="rounded-lg border border-white/15 px-4 py-2 text-sm font-bold text-white/70 hover:bg-white/10" type="button" data-remove-kit="${item.id}" data-remove-url="${item.enlace}">Quitar</button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  kitItems.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-kit]');
    const decreaseButton = event.target.closest('[data-decrease-kit]');
    const removeButton = event.target.closest('[data-remove-kit]');
    if (!addButton && !decreaseButton && !removeButton) return;

    if (addButton) {
      const product = window.VitaGuardiaKit.read().find((item) => item.id === addButton.dataset.addKit && item.enlace === addButton.dataset.kitUrl);
      if (product) window.VitaGuardiaKit.add(product);
    }

    if (decreaseButton) {
      window.VitaGuardiaKit.decrement(decreaseButton.dataset.decreaseKit, decreaseButton.dataset.kitUrl);
    }

    if (removeButton) {
      window.VitaGuardiaKit.remove(removeButton.dataset.removeKit, removeButton.dataset.removeUrl);
    }

    renderKit();
  });

  if (clearKitBtn) {
    clearKitBtn.addEventListener('click', () => {
      window.VitaGuardiaKit.clear();
      renderKit();
    });
  }

  document.addEventListener('vitaguardia:kit-updated', renderKit);
  renderKit();
  if (affiliateNotice) affiliateNotice.classList.remove('hidden');
})();
