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
  { id: 'bolsas-estancas', categoria: 'organizacion', nombre: 'vsshe 6 Piezas Bolsas Estancas Impermeable', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DZ6B32MJ?tag=vitaguardia02-21', descripcion: 'Mantiene ropa, documentacion y electronica secos dentro de mochila o taquilla.' },
  { id: 'bolsas-compresion', categoria: 'organizacion', nombre: 'Amazon Basics Paquete de 5 bolsas de vacio para almacenamiento', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B07RTJV6G4?tag=vitaguardia02-21', descripcion: 'Reduce volumen de ropa y ayuda a ordenar la mochila.' },
  { id: 'organizador-mochila', categoria: 'organizacion', nombre: 'Ahuuen Organizador de Mochila - Moldeador Interior Multibolsillos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FS7PF16B?tag=vitaguardia02-21', descripcion: 'Separar higiene, ropa, cables, botiquin y mantenimiento sin caos.' },
  { id: 'etiquetas-material', categoria: 'organizacion', nombre: 'Etiquetas y cinta para marcar material', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_ETIQUETAS', descripcion: 'Identificacion rapida de equipo propio, bolsas y accesorios.' },

  { id: 'calcetines-tecnicos', categoria: 'pies', nombre: 'Rahhint Coolmax Compresion Calcetines Running Hombre', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'https://www.amazon.es/dp/B0BW462TBM?tag=vitaguardia02-21', descripcion: 'Los pies mandan. Buenos calcetines evitan rozaduras y mejoran marchas.' },
  { id: 'kit-antiampollas', categoria: 'pies', nombre: 'Promifun Almohadillas para ampollas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0D76DCW3S?tag=vitaguardia02-21', descripcion: 'Apositos hidrocoloides, esparadrapo y proteccion para puntos calientes.' },
  { id: 'polvos-pies', categoria: 'pies', nombre: 'Polvos para pies', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_POLVOS_PIES', descripcion: 'Ayuda con humedad, olor y rozaduras en jornadas largas.' },
  { id: 'cordones-repuesto', categoria: 'pies', nombre: 'Cordones Irrompibles para Botas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DR7ZRLWX?tag=vitaguardia02-21', descripcion: 'Pequeno repuesto que evita problemas tontos en campo.' },

  { id: 'toallitas-maniobras', categoria: 'higiene', nombre: 'by Amazon Toallitas refrescantes para bebe', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B085LQVHV8?tag=vitaguardia02-21', descripcion: 'Higiene minima cuando ducha y tiempo no acompanan.' },
  { id: 'toalla-microfibra', categoria: 'higiene', nombre: 'Legendwerk Toalla de Microfibra 160x80 cm Ligera y de Secado rapido', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DGG729VX?tag=vitaguardia02-21', descripcion: 'Ocupa poco, seca rapido y sirve para base o maniobras.' },
  { id: 'neceser-colgante', categoria: 'higiene', nombre: 'Geoyien Neceser Hombre', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DTPG3BBK?tag=vitaguardia02-21', descripcion: 'Higiene organizada en taquilla, tienda o desplazamientos.' },
  { id: 'kit-afeitado', categoria: 'higiene', nombre: 'Navaja Afeitar Barbero Profesional', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B092FZVGZ7?tag=vitaguardia02-21', descripcion: 'Aseo personal sin ocupar media mochila.' },

  { id: 'camiseta-termica', categoria: 'clima', nombre: 'Camiseta Deportiva de Manga Larga para Hombre de Compresion', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0BRMVSMVW?tag=vitaguardia02-21', descripcion: 'Capa base para guardias, frio y esperas prolongadas.' },
  { id: 'poncho-impermeable', categoria: 'clima', nombre: 'ANYOO Poncho de lluvia impermeable con mangas y bolsillo', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B07539S9G3?tag=vitaguardia02-21', descripcion: 'Proteccion rapida para lluvia, espera y equipo.' },
  { id: 'braga-cuello', categoria: 'clima', nombre: 'Buff Braga de cuello Original Ecostretch Bufanda', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B07FKD5FVW?tag=vitaguardia02-21', descripcion: 'Frio, viento, polvo y sol con una sola pieza.' },
  { id: 'calentadores-manos', categoria: 'clima', nombre: 'Calentador de Manos Recargable 2 en 1', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FM7SQGN7?tag=vitaguardia02-21', descripcion: 'Confort util en frio, esperas y turnos de noche.' },

  { id: 'bolsa-hidratacion', categoria: 'hidratacion', nombre: 'Unigear Bolsa De Agua', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B07F9WF8S5?tag=vitaguardia02-21', descripcion: 'Hidratacion accesible en marcha y maniobras.' },
  { id: 'botella-metalica', categoria: 'hidratacion', nombre: 'Navaris Botella de agua de acero inoxidable', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B08HQ8F2NS?tag=vitaguardia02-21', descripcion: 'Agua diaria para base, guardias y desplazamientos.' },
  { id: 'electrolitos', categoria: 'hidratacion', nombre: 'Sales minerales y electrolitos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B072PVFVTF?tag=vitaguardia02-21', descripcion: 'Apoyo en calor, marcha, sudoracion y esfuerzos prolongados.' },
  { id: 'barritas-frutos', categoria: 'hidratacion', nombre: 'Barritas y frutos secos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_BARRITAS', descripcion: 'Calorias rapidas para esperas, desplazamientos y maniobras.' },

  { id: 'frontal-luz-roja', categoria: 'iluminacion', nombre: 'BORUIT Linterna Frontal Luz Roja Blanca Frontales LED Alta Potencia', proveedor: 'Amazon', tierLabel: 'Opcion premium', enlace: 'https://www.amazon.es/dp/B09KFYWW9D?tag=vitaguardia02-21', descripcion: 'Iluminacion de campo sin molestar tanto de noche.' },
  { id: 'linterna-angular', categoria: 'iluminacion', nombre: 'Lepro Linterna LED LE1000', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B005FEGYCO?tag=vitaguardia02-21', descripcion: 'Uso en mochila, bolsillo o tareas con manos libres.' },
  { id: 'luz-usb', categoria: 'iluminacion', nombre: '2ud Mini lampara USB LED portatil Negro', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B096G3TB1N?tag=vitaguardia02-21', descripcion: 'Luz discreta para habitacion, tienda o lectura.' },

  { id: 'powerbank-20000', categoria: 'carga', nombre: 'Powerbank resistente 20.000 mAh', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_POWERBANK', descripcion: 'Carga para movil, frontal, reloj y accesorios permitidos.' },
  { id: 'cable-multi', categoria: 'carga', nombre: 'Cable multi-conector corto', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'ENLACE_SOLDADO_CABLE_MULTI', descripcion: 'Un cable para varios dispositivos y menos lio en mochila.' },
  { id: 'regleta-pequena', categoria: 'carga', nombre: 'Regleta 8-en-1 con USB-C Carga Rapida 20W y Proteccion Sobretension', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0GMVNPZFH?tag=vitaguardia02-21', descripcion: 'Muy util en habitacion compartida, base o desplazamientos.' },
  { id: 'organizador-cables', categoria: 'carga', nombre: 'Organizador de cables', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'ENLACE_SOLDADO_ORGANIZADOR_CABLES', descripcion: 'Cables, cargadores, pilas y adaptadores localizados.' },

  { id: 'saco-compacto', categoria: 'descanso', nombre: 'Saco de Dormir de plumon - 5 C', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CXPNY32Y?tag=vitaguardia02-21', descripcion: 'Descanso en campo, desplazamientos o frio moderado.' },
  { id: 'almohada-hinchable', categoria: 'descanso', nombre: 'HIKENTURE Almohada Hinchable para Camping', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0895FZCVY?tag=vitaguardia02-21', descripcion: 'Pequena mejora que se agradece mucho tras muchas horas.' },
  { id: 'chanclas-ducha', categoria: 'descanso', nombre: 'Seac Ohau, Chanclas de Goma para Mar, Piscina, Playa y Barco', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B07LGNQ1PF?tag=vitaguardia02-21', descripcion: 'Higiene en duchas compartidas y vida en base.' },
  { id: 'candado-taquilla', categoria: 'descanso', nombre: 'GRIFEMA GA1001-1 Candado de Combinacion', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0BNPRS182?tag=vitaguardia02-21', descripcion: 'Organizacion y control de taquilla, bolsa o maleta.' },

  { id: 'mini-botiquin', categoria: 'botiquin', nombre: 'HONYAO Botiquin de Primeros Auxilios 90 Piezas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0B4GWF112?tag=vitaguardia02-21', descripcion: 'Curas basicas personales: gasas, vendas, tiritas y antiseptico.' },
  { id: 'tijeras-trauma', categoria: 'botiquin', nombre: 'lfdhcn Tijeras de alicates plegables', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B09KRYMH5Q?tag=vitaguardia02-21', descripcion: 'Material sanitario complementario para personal formado.' },
  { id: 'ifak-vacio', categoria: 'botiquin', nombre: 'TANSOLE botiquin vacio Militar hombre ifak pouch Emergencia bolsa', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B09N3RRLV5?tag=vitaguardia02-21', descripcion: 'Bolsa para ordenar material medico personal autorizado.' },

  { id: 'multiherramienta', categoria: 'herramientas', nombre: 'XEEMKAR Alicates multiusos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FDQWRGZT?tag=vitaguardia02-21', descripcion: 'Mantenimiento y pequenas reparaciones. No se presenta como arma.' },
  { id: 'kit-costura', categoria: 'herramientas', nombre: 'JUNING Kit de Costura', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0B4P2G4NY?tag=vitaguardia02-21', descripcion: 'Botones, roturas, parches y arreglos rapidos de ropa/equipo.' },
  { id: 'cinta-bridas', categoria: 'herramientas', nombre: 'Dpm tapes - Tesa 4615', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0B4JRZQ3B?tag=vitaguardia02-21', descripcion: 'Soluciones simples para reparaciones y organizacion.' },

  { id: 'funda-documentos', categoria: 'documentacion', nombre: 'FLASLD Bolsa Ignifuga Carteras Ignifugas 20 x 12.7 cm', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CGHLVPZX?tag=vitaguardia02-21', descripcion: 'DNI, pasaporte, copias, tarjetas y papeles protegidos.' },
  { id: 'carpeta-resistente', categoria: 'documentacion', nombre: 'Raylu Paper Carpeta A4 con Gomas Elasticas y Solapas', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CHMTJM2J?tag=vitaguardia02-21', descripcion: 'Orden para papeles, copias, instrucciones y desplazamientos.' },
  { id: 'pendrive-cifrado', categoria: 'documentacion', nombre: 'Pendrive cifrado', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B00TUBZ7RQ?tag=vitaguardia02-21', descripcion: 'Copias personales y documentos digitales protegidos.' },

  { id: 'cepillo-botas', categoria: 'mantenimiento', nombre: 'Kit de Limpieza de Zapatos y Zapatillas - Cepillo Limpiador Con 3 Piezas', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0D47JHNFL?tag=vitaguardia02-21', descripcion: 'Mantenimiento rapido tras campo, barro o polvo.' },
  { id: 'spray-impermeabilizante', categoria: 'mantenimiento', nombre: 'Bufalo - Spray Impermeabilizante Calzado 250ml - Spray Protector', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0D44WM77X?tag=vitaguardia02-21', descripcion: 'Ayuda a proteger botas, mochilas o prendas compatibles.' },
  { id: 'bolsa-botas', categoria: 'mantenimiento', nombre: 'Euablfo 3 PCS Bolsa Ropa Mojada', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0GFMQQT1W?tag=vitaguardia02-21', descripcion: 'Separa suciedad y humedad del resto de la mochila.' }
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

  function renderProductLink(product) {
    const hasLink = product.enlace && !product.enlace.startsWith('ENLACE_');
    if (!hasLink) {
      return '';
    }

    return `<a class="rounded-xl border border-white/15 px-4 py-3 text-sm font-black text-white/75 hover:bg-white/10" href="${product.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver producto</a>`;
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
            ${renderProductLink(product)}
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
    const product = SOLDIER_SHOP_PRODUCTS.find((item) => item.id === productId);
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
