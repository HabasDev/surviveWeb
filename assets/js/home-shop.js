const HOME_SHOP_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'energia', label: 'Apagones y energia' },
  { id: 'agua', label: 'Agua potable' },
  { id: 'cocina', label: 'Cocina sin electricidad' },
  { id: 'despensa', label: 'Despensa' },
  { id: 'clima', label: 'Calor y frio' },
  { id: 'seguridad', label: 'Seguridad hogar' },
  { id: 'botiquin', label: 'Botiquin e higiene' },
  { id: 'comunicacion', label: 'Comunicacion' },
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'packs', label: 'Packs' }
];

// Cambia aqui los enlaces por tus enlaces reales o de afiliado.
const HOME_SHOP_PRODUCTS = [
  { id: 'power-station-500w', categoria: 'energia', nombre: 'PurMars - Estacion de alimentacion portatil', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'https://www.amazon.es/dp/B0DGL8H78P?tag=vitaguardia02-21', descripcion: 'Bateria grande para router, moviles, luces y pequenos dispositivos.' },
  { id: 'placa-solar-100w', categoria: 'energia', nombre: 'DOKIO Maleta solar plegable portatil de 100 W', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B07JVJJH47?tag=vitaguardia02-21', descripcion: 'Complemento para recargar power stations durante cortes largos.' },
  { id: 'powerbank-20000', categoria: 'energia', nombre: 'Charmast Power Bank 20000mAh Bateria Portatil USB', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CHF7GLR9?tag=vitaguardia02-21', descripcion: 'Energia basica para moviles, frontal y pequenos accesorios USB.' },
  { id: 'linterna-frontal', categoria: 'energia', nombre: 'Blukar Linterna Frontal Recargable', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0D7ZMJ6BZ?tag=vitaguardia02-21', descripcion: 'Luz manos libres para moverse por casa durante apagones.' },
  { id: 'radio-emergencia', categoria: 'energia', nombre: 'ROCAM Radio Solar de Emergencia con Manivela 12000mAh', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0F9NFPCF7?tag=vitaguardia02-21', descripcion: 'Informacion AM/FM, linterna y carga de emergencia.' },

  { id: 'filtro-gravedad', categoria: 'agua', nombre: 'VEVOR Sistema de Filtracion de Agua por Gravedad 5', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'https://www.amazon.es/dp/B0DM8CD4N5?tag=vitaguardia02-21', descripcion: 'Filtrado familiar sin depender de electricidad.' },
  { id: 'filtro-pajita', categoria: 'agua', nombre: 'LifeStraw - Filtro personal de agua, Azul Marino, 1 unidad', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0D1M4LQ7F?tag=vitaguardia02-21', descripcion: 'Opcion compacta para emergencia y mochila.' },
  { id: 'bidon-alimentario', categoria: 'agua', nombre: 'Garronda Bidon Boca Ancha Garrafa Agua', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DGXGYF47?tag=vitaguardia02-21', descripcion: 'Almacenamiento seguro de agua en casa.' },
  { id: 'garrafa-plegable', categoria: 'agua', nombre: 'Deposito Agua 5 litros', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0GGR9GLFT?tag=vitaguardia02-21', descripcion: 'Ocupa poco y permite ampliar reserva de agua rapidamente.' },

  { id: 'hornillo-gas', categoria: 'cocina', nombre: 'Campingaz, Camp Bistro 3 Hornillo De Gas Individual Potencia 2200 W', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B09KNQL782?tag=vitaguardia02-21', descripcion: 'Para cocinar sin electricidad con ventilacion adecuada.' },
  { id: 'cartuchos-gas', categoria: 'cocina', nombre: 'Pack de 4 und Super-Ego BTN 250 Cartucho de Gas Butano', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0FJXY6KD7?tag=vitaguardia02-21', descripcion: 'Reserva de combustible compatible con hornillos portatiles.' },
  { id: 'abrelatas-manual', categoria: 'cocina', nombre: 'Fackelmann Abrelatas Papillon acero color rojo y negro 1 ud. en', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B00DI1POJU?tag=vitaguardia02-21', descripcion: 'Basico para conservas cuando no quieres depender de nada electrico.' },
  { id: 'nevera-pasiva', categoria: 'cocina', nombre: 'Steamy Steamy BMX 26 - Nevera Pasiva Outdoor', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CMY2BMVR?tag=vitaguardia02-21', descripcion: 'Ayuda a conservar alimentos durante cortes puntuales.' },

  { id: 'raciones-emergencia', categoria: 'despensa', nombre: 'Kit de emergencia alimentaria 72H - Raciones compactas y agua', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0GT1FZHGG?tag=vitaguardia02-21', descripcion: 'Base compacta para despensa de larga duracion.' },
  { id: 'barritas-energeticas', categoria: 'despensa', nombre: 'CONVAR-7 Pack barrita energetica multivitaminica', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B096FPGJ6V?tag=vitaguardia02-21', descripcion: 'Calorias faciles de almacenar y repartir.' },
  { id: 'cajas-hermeticas', categoria: 'despensa', nombre: 'GoMaihe Botes Cocina Almacenaje Juego de 12 Piezas (800ML)', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DRNSDVT4?tag=vitaguardia02-21', descripcion: 'Orden, proteccion y control de caducidades.' },

  { id: 'saco-dormir', categoria: 'clima', nombre: 'Saco de Dormir de plumon - 5 C', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CXPNY32Y?tag=vitaguardia02-21', descripcion: 'Refuerzo si falla la calefaccion.' },
  { id: 'manta-termica-pack', categoria: 'clima', nombre: 'SURVIVOL - Pack 10 Mantas Termicas Supervivencia - Mantas Calor Termico', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0FDM3FYPC?tag=vitaguardia02-21', descripcion: 'Muy baratas, ligeras y utiles en frio o evacuacion.' },
  { id: 'ventilador-recargable', categoria: 'clima', nombre: 'ArsMotin Ventilador de Mesa USB con Oscilacion Automatica', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0GK93T4W4?tag=vitaguardia02-21', descripcion: 'Confort y seguridad en cortes durante verano.' },

  { id: 'detector-co', categoria: 'seguridad', nombre: 'FireAngel FA6813 - Alarma y detector de monoxido de carbono - Sensor de', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CKWGSX22?tag=vitaguardia02-21', descripcion: 'Imprescindible si hay combustion, estufas o cocina alternativa.' },
  { id: 'extintor-domestico', categoria: 'seguridad', nombre: 'Smartwares Extintor de Polvo', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0D2RLGQL4?tag=vitaguardia02-21', descripcion: 'Seguridad basica para cocina, garaje o cuarto tecnico.' },
  { id: 'caja-ignifuga', categoria: 'seguridad', nombre: 'Caja Fuerte Ignifuga con Cerradura', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FDQS4Y4J?tag=vitaguardia02-21', descripcion: 'Documentos, efectivo, copias y datos importantes protegidos.' },

  { id: 'botiquin-familiar', categoria: 'botiquin', nombre: 'DEPALMERA Pharma Botiquin Primeros Auxilios Homologado Completo', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0BB2YK3X7?tag=vitaguardia02-21', descripcion: 'Curacion basica, cortes, golpes y pequenas incidencias domesticas.' },
  { id: 'guantes-nitrilo', categoria: 'botiquin', nombre: 'KMINA Guantes Nitrilo Talla M (100 Guantes)', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B08MBC6J8F?tag=vitaguardia02-21', descripcion: 'Higiene, curas y limpieza sin contacto directo.' },
  { id: 'kit-higiene', categoria: 'botiquin', nombre: 'DEPALMERA Pharma Botiquin Neceser Primeros Auxilios Homologado Completo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CQ6YTY25?tag=vitaguardia02-21', descripcion: 'Toallitas, gel, bolsas, jabon y papel para cortes de agua.' },

  { id: 'walkie-talkies', categoria: 'comunicacion', nombre: 'BAOFENG GT-5R Walkie Talkie', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CS2M2WKM?tag=vitaguardia02-21', descripcion: 'Comunicacion local si internet o cobertura fallan.' },
  { id: 'libreta-impermeable', categoria: 'comunicacion', nombre: 'OSDUE Cuadernos Impermeables 5 Piezas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DJ58RNKH?tag=vitaguardia02-21', descripcion: 'Contactos, inventario y notas sin depender del movil.' },

  { id: 'multiherramienta', categoria: 'herramientas', nombre: 'Mossy Oak Alicates Multiusos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CLXXWCGM?tag=vitaguardia02-21', descripcion: 'Uso domestico: cortar, apretar, abrir, ajustar y reparar.' },
  { id: 'kit-reparacion', categoria: 'herramientas', nombre: 'Hi-Spec 25 piezas juego compacto de herramientas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DQ87YRBL?tag=vitaguardia02-21', descripcion: 'Cinta americana, bridas, destornilladores, cutter y cuerda.' },

  { id: 'pack-apagon', categoria: 'packs', nombre: 'Pack apagon en casa', proveedor: 'VitaGuardia', tierLabel: 'Pack completo', enlace: 'ENLACE_PACK_APAGON', descripcion: 'Lista agrupada de luz, energia, radio y cocina basica.' },
  { id: 'pack-invierno', categoria: 'packs', nombre: 'Pack invierno sin calefaccion', proveedor: 'VitaGuardia', tierLabel: 'Pack completo', enlace: 'ENLACE_PACK_INVIERNO', descripcion: 'Calor, aislamiento, iluminacion y seguridad para frio.' },
  { id: 'pack-familia', categoria: 'packs', nombre: 'Pack familia 72h', proveedor: 'VitaGuardia', tierLabel: 'Pack completo', enlace: 'ENLACE_PACK_FAMILIA', descripcion: 'Organizacion por personas, comida, agua, higiene y botiquin.' }
];

(function () {
  const grid = document.querySelector('#homeShopGrid');
  const filters = document.querySelector('#categoryFilters');
  const count = document.querySelector('#productCount');
  const menuToggle = document.querySelector('#categoryMenuToggle');
  const activeCategoryLabel = document.querySelector('#activeCategoryLabel');
  if (!grid || !filters || !count) return;

  let activeCategory = 'todos';

  function renderFilters() {
    filters.innerHTML = HOME_SHOP_CATEGORIES.map((category) => `
      <button class="${category.id === activeCategory ? 'border-survival-500 bg-survival-500 text-black' : 'border-white/10 bg-white/5 text-white/70 hover:border-survival-500/40 hover:bg-white/10 hover:text-white'} flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition" type="button" data-category="${category.id}">
        <span>${category.label}</span>
        <span class="${category.id === activeCategory ? 'bg-black/15 text-black' : 'bg-white/5 text-white/45'} rounded-full px-2 py-0.5 text-xs">${getCategoryCount(category.id)}</span>
      </button>
    `).join('');

    const current = HOME_SHOP_CATEGORIES.find((category) => category.id === activeCategory);
    if (activeCategoryLabel && current) activeCategoryLabel.textContent = current.label;
  }

  function getCategoryCount(categoryId) {
    if (categoryId === 'todos') return HOME_SHOP_PRODUCTS.length;
    return HOME_SHOP_PRODUCTS.filter((product) => product.categoria === categoryId).length;
  }

  function getKitQty(product) {
    return window.VitaGuardiaKit ? window.VitaGuardiaKit.quantity(product) : 0;
  }

  function renderKitButton(product) {
    const qty = getKitQty(product);
    if (qty < 1) {
      return `<button class="rounded-xl bg-survival-500 px-4 py-3 text-sm font-black text-black shadow-glow hover:bg-survival-300" type="button" data-add-kit="${product.id}">Añadir a mi kit</button>`;
    }

    return `
      <div class="inline-flex overflow-hidden rounded-xl border border-survival-500/45 bg-survival-500/15 text-sm font-black text-survival-300">
        <button class="px-3 py-3 hover:bg-black/20" type="button" data-decrease-kit="${product.id}" aria-label="Quitar una unidad">-</button>
        <span class="border-x border-survival-500/30 px-4 py-3">x${qty}</span>
        <button class="px-3 py-3 hover:bg-survival-500/20" type="button" data-add-kit="${product.id}" aria-label="Añadir una unidad">+</button>
      </div>
    `;
  }

  function renderProducts() {
    const products = activeCategory === 'todos'
      ? HOME_SHOP_PRODUCTS
      : HOME_SHOP_PRODUCTS.filter((product) => product.categoria === activeCategory);

    count.textContent = products.length;
    grid.innerHTML = products.map((product) => `
      <article class="flex min-h-[390px] flex-col rounded-[1.25rem] border border-white/10 bg-white/[.055] p-5 transition hover:-translate-y-1 hover:border-survival-500/45 hover:bg-white/[.075]">
        ${window.getProductVisual ? window.getProductVisual(product) : ''}
        <div class="mb-4 mt-4 flex items-start justify-between gap-3">
          <span class="rounded-full bg-survival-500/15 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-survival-300">${product.tierLabel}</span>
          <span class="text-sm font-bold text-white/45">${product.proveedor}</span>
        </div>
        <h3 class="text-2xl font-black leading-tight text-white">${product.nombre}</h3>
        <p class="mt-3 flex-1 text-sm leading-6 text-white/60">${product.descripcion}</p>
        <div class="mt-5 flex flex-wrap items-end justify-between gap-3">
          <p class="text-sm font-bold text-white/45">${product.tierLabel}</p>
          <div class="flex flex-wrap gap-2">
            ${renderKitButton(product)}
            <a class="rounded-xl border border-white/15 px-4 py-3 text-sm font-black text-white/75 hover:bg-white/10" href="${product.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  grid.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-kit]');
    const decreaseButton = event.target.closest('[data-decrease-kit]');
    if ((!addButton && !decreaseButton) || !window.VitaGuardiaKit) return;

    const productId = addButton ? addButton.dataset.addKit : decreaseButton.dataset.decreaseKit;
    const product = HOME_SHOP_PRODUCTS.find((item) => item.id === productId);
    if (!product) return;

    if (addButton) window.VitaGuardiaKit.add(product);
    if (decreaseButton) window.VitaGuardiaKit.decrement(product);
  });

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    filters.classList.add('hidden');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    renderFilters();
    renderProducts();
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isHidden = filters.classList.toggle('hidden');
      menuToggle.setAttribute('aria-expanded', String(!isHidden));
    });
  }

  document.addEventListener('vitaguardia:kit-updated', renderProducts);
  renderFilters();
  renderProducts();
})();
