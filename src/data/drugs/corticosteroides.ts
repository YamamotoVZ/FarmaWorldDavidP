import { Medication } from '../../types/medication';

const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';

export const CORTICOSTEROIDES: Medication[] = [
  {
    id: 'dexametasona',
    genericName: "Dexametasona Fosfato Sódico",
    commercialNames: ["Dexacort", "Alin"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501088503825.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Dexametasona Fosfato Sódico - Presentación farmacológica",
    atcCode: 'H02AB02',
    anatomicalSystem: '3. Corticosteroides',
    therapeuticClass: 'Glucocorticoides sintéticos de acción prolongada y muy alta potencia',
    description: 'Glucocorticoide sintético de máxima potencia antiinflamatoria e inmunosupresora (25 a 30 veces más potente que la hidrocortisona) con casi nula actividad mineralocorticoide. Fármaco de elección en edema cerebral vasogénico, maduración pulmonar fetal y choque inflamatorio.',
    presentations: [
      { id: 'dex-1', form: 'Solución inyectable IV/IM', concentration: '4 mg/mL y 8 mg/2 mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL y 2 mL (Caja x 3 y 5)' },
      { id: 'dex-2', form: 'Comprimidos orales', concentration: '4 mg y 8 mg', route: 'Oral', packaging: 'Caja x 10 y 30 comprimidos' },
      { id: 'dex-3', form: 'Colirio oftálmico al 0.1%', concentration: '1 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Atraviesa la membrana celular y se une a los receptores glucocorticoides citoplasmáticos (GR), translocándose al núcleo donde se une a elementos de respuesta a glucocorticoides (GRE) en el ADN. Estimula la transcripción de lipocortina-1 (anexina-1) inhibiendo la fosfolipasa A2 y suprime factores de transcripción proinflamatorios clave (NF-κB y AP-1), bloqueando la producción de citoquinas (IL-1, IL-6, TNF-alfa), quimioquinas y enzimas inflamatorias.',
      molecularTarget: 'Receptor de Glucocorticoides citosólico e inhibición de NF-κB',
      pharmacokinetics: {
        bioavailability: 'Oral: 75-90%; IV: 100%',
        halfLife: 'Plasmática: 3.5 a 5 horas; Vida media biológica tisular: 36 a 54 horas (acción prolongada)',
        metabolism: 'Hepático extenso por citocromo CYP3A4 a 6-beta-hidroxidexametasona',
        elimination: 'Excreción 65% en orina en 24 horas'
      }
    },
    therapeuticIndications: [
      'Edema cerebral vasogénico asociado a neoplasias primarias del SNC o metástasis cerebrales',
      'Maduración pulmonar fetal en riesgo inminente de parto pretérmino (24 a 34 semanas)',
      'Laringotraqueítis aguda (crup pediátrico) y edema glótico postextubación',
      'Crisis grave de asma bronquial, anafilaxia y choque séptico refractario',
      'Profilaxis de emesis inducida por quimioterapia antineoplásica altamente emetógena'
    ],
    posology: {
      adultStandard: 'Edema cerebral: Inicial 10 a 20 mg IV en bolo, seguido de 4 mg IV o VO cada 6 horas hasta respuesta clínica, con retirada paulatina. Antiemético en quimioterapia: 10 a 20 mg IV previo a la infusión. Antiinflamatorio oral: 0.5 a 9 mg/día divididos en 2 a 4 tomas.',
      pediatricDose: 'Crup laríngeo en urgencias: 0.15 a 0.6 mg/kg en dosis única oral o IM. Antiinflamatorio pediátrico: 0.08 a 0.3 mg/kg/día.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste de dosis'
      },
      hepaticAdjustment: 'En hepatopatía grave la semivida se prolonga; vigilar signos de hipercortisolismo.',
      administrationNotes: 'En tratamientos superiores a 2-3 semanas, suspender SIEMPRE de forma gradual y escalonada para evitar crisis de insuficiencia suprarrenal aguda secundaria a atrofia del eje hipotálamo-hipófiso-adrenal (HHA).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE SUPRESIÓN DEL EJE HIPOTÁLAMO-HIPÓFISO-ADRENAL CON INSUFICIENCIA SUPRARRENAL AGUDA MORTAL AL SUSPENDER BRUSCAMENTE TRAS USO CONTINUADO. RIESGO DE INFECCIONES OPORTUNISTAS GRAVES.',
      contraindications: [
        'Infecciones micóticas o bacterianas sistémicas no controladas sin tratamiento antimicrobiano específico',
        'Vacunación con virus vivos o atenuados durante el tratamiento inmunosupresor',
        'Hipersensibilidad al principio activo o a sulfitos en ampollas'
      ],
      adverseEffects: {
        frequent: ['Hiperglucemia en diabéticos y no diabéticos', 'Insomnio, euforia o labilidad emocional', 'Aumento del apetito y retención hídrica'],
        moderate: ['Hipertensión arterial', 'Miopatía esteroidea proximal', 'Inmunosupresión y candidiasis oral'],
        severe: ['Insuficiencia suprarrenal aguda al cese brusco', 'Reactivación de tuberculosis latente', 'Psicosis esteroidea', 'Osteonecrosis aséptica de la cabeza femoral']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Fármaco de elección (protocolo de 2 dosis de 12 mg IM cada 24 horas) para inducir maduración pulmonar fetal en riesgo de parto pretérmino.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Glucemia capilar', 'Presión arterial y signos infecciosos intercurrentes', 'Control de electrolitos (K+)']
    },
    interactions: [
      { id: 'dex-int-1', interactsWith: 'AINEs (Ibuprofeno, Ketorolaco, Naproxeno)', severity: 'Mayor', clinicalEffect: 'Multiplica por 4 a 5 veces el riesgo de úlcera péptica y hemorragia digestiva severa.', recommendation: 'Asociar siempre un IBP (omeprazol) como gastroprotección estricta.' },
      { id: 'dex-int-2', interactsWith: 'Inductores de CYP3A4 (Fenitoína, Carbamazepina, Rifampicina)', severity: 'Mayor', clinicalEffect: 'Aceleran marcadamente el metabolismo de dexametasona reduciendo su eficacia clínica.', recommendation: 'Puede ser necesario duplicar la dosis del corticoide.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido de la luz directa.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'hidrocortisona',
    genericName: "Hidrocortisona (Cortisol)",
    commercialNames: ["Flemex", "Locoid"],
    imageUrl: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/kener_flemex_soluinyec_100mg_2ml.png",
    imageAlt: "Hidrocortisona (Cortisol) - Presentación farmacológica",
    atcCode: 'H02AB09',
    anatomicalSystem: '3. Corticosteroides',
    therapeuticClass: 'Glucocorticoides naturales de acción corta con actividad mineralocorticoide',
    description: 'Glucocorticoide natural idéntico al cortisol endógeno secretado por la corteza suprarrenal humana. Posee propiedades glucocorticoides y mineralocorticoide equivalentes (retención de sodio/agua y excreción de potasio), constituyendo el tratamiento sustitutivo estándar en insuficiencia suprarrenal aguda y crónica.',
    presentations: [
      { id: 'hid-1', form: 'Polvo para solución inyectable IV/IM (Succinato sódico)', concentration: '100 mg y 500 mg', route: 'Intravenosa', packaging: 'Vial liofilizado + ampolla disolvente 2 mL' },
      { id: 'hid-2', form: 'Comprimidos orales', concentration: '10 mg y 20 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos' },
      { id: 'hid-3', form: 'Crema tópica al 1% y 2.5%', concentration: '10 mg/g y 25 mg/g', route: 'Tópica', packaging: 'Tubo x 30 g y 60 g' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores de glucocorticoides (GR) y de mineralocorticoides (MR). Regula el metabolismo de carbohidratos, lípidos y proteínas, modula la respuesta inmune inhibiendo citoquinas y fosfolipasa A2, y a nivel renal en el túbulo distal estimula la reabsorción activa de sodio y agua y la excreción de potasio e iones hidrógeno.',
      molecularTarget: 'Receptores de Glucocorticoides (GR) y Mineralocorticoides (MR)',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100%; IV: inmediata',
        halfLife: 'Plasmática: 1.5 a 2 horas; Vida media biológica tisular: 8 a 12 horas (acción corta)',
        metabolism: 'Hepático extenso a tetrahidrocortisol y metabolitos glucurónidos inactivos',
        elimination: 'Excreción 90% renal'
      }
    },
    therapeuticIndications: [
      'Crisis de insuficiencia suprarrenal aguda (Crisis addisoniana) y choque suprarrenal',
      'Terapia de reemplazo en insuficiencia suprarrenal primaria (Enfermedad de Addison) o secundaria',
      'Choque séptico refractario a vasopresores (dosis de estrés)',
      'Reacciones alérgicas severas, anafilaxia y estatus asmático (urgencias parenterales)',
      'Dermatosis inflamatorias pruriginosas (crema tópica)'
    ],
    posology: {
      adultStandard: 'Crisis addisoniana / Choque: Bolo IV inicial de 100 mg, seguido de 100 mg cada 6 u 8 horas (o infusión continua de 200 mg/24h) con reposición de suero salino 0.9%. Terapia sustitutiva oral crónica: 15 a 25 mg/día divididos en dos tomas (2/3 de la dosis por la mañana al despertar y 1/3 a primera hora de la tarde) simulando el ritmo circadiano.',
      pediatricDose: 'Insuficiencia suprarrenal pediátrica: 8 a 10 mg/m²/día divididos en 3 tomas. En shock agudo: 1 a 2 mg/kg bolo IV, seguido de 25-50 mg/día.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Monitorear posible sobrecarga hidrosalina por actividad mineralocorticoide'
      },
      hepaticAdjustment: 'Reducir dosis de mantenimiento en insuficiencia hepática.',
      administrationNotes: 'En situaciones de estrés intercurrente (infección, cirugía mayor, traumatismo), los pacientes en sustitución crónica deben duplicar o triplicar la dosis habitual para prevenir crisis addisoniana mortal.'
    },
    safety: {
      blackBoxWarning: 'EN PACIENTES CON INSUFICIENCIA CORTICOSUPRARRENAL, EL NO INCREMENTAR LA DOSIS EN SITUACIONES DE ESTRÉS PUEDE PROVOCAR CRISIS SUPRARRENAL AGUDA, CHOQUE HIPOVOLÉMICO Y MUERTE.',
      contraindications: [
        'Infecciones fúngicas sistémicas no tratadas',
        'Vacunas de virus vivos atenuados en dosis inmunosupresoras'
      ],
      adverseEffects: {
        frequent: ['Retención de sodio y agua con edemas periféricos', 'Hipopotasemia leve (efecto mineralocorticoide)', 'Insomnio'],
        moderate: ['Hipertensión arterial', 'Aumento de peso y facies cushingoide', 'Hiperglucemia'],
        severe: ['Crisis suprarrenal al suspender la terapia bruscamente', 'Hemorragia digestiva', 'Alcalosis metabólica hipopotasémica']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Fármaco de elección para la terapia sustitutiva en mujeres gestantes con insuficiencia suprarrenal (el feto está protegido porque la placenta metaboliza el cortisol a cortisona inactiva mediante 11β-HSD2).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Electrolitos séricos (Na+, K+)', 'Presión arterial y peso corporal', 'Glucemia']
    },
    interactions: [
      { id: 'hid-int-1', interactsWith: 'Diuréticos perdedores de potasio (Furosemida, Hidroclorotiazida)', severity: 'Mayor', clinicalEffect: 'Aumento sinérgico de hipopotasemia con riesgo de arritmias ventriculares.', recommendation: 'Monitorizar potasio sérico y suplementar si es necesario.' },
      { id: 'hid-int-2', interactsWith: 'Antidiabéticos orales e Insulina', severity: 'Mayor', clinicalEffect: 'Aumento de la resistencia insulínica e hiperglucemia.', recommendation: 'Ajustar dosis de hipoglucemiantes.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C. Tras reconstituir con disolvente, la solución IV debe utilizarse en 24 horas.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'prednisona',
    genericName: "Prednisona",
    commercialNames: ["Dacortin", "Deltasone", "Meticorten"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_eJoLWzdyO92HtSnpozH_4AYX6WFk0SOed57B3DTvCjafjSs3iw9ENPo&s=10",
    imageAlt: "Prednisona - Presentación farmacológica",
    atcCode: 'H02AB07',
    anatomicalSystem: '3. Corticosteroides',
    therapeuticClass: 'Glucocorticoides sintéticos de acción intermedia para administración oral',
    description: 'Glucocorticoide oral prototípico de acción intermedia (4 veces más potente que la hidrocortisona) con baja actividad mineralocorticoide. Fármaco de referencia en enfermedades autoinmunes, brotes alérgicos y patología reumatológica ambulatoria.',
    presentations: [
      { id: 'prd-1', form: 'Comprimidos ranurados', concentration: '5 mg, 10 mg, 30 mg, 50 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco inactivo que se bioactiva rápidamente en el hígado a prednisolona mediante la enzima 11-beta-hidroxiesteroide deshidrogenasa tipo 1 (11β-HSD1). La prednisolona activa los receptores citoplasmáticos de glucocorticoides, inhibiendo la síntesis de mediadores inflamatorios (interleucinas, TNF-alfa, prostaglandinas y leucotrienos) y la migración celular inflamatoria.',
      molecularTarget: 'Bioactivación hepática a Prednisolona y unión a receptor glucocorticoide citosólico',
      pharmacokinetics: {
        bioavailability: 'Oral: casi completa (80-100%)',
        halfLife: 'Plasmática de prednisolona: 2.5 a 3.5 horas; Vida media biológica tisular: 18 a 36 horas (acción intermedia)',
        metabolism: 'Hepático a prednisolona activa y posterior inactivación y glucuronidación',
        elimination: 'Excreción 80% en orina'
      }
    },
    therapeuticIndications: [
      'Enfermedades autoinmunes y reumatológicas (Lupus eritematoso sistémico, polimialgia reumática, vasculitis, artritis reumatoide)',
      'Exacerbaciones agudas de asma bronquial y enfermedad pulmonar obstructiva crónica (EPOC)',
      'Nefropatía por cambios mínimos y glomerulonefritis membranosa',
      'Púrpura trombocitopénica idiopática y anemia hemolítica autoinmune',
      'Brotes graves de enfermedad inflamatoria intestinal (Crohn, Colitis ulcerosa)'
    ],
    posology: {
      adultStandard: 'Inicial: 20 a 60 mg/día en toma única matinal con el desayuno (o hasta 1 mg/kg/día en brotes graves autoinmunes). Dosis de mantenimiento: titular a la menor dosis eficaz posible (ej. 5 a 10 mg/día). Pauta descendente gradual obligatoria si se toma por más de 14-21 días.',
      pediatricDose: '0.5 a 2 mg/kg/día dividido en 1 o 2 tomas (máx 60 mg/día). Pauta corta de rescate en asma infantil: 1-2 mg/kg/día por 3 a 5 días.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste'
      },
      hepaticAdjustment: 'En insuficiencia hepática grave la conversión de prednisona a prednisolona activa está reducida; se prefiere utilizar directamente PREDNISOLONA oral.',
      administrationNotes: 'Tomar la dosis total diaria en una sola toma matinal con el desayuno para reducir el impacto sobre el eje hormonal y prevenir insomnio nocturno.'
    },
    safety: {
      blackBoxWarning: 'LA SUSPENSIÓN BRUSCA DESPUÉS DE UN TRATAMIENTO PROLONGADO PRODUCE INSUFICIENCIA SUPRARRENAL AGUDA POTENCIALMENTE FATAL POR ATROFIA CORTICOSUPRARRENAL. RETIRADA LENTA Y GRADUAL OBLIGATORIA.',
      contraindications: [
        'Infecciones víricas, fúngicas o bacterianas sistémicas activas no controladas',
        'Vacunación con virus vivos atenuados en pacientes bajo dosis inmunosupresoras (> 20 mg/día por > 2 semanas)'
      ],
      adverseEffects: {
        frequent: ['Aumento de peso, apetito y depósito graso facial (cara de luna llena)', 'Hiperglucemia', 'Insomnio y cambios de humor'],
        moderate: ['Hipertensión arterial leve', 'Osteopenia / osteoporosis en uso crónico (> 3 meses)', 'Aparición de estrías cutáneas y fragilidad capilar'],
        severe: ['Supresión suprarrenal aguda en retiro abrupto', 'Catarata subcapsular posterior y glaucoma', 'Perforación de úlcera péptica silente', 'Infecciones oportunistas']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Categoría C. La placenta metaboliza la mayor parte de la prednisona a formas inactivas mediante 11β-HSD2, protegiendo al feto (fármaco de elección para patología materna).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Glucemia y presión arterial periódicas', 'Densitometría ósea y profilaxis con calcio/vitamina D en tratamientos > 3 meses']
    },
    interactions: [
      { id: 'prd-int-1', interactsWith: 'AINEs (Ibuprofeno, Diclofenaco)', severity: 'Mayor', clinicalEffect: 'Aumento marcado del riesgo de úlcera péptica y hemorragia digestiva.', recommendation: 'Asociar IBP gastroprotector.' },
      { id: 'prd-int-2', interactsWith: 'Hipoglucemiantes orales e Insulinas', severity: 'Mayor', clinicalEffect: 'Aumento de la resistencia a insulina con hiperglucemia importante.', recommendation: 'Monitorizar glucemia capilar y reajustar antidiabéticos.' }
    ],
    storageAndConservation: 'Conservar a temperatura ambiente protegida de la humedad.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'metilprednisolona',
    genericName: 'Metilprednisolona (Succinato sódico)',
    commercialNames: ['Urbason', 'Solu-Medrol', 'Medrol', 'Depo-Medrol'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Viales inyectables y comprimidos de Metilprednisolona',
    atcCode: 'H02AB04',
    anatomicalSystem: '3. Corticosteroides',
    therapeuticClass: 'Glucocorticoides sintéticos de acción intermedia para pulsoterapia parenteral y vía oral',
    description: 'Glucocorticoide sintético 5 veces más potente que la hidrocortisona, con nula actividad mineralocorticoide y potente acción inmunosupresora. Fármaco de referencia hospitalaria para pulsoterapia intravenosa en crisis autoinmunes graves, brotes de esclerosis múltiple y rechazo de trasplantes.',
    presentations: [
      { id: 'mp-1', form: 'Polvo para solución inyectable IV/IM (Solu-Medrol)', concentration: '40 mg, 125 mg, 500 mg, 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Vial + ampolla disolvente' },
      { id: 'mp-2', form: 'Comprimidos orales', concentration: '4 mg, 16 mg, 40 mg', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos' },
      { id: 'mp-3', form: 'Suspensión inyectable de depósito (Acetato de metilprednisolona)', concentration: '40 mg/mL', route: 'Intramuscular', packaging: 'Vial x 1 mL y 2 mL (para infiltración intraarticular o IM)' }
    ],
    mechanismOfAction: {
      summary: 'Activa los receptores de glucocorticoides intracelulares regulando la transcripción de genes diana. Disminuye la producción de mediadores de la inflamación, inhibe la activación de linfocitos T, bloquea la liberación de citocinas proinflamatorias y estabiliza las membranas lisosomales sin inducir retención de sodio ni edema mineralocorticoide.',
      molecularTarget: 'Receptores glucocorticoides e inmunosupresión de células T',
      pharmacokinetics: {
        bioavailability: 'Oral: 80-90%; IV: 100%',
        halfLife: 'Plasmática: 2 a 3 horas; Vida media biológica tisular: 18 a 36 horas (acción intermedia)',
        metabolism: 'Hepático extenso por CYP3A4',
        elimination: 'Excreción renal'
      }
    },
    therapeuticIndications: [
      'Pulsoterapia en brotes agudos severos de Esclerosis Múltiple (pulsos de 1 g/día IV)',
      'Rechazo agudo de trasplante de órganos sólidos (riñón, hígado, corazón)',
      'Lupus eritematoso sistémico con compromiso de órgano vital (nefritis lúpica grado IV, vasculitis grave)',
      'Crisis grave de asma bronquial resistente y choque anafiláctico',
      'Infiltración intraarticular en artritis reumatoide y sinovitis'
    ],
    posology: {
      adultStandard: 'Pulsos de choque inmunosupresor: 500 mg a 1000 mg (1 g) una vez al día por vía IV en infusión lenta en al menos 30 a 60 minutos durante 3 a 5 días consecutivos. Urgencias / Asma grave: 40 a 125 mg IV cada 6 horas. Oral ambulatorio: 16 a 40 mg/día matinales.',
      pediatricDose: '1 a 2 mg/kg/día IV en dosis fraccionadas. En pulsos pediátricos especializados: 15 a 30 mg/kg/día (máx 1000 mg/día) en infusión de 1 hora.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste'
      },
      hepaticAdjustment: 'Vigilar efectos adversos en hepatopatía.',
      administrationNotes: 'Los pulsos de 1 g deben infundirse SIEMPRE lentamente en al menos 30 a 60 minutos con monitorización cardíaca (riesgo de arritmias ventriculares fatales y colapso cardiovascular por infusión rápida).'
    },
    safety: {
      blackBoxWarning: 'LA INFUSIÓN RÁPIDA EN BOLO DE DOSIS ALTAS (> 500 MG) SE HA ASOCIADO A PARO CARDÍACO, COLAPSO CARDIOVASCULAR Y ARRITMIAS VENTRICULARES GRAVES. INFUNDIR LENTAMENTE BAJO MONITORIZACIÓN.',
      contraindications: [
        'Infecciones fúngicas o bacterianas sistémicas no controladas',
        'Vacunación con virus vivos atenuados'
      ],
      adverseEffects: {
        frequent: ['Sabor metálico transitorio en la boca durante la infusión IV', 'Hiperglucemia y rubor facial', 'Insomnio y euforia'],
        moderate: ['Hipertensión arterial aguda transitoria', 'Miopatía', 'Mayor susceptibilidad a infecciones'],
        severe: ['Arritmias cardíacas y paro por infusión IV rápida', 'Psicosis aguda corticoidea', 'Pancreatitis aguda (rara)', 'Osteonecrosis aséptica']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usar solo si el beneficio materno supera el riesgo potencial fetal.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Electrocardiograma y presión arterial durante la perfusión de pulsos', 'Glucemia capilar', 'Potasio sérico']
    },
    interactions: [
      { id: 'mp-int-1', interactsWith: 'Inhibidores potentes de CYP3A4 (Ketoconazol, Claritromicina)', severity: 'Mayor', clinicalEffect: 'Inhibición del metabolismo de metilprednisolona elevando notablemente su toxicidad.', recommendation: 'Reducir dosis del esteroide.' },
      { id: 'mp-int-2', interactsWith: 'Anticoagulantes orales', severity: 'Moderada', clinicalEffect: 'Puede alterar el INR tanto en aumento como en descenso.', recommendation: 'Monitorizar INR periódicamente.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  }
];
