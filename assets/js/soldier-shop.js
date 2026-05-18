const SOLDIER_SHOP_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'organizacion', label: 'Organizacion y mochila' },
  { id: 'pies', label: 'Cuidado de pies y marchas' },
  { id: 'higiene', label: 'Higiene en maniobras' },
  { id: 'clima', label: 'Frio, calor y lluvia' },
  { id: 'hidratacion', label: 'Hidratacion y energia' },
  { id: 'iluminacion', label: 'Iluminacion de campo' },
  { id: 'carga', label: 'Carga y electronica' },
  { id: 'descanso', label: 'Descanso y base' },
  { id: 'botiquin', label: 'Botiquin personal' },
  { id: 'herramientas', label: 'Herramientas y reparaciones' },
  { id: 'documentacion', label: 'Documentacion segura' },
  { id: 'mantenimiento', label: 'Mantenimiento del equipo' }
];

// Cambia aqui los enlaces por tus enlaces reales o de afiliado.
const SOLDIER_SHOP_PRODUCTS = [
  { id: 'bolsas-estancas', categoria: 'organizacion', nombre: 'Pack bolsas estancas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_BOLSAS_ESTANCAS', descripcion: 'Mantiene ropa, documentacion y electronica secos dentro de mochila o taquilla.' },
  { id: 'bolsas-compresion', categoria: 'organizacion', nombre: 'Bolsas de compresion', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_BOLSAS_COMPRESION', descripcion: 'Reduce volumen de ropa y ayuda a ordenar la mochila.' },
  { id: 'organizador-mochila', categoria: 'organizacion', nombre: 'Organizadores internos de mochila', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_ORGANIZADOR_MOCHILA', descripcion: 'Separar higiene, ropa, cables, botiquin y mantenimiento sin caos.' },
  { id: 'etiquetas-material', categoria: 'organizacion', nombre: 'Etiquetas y cinta para marcar material', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_ETIQUETAS', descripcion: 'Identificacion rapida de equipo propio, bolsas y accesorios.' },

  { id: 'calcetines-tecnicos', categoria: 'pies', nombre: 'Calcetines tecnicos de marcha', proveedor: 'Decathlon', tierLabel: 'Opcion premium', enlace: 'ENLACE_SOLDADO_CALCETINES_TECNICOS', descripcion: 'Los pies mandan. Buenos calcetines evitan rozaduras y mejoran marchas.' },
  { id: 'kit-antiampollas', categoria: 'pies', nombre: 'Kit antiampollas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_KIT_AMPOLLAS', descripcion: 'Apositos hidrocoloides, esparadrapo y proteccion para puntos calientes.' },
  { id: 'polvos-pies', categoria: 'pies', nombre: 'Polvos para pies', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_POLVOS_PIES', descripcion: 'Ayuda con humedad, olor y rozaduras en jornadas largas.' },
  { id: 'cordones-repuesto', categoria: 'pies', nombre: 'Cordones resistentes de repuesto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_CORDONES', descripcion: 'Pequeno repuesto que evita problemas tontos en campo.' },

  { id: 'toallitas-maniobras', categoria: 'higiene', nombre: 'Toallitas humedas pack compacto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_TOALLITAS', descripcion: 'Higiene minima cuando ducha y tiempo no acompanan.' },
  { id: 'toalla-microfibra', categoria: 'higiene', nombre: 'Toalla microfibra compacta', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_TOALLA', descripcion: 'Ocupa poco, seca rapido y sirve para base o maniobras.' },
  { id: 'neceser-colgante', categoria: 'higiene', nombre: 'Neceser colgante compacto', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_NECESER', descripcion: 'Higiene organizada en taquilla, tienda o desplazamientos.' },
  { id: 'kit-afeitado', categoria: 'higiene', nombre: 'Kit de afeitado compacto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_AFEITADO', descripcion: 'Aseo personal sin ocupar media mochila.' },

  { id: 'camiseta-termica', categoria: 'clima', nombre: 'Camiseta termica', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_TERMICA', descripcion: 'Capa base para guardias, frio y esperas prolongadas.' },
  { id: 'poncho-impermeable', categoria: 'clima', nombre: 'Poncho impermeable', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_PONCHO', descripcion: 'Proteccion rapida para lluvia, espera y equipo.' },
  { id: 'braga-cuello', categoria: 'clima', nombre: 'Braga de cuello', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_BRAGA', descripcion: 'Frio, viento, polvo y sol con una sola pieza.' },
  { id: 'calentadores-manos', categoria: 'clima', nombre: 'Calentadores de manos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_CALENTADORES', descripcion: 'Confort util en frio, esperas y turnos de noche.' },

  { id: 'bolsa-hidratacion', categoria: 'hidratacion', nombre: 'Bolsa de hidratacion tipo camelbak', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_CAMELBAK', descripcion: 'Hidratacion accesible en marcha y maniobras.' },
  { id: 'botella-metalica', categoria: 'hidratacion', nombre: 'Botella metalica resistente', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_BOTELLA_METALICA', descripcion: 'Agua diaria para base, guardias y desplazamientos.' },
  { id: 'electrolitos', categoria: 'hidratacion', nombre: 'Sales minerales y electrolitos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_ELECTROLITOS', descripcion: 'Apoyo en calor, marcha, sudoracion y esfuerzos prolongados.' },
  { id: 'barritas-frutos', categoria: 'hidratacion', nombre: 'Barritas y frutos secos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_BARRITAS', descripcion: 'Calorias rapidas para esperas, desplazamientos y maniobras.' },

  { id: 'frontal-luz-roja', categoria: 'iluminacion', nombre: 'Linterna frontal con luz roja', proveedor: 'Decathlon', tierLabel: 'Opcion premium', enlace: 'ENLACE_SOLDADO_FRONTAL_ROJA', descripcion: 'Iluminacion de campo sin molestar tanto de noche.' },
  { id: 'linterna-angular', categoria: 'iluminacion', nombre: 'Linterna angular compacta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_LINTERNA_ANGULAR', descripcion: 'Uso en mochila, bolsillo o tareas con manos libres.' },
  { id: 'luz-usb', categoria: 'iluminacion', nombre: 'Luz USB pequena', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_LUZ_USB', descripcion: 'Luz discreta para habitacion, tienda o lectura.' },

  { id: 'powerbank-20000', categoria: 'carga', nombre: 'Powerbank resistente 20.000 mAh', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_POWERBANK', descripcion: 'Carga para movil, frontal, reloj y accesorios permitidos.' },
  { id: 'cable-multi', categoria: 'carga', nombre: 'Cable multi-conector corto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_CABLE_MULTI', descripcion: 'Un cable para varios dispositivos y menos lio en mochila.' },
  { id: 'regleta-pequena', categoria: 'carga', nombre: 'Regleta pequena de viaje', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_REGLETA', descripcion: 'Muy util en habitacion compartida, base o desplazamientos.' },
  { id: 'organizador-cables', categoria: 'carga', nombre: 'Organizador de cables', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_ORGANIZADOR_CABLES', descripcion: 'Cables, cargadores, pilas y adaptadores localizados.' },

  { id: 'saco-compacto', categoria: 'descanso', nombre: 'Saco de dormir compacto', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_SACO', descripcion: 'Descanso en campo, desplazamientos o frio moderado.' },
  { id: 'almohada-hinchable', categoria: 'descanso', nombre: 'Almohada hinchable', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_ALMOHADA', descripcion: 'Pequena mejora que se agradece mucho tras muchas horas.' },
  { id: 'chanclas-ducha', categoria: 'descanso', nombre: 'Chanclas de ducha', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_CHANCLAS', descripcion: 'Higiene en duchas compartidas y vida en base.' },
  { id: 'candado-taquilla', categoria: 'descanso', nombre: 'Candado pequeno para taquilla', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_CANDADO', descripcion: 'Organizacion y control de taquilla, bolsa o maleta.' },

  { id: 'mini-botiquin', categoria: 'botiquin', nombre: 'Mini botiquin personal', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_BOTIQUIN', descripcion: 'Curas basicas personales: gasas, vendas, tiritas y antiseptico.' },
  { id: 'tijeras-trauma', categoria: 'botiquin', nombre: 'Tijeras de trauma', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_TIJERAS_TRAUMA', descripcion: 'Material sanitario complementario para personal formado.' },
  { id: 'ifak-vacio', categoria: 'botiquin', nombre: 'IFAK vacio', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_IFAK', descripcion: 'Bolsa para ordenar material medico personal autorizado.' },

  { id: 'multiherramienta', categoria: 'herramientas', nombre: 'Multiherramienta de utilidad', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_MULTI', descripcion: 'Mantenimiento y pequenas reparaciones. No se presenta como arma.' },
  { id: 'kit-costura', categoria: 'herramientas', nombre: 'Kit de costura resistente', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_COSTURA', descripcion: 'Botones, roturas, parches y arreglos rapidos de ropa/equipo.' },
  { id: 'cinta-bridas', categoria: 'herramientas', nombre: 'Cinta americana y bridas', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_CINTA_BRIDAS', descripcion: 'Soluciones simples para reparaciones y organizacion.' },

  { id: 'funda-documentos', categoria: 'documentacion', nombre: 'Funda impermeable para documentos', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_FUNDA_DOCS', descripcion: 'DNI, pasaporte, copias, tarjetas y papeles protegidos.' },
  { id: 'carpeta-resistente', categoria: 'documentacion', nombre: 'Carpeta resistente', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_CARPETA', descripcion: 'Orden para papeles, copias, instrucciones y desplazamientos.' },
  { id: 'pendrive-cifrado', categoria: 'documentacion', nombre: 'Pendrive cifrado', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_PENDRIVE', descripcion: 'Copias personales y documentos digitales protegidos.' },

  { id: 'cepillo-botas', categoria: 'mantenimiento', nombre: 'Cepillo para botas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_CEPILLO_BOTAS', descripcion: 'Mantenimiento rapido tras campo, barro o polvo.' },
  { id: 'spray-impermeabilizante', categoria: 'mantenimiento', nombre: 'Spray impermeabilizante textil', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_IMPERMEABILIZANTE', descripcion: 'Ayuda a proteger botas, mochilas o prendas compatibles.' },
  { id: 'bolsa-botas', categoria: 'mantenimiento', nombre: 'Bolsa para botas o ropa mojada', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_BOLSA_BOTAS', descripcion: 'Separa suciedad y humedad del resto de la mochila.' }
];

(function () {
  const grid = document.querySelector('#soldierShopGrid');
  const filters = document.querySelector('#soldierCategoryFilters');
  const count = document.querySelector('#soldierProductCount');
  const menuToggle = document.querySelector('#soldierCategoryMenuToggle');
  const activeCategoryLabel = document.querySelector('#soldierActiveCategoryLabel');
  if (!grid || !filters || !count) return;

  let activeCategory = 'todos';

  function getCategoryCount(categoryId) {
    if (categoryId === 'todos') return SOLDIER_SHOP_PRODUCTS.length;
    return SOLDIER_SHOP_PRODUCTS.filter((product) => product.categoria === categoryId).length;
  }

  function renderFilters() {
    filters.innerHTML = SOLDIER_SHOP_CATEGORIES.map((category) => `
      <button class="${category.id === activeCategory ? 'border-survival-500 bg-survival-500 text-black' : 'border-white/10 bg-white/5 text-white/70 hover:border-survival-500/40 hover:bg-white/10 hover:text-white'} flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition" type="button" data-category="${category.id}">
        <span>${category.label}</span>
        <span class="${category.id === activeCategory ? 'bg-black/15 text-black' : 'bg-white/5 text-white/45'} rounded-full px-2 py-0.5 text-xs">${getCategoryCount(category.id)}</span>
      </button>
    `).join('');

    const current = SOLDIER_SHOP_CATEGORIES.find((category) => category.id === activeCategory);
    if (activeCategoryLabel && current) activeCategoryLabel.textContent = current.label;
  }

  function renderProducts() {
    const products = activeCategory === 'todos'
      ? SOLDIER_SHOP_PRODUCTS
      : SOLDIER_SHOP_PRODUCTS.filter((product) => product.categoria === activeCategory);

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
