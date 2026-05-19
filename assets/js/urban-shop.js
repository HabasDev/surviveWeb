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

// Cambia aqui los enlaces por tus enlaces reales, afiliados o tienda propia.
const URBAN_SHOP_PRODUCTS = [
  { id: 'mochila-antirrobo', categoria: 'mochila', nombre: 'smallrun Mochila Enrollable Impermeable Antirrobo para Portatil 15', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0GVPM5CZF?tag=vitaguardia02-21', descripcion: 'Mochila discreta para EDC, documentos, agua y energia movil.' },
  { id: 'organizador-edc', categoria: 'mochila', nombre: 'Sayram SP6 - Organizador EDC Compacto de Lona Encerada', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CRRGLHYD?tag=vitaguardia02-21', descripcion: 'Ordena cables, botiquin pequeno, libreta, linterna y accesorios.' },
  { id: 'cartera-rfid', categoria: 'mochila', nombre: 'TEEHON Cartera para Hombre Slim Fibra de Carbono con Bloqueo RFID', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0CLY2TQH8?tag=vitaguardia02-21', descripcion: 'Proteccion y organizacion para tarjetas, efectivo y documentos.' },

  { id: 'zapatillas-repuesto', categoria: 'vuelta', nombre: 'Columbia Crestwood zapatillas de trekking', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B07JHW52XH?tag=vitaguardia02-21', descripcion: 'Pensadas para volver andando si falla transporte o hay corte prolongado.' },
  { id: 'calcetines-antirozaduras', categoria: 'vuelta', nombre: 'Niorasen Calcetines Trekking Hombre', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0F8VSYRMF?tag=vitaguardia02-21', descripcion: 'Pequeno cambio que puede salvar una caminata larga.' },
  { id: 'mini-botiquin-ampollas', categoria: 'vuelta', nombre: 'COMPEED Ampollas Extreme', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B09RVQ1B3J?tag=vitaguardia02-21', descripcion: 'Tiritas hidrocoloides, gasas y cura rapida para caminar.' },
  { id: 'poncho-compacto', categoria: 'vuelta', nombre: 'flintronic Chubasqueros Impermeable', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CHRMRN87?tag=vitaguardia02-21', descripcion: 'Lluvia, viento y espera al aire libre sin ocupar espacio.' },

  { id: 'botella-filtro', categoria: 'agua', nombre: 'Bachgold Botella filtro purificador', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DJ1GHMFJ?tag=vitaguardia02-21', descripcion: 'Rellenar donde puedas y mejorar seguridad del agua.' },
  { id: 'botella-plegable', categoria: 'agua', nombre: 'SiGuLiKeJi Botella Agua Plegable Silicona', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0FSWZ8RGK?tag=vitaguardia02-21', descripcion: 'Reserva flexible de agua sin cargar volumen todo el dia.' },
  { id: 'electrolitos', categoria: 'agua', nombre: 'Electrolitos en polvo Hydraid LIMON (1118 mg) 25 sobres bebida deportiva', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B097DQDKZ3?tag=vitaguardia02-21', descripcion: 'Hidratacion en caminatas largas, calor o esperas prolongadas.' },

  { id: 'powerbank-10000', categoria: 'energia', nombre: 'Belkin BoostCharge bateria Externa de 10 000 mAh', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DJFGSSST?tag=vitaguardia02-21', descripcion: 'Energia de bolsillo para movil, mapa, pagos y comunicacion.' },
  { id: 'cable-multiconector', categoria: 'energia', nombre: 'RAVIAD Multi Cable de Carga Corto [50CM]', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DLGBJFGP?tag=vitaguardia02-21', descripcion: 'Un solo cable para USB-C, micro USB y Lightning segun modelo.' },
  { id: 'funda-movil-impermeable', categoria: 'energia', nombre: 'JOTO Funda Impermeable Movil [2 Unidades]', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B07V8HGM7T?tag=vitaguardia02-21', descripcion: 'Protege el dispositivo que hace de mapa, linterna y comunicacion.' },

  { id: 'mapa-local', categoria: 'orientacion', nombre: 'Mapa fisico local/provincia', proveedor: 'Libreria', tierLabel: 'Opcion basica', enlace: 'ENLACE_URBANO_MAPA', descripcion: 'Plan B cuando internet o Google Maps dejan de ayudar.' },
  { id: 'radio-portatil', categoria: 'orientacion', nombre: 'Radio a Pilas Transistor Pequena Analogica Portatil FM Am Transistor', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DC6ZL2QB?tag=vitaguardia02-21', descripcion: 'Informacion basica si hay cortes de red o emergencia publica.' },
  { id: 'libreta-impermeable', categoria: 'orientacion', nombre: '4 Libreta Bolsillo Impermeables', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0F1FQ48M3?tag=vitaguardia02-21', descripcion: 'Contactos, rutas alternativas, notas y datos medicos.' },

  { id: 'alarma-personal', categoria: 'seguridad', nombre: 'Alarma de Seguridad Personal', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FF4FQ5XV?tag=vitaguardia02-21', descripcion: 'Aviso sonoro para llamar la atencion y ganar margen.' },
  { id: 'linterna-compacta', categoria: 'seguridad', nombre: 'flintronic Linterna LED Recargable', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0DLNNF3N1?tag=vitaguardia02-21', descripcion: 'Visibilidad, orientacion y aviso sin entrar en productos regulados.' },
  { id: 'brazalete-reflectante', categoria: 'seguridad', nombre: 'URAQT Bandas Reflectoras', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0BHZR4FGS?tag=vitaguardia02-21', descripcion: 'Mas visibilidad caminando de noche o por vias poco iluminadas.' },

  { id: 'mini-botiquin', categoria: 'botiquin', nombre: 'LEWIS-PLAST Kit de primeros auxilios Saco de primeros auxilios 160', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B08K5QGB2G?tag=vitaguardia02-21', descripcion: 'Cortes, golpes, ampollas y pequenas heridas durante movilidad.' },
  { id: 'tiritas-hidrocoloides', categoria: 'botiquin', nombre: 'Apositos Hidrocoloides Rollo Parche', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FSKPWP1M?tag=vitaguardia02-21', descripcion: 'Especialmente utiles para rozaduras y ampollas.' },
  { id: 'mascarillas-ffp2', categoria: 'botiquin', nombre: '20 Mascarillas faciales FFP2 de colores Tamano pequeno Pequeno', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0B2F655KZ?tag=vitaguardia02-21', descripcion: 'Polvo, aglomeraciones, humo leve o espacios cerrados.' },

  { id: 'toallitas-gel', categoria: 'higiene', nombre: 'Toallitas de manos hidroalcoholicas 75% Alcohol Paquete 15 ud. Pack 4', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0F4157DKS?tag=vitaguardia02-21', descripcion: 'Higiene minima en esperas largas, transporte o refugio temporal.' },
  { id: 'papel-comprimido', categoria: 'higiene', nombre: 'Biolane - Toallitas Pure Water Bebe', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0FV4GSV3H?tag=vitaguardia02-21', descripcion: 'Ocupa poco y evita depender de banos publicos.' },
  { id: 'kit-dental-mini', categoria: 'higiene', nombre: 'Colgate Kit de Viaje Portatil Incluye Cepillo Dental Suave y Pasta de', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0DWSMQN5J?tag=vitaguardia02-21', descripcion: 'Para pasar una noche complicada fuera de casa.' },

  { id: 'multiherramienta-compacta', categoria: 'herramientas', nombre: 'RoverTac Cuchillo de Bolsillo Multiherramienta Camping Cuchillo Regalos', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B08CC1T7P8?tag=vitaguardia02-21', descripcion: 'Reparacion ligera, no planteada como defensa ni armamento.' },
  { id: 'cinta-bridas', categoria: 'herramientas', nombre: 'Dpm tapes - Tesa 4615', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0B4JRZQ3B?tag=vitaguardia02-21', descripcion: 'Arreglos rapidos de mochila, ropa, cables o pequenos equipos.' },
  { id: 'guantes-trabajo-finos', categoria: 'herramientas', nombre: 'Ogrifox OX-Poliur_Bb9 - Guantes protectores (24 unidades', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B013KVL2TI?tag=vitaguardia02-21', descripcion: 'Proteccion para mover objetos, cristales, polvo o reparaciones.' },

  { id: 'chubasquero-compacto', categoria: 'clima', nombre: 'Poncho lluvia Impermeable para Adultos', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0F8PY8XQK?tag=vitaguardia02-21', descripcion: 'Caminar o esperar bajo lluvia sin empapar mochila y ropa.' },
  { id: 'braga-cuello', categoria: 'clima', nombre: 'Buff Braga De Cuello Coolnet Uv Solid Military', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0C37KC2QW?tag=vitaguardia02-21', descripcion: 'Frio, viento, polvo o sol segun situacion.' },
  { id: 'calcetines-repuesto', categoria: 'clima', nombre: 'Niorasen Calcetines Trekking Hombre', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0F8VVVBGQ?tag=vitaguardia02-21', descripcion: 'Pies secos y menos rozaduras en trayectos largos.' },

  { id: 'funda-documentos', categoria: 'documentos', nombre: 'FLASLD Bolsa Ignifuga Carteras Ignifugas 20 x 12.7 cm', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B0CGHLVPZX?tag=vitaguardia02-21', descripcion: 'DNI, tarjeta sanitaria, contactos y copias protegidas.' },
  { id: 'organizador-documentos', categoria: 'documentos', nombre: 'Funda para documentos ignifuga A4', proveedor: 'Amazon', tierLabel: 'Mejor relacion calidad-precio', enlace: 'https://www.amazon.es/dp/B0FSZ445CJ?tag=vitaguardia02-21', descripcion: 'Efectivo pequeno, tarjeta prepago, copias y datos importantes.' },

  { id: 'barritas-urbanas', categoria: 'comida', nombre: 'Science in Sport Beta Fuel Barra 6 x 60g Naranja', proveedor: 'Amazon', tierLabel: 'Opcion basica', enlace: 'https://www.amazon.es/dp/B097B3GLYR?tag=vitaguardia02-21', descripcion: 'Calorias rapidas para caminatas, esperas o una noche fuera.' },
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
      <article class="flex min-h-[390px] flex-col rounded-[1.25rem] border border-white/10 bg-white/[.055] p-5 transition hover:-translate-y-1 hover:border-survival-500/45 hover:bg-white/[.075]">
        ${window.getProductVisual ? window.getProductVisual(product) : ''}
        <div class="mb-4 mt-4 flex items-start justify-between gap-3">
          <span class="rounded-full bg-survival-500/15 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-survival-300">${product.tierLabel}</span>
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
    const product = URBAN_SHOP_PRODUCTS.find((item) => item.id === productId);
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
