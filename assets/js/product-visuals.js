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
    tablets: '<path d="M7 8.5a4.5 4.5 0 0 1 9 0c0 3.2-3.6 7.1-4.5 8-.9-.9-4.5-4.8-4.5-8Z"/><path d="M9.5 8.5h4"/><circle cx="17.5" cy="17.5" r="2.2"/><path d="m16 19 3-3"/>',
    filter: '<path d="M6 4h12l-4.5 7v7l-3 2v-9L6 4Z"/><path d="M8 7h8"/><path d="M10 11h4"/><path d="M17 16c1.2 1.2 1.8 2.1 1.8 3a1.8 1.8 0 0 1-3.6 0c0-.9.6-1.8 1.8-3Z"/>',
    bottle: '<path d="M9 3h6v3l-1 1v13a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V7L9 6V3Z"/><path d="M9 6h6"/><path d="M10 12h4"/><path d="M10 16h4"/>',
    jerrycan: '<path d="M7 5h7l3 3v12H7V5Z"/><path d="M10 5V3h5v5"/><path d="m9 10 6 6"/><path d="m15 10-6 6"/>',
    light: '<path d="M9 2h6l-1 7h-4L9 2Z"/><path d="M10 9h4l2 11H8l2-11Z"/><path d="M7 22h10"/><path d="M12 12v5"/>',
    headlamp: '<path d="M5 9c4.5-2 9.5-2 14 0"/><path d="M7 13c3.4 1.5 6.6 1.5 10 0"/><rect x="9" y="8" width="6" height="7" rx="2"/><path d="M12 10v3"/><path d="m17 11 4-2M17 13h4M17 15l4 2"/>',
    lamp: '<path d="M8 10h8l2 10H6l2-10Z"/><path d="M10 10V6a2 2 0 0 1 4 0v4"/><path d="M9 20h6"/><path d="M12 13v4"/>',
    power: '<path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z"/>',
    battery: '<rect x="4" y="7" width="15" height="10" rx="2"/><path d="M21 10v4"/><path d="M8 11h3M9.5 9.5v3"/><path d="M14 11h2"/>',
    solar: '<rect x="4" y="9" width="16" height="10" rx="1"/><path d="M8 9v10M12 9v10M16 9v10M4 14h16"/><path d="M12 2v3M5.6 5.6l2.1 2.1M18.4 5.6l-2.1 2.1"/>',
    cable: '<path d="M8 7v4a4 4 0 0 0 8 0V7"/><path d="M6 7h4V3H6v4ZM14 7h4V3h-4v4Z"/><path d="M12 15v6"/><path d="M9 21h6"/>',
    powerstrip: '<rect x="4" y="6" width="16" height="12" rx="3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><path d="M8 18v3M16 18v3"/>',
    charger: '<path d="M8 3h8v7H8V3Z"/><path d="M10 10v3a4 4 0 0 0 8 0v-2"/><path d="M10 3v3M14 3v3"/><path d="M5 15h5"/>',
    medical: '<path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M5 7h14v13H5V7Z"/><path d="M12 10v7M8.5 13.5h7"/>',
    bandage: '<rect x="4" y="8" width="16" height="8" rx="4" transform="rotate(-25 12 12)"/><path d="M10 10.5h4M10 13.5h4"/><circle cx="8" cy="12" r=".6"/><circle cx="16" cy="12" r=".6"/>',
    shears: '<circle cx="6" cy="17" r="2.2"/><circle cx="6" cy="7" r="2.2"/><path d="M8 15 19 4"/><path d="M8 9l11 11"/><path d="M14 9h6"/>',
    mask: '<path d="M5 9c4.2-2 9.8-2 14 0v4c-4.2 2.2-9.8 2.2-14 0V9Z"/><path d="M7 11h10M8 14c2.8.8 5.2.8 8 0"/><path d="M5 11H3M19 11h2"/>',
    carry: '<path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 12h6"/>',
    backpack: '<path d="M8 8V6a4 4 0 0 1 8 0v2"/><path d="M7 8h10a2 2 0 0 1 2 2v10H5V10a2 2 0 0 1 2-2Z"/><path d="M8 14h8"/><path d="M9 18h6"/><path d="M5 11H3v6h2M19 11h2v6h-2"/>',
    drybag: '<path d="M8 5h8l1 3-2 2H9L7 8l1-3Z"/><path d="M8 10h8l1 10H7l1-10Z"/><path d="M9 13h6"/><path d="M10 5c0-1.4 4-1.4 4 0"/><path d="M9 17h6"/>',
    zipbag: '<path d="M5 6h14v14H5V6Z"/><path d="M7 9h10"/><path d="M8 12h8"/><path d="M9 6v3M12 6v3M15 6v3"/>',
    organizer: '<path d="M5 6h14v14H5V6Z"/><path d="M5 11h14"/><path d="M10 11v9M14 11v9"/><path d="M8 8h8"/><path d="M7 15h2M15 15h2"/>',
    wallet: '<path d="M5 7h13a2 2 0 0 1 2 2v9H5a2 2 0 0 1-2-2V7h2Z"/><path d="M5 7V5h11"/><path d="M15 12h5v4h-5a2 2 0 0 1 0-4Z"/><circle cx="16.5" cy="14" r=".5"/>',
    tag: '<path d="M4 5h8l8 8-7 7-8-8V5Z"/><circle cx="8" cy="9" r="1.2"/><path d="M11 8h1"/>',
    radio: '<path d="M6 9h12v10H6V9Z"/><path d="m8 7 7-4"/><path d="M9 13h3M9 16h2"/><circle cx="15.5" cy="14.5" r="1.8"/>',
    walkie: '<path d="M8 8h8v12H8V8Z"/><path d="M10 8V3h4v5"/><path d="M10 12h4M10 15h2"/><circle cx="14.5" cy="16.5" r="1"/>',
    headset: '<path d="M5 13a7 7 0 0 1 14 0"/><path d="M5 13v4h3v-5H5v1ZM16 12h3v5h-3v-5Z"/><path d="M16 18c-1 1.3-2.2 2-4 2h-1"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
    map: '<path d="M4 6 9 4l6 2 5-2v14l-5 2-6-2-5 2V6Z"/><path d="M9 4v14M15 6v14"/><path d="m6 10 2-1M16 11l2-1M10 14l3 1"/>',
    locator: '<path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/><path d="M9 3 7 1M15 3l2-2"/>',
    climate: '<path d="M12 3v18"/><path d="m7 7 5 5 5-5"/><path d="m7 17 5-5 5 5"/><path d="M4 12h16"/>',
    sleepingbag: '<path d="M9 3h4a5 5 0 0 1 5 5v11a2 2 0 0 1-2 2H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/><path d="M11 3v18"/><path d="M11 8h5"/><path d="M11 13h5"/>',
    pillow: '<path d="M6 8c0-2 1-3 3-3h6c2 0 3 1 3 3v8c0 2-1 3-3 3H9c-2 0-3-1-3-3V8Z"/><path d="M8 8c1.5 1 6.5 1 8 0"/><path d="M8 16c1.5-1 6.5-1 8 0"/>',
    flipflop: '<path d="M9 4c3 2 4 5 4 10 0 4-2 7-5 7-2 0-3-1-3-3 0-4 2-11 4-14Z"/><path d="M15 5c2 2 4 8 4 12 0 2-1 3-3 3-2.5 0-4-2-4-5"/><path d="M8 11h4M8 11l-2 4M12 11l2 4"/>',
    handwarmer: '<path d="M8 20V9a1.5 1.5 0 0 1 3 0v5"/><path d="M11 14V6.5a1.5 1.5 0 0 1 3 0V14"/><path d="M14 14V9a1.5 1.5 0 0 1 3 0v7a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4v-3"/><path d="M18 5c1-1 1-2 0-3M20 8c1-1 1-2 0-3"/>',
    blanket: '<path d="M5 5h14v14H5V5Z"/><path d="M8 5v14M12 5v14M16 5v14"/><path d="M5 9h14M5 15h14"/>',
    fan: '<circle cx="12" cy="12" r="2"/><path d="M12 10c-1.8-4 1.5-6 4-4 2.3 1.8.6 5.2-4 4Z"/><path d="M14 13c4.4.4 5 4.1 2.2 5.3-2.8 1.2-4.8-1.7-2.2-5.3Z"/><path d="M10.5 13c-2.8 3.4-6.1 1.8-5.8-1.2.3-3 3.9-3.6 5.8 1.2Z"/>',
    rain: '<path d="M4 12a8 8 0 0 1 16 0H4Z"/><path d="M12 12v6a2 2 0 0 1-4 0"/><path d="M7 15l-1 2M13 15l-1 2M18 15l-1 2"/>',
    jacket: '<path d="M9 4 6 6v14h5V9h2v11h5V6l-3-2-3 3-3-3Z"/><path d="M8 11H6M16 11h2"/><path d="M12 9v11"/>',
    socks: '<path d="M8 4h5v8l4 3a3 3 0 0 1-2 5H9a3 3 0 0 1-3-3V4h2Z"/><path d="M6 8h7"/><path d="M9 16h6"/>',
    boots: '<path d="M7 4h6v8l3 2h4v4H7V4Z"/><path d="M7 12h6"/><path d="M10 18v2M15 18v2"/><path d="M13 14h3"/>',
    food: '<path d="M7 3v8"/><path d="M4.5 3v8a2.5 2.5 0 0 0 5 0V3"/><path d="M7 13v8"/><path d="M16 3v18"/><path d="M16 3c3 2.5 3 6.5 0 9"/>',
    stove: '<path d="M7 11h10v7H7v-7Z"/><path d="M5 18h14"/><path d="M9 21h6"/><path d="M10 8c0-2 2-3 2-5 1.7 1.5 3 3 1 5"/><path d="M9 11l-2-3h10l-2 3"/>',
    gascan: '<path d="M8 6h8l2 14H6L8 6Z"/><path d="M9 6V4h6v2"/><path d="M9 10h6"/><path d="M10 14h4"/>',
    canopener: '<circle cx="8" cy="16" r="3"/><path d="M10.5 14 19 5"/><path d="M15 5h4v4"/><path d="M6 16h4"/>',
    cooler: '<path d="M5 8h14v11H5V8Z"/><path d="M7 8V6h10v2"/><path d="M8 12h8"/><path d="M9 15h6"/>',
    ration: '<path d="M6 5h12v14H6V5Z"/><path d="M8 8h8"/><path d="M9 11h6"/><path d="M8 15h2M12 15h4"/>',
    snack: '<path d="M7 5h10l-1 14H8L7 5Z"/><path d="m7 5 2 2 2-2 2 2 2-2 2 2"/><path d="M9 12h6"/>',
    storagebox: '<path d="M5 8h14v11H5V8Z"/><path d="M4 5h16v3H4V5Z"/><path d="M9 12h6"/><path d="M8 15h8"/>',
    safety: '<path d="M12 3 20 7v5c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V7l8-4Z"/><path d="M9 12.5 11 15l4-5"/>',
    extinguisher: '<path d="M10 8h5v11a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"/><path d="M11 8V5h3v3"/><path d="M9 5h7"/><path d="M16 6c2 0 3 1 3 3"/><path d="M12.5 12v4"/>',
    detector: '<circle cx="12" cy="12" r="7"/><path d="M9 12h6"/><path d="M12 9v6"/><path d="M7 5 5 3M17 5l2-2"/>',
    safe: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M12 10V8M12 16v-2M10 12H8M16 12h-2"/><path d="M7 18v2M17 18v2"/>',
    vest: '<path d="M8 4h3l1 4 1-4h3l3 4v12H5V8l3-4Z"/><path d="M8 11h8M8 15h8"/><path d="M12 8v12"/>',
    goggles: '<path d="M4 11h5l2 2h2l2-2h5v4a3 3 0 0 1-3 3h-1a4 4 0 0 1-3-1.3A4 4 0 0 1 10 18H7a3 3 0 0 1-3-3v-4Z"/><path d="M9 11V8h6v3"/>',
    gloves: '<path d="M7 20V9a1.5 1.5 0 0 1 3 0v5"/><path d="M10 14V6.5a1.5 1.5 0 0 1 3 0V14"/><path d="M13 14V8a1.5 1.5 0 0 1 3 0v7"/><path d="M16 15v-3a1.5 1.5 0 0 1 3 0v4a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4v-4"/>',
    alarm: '<path d="M12 21a7 7 0 0 0 7-7V9A7 7 0 0 0 5 9v5a7 7 0 0 0 7 7Z"/><path d="M9 9h6M10 14h4"/><path d="M5 5 3 3M19 5l2-2"/>',
    beacon: '<path d="M7 18h10l-1-8a4 4 0 0 0-8 0l-1 8Z"/><path d="M5 21h14"/><path d="M12 6V3M5 8 3 6M19 8l2-2"/><path d="M9 13h6"/>',
    docs: '<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5"/><path d="M10 12h6M10 16h6"/>',
    idcard: '<rect x="4" y="6" width="16" height="12" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M13 10h4M13 13h4M7 16h4"/>',
    usb: '<path d="M9 9h6v10a3 3 0 0 1-6 0V9Z"/><path d="M10 9V5h4v4"/><path d="M12 5V2"/><path d="M10 2h4"/>',
    hygiene: '<path d="M8 11h8v10H8V11Z"/><path d="M10 11V8a2 2 0 0 1 4 0v3"/><path d="M7 4h10"/><path d="M9 4l1 3h4l1-3"/>',
    wipes: '<path d="M5 8h14v11H5V8Z"/><path d="M8 8V5h8v3"/><path d="M9 12h6"/><path d="M7 16c3-2 7-2 10 0"/>',
    towel: '<path d="M7 4h10v15H7V4Z"/><path d="M10 4v15M14 4v15"/><path d="M7 8h10M7 15h10"/>',
    toiletry: '<path d="M6 9h12v11H6V9Z"/><path d="M9 9V6h6v3"/><path d="M8 13h8"/><path d="M12 11v6"/>',
    razor: '<path d="M7 4h10v4H7V4Z"/><path d="M12 8v12"/><path d="M9 20h6"/><path d="M8 6h8"/>',
    toothbrush: '<path d="M7 4h8v3H7V4Z"/><path d="M10 7v13"/><path d="M8 20h4"/><path d="M15 4h2M15 6h2"/>',
    powder: '<path d="M8 6h8l-1 14H9L8 6Z"/><path d="M9 3h6v3"/><path d="M10 10h4"/><circle cx="17" cy="15" r=".6"/><circle cx="19" cy="18" r=".6"/>',
    tools: '<path d="M14.5 5.5a4 4 0 0 0 4 4L9 19l-4-4 9.5-9.5Z"/><path d="m5 15 4 4"/><path d="M16 3l5 5"/>',
    multitool: '<path d="M7 4h4v16H7V4Z"/><path d="M13 4h4v16h-4V4Z"/><path d="M9 7h6M9 17h6"/><path d="M5 11h14"/>',
    tape: '<circle cx="10" cy="12" r="6"/><circle cx="10" cy="12" r="2"/><path d="M14 12h6v5h-5"/><path d="M17 12v5"/>',
    sewing: '<path d="M5 18c4-8 9-12 14-12"/><path d="M9 14l5 5"/><path d="M12 11l5 5"/><circle cx="18" cy="6" r="1.5"/><path d="M6 20h7"/>',
    brush: '<path d="M8 4h8v5H8V4Z"/><path d="M10 9v11M12 9v11M14 9v11"/><path d="M7 20h10"/>',
    spray: '<path d="M9 8h6v13H9V8Z"/><path d="M10 5h4v3"/><path d="M8 5h8"/><path d="M16 6h4"/><path d="M18 4v4"/><path d="M11 12h2"/>',
    lock: '<rect x="6" y="10" width="12" height="10" rx="2"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/><path d="M12 14v3"/>',
    pack: '<path d="M5 8h14v11H5V8Z"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M8 13h8"/><path d="M12 10v6"/>'
  };

  const RULES = [
    ['bolsas estancas|bolsa estanca|bolsa hermetica|bolsas hermeticas|dry bag|ropa mojada', 'drybag', 'Bolsa estanca', 'carry'],
    ['bolsas de vacio|compresion|vacio para almacenamiento', 'zipbag', 'Bolsa compresion', 'carry'],
    ['funda movil impermeable|funda impermeable', 'zipbag', 'Funda impermeable', 'carry'],
    ['organizador de mochila|organizador edc|organizador cables|organizador de cables', 'organizer', 'Organizador', 'carry'],
    ['mochila', 'backpack', 'Mochila', 'carry'],
    ['cartera|tarjetero|rfid', 'wallet', 'Cartera', 'docs'],
    ['etiquetas', 'tag', 'Etiqueta', 'carry'],
    ['pastillas potabilizadoras', 'tablets', 'Potabilizacion', 'water'],
    ['filtro|lifestraw|sawyer', 'filter', 'Filtro de agua', 'water'],
    ['botella', 'bottle', 'Botella', 'water'],
    ['electrolitos|sales minerales|hydraid', 'tablets', 'Electrolitos', 'water'],
    ['bidon|garrafa|deposito agua', 'jerrycan', 'Deposito agua', 'water'],
    ['frontal', 'headlamp', 'Frontal', 'light'],
    ['linterna', 'light', 'Linterna', 'light'],
    ['lampara|luz usb', 'lamp', 'Lampara', 'light'],
    ['placa solar|maleta solar|cargador solar', 'solar', 'Solar', 'power'],
    ['powerbank|power bank|bateria externa|estacion de alimentacion', 'battery', 'Bateria', 'power'],
    ['cable', 'cable', 'Cable', 'power'],
    ['regleta', 'powerstrip', 'Regleta', 'power'],
    ['cargador|pilas', 'charger', 'Cargador', 'power'],
    ['botiquin|primeros auxilios', 'medical', 'Botiquin', 'medical'],
    ['ampollas|tiritas|apositos|parche', 'bandage', 'Curas', 'medical'],
    ['tijeras', 'shears', 'Tijeras', 'medical'],
    ['mascarilla|mascara', 'mask', 'Mascarilla', 'medical'],
    ['hornillo', 'stove', 'Hornillo', 'food'],
    ['cartucho|butano|gas', 'gascan', 'Gas', 'food'],
    ['abrelatas', 'canopener', 'Abrelatas', 'food'],
    ['nevera', 'cooler', 'Nevera', 'food'],
    ['raciones|emergencia alimentaria', 'ration', 'Raciones', 'food'],
    ['barrita|barritas|frutos secos', 'snack', 'Comida compacta', 'food'],
    ['cajas hermeticas|botes cocina|almacenaje', 'storagebox', 'Almacenaje', 'food'],
    ['saco de dormir', 'sleepingbag', 'Saco dormir', 'climate'],
    ['almohada', 'pillow', 'Almohada', 'climate'],
    ['chanclas', 'flipflop', 'Chanclas', 'climate'],
    ['calentador de manos', 'handwarmer', 'Calentador', 'climate'],
    ['manta termica|mantas termicas', 'blanket', 'Manta termica', 'climate'],
    ['ventilador', 'fan', 'Ventilador', 'climate'],
    ['poncho|chubasquero|impermeable para adultos', 'rain', 'Lluvia', 'climate'],
    ['camiseta|soft shell|cazadora', 'jacket', 'Ropa tecnica', 'climate'],
    ['calcetines', 'socks', 'Calcetines', 'climate'],
    ['botas|zapatos de seguridad|zapatillas', 'boots', 'Calzado', 'climate'],
    ['braga|buff', 'jacket', 'Cuello', 'climate'],
    ['detector|monoxido', 'detector', 'Detector', 'safety'],
    ['extintor', 'extinguisher', 'Extintor', 'safety'],
    ['caja fuerte|ignifuga', 'safe', 'Caja segura', 'safety'],
    ['chaleco', 'vest', 'Chaleco', 'safety'],
    ['gafas', 'goggles', 'Gafas', 'safety'],
    ['guantes', 'gloves', 'Guantes', 'safety'],
    ['alarma', 'alarm', 'Alarma', 'safety'],
    ['baliza|v16', 'beacon', 'Baliza', 'safety'],
    ['walkie|baofeng|retevis', 'walkie', 'Walkie', 'radio'],
    ['auricular', 'headset', 'Auricular', 'radio'],
    ['radio', 'radio', 'Radio', 'radio'],
    ['brujula', 'compass', 'Brujula', 'radio'],
    ['mapa', 'map', 'Mapa', 'radio'],
    ['localizador|tracker|air tracker', 'locator', 'Localizador', 'radio'],
    ['libreta|cuadernos', 'docs', 'Libreta', 'docs'],
    ['funda documentos|portadocumentos|documentos', 'idcard', 'Documentos', 'docs'],
    ['pendrive', 'usb', 'USB', 'docs'],
    ['toallitas|papel comprimido', 'wipes', 'Toallitas', 'hygiene'],
    ['toalla', 'towel', 'Toalla', 'hygiene'],
    ['neceser', 'toiletry', 'Neceser', 'hygiene'],
    ['afeitar|navaja afeitar', 'razor', 'Afeitado', 'hygiene'],
    ['dental|cepillo dental', 'toothbrush', 'Dental', 'hygiene'],
    ['talco|polvos', 'powder', 'Polvos', 'hygiene'],
    ['multiherramienta|alicates', 'multitool', 'Multiherramienta', 'tools'],
    ['cinta|bridas|paracord', 'tape', 'Reparacion', 'tools'],
    ['costura', 'sewing', 'Costura', 'tools'],
    ['cepillo', 'brush', 'Cepillo', 'tools'],
    ['spray', 'spray', 'Spray', 'tools'],
    ['candado', 'lock', 'Candado', 'tools'],
    ['pack ', 'pack', 'Pack', 'pack']
  ];

  const STYLE = `
    .vg-product-visual{position:relative;isolation:isolate;min-height:116px;border-radius:1rem;overflow:hidden;border:1px solid rgba(255,255,255,.11);background:#0a100a;box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
    .vg-product-visual::before{content:"";position:absolute;inset:-45% -20%;background:radial-gradient(circle at 24% 26%,rgba(134,216,61,.4),transparent 26%),radial-gradient(circle at 82% 14%,rgba(255,255,255,.16),transparent 18%),linear-gradient(135deg,rgba(255,255,255,.08),transparent 42%);z-index:-2}
    .vg-product-visual::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.62),transparent 68%),repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 1px,transparent 1px 13px);opacity:.9;z-index:-1}
    .vg-product-visual[data-vg-tone="water"]{background:#071314}.vg-product-visual[data-vg-tone="light"]{background:#131106}.vg-product-visual[data-vg-tone="power"]{background:#111306}.vg-product-visual[data-vg-tone="medical"]{background:#140b0b}.vg-product-visual[data-vg-tone="carry"]{background:#0d1109}.vg-product-visual[data-vg-tone="radio"]{background:#090e13}.vg-product-visual[data-vg-tone="climate"]{background:#0b1012}.vg-product-visual[data-vg-tone="food"]{background:#111006}.vg-product-visual[data-vg-tone="safety"]{background:#0b1110}.vg-product-visual[data-vg-tone="docs"]{background:#100f0b}.vg-product-visual[data-vg-tone="hygiene"]{background:#0b1210}.vg-product-visual[data-vg-tone="tools"]{background:#10100d}.vg-product-visual[data-vg-tone="pack"]{background:#101409}
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

  function normalize(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function matchesRule(text, ruleText) {
    return ruleText.split('|').some((term) => text.includes(term.trim()));
  }

  function getVisualMeta(product) {
    const fallback = CATEGORY_MAP[product && product.categoria] || ['pack', 'Equipo'];
    const text = normalize(`${product.id || ''} ${product.nombre || ''} ${product.categoria || ''} ${product.descripcion || ''}`);
    const rule = RULES.find(([terms]) => matchesRule(text, terms));

    if (!rule) return { iconKey: fallback[0], label: fallback[1], tone: fallback[0] };
    return { iconKey: rule[1], label: rule[2], tone: rule[3] };
  }

  window.getProductVisual = function getProductVisual(product, options = {}) {
    ensureStyles();
    const { iconKey, label, tone } = getVisualMeta(product || {});
    const icon = ICONS[iconKey] || ICONS.pack;
    const compact = options.compact ? ' vg-product-visual--compact' : '';
    return `
      <div class="vg-product-visual${compact}" data-vg-tone="${tone}" aria-hidden="true">
        <span class="vg-product-visual__stripe"></span>
        <span class="vg-product-visual__label">${label}</span>
        <span class="vg-product-visual__icon"><svg viewBox="0 0 24 24">${icon}</svg></span>
      </div>
    `;
  };
})();
