(function () {
  const packTitle = document.querySelector('#packTitle');
  const packPrice = document.querySelector('#packPrice');
  const packItems = document.querySelector('#packItems');
  const heroCopy = document.querySelector('#heroCopy');

  if (!packTitle || !packPrice || !packItems || !heroCopy) return;

  const packs = {
    basic: {
      title: 'KIT72h Basico',
      price: '79 EUR',
      items: ['Agua y comida base', 'Linterna LED', 'Botiquin basico', 'Manta termica', 'Checklist imprimible']
    },
    medium: {
      title: 'KIT72h Medio',
      price: '149 EUR',
      items: ['Filtro o pastillas de agua', 'Radio de emergencia', 'Linterna frontal', 'Powerbank', 'Botiquin completo', 'Checklist imprimible']
    },
    pro: {
      title: 'KIT72h Completo',
      price: '289 EUR',
      items: ['Radio solar/manivela', 'Filtro de agua', 'Linterna frontal y principal', 'Powerbank grande', 'Multiherramienta', 'Hornillo portatil', 'Checklist premium']
    }
  };

  const params = new URLSearchParams(window.location.search);
  const budget = params.get('budget') || 'medium';
  const people = params.get('people');
  const pack = packs[budget] || packs.medium;

  packTitle.textContent = pack.title;
  packPrice.textContent = pack.price;
  packItems.innerHTML = pack.items.map((item) => `<li class="rounded-xl border border-white/10 bg-white/5 p-3">${item}</li>`).join('');

  if (people) {
    heroCopy.textContent = `Pack recomendado para ${people} persona${Number(people) > 1 ? 's' : ''}. Cubre lo esencial y deja margen para ajustar agua, comida y necesidades personales.`;
  }
})();
