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
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-survival-500 text-xs font-black text-black">${index + 1}</span>
            <div>
              <p class="font-black text-white">${product.nombre}</p>
              <p class="mt-1 text-sm text-white/55">${product.proveedor} · ${product.tierLabel || 'Consultar en tienda'}</p>
              <a class="mt-3 inline-flex rounded-lg border border-survival-500/40 px-3 py-2 text-sm font-bold text-survival-300 hover:bg-survival-500/10" href="${product.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver producto</a>
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
