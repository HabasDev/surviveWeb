(function () {
  const STORAGE_KEY = 'vitaguardia:kitItems';

  function readKit() {
    try {
      const items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(items) ? items : [];
    } catch {
      return [];
    }
  }

  function writeKit(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('vitaguardia:kit-updated', { detail: { items } }));
  }

  function normalizeProduct(product) {
    return {
      id: product.id,
      nombre: product.nombre,
      categoria: product.categoria,
      proveedor: product.proveedor,
      tierLabel: product.tierLabel,
      enlace: product.enlace,
      descripcion: product.descripcion || ''
    };
  }

  function add(product) {
    const item = normalizeProduct(product);
    const items = readKit();
    const existing = items.find((current) => current.id === item.id && current.enlace === item.enlace);
    if (existing) {
      existing.qty = Number(existing.qty || 1) + 1;
    } else {
      items.push({ ...item, qty: 1, addedAt: new Date().toISOString() });
    }
    writeKit(items);
    return items;
  }

  function remove(id, enlace) {
    const items = readKit().filter((item) => !(item.id === id && item.enlace === enlace));
    writeKit(items);
    return items;
  }

  function decrement(productOrId, enlace) {
    const id = typeof productOrId === 'object' ? productOrId.id : productOrId;
    const url = typeof productOrId === 'object' ? productOrId.enlace : enlace;
    const items = readKit();
    const existing = items.find((item) => item.id === id && (!url || item.enlace === url));

    if (!existing) return items;

    existing.qty = Number(existing.qty || 1) - 1;
    const nextItems = existing.qty > 0
      ? items
      : items.filter((item) => !(item.id === existing.id && item.enlace === existing.enlace));

    writeKit(nextItems);
    return nextItems;
  }

  function clear() {
    writeKit([]);
  }

  function count() {
    return readKit().reduce((total, item) => total + Number(item.qty || 1), 0);
  }

  function quantity(productOrId, enlace) {
    const id = typeof productOrId === 'object' ? productOrId.id : productOrId;
    const url = typeof productOrId === 'object' ? productOrId.enlace : enlace;
    return readKit()
      .filter((item) => item.id === id && (!url || item.enlace === url))
      .reduce((total, item) => total + Number(item.qty || 1), 0);
  }

  window.VitaGuardiaKit = { read: readKit, add, decrement, remove, clear, count, quantity };
})();
