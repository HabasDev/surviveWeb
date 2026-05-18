const PRODUCTS = [
  {
    id: 'agua-pastillas-potabilizadoras',
    nombre: 'Albainox 33430 Pastillas Potabilizadoras, Multicolor, Unica',
    categoria: 'agua',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.amazon.es/dp/B00GOPHOSQ?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'coche', 'rural'],
    presupuesto: 'basic',
    prioridad: 7
  },
  {
    id: 'filtro-sawyer-mini',
    nombre: 'LifeStraw - Filtro personal de agua, Azul, 1 unidad',
    categoria: 'agua',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/dp/B006QF3TW4?tag=vitaguardia02-21',
    escenario: ['casa', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'filtro-katadyn-befree',
    nombre: 'Sawyer Products Sistema de Filtro Mini portatil',
    categoria: 'agua',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'https://www.amazon.es/dp/B00FA2RLX2?tag=vitaguardia02-21',
    escenario: ['rural', 'coche', 'costa'],
    presupuesto: 'pro',
    prioridad: 9
  },
  {
    id: 'linterna-led-basica',
    nombre: 'COSOOS Linterna LED mini extremadamente brillante',
    categoria: 'luz',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.amazon.es/dp/B0DSP27Z63?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 8
  },
  {
    id: 'frontal-candela-350h',
    nombre: 'Blukar Linterna Frontal LED Recargable',
    categoria: 'luz',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/dp/B09BJV39FB?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'frontal-petzl-actik-core',
    nombre: 'ACTIK Linterna Negro',
    categoria: 'luz',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'https://www.amazon.es/dp/B0FHKNNLZX?tag=vitaguardia02-21',
    escenario: ['rural', 'costa', 'coche'],
    presupuesto: 'pro',
    prioridad: 8
  },
  {
    id: 'powerbank-10000',
    nombre: 'Bateria Externa 10400mAh Power Bank USB C',
    categoria: 'energia',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.amazon.es/dp/B09XMHWF5Y?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 8
  },
  {
    id: 'powerbank-20000',
    nombre: 'Power Bank 22.5W 20000mAh Bateria Externa Carga Rapida',
    categoria: 'energia',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/dp/B0F84D5PRT?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'powerbank-solar-30000',
    nombre: 'Cargador Solar Power Bank - 20000mAh Cargador Bateria Externa',
    categoria: 'energia',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'https://www.amazon.es/dp/B0FBGM8WTG?tag=vitaguardia02-21',
    escenario: ['rural', 'costa', 'coche'],
    presupuesto: 'pro',
    prioridad: 8
  },
  {
    id: 'botiquin-compacto',
    nombre: 'NUVEXIA SUPER Botiquin De Primeros Auxilios PREMIUM 200 Piezas I kit De',
    categoria: 'botiquin',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.amazon.es/dp/B0F4RBK2W3?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 9
  },
  {
    id: 'botiquin-familiar',
    nombre: 'DEPALMERA Pharma Botiquin Primeros Auxilios Emergencia Maletin Completo',
    categoria: 'botiquin',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/dp/B0BBRQ9JHW?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 10
  },
  {
    id: 'botiquin-profesional',
    nombre: 'Kit de primeros auxilios profesional de 255 piezas',
    categoria: 'botiquin',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'https://www.amazon.es/dp/B07LFS7STT?tag=vitaguardia02-21',
    escenario: ['casa', 'rural', 'coche'],
    presupuesto: 'pro',
    prioridad: 9
  },
  {
    id: 'mochila-decathlon-30l',
    nombre: 'SKYSPER 30L Mochila Plegable Ultraligera Mochilas de Senderismo Mochila',
    categoria: 'mochila',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.amazon.es/dp/B0BKG7X9NM?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 8
  },
  {
    id: 'mochila-forclaz-40l',
    nombre: 'IGOLUMON Mochila de Senderismo de 40L Mochila Plegable Ultraligera',
    categoria: 'mochila',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/dp/B0BXWLMD8Q?tag=vitaguardia02-21',
    escenario: ['casa', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 8
  },
  {
    id: 'mochila-millet-ubic-30l',
    nombre: 'Millet Mochila de Senderismo GRAVIC Trekking Versatil Verano Invierno',
    categoria: 'mochila',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'https://www.amazon.es/dp/B0DP7BLGQZ?tag=vitaguardia02-21',
    escenario: ['rural', 'coche', 'costa'],
    presupuesto: 'pro',
    prioridad: 7
  },
  {
    id: 'radio-emergencia-solarbaby',
    nombre: 'Radio Solar de Emergencia con Manivela Portatil',
    categoria: 'comunicacion',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/dp/B0F6V7B419?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'manta-termica-pack',
    nombre: 'Manta Termica de Emergencia Pack 5 Unidades Manta Supervivencia',
    categoria: 'calor',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.amazon.es/dp/B0GXGNLWRW?tag=vitaguardia02-21',
    escenario: ['casa', 'urbano', 'rural', 'coche', 'costa'],
    presupuesto: 'basic',
    prioridad: 8
  }
];

const BUDGET_ORDER = ['basic', 'medium', 'pro'];

function getRecommendedProducts({ budget = 'medium', zone = 'city' } = {}) {
  const scenario = zone === 'city' ? 'urbano' : zone === 'town' ? 'casa' : zone;
  const maxBudgetIndex = BUDGET_ORDER.indexOf(budget);
  const categories = ['agua', 'luz', 'energia', 'botiquin', 'mochila'];

  const selected = categories.map((category) => {
    const candidates = PRODUCTS
      .filter((product) => product.categoria === category)
      .filter((product) => BUDGET_ORDER.indexOf(product.presupuesto) <= maxBudgetIndex)
      .sort((a, b) => {
        const scenarioScore = Number(b.escenario.includes(scenario)) - Number(a.escenario.includes(scenario));
        if (scenarioScore) return scenarioScore;
        return b.prioridad - a.prioridad;
      });

    return candidates[0];
  }).filter(Boolean);

  if (budget !== 'basic') {
    selected.push(PRODUCTS.find((product) => product.id === 'radio-emergencia-solarbaby'));
  }

  selected.push(PRODUCTS.find((product) => product.id === 'manta-termica-pack'));
  return selected.filter(Boolean);
}

window.PRODUCTS = PRODUCTS;
window.getRecommendedProducts = getRecommendedProducts;
