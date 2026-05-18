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
  { id: 'power-station-500w', categoria: 'energia', nombre: 'Power station portatil 500W', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'ENLACE_AFILIADO_POWER_STATION', descripcion: 'Bateria grande para router, moviles, luces y pequenos dispositivos.' },
  { id: 'placa-solar-100w', categoria: 'energia', nombre: 'Placa solar portatil 100W', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_PLACA_SOLAR', descripcion: 'Complemento para recargar power stations durante cortes largos.' },
  { id: 'powerbank-20000', categoria: 'energia', nombre: 'Powerbank 20.000 mAh USB-C', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_POWERBANK', descripcion: 'Energia basica para moviles, frontal y pequenos accesorios USB.' },
  { id: 'linterna-frontal', categoria: 'energia', nombre: 'Linterna frontal recargable', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_FRONTAL', descripcion: 'Luz manos libres para moverse por casa durante apagones.' },
  { id: 'radio-emergencia', categoria: 'energia', nombre: 'Radio emergencia manivela/solar/USB', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_RADIO', descripcion: 'Informacion AM/FM, linterna y carga de emergencia.' },

  { id: 'filtro-gravedad', categoria: 'agua', nombre: 'Filtro de agua por gravedad', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'ENLACE_AFILIADO_FILTRO_GRAVEDAD', descripcion: 'Filtrado familiar sin depender de electricidad.' },
  { id: 'filtro-pajita', categoria: 'agua', nombre: 'Filtro de agua tipo pajita', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_FILTRO_PAJITA', descripcion: 'Opcion compacta para emergencia y mochila.' },
  { id: 'bidon-alimentario', categoria: 'agua', nombre: 'Bidon alimentario 20L con grifo', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_BIDON', descripcion: 'Almacenamiento seguro de agua en casa.' },
  { id: 'garrafa-plegable', categoria: 'agua', nombre: 'Garrafa plegable de emergencia', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_GARRAFA', descripcion: 'Ocupa poco y permite ampliar reserva de agua rapidamente.' },

  { id: 'hornillo-gas', categoria: 'cocina', nombre: 'Hornillo de gas portatil', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_HORNILLO', descripcion: 'Para cocinar sin electricidad con ventilacion adecuada.' },
  { id: 'cartuchos-gas', categoria: 'cocina', nombre: 'Pack cartuchos de gas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_CARTUCHOS', descripcion: 'Reserva de combustible compatible con hornillos portatiles.' },
  { id: 'abrelatas-manual', categoria: 'cocina', nombre: 'Abrelatas manual resistente', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_ABRELATAS', descripcion: 'Basico para conservas cuando no quieres depender de nada electrico.' },
  { id: 'nevera-pasiva', categoria: 'cocina', nombre: 'Nevera pasiva con acumuladores', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_NEVERA', descripcion: 'Ayuda a conservar alimentos durante cortes puntuales.' },

  { id: 'raciones-emergencia', categoria: 'despensa', nombre: 'Raciones de emergencia 72h', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_RACIONES', descripcion: 'Base compacta para despensa de larga duracion.' },
  { id: 'barritas-energeticas', categoria: 'despensa', nombre: 'Barritas energeticas pack familiar', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_BARRITAS', descripcion: 'Calorias faciles de almacenar y repartir.' },
  { id: 'cajas-hermeticas', categoria: 'despensa', nombre: 'Cajas hermeticas para despensa', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_CAJAS_DESPENSA', descripcion: 'Orden, proteccion y control de caducidades.' },

  { id: 'saco-dormir', categoria: 'clima', nombre: 'Saco de dormir compacto', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_SACO', descripcion: 'Refuerzo si falla la calefaccion.' },
  { id: 'manta-termica-pack', categoria: 'clima', nombre: 'Pack mantas termicas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_MANTAS', descripcion: 'Muy baratas, ligeras y utiles en frio o evacuacion.' },
  { id: 'ventilador-recargable', categoria: 'clima', nombre: 'Ventilador recargable USB', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_VENTILADOR', descripcion: 'Confort y seguridad en cortes durante verano.' },

  { id: 'detector-co', categoria: 'seguridad', nombre: 'Detector de monoxido de carbono', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_DETECTOR_CO', descripcion: 'Imprescindible si hay combustion, estufas o cocina alternativa.' },
  { id: 'extintor-domestico', categoria: 'seguridad', nombre: 'Extintor domestico', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_EXTINTOR', descripcion: 'Seguridad basica para cocina, garaje o cuarto tecnico.' },
  { id: 'caja-ignifuga', categoria: 'seguridad', nombre: 'Caja ignifuga para documentos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_CAJA_IGNIFUGA', descripcion: 'Documentos, efectivo, copias y datos importantes protegidos.' },

  { id: 'botiquin-familiar', categoria: 'botiquin', nombre: 'Botiquin familiar completo', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_BOTIQUIN', descripcion: 'Curacion basica, cortes, golpes y pequenas incidencias domesticas.' },
  { id: 'guantes-nitrilo', categoria: 'botiquin', nombre: 'Guantes de nitrilo pack', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_GUANTES', descripcion: 'Higiene, curas y limpieza sin contacto directo.' },
  { id: 'kit-higiene', categoria: 'botiquin', nombre: 'Kit higiene emergencia', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_HIGIENE', descripcion: 'Toallitas, gel, bolsas, jabon y papel para cortes de agua.' },

  { id: 'walkie-talkies', categoria: 'comunicacion', nombre: 'Walkie-talkies pack 2', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_WALKIES', descripcion: 'Comunicacion local si internet o cobertura fallan.' },
  { id: 'libreta-impermeable', categoria: 'comunicacion', nombre: 'Libreta impermeable y boligrafo', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_LIBRETA', descripcion: 'Contactos, inventario y notas sin depender del movil.' },

  { id: 'multiherramienta', categoria: 'herramientas', nombre: 'Multiherramienta para reparaciones', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_AFILIADO_MULTI', descripcion: 'Uso domestico: cortar, apretar, abrir, ajustar y reparar.' },
  { id: 'kit-reparacion', categoria: 'herramientas', nombre: 'Mini kit reparacion hogar', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_AFILIADO_REPARACION', descripcion: 'Cinta americana, bridas, destornilladores, cutter y cuerda.' },

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

  function renderProducts() {
    const products = activeCategory === 'todos'
      ? HOME_SHOP_PRODUCTS
      : HOME_SHOP_PRODUCTS.filter((product) => product.categoria === activeCategory);

    count.textContent = products.length;
    grid.innerHTML = products.map((product) => `
      <article class="flex min-h-[280px] flex-col rounded-[1.25rem] border border-white/10 bg-white/[.055] p-5 transition hover:-translate-y-1 hover:border-survival-500/45 hover:bg-white/[.075]">
        <div class="mb-4 flex items-start justify-between gap-3">
          <span class="rounded-full bg-survival-500/15 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-survival-300">${product.tierLabel}</span>
          <span class="text-sm font-bold text-white/45">${product.proveedor}</span>
        </div>
        <h3 class="text-2xl font-black leading-tight text-white">${product.nombre}</h3>
        <p class="mt-3 flex-1 text-sm leading-6 text-white/60">${product.descripcion}</p>
        <div class="mt-5 flex items-end justify-between gap-4">
          <p class="text-sm font-bold text-white/45">${product.tierLabel}</p>
          <a class="rounded-xl bg-survival-500 px-4 py-3 text-sm font-black text-black shadow-glow hover:bg-survival-300" href="${product.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver oferta disponible</a>
        </div>
      </article>
    `).join('');
  }

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

  renderFilters();
  renderProducts();
})();
