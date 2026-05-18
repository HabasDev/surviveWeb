(function () {
  const CATEGORY_MAP = {
    agua: ['water', 'Agua'],
    hidratacion: ['water', 'Agua'],
    luz: ['light', 'Luz'],
    iluminacion: ['light', 'Luz'],
    energia: ['power', 'Energia'],
    carga: ['power', 'Energia'],
    botiquin: ['medical', 'Botiquin'],
    auxilios: ['medical', 'Botiquin'],
    mochila: ['carry', 'Mochila'],
    organizacion: ['carry', 'Organizacion'],
    comunicacion: ['radio', 'Comunicacion'],
    orientacion: ['radio', 'Orientacion'],
    navegacion: ['radio', 'Orientacion'],
    calor: ['climate', 'Clima'],
    clima: ['climate', 'Clima'],
    pies: ['climate', 'Pies'],
    descanso: ['climate', 'Descanso'],
    comida: ['food', 'Comida'],
    despensa: ['food', 'Comida'],
    cocina: ['food', 'Cocina'],
    seguridad: ['safety', 'Seguridad'],
    proteccion: ['safety', 'Proteccion'],
    documentacion: ['docs', 'Documentos'],
    documentos: ['docs', 'Documentos'],
    higiene: ['hygiene', 'Higiene'],
    herramientas: ['tools', 'Herramientas'],
    mantenimiento: ['tools', 'Mantenimiento'],
    vuelta: ['carry', 'Movilidad'],
    packs: ['pack', 'Pack']
  };

  const ICONS = {
    water: '<path d="M12 3C8.8 7 7 10 7 13a5 5 0 0 0 10 0c0-3-1.8-6-5-10Z"/><path d="M9.5 14.5c.6 1.4 1.7 2.1 3.2 2.1"/>',
    light: '<path d="M9 2h6l-1 7h-4L9 2Z"/><path d="M10 9h4l2 11H8l2-11Z"/><path d="M7 22h10"/><path d="M12 12v5"/>',
    power: '<path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z"/>',
    medical: '<path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M5 7h14v13H5V7Z"/><path d="M12 10v7M8.5 13.5h7"/>',
    carry: '<path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 12h6"/>',
    radio: '<path d="M6 9h12v10H6V9Z"/><path d="m8 7 7-4"/><path d="M9 13h3M9 16h2"/><circle cx="15.5" cy="14.5" r="1.8"/>',
    climate: '<path d="M12 3v18"/><path d="m7 7 5 5 5-5"/><path d="m7 17 5-5 5 5"/><path d="M4 12h16"/>',
    food: '<path d="M7 3v8"/><path d="M4.5 3v8a2.5 2.5 0 0 0 5 0V3"/><path d="M7 13v8"/><path d="M16 3v18"/><path d="M16 3c3 2.5 3 6.5 0 9"/>',
    safety: '<path d="M12 3 20 7v5c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V7l8-4Z"/><path d="M9 12.5 11 15l4-5"/>',
    docs: '<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5"/><path d="M10 12h6M10 16h6"/>',
    hygiene: '<path d="M8 11h8v10H8V11Z"/><path d="M10 11V8a2 2 0 0 1 4 0v3"/><path d="M7 4h10"/><path d="M9 4l1 3h4l1-3"/>',
    tools: '<path d="M14.5 5.5a4 4 0 0 0 4 4L9 19l-4-4 9.5-9.5Z"/><path d="m5 15 4 4"/><path d="M16 3l5 5"/>',
    pack: '<path d="M5 8h14v11H5V8Z"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M8 13h8"/><path d="M12 10v6"/>'
  };

  const STYLE = `
    .vg-product-visual{position:relative;isolation:isolate;min-height:116px;border-radius:1rem;overflow:hidden;border:1px solid rgba(255,255,255,.11);background:#0a100a;box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
    .vg-product-visual::before{content:"";position:absolute;inset:-45% -20%;background:radial-gradient(circle at 24% 26%,rgba(134,216,61,.4),transparent 26%),radial-gradient(circle at 82% 14%,rgba(255,255,255,.16),transparent 18%),linear-gradient(135deg,rgba(255,255,255,.08),transparent 42%);z-index:-2}
    .vg-product-visual::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.62),transparent 68%),repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 1px,transparent 1px 13px);opacity:.9;z-index:-1}
    .vg-product-visual[data-vg-cat="water"]{background:#071314}.vg-product-visual[data-vg-cat="light"]{background:#131106}.vg-product-visual[data-vg-cat="power"]{background:#111306}.vg-product-visual[data-vg-cat="medical"]{background:#140b0b}.vg-product-visual[data-vg-cat="carry"]{background:#0d1109}.vg-product-visual[data-vg-cat="radio"]{background:#090e13}.vg-product-visual[data-vg-cat="climate"]{background:#0b1012}.vg-product-visual[data-vg-cat="food"]{background:#111006}.vg-product-visual[data-vg-cat="safety"]{background:#0b1110}.vg-product-visual[data-vg-cat="docs"]{background:#100f0b}.vg-product-visual[data-vg-cat="hygiene"]{background:#0b1210}.vg-product-visual[data-vg-cat="tools"]{background:#10100d}.vg-product-visual[data-vg-cat="pack"]{background:#101409}
    .vg-product-visual__icon{position:absolute;right:1rem;bottom:.85rem;display:flex;height:4.75rem;width:4.75rem;align-items:center;justify-content:center;border-radius:1.1rem;background:rgba(0,0,0,.36);color:#a9ef61;box-shadow:0 0 28px rgba(111,190,36,.2)}
    .vg-product-visual__icon svg{height:2.8rem;width:2.8rem;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .vg-product-visual__label{position:absolute;left:1rem;bottom:.95rem;max-width:58%;font-size:.72rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.72)}
    .vg-product-visual__stripe{position:absolute;left:1rem;top:1rem;height:.35rem;width:4rem;border-radius:999px;background:#6fbe24;box-shadow:0 0 22px rgba(111,190,36,.42)}
    .vg-product-visual--compact{min-height:72px;width:82px;flex:0 0 82px;border-radius:.85rem}
    .vg-product-visual--compact .vg-product-visual__icon{right:.55rem;bottom:.5rem;height:2.7rem;width:2.7rem;border-radius:.75rem}
    .vg-product-visual--compact .vg-product-visual__icon svg{height:1.7rem;width:1.7rem}
    .vg-product-visual--compact .vg-product-visual__label{display:none}
    .vg-product-visual--compact .vg-product-visual__stripe{left:.6rem;top:.65rem;width:2.4rem}
  `;

  function ensureStyles() {
    if (document.querySelector('#vgProductVisualStyles')) return;
    const style = document.createElement('style');
    style.id = 'vgProductVisualStyles';
    style.textContent = STYLE;
    document.head.appendChild(style);
  }

  function getVisualMeta(product) {
    return CATEGORY_MAP[product && product.categoria] || ['pack', 'Equipo'];
  }

  window.getProductVisual = function getProductVisual(product, options = {}) {
    ensureStyles();
    const [key, label] = getVisualMeta(product || {});
    const icon = ICONS[key] || ICONS.pack;
    const compact = options.compact ? ' vg-product-visual--compact' : '';
    return `
      <div class="vg-product-visual${compact}" data-vg-cat="${key}" aria-hidden="true">
        <span class="vg-product-visual__stripe"></span>
        <span class="vg-product-visual__label">${label}</span>
        <span class="vg-product-visual__icon"><svg viewBox="0 0 24 24">${icon}</svg></span>
      </div>
    `;
  };
})();
