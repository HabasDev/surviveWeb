const PRODUCTS = [
  {
    id: 'agua-pastillas-potabilizadoras',
    nombre: 'Pastillas potabilizadoras de agua',
    categoria: 'agua',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'ENLACE_AFILIADO_AGUA_BASICO',
    escenario: ['casa', 'urbano', 'coche', 'rural'],
    presupuesto: 'basic',
    prioridad: 7
  },
  {
    id: 'filtro-sawyer-mini',
    nombre: 'Filtro de agua Sawyer Mini',
    categoria: 'agua',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'ENLACE_AFILIADO_AGUA_RECOMENDADO',
    escenario: ['casa', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'filtro-katadyn-befree',
    nombre: 'Filtro de agua Katadyn BeFree',
    categoria: 'agua',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'ENLACE_AFILIADO_AGUA_PREMIUM',
    escenario: ['rural', 'coche', 'costa'],
    presupuesto: 'pro',
    prioridad: 9
  },
  {
    id: 'linterna-led-basica',
    nombre: 'Linterna LED compacta',
    categoria: 'luz',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'ENLACE_AFILIADO_LUZ_BASICO',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 8
  },
  {
    id: 'frontal-candela-350h',
    nombre: 'Linterna frontal LED recargable 350 lm',
    categoria: 'luz',
    proveedor: 'Decathlon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.decathlon.es/es/p/mp/linterna-frontal-led-350-lumenes-candela-350h-recargable-regulable/dd56b993-01c4-4d3f-9087-fec1c101d1b2/c1',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'frontal-petzl-actik-core',
    nombre: 'Linterna frontal Petzl Actik Core',
    categoria: 'luz',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'ENLACE_AFILIADO_LUZ_PREMIUM',
    escenario: ['rural', 'costa', 'coche'],
    presupuesto: 'pro',
    prioridad: 8
  },
  {
    id: 'powerbank-10000',
    nombre: 'Powerbank 10.000 mAh',
    categoria: 'energia',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'ENLACE_AFILIADO_ENERGIA_BASICO',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 8
  },
  {
    id: 'powerbank-20000',
    nombre: 'Powerbank 20.000 mAh con USB-C',
    categoria: 'energia',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'ENLACE_AFILIADO_ENERGIA_RECOMENDADO',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'powerbank-solar-30000',
    nombre: 'Powerbank solar 30.000 mAh',
    categoria: 'energia',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'ENLACE_AFILIADO_ENERGIA_PREMIUM',
    escenario: ['rural', 'costa', 'coche'],
    presupuesto: 'pro',
    prioridad: 8
  },
  {
    id: 'botiquin-compacto',
    nombre: 'Botiquin compacto de primeros auxilios',
    categoria: 'botiquin',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'ENLACE_AFILIADO_BOTIQUIN_BASICO',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 9
  },
  {
    id: 'botiquin-familiar',
    nombre: 'Botiquin familiar de primeros auxilios',
    categoria: 'botiquin',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'ENLACE_AFILIADO_BOTIQUIN_RECOMENDADO',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 10
  },
  {
    id: 'botiquin-profesional',
    nombre: 'Botiquin profesional organizado',
    categoria: 'botiquin',
    proveedor: 'Amazon',
    tierLabel: 'Opcion premium',
    enlace: 'ENLACE_AFILIADO_BOTIQUIN_PREMIUM',
    escenario: ['casa', 'rural', 'coche'],
    presupuesto: 'pro',
    prioridad: 9
  },
  {
    id: 'mochila-decathlon-30l',
    nombre: 'Mochila de senderismo Quechua NH500 30L',
    categoria: 'mochila',
    proveedor: 'Decathlon',
    tierLabel: 'Opcion basica',
    enlace: 'https://www.decathlon.es/es/deportes/montana/mochilas-30-litros',
    escenario: ['casa', 'urbano', 'coche'],
    presupuesto: 'basic',
    prioridad: 8
  },
  {
    id: 'mochila-forclaz-40l',
    nombre: 'Mochila de trekking 40L',
    categoria: 'mochila',
    proveedor: 'Decathlon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'ENLACE_AFILIADO_MOCHILA_RECOMENDADO',
    escenario: ['casa', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 8
  },
  {
    id: 'mochila-millet-ubic-30l',
    nombre: 'Mochila Millet Ubic 30L',
    categoria: 'mochila',
    proveedor: 'Decathlon',
    tierLabel: 'Opcion premium',
    enlace: 'https://www.decathlon.es/es/p/mp/mochila-senderismo-trekking-unisex-ubic-30l/a4beccba-f9ab-4313-9579-d13000a56950/c5c14',
    escenario: ['rural', 'coche', 'costa'],
    presupuesto: 'pro',
    prioridad: 7
  },
  {
    id: 'radio-emergencia-solarbaby',
    nombre: 'Radio de emergencia con manivela y luz',
    categoria: 'comunicacion',
    proveedor: 'Amazon',
    tierLabel: 'Mejor relacion calidad-precio',
    enlace: 'https://www.amazon.es/Emergencia-manivela-autoalimentada-Solarbaby-Inteligente/dp/B08V17BPBC',
    escenario: ['casa', 'urbano', 'rural', 'coche'],
    presupuesto: 'medium',
    prioridad: 9
  },
  {
    id: 'manta-termica-pack',
    nombre: 'Pack de mantas termicas de emergencia',
    categoria: 'calor',
    proveedor: 'Amazon',
    tierLabel: 'Opcion basica',
    enlace: 'ENLACE_AFILIADO_CALOR_BASICO',
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
