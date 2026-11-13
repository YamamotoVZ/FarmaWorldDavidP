import { Medication } from '../../types/medication';

const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANALGESICOS_NARCOTICOS: Medication[] = [
  {
    id: 'morfina',
    genericName: "Morfina",
    commercialNames: ["Biogenfine", "Analfin"],
    imageUrl: "https://wecarepharma.mx/cdn/shop/files/biogenfine-morfina-tabletas-10mg-con-20-7501384501297_a2bf53d2-f9c6-4d35-ba22-8a6007bb147a_1200x894.jpg?v=1744716256",
    imageAlt: "Morfina - Presentación farmacológica",
    images: ["https://wecarepharma.mx/cdn/shop/files/biogenfine-morfina-tabletas-10mg-con-20-7501384501297_a2bf53d2-f9c6-4d35-ba22-8a6007bb147a_1200x894.jpg?v=1744716256"],
    atcCode: 'N02AA01',
    anatomicalSystem: '1. Analgésicos Narcóticos',
    therapeuticClass: 'Analgésicos opioides agonistas puros (Fenantrenos)',
    description: 'Prototipo de los analgésicos opioides mayores, agonista potente de receptores mu (µ). Fármaco de referencia para el dolor agudo y crónico moderado a severo y dolor oncológico.',
    presentations: [
      { id: 'mor-1', form: 'Solución inyectable al 1%', concentration: '10 mg/mL (ampolla 1 mL)', route: 'Intravenosa', packaging: 'Caja x 10 ampollas' },
      { id: 'mor-2', form: 'Comprimidos de liberación retardada', concentration: '10 mg, 30 mg, 60 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'mor-3', form: 'Solución oral en gotas', concentration: '20 mg/mL', route: 'Oral', packaging: 'Frasco gotero x 20 mL' }
    ],
    mechanismOfAction: {
      summary: 'Agonista potente y selectivo de los receptores opioides µ (Mu) acoplados a proteína Gi en el SNC y plexos mientéricos. Reduce la concentración de AMPc, inhibe la entrada de Ca2+ presináptico y estimula la salida de K+ postsináptico, hiperpolarizando la neurona e inhibiendo la liberación de neurotransmisores nociceptivos (sustancia P, glutamato).',
      molecularTarget: 'Receptores opioides Mu (MOR / OPRM1) y delta (DOR)',
      pharmacokinetics: {
        bioavailability: 'Oral: 20-40% (primer paso hepático importante); Parenteral: 100%',
        halfLife: '2 a 3.5 horas',
        metabolism: 'Hepático por glucuronidación a Morfina-6-glucurónido (M6G, activo analgésico) y M3G (neuroexcitador)',
        elimination: 'Excreción 90% renal; acumulación de metabolitos activos en insuficiencia renal'
      }
    },
    therapeuticIndications: [
      'Dolor somático o visceral severo agudo o crónico (dolor oncológico terminal)',
      'Dolor agudo en el infarto agudo de miocardio (IAM)',
      'Disnea en edema agudo de pulmón cardiogénico y disnea en cuidados paliativos'
    ],
    posology: {
      adultStandard: 'IV: 2 a 5 mg en bolo lento cada 3-4 horas según titulación del dolor. Oral: 10-30 mg cada 4 horas en formas rápidas o 30-60 mg cada 12 horas en formas de liberación prolongada.',
      pediatricDose: '0.05 a 0.1 mg/kg por dosis IV lenta cada 4 horas bajo estricta monitorización respiratoria.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis un 25-50% o espaciar intervalo cada 6-8 horas',
        severe: 'ClCr < 10 mL/min: Reducir dosis un 50-75% o cambiar a Fentanilo'
      },
      hepaticAdjustment: 'Reducir dosis inicial a la mitad y alargar intervalos de administración.',
      administrationNotes: 'Prescribir siempre con laxantes osmóticos o estimulantes para prevenir constipación persistente. Tener disponible Naloxona IV.'
    },
    safety: {
      blackBoxWarning: 'DEPRESIÓN RESPIRATORIA POTENCIALMENTE MORTAL Y RIESGO DE ADICCIÓN / ABUSO. La coadministración con benzodiacepinas incrementa el riesgo de sedación profunda, coma y muerte.',
      contraindications: [
        'Depresión respiratoria severa o insuficiencia respiratoria aguda no ventilada',
        'Asma bronquial aguda grave o EPOC descompensada hipercápnica',
        'Íleo paralítico u obstrucción intestinal mecánica',
        'Hipertensión intracraneal severa o traumatismo craneoencefálico sin ventilación controlada',
        'Coadministración concomitante con IMAO o dentro de los 14 días posteriores'
      ],
      adverseEffects: {
        frequent: ['Constipación pertinaz (sin tolerancia)', 'Sedación y somnolencia', 'Náuseas y vómitos tempranos', 'Miosis pupilar'],
        moderate: ['Prurito y vasodilatación periférica (por liberación de histamina)', 'Retención urinaria', 'Hipotensión ortostática'],
        severe: ['Depresión respiratoria grave', 'Espasmo de la vía biliar (esfínter de Oddi)', 'Dependencia física y tolerancia']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Categoría C (Categoría D si se usa a dosis altas o prolongadas cerca del parto por riesgo de depresión respiratoria neonatal y síndrome de abstinencia).',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Frecuencia respiratoria y saturación de oxígeno', 'Nivel de conciencia y sedación', 'Patrón intestinal y diuresis']
    },
    interactions: [
      { id: 'mor-int-1', interactsWith: 'Benzodiacepinas y sedantes', severity: 'Contraindicada', clinicalEffect: 'Depresión sinérgica bulbar profunda, paro respiratorio y muerte.', recommendation: 'Evitar uso simultáneo salvo en cuidados paliativos estrictamente monitorizados.' },
      { id: 'mor-int-2', interactsWith: 'Alcohol', severity: 'Contraindicada', clinicalEffect: 'Liberación acelerada del fármaco en presentaciones de liberación prolongada y depresión del SNC.', recommendation: 'Prohibir consumo de alcohol.' },
      { id: 'mor-int-3', interactsWith: 'IMAO (Fenelzina)', severity: 'Contraindicada', clinicalEffect: 'Excitación o depresión extrema del SNC, hipertermia maligna y colapso cardiovascular.', recommendation: 'Respetar 14 días de lavado.' }
    ],
    storageAndConservation: 'Sustancia estupefaciente controlada bajo custodia bajo doble cerradura en caja de seguridad hospitalaria. Proteger de la luz (15°C a 25°C).',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'meperidina',
    genericName: "Meperidina",
    commercialNames: ["Demerol", "Dolantina"],
    imageUrl: "https://www.kernpharma.com/sites/default/files/styles/max_575x575/public/productos/imagenes/dolantina-50-mgml-10-amp-1ml-sol-inyec-5308.jpeg?itok=NeG5EKmG",
    imageAlt: "Meperidina - Presentación farmacológica",
    atcCode: 'N02AB02',
    anatomicalSystem: '1. Analgésicos Narcóticos',
    therapeuticClass: 'Analgésicos opioides agonistas de tipo fenilpiperidina',
    description: 'Opioide sintético con acción analgésica rápida y propiedades atropínicas. Su metabolito neurotóxico (normeperidina) restringe su uso a tratamientos analgésicos agudos de muy corta duración y temblores postoperatorios.',
    presentations: [
      { id: 'mep-1', form: 'Solución inyectable al 5%', concentration: '100 mg / 2 mL', route: 'Intramuscular', packaging: 'Caja x 10 ampollas' },
      { id: 'mep-2', form: 'Solución inyectable al 5%', concentration: '50 mg / 1 mL', route: 'Intravenosa', packaging: 'Caja x 10 ampollas' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores opioides µ y kappa. Posee efectos anticolinérgicos leves (efecto atropínico) y propiedades de anestésico local (bloqueo de canales de sodio).',
      molecularTarget: 'Receptores opioides Mu (µ) y bloqueo de recaptura de serotonina',
      pharmacokinetics: {
        bioavailability: 'Oral: 50% (baja por primer paso); IM/SC: 80-85%',
        halfLife: 'Meperidina: 3 a 5 horas; Normeperidina (metabolito activo tóxico): 15 a 30 horas',
        metabolism: 'Hepático extenso por N-desmetilación a normeperidina e hidrólisis',
        elimination: 'Excreción renal. En fallo renal la normeperidina se acumula provocando convulsiones'
      }
    },
    therapeuticIndications: [
      'Dolor agudo moderado a grave de corta duración (cólico biliar o ureteral, procedimientos diagnósticos)',
      'Analgesia obstétrica intraparto',
      'Manejo del temblor (escalofríos) y rigidez postoperatoria o inducida por anfotericina B'
    ],
    posology: {
      adultStandard: 'IM o SC: 50 a 100 mg cada 3 a 4 horas según necesidad. IV lenta: 25 a 50 mg diluidos en SF 0.9% en al menos 5 minutos. Duración máxima recomendada: no superar 48 horas ni 600 mg/día.',
      pediatricDose: '0.5 a 1.5 mg/kg por dosis IM o SC cada 4 horas (máx 100 mg/dosis). Evitar uso prolongado.',
      renalAdjustment: {
        normal: 'Dosis estándar con duración < 48 horas',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis al 75% o espaciar intervalo cada 6 horas',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADA por acumulación de normeperidina convulsivante'
      },
      hepaticAdjustment: 'Reducir dosis un 50% en insuficiencia hepática.',
      administrationNotes: 'No administrar por más de 48 horas consecutivas por riesgo de neurotoxicidad.'
    },
    safety: {
      blackBoxWarning: 'NEUROTOXICIDAD POR NORMEPERIDINA (CONVULSIONES Y MIOCLONÍAS) Y SÍNDROME SEROTONINÉRGICO POTENCIALMENTE FATAL CON ANTIDEPRESIVOS O IMAO.',
      contraindications: [
        'Uso simultáneo con IMAO o en las 2 semanas previas (riesgo mortal de hiperpirexia y colapso)',
        'Insuficiencia renal moderada a grave',
        'Pacientes con antecedentes de convulsiones o epilepsia',
        'Depresión respiratoria severa',
        'Taquicardia supraventricular (por su efecto vagolítico/atropínico)'
      ],
      adverseEffects: {
        frequent: ['Mareos y sedación', 'Náuseas y vómitos', 'Sequedad bucal y taquicardia'],
        moderate: ['Hipotensión ortostática', 'Retención urinaria', 'Sudoración'],
        severe: ['Convulsiones tónico-clónicas y mioclonías', 'Depresión respiratoria', 'Síndrome serotoninérgico']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Usado en analgesia obstétrica. Atraviesa la placenta con riesgo de depresión respiratoria neonatal y neuroconductual si se administra cerca del expulsivo.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Signos de hiperexcitabilidad del SNC (temblores, mioclonías)', 'Función renal', 'Frecuencia respiratoria y cardíaca']
    },
    interactions: [
      { id: 'mep-int-1', interactsWith: 'IMAO (Fenelzina, Selegilina)', severity: 'Contraindicada', clinicalEffect: 'Reacción tóxica mortal caracterizada por rigidez, hiperpirexia extrema, coma e inestabilidad autonómica.', recommendation: 'Contraindicación absoluta; respetar período de lavado mínimo de 14 días.' },
      { id: 'mep-int-2', interactsWith: 'ISRS (Fluoxetina, Sertralina) y Duloxetina', severity: 'Mayor', clinicalEffect: 'Inhibe la recaptura neuronal de serotonina produciendo síndrome serotoninérgico severo.', recommendation: 'Evitar asociación; preferir otro opioide sin acción serotoninérgica.' }
    ],
    storageAndConservation: 'Armario de estupefacientes bajo llave. Proteger de la luz entre 15°C y 30°C.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'metadona',
    genericName: "Metadona",
    commercialNames: ["Amidone", "Rubidexol"],
    imageUrl: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/biogentec_amidone_tabletas_40mg_caja_con_100_tabletas.png",
    imageAlt: "Metadona - Presentación farmacológica",
    atcCode: 'N07BC02',
    anatomicalSystem: '1. Analgésicos Narcóticos',
    therapeuticClass: 'Analgésicos opioides agonistas sintéticos (Difenilheptanos)',
    description: 'Opioide sintético de acción prolongada, agonista de receptores µ y antagonista de receptores NMDA. Utilizado ampliamente en deshabituación y mantenimiento de adicción a opioides y dolor crónico neuropático rebelde.',
    presentations: [
      { id: 'metd-1', form: 'Comprimidos ranurados', concentration: '5 mg, 10 mg, 40 mg', route: 'Oral', packaging: 'Frasco x 30 y 100 comprimidos' },
      { id: 'metd-2', form: 'Solución oral concentrada', concentration: '10 mg/mL', route: 'Oral', packaging: 'Frasco x 100 mL' },
      { id: 'metd-3', form: 'Solución inyectable SC/IM/IV', concentration: '10 mg/mL', route: 'Intravenosa', packaging: 'Ampolla x 1 mL' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores opioides µ y delta, con antagonismo no competitivo de los receptores NMDA de glutamato e inhibición de la recaptación de serotonina y noradrenalina, lo que previene la tolerancia opioide y alivia el componente hiperalgésico/neuropático.',
      molecularTarget: 'Receptor opioide Mu (µ) y receptor NMDA',
      pharmacokinetics: {
        bioavailability: 'Excelente absorción oral (70-90%)',
        halfLife: 'Muy prolongada y variable: 15 a 60 horas (promedio 24-36 horas); efecto analgésico de 4-8h pero semivida larga genera acumulación',
        metabolism: 'Hepático extenso por CYP3A4, CYP2B6 y CYP2C19 a metabolitos inactivos',
        elimination: 'Excreción fecal/biliar y renal (segura en insuficiencia renal moderada sin metabolitos tóxicos)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de sustitución y mantenimiento en la dependencia a opioides (heroína/fentanilo)',
      'Síndrome de abstinencia a opioides',
      'Dolor crónico oncológico y no oncológico severo refractario a otros opioides',
      'Dolor neuropático complejo'
    ],
    posology: {
      adultStandard: 'Dolor crónico: Inicial 2.5 a 5 mg cada 8-12 horas; titular lentamente cada 5-7 días por su larga vida media. Deshabituación: Inicial 20 a 30 mg/día en toma única matinal, ajustada según escala clínica.',
      pediatricDose: '0.1 a 0.2 mg/kg cada 6-8 horas sólo bajo supervisión experta en cuidados intensivos o paliativos.',
      renalAdjustment: {
        normal: 'Dosis habitual',
        moderate: 'ClCr 10-50 mL/min: No requiere ajuste inicial de dosis',
        severe: 'ClCr < 10 mL/min: Espaciar intervalo a cada 8-12 horas. Fármaco preferido en diálisis frente a morfina'
      },
      hepaticAdjustment: 'Titular con extrema lentitud en insuficiencia hepática por riesgo de acumulación.',
      administrationNotes: 'Peligro de acumulación plasmática letal si se incrementa la dosis antes de alcanzar el estado de equilibrio (5-7 días).'
    },
    safety: {
      blackBoxWarning: 'PROLONGACIÓN DEL INTERVALO QTc Y ARRITMIA TORSADES DE POINTES POTENCIALMENTE MORTAL. RIESGO GRAVE DE SOBREDOSIS ACUMULATIVA Y MUERTE RESPIRATORIA.',
      contraindications: [
        'Prolongación conocida del intervalo QTc (> 500 ms) o síndrome de QT largo congénito',
        'Depresión respiratoria severa',
        'Asma bronquial aguda grave',
        'Uso concomitante con otros fármacos que prolonguen marcadamente el QTc'
      ],
      adverseEffects: {
        frequent: ['Sedación y mareo', 'Sudoración profusa', 'Estreñimiento crónico'],
        moderate: ['Náuseas y vómitos', 'Aumento de peso', 'Retención urinaria'],
        severe: ['Prolongación del intervalo QTc y Torsades de Pointes', 'Depresión respiratoria mortal', 'Edema pulmonar']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Fármaco de elección estándar para el tratamiento de la adicción a opiáceos durante el embarazo para prevenir síndrome de abstinencia materno-fetal.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Electrocardiograma basal y de seguimiento para medir QTc', 'Nivel de sedación y frecuencia respiratoria', 'Electrolitos séricos (K+, Mg2+)']
    },
    interactions: [
      { id: 'metd-int-1', interactsWith: 'Fármacos que prolongan el QTc (Amiodarona, Haloperidol, Ciprofloxacino)', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico crítico de prolongación del QT con arritmias ventriculares fatales.', recommendation: 'Evitar coadministración; monitoreo estricto de ECG.' },
      { id: 'metd-int-2', interactsWith: 'Inductores de CYP3A4 (Rifampicina, Fenitoína, Carbamazepina)', severity: 'Mayor', clinicalEffect: 'Acelera el aclaramiento de metadona desencadenando síndrome de abstinencia agudo.', recommendation: 'Aumentar dosis de metadona si se asocian inductores.' }
    ],
    storageAndConservation: 'Sustancia controlada bajo llave según normativa nacional de estupefacientes (15°C a 30°C).',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'pentazocina',
    genericName: "Pentazocina",
    commercialNames: ["Talwin"],
    imageUrl: "https://static.wixstatic.com/media/78e2ab_3b8e6855192f48759149e7b4844c4738~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    imageAlt: "Pentazocina - Presentación farmacológica",
    atcCode: 'N02AD01',
    anatomicalSystem: '1. Analgésicos Narcóticos',
    therapeuticClass: 'Analgésicos opioides agonistas-antagonistas mixtos (Benzomorfanos)',
    description: 'Opioide mixto agonista de receptores kappa (κ) y antagonista débil o agonista parcial de receptores mu (µ). Puede desencadenar síndrome de abstinencia en dependientes a opioides puros.',
    presentations: [
      { id: 'pen-1', form: 'Comprimidos', concentration: '50 mg', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos' },
      { id: 'pen-2', form: 'Solución inyectable IM/IV/SC', concentration: '30 mg/mL', route: 'Intravenosa', packaging: 'Ampolla x 1 mL (Caja x 10)' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de los receptores opioides kappa (κ), responsable de analgesia espinal y sedación, con efecto antagonista competitivo o agonista parcial débil sobre los receptores mu (µ). A altas dosis puede producir disforia y alucinaciones por unión a receptores sigma (σ).',
      molecularTarget: 'Receptores opioides Kappa (KOR) y Mu (antagonismo)',
      pharmacokinetics: {
        bioavailability: 'Oral: aprox. 20% (primer paso hepático elevado); IM/SC: buena absorción',
        halfLife: '2 a 4 horas',
        metabolism: 'Hepático extenso por oxidación y glucuronidación',
        elimination: 'Excreción renal (< 5% inalterado)'
      }
    },
    therapeuticIndications: [
      'Dolor agudo moderado a grave (postoperatorio, traumatismos, cólicos)',
      'Premedicación anestésica y suplemento analgésico intraoperatorio'
    ],
    posology: {
      adultStandard: 'Oral: 50 mg cada 3 a 4 horas (máx 360 mg/día). IM, SC o IV: 30 mg cada 3 a 4 horas (máx 360 mg/día parenterales; dosis IV individual máxima 30 mg).',
      pediatricDose: 'No recomendada en menores de 12 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis al 75%',
        severe: 'ClCr < 10 mL/min: Reducir dosis al 50%'
      },
      hepaticAdjustment: 'Reducir dosis inicial y monitorear sedación en insuficiencia hepática.',
      administrationNotes: 'NUNCA administrar a pacientes físicamente dependientes de morfina o metadona (desencadena abstinencia aguda inmediata).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PRECIPITACIÓN DE ABSTINENCIA SEVERA EN DEPENDIENTES DE OPIOIDES PUROS Y AUMENTO DE LA PRESIÓN ARTERIAL Y POSCARGA CARDÍACA.',
      contraindications: [
        'Pacientes tratados activamente con opioides agonistas puros (precipita abstinencia)',
        'Infarto agudo de miocardio (aumenta el trabajo cardíaco y consumo de O2 miocárdico)',
        'Traumatismo craneal o hipertensión intracraneal',
        'Insuficiencia respiratoria grave'
      ],
      adverseEffects: {
        frequent: ['Sedación y mareo', 'Náuseas y vómitos', 'Sudoración'],
        moderate: ['Euforia o disforia con alucinaciones y desorientación', 'Hipertensión y taquicardia transitoria', 'Cefalea'],
        severe: ['Depresión respiratoria (con efecto techo)', 'Convulsiones en sobredosis', 'Dependencia']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Categoría C (Categoría D si se usa por tiempo prolongado cerca del parto).',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Presión arterial y pulso', 'Estado mental y cognitivo', 'Frecuencia respiratoria']
    },
    interactions: [
      { id: 'pen-int-1', interactsWith: 'Opioides agonistas puros (Morfina, Fentanilo)', severity: 'Contraindicada', clinicalEffect: 'Antagoniza la analgesia previa y precipita síndrome de abstinencia agudo.', recommendation: 'No asociar con agonistas puros.' },
      { id: 'pen-int-2', interactsWith: 'Depresores del SNC y Alcohol', severity: 'Mayor', clinicalEffect: 'Sedación severa y depresión psicomotriz.', recommendation: 'Evitar alcohol y combinar con precaución.' }
    ],
    storageAndConservation: 'Medicamento controlado. Conservar a temperatura inferior a 25°C.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'buprenorfina',
    genericName: "Buprenorfina",
    commercialNames: ["Transtec", "Dosfol", "Brospina"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7502209290532.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Buprenorfina - Presentación farmacológica",
    atcCode: 'N02AE01',
    anatomicalSystem: '1. Analgésicos Narcóticos',
    therapeuticClass: 'Analgésicos opioides agonistas parciales de alta afinidad',
    description: 'Opioide de alta potencia analgésica (25-50 veces más que morfina). Actúa como agonista parcial del receptor µ con disociación muy lenta y antagonismo kappa. Presenta efecto techo para la depresión respiratoria pero no para la analgesia.',
    presentations: [
      { id: 'bup-1', form: 'Parche transdérmico matricial', concentration: '35 mcg/h, 52.5 mcg/h, 70 mcg/h', route: 'Transdérmica', packaging: 'Caja x 4 parches (liberación continua por 96 horas o 7 días)' },
      { id: 'bup-2', form: 'Comprimidos sublinguales', concentration: '0.2 mg, 2 mg, 8 mg', route: 'Sublingual', packaging: 'Caja x 7 y 28 comprimidos' },
      { id: 'bup-3', form: 'Solución inyectable IM/IV', concentration: '0.3 mg/mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL' }
    ],
    mechanismOfAction: {
      summary: 'Agonista parcial de alta afinidad y lenta disociación en receptores opioides µ (Mu) y antagonista en receptores kappa (κ). Su lenta cinética de unión le confiere una prolongada duración de acción y menor potencial de abstinencia, con fenómeno de techo respecto a la depresión respiratoria.',
      molecularTarget: 'Receptor opioide Mu (µ) con cinética de disociación muy lenta y antagonismo Kappa (κ)',
      pharmacokinetics: {
        bioavailability: 'Sublingual: 30-50%; Transdérmica: 15-50%; Oral deglutida: inactiva por primer paso masivo',
        halfLife: 'Plasmática: 2 a 5 horas; eliminación tisular transdérmica: 24 a 30 horas tras retirar el parche',
        metabolism: 'Hepático por CYP3A4 a norbuprenorfina (metabolito activo débil) y glucuronidación',
        elimination: 'Eliminación predominantemente fecal/biliar (70-80%) y renal (20-30%). Extremadamente seguro en insuficiencia renal'
      }
    },
    therapeuticIndications: [
      'Dolor oncológico y dolor crónico intenso no oncológico (artrosis severa, dolor de espalda, dolor neuropático)',
      'Terapia sustitutiva y de mantenimiento en la dependencia de opioides (vía sublingual sola o con naloxona)',
      'Dolor agudo moderado a grave postoperatorio (vía parenteral o sublingual)'
    ],
    posology: {
      adultStandard: 'Dolor crónico transdérmico: Iniciar con parche de 35 mcg/h (o 5-10 mcg/h semanal), cambiándolo cada 3-4 días (o 7 días según formulación). Sublingual: 0.2 a 0.4 mg cada 6 a 8 horas. Deshabituación: 8 a 16 mg sublinguales/día.',
      pediatricDose: 'Uso no recomendado en menores de 12 años salvo protocolos paliativos especializados (3 a 6 mcg/kg sublingual).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste de dosis',
        severe: 'Fármaco de elección en fallo renal y hemodiálisis; no se acumulan metabolitos tóxicos'
      },
      hepaticAdjustment: 'Usar con precaución en insuficiencia hepática grave por metabolismo microsomal.',
      administrationNotes: 'Vía sublingual: dejar disolver completamente debajo de la lengua sin tragar ni masticar. No aplicar calor externo sobre los parches (aumenta drásticamente la absorción).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE ADICCIÓN, ABUSO Y MAL USO; DEPRESIÓN RESPIRATORIA POTENCIALMENTE MORTAL (DIFÍCIL DE REVERTIR CON NALOXONA POR ALTA AFINIDAD).',
      contraindications: [
        'Insuficiencia respiratoria grave o estado de coma',
        'Pacientes con dependencia aguda a agonistas puros que no hayan iniciado período de abstinencia',
        'Insuficiencia hepática grave (en formulaciones combinadas con naloxona)'
      ],
      adverseEffects: {
        frequent: ['Eritema y prurito en el sitio de aplicación del parche', 'Sedación y cefalea', 'Náuseas y estreñimiento'],
        moderate: ['Hipotensión ortostática', 'Vértigo', 'Sequedad bucal'],
        severe: ['Depresión respiratoria grave (requiere dosis elevadas e infusión continua de naloxona para revertir)', 'Hepatotoxicidad infrecuente']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Segura como terapia sustitutiva en mujeres gestantes con adicción a opioides (monoterapia sin naloxona para evitar precipitación de síndrome de abstinencia fetal).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Estado de la piel bajo el parche', 'Nivel de sedación', 'Función hepática']
    },
    interactions: [
      { id: 'bup-int-1', interactsWith: 'Benzodiacepinas y alcohol', severity: 'Contraindicada', clinicalEffect: 'Colapso respiratorio potencialmente mortal.', recommendation: 'Evitar la combinación simultánea.' },
      { id: 'bup-int-2', interactsWith: 'Inhibidores potentes de CYP3A4 (Ketoconazol, Claritromicina)', severity: 'Mayor', clinicalEffect: 'Aumenta significativamente la concentración plasmática de buprenorfina.', recommendation: 'Vigilar sedación y ajustar dosis.' }
    ],
    storageAndConservation: 'Sustancia controlada bajo llave. Parches transdérmicos conservar a temperatura inferior a 25°C.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'nalbufina',
    genericName: "Nalbufina",
    commercialNames: ["Bufigen", "NALCRYN SP"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501125113604.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Nalbufina - Presentación farmacológica",
    atcCode: 'N02AF02',
    anatomicalSystem: '1. Analgésicos Narcóticos',
    therapeuticClass: 'Analgésicos opioides agonistas kappa y antagonistas mu',
    description: 'Analgésico opioide sintético fenantrénico con efecto agonista potente de receptores kappa y antagonista competitivo de receptores mu. Eficaz en dolor moderado a severo con efecto techo en depresión respiratoria y útil para revertir prurito y depresión respiratoria inducida por morfina sin perder analgesia.',
    presentations: [
      { id: 'nal-1', form: 'Solución inyectable IV/IM/SC', concentration: '10 mg/mL y 20 mg/mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL y 2 mL (Caja x 5 y 10)' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores opioides kappa (κ) proporcionando analgesia y sedación, y antagonista competitivo de receptores mu (µ). A dosis superiores a 30 mg presenta un efecto techo ("ceiling effect") para la depresión respiratoria, mejorando su perfil de seguridad ventilatoria.',
      molecularTarget: 'Receptores opioides Kappa (agonismo) y Mu (antagonismo competitivo)',
      pharmacokinetics: {
        bioavailability: 'Parenteral (IV/IM/SC): 100%; Oral: baja (primer paso)',
        halfLife: 'Aprox. 3 a 5 horas',
        metabolism: 'Hepático casi total por conjugación con ácido glucurónico',
        elimination: 'Excreción biliar y renal'
      }
    },
    therapeuticIndications: [
      'Alivio del dolor moderado a severo (postoperatorio, ginecológico, quemaduras, cólico renal)',
      'Suplemento de la anestesia balanceada quirúrgica y analgesia obstétrica durante el trabajo de parto',
      'Reversión del prurito y la depresión respiratoria inducida por opioides agonistas puros epidurales/intratecales sin revertir la analgesia'
    ],
    posology: {
      adultStandard: 'Adultos (peso 70 kg): 10 mg a 20 mg por vía IV, IM o SC cada 3 a 6 horas según necesidad clínica. Dosis única máxima recomendada: 20 mg; dosis diaria máxima: 160 mg.',
      pediatricDose: '0.1 a 0.2 mg/kg IV, IM o SC cada 4 horas (máx 20 mg/dosis).',
      renalAdjustment: {
        normal: 'Dosis habitual',
        moderate: 'ClCr 10-50 mL/min: Usar con precaución a dosis reducidas',
        severe: 'ClCr < 10 mL/min: Reducir dosis un 50%'
      },
      hepaticAdjustment: 'Reducir dosis por menor aclaramiento hepático.',
      administrationNotes: 'Evitar en pacientes tolerantes a agonistas puros (desencadena abstinencia por su efecto antagonista mu).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PRECIPITACIÓN DE SÍNDROME DE ABSTINENCIA EN PACIENTES CON DEPENDENCIA A OPIOIDES AGONISTAS PUROS (MORFINA, FENTANILO, OXICODONA).',
      contraindications: [
        'Hipersensibilidad a nalbufina',
        'Pacientes dependientes de opioides agonistas puros',
        'Traumatismo craneoencefálico con hipertensión intracraneal',
        'Diarrea por intoxicación o colitis pseudomembranosa'
      ],
      adverseEffects: {
        frequent: ['Sedación marcada (efecto más común)', 'Sudoración', 'Náuseas y vómitos'],
        moderate: ['Sequedad bucal', 'Vértigo', 'Cefalea', 'Disforia leve'],
        severe: ['Depresión respiratoria (con efecto techo)', 'Bradicardia e hipotensión', 'Broncoespasmo (raro)']
      },
      pregnancyCategory: 'B',
      pregnancyDescription: 'Categoría B (Categoría D si se usa a dosis prolongadas en el parto por riesgo de depresión respiratoria neonatal). Ampliamente usada en analgesia de parto.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Frecuencia respiratoria y saturación de oxígeno', 'Nivel de sedación', 'Presión arterial']
    },
    interactions: [
      { id: 'nal-int-1', interactsWith: 'Opioides agonistas puros (Morfina, Fentanilo)', severity: 'Contraindicada', clinicalEffect: 'Antagoniza la analgesia previa y desata síndrome de abstinencia abrupto en pacientes dependientes.', recommendation: 'No usar en pacientes con infusión continua o dependencia de morfina.' },
      { id: 'nal-int-2', interactsWith: 'Sedantes, anestésicos y alcohol', severity: 'Mayor', clinicalEffect: 'Potenciación de la sedación y depresión del SNC.', recommendation: 'Monitorización cuidadosa.' }
    ],
    storageAndConservation: 'Medicamento controlado bajo llave. Conservar por debajo de 25°C protegido de la luz.',
    highAlertMedicine: true,
    prescriptionType: 'Receta retenida / Controlado',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  }
];
