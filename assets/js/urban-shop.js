const URBAN_SHOP_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'mochila', label: 'Mochila urbana' },
  { id: 'vuelta', label: 'Kit vuelta a casa' },
  { id: 'agua', label: 'Agua en ciudad' },
  { id: 'energia', label: 'Energia movil' },
  { id: 'orientacion', label: 'Comunicacion y orientacion' },
  { id: 'seguridad', label: 'Seguridad discreta' },
  { id: 'botiquin', label: 'Botiquin urbano' },
  { id: 'higiene', label: 'Higiene de emergencia' },
  { id: 'herramientas', label: 'Herramientas compactas' },
  { id: 'clima', label: 'Clima y proteccion' },
  { id: 'documentos', label: 'Documentos y efectivo' },
  { id: 'comida', label: 'Comida compacta' }
];

// Cambia aqui los enlaces por tus enlaces reales o de afiliado.
const URBAN_SHOP_PRODUCTS = [
  { id: 'mochila-antirrobo', categoria: 'mochila', nombre: 'Mochila urbana antirrobo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_MOCHILA_ANTIRROBO', descripcion: 'Mochila discreta para EDC, documentos, agua y energia movil.' },
  { id: 'organizador-edc', categoria: 'mochila', nombre: 'Organizador EDC compacto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_ORGANIZADOR_EDC', descripcion: 'Ordena cables, botiquin pequeno, libreta, linterna y accesorios.' },
  { id: 'cartera-rfid', categoria: 'mochila', nombre: 'Cartera RFID compacta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_CARTERA_RFID', descripcion: 'Proteccion y organizacion para tarjetas, efectivo y documentos.' },

  { id: 'zapatillas-repuesto', categoria: 'vuelta', nombre: 'Zapatillas comodas de repuesto', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_ZAPATILLAS', descripcion: 'Pensadas para volver andando si falla transporte o hay corte prolongado.' },
  { id: 'calcetines-antirozaduras', categoria: 'vuelta', nombre: 'Calcetines antirozaduras', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_CALCETINES', descripcion: 'Pequeno cambio que puede salvar una caminata larga.' },
  { id: 'mini-botiquin-ampollas', categoria: 'vuelta', nombre: 'Mini botiquin antiampollas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_AMPOLLAS', descripcion: 'Tiritas hidrocoloides, gasas y cura rapida para caminar.' },
  { id: 'poncho-compacto', categoria: 'vuelta', nombre: 'Poncho impermeable compacto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_PONCHO', descripcion: 'Lluvia, viento y espera al aire libre sin ocupar espacio.' },

  { id: 'botella-filtro', categoria: 'agua', nombre: 'Botella con filtro urbano', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_BOTELLA_FILTRO', descripcion: 'Rellenar donde puedas y mejorar seguridad del agua.' },
  { id: 'botella-plegable', categoria: 'agua', nombre: 'Botella plegable', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_BOTELLA_PLEGABLE', descripcion: 'Reserva flexible de agua sin cargar volumen todo el dia.' },
  { id: 'electrolitos', categoria: 'agua', nombre: 'Sobres de electrolitos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_ELECTROLITOS', descripcion: 'Hidratacion en caminatas largas, calor o esperas prolongadas.' },

  { id: 'powerbank-10000', categoria: 'energia', nombre: 'Powerbank 10.000 mAh', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_POWERBANK_10000', descripcion: 'Energia de bolsillo para movil, mapa, pagos y comunicacion.' },
  { id: 'cable-multiconector', categoria: 'energia', nombre: 'Cable multi-conector corto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_CABLE_MULTI', descripcion: 'Un solo cable para USB-C, micro USB y Lightning segun modelo.' },
  { id: 'funda-movil-impermeable', categoria: 'energia', nombre: 'Funda impermeable para movil', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_FUNDA_MOVIL', descripcion: 'Protege el dispositivo que hace de mapa, linterna y comunicacion.' },

  { id: 'mapa-local', categoria: 'orientacion', nombre: 'Mapa fisico local/provincia', proveedor: 'Libreria', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_MAPA', descripcion: 'Plan B cuando internet o Google Maps dejan de ayudar.' },
  { id: 'radio-portatil', categoria: 'orientacion', nombre: 'Radio AM/FM portatil', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_RADIO', descripcion: 'Informacion basica si hay cortes de red o emergencia publica.' },
  { id: 'libreta-impermeable', categoria: 'orientacion', nombre: 'Libreta impermeable y boligrafo', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_LIBRETA', descripcion: 'Contactos, rutas alternativas, notas y datos medicos.' },

  { id: 'alarma-personal', categoria: 'seguridad', nombre: 'Alarma personal compacta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_ALARMA', descripcion: 'Aviso sonoro para llamar la atencion y ganar margen.' },
  { id: 'linterna-compacta', categoria: 'seguridad', nombre: 'Linterna compacta potente', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_LINTERNA', descripcion: 'Visibilidad, orientacion y aviso sin entrar en productos regulados.' },
  { id: 'brazalete-reflectante', categoria: 'seguridad', nombre: 'Brazalete reflectante', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_REFLECTANTE', descripcion: 'Mas visibilidad caminando de noche o por vias poco iluminadas.' },

  { id: 'mini-botiquin', categoria: 'botiquin', nombre: 'Mini botiquin urbano', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_BOTIQUIN', descripcion: 'Cortes, golpes, ampollas y pequenas heridas durante movilidad.' },
  { id: 'tiritas-hidrocoloides', categoria: 'botiquin', nombre: 'Tiritas hidrocoloides', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_TIRITAS', descripcion: 'Especialmente utiles para rozaduras y ampollas.' },
  { id: 'mascarillas-ffp2', categoria: 'botiquin', nombre: 'Mascarillas FFP2 pack pequeno', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_FFP2', descripcion: 'Polvo, aglomeraciones, humo leve o espacios cerrados.' },

  { id: 'toallitas-gel', categoria: 'higiene', nombre: 'Toallitas y gel hidroalcoholico', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_TOALLITAS_GEL', descripcion: 'Higiene minima en esperas largas, transporte o refugio temporal.' },
  { id: 'papel-comprimido', categoria: 'higiene', nombre: 'Papel higienico comprimido', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_PAPEL', descripcion: 'Ocupa poco y evita depender de banos publicos.' },
  { id: 'kit-dental-mini', categoria: 'higiene', nombre: 'Mini kit dental de viaje', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_DENTAL', descripcion: 'Para pasar una noche complicada fuera de casa.' },

  { id: 'multiherramienta-compacta', categoria: 'herramientas', nombre: 'Multiherramienta compacta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_MULTI', descripcion: 'Reparacion ligera, no planteada como defensa ni armamento.' },
  { id: 'cinta-bridas', categoria: 'herramientas', nombre: 'Cinta americana plana y bridas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_CINTA_BRIDAS', descripcion: 'Arreglos rapidos de mochila, ropa, cables o pequenos equipos.' },
  { id: 'guantes-trabajo-finos', categoria: 'herramientas', nombre: 'Guantes de trabajo finos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_GUANTES', descripcion: 'Proteccion para mover objetos, cristales, polvo o reparaciones.' },

  { id: 'chubasquero-compacto', categoria: 'clima', nombre: 'Chubasquero compacto', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_CHUBASQUERO', descripcion: 'Caminar o esperar bajo lluvia sin empapar mochila y ropa.' },
  { id: 'braga-cuello', categoria: 'clima', nombre: 'Braga de cuello multiuso', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_BRAGA', descripcion: 'Frio, viento, polvo o sol segun situacion.' },
  { id: 'calcetines-repuesto', categoria: 'clima', nombre: 'Calcetines de repuesto', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_CALCETINES_REPUESTO', descripcion: 'Pies secos y menos rozaduras en trayectos largos.' },

  { id: 'funda-documentos', categoria: 'documentos', nombre: 'Funda impermeable para documentos', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_FUNDA_DOCS', descripcion: 'DNI, tarjeta sanitaria, contactos y copias protegidas.' },
  { id: 'organizador-documentos', categoria: 'documentos', nombre: 'Organizador documentos y efectivo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_URBANO_ORGANIZADOR_DOCS', descripcion: 'Efectivo pequeno, tarjeta prepago, copias y datos importantes.' },

  { id: 'barritas-urbanas', categoria: 'comida', nombre: 'Barritas energeticas compactas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_BARRITAS', descripcion: 'Calorias rapidas para caminatas, esperas o una noche fuera.' },
  { id: 'frutos-secos', categoria: 'comida', nombre: 'Frutos secos en porciones', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_FRUTOS_SECOS', descripcion: 'Energia densa, facil de repartir y guardar.' }
];

(function () {
  const grid = document.querySelector('#urbanShopGrid');
  const filters = document.querySelector('#urbanCategoryFilters');
  const count = document.querySelector('#urbanProductCount');
  const menuToggle = document.querySelector('#urbanCategoryMenuToggle');
  const activeCategoryLabel = document.querySelector('#urbanActiveCategoryLabel');
  if (!grid || !filters || !count) return;

  let activeCategory = 'todos';

  function getCategoryCount(categoryId) {
    if (categoryId === 'todos') return URBAN_SHOP_PRODUCTS.length;
    return URBAN_SHOP_PRODUCTS.filter((product) => product.categoria === categoryId).length;
  }

  function renderFilters() {
    filters.innerHTML = URBAN_SHOP_CATEGORIES.map((category) => `
      <button class="${category.id === activeCategory ? 'border-survival-500 bg-survival-500 text-black' : 'border-white/10 bg-white/5 text-white/70 hover:border-survival-500/40 hover:bg-white/10 hover:text-white'} flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition" type="button" data-category="${category.id}">
        <span>${category.label}</span>
        <span class="${category.id === activeCategory ? 'bg-black/15 text-black' : 'bg-white/5 text-white/45'} rounded-full px-2 py-0.5 text-xs">${getCategoryCount(category.id)}</span>
      </button>
    `).join('');

    const current = URBAN_SHOP_CATEGORIES.find((category) => category.id === activeCategory);
    if (activeCategoryLabel && current) activeCategoryLabel.textContent = current.label;
  }

  function renderProducts() {
    const products = activeCategory === 'todos'
      ? URBAN_SHOP_PRODUCTS
      : URBAN_SHOP_PRODUCTS.filter((product) => product.categoria === activeCategory);

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
