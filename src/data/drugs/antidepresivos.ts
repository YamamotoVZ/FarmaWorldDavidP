import { Medication } from '../../types/medication';

const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANTIDEPRESIVOS: Medication[] = [
  {
    id: 'fenelzina',
    genericName: "Fenelzina (IMAO no selectivo)",
    commercialNames: ["Nardil"],
    imageUrl: "https://www.tga.gov.au/sites/default/files/styles/full_lg/public/2025-09/nardil-phenelzine-sulfate-tablets-usp-15mg-bottle.png.webp?itok=hqHkkciC",
    imageAlt: "Fenelzina (IMAO no selectivo) - Presentación farmacológica",
    atcCode: 'N06AF03',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Inhibidores irreversibles y no selectivos de la Monoaminooxidasa (IMAO)',
    description: 'Antidepresivo clásico de la familia de las hidracinas, inhibidor irreversible y no selectivo de las isoenzimas MAO-A y MAO-B. Fármaco altamente eficaz en depresión atípica, fobia social refractaria y depresión resistente, pero sujeto a restricciones dietéticas estrictas (efecto tiramina / queso) e interacciones graves.',
    presentations: [
      { id: 'fenel-1', form: 'Comprimidos recubiertos', concentration: '15 mg', route: 'Oral', packaging: 'Frasco x 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe irreversiblemente tanto la monoaminooxidasa tipo A (degradadora preferente de serotonina y noradrenalina) como la tipo B (degradadora de dopamina y tiramina) en el SNC y tejidos periféricos. Provoca una acumulación masiva de neurotransmisores monoaminérgicos en las vesículas presinápticas, revirtiendo el déficit monoaminérgico de la depresión.',
      molecularTarget: 'Inhibición irreversible de Monoaminooxidasa A y B (MAO-A y MAO-B)',
      pharmacokinetics: {
        bioavailability: 'Oral: buena absorción',
        halfLife: 'Plasmática: 1.5 a 4 horas; sin embargo, su efecto biológico persiste por 2 a 3 semanas hasta la síntesis de nuevas enzimas MAO',
        metabolism: 'Hepático por acetilación (riesgo mayor de toxicidad en acetiladores lentos) y oxidación',
        elimination: 'Excreción renal como metabolitos'
      }
    },
    therapeuticIndications: [
      'Depresión mayor atípica (con hiperfagia, hipersomnia, parálisis de plomo y reactividad del estado de ánimo)',
      'Depresión resistente al tratamiento refractaria a ISRS y tricíclicos',
      'Trastorno de pánico y fobia social grave resistente'
    ],
    posology: {
      adultStandard: 'Inicial: 15 mg tres veces al día (45 mg/día). Puede incrementarse hasta 60 a 90 mg/día en dosis divididas. Una vez alcanzada la respuesta clínica, reducir paulatinamente a dosis de mantenimiento de 15 mg/día o en días alternos.',
      pediatricDose: 'CONTRAINDICADA en menores de 18 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Usar con precaución',
        severe: 'Contraindicada en insuficiencia renal grave'
      },
      hepaticAdjustment: 'CONTRAINDICADA en enfermedad o insuficiencia hepática.',
      administrationNotes: 'DIETA ESTRICTA LIBRE DE TIRAMINA (prohibido consumir quesos madurados, embutidos fermentados, vino tinto, cerveza tirada, habas, extractos de levadura y salsa de soja) durante el tratamiento y hasta 14 días después de suspenderlo.'
    },
    safety: {
      blackBoxWarning: 'CRISIS HIPERTENSIVA POTENCIALMENTE MORTAL ("EFECTO QUESO / TIRAMINA") CON RIESGO DE HEMORRAGIA CEREBRAL Y PARO CARDÍACO. RIESGO MORTAL DE SÍNDROME SEROTONINÉRGICO AL ASOCIAR CON ISRS O PETIDINA.',
      contraindications: [
        'Ingesta de alimentos o bebidas ricas en tiramina',
        'Uso simultáneo con ISRS, IRSN, tricíclicos, petidina (meperidina), tramadol, dextrometorfano o simpaticomiméticos',
        'Feocromocitoma o hipertensión arterial no controlada',
        'Enfermedad cerebrovascular o cardiopatía coronaria grave',
        'Insuficiencia hepática grave'
      ],
      adverseEffects: {
        frequent: ['Hipotensión ortostática marcada', 'Mareo y sequedad de boca', 'Aumento de peso e insomnio'],
        moderate: ['Edema en extremidades inferiores', 'Constipación', 'Disfunción sexual (anorgasmia)'],
        severe: ['Crisis hipertensiva maligna (cefalea occipital pulsátil, fotofobia, hemorragia subaracnoidea)', 'Síndrome serotoninérgico', 'Hepatotoxicidad']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Evitar en el embarazo.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Presión arterial en decúbito y bipedestación', 'Adherencia rigurosa a las restricciones dietéticas de tiramina', 'Función hepática']
    },
    interactions: [
      { id: 'fenel-int-1', interactsWith: 'ISRS (Fluoxetina, Sertralina), Venlafaxina, Clomipramina', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico fulminante con hipertermia maligna, rigidez, convulsiones y muerte.', recommendation: 'Respetar período de lavado de al menos 14 días (y 5 semanas tras fluoxetina).' },
      { id: 'fenel-int-2', interactsWith: 'Alimentos con Tiramina y Descongestionantes nasales (Pseudoefedrina)', severity: 'Contraindicada', clinicalEffect: 'Liberación masiva de noradrenalina con crisis hipertensiva mortal.', recommendation: 'Prohibición dietética absoluta.' }
    ],
    storageAndConservation: 'Conservar entre 15°C y 30°C en recipiente hermético.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'imipramina',
    genericName: "Imipramina Clorhidrato",
    commercialNames: ["Tofranil", "Talpramin"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501384503215_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Imipramina Clorhidrato - Presentación farmacológica",
    atcCode: 'N06AA02',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Antidepresivos tricíclicos (ADT) / Dibenzazepinas',
    description: 'Prototipo de los antidepresivos tricíclicos descubierto por Kuhn en 1957. Potente inhibidor de la recaptura de noradrenalina y serotonina con destacada eficacia en depresión mayor melancólica y enuresis nocturna infantil.',
    presentations: [
      { id: 'imi-1', form: 'Comprimidos recubiertos', concentration: '10 mg, 25 mg, 50 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la recaptura presináptica de noradrenalina (vía NET) y serotonina (vía SERT) aumentando su disponibilidad en la hendidura sináptica. Presenta antagonismo sobre receptores muscarínicos colinérgicos (M1), histaminérgicos (H1), adrenérgicos alfa-1 y canales de sodio miocárdicos cardíacos rápidos (explicando su cardiotoxicidad en sobredosis).',
      molecularTarget: 'Transportadores de recaptura NET y SERT; antagonismo M1, H1, Alfa-1 y canales Na+',
      pharmacokinetics: {
        bioavailability: 'Oral: 30-50% (primer paso hepático significativo)',
        halfLife: '11 a 25 horas',
        metabolism: 'Hepático por CYP2D6 a desipramina (metabolito activo con potente acción noradrenérgica)',
        elimination: 'Excreción 80% renal'
      }
    },
    therapeuticIndications: [
      'Depresión mayor grave (con o sin melancolía)',
      'Trastorno de angustia / ataques de pánico',
      'Enuresis nocturna en niños mayores de 6 años (tras descartar patología urológica orgánica)',
      'Dolor neuropático crónico'
    ],
    posology: {
      adultStandard: 'Depresión: Inicial 25 mg dos o tres veces al día; aumentar gradualmente hasta 150 a 200 mg/día (máx 300 mg/día en pacientes hospitalizados). Dosis de mantenimiento: 50 a 100 mg/día al acostarse.',
      pediatricDose: 'Enuresis nocturna (niños > 6 años): 10 a 25 mg una hora antes de acostarse; si no responde, 25 a 50 mg (no superar 2.5 mg/kg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste específico',
        severe: 'Reducir dosis por menor aclaramiento'
      },
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática.',
      administrationNotes: 'Administrar preferentemente al acostarse para aprovechar su efecto sedante y mitigar los efectos anticolinérgicos diurnos.'
    },
    safety: {
      blackBoxWarning: 'CARDIOTOXICIDAD GRAVE Y LETAL EN SOBREDOSIS (ARRITMIAS VENTRICULARES, PROLONGACIÓN DEL QRS Y PARO CARDÍACO). AUMENTO DEL RIESGO DE IDEACIÓN SUICIDA EN JÓVENES AL INICIO.',
      contraindications: [
        'Infarto agudo de miocardio reciente y cardiopatía con arritmias o bloqueo cardíaco de rama',
        'Uso simultáneo con IMAO o en los 14 días posteriores',
        'Glaucoma de ángulo cerrado',
        'Hiperplasia prostática con retención urinaria aguda',
        'Insuficiencia hepática grave'
      ],
      adverseEffects: {
        frequent: ['Sequedad bucal y visión borrosa', 'Estreñimiento pertinaz', 'Sedación diurna y aumento de peso', 'Taquicardia sinusal'],
        moderate: ['Hipotensión ortostática y mareos', 'Retención urinaria', 'Temblor fino de manos', 'Disfunción eréctil'],
        severe: ['Arritmias ventriculares graves, ensanchamiento del complejo QRS (> 100-120 ms) y fibrilación ventricular en sobredosis', 'Convulsiones', 'Íleo paralítico']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO durante el embarazo por riesgo de defectos cardiovasculares y síndrome de abstinencia/toxicidad neonatal.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Electrocardiograma (ECG) basal para descartar anomalías de conducción o QT largo', 'Presión arterial y frecuencia cardíaca', 'Síntomas urinarios']
    },
    interactions: [
      { id: 'imi-int-1', interactsWith: 'IMAO no selectivos', severity: 'Contraindicada', clinicalEffect: 'Hiperpirexia maligna, convulsiones, coma y muerte.', recommendation: 'Respetar 14 días de intervalo.' },
      { id: 'imi-int-2', interactsWith: 'Antiarrítmicos (Amiodarona, Quinidina) y Fármacos que alargan el QT', severity: 'Mayor', clinicalEffect: 'Potenciación de cardiotoxicidad y arritmias ventriculares letales.', recommendation: 'Evitar la asociación.' }
    ],
    storageAndConservation: 'Conservar por debajo de 30°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'amitriptilina',
    genericName: "Amitriptilina",
    commercialNames: ["Tryptizol", "Anapsique"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501384503123_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Amitriptilina - Presentación farmacológica",
    atcCode: 'N06AA09',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Antidepresivos tricíclicos (ADT) con potente efecto sedante y analgésico',
    description: 'Antidepresivo tricíclico dibenzociclohepténico de referencia para el tratamiento del dolor neuropático periférico y central, profilaxis de la migraña e insomnio crónico resistente, además de la depresión mayor.',
    presentations: [
      { id: 'ami-1', form: 'Comprimidos recubiertos', concentration: '10 mg, 25 mg, 50 mg, 75 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'ami-2', form: 'Solución inyectable IM/IV', concentration: '25 mg / 2 mL', route: 'Intramuscular', packaging: 'Ampollas x 2 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe equilibradamente la recaptura presináptica de serotonina (SERT) y noradrenalina (NET). Su marcado efecto sobre el dolor crónico deriva del refuerzo de las vías inhibitorias descendentes del dolor en el asta dorsal de la médula espinal. Posee potente afinidad bloqueante H1 (fuerte sedación), M1 (anticolinérgico) y alfa-1 adrenérgico.',
      molecularTarget: 'Inhibición de SERT y NET; bloqueo de H1, M1, Alfa-1 y canales de Na+ y Ca2+',
      pharmacokinetics: {
        bioavailability: 'Oral: 30-60%',
        halfLife: '15 a 30 horas',
        metabolism: 'Hepático por CYP2D6 y CYP2C19 a nortriptilina activa',
        elimination: 'Excreción renal'
      }
    },
    therapeuticIndications: [
      'Dolor neuropático periférico (neuropatía diabética dolorosa, neuralgia postherpética)',
      'Profilaxis de la migraña y cefalea tensional crónica resistente',
      'Fibromialgia y síndrome de dolor miofascial crónico',
      'Depresión mayor (especialmente con insomnio o ansiedad severa concomitante)'
    ],
    posology: {
      adultStandard: 'Dolor neuropático / Profilaxis de migraña / Insomnio: Iniciar con 10 mg a 25 mg en dosis única nocturna antes de dormir; titular cada 1-2 semanas según tolerancia hasta 50 a 75 mg/noche (máx 150 mg/día en dolor). Depresión mayor: 75 a 150 mg/día (máx 200 mg/día ambulatorio).',
      pediatricDose: 'No recomendada en < 12 años salvo protocolos de enuresis o dolor neuropático (0.2 a 0.5 mg/kg nocturnos).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Reducir dosis por acumulación'
      },
      hepaticAdjustment: 'Iniciar a dosis mínimas (10 mg/día) y titular con precaución.',
      administrationNotes: 'Tomar la dosis diaria única siempre por la noche antes de dormir para minimizar la sedación diurna.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE CARDIOTOXICIDAD MORTAL EN SOBREDOSIS (ARRITMIAS VENTRICULARES Y PROLONGACIÓN DEL INTERVALO QTc / QRS). RIESGO DE IDEACIÓN SUICIDA.',
      contraindications: [
        'Infarto de miocardio reciente, arritmias ventriculares o bloqueo auriculoventricular',
        'Uso simultáneo con IMAO',
        'Glaucoma de ángulo estrecho no intervenido',
        'Retención urinaria e hipertrofia prostática sintomática grave',
        'Insuficiencia hepática grave'
      ],
      adverseEffects: {
        frequent: ['Sequedad bucal intensa (xerostomía)', 'Sedación profunda y somnolencia matinal', 'Estreñimiento', 'Aumento de peso'],
        moderate: ['Visión borrosa y midriasis', 'Hipotensión ortostática', 'Taquicardia sinusal', 'Temblor'],
        severe: ['Torsades de Pointes y arritmias ventriculares letales', 'Retención urinaria aguda', 'Convulsiones', 'Confusión y delirio anticolinérgico en ancianos']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Evitar su uso durante el embarazo (Categoría D si se usa en dosis altas en el 3er trimestre por síndrome de abstinencia y taquicardia neonatal).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['ECG basal en pacientes > 40 años o con antecedentes cardiovasculares', 'Presión arterial', 'Salud dental (xerostomía crónica aumenta caries)']
    },
    interactions: [
      { id: 'ami-int-1', interactsWith: 'IMAO (Fenelzina, Selegilina)', severity: 'Contraindicada', clinicalEffect: 'Crisis hiperpirética, crisis convulsivas y muerte.', recommendation: 'Dejar intervalo de 14 días.' },
      { id: 'ami-int-2', interactsWith: 'Fármacos que prolongan el QTc y Antiarrítmicos', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de arritmias ventriculares fatales.', recommendation: 'Monitoreo estricto de ECG.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C en lugar seco.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'venlafaxina',
    genericName: "Venlafaxina",
    commercialNames: ["Efexor XR", "Vivelax"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/8/4/840149675499_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Venlafaxina - Presentación farmacológica",
    atcCode: 'N06AX16',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Inhibidores de la recaptación de serotonina y noradrenalina (IRSN / Heterocíclicos)',
    description: 'Antidepresivo heterocíclico bicíclico dual. A dosis bajas (< 150 mg/día) inhibe selectivamente la recaptura de serotonina; a dosis intermedias y altas (> 150 mg/día) inhibe potentemente la recaptura de noradrenalina, aportando una alta eficacia en depresión melancólica grave y dolor neuropático.',
    presentations: [
      { id: 'ven-1', form: 'Cápsulas duras de liberación prolongada (Retard)', concentration: '37.5 mg, 75 mg, 150 mg, 225 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas' },
      { id: 'ven-2', form: 'Comprimidos de liberación inmediata', concentration: '37.5 mg y 75 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe potentemente el transportador de serotonina (SERT) y, de forma dependiente de la dosis, el transportador de noradrenalina (NET). Carece prácticamente de afinidad sobre receptores colinérgicos muscarínicos, histaminérgicos H1 y adrenérgicos alfa-1, evitando los efectos adversos clásicos de los tricíclicos.',
      molecularTarget: 'Inhibición dual de SERT y NET (dependiente de dosis)',
      pharmacokinetics: {
        bioavailability: 'Oral: casi completa (absorción rápida); primer paso hepático significativo',
        halfLife: 'Venlafaxina: 5 horas; O-desmetilvenlafaxina (ODV, metabolito activo potente): 11 horas',
        metabolism: 'Hepático por CYP2D6 a O-desmetilvenlafaxina activa',
        elimination: 'Excreción 85% renal'
      }
    },
    therapeuticIndications: [
      'Episodios de depresión mayor (incluyendo depresión grave con melancolía)',
      'Trastorno de ansiedad generalizada (TAG) y fobia social',
      'Trastorno de pánico con o sin agorafobia',
      'Dolor neuropático periférico diabético (off-label)',
      'Profilaxis de sofocos vasomotores en la menopausia o cáncer de mama'
    ],
    posology: {
      adultStandard: 'Depresión / Ansiedad (formas de liberación prolongada): Iniciar con 75 mg una vez al día con alimentos por la mañana; si no hay respuesta en 2-4 semanas, escalar a 150 mg/día y hasta 225 mg/día (máx 375 mg/día en pacientes hospitalizados con depresión severa).',
      pediatricDose: 'CONTRAINDICADA en menores de 18 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: Reducir dosis total diaria en un 25-50%',
        severe: 'ClCr < 30 mL/min o hemodiálisis: Reducir dosis un 50%'
      },
      hepaticAdjustment: 'Reducir la dosis diaria en un 50% en insuficiencia hepática moderada.',
      administrationNotes: 'Ingerir las cápsulas enteras con el desayuno. NUNCA suspender bruscamente por riesgo de síndrome de discontinuación intenso (mareo, sensación de choque eléctrico "zaps", náuseas, ansiedad extrema).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HIPERTENSIÓN ARTERIAL DOSIS-DEPENDIENTE Y AUMENTO DE IDEACIÓN SUICIDA EN ADULTOS JÓVENES AL INICIO DEL TRATAMIENTO. SÍNDROME DE RETIRADA GRAVE.',
      contraindications: [
        'Uso simultáneo con IMAO o dentro de los 14 días posteriores al cese de un IMAO',
        'Hipertensión arterial grave no controlada',
        'Cardiopatía isquémica descompensada o arritmias ventriculares'
      ],
      adverseEffects: {
        frequent: ['Náuseas (muy frecuentes al inicio, mejoran tras 1-2 semanas)', 'Sudoración profusa (diaforesis)', 'Insomnio y mareos', 'Xerostomía'],
        moderate: ['Aumento de la presión arterial sistólica y diastólica', 'Disfunción sexual (retraso eyaculatorio, anorgasmia)', 'Pérdida de peso inicial'],
        severe: ['Crisis hipertensiva a dosis altas', 'Síndrome serotoninérgico', 'Hiponatremia por SIADH en ancianos', 'Síndrome de discontinuación intenso']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usar con precaución. Puede provocar hipertensión pulmonar persistente del recién nacido o síndrome de mala adaptación neonatal.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Presión arterial regular (especialmente con dosis ≥ 150 mg/día)', 'Frecuencia cardíaca', 'Sodio sérico en ancianos']
    },
    interactions: [
      { id: 'ven-int-1', interactsWith: 'IMAO (Fenelzina, Linezolid, Azul de metileno)', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico letal.', recommendation: 'Intervalo mínimo de lavado de 14 días.' },
      { id: 'ven-int-2', interactsWith: 'AINEs y Anticoagulantes', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de sangrado digestivo por depleción de serotonina plaquetaria.', recommendation: 'Vigilar sangrado y considerar gastroprotección.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C en lugar seco.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'amoxapina',
    genericName: "Amoxapina",
    commercialNames: ["Asendin", "Demolox"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tL2uC9FYEhLopHpUwfQycNYJ9bj0wc0fhn3VuHlipPKthXz2iuDxMAc&s=10",
    imageAlt: "Amoxapina - Presentación farmacológica",
    atcCode: 'N06AA17',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Antidepresivos heterocíclicos tetracíclicos / Dibenzoxazepinas',
    description: 'Antidepresivo heterocíclico tetracíclico derivado de la dibenzoxazepina, análogo estructural del antipsicótico loxapina. Combina la inhibición de la recaptura de noradrenalina con un antagonismo de receptores dopaminérgicos D2, siendo útil en depresión con rasgos psicóticos.',
    presentations: [
      { id: 'amox-1', form: 'Comprimidos orales', concentration: '25 mg, 50 mg, 100 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la recaptura presináptica de noradrenalina y serotonina. A diferencia de otros antidepresivos, su metabolito principal (7-hidroxiamoxapina) ejerce un bloqueo significativo sobre los receptores dopaminérgicos D2 mesolímbicos y nigroestriados, otorgándole propiedades antipsicóticas pero también riesgo de efectos extrapiramidales y discinesia tardía.',
      molecularTarget: 'Inhibición de NET/SERT y bloqueo de receptores Dopaminérgicos D2',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% de absorción rápida',
        halfLife: 'Amoxapina: 8 horas; Metabolito 8-hidroxiamoxapina: 30 horas',
        metabolism: 'Hepático extenso a 7-hidroxiamoxapina (bloqueante D2) y 8-hidroxiamoxapina',
        elimination: 'Excreción renal'
      }
    },
    therapeuticIndications: [
      'Depresión mayor con síntomas psicóticos o agitación psicomotriz',
      'Depresión endógena y reactiva grave'
    ],
    posology: {
      adultStandard: 'Inicial: 50 mg dos o tres veces al día (100 a 150 mg/día); puede incrementarse hasta 300 mg/día (máx 400 mg/día en hospitalizados). Ancianos: 25 a 50 mg/día.',
      pediatricDose: 'CONTRAINDICADA en menores de 16 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Usar con precaución',
        severe: 'Reducir dosis'
      },
      hepaticAdjustment: 'Reducir dosis por metabolismo hepático.',
      administrationNotes: 'Vigilar estrechamente la aparición de signos extrapiramidales o discinesias orofaciales involuntarias.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE EFECTOS EXTRAPIRAMIDALES, SÍNDROME NEUROLÉPTICO MALIGNO Y DISCINESIA TARDÍA IRREVERSIBLE DEBIDO A SU BLOQUEO DE RECEPTORES D2.',
      contraindications: [
        'Uso simultáneo con IMAO',
        'Fase aguda de infarto agudo de miocardio',
        'Glaucoma de ángulo cerrado o hipertrofia prostática grave'
      ],
      adverseEffects: {
        frequent: ['Somnolencia y mareos', 'Efectos anticolinérgicos (sequedad bucal, constipación)'],
        moderate: ['Síntomas extrapiramidales (parkinsonismo, acatisia, temblor)', 'Hiperprolactinemia y galactorrea', 'Hipotensión ortostática'],
        severe: ['Discinesia tardía irreversible', 'Síndrome neuroléptico maligno (rigidez, hipertermia, rabdomiólisis)', 'Crisis convulsivas en sobredosis']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Evitar en el embarazo.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Examen neurológico para detectar movimientos anormales o temblores', 'Presión arterial', 'Prolactina sérica si hay galactorrea']
    },
    interactions: [
      { id: 'amox-int-1', interactsWith: 'Antipsicóticos y Fármacos dopaminérgicos', severity: 'Mayor', clinicalEffect: 'Potenciación de síntomas extrapiramidales y riesgo de síndrome neuroléptico.', recommendation: 'Evitar duplicación de bloqueantes dopaminérgicos.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'trazodona',
    genericName: "Trazodona",
    commercialNames: ["Deprax", "Sideril"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCnXicKwVge5-03uQsjhL7OpZoj6I89G5xiQrapojEY6sSihchZ7BI_8&s=10",
    imageAlt: "Trazodona - Presentación farmacológica",
    atcCode: 'N06AX05',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Antidepresivos heterocíclicos / Antagonistas e inhibidores de la recaptación de serotonina (SARI)',
    description: 'Antidepresivo heterocíclico triazolopiridínico con potente acción sedante y favorecedora del sueño profundo no REM. Ampliamente empleado a dosis bajas (25-100 mg) como inductor del sueño en insomnio crónico y depresión con agitación.',
    presentations: [
      { id: 'tra-1', form: 'Comprimidos divisibles', concentration: '50 mg, 100 mg, 150 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'tra-2', form: 'Comprimidos de liberación prolongada (Contramid)', concentration: '150 mg y 300 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Antagonista potente de receptores serotoninérgicos 5-HT2A y 5-HT2C e inhibidor moderado de la recaptura de serotonina (SARI). Su potente antagonismo sobre receptores histaminérgicos H1 y adrenérgicos alfa-1 explica su pronunciado efecto hipnótico, ansiolítico y la ausencia de disfunción sexual clásica de los ISRS.',
      molecularTarget: 'Antagonismo de 5-HT2A e inhibición débil de SERT; bloqueo H1 y Alfa-1',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100%; absorción óptima con alimentos',
        halfLife: 'Bifásica: 5 a 9 horas',
        metabolism: 'Hepático extenso por CYP3A4 a m-clorofenilpiperazina (mCPP, activa)',
        elimination: 'Excreción 75% renal'
      }
    },
    therapeuticIndications: [
      'Depresión mayor acompañada de insomnio grave o ansiedad psicomotriz',
      'Insomnio crónico resistente en pacientes adultos y ancianos (a dosis bajas de 25-100 mg)',
      'Disfunción eréctil inducida por otros antidepresivos (off-label)',
      'Agitación y trastornos del sueño en demencia y dolor crónico'
    ],
    posology: {
      adultStandard: 'Insomnio crónico: 25 a 100 mg en toma única 30-60 minutos antes de acostarse. Depresión mayor: Inicial 100 a 150 mg/día en tomas fraccionadas o toma única nocturna; incrementar hasta 300 mg/día (máx 400 mg/día en ambulatorio, 600 mg/día hospitalizados).',
      pediatricDose: 'CONTRAINDICADA en menores de 18 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Usar con precaución'
      },
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática.',
      administrationNotes: 'Tomar después de una comida ligera o snack al acostarse para retrasar el pico plasmático y reducir hipotensión o mareo.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PRIAPISMO GRAVE (ERECCIÓN DOLOROSA PROLONGADA > 4 HORAS) QUE REQUIERE INTERVENCIÓN UROLÓGICA URGENTE PARA PREVENIR IMPOTENCIA PERMANENTE.',
      contraindications: [
        'Hipersensibilidad a trazodona',
        'Fase de recuperación aguda de infarto de miocardio',
        'Intoxicación alcohólica o con hipnóticos'
      ],
      adverseEffects: {
        frequent: ['Sedación y somnolencia al despertar', 'Sequedad bucal y mareo', 'Hipotensión ortostática'],
        moderate: ['Cefalea', 'Náuseas y sabor amargo', 'Congestión nasal'],
        severe: ['Priapismo (urgencia médica urológica)', 'Arritmias cardíacas (prolongación del QTc)', 'Síncope ortostático', 'Síndrome serotoninérgico']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Evitar durante el embarazo salvo estricta necesidad.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Advertir al paciente masculino sobre acudir a urgencias de inmediato si presenta erección > 2-3 horas', 'Presión arterial ortostática']
    },
    interactions: [
      { id: 'tra-int-1', interactsWith: 'Inhibidores potentes de CYP3A4 (Ketoconazol, Ritonavir, Eritromicina)', severity: 'Mayor', clinicalEffect: 'Aumentan las concentraciones plasmáticas de trazodona incrementando sedación e hipotensión.', recommendation: 'Reducir dosis de trazodona.' },
      { id: 'tra-int-2', interactsWith: 'Antihipertensivos', severity: 'Moderada', clinicalEffect: 'Potenciación de hipotensión postural.', recommendation: 'Control tensional.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'fluoxetina',
    genericName: "Fluoxetina",
    commercialNames: ["Prozac", "Adofen"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501082212006.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Fluoxetina - Presentación farmacológica",
    atcCode: 'N06AB03',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Inhibidores selectivos de la recaptación de serotonina (ISRS)',
    description: 'Prototipo de los inhibidores selectivos de la recaptación de serotonina (ISRS). De perfil activador/energizante y semivida extremadamente larga (con metabolito activo norfluoxetina de hasta 7-15 días de vida media), previene síntomas de retirada por olvidos de dosis.',
    presentations: [
      { id: 'flx-1', form: 'Cápsulas duras y comprimidos dispersables', concentration: '20 mg', route: 'Oral', packaging: 'Caja x 14, 28 y 60 cápsulas' },
      { id: 'flx-2', form: 'Solución oral', concentration: '20 mg / 5 mL', route: 'Oral', packaging: 'Frasco x 70 mL y 140 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibidor potente y altamente selectivo del transportador de serotonina presináptico (SERT), bloqueando la recaptura neuronal y aumentando la concentración de 5-HT en el espacio sináptico. Posee un débil antagonismo sobre receptores 5-HT2C que favorece la liberación de dopamina y noradrenalina cortical, explicando su perfil clínico vigorizante/activador.',
      molecularTarget: 'Transportador presináptico de serotonina (SERT) y antagonismo 5-HT2C',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% de absorción',
        halfLife: 'Fluoxetina: 2 a 4 días; Norfluoxetina (metabolito activo): 7 a 15 días (eliminación muy lenta)',
        metabolism: 'Hepático por CYP2D6 a norfluoxetina; es un potente inhibidor de CYP2D6',
        elimination: 'Excreción renal de metabolitos conjugados'
      }
    },
    therapeuticIndications: [
      'Episodios de depresión mayor en adultos y niños ≥ 8 años',
      'Trastorno obsesivo-compulsivo (TOC)',
      'Bulimia nerviosa (como complemento a psicoterapia para reducir atracones y purgas)',
      'Trastorno disfórico premenstrual (TDPM)'
    ],
    posology: {
      adultStandard: 'Depresión / Ansiedad: Inicial 20 mg/día en toma única matinal con el desayuno; puede incrementarse tras 3-4 semanas hasta 40 mg o 60 mg/día (máx 80 mg/día). Bulimia: 60 mg/día en toma matinal.',
      pediatricDose: 'Depresión en niños ≥ 8 años: Inicial 10 mg/día; titular a 20 mg/día tras 2 semanas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Considerar espaciar a días alternos por acumulación de norfluoxetina'
      },
      hepaticAdjustment: 'Reducir dosis o administrar en días alternos en cirrosis hepática.',
      administrationNotes: 'Tomar por la mañana para evitar insomnio nocturno. Para cambiar a un IMAO se requiere un lavado estricto de CINCO SEMANAS debido a la prolongada vida media de norfluoxetina.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE INCREMENTO DE IDEACIÓN Y CONDUCTAS SUICIDAS EN NIÑOS, ADOLESCENTES Y ADULTOS JÓVENES (< 24 AÑOS) DURANTE LAS PRIMERAS SEMANAS DE TRATAMIENTO.',
      contraindications: [
        'Uso simultáneo con IMAO (esperar 5 semanas tras suspender fluoxetina antes de iniciar un IMAO)',
        'Uso simultáneo con Metoprolol en insuficiencia cardíaca (por inhibición masiva de CYP2D6)',
        'Uso concomitante con Pimozida'
      ],
      adverseEffects: {
        frequent: ['Náuseas y diarrea al inicio', 'Insomnio y nerviosismo / inquietud motora', 'Cefalea y anorexia'],
        moderate: ['Disfunción sexual (disminución de la libido, anorgasmia)', 'Temblor fino', 'Pérdida de peso inicial'],
        severe: ['Síndrome serotoninérgico', 'Hiponatremia por SIADH en ancianos', 'Hemorragia digestiva por disfunción plaquetaria', 'Acatisia']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usar con precaución. Puede asociarse a hipertensión pulmonar persistente neonatal si se usa en el tercer trimestre.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Ideación suicida y cambios conductuales al inicio', 'Peso corporal', 'Sodio sérico en ancianos']
    },
    interactions: [
      { id: 'flx-int-1', interactsWith: 'IMAO no selectivos', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico mortal.', recommendation: 'Respetar 5 semanas de lavado tras fluoxetina.' },
      { id: 'flx-int-2', interactsWith: 'Fármacos metabolizados por CYP2D6 (Metoprolol, Tamoxifeno, Tricíclicos, Codeína)', severity: 'Mayor', clinicalEffect: 'Inhibición potente de CYP2D6 con toxicidad por metoprolol/tricíclicos o ineficacia del tamoxifeno.', recommendation: 'Evitar la asociación.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'sertralina',
    genericName: "Sertralina",
    commercialNames: ["Zoloft", "Aremis", "Altruline"],
    imageUrl: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Ecuador/DEF/SIDEF/400x400/ecu_aspen_zoloft_tabsrecu_fam.png",
    imageAlt: "Sertralina - Presentación farmacológica",
    atcCode: 'N06AB06',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Inhibidores selectivos de la recaptación de serotonina (ISRS)',
    description: 'ISRS de amplio espectro, excelente tolerancia clínica y mínimo riesgo de interacciones farmacológicas sobre el citocromo P450. Antidepresivo de primera línea de elección en ancianos, pacientes cardiópatas y trastornos de ansiedad.',
    presentations: [
      { id: 'ser-1', form: 'Comprimidos recubiertos ranurados', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'ser-2', form: 'Solución concentrada oral', concentration: '20 mg/mL', route: 'Oral', packaging: 'Frasco x 60 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibidor muy potente y altamente específico de la recaptura de serotonina presináptica (SERT). Posee una leve capacidad inhibidora del transportador de dopamina (DAT), lo que contribuye a mejorar la motivación, la energía y la cognición sin generar sedación ni efectos anticolinérgicos.',
      molecularTarget: 'Transportador presináptico de serotonina (SERT) e inhibición débil de DAT',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% (los alimentos incrementan un 25% la absorción)',
        halfLife: '26 horas (metabolito desmetilsertralina de muy baja actividad con semivida de 60-100h)',
        metabolism: 'Hepático extenso por múltiples citocromos (CYP3A4, CYP2C19, CYP2B6)',
        elimination: 'Excreción equilibrada 50% renal y 50% fecal'
      }
    },
    therapeuticIndications: [
      'Episodios de depresión mayor y prevención de recaídas',
      'Trastorno de angustia (ataques de pánico) con o sin agorafobia',
      'Trastorno obsesivo-compulsivo (TOC) en adultos y niños ≥ 6 años',
      'Fobia social / Trastorno de ansiedad social',
      'Trastorno por estrés postraumático (TEPT)'
    ],
    posology: {
      adultStandard: 'Depresión / TOC: Inicial 50 mg/día en toma única matinal o nocturna; si es necesario, incrementar en escalones de 50 mg cada 1-2 semanas hasta un máximo de 200 mg/día. Trastorno de pánico / TEPT: Iniciar con 25 mg/día por una semana y luego subir a 50 mg/día.',
      pediatricDose: 'TOC pediátrico: 6 a 12 años: Inicial 25 mg/día; 13 a 17 años: 50 mg/día (máx 200 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste (eliminación metabólica balanceada)'
      },
      hepaticAdjustment: 'Reducir dosis o espaciar intervalos en insuficiencia hepática leve a moderada.',
      administrationNotes: 'Tomar preferentemente con comida para reducir molestias gastrointestinales matinales.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE CONDUCTA E IDEACIÓN SUICIDA EN PACIENTES JÓVENES (< 24 AÑOS) EN LAS PRIMERAS SEMANAS DE TRATAMIENTO O TRAS CAMBIOS DE DOSIS.',
      contraindications: [
        'Uso simultáneo con IMAO o en los 14 días posteriores a su suspensión',
        'Uso simultáneo con Pimozida',
        'Hipersensibilidad a sertralina'
      ],
      adverseEffects: {
        frequent: ['Diarrea y náuseas transitorias (más frecuente que otros ISRS)', 'Insomnio o somnolencia', 'Cefalea y mareo'],
        moderate: ['Disfunción sexual (retardo de eyaculación o anorgasmia)', 'Sudoración', 'Temblor leve'],
        severe: ['Síndrome serotoninérgico', 'Hemorragia digestiva alta (mayor riesgo con AINEs)', 'Hiponatremia por SIADH en ancianos']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Uno de los antidepresivos de elección en el embarazo y el de primerísima elección en la lactancia materna (niveles indetectables en leche materna).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Evolución del estado anímico e ideación suicida', 'Signos de sangrado gastrointestinal si toma AINEs']
    },
    interactions: [
      { id: 'ser-int-1', interactsWith: 'IMAO no selectivos', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico grave y letal.', recommendation: 'Dejar 14 días de período de lavado.' },
      { id: 'ser-int-2', interactsWith: 'AINEs y Anticoagulantes orales', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de sangrado gastrointestinal.', recommendation: 'Usar con gastroprotector.' }
    ],
    storageAndConservation: 'Conservar por debajo de 30°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'litio',
    genericName: "Carbonato de Litio",
    commercialNames: ["Plenur", "Carbolit"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501384503451.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Carbonato de Litio - Presentación farmacológica",
    atcCode: 'N05AN01',
    anatomicalSystem: '2.5 Antidepresivos',
    therapeuticClass: 'Estabilizadores del estado de ánimo / Antimaníacos / Sales de litio',
    description: 'Gold standard histórico para el tratamiento de los episodios maníacos agudos, la prevención de recaídas en el Trastorno Bipolar (maníaco-depresivo) y la prevención del suicidio. Fármaco de estrecho margen terapéutico que requiere monitorización obligatoria de litemia.',
    presentations: [
      { id: 'lit-1', form: 'Comprimidos de liberación prolongada', concentration: '300 mg y 400 mg', route: 'Oral', packaging: 'Caja x 50 y 100 comprimidos' },
      { id: 'lit-2', form: 'Cápsulas y comprimidos de liberación inmediata', concentration: '150 mg y 300 mg', route: 'Oral', packaging: 'Frasco x 100 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Catión monovalente que compite con el sodio y otros cationes. Inhibe la enzima inositol monofosfatasa (IMPasa) agotando el inositol celular y bloqueando la vía de señalización del fosfatidilinositol (IP3/DAG). Inhibe además la glucógeno sintasa quinasa-3 beta (GSK-3β), ejerce efectos neuroprotectores, reduce la neurotransmisión excitatoria glutamatérgica y potencia la neurotransmisión gabaérgica y serotoninérgica.',
      molecularTarget: 'Inhibición de Inositol Monofosfatasa (IMPasa) y GSK-3β',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% de absorción',
        halfLife: '18 a 24 horas (hasta 36 horas en ancianos e insuficiencia renal)',
        metabolism: 'NO se metaboliza en el hígado; catión inorgánico simple',
        elimination: 'Excreción 95% renal; se reabsorbe un 80% en el túbulo proximal renal en competencia directa con el sodio'
      }
    },
    therapeuticIndications: [
      'Tratamiento de la manía aguda y episodios mixtos en el Trastorno Bipolar',
      'Prevención a largo plazo de episodios maníacos y depresivos en el Trastorno Afectivo Bipolar (eutimizante)',
      'Potenciación de antidepresivos en depresión unipolar resistente',
      'Reducción comprobada del riesgo de suicidio en pacientes con trastornos afectivos'
    ],
    posology: {
      adultStandard: 'Individualizada y guiada estrictamente por litemia plasmática. Inicial: 400 a 800 mg/día divididos en 1 o 2 tomas; aumentar gradualmente hasta alcanzar LITEMIA DIANA: 0.8 a 1.2 mEq/L (en manía aguda) y 0.6 a 0.8 mEq/L (en mantenimiento crónico). La extracción sanguínea de litemia se realiza exactamente 12 horas después de la última dosis de la noche.',
      pediatricDose: 'Niños ≥ 12 años: 15 a 30 mg/kg/día divididos en 2 o 3 tomas guiados por litemia.',
      renalAdjustment: {
        normal: 'Dosis guiada por litemia sérica',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis un 50% y monitorizar litemia con mayor frecuencia',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO (riesgo extremo de intoxicación letal); hemodializable'
      },
      hepaticAdjustment: 'No requiere ajuste (no se metaboliza en el hígado).',
      administrationNotes: 'Mantener una ingesta hídrica abundante (2-3 L/día) y un consumo constante de sal. Cualquier depleción de sodio o deshidratación reduce la eliminación renal de litio disparando su toxicidad.'
    },
    safety: {
      blackBoxWarning: 'TOXICIDAD GRAVE POR LITIO: ESTRECHO MARGEN TERAPÉUTICO (NIVELES > 1.5 mEq/L PRODUCEN TOXICIDAD; > 2.0 mEq/L PRODUCEN COMA, CONVULSIONES, DAÑO CEREBRAL PERMANENTE Y MUERTE). REQUIERE CONTROL PERIÓDICO DE LITEMIA.',
      contraindications: [
        'Insuficiencia renal moderada a grave',
        'Depleción grave de sodio o deshidratación severa',
        'Enfermedad cardiovascular grave o síndrome de disfunción del nódulo sinusal (riesgo de bradicardia severa)',
        'Primer trimestre de embarazo (anomalía de Ebstein)',
        'Hipotiroidismo no tratado'
      ],
      adverseEffects: {
        frequent: ['Temblor fino distal de manos (muy común)', 'Poliuria y polidipsia (diabetes insípida nefrogénica leve)', 'Náuseas y diarrea al inicio', 'Aumento de peso'],
        moderate: ['Hipotiroidismo y bocio eutiroideo (inhibe la liberación de T3/T4)', 'Edemas periféricos', 'Acné o empeoramiento de psoriasis'],
        severe: ['Intoxicación aguda/crónica por litio (ataxia severa, disartria, nistagmo, fasciculaciones, coma y convulsiones)', 'Diabetes insípida nefrogénica resistente', 'Nefropatía túbulo-intersticial crónica']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO en el primer trimestre: teratogenicidad cardiovascular específica (Anomalía de Ebstein en la válvula tricúspide).',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Litemia sérica (cada semana al inicio, luego cada 3-6 meses)', 'Función renal (creatinina y TFG) cada 6 meses', 'Hormonas tiroideas (TSH y T4 libre) cada 6-12 meses', 'Ionograma (Na+, K+)']
    },
    interactions: [
      { id: 'lit-int-1', interactsWith: 'AINEs (Ibuprofeno, Indometacina, Diclofenaco)', severity: 'Mayor', clinicalEffect: 'Los AINEs inhiben la síntesis de prostaglandinas renales reduciendo la excreción de litio y elevando la litemia hasta niveles tóxicos.', recommendation: 'Evitar AINEs; usar Paracetamol para analgesia.' },
      { id: 'lit-int-2', interactsWith: 'Diuréticos tiazídicos (Hidroclorotiazida) e IECAs/ARA-II (Enalapril, Losartán)', severity: 'Contraindicada', clinicalEffect: 'Provocan natriuresis compensatoria que estimula la reabsorción tubular de litio, provocando intoxicación grave.', recommendation: 'Evitar la asociación o reducir la dosis de litio a la mitad con controles diarios de litemia.' }
    ],
    storageAndConservation: 'Conservar por debajo de 30°C protegido de la humedad.',
    highAlertMedicine: true,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  }
];
