const SECURITY_SHOP_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'proteccion', label: 'Proteccion individual' },
  { id: 'iluminacion', label: 'Iluminacion profesional' },
  { id: 'comunicacion', label: 'Comunicacion operativa' },
  { id: 'navegacion', label: 'Navegacion y orientacion' },
  { id: 'auxilios', label: 'Primeros auxilios operativos' },
  { id: 'hidratacion', label: 'Hidratacion y autonomia' },
  { id: 'clima', label: 'Clima y resistencia' },
  { id: 'organizacion', label: 'Organizacion y transporte' },
  { id: 'herramientas', label: 'Herramientas de servicio' },
  { id: 'documentacion', label: 'Documentacion segura' },
  { id: 'higiene', label: 'Higiene y descanso' },
  { id: 'packs', label: 'Packs profesionales' }
];

// Cambia aqui los enlaces por tus enlaces reales o de afiliado.
const SECURITY_SHOP_PRODUCTS = [
  { id: 'chaleco-reflectante', categoria: 'proteccion', nombre: 'Chaleco reflectante profesional', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SEGURIDAD_CHALECO_REFLECTANTE', descripcion: 'Visibilidad basica para servicio exterior, eventos, parking o emergencias.' },
  { id: 'gafas-proteccion', categoria: 'proteccion', nombre: 'Gafas de proteccion envolventes', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_GAFAS', descripcion: 'Proteccion ocular frente a polvo, viento, impactos leves o tareas de mantenimiento.' },
  { id: 'guantes-anticorte', categoria: 'proteccion', nombre: 'Guantes anticorte de trabajo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_GUANTES_ANTICORTE', descripcion: 'Manipulacion, inspeccion, carga y servicio sin enfoque ofensivo.' },
  { id: 'mascarillas-ffp3', categoria: 'proteccion', nombre: 'Mascarillas FFP2/FFP3', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SEGURIDAD_MASCARILLAS', descripcion: 'Polvo, humo leve, aglomeraciones o espacios con mala ventilacion.' },

  { id: 'linterna-profesional', categoria: 'iluminacion', nombre: 'Linterna profesional recargable', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'ENLACE_SEGURIDAD_LINTERNA_PRO', descripcion: 'Alta autonomia para rondas nocturnas, inspecciones y servicio exterior.' },
  { id: 'linterna-frontal', categoria: 'iluminacion', nombre: 'Linterna frontal recargable', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_FRONTAL', descripcion: 'Trabajo con manos libres, revisiones tecnicas y baja iluminacion.' },
  { id: 'baliza-led', categoria: 'iluminacion', nombre: 'Baliza LED de emergencia', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_BALIZA', descripcion: 'Senalizacion temporal de incidencias, vehiculos o zonas de paso.' },
  { id: 'pilas-cargador', categoria: 'iluminacion', nombre: 'Pilas recargables con cargador', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_PILAS', descripcion: 'Reserva energetica para linternas, radios y pequenos dispositivos.' },

  { id: 'walkies-pmr446', categoria: 'comunicacion', nombre: 'Walkie-talkies PMR446', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_WALKIES', descripcion: 'Comunicacion civil sin licencia si cumplen normativa PMR446. No prometas alcances irreales.' },
  { id: 'auricular-ptt', categoria: 'comunicacion', nombre: 'Auricular PTT para radio', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_PTT', descripcion: 'Comunicacion mas limpia en eventos, accesos o rondas.' },
  { id: 'powerbank-reforzado', categoria: 'comunicacion', nombre: 'Powerbank robusto 20.000 mAh', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_POWERBANK', descripcion: 'Carga para movil, radio compatible, linterna USB o accesorios.' },

  { id: 'brujula-compacta', categoria: 'navegacion', nombre: 'Brujula compacta', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SEGURIDAD_BRUJULA', descripcion: 'Orientacion simple si falla el movil o no hay cobertura.' },
  { id: 'funda-mapas', categoria: 'navegacion', nombre: 'Funda impermeable para mapas', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_FUNDA_MAPAS', descripcion: 'Protege planos, rutas, instrucciones y documentacion de servicio.' },
  { id: 'localizador-mochila', categoria: 'navegacion', nombre: 'Localizador para mochila o maleta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_LOCALIZADOR', descripcion: 'Ayuda a ubicar equipo, bolsa de turno o maleta.' },

  { id: 'ifak-vacio', categoria: 'auxilios', nombre: 'IFAK vacio organizado', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_IFAK', descripcion: 'Bolsa compacta para organizar material medico de emergencia autorizado.' },
  { id: 'tijeras-trauma', categoria: 'auxilios', nombre: 'Tijeras de trauma', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_TIJERAS_TRAUMA', descripcion: 'Corte rapido de ropa o vendajes en primeros auxilios.' },
  { id: 'mascarilla-rcp', categoria: 'auxilios', nombre: 'Mascarilla RCP de bolsillo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_RCP', descripcion: 'Complemento para personal formado en primeros auxilios.' },
  { id: 'manta-termica-medica', categoria: 'auxilios', nombre: 'Manta termica de emergencia', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SEGURIDAD_MANTA_TERMICA', descripcion: 'Hipotermia, espera prolongada o proteccion termica inicial.' },

  { id: 'botella-metalica', categoria: 'hidratacion', nombre: 'Botella metalica resistente', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_BOTELLA', descripcion: 'Hidratacion diaria para rondas, controles y turnos largos.' },
  { id: 'termo-turno', categoria: 'hidratacion', nombre: 'Termo de turno', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_TERMO', descripcion: 'Bebida caliente o fria durante turnos nocturnos y exteriores.' },
  { id: 'electrolitos-turno', categoria: 'hidratacion', nombre: 'Electrolitos en sobres', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_ELECTROLITOS', descripcion: 'Apoyo en calor, turnos largos y servicio exterior.' },

  { id: 'botas-seguridad', categoria: 'clima', nombre: 'Botas de seguridad comodas', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'ENLACE_SEGURIDAD_BOTAS', descripcion: 'Los pies mandan en turnos largos. Prioriza comodidad, agarre y normativa del puesto.' },
  { id: 'calcetines-tecnicos', categoria: 'clima', nombre: 'Calcetines tecnicos antiampollas', proveedor: 'Decathlon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SEGURIDAD_CALCETINES', descripcion: 'Menos rozaduras, mas comodidad y mejor tolerancia a muchas horas de pie.' },
  { id: 'softshell', categoria: 'clima', nombre: 'Chaqueta softshell', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_SOFTSHELL', descripcion: 'Capa versatil para viento, frio suave y servicio en exterior.' },

  { id: 'cinturon-servicio', categoria: 'organizacion', nombre: 'Cinturon de servicio sin accesorios regulados', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_CINTURON', descripcion: 'Base para porta-guantes, porta-radio, linterna o documentacion permitida.' },
  { id: 'porta-radio', categoria: 'organizacion', nombre: 'Porta-radio ajustable', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_PORTA_RADIO', descripcion: 'Acceso rapido y seguro a radio compatible durante el servicio.' },
  { id: 'mochila-24h', categoria: 'organizacion', nombre: 'Mochila 24h discreta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_MOCHILA_24H', descripcion: 'Equipo de turno, agua, comida, ropa, documentacion y accesorios.' },

  { id: 'multiherramienta-servicio', categoria: 'herramientas', nombre: 'Multiherramienta de trabajo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_MULTI', descripcion: 'Reparacion, ajuste y mantenimiento ligero. No se presenta como arma.' },
  { id: 'cutter-seguridad', categoria: 'herramientas', nombre: 'Cuter de seguridad retractil', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_CUTER', descripcion: 'Apertura de cajas, bridas y tareas de servicio con enfoque laboral.' },
  { id: 'cinta-bridas-paracord', categoria: 'herramientas', nombre: 'Cinta americana, bridas y paracord', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_REPARACION', descripcion: 'Soluciones rapidas para organizar, reparar o senalizar material.' },

  { id: 'portadocumentos-cuello', categoria: 'documentacion', nombre: 'Portadocumentos de cuello', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_PORTADOCUMENTOS', descripcion: 'Acreditaciones, copias, contactos y documentacion protegida.' },
  { id: 'tarjetero-rfid', categoria: 'documentacion', nombre: 'Tarjetero RFID', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_RFID', descripcion: 'Tarjetas, identificacion, efectivo pequeno y respaldo.' },
  { id: 'bolsa-ignifuga-docs', categoria: 'documentacion', nombre: 'Bolsa ignifuga pequena', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_BOLSA_IGNIFUGA', descripcion: 'Documentos, pendrive, copias y material sensible.' },

  { id: 'toalla-microfibra', categoria: 'higiene', nombre: 'Toalla microfibra compacta', proveedor: 'Decathlon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_TOALLA', descripcion: 'Higiene y secado rapido en despliegues, rutas o descanso entre turnos.' },
  { id: 'polvos-pies', categoria: 'higiene', nombre: 'Polvos para pies y crema antirozaduras', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_PIES', descripcion: 'Cuando el turno se alarga, los pies pasan factura.' },
  { id: 'tapones-antifaz', categoria: 'higiene', nombre: 'Tapones y antifaz para descanso', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_TAPONES_ANTIFAZ', descripcion: 'Descanso diurno o entre servicios con ruido y luz.' },

  { id: 'pack-turno-basico', categoria: 'packs', nombre: 'Pack turno basico', proveedor: 'VitaGuardia', tierLabel: 'Pack completo', enlace: 'ENLACE_SEGURIDAD_PACK_TURNO', descripcion: 'Linterna, libreta, powerbank, botella, guantes y organizacion basica.' },
  { id: 'pack-exterior', categoria: 'packs', nombre: 'Pack servicio exterior', proveedor: 'VitaGuardia', tierLabel: 'Pack completo', enlace: 'ENLACE_SEGURIDAD_PACK_EXTERIOR', descripcion: 'Visibilidad, clima, hidratacion, iluminacion y documentacion.' },
  { id: 'pack-operativo-24h', categoria: 'packs', nombre: 'Pack operativo 24h', proveedor: 'VitaGuardia', tierLabel: 'Pack completo', enlace: 'ENLACE_SEGURIDAD_PACK_24H', descripcion: 'Mochila, autonomia, comunicacion, botiquin, herramientas y descanso.' }
];

(function () {
  const grid = document.querySelector('#securityShopGrid');
  const filters = document.querySelector('#securityCategoryFilters');
  const count = document.querySelector('#securityProductCount');
  const menuToggle = document.querySelector('#securityCategoryMenuToggle');
  const activeCategoryLabel = document.querySelector('#securityActiveCategoryLabel');
  if (!grid || !filters || !count) return;

  let activeCategory = 'todos';

  function getCategoryCount(categoryId) {
    if (categoryId === 'todos') return SECURITY_SHOP_PRODUCTS.length;
    return SECURITY_SHOP_PRODUCTS.filter((product) => product.categoria === categoryId).length;
  }

  function renderFilters() {
    filters.innerHTML = SECURITY_SHOP_CATEGORIES.map((category) => `
      <button class="${category.id === activeCategory ? 'border-survival-500 bg-survival-500 text-black' : 'border-white/10 bg-white/5 text-white/70 hover:border-survival-500/40 hover:bg-white/10 hover:text-white'} flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition" type="button" data-category="${category.id}">
        <span>${category.label}</span>
        <span class="${category.id === activeCategory ? 'bg-black/15 text-black' : 'bg-white/5 text-white/45'} rounded-full px-2 py-0.5 text-xs">${getCategoryCount(category.id)}</span>
      </button>
    `).join('');

    const current = SECURITY_SHOP_CATEGORIES.find((category) => category.id === activeCategory);
    if (activeCategoryLabel && current) activeCategoryLabel.textContent = current.label;
  }

  function renderProducts() {
    const products = activeCategory === 'todos'
      ? SECURITY_SHOP_PRODUCTS
      : SECURITY_SHOP_PRODUCTS.filter((product) => product.categoria === activeCategory);

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
