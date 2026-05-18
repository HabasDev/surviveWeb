(function () {
  const form = document.querySelector('#kitForm');
  const result = document.querySelector('#result');
  const summary = document.querySelector('#summary');
  const saleLink = document.querySelector('#saleLink');
  const copyBtn = document.querySelector('#copyBtn');

  if (!form || !result || !summary || !saleLink || !copyBtn) return;

  const labels = {
    budget: { basic: 'basico', medium: 'medio', pro: 'completo' },
    zone: { city: 'ciudad', town: 'pueblo', rural: 'zona rural', coast: 'costa' }
  };

  let currentList = [];
  let currentProducts = [];

  function getKitQty(product) {
    return window.VitaGuardiaKit ? window.VitaGuardiaKit.quantity(product) : 0;
  }

  function renderKitButton(product) {
    const qty = getKitQty(product);
    if (qty < 1) {
      return `<button class="rounded-lg bg-survival-500 px-3 py-2 text-sm font-black text-black hover:bg-survival-300" type="button" data-add-kit="${product.id}">Añadir a mi kit</button>`;
    }

    return `
      <div class="inline-flex overflow-hidden rounded-lg border border-survival-500/45 bg-survival-500/15 text-sm font-black text-survival-300">
        <button class="px-3 py-2 hover:bg-black/20" type="button" data-decrease-kit="${product.id}" aria-label="Quitar una unidad">-</button>
        <span class="border-x border-survival-500/30 px-3 py-2">x${qty}</span>
        <button class="px-3 py-2 hover:bg-survival-500/20" type="button" data-add-kit="${product.id}" aria-label="Añadir una unidad">+</button>
      </div>
    `;
  }

  const setFromParams = () => {
    const params = new URLSearchParams(window.location.search);
    ['people', 'pets', 'zone', 'budget'].forEach((key) => {
      const field = document.querySelector(`#${key}`);
      if (field && params.get(key)) field.value = params.get(key);
    });
    if (params.size) generateKit();
  };

  function generateKit() {
    const people = Number(document.querySelector('#people').value);
    const pets = document.querySelector('#pets').value;
    const zone = document.querySelector('#zone').value;
    const budget = document.querySelector('#budget').value;

    currentProducts = window.getRecommendedProducts
      ? window.getRecommendedProducts({ budget, zone })
      : [];

    currentList = [
      `${people * 3} litros minimos de agua por dia para el hogar`,
      `${people} raciones diarias de comida durante 3 dias`,
      ...currentProducts.map((product) => product.nombre)
    ];

    if (pets === 'yes') currentList.push('Comida, agua y documentacion de mascotas');
    if (zone === 'rural') currentList.push('Mapa fisico de la zona y silbato de emergencia');
    if (zone === 'coast') currentList.push('Bolsa estanca para documentos y electronica');
    if (zone === 'city') currentList.push('Copias de llaves, efectivo y contactos impresos');

    summary.textContent = `Recomendacion para ${people} persona${people > 1 ? 's' : ''}, presupuesto ${labels.budget[budget]} y entorno ${labels.zone[zone]}.`;
    result.innerHTML = `
      <div class="md:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <p class="font-black text-white">Necesidades base</p>
        <p class="mt-2 text-sm text-white/65">${people * 3} litros minimos de agua por dia, ${people} raciones diarias durante 3 dias${pets === 'yes' ? ' y comida/documentacion de mascotas' : ''}.</p>
      </div>
      ${currentProducts.map((product, index) => `
        <article class="rounded-xl border border-white/10 bg-white/5 p-4">
          <div class="flex items-start gap-3">
            ${window.getProductVisual ? window.getProductVisual(product, { compact: true }) : ''}
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-survival-500 text-xs font-black text-black">${index + 1}</span>
            <div>
              <p class="font-black text-white">${product.nombre}</p>
              <p class="mt-1 text-sm text-white/55">${product.proveedor} · ${product.tierLabel || 'Consultar en tienda'}</p>
              <div class="mt-3 flex flex-wrap gap-2">
                ${renderKitButton(product)}
                <a class="inline-flex rounded-lg border border-survival-500/40 px-3 py-2 text-sm font-bold text-survival-300 hover:bg-survival-500/10" href="${product.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver producto</a>
              </div>
            </div>
          </div>
        </article>
      `).join('')}
    `;

    const params = new URLSearchParams({ people, pets, zone, budget });
    saleLink.href = `venta.html?${params.toString()}`;
    localStorage.setItem('vitaguardia:lastKit', JSON.stringify({ people, pets, zone, budget, products: currentProducts.map((product) => product.id) }));
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    generateKit();
  });

  result.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-kit]');
    const decreaseButton = event.target.closest('[data-decrease-kit]');
    if ((!addButton && !decreaseButton) || !window.VitaGuardiaKit) return;

    const productId = addButton ? addButton.dataset.addKit : decreaseButton.dataset.decreaseKit;
    const product = currentProducts.find((item) => item.id === productId);
    if (!product) return;

    if (addButton) window.VitaGuardiaKit.add(product);
    if (decreaseButton) window.VitaGuardiaKit.decrement(product);
    generateKit();
  });

  copyBtn.addEventListener('click', async () => {
    if (!currentList.length) {
      alert('Primero genera tu kit.');
      return;
    }
    await navigator.clipboard.writeText(currentList.map((item, index) => `${index + 1}. ${item}`).join('\n'));
    copyBtn.textContent = 'Checklist copiado';
    setTimeout(() => copyBtn.textContent = 'Copiar checklist', 1700);
  });

  setFromParams();
})();
