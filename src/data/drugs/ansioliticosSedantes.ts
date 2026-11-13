import { Medication } from '../../types/medication';

const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';
const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';

export const ANSIOLITICOS_SEDANTES: Medication[] = [
  {
    id: 'diazepam',
    genericName: "Diazepam",
    commercialNames: ["Valium", "Ifafonal"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501249603036_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Diazepam - Presentación farmacológica",
    atcCode: 'N05BA01',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Benzodiacepinas de acción prolongada',
    description: 'Benzodiacepina clásica de acción prolongada con cuádruple perfil clínico: ansiolítico, miorrelajante, anticonvulsivo e hipnótico-sedante. Fármaco de primera línea en estatus epiléptico y espasmos musculares severos.',
    presentations: [
      { id: 'dz-1', form: 'Comprimidos ranurados', concentration: '5 mg y 10 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'dz-2', form: 'Solución inyectable IM/IV', concentration: '10 mg / 2 mL (5 mg/mL)', route: 'Intravenosa', packaging: 'Ampollas x 2 mL (Caja x 5 y 10)' },
      { id: 'dz-3', form: 'Cánulas para administración rectal (Stesolid)', concentration: '5 mg y 10 mg', route: 'Rectal', packaging: 'Caja x 5 tubos rectales' }
    ],
    mechanismOfAction: {
      summary: 'Modulador alostérico positivo del receptor GABA-A en el SNC. Se une a la interfaz entre las subunidades alfa y gamma aumentando la frecuencia de apertura del canal de cloruro en presencia de GABA, hiperpolarizando la neurona y disminuyendo la excitabilidad neuronal en corteza, sistema límbico y médula espinal.',
      molecularTarget: 'Sitio benzodiacepínico del receptor GABA-A ionotrópico',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% rápida y completa; Rectal: 90%',
        halfLife: 'Bifásica: 20 a 50 horas (hasta 100 horas para su metabolito activo N-desmetildiazepam / nordazepam)',
        metabolism: 'Hepático por CYP2C19 y CYP3A4 a nordazepam, temazepam y oxazepam activos',
        elimination: 'Excreción renal como conjugados glucurónidos'
      }
    },
    therapeuticIndications: [
      'Tratamiento a corto plazo de la ansiedad grave, crisis de angustia y agitación psicomotriz',
      'Estatus epiléptico y crisis convulsivas agudas febriles o secundarias',
      'Espasmos musculares dolorosos (contracturas osteomusculares, tétanos, espasticidad)',
      'Premedicación anestésica y sedación consciente para procedimientos diagnósticos',
      'Síndrome de abstinencia alcohólica aguda (delirium tremens)'
    ],
    posology: {
      adultStandard: 'Ansiedad oral: 2 a 10 mg cada 8-12 horas. Estatus epiléptico IV: 10 mg en bolo lento IV (≤ 5 mg/min) cada 10-15 min si persisten crisis (máx 30 mg). Cánula rectal en urgencias: 10 mg.',
      pediatricDose: 'Crisis convulsivas infantiles: Cánula rectal: 0.5 mg/kg (o 5 mg en < 3 años; 10 mg en > 3 años). IV lenta: 0.2 a 0.3 mg/kg.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No suele requerir ajuste',
        severe: 'Reducir dosis por mayor fracción libre ligada a albúmina'
      },
      hepaticAdjustment: 'Reducir dosis a la mitad y alargar intervalos en hepatopatía por riesgo de encefalopatía.',
      administrationNotes: 'IV directa debe administrarse lentamente a velocidad no superior a 2-5 mg/min en vena de gran calibre para evitar tromboflebitis, paro respiratorio o hipotensión brusca. NUNCA mezclar con otras soluciones en la misma jeringa (precipita).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE SEDACIÓN PROFUNDA, DEPRESIÓN RESPIRATORIA, COMA Y MUERTE CUANDO SE COMBINA CON OPIOIDES O ALCOHOL. RIESGO ELEVADO DE ADICCIÓN, TOLERANCIA Y SÍNDROME DE ABSTINENCIA SEVERO.',
      contraindications: [
        'Miastenia gravis (debilidad muscular extrema)',
        'Insuficiencia respiratoria severa descompensada y apnea del sueño',
        'Insuficiencia hepática grave (riesgo de encefalopatía hepática)',
        'Glaucoma de ángulo cerrado agudo',
        'Hipersensibilidad a benzodiacepinas'
      ],
      adverseEffects: {
        frequent: ['Somnolencia diurna y sedación residual ("efecto resaca")', 'Ataxia, torpeza motora y mareo', 'Debilidad muscular'],
        moderate: ['Amnesia anterógrada', 'Confusión mental y caídas en ancianos', 'Reacciones paradójicas (agitación, agresividad, insomnio en niños/ancianos)'],
        severe: ['Depresión respiratoria y parada cardiorrespiratoria por infusión IV rápida', 'Dependencia física y psicológica grave con síndrome de abstinencia']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO en el primer trimestre (riesgo de hendiduras orofaciales) y cerca del parto (síndrome del recién nacido fláccido "floppy infant" e hipotermia).',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Frecuencia respiratoria y saturación de oxígeno', 'Nivel de alerta y sedación', 'Signos de dependencia o abstinencia']
    },
    interactions: [
      { id: 'dz-int-1', interactsWith: 'Opioides (Morfina, Fentanilo, Meperidina)', severity: 'Contraindicada', clinicalEffect: 'Depresión sinérgica profunda sobre el centro respiratorio bulbar, colapso y paro respiratorio.', recommendation: 'Evitar la combinación simultánea salvo ventilación mecánica asistida.' },
      { id: 'dz-int-2', interactsWith: 'Alcohol (Etanol)', severity: 'Contraindicada', clinicalEffect: 'Potenciación extrema de la depresión del SNC, amnesia global y coma.', recommendation: 'Prohibición estricta de consumo alcohólico.' }
    ],
    storageAndConservation: 'Sustancia psicotrópica regulada (Lista IV). Conservar por debajo de 30°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'clordiazepoxido',
    genericName: 'Clordiazepóxido',
    commercialNames: ['Librium', 'Kloref', 'Huberplex', 'Limbitrol (+ Amitriptilina)'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas de Clordiazepóxido',
    atcCode: 'N05BA02',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Benzodiacepinas de acción prolongada',
    description: 'Primera benzodiacepina descubierta en la historia de la psicofarmacología. De acción prolongada y metabolitos activos múltiples, constituye un fármaco de referencia en la desintoxicación y deshabituación alcohólica aguda.',
    presentations: [
      { id: 'chd-1', form: 'Cápsulas y comprimidos', concentration: '5 mg, 10 mg, 25 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos' },
      { id: 'chd-2', form: 'Polvo para solución inyectable IM/IV', concentration: '100 mg', route: 'Intravenosa', packaging: 'Vial x 100 mg' }
    ],
    mechanismOfAction: {
      summary: 'Agonista alostérico positivo de los receptores GABA-A. Aumenta la afinidad del GABA por su receptor incrementando la conductancia al ión cloruro, deprimiendo el sistema límbico, la formación reticular y las vías polisinápticas motoras espinales.',
      molecularTarget: 'Receptor GABA-A ionotrópico',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100%; absorción IM lenta e irregular (preferir vía oral o IV)',
        halfLife: '5 a 30 horas (metabolito activo desmetildiazepam hasta 100 horas)',
        metabolism: 'Hepático a desmetilclordiazepóxido, demoxepam y nordazepam activos',
        elimination: 'Excreción renal de metabolitos conjugados'
      }
    },
    therapeuticIndications: [
      'Alivio sintomático de la ansiedad grave e incapacitante',
      'Tratamiento de elección en la abstinencia alcohólica aguda y prevención del delirium tremens',
      'Premedicación anestésica en cirugía'
    ],
    posology: {
      adultStandard: 'Ansiedad: 5 a 25 mg cada 6-8 horas (máx 100 mg/día). Abstinencia alcohólica aguda: 50 a 100 mg iniciales por vía oral o IV, repetidos cada 2 a 4 horas según necesidad clínica hasta controlar la agitación (máx 300 mg/día), reduciendo progresivamente la dosis en 5 a 7 días.',
      pediatricDose: 'Niños > 6 años: 5 mg cada 8-12 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Reducir dosis un 25%',
        severe: 'Reducir dosis un 50% en ancianos o fallo renal'
      },
      hepaticAdjustment: 'Contraindicado en fallo hepático severo (riesgo de encefalopatía).',
      administrationNotes: 'En desintoxicación alcohólica, administrar guiado por escalas validadas (CIWA-Ar).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE SEDACIÓN PROFUNDA, COMA Y DEPRESIÓN RESPIRATORIA CON OPIOIDES; RIESGO DE DEPENDENCIA SEVERA.',
      contraindications: [
        'Miastenia gravis',
        'Insuficiencia respiratoria severa',
        'Insuficiencia hepática grave',
        'Intoxicación alcohólica aguda con signos vitales deprimidos'
      ],
      adverseEffects: {
        frequent: ['Sedación diurna', 'Ataxia y mareo', 'Laxitud muscular'],
        moderate: ['Síncope o caídas en ancianos', 'Confusión mental', 'Estreñimiento'],
        severe: ['Depresión respiratoria', 'Síndrome de abstinencia con convulsiones al retiro abrupto', 'Reacciones paradójicas']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO en el embarazo.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Nivel de sedación', 'Signos de abstinencia alcohólica (temblor, sudoración, FC)', 'Función hepática']
    },
    interactions: [
      { id: 'chd-int-1', interactsWith: 'Depresores del SNC, Barbitúricos y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Depresión sinérgica letal de la respiración y conciencia.', recommendation: 'Evitar consumo simultáneo.' }
    ],
    storageAndConservation: 'Medicamento controlado bajo receta retenida. Conservar por debajo de 25°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'lorazepam',
    genericName: "Lorazepam",
    commercialNames: ["Ativan", "Apolazam"],
    imageUrl: "https://farmaciasanjorge.com/cdn/shop/products/7501287619204_1024x.png?v=1706131029",
    imageAlt: "Lorazepam - Presentación farmacológica",
    atcCode: 'N05BA06',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Benzodiacepinas de acción intermedia sin metabolitos activos',
    description: 'Benzodiacepina de acción intermedia de gran potencia ansiolítica y sedante. Al no depender de la oxidación microsomal hepática por citocromos y metabolizarse directamente por glucuronidación, es la benzodiacepina de elección en ancianos y pacientes con hepatopatía crónica.',
    presentations: [
      { id: 'lor-1', form: 'Comprimidos ranurados', concentration: '1 mg y 2 mg', route: 'Oral', packaging: 'Caja x 25, 50 y 100 comprimidos' },
      { id: 'lor-2', form: 'Solución inyectable IM/IV', concentration: '2 mg/mL y 4 mg/mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL' },
      { id: 'lor-3', form: 'Comprimidos sublinguales', concentration: '1 mg y 2 mg', route: 'Sublingual', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Agonista alostérico de alta afinidad del receptor GABA-A. Favorece la acción inhibitoria del GABA sobre las neuronas del sistema límbico y amígdala con potente efecto ansiolítico, amnésico anterógrado y anticonvulsivo.',
      molecularTarget: 'Receptor GABA-A ionotrópico neuronal',
      pharmacokinetics: {
        bioavailability: 'Oral y Sublingual: 90% de absorción rápida y predecible; IM: absorción excelente y rápida',
        halfLife: '10 a 20 horas (acción intermedia)',
        metabolism: 'Conjugación directa con ácido glucurónico en hígado a glucurónido de lorazepam completamente INACTIVO (no depende de CYP450)',
        elimination: 'Excreción 85% renal como glucurónido inactivo'
      }
    },
    therapeuticIndications: [
      'Tratamiento de la ansiedad aguda severa, trastorno de pánico y crisis de angustia',
      'Insomnio severo asociado a estrés o ansiedad aguda',
      'Estatus epiléptico convulsivo (fármaco IV de primera línea en guías internacionales)',
      'Premedicación anestésica por su potente amnesia anterógrada',
      'Náuseas y vómitos anticipatorios por quimioterapia antineoplásica'
    ],
    posology: {
      adultStandard: 'Ansiedad oral: 0.5 mg a 2 mg cada 8 a 12 horas (dosis diaria media 1 a 3 mg/día; máx 6 mg/día). Insomnio: 1 mg al acostarse. Estatus epiléptico IV: 4 mg en bolo lento IV (2 mg/min); repetir a los 10-15 min si persisten crisis.',
      pediatricDose: 'Estatus epiléptico pediátrico: 0.05 a 0.1 mg/kg IV lenta (máx 4 mg/dosis).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste específico',
        severe: 'Fármaco de elección entre benzodiacepinas; vigilar sedación'
      },
      hepaticAdjustment: 'Fármaco de elección en cirrosis hepática debido a que su metabolismo por glucuronidación se conserva.',
      administrationNotes: 'IV: Diluir con igual volumen de SF 0.9% y administrar muy lentamente. Formulación sublingual permite rápida absorción en ataques de pánico agudos.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE SEDACIÓN PROFUNDA Y PARO RESPIRATORIO ASOCIADO A OPIOIDES. RIESGO ELEVADO DE DEPENDENCIA Y SÍNDROME DE ABSTINENCIA AL RETIRO BRUSCO.',
      contraindications: [
        'Miastenia gravis',
        'Insuficiencia respiratoria aguda o descompensada',
        'Síndrome de apnea del sueño',
        'Glaucoma de ángulo cerrado'
      ],
      adverseEffects: {
        frequent: ['Sedación y somnolencia', 'Fatiga y mareo', 'Amnesia anterógrada'],
        moderate: ['Hipotensión leve', 'Ataxia e inestabilidad al caminar en ancianos', 'Confusión'],
        severe: ['Depresión respiratoria en administración IV rápida', 'Reacciones paradójicas desinhibitorias', 'Dependencia']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO durante el embarazo por riesgo de malformaciones y depresión neonatal.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Frecuencia respiratoria durante la infusión IV', 'Nivel de sedación y orientación']
    },
    interactions: [
      { id: 'lor-int-1', interactsWith: 'Ácido Valproico', severity: 'Mayor', clinicalEffect: 'El valproato inhibe la glucuronidación de lorazepam duplicando sus concentraciones plasmáticas.', recommendation: 'Reducir la dosis de lorazepam en un 50% al asociar valproato.' },
      { id: 'lor-int-2', interactsWith: 'Opioides y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Depresión respiratoria grave y coma.', recommendation: 'Evitar la asociación.' }
    ],
    storageAndConservation: 'Sustancia controlada psicotrópica (15°C a 30°C). Las ampollas IV requieren refrigeración (2°C a 8°C).',
    highAlertMedicine: false,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'oxazepam',
    genericName: 'Oxazepam',
    commercialNames: ['Serax', 'Sparam', 'Alepam', 'Sobril'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos de Oxazepam',
    atcCode: 'N05BA04',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Benzodiacepinas de acción corta-intermedia sin metabolitos activos',
    description: 'Metabolito final activo común de diazepam y clordiazepóxido. De absorción lenta y semivida corta-intermedia (6 a 12 horas) sin metabolitos activos, ofrece un perfil de excelente tolerancia y seguridad en ancianos y pacientes hepatópatas.',
    presentations: [
      { id: 'ox-1', form: 'Comprimidos', concentration: '10 mg, 15 mg, 30 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Agonista del receptor GABA-A que facilita la inhibición postsináptica mediada por el GABA en las neuronas del sistema nervioso central, aliviando la ansiedad y favoreciendo el descanso sin acumulación farmacológica.',
      molecularTarget: 'Receptor GABA-A ionotrópico',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% de absorción lenta y progresiva (pico en 2-3 horas)',
        halfLife: 'Corta a intermedia: 6 a 12 horas (no produce acumulación diurna)',
        metabolism: 'Conjugación directa y simple a glucurónido inactivo (no requiere CYP450)',
        elimination: 'Excreción 90% renal como glucurónido inactivo'
      }
    },
    therapeuticIndications: [
      'Ansiedad leve a moderada en pacientes ancianos o hepatópatas',
      'Insomnio de conciliación asociado a ansiedad',
      'Deshabituación alcohólica ambulatoria en pacientes con cirrosis o daño hepático'
    ],
    posology: {
      adultStandard: 'Oral: 15 a 30 mg cada 6 a 8 horas con agua (máx 120 mg/día en ansiedad severa). Ancianos o hepatópatas: iniciar con 10 mg cada 8-12 horas.',
      pediatricDose: 'No recomendado en menores de 12 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Monitorear sedación'
      },
      hepaticAdjustment: 'Benzodiacepina de elección en pacientes con cirrosis e insuficiencia hepática.',
      administrationNotes: 'Su absorción es más lenta que la de diazepam o lorazepam, por lo que produce menor sensación de euforia ("menor efecto rebote").'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE SEDACIÓN EXCESIVA CON OPIOIDES O ALCOHOL. RIESGO DE DEPENDENCIA PSICOFÍSICA.',
      contraindications: [
        'Miastenia gravis',
        'Insuficiencia respiratoria grave',
        'Apnea del sueño'
      ],
      adverseEffects: {
        frequent: ['Somnolencia diurna leve', 'Mareo'],
        moderate: ['Inestabilidad postural en ancianos', 'Cefalea', 'Laxitud'],
        severe: ['Dependencia con síndrome de abstinencia', 'Reacciones paradójicas']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO durante el embarazo.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Nivel de ansiedad y sedación', 'Coordinación motora']
    },
    interactions: [
      { id: 'ox-int-1', interactsWith: 'Depresores del SNC y alcohol', severity: 'Mayor', clinicalEffect: 'Aumento de somnolencia y deterioro psicomotor.', recommendation: 'Evitar alcohol.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C en lugar seco.',
    highAlertMedicine: false,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'clonazepam',
    genericName: "Clonazepam",
    commercialNames: ["Rivotril", "Klodex"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501249602176_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Clonazepam - Presentación farmacológica",
    atcCode: 'N03AE01',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Benzodiacepinas de acción prolongada con alta potencia anticonvulsivante',
    description: 'Benzodiacepina nitroderivada de alta potencia con destacadas propiedades anticonvulsivantes, estabilizadoras neuronales y ansiolíticas potentes. Fármaco de primera línea en trastorno de pánico y epilepsias refractarias.',
    presentations: [
      { id: 'cln-1', form: 'Comprimidos ranurados', concentration: '0.5 mg, 1 mg, 2 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'cln-2', form: 'Gotas orales', concentration: '2.5 mg/mL (1 gota = 0.1 mg)', route: 'Oral', packaging: 'Frasco gotero x 20 mL' },
      { id: 'cln-3', form: 'Solución inyectable IV/IM', concentration: '1 mg / 1 mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL' }
    ],
    mechanismOfAction: {
      summary: 'Agonista alostérico del receptor GABA-A neuronal con altísima afinidad y potencia. Potencia la neurotransmisión inhibitoria del GABA suprimiendo las descargas paroxísticas de espiga-onda en crisis mioclónicas, ausencias y convulsiones tónico-clónicas, a la vez que ejerce una potente acción ansiolítica límbica.',
      molecularTarget: 'Receptor GABA-A con alta afinidad por la subunidad alfa-1 y alfa-2',
      pharmacokinetics: {
        bioavailability: 'Oral: 90% de absorción excelente',
        halfLife: 'Prolongada: 30 a 50 horas',
        metabolism: 'Hepático por CYP3A4 y reducción nitro enzimática a 7-amino-clonazepam inactivo',
        elimination: 'Excreción renal'
      }
    },
    therapeuticIndications: [
      'Trastorno de angustia / pánico con o sin agorafobia',
      'Epilepsia (ausencias típicas y atípicas, síndrome de Lennox-Gastaut, crisis mioclónicas y atónicas)',
      'Acatisia inducida por antipsicóticos y síndrome de piernas inquietas',
      'Fobia social severa'
    ],
    posology: {
      adultStandard: 'Trastorno de pánico: Inicial 0.25 mg dos veces al día; titular cada 3 días hasta 1 a 2 mg/día (máx 4 mg/día). Epilepsia: Inicial 0.5 a 1.5 mg/día divididos en 3 tomas; aumentar gradualmente hasta 4 a 8 mg/día (máx 20 mg/día). Estatus epiléptico IV: 1 mg en bolo lento en al menos 2 minutos.',
      pediatricDose: 'Epilepsia pediátrica: Inicial 0.01 a 0.03 mg/kg/día dividido en 3 tomas; titular hasta mantenimiento de 0.05 a 0.1 mg/kg/día.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Reducir dosis'
      },
      hepaticAdjustment: 'Reducir dosis un 50% en insuficiencia hepática. Contraindicado en hepatopatía grave.',
      administrationNotes: 'Retirar siempre de manera sumamente gradual (reducción de 0.25 mg cada 1-2 semanas) para evitar crisis de pánico de rebote y convulsiones por deprivación.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE COMA Y PARO RESPIRATORIO FATAL EN COMBINACIÓN CON OPIOIDES O ALCOHOL. ALTO POTENCIAL DE ABUSO, TOLERANCIA Y SÍNDROME DE ABSTINENCIA SEVERO CON CONVULSIONES.',
      contraindications: [
        'Miastenia gravis',
        'Insuficiencia respiratoria grave',
        'Glaucoma de ángulo cerrado',
        'Insuficiencia hepática grave'
      ],
      adverseEffects: {
        frequent: ['Somnolencia y sedación intensa al inicio', 'Ataxia e inestabilidad motora', 'Fatiga y mareo'],
        moderate: ['Hipersalivación e hipersecreción bronquial en niños pequeños', 'Dificultad de concentración y amnesia', 'Labilidad emocional'],
        severe: ['Depresión respiratoria', 'Empeoramiento paradójico de convulsiones', 'Dependencia física grave']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO en el embarazo. Puede causar anomalías congénitas y síndrome de abstinencia neonatal.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Frecuencia respiratoria', 'Control de crisis epilépticas o ataques de pánico', 'Signos de depresión o ideación suicida']
    },
    interactions: [
      { id: 'cln-int-1', interactsWith: 'Opioides y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Riesgo fatal de depresión respiratoria y paro cardíaco.', recommendation: 'Prohibida la combinación.' },
      { id: 'cln-int-2', interactsWith: 'Inhibidores de CYP3A4 (Azoles, Claritromicina)', severity: 'Mayor', clinicalEffect: 'Aumentan las concentraciones plasmáticas de clonazepam provocando sedación profunda.', recommendation: 'Ajustar dosis.' }
    ],
    storageAndConservation: 'Sustancia controlada bajo estricta receta retenida. Proteger de la luz (15°C a 30°C).',
    highAlertMedicine: false,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'fenobarbital',
    genericName: "Fenobarbital",
    commercialNames: ["Luminal", "Luminaletas", "Gardenal"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi0wjuJwWLvkUydlpVjdnc4JTaB1VSl3gLMo3yxbrjZa8DapcjXIgMJ4&s=10",
    imageAlt: "Fenobarbital - Presentación farmacológica",
    atcCode: 'N03AA02',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Sedantes-hipnóticos y antiepilépticos / Barbitúricos de acción prolongada',
    description: 'Barbitúrico clásico de acción prolongada con potente actividad anticonvulsivante e hipnótica. Fármaco de primera línea mundial en convulsiones neonatales y potente inductor de enzimas microsomales hepáticas.',
    presentations: [
      { id: 'fen-1', form: 'Comprimidos orales', concentration: '15 mg (Luminaletas), 50 mg, 100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'fen-2', form: 'Solución inyectable IM/IV', concentration: '200 mg / 1 mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL (Caja x 10)' }
    ],
    mechanismOfAction: {
      summary: 'Se une al receptor GABA-A en un sitio alostérico específico de los barbitúricos, aumentando la DURACIÓN de apertura del canal de cloruro (a diferencia de las benzodiacepinas que aumentan la frecuencia). A dosis altas puede abrir directamente el canal de cloruro en ausencia de GABA e inhibir los canales de calcio voltaje-dependientes y los receptores AMPA de glutamato, provocando una profunda depresión del SNC.',
      molecularTarget: 'Sitio barbitúrico del receptor GABA-A (prolonga el tiempo de apertura del canal Cl-)',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100%; absorción lenta y constante',
        halfLife: 'Extremadamente prolongada: 80 a 120 horas (hasta 5 días)',
        metabolism: 'Hepático por CYP2C9 a p-hidroxifenobarbital; es un inductor masivo del citocromo CYP3A4, CYP2C9, CYP1A2 y glucuroniltransferasas',
        elimination: 'Excreción 25-50% renal inalterado (la alcalinización urinaria con bicarbonato aumenta marcadamente su aclaramiento)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea en convulsiones neonatales',
      'Epilepsia generalizada tónico-clónica y crisis focales',
      'Estatus epiléptico refractario a benzodiacepinas',
      'Tratamiento coadyuvante del síndrome de abstinencia a sedantes/alcohol'
    ],
    posology: {
      adultStandard: 'Epilepsia oral: 50 a 100 mg en toma única nocturna (hasta 200 mg/día). Estatus epiléptico IV: Carga de 15 a 20 mg/kg en infusión IV lenta a velocidad ≤ 50-100 mg/min bajo monitorización estricta.',
      pediatricDose: 'Convulsiones neonatales: Carga IV de 20 mg/kg en 10-15 min; si no cede, bolos adicionales de 5-10 mg/kg (máx 40 mg/kg total). Mantenimiento: 3 a 5 mg/kg/día.',
      renalAdjustment: {
        normal: 'Dosis estándar guiada por litemia/concentración sérica (rango 15-40 mcg/mL)',
        moderate: 'ClCr 10-50 mL/min: Espaciar intervalo a cada 12-24 horas',
        severe: 'ClCr < 10 mL/min: Reducir dosis al 50%'
      },
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática.',
      administrationNotes: 'IV: Diluir y perfundir a velocidad ≤ 50 mg/min en adultos. Riesgo de laringoespasmo y paro respiratorio si se infunde rápido.'
    },
    safety: {
      blackBoxWarning: 'DEPRESIÓN RESPIRATORIA GRAVE, SEDACIÓN PROFUNDA, RIESGO MORTAL EN SOBREDOSIS Y POTENCIAL ELEVADO DE TOLERANCIA Y DEPENDENCIA.',
      contraindications: [
        'Porfiria aguda intermitente o porfiria variegata (induce la ALA-sintetasa provocando crisis porfíricas mortales)',
        'Insuficiencia respiratoria severa',
        'Insuficiencia hepática o renal grave'
      ],
      adverseEffects: {
        frequent: ['Sedación marcada y somnolencia diurna', 'Deterioro cognitivo y lentitud psicomotora', 'Hiperactividad paradójica en niños y agitación en ancianos'],
        moderate: ['Ataxia y nistagmo', 'Deficiencia de ácido fólico y vitamina D (osteomalacia)', 'Hepatotoxicidad'],
        severe: ['Paro respiratorio y colapso cardiovascular por sobredosis', 'Reacciones cutáneas exfoliativas graves (Stevens-Johnson)', 'Crisis porfírica']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO. Teratogénico mayor (cardiopatías congénitas, hendiduras palatinas y hemorragia neonatal por déficit de vitamina K; requiere suplementar vitamina K1 al nacer).',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Niveles plasmáticos de fenobarbital (rango terapéutico 15 a 40 mcg/mL)', 'Frecuencia respiratoria y saturación de oxígeno', 'Hemograma y función hepática']
    },
    interactions: [
      { id: 'fen-int-1', interactsWith: 'Anticonceptivos orales, Anticoagulantes (Warfarina), Antirretrovirales, Estatinas', severity: 'Mayor', clinicalEffect: 'Inducción enzimática masiva que acelera el metabolismo de múltiples fármacos provocando fracaso terapéutico completo (embarazos no deseados, trombosis, fracaso antirretroviral).', recommendation: 'Ajustar dosis o usar métodos anticonceptivos no hormonales de barrera.' },
      { id: 'fen-int-2', interactsWith: 'Depresores del SNC y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Depresión sinérgica letal bulbar y muerte.', recommendation: 'Evitar consumo simultáneo.' }
    ],
    storageAndConservation: 'Sustancia controlada psicotrópica sujeta a doble control.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'pentobarbital',
    genericName: 'Pentobarbital Sódico',
    commercialNames: ['Nembutal', 'Pentothal'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Vial inyectable de Pentobarbital',
    atcCode: 'N05CA01',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Sedantes-hipnóticos y barbitúricos de acción corta a intermedia',
    description: 'Barbitúrico de acción corta a intermedia utilizado para sedación preoperatoria, inducción del coma barbitúrico protector en traumatismo craneoencefálico con hipertensión intracraneal refractaria y estatus epiléptico resistente.',
    presentations: [
      { id: 'pen-b-1', form: 'Solución inyectable IV/IM', concentration: '50 mg/mL (ampolla 2 mL y 50 mL)', route: 'Intravenosa', packaging: 'Vial multidosis x 50 mL y ampollas x 2 mL' },
      { id: 'pen-b-2', form: 'Cápsulas orales', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Frasco x 100 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Fija el receptor GABA-A potenciando la acción del GABA y prolongando la apertura del canal de Cl-. A concentraciones altas activa directamente el receptor independientemente del GABA, reduce el consumo metabólico cerebral de oxígeno (CMRO2) y disminuye el flujo sanguíneo cerebral, reduciendo la presión intracraneal.',
      molecularTarget: 'Receptor GABA-A y reducción metabólica neuronal cerebral',
      pharmacokinetics: {
        bioavailability: 'IV: 100%; Oral: 90%',
        halfLife: '15 a 50 horas',
        metabolism: 'Hepático casi total por hidroxilación',
        elimination: 'Excreción renal (< 1% inalterado)'
      }
    },
    therapeuticIndications: [
      'Coma barbitúrico para protección cerebral en hipertensión intracraneal refractaria post-trauma',
      'Estatus epiléptico refractario en UCI',
      'Sedación preanestésica e hipnótico de corta duración'
    ],
    posology: {
      adultStandard: 'Coma barbitúrico en UCI: Carga IV de 5 a 10 mg/kg en 10-20 minutos, seguido de infusión continua de 1 a 3 mg/kg/hora titulada según electroencefalograma (brote-supresión) y presión intracraneal (PIC < 20 mmHg). Sedación preoperatoria: 150 a 200 mg IM.',
      pediatricDose: 'En UCI pediátrica: Dosis de carga de 2 a 6 mg/kg lenta IV, seguido de infusión de 1 a 3 mg/kg/h con ventilación mecánica obligatoria.',
      renalAdjustment: {
        normal: 'Dosis guiada por EEG y parámetros hemodinámicos',
        moderate: 'Vigilar sedación',
        severe: 'Reducir dosis de infusión'
      },
      hepaticAdjustment: 'Reducir dosis por menor aclaramiento hepático.',
      administrationNotes: 'Requiere OBLIGATORIAMENTE intubación orotraqueal, ventilación mecánica invasiva y monitorización hemodinámica continua invasiva (línea arterial).'
    },
    safety: {
      blackBoxWarning: 'DEPRESIÓN RESPIRATORIA GRAVE, HIPOTENSIÓN SEVERA Y COLAPSO CARDIOVASCULAR POR DISMINUCIÓN DE LA CONTRACTILIDAD MIOCÁRDICA. USO EXCLUSIVO EN CUIDADOS INTENSIVOS.',
      contraindications: [
        'Porfiria aguda',
        'Insuficiencia respiratoria sin soporte ventilatorio mecánico',
        'Choque cardiogénico o hipotensión severa no corregida'
      ],
      adverseEffects: {
        frequent: ['Hipotensión arterial marcada (requiere soporte inotrópico/vasopresor)', 'Depresión respiratoria total', 'Hipotermia'],
        moderate: ['Íleo paralítico', 'Bradicardia', 'Infecciones nosocomiales'],
        severe: ['Paro cardiorrespiratorio', 'Laringoespasmo', 'Shock circulatorio']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO en el embarazo.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Electroencefalograma continuo (patrón de brote-supresión)', 'Presión arterial invasiva y gasto cardíaco', 'Presión intracraneal (PIC)']
    },
    interactions: [
      { id: 'pen-b-int-1', interactsWith: 'Anestésicos y Depresores del SNC', severity: 'Contraindicada', clinicalEffect: 'Colapso cardiovascular y depresión respiratoria mortal.', recommendation: 'Manejo en UCI con soporte ventilatorio y hemodinámico.' }
    ],
    storageAndConservation: 'Medicamento controlado de uso hospitalario exclusivo en UCI / quirófano.',
    highAlertMedicine: true,
    prescriptionType: 'Uso hospitalario exclusivo',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'tiopental',
    genericName: "Tiopental",
    commercialNames: ["Pentothal Sódico", "Fenabbott"],
    imageUrl: "https://gruporfp.vtexassets.com/arquivos/ids/7002960/7501033920363_01.jpg?v=639183640687600000",
    imageAlt: "Tiopental - Presentación farmacológica",
    atcCode: 'N01AF03',
    anatomicalSystem: '2.4 Ansiolíticos y Sedantes-Hipnóticos',
    therapeuticClass: 'Anestésicos generales y sedantes / Tiobarbitúricos de acción ultracorta',
    description: 'Tiobarbitúrico de acción ultracorta e inicio casi instantáneo (30 a 45 segundos) gracias a su altísima liposolubilidad. Fármaco clásico de inducción anestésica de secuencia rápida y neuroprotección en estatus epiléptico refractario e hipertensión endocraneana.',
    presentations: [
      { id: 'tio-1', form: 'Polvo para solución inyectable IV', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Frasco ampolla liofilizado x 20 mL y 50 mL' }
    ],
    mechanismOfAction: {
      summary: 'Facilita y prolonga los efectos inhibitorios del GABA en el receptor GABA-A y deprime directamente el sistema reticular activador del tronco encefálico. Su terminación de acción ultracorta no se debe a su metabolismo, sino a la rápida REDISTRIBUCIÓN tisular desde el cerebro ricamente vascularizado hacia el músculo y tejido adiposo.',
      molecularTarget: 'Receptor GABA-A y bloqueo del sistema reticular ascendente',
      pharmacokinetics: {
        bioavailability: 'IV: 100%; inicio de acción en 30-45 segundos (tiempo brazo-cerebro); duración del despertar: 5-10 minutos por redistribución',
        halfLife: 'Vida media de eliminación terminal prolongada: 8 a 12 horas (acumulación masiva en infusiones prolongadas)',
        metabolism: 'Hepático lento por desulfuración a pentobarbital y oxidación',
        elimination: 'Excreción renal'
      }
    },
    therapeuticIndications: [
      'Inducción de la anestesia general en intubación de secuencia rápida',
      'Control de emergencia del estatus epiléptico refractario a benzodiacepinas y fenitoína',
      'Neuroprotección y reducción de la presión intracraneal en neurocirugía y traumatismo craneal severo'
    ],
    posology: {
      adultStandard: 'Inducción anestésica IV: 3 a 5 mg/kg en inyección IV lenta durante 20-30 segundos (dosis típica en adulto 250 a 500 mg). Estatus epiléptico refractario: Bolo de 3 a 5 mg/kg, seguido de infusión de 2 a 5 mg/kg/hora titulada según EEG.',
      pediatricDose: 'Inducción pediátrica: 5 a 6 mg/kg IV lenta bajo soporte ventilatorio.',
      renalAdjustment: {
        normal: 'Dosis estándar guiada por respuesta clínica',
        moderate: 'Reducir dosis en fallo renal por menor unión a albúmina',
        severe: 'Reducir dosis un 50%'
      },
      hepaticAdjustment: 'Reducir dosis en hepatopatía.',
      administrationNotes: 'USO EXCLUSIVO INTRAVENOSO. La extravasación perivenosa o inyección intraarterial accidental produce vasoespasmo severo, trombosis y gangrena del miembro.'
    },
    safety: {
      blackBoxWarning: 'DEPRESIÓN RESPIRATORIA AGUDA INMEDIATA, APNEA Y LARINGOESPASMO GRAVE. LA INYECCIÓN INTRAARTERIAL PRODUCE ISQUEMIA GRAVE Y GANGRENA DE LA EXTREMIDAD.',
      contraindications: [
        'Porfiria aguda intermitente (contraindicación absoluta por inducción de ALA-sintetasa)',
        'Obstrucción grave de la vía aérea o ausencia de equipamiento para intubación inmediata',
        'Choque o colapso cardiovascular severo',
        'Asma bronquial activa grave (riesgo extremo de broncoespasmo y laringoespasmo)'
      ],
      adverseEffects: {
        frequent: ['Apnea transitoria tras la inducción', 'Hipotensión arterial por vasodilatación periférica y depresión miocárdica', 'Depresión miocárdica dosis-dependiente'],
        moderate: ['Laringoespasmo y broncoespasmo', 'Tromboflebitis', 'Despertar prolongado con resaca'],
        severe: ['Paro cardiorrespiratorio', 'Colapso vascular irreversible en sobredosis', 'Necrosis y gangrena por extravasación o inyección intraarterial']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usado en anestesia obstétrica para cesárea urgente. Atraviesa rápidamente la placenta; debe extraerse el feto con rapidez para evitar depresión respiratoria neonatal.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Monitorización continua de ECG, presión arterial invasiva y SpO2', 'Capnografía (EtCO2)', 'EEG en infusión continua']
    },
    interactions: [
      { id: 'tio-int-1', interactsWith: 'Bloqueantes neuromusculares y analgésicos opioides', severity: 'Mayor', clinicalEffect: 'Depresión sinérgica respiratoria y cardiovascular profunda.', recommendation: 'Titular cuidadosamente las dosis en quirófano/UCI.' }
    ],
    storageAndConservation: 'Conservar el polvo liofilizado por debajo de 25°C. Tras reconstituir con agua bidestilada o SF 0.9%, usar antes de 24 horas.',
    highAlertMedicine: true,
    prescriptionType: 'Uso hospitalario exclusivo',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  }
];
