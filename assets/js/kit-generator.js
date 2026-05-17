(function () {
  const form = document.querySelector('#kitForm');
  const result = document.querySelector('#result');
  const summary = document.querySelector('#summary');
  const saleLink = document.querySelector('#saleLink');
  const copyBtn = document.querySelector('#copyBtn');

  if (!form || !result || !summary || !saleLink || !copyBtn) return;

  const kits = {
    basic: ['Agua potable para 72h', 'Linterna LED', 'Pilas o bateria externa', 'Botiquin basico', 'Comida no perecedera', 'Manta termica'],
    medium: ['Agua potable para 72h', 'Filtro o pastillas potabilizadoras', 'Radio de emergencia', 'Linterna frontal', 'Botiquin completo', 'Comida no perecedera', 'Powerbank', 'Manta termica', 'Navaja multiusos'],
    pro: ['Agua potable para 72h', 'Filtro de agua', 'Radio solar/manivela', 'Linterna frontal y principal', 'Botiquin completo', 'Comida liofilizada o conservas', 'Powerbank grande', 'Mantas termicas', 'Multiherramienta', 'Hornillo portatil', 'Silbato y senalizacion']
  };

  const labels = {
    budget: { basic: 'basico', medium: 'medio', pro: 'completo' },
    zone: { city: 'ciudad', town: 'pueblo', rural: 'zona rural', coast: 'costa' }
  };

  let currentList = [];

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

    currentList = [...kits[budget]];
    currentList.unshift(`${people * 3} litros minimos de agua por dia para el hogar`);
    currentList.push(`${people} raciones diarias de comida durante 3 dias`);

    if (pets === 'yes') currentList.push('Comida, agua y documentacion de mascotas');
    if (zone === 'rural') currentList.push('Mapa fisico de la zona y silbato de emergencia');
    if (zone === 'coast') currentList.push('Bolsa estanca para documentos y electronica');
    if (zone === 'city') currentList.push('Copias de llaves, efectivo y contactos impresos');

    summary.textContent = `Recomendacion para ${people} persona${people > 1 ? 's' : ''}, presupuesto ${labels.budget[budget]} y entorno ${labels.zone[zone]}.`;
    result.innerHTML = currentList.map((item, index) => `
      <div class="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-survival-500 text-xs font-black text-black">${index + 1}</span>
        <p class="text-white/75">${item}</p>
      </div>
    `).join('');

    const params = new URLSearchParams({ people, pets, zone, budget });
    saleLink.href = `venta.html?${params.toString()}`;
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
