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
  { id: 'chaleco-reflectante', categoria: 'proteccion', nombre: 'Salzmann Chaleco de Seguridad Multibolsillos 14 Colores y 5 Tamanos', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0759X5MMB?tag=vitaguardia02-21', descripcion: 'Visibilidad basica para servicio exterior, eventos, parking o emergencias.' },
  { id: 'gafas-proteccion', categoria: 'proteccion', nombre: 'TOREGE IPL 200-2000nm Gafas de seguridad laser Gafas protectoras', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0BVB5PGMS?tag=vitaguardia02-21', descripcion: 'Proteccion ocular frente a polvo, viento, impactos leves o tareas de mantenimiento.' },
  { id: 'guantes-anticorte', categoria: 'proteccion', nombre: 'Guantes anticortes policiales certificados en 388/2016', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0D91BG53M?tag=vitaguardia02-21', descripcion: 'Manipulacion, inspeccion, carga y servicio sin enfoque ofensivo.' },
  { id: 'mascarillas-ffp3', categoria: 'proteccion', nombre: 'Grafoplas I Pack de 25 Mascarillas FFP2 Blancas: Proteccion Premium', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B08XQN1DVL?tag=vitaguardia02-21', descripcion: 'Polvo, humo leve, aglomeraciones o espacios con mala ventilacion.' },

  { id: 'linterna-profesional', categoria: 'iluminacion', nombre: 'Linternas LED Alta Potencia', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'https://www.amazon.es/dp/B0DTPRMSJ3?tag=vitaguardia02-21', descripcion: 'Alta autonomia para rondas nocturnas, inspecciones y servicio exterior.' },
  { id: 'linterna-frontal', categoria: 'iluminacion', nombre: 'UNBON Linterna Frontal LED Recargable USB C', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0F48B1XNN?tag=vitaguardia02-21', descripcion: 'Trabajo con manos libres, revisiones tecnicas y baja iluminacion.' },
  { id: 'baliza-led', categoria: 'iluminacion', nombre: 'PNNNU Luz Recargable Homologada V16 Baliza De Ayuda De Emergencia', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0BHZCSWWN?tag=vitaguardia02-21', descripcion: 'Senalizacion temporal de incidencias, vehiculos o zonas de paso.' },
  { id: 'pilas-cargador', categoria: 'iluminacion', nombre: 'BONAI Cargador de Bateria con Pilas Recargables 2X AA y 2X AAA de 1', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FPWK561C?tag=vitaguardia02-21', descripcion: 'Reserva energetica para linternas, radios y pequenos dispositivos.' },

  { id: 'walkies-pmr446', categoria: 'comunicacion', nombre: 'Retevis RT668 Walkie Talkie con Auricular', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B08J9YCB8M?tag=vitaguardia02-21', descripcion: 'Comunicacion civil sin licencia si cumplen normativa PMR446. No prometas alcances irreales.' },
  { id: 'auricular-ptt', categoria: 'comunicacion', nombre: 'TECHZOCO Auricular Microfono PTT para Emisora Walkie Yaesu Vertex', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DQJGJPNY?tag=vitaguardia02-21', descripcion: 'Comunicacion mas limpia en eventos, accesos o rondas.' },
  { id: 'powerbank-reforzado', categoria: 'comunicacion', nombre: 'Anker Prime Power Bank', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0BYNZXFM2?tag=vitaguardia02-21', descripcion: 'Carga para movil, radio compatible, linterna USB o accesorios.' },

  { id: 'brujula-compacta', categoria: 'navegacion', nombre: 'Gvolatee Brujula Militar Impermeable Brujula Profesional', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0BNN5P6BX?tag=vitaguardia02-21', descripcion: 'Orientacion simple si falla el movil o no hay cobertura.' },
  { id: 'funda-mapas', categoria: 'navegacion', nombre: 'Sumind Estuche Impermeable de Mapas Cubierta de Mapa Transparente Bolsa', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B08QJ85HQ9?tag=vitaguardia02-21', descripcion: 'Protege planos, rutas, instrucciones y documentacion de servicio.' },
  { id: 'localizador-mochila', categoria: 'navegacion', nombre: 'Air Tracker Tag-2 Pack', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0GJ5NV7G4?tag=vitaguardia02-21', descripcion: 'Ayuda a ubicar equipo, bolsa de turno o maleta.' },

  { id: 'ifak-vacio', categoria: 'auxilios', nombre: 'WYNEX Bolsa tactica de primeros auxilios', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B082NQ1L7K?tag=vitaguardia02-21', descripcion: 'Bolsa compacta para organizar material medico de emergencia autorizado.' },
  { id: 'tijeras-trauma', categoria: 'auxilios', nombre: 'lfdhcn Tijeras de alicates plegables', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B09KRYMH5Q?tag=vitaguardia02-21', descripcion: 'Corte rapido de ropa o vendajes en primeros auxilios.' },
  { id: 'mascarilla-rcp', categoria: 'auxilios', nombre: '5 Pcs Unidades de Mascaras Respiratorias CPR', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CHM2SWBJ?tag=vitaguardia02-21', descripcion: 'Complemento para personal formado en primeros auxilios.' },
  { id: 'manta-termica-medica', categoria: 'auxilios', nombre: 'Mantas Termicas de Emergencia', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CDBC4JR1?tag=vitaguardia02-21', descripcion: 'Hipotermia, espera prolongada o proteccion termica inicial.' },

  { id: 'botella-metalica', categoria: 'hidratacion', nombre: 'ABOVE. Botella Agua Acero Inoxidable 1.3L / 2.2L Sin BPA', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B081VH377Z?tag=vitaguardia02-21', descripcion: 'Hidratacion diaria para rondas, controles y turnos largos.' },
  { id: 'termo-turno', categoria: 'hidratacion', nombre: 'Tlater Taza de cafe para llevar', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0B3W3T9WS?tag=vitaguardia02-21', descripcion: 'Bebida caliente o fria durante turnos nocturnos y exteriores.' },
  { id: 'electrolitos-turno', categoria: 'hidratacion', nombre: 'HYDUST by SUPREY- Electrolitos en Polvo para Hidratacion 0 Azucar', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0G52LW6TW?tag=vitaguardia02-21', descripcion: 'Apoyo en calor, turnos largos y servicio exterior.' },

  { id: 'botas-seguridad', categoria: 'clima', nombre: 'Zapatos de Seguridad', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'https://www.amazon.es/dp/B0DFCJZ8XV?tag=vitaguardia02-21', descripcion: 'Los pies mandan en turnos largos. Prioriza comodidad, agarre y normativa del puesto.' },
  { id: 'calcetines-tecnicos', categoria: 'clima', nombre: 'BULLIANT Calcetines Hombre 6 Pares', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0B6GZDVYL?tag=vitaguardia02-21', descripcion: 'Menos rozaduras, mas comodidad y mejor tolerancia a muchas horas de pie.' },
  { id: 'softshell', categoria: 'clima', nombre: 'Mukua Richmond Cazadora Soft Shell Unisex', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CV5GPMSF?tag=vitaguardia02-21', descripcion: 'Capa versatil para viento, frio suave y servicio en exterior.' },

  { id: 'cinturon-servicio', categoria: 'organizacion', nombre: '2 piezas de cinturon elastico con gancho metalico', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0GF6KNWQT?tag=vitaguardia02-21', descripcion: 'Base para porta-guantes, porta-radio, linterna o documentacion permitida.' },
  { id: 'porta-radio', categoria: 'organizacion', nombre: 'Funda tactica para Radio', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0C2CDY9TC?tag=vitaguardia02-21', descripcion: 'Acceso rapido y seguro a radio compatible durante el servicio.' },
  { id: 'mochila-24h', categoria: 'organizacion', nombre: 'Lenovo Mochila B210 para ordenadores portatiles de 15.6 pulgadas', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B075Y72PHZ?tag=vitaguardia02-21', descripcion: 'Equipo de turno, agua, comida, ropa, documentacion y accesorios.' },

  { id: 'multiherramienta-servicio', categoria: 'herramientas', nombre: 'Alicates Plegables Multiherramienta', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FKBKQKBH?tag=vitaguardia02-21', descripcion: 'Reparacion, ajuste y mantenimiento ligero. No se presenta como arma.' },
  { id: 'cutter-seguridad', categoria: 'herramientas', nombre: 'MARTOR Cuchillo de seguridad con retraccion de hoja', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B004OYYBIU?tag=vitaguardia02-21', descripcion: 'Apertura de cajas, bridas y tareas de servicio con enfoque laboral.' },
  { id: 'cinta-bridas-paracord', categoria: 'herramientas', nombre: 'Cinta americana, bridas y paracord', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SEGURIDAD_REPARACION', descripcion: 'Soluciones rapidas para organizar, reparar o senalizar material.' },

  { id: 'portadocumentos-cuello', categoria: 'documentacion', nombre: 'Portadocumentos Viaje de Cuello', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DNVYBP2L?tag=vitaguardia02-21', descripcion: 'Acreditaciones, copias, contactos y documentacion protegida.' },
  { id: 'tarjetero-rfid', categoria: 'documentacion', nombre: 'RE Tarjetero para Hombre', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0F9X58C3S?tag=vitaguardia02-21', descripcion: 'Tarjetas, identificacion, efectivo pequeno y respaldo.' },
  { id: 'bolsa-ignifuga-docs', categoria: 'documentacion', nombre: 'FLASLD Bolsa Ignifuga Carteras Ignifugas 20 x 12.7 cm', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CGHLVPZX?tag=vitaguardia02-21', descripcion: 'Documentos, pendrive, copias y material sensible.' },

  { id: 'toalla-microfibra', categoria: 'higiene', nombre: 'Legendwerk Toalla de Microfibra 160x80 cm Ligera y de Secado rapido', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DGG729VX?tag=vitaguardia02-21', descripcion: 'Higiene y secado rapido en despliegues, rutas o descanso entre turnos.' },
  { id: 'polvos-pies', categoria: 'higiene', nombre: 'Calber Talco Dermoprotector y Hipoalergenico - 200 gr', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B00J2V2VIW?tag=vitaguardia02-21', descripcion: 'Cuando el turno se alarga, los pies pasan factura.' },
  { id: 'tapones-antifaz', categoria: 'higiene', nombre: 'Set Bloqueadores ruido + Antifaz', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DQQ2HGLP?tag=vitaguardia02-21', descripcion: 'Descanso diurno o entre servicios con ruido y luz.' },

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
    const product = SECURITY_SHOP_PRODUCTS.find((item) => item.id === productId);
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
