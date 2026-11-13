import { Medication } from '../../types/medication';

const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';
const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';

export const ANTIPSICOTICOS_ANTICONVULSIVOS: Medication[] = [
  // --- 6. ANTIPSICÓTICOS ---
  {
    id: 'clorpromazina',
    genericName: "Clorpromazina",
    commercialNames: ["Largactil", "Thorazine"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYxLeYnfVPPejKFMr6rahRAm3NbnB705_vshpJPhZleBxNA81dN67ufg&s=10",
    imageAlt: "Clorpromazina - Presentación farmacológica",
    atcCode: 'N05AA01',
    anatomicalSystem: '6. Antipsicóticos',
    therapeuticClass: 'Antipsicóticos típicos de primera generación / Fenotiazinas alifáticas de baja potencia',
    description: 'Primer antipsicótico sintético de la historia médica (descubierto en 1952 por Laborit/Delay/Deniker). De baja potencia antipsicótica relativa pero pronunciada acción sedante, anticolinérgica, antiadrenérgica y antiemética.',
    presentations: [
      { id: 'cpz-1', form: 'Comprimidos recubiertos', concentration: '25 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos' },
      { id: 'cpz-2', form: 'Solución inyectable IM/IV', concentration: '25 mg / 2 mL', route: 'Intramuscular', packaging: 'Ampollas x 2 mL (Caja x 5 y 10)' },
      { id: 'cpz-3', form: 'Gotas orales al 4%', concentration: '40 mg/mL (1 gota = 1 mg)', route: 'Oral', packaging: 'Frasco gotero x 30 mL' }
    ],
    mechanismOfAction: {
      summary: 'Antagonista competitivo de los receptores dopaminérgicos D2 postsinápticos en la vía mesolímbica (reduciendo síntomas positivos de psicosis como delirios y alucinaciones) y mesocortical. Bloquea también receptores D2 en la zona gatillo quimiorreceptora (efecto antiemético) y receptores histaminérgicos H1 (sedación profunda), adrenérgicos alfa-1 (hipotensión ortostática) y muscarínicos colinérgicos M1.',
      molecularTarget: 'Antagonismo de receptores D2 dopaminérgicos, H1, Alfa-1 y M1',
      pharmacokinetics: {
        bioavailability: 'Oral: 20-35% (metabolismo de primer paso hepático muy intenso); IM: 80%',
        halfLife: 'Bifásica: 15 a 30 horas',
        metabolism: 'Hepático extenso por CYP2D6 produciendo más de 100 metabolitos',
        elimination: 'Excreción renal y fecal'
      }
    },
    therapeuticIndications: [
      'Esquizofrenia y trastornos psicóticos agudos y crónicos',
      'Agitación psicomotriz severa y estados maníacos en trastorno bipolar',
      'Hipo intratable y resistente (> 48 horas de duración)',
      'Náuseas y vómitos graves refractarios a otros antieméticos en cuidados paliativos'
    ],
    posology: {
      adultStandard: 'Psicosis / Agitación oral: Inicial 25 a 50 mg cada 8 horas; titular gradualmente hasta 200 a 600 mg/día (máx 1000 mg/día en hospitalizados). IM profunda en urgencias: 25 a 50 mg cada 6-8 horas. Hipo rebelde: 25 a 50 mg orales 3-4 veces al día por 3 días.',
      pediatricDose: 'Niños > 1 año: 0.5 mg/kg cada 6-8 horas por vía oral o IM (máx 40 mg/día en niños pequeños, 75 mg en mayores).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Reducir dosis un 25%',
        severe: 'Reducir dosis un 50% por mayor sensibilidad a sedación'
      },
      hepaticAdjustment: 'CONTRAINDICADA en hepatopatía grave activa (riesgo de coma hepático).',
      administrationNotes: 'Vía IM profunda en cuadrante superoexterno del glúteo. Mantener al paciente recostado 30 minutos tras la inyección por riesgo de hipotensión ortostática severa y síncope.'
    },
    safety: {
      blackBoxWarning: 'AUMENTO DE LA MORTALIDAD EN ANCIANOS CON PSICOSIS ASOCIADA A DEMENCIA (EVENTOS CARDIOVASCULARES E ICTUS). RIESGO DE SÍNDROME NEUROLÉPTICO MALIGNO Y DISCINESIA TARDÍA.',
      contraindications: [
        'Coma o depresión severa del sistema nervioso central',
        'Feocromocitoma',
        'Glaucoma de ángulo cerrado o riesgo de retención urinaria aguda',
        'Antecedentes de agranulocitosis por fenotiazinas'
      ],
      adverseEffects: {
        frequent: ['Sedación intensa y somnolencia', 'Hipotensión ortostática y mareo', 'Efectos anticolinérgicos (boca seca, visión borrosa, constipación)'],
        moderate: ['Fotosensibilidad cutánea y pigmentación gris-azulada en piel expuesta al sol', 'Hiperprolactinemia (galactorrea, amenorrea)', 'Síntomas extrapiramidales (parkinsonismo, acatisia)'],
        severe: ['Síndrome neuroléptico maligno (rigidez muscular extrema, hipertermia, inestabilidad autonómica y CK elevada)', 'Discinesia tardía orofacial irreversible', 'Agranulocitosis e ictericia colestásica']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usar con precaución solo si es indispensable. Riesgo de síntomas extrapiramidales y abstinencia en el neonato si se usa en el 3er trimestre.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Presión arterial en decúbito y ortostatismo', 'Temperatura corporal y signos de rigidez muscular', 'Hemograma con recuento leucocitario']
    },
    interactions: [
      { id: 'cpz-int-1', interactsWith: 'Depresores del SNC y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Depresión profunda respiratoria y sedación extrema.', recommendation: 'Evitar consumo de alcohol.' },
      { id: 'cpz-int-2', interactsWith: 'Fármacos que prolongan el QTc', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de arritmias ventriculares y Torsades de Pointes.', recommendation: 'Monitorización de ECG.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido de la luz (las fenotiazinas son fotosensibles y se oxidan adoptando color ámbar).',
    highAlertMedicine: false,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'haloperidol',
    genericName: "Haloperidol",
    commercialNames: ["Haldol", "Haloperil"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501384541521.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Haloperidol - Presentación farmacológica",
    atcCode: 'N05AD01',
    anatomicalSystem: '6. Antipsicóticos',
    therapeuticClass: 'Antipsicóticos típicos de primera generación / Butirofenonas de alta potencia',
    description: 'Antipsicótico típico de alta potencia antagonista D2. Fármaco de primera línea para el manejo de la agitación psicomotriz aguda, delirium hiperactivo y síndrome de Gilles de la Tourette, pero con elevada propensión a inducir efectos adversos extrapiramidales.',
    presentations: [
      { id: 'hal-1', form: 'Solución inyectable IM/IV', concentration: '5 mg / 1 mL', route: 'Intramuscular', packaging: 'Ampollas x 1 mL (Caja x 5)' },
      { id: 'hal-2', form: 'Comprimidos orales', concentration: '0.5 mg, 2 mg, 5 mg, 10 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'hal-3', form: 'Gotas orales al 0.2%', concentration: '2 mg/mL (1 gota = 0.1 mg)', route: 'Oral', packaging: 'Frasco gotero x 15 y 30 mL' },
      { id: 'hal-4', form: 'Solución inyectable de depósito (Decanoato de haloperidol)', concentration: '50 mg/mL y 100 mg/mL', route: 'Intramuscular', packaging: 'Ampolla x 1 mL (mensual)' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueante selectivo de alta potencia y afinidad de los receptores dopaminérgicos D2 postsinápticos en las vías mesolímbica y mesocortical del encéfalo. Presenta mínima actividad sobre receptores muscarínicos colinérgicos M1 e histaminérgicos H1 (baja sedación y escaso efecto anticolinérgico), lo que deriva en una alta tasa de efectos extrapiramidales por predominio colinérgico en el cuerpo estriado.',
      molecularTarget: 'Antagonismo selectivo de alta afinidad sobre receptores D2 dopaminérgicos',
      pharmacokinetics: {
        bioavailability: 'Oral: 60-70%; IM: casi 100%',
        halfLife: '15 a 30 horas (hasta 3 semanas para la formulación intramuscular de decanoato)',
        metabolism: 'Hepático por glucuronidación y citocromos CYP3A4 y CYP2D6',
        elimination: 'Excreción fecal/biliar y renal'
      }
    },
    therapeuticIndications: [
      'Agitación psicomotriz aguda y cuadros psicóticos agudos (esquizofrenia, manía)',
      'Delirium hiperactivo y estados confusionales agudos en hospitalización',
      'Síndrome de Gilles de la Tourette y tics motores/vocales severos',
      'Corea de Huntington (control de movimientos coreicos)',
      'Náuseas y vómitos refractarios en cuidados paliativos oncológicos'
    ],
    posology: {
      adultStandard: 'Agitación aguda / Delirium en urgencias: 2.5 a 5 mg IM o IV lenta (repetir cada 30-60 min si persiste agitación, máx 20-30 mg/día). Psicosis oral crónica: Inicial 2 a 5 mg/día en 2 o 3 tomas; titular hasta 10 a 20 mg/día. Haloperidol Decanoato IM profundo mensual: 50 a 150 mg cada 4 semanas.',
      pediatricDose: 'Niños > 3 años con tics o psicosis: 0.05 mg/kg/día dividido en 2 o 3 tomas; aumentar gradualmente (máx 0.15 mg/kg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Reducir dosis inicial a la mitad en ancianos o pacientes debilitados'
      },
      hepaticAdjustment: 'Reducir la dosis a la mitad en insuficiencia hepática.',
      administrationNotes: 'IV directa (uso común en UCI/cuidados paliativos): Administrar con monitorización de ECG por riesgo de prolongación del intervalo QTc y Torsades de Pointes.'
    },
    safety: {
      blackBoxWarning: 'PROLONGACIÓN DEL INTERVALO QTc Y ARRITMIAS TORSADES DE POINTES MORTALES (ESPECIALMENTE POR VÍA IV O A DOSIS ALTAS). AUMENTO DE MORTALIDAD EN ANCIANOS CON DEMENCIA.',
      contraindications: [
        'Enfermedad de Parkinson (empeoramiento motor severo por bloqueo D2 nigroestriado)',
        'Depresión severa del SNC o estado de coma',
        'Prolongación congénita o adquirida del intervalo QTc',
        'Demencia por cuerpos de Lewy'
      ],
      adverseEffects: {
        frequent: ['Síntomas extrapiramidales agudos: distonía aguda (tortícolis, crisis oculogiras), acatisia e inquietud motora severa, parkinsonismo farmacológico'],
        moderate: ['Hiperprolactinemia (amenorrea, galactorrea, ginecomastia)', 'Sedación leve', 'Hipotensión leve'],
        severe: ['Síndrome neuroléptico maligno (hipertermia, rigidez muscular en tubo de plomo, colapso autonómico)', 'Torsades de Pointes y paro cardíaco', 'Discinesia tardía']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usar con precaución solo si es estrictamente necesario.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Electrocardiograma (intervalo QTc) previo y durante la administración IV', 'Examen neurológico para detectar distonías o acatisia (tratar distonía con biperideno IV)', 'Niveles de potasio y magnesio']
    },
    interactions: [
      { id: 'hal-int-1', interactsWith: 'Fármacos que prolongan el QTc (Amiodarona, Metadona, Macrólidos, Ciprofloxacino)', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico crítico de arritmias ventriculares malignas y paro.', recommendation: 'Evitar la combinación; monitoreo estrecho de ECG.' },
      { id: 'hal-int-2', interactsWith: 'Levodopa y Agonistas dopaminérgicos (Pramipexol)', severity: 'Contraindicada', clinicalEffect: 'Antagonismo mutuo total anulando el efecto antiparkinsoniano.', recommendation: 'No usar haloperidol en pacientes parkinsonianos (usar quetiapina o clozapina).' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido de la luz.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },

  // --- 2.7 ANTICONVULSIVOS ---
  {
    id: 'carbamazepina',
    genericName: "Carbamazepina",
    commercialNames: ["Tegretol", "Carbatrol"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501094915810.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Carbamazepina - Presentación farmacológica",
    atcCode: 'N03AF01',
    anatomicalSystem: '2.7 Anticonvulsivos',
    therapeuticClass: 'Antiepilépticos derivados de la carboxamida / Bloqueantes de canales de sodio',
    description: 'Fármaco antiepiléptico de primera línea en crisis focales con o sin generalización secundaria y fármaco de elección indiscutible en la neuralgia del trigémino. Potente autoinductor enzimático de su propio metabolismo.',
    presentations: [
      { id: 'cbz-1', form: 'Comprimidos orales ranurados y masticables', concentration: '200 mg y 400 mg', route: 'Oral', packaging: 'Caja x 30, 50 y 100 comprimidos' },
      { id: 'cbz-2', form: 'Comprimidos de liberación controlada (CR / Retard)', concentration: '200 mg y 400 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos' },
      { id: 'cbz-3', form: 'Suspensión oral', concentration: '100 mg / 5 mL (2%)', route: 'Oral', packaging: 'Frasco x 120 mL y 250 mL' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea los canales de sodio voltaje-dependientes en las membranas neuronales estabilizando su estado inactivo, lo que previene la despolarización repetitiva de alta frecuencia en el foco epileptógeno e inhibe la propagación de la descarga convulsiva. Reduce la liberación presináptica de glutamato.',
      molecularTarget: 'Canales de sodio voltaje-dependientes neuronales (estado inactivo)',
      pharmacokinetics: {
        bioavailability: 'Oral: 70-85% (absorción lenta pero completa)',
        halfLife: 'Inicialmente 35 horas; desciende a 12 a 17 horas tras 2-4 semanas debido al fenómeno de AUTOINDUCCIÓN enzimática microsomal de su propio citocromo CYP3A4',
        metabolism: 'Hepático por CYP3A4 a carbamazepina-10,11-epóxido (metabolito activo anticonvulsivo)',
        elimination: 'Excreción 70% renal'
      }
    },
    therapeuticIndications: [
      'Crisis epilépticas focales (con o sin evolución a bilateral tónico-clónica) y crisis generalizadas tónico-clónicas',
      'Neuralgia del trigémino esencial y neuralgia del glosofaríngeo (fármaco de primera elección)',
      'Profilaxis del Trastorno Bipolar refractario a litio',
      'Síndrome de abstinencia alcohólica aguda'
    ],
    posology: {
      adultStandard: 'Epilepsia: Inicial 100 a 200 mg una o dos veces al día con alimentos; incrementar semanalmente en 200 mg/día hasta mantenimiento habitual de 800 a 1200 mg/día divididos en 2 o 3 tomas (máx 1600-2000 mg/día). Rango terapéutico plasmático: 4 a 12 mcg/mL. Neuralgia del trigémino: Inicial 100 mg cada 12h; titular hasta alivio del dolor (promedio 600-800 mg/día).',
      pediatricDose: 'Niños: Inicial 10 a 20 mg/kg/día dividido en 2 o 3 tomas (máx 35 mg/kg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar guiada por niveles plasmáticos',
        moderate: 'No requiere ajuste',
        severe: 'ClCr < 10 mL/min: Usar con precaución y monitorizar litemia/niveles'
      },
      hepaticAdjustment: 'Reducir dosis en hepatopatía.',
      administrationNotes: 'Tomar siempre con las comidas. A las 2-4 semanas de iniciado el tratamiento los niveles plasmáticos suelen caer por autoinducción, requiriendo un ajuste de dosis.'
    },
    safety: {
      blackBoxWarning: 'REACCIONES CUTÁNEAS GRAVES POTENCIALMENTE MORTALES (SÍNDROME DE STEVENS-JOHNSON / NET) FUERTEMENTE ASOCIADAS AL ALELO HLA-B*1502 EN POBLACIONES ASIÁTICAS. RIESGO DE APLASIA MEDULAR Y AGRANULOCITOSIS.',
      contraindications: [
        'Bloqueo auriculoventricular de 2° o 3° grado o depresión de médula ósea previa',
        'Antecedente de porfiria hepática aguda',
        'Uso simultáneo con IMAO o en las 2 semanas previas',
        'Crisis de ausencia o mioclonías (puede exacerbarlas marcadamente)'
      ],
      adverseEffects: {
        frequent: ['Mareo, ataxia y diplopía / visión borrosa (muy característico)', 'Somnolencia y náuseas'],
        moderate: ['Hiponatremia euvolémica por efecto similar a SIADH', 'Elevación de fosfatasa alcalina y transaminasas', 'Leucopenia benigna transitoria'],
        severe: ['Síndrome de Stevens-Johnson / Lyell', 'Agranulocitosis y anemia aplásica', 'Hepatitis tóxica aguda', 'Bloqueo cardíaco']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO. Teratógeno conocido (defectos del tubo neural como espina bífida, hendiduras orofaciales e hipoplasia ungueal). Suplementar altas dosis de ácido fólico (5 mg/día).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Nivel plasmático de carbamazepina (4 a 12 mcg/mL)', 'Hemograma completo basal y periódico', 'Sodio sérico y función hepática']
    },
    interactions: [
      { id: 'cbz-int-1', interactsWith: 'Anticonceptivos orales, Anticoagulantes (Warfarina, DOACs), Antirretrovirales', severity: 'Mayor', clinicalEffect: 'Inducción enzimática masiva de CYP3A4 reduciendo los niveles de los fármacos con fracaso anticonceptivo y trombosis.', recommendation: 'Usar anticoncepción de barrera alternativa.' },
      { id: 'cbz-int-2', interactsWith: 'Inhibidores de CYP3A4 (Claritromicina, Eritromicina, Fluconazol)', severity: 'Mayor', clinicalEffect: 'Inhibición del metabolismo de carbamazepina provocando toxicidad aguda severa (ataxia, vómitos, estupor).', recommendation: 'Reducir la dosis de carbamazepina a la mitad o evitar el antibiótico.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C en envase protegido de la humedad.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'fenitoina',
    genericName: "Fenitoína",
    commercialNames: ["Epamin", "Dilantin"],
    imageUrl: "https://www.yza.mx/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_YzaMexico/default/dw195950b4/images/large/840149675390_1.jpg?sw=1000&sh=1000",
    imageAlt: "Fenitoína - Presentación farmacológica",
    atcCode: 'N03AB02',
    anatomicalSystem: '2.7 Anticonvulsivos',
    therapeuticClass: 'Antiepilépticos derivados de la hidantoína / Bloqueantes de canales de sodio',
    description: 'Antiepiléptico clásico con farmacocinética no lineal de Michaelis-Menten (saturable). Fármaco de referencia hospitalaria en la prevención y tratamiento de crisis convulsivas en neurocirugía y estatus epiléptico tras benzodiacepinas.',
    presentations: [
      { id: 'fenit-1', form: 'Cápsulas y comprimidos orales', concentration: '100 mg', route: 'Oral', packaging: 'Frasco x 50 y 100 comprimidos' },
      { id: 'fenit-2', form: 'Solución inyectable IV', concentration: '250 mg / 5 mL (50 mg/mL)', route: 'Intravenosa', packaging: 'Ampollas x 5 mL (Caja x 5)' },
      { id: 'fenit-3', form: 'Suspensión oral', concentration: '125 mg / 5 mL', route: 'Oral', packaging: 'Frasco x 120 mL' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea los canales de sodio voltaje-dependientes en su estado inactivo prolongando su período refractario. Limita la descarga repetitiva sostenida de potenciales de acción en los focos corticales epileptógenos sin alterar la excitabilidad basal cerebral normal.',
      molecularTarget: 'Canales de sodio dependientes de voltaje neuronales',
      pharmacokinetics: {
        bioavailability: 'Oral: 90% (absorción lenta en intestino); IV: 100%',
        halfLife: 'Variable (cinética no lineal saturable): 12 a 36 horas a niveles terapéuticos; a dosis altas se saturan las enzimas hepáticas y pequeños incrementos de dosis generan saltos masivos de concentración plasmática',
        metabolism: 'Hepático por CYP2C9 y CYP2C19 saturable a niveles terapéuticos',
        elimination: 'Excreción biliar y renal de metabolitos inactivos'
      }
    },
    therapeuticIndications: [
      'Estatus epiléptico convulsivo tras fracaso de benzodiacepinas iniciales',
      'Crisis focales y generalizadas tónico-clónicas',
      'Profilaxis de crisis epilépticas en neurocirugía y traumatismo craneoencefálico agudo grave',
      'Arritmias ventriculares inducidas por intoxicación digitálica (uso histórico)'
    ],
    posology: {
      adultStandard: 'Estatus epiléptico IV: Carga de 15 a 20 mg/kg diluida EXCLUSIVAMENTE en suero salino 0.9% en infusión lenta a velocidad MÁXIMA de 50 mg/min (riesgo de hipotensión severa y arritmias por propilenglicol). Mantenimiento oral/IV: 300 a 400 mg/día en 2 o 3 tomas. Nivel terapéutico plasmático: 10 a 20 mcg/mL.',
      pediatricDose: 'Carga IV en estatus pediátrico: 15 a 20 mg/kg a velocidad máxima de 1 a 3 mg/kg/min (no superar 50 mg/min). Mantenimiento: 5 a 8 mg/kg/día.',
      renalAdjustment: {
        normal: 'Dosis guiada por nivel libre sérico (rango libre 1-2 mcg/mL)',
        moderate: 'Menor unión proteica en uremia; ajustar interpretación de niveles totales',
        severe: 'Fórmula de corrección de Sheiner-Tozer para hipoalbuminemia y uremia'
      },
      hepaticAdjustment: 'Reducir dosis de mantenimiento un 25-50% en hepatopatía.',
      administrationNotes: 'IV: Diluir ÚNICAMENTE en Suero Fisiológico al 0.9% (NUNCA en dextrosa / glucosa porque PRECIPITA de inmediato formando cristales insolubles). Infundir con filtro intravenoso a velocidad ≤ 50 mg/min con monitor de ECG.'
    },
    safety: {
      blackBoxWarning: 'LA VELOCIDAD DE INFUSIÓN IV NO DEBE SUPERAR 50 MG/MIN EN ADULTOS. RIESGO GRAVE DE HIPOTENSIÓN SEVERA, ARRITMIAS VENTRICULARES FATALES Y ASISTOLIA POR EL DILUYENTE PROPILENGLICOL.',
      contraindications: [
        'Bradicardia sinusal severa, bloqueo sinoauricular o bloqueo AV de 2° y 3° grado',
        'Síndrome de Stokes-Adams',
        'Hipersensibilidad a hidantoínas'
      ],
      adverseEffects: {
        frequent: ['Nistagmo horizontal, ataxia y mareo (signo cardinal de toxicidad por niveles > 20 mcg/mL)', 'Hiperplasia gingival (crecimiento excesivo de encías)', 'Hirsutismo'],
        moderate: ['Sedación y confusión mental', 'Engrosamiento de rasgos faciales', 'Neuropatía periférica y osteomalacia por déficit de vitamina D'],
        severe: ['Arritmias cardíacas y paro cardíaco por infusión rápida', 'Síndrome del guantelete púrpura (isquemia distal y necrosis tras extravasación IV)', 'Síndrome de Stevens-Johnson / DRESS', 'Agranulocitosis']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO. Causa el Síndrome fetal por hidantoína (microcefalia, retraso psicomotor, hendidura orofacial e hipoplasia distal digital). Suplementar vitamina K1 al nacer.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Nivel sérico de fenitoína (rango terapéutico 10 a 20 mcg/mL)', 'ECG continuo y presión arterial durante la infusión IV', 'Higiene dental regular para frenar hiperplasia gingival']
    },
    interactions: [
      { id: 'fenit-int-1', interactsWith: 'Inductores e inhibidores de CYP2C9', severity: 'Mayor', clinicalEffect: 'Amiodarona, fluconazol o cloranfenicol inhiben su metabolismo duplicando sus niveles con ataxia y coma.', recommendation: 'Monitorear niveles séricos de fenitoína.' },
      { id: 'fenit-int-2', interactsWith: 'Anticoagulantes orales y Anticonceptivos', severity: 'Mayor', clinicalEffect: 'La fenitoína es un potente inductor de CYP3A4 acelerando la depuración de anticoagulantes y hormonas.', recommendation: 'Ajustar dosis de anticoagulante y usar método anticonceptivo de barrera.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C.',
    highAlertMedicine: true,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'etosuximida',
    genericName: "Etosuximida",
    commercialNames: ["Zarontin"],
    imageUrl: "https://www.farmatodo.com.ar/_next/image?url=https%3A%2F%2Fproducts-images.farmatodo.com.ar%2FLoCmQEhs_vcdAYYBtWViHAB3CXIi9a_40ptTBXxSyM8nRu3ICi3zjT_g8pUOBlxz&w=1200&q=85",
    imageAlt: "Etosuximida - Presentación farmacológica",
    atcCode: 'N03AD01',
    anatomicalSystem: '2.7 Anticonvulsivos',
    therapeuticClass: 'Antiepilépticos derivados de la succinimida / Bloqueantes de canales de calcio tipo T',
    description: 'Antiepiléptico de elección absoluta y estándar de oro para el tratamiento de las crisis de ausencia típicas (pequeño mal) en niños y adolescentes. Carece de eficacia sobre crisis generalizadas tónico-clónicas.',
    presentations: [
      { id: 'eto-1', form: 'Cápsulas blandas', concentration: '250 mg', route: 'Oral', packaging: 'Frasco x 50 y 100 cápsulas' },
      { id: 'eto-2', form: 'Jarabe oral', concentration: '250 mg / 5 mL', route: 'Oral', packaging: 'Frasco x 200 mL' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea selectivamente los canales de calcio de tipo T de bajo umbral en las neuronas del tálamo. Esto suprime las descargas rítmicas oscilatorias tálamo-corticales sincrónicas de 3 Hz en punta-onda características del electroencefalograma de las crisis de ausencia.',
      molecularTarget: 'Canales de calcio voltaje-dependientes de tipo T talámicos',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% de absorción completa',
        halfLife: 'Niños: 30 horas; Adultos: 50 a 60 horas',
        metabolism: 'Hepático por CYP3A4 a metabolitos hidroxilados inactivos',
        elimination: 'Excreción 20% renal inalterada y 80% como metabolitos conjugados'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea de las crisis de ausencia típicas infantiles (pequeño mal)'
    ],
    posology: {
      adultStandard: 'Inicial 500 mg/día en una o dos tomas con las comidas; titular cada 4-7 días en escalones de 250 mg hasta 1000 a 1500 mg/día (máx 2000 mg/día). Rango plasmático terapéutico: 40 a 100 mcg/mL.',
      pediatricDose: 'Niños de 3 a 6 años: Inicial 250 mg/día; niños > 6 años: 500 mg/día. Dosis de mantenimiento pediátrico habitual: 20 mg/kg/día.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Usar con precaución',
        severe: 'Reducir dosis en fallo renal avanzado'
      },
      hepaticAdjustment: 'Reducir dosis en hepatopatía.',
      administrationNotes: 'Tomar siempre con las comidas o leche para evitar intolerancia digestiva y dolor abdominal gástrico.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE DISCRAZIAS SANGUÍNEAS GRAVES (ANEMIA APLÁSICA, AGRANULOCITOSIS) Y SÍNDROME DE STEVENS-JOHNSON. NO TRATA CRISIS TÓNICO-CLÓNICAS.',
      contraindications: [
        'Hipersensibilidad a succinimidas',
        'Crisis epilépticas mixtas con componente tónico-clónico (puede requerir asociar valproato para evitar crisis generalizadas)'
      ],
      adverseEffects: {
        frequent: ['Dolor abdominal cólico, náuseas y vómitos', 'Anorexia y pérdida de peso', 'Somnolencia y cefalea'],
        moderate: ['Ataxia y mareo', 'Hipo pertinaz', 'Letargia o euforia'],
        severe: ['Agranulocitosis y anemia aplásica', 'Síndrome de Stevens-Johnson / Lupus eritematoso inducido por fármacos', 'Psicosis aguda']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADA en el embarazo salvo ausencia de alternativas terapéuticas (riesgo de malformaciones congénitas).',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Hemograma completo periódico (descartar leucopenia)', 'Función hepática y renal', 'Control de crisis en electroencefalograma']
    },
    interactions: [
      { id: 'eto-int-1', interactsWith: 'Ácido Valproico', severity: 'Moderada', clinicalEffect: 'El valproato puede inhibir el metabolismo de etosuximida elevando sus concentraciones plasmáticas.', recommendation: 'Monitorizar niveles séricos si se usan conjuntamente en ausencias refractarias.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido del calor y congelación.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'acido-valproico',
    genericName: "Ácido Valproico / Valproato de Sodio",
    commercialNames: ["Depakene", "Depakote"],
    imageUrl: "https://www.abbottienda.com/4540-large_default/depakene-250-mg-c60-caps.jpg",
    imageAlt: "Ácido Valproico / Valproato de Sodio - Presentación farmacológica",
    atcCode: 'N03AG01',
    anatomicalSystem: '2.7 Anticonvulsivos',
    therapeuticClass: 'Antiepilépticos de amplio espectro y estabilizadores del ánimo / Ácidos carboxílicos',
    description: 'Antiepiléptico de mayor espectro clínico en neurología. Eficaz en prácticamente todas las formas de crisis convulsivas (generalizadas, focales, mioclónicas, ausencias y atónicas), profilaxis de migraña y estabilización del trastorno bipolar.',
    presentations: [
      { id: 'vpa-1', form: 'Comprimidos gastrorresistentes y de liberación prolongada (Crono)', concentration: '200 mg, 300 mg, 500 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'vpa-2', form: 'Polvo para solución inyectable IV', concentration: '400 mg y 500 mg', route: 'Intravenosa', packaging: 'Vial + ampolla disolvente 4 mL' },
      { id: 'vpa-3', form: 'Solución oral en gotas y jarabe', concentration: '200 mg/mL (gotas) y 200 mg/5 mL (jarabe)', route: 'Oral', packaging: 'Frasco x 60 mL y 120 mL' }
    ],
    mechanismOfAction: {
      summary: 'Múltiples mecanismos sinérgicos: 1) Bloquea los canales de sodio voltaje-dependientes prolongando su recuperación; 2) Bloquea los canales de calcio de tipo T talámicos (eficacia en ausencias); 3) Potencia la neurotransmisión gabaérgica inhibiendo la GABA-transaminasa (enzima degradadora) y estimulando la síntesis de GABA mediante la ácido glutámico descarboxilasa (GAD).',
      molecularTarget: 'Canales de Na+, canales de Ca2+ tipo T e inhibición de GABA-transaminasa',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% rápida y completa',
        halfLife: '9 a 16 horas en adultos',
        metabolism: 'Hepático casi total por glucuronidación y beta-oxidación mitocondrial (es un potente inhibidor enzimático de CYP2C9 y glucuroniltransferasas)',
        elimination: 'Excreción renal (< 3% inalterado)'
      }
    },
    therapeuticIndications: [
      'Epilepsias generalizadas (tónico-clónicas, ausencias típicas y atípicas, crisis mioclónicas, síndrome de Janz, síndrome de West y Lennox-Gastaut)',
      'Crisis epilépticas focales',
      'Estatus epiléptico convulsivo (alternativa de primera línea IV a fenitoína)',
      'Episodios maníacos agudos y mantenimiento del Trastorno Bipolar',
      'Profilaxis de la migraña en adultos'
    ],
    posology: {
      adultStandard: 'Epilepsia / Bipolar oral: Inicial 10 a 15 mg/kg/día con alimentos; titular semanalmente hasta 20 a 30 mg/kg/día (dosis habitual 1000 a 2000 mg/día en 2 tomas). Estatus epiléptico IV: Carga de 20 a 40 mg/kg en infusión IV en 5 a 10 minutos (hasta 6 mg/kg/min), seguido de infusión de 1 a 2 mg/kg/hora. Rango terapéutico plasmático: 50 a 100 mcg/mL.',
      pediatricDose: 'Inicial 10 a 15 mg/kg/día; mantenimiento 20 a 40 mg/kg/día dividido en 2 tomas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Menor unión a proteínas plasmáticas; dosificar según clínica y nivel libre',
        severe: 'Reducir dosis por aumento de fracción libre activa'
      },
      hepaticAdjustment: 'CONTRAINDICADO formalmente en enfermedad hepática activa o disfunción mitocondrial.',
      administrationNotes: 'Ingerir los comprimidos enteros sin masticar durante las comidas. Prohibido formalmente su uso en mujeres en edad fértil salvo estricto plan de prevención de embarazo.'
    },
    safety: {
      blackBoxWarning: 'HEPATOTOXICIDAD GRAVE Y FATAL (MÁXIMO RIESGO EN MENORES DE 2 AÑOS Y TRASTORNOS MITOCONDRIALES POLG). PANCREATITIS AGUDA HEMORRÁGICA FULMINANTE. TERATOGENICIDAD SEVERA (ESPINA BÍFIDA Y DISMINUCIÓN DEL COEFICIENTE INTELECTUAL).',
      contraindications: [
        'Hepatopatía previa o activa grave y antecedentes familiares de disfunción hepática severa',
        'Trastornos mitocondriales causados por mutaciones en la ADN polimerasa gamma (POLG) o sospecha clínica',
        'Trastornos del ciclo de la urea conocidos (riesgo de hiperamonemia mortal y encefalopatía)',
        'Embarazo y mujeres en edad fértil sin anticoncepción eficaz obligatoria (Programa de Prevención de Embarazo)'
      ],
      adverseEffects: {
        frequent: ['Aumento de peso y apetito', 'Alopecia transitoria o adelgazamiento del cabello', 'Náuseas y dolor abdominal leve', 'Temblor postural fino de manos'],
        moderate: ['Trombocitopenia leve dosis-dependiente', 'Irregularidades menstruales y síndrome de ovario poliquístico', 'Hiperamonemia asintomática'],
        severe: ['Hepatitis tóxica aguda fulminante', 'Pancreatitis aguda necrotizante', 'Encefalopatía hiperamonémica (letargia, confusión e hipotermia sin daño hepático visible)', 'Teratogenicidad grave']
      },
      pregnancyCategory: 'X',
      pregnancyDescription: 'CONTRAINDICADO ABSOLUTO en el embarazo. Mayor teratógeno entre todos los antiepilépticos: 10% de malformaciones mayores (espina bífida, cardiopatías, labio leporino) y 30-40% de retraso en el desarrollo cognitivo / espectro autista.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Enzimas hepáticas (ALT/AST) y coagulación (INR, fibrinógeno) basales y periódicas', 'Hemograma y recuento plaquetario', 'Nivel de amonio en sangre ante letargia inexplicable', 'Nivel sérico de valproato (50 a 100 mcg/mL)']
    },
    interactions: [
      { id: 'vpa-int-1', interactsWith: 'Carbapenemes (Meropenem, Imipenem)', severity: 'Contraindicada', clinicalEffect: 'Los carbapenemes disminuyen las concentraciones plasmáticas de valproato en un 60-90% en 24 horas, desencadenando crisis epilépticas incontrolables.', recommendation: 'Evitar el uso conjunto; cambiar de antibiótico.' },
      { id: 'vpa-int-2', interactsWith: 'Lamotrigina', severity: 'Mayor', clinicalEffect: 'El valproato inhibe fuertemente la glucuronidación de lamotrigina, duplicando su semivida y disparando el riesgo de Síndrome de Stevens-Johnson.', recommendation: 'Reducir la dosis inicial de lamotrigina a más de la mitad.' }
    ],
    storageAndConservation: 'Conservar en envase cerrado por debajo de 30°C.',
    highAlertMedicine: true,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  }
];
