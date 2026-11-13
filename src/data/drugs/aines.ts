import { Medication } from '../../types/medication';

const BLISTER_IMG = '/src/assets/images/medication_blister_tablets_1793310902804.jpg';
const VIAL_IMG = '/src/assets/images/medication_ampoule_vial_1793310913789.jpg';

export const AINES: Medication[] = [
  {
    id: 'acido-acetilsalicilico',
    genericName: 'Ácido Acetilsalicílico (ASA / Aspirina)',
    commercialNames: ['Aspirina', 'AAS', 'Cardipirina', 'Adiro', 'Coraspin'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos de Ácido Acetilsalicílico',
    atcCode: 'B01AC06',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Salicilatos / Antiagregante plaquetario',
    description: 'AINE salicilato prototípico e inhibidor irreversible de la ciclooxigenasa (COX-1 y COX-2). A bajas dosis (75-100 mg) ejerce una potente acción antiagregante plaquetaria cardioprotectora; a dosis altas (500-1000 mg) actúa como analgésico, antipirético y antiinflamatorio.',
    presentations: [
      { id: 'asa-1', form: 'Comprimidos gastrorresistentes (Cardioprotección)', concentration: '81 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos' },
      { id: 'asa-2', form: 'Comprimidos orales efervescentes / masticables', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 y 40 comprimidos' },
      { id: 'asa-3', form: 'Polvo para solución inyectable IV (Acetilsalicilato de lisina)', concentration: '500 mg y 1000 mg', route: 'Intravenosa', packaging: 'Vial x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Acetila de forma irreversible el residuo Serina-529 de la COX-1 plaquetaria y Serina-516 de la COX-2. En plaquetas anula la síntesis de Tromboxano A2 (TXA2, potente vasoconstrictor y agregante plaquetario) durante toda la vida plaquetaria (7-10 días). A dosis altas inhibe la síntesis de prostaglandinas inflamatorias E2 e I2.',
      molecularTarget: 'Inhibición irreversible por acetilación de COX-1 y COX-2',
      pharmacokinetics: {
        bioavailability: 'Rápida absorción gástrica e intestinal (70-80%)',
        halfLife: 'Ácido acetilsalicílico: 15-20 minutos; Salicilato libre: 2 a 3 horas a dosis bajas, hasta 15-30 horas a dosis altas (cinética de saturación)',
        metabolism: 'Hidrólisis rápida a ácido salicílico por esterasas en mucosa intestinal, sangre e hígado',
        elimination: 'Excreción renal pH-dependiente (la alcalinización urinaria acelera su depuración)'
      }
    },
    therapeuticIndications: [
      'Prevención secundaria de eventos aterotrombóticos (infarto de miocardio, ictus isquémico, angina inestable)',
      'Síndrome coronario agudo y angioplastia coronaria transluminal percutánea (dosis de carga 160-325 mg)',
      'Dolor leve a moderado y fiebre en adultos',
      'Artritis reumatoide, osteoartritis y fiebre reumática (a dosis elevadas)'
    ],
    posology: {
      adultStandard: 'Cardioprotección / Antiagregación: 75 a 100 mg una vez al día con alimentos. SCA (carga aguda): 160 a 325 mg masticados inmediatamente. Analgésico / Antipirético: 500 a 1000 mg cada 4 a 6 horas (máx 4 g/día).',
      pediatricDose: 'CONTRAINDICADA en niños y adolescentes < 16 años con fiebre o cuadros virales (gripe, varicela) por riesgo de Síndrome de Reye. Uso excepcional solo en Enfermedad de Kawasaki (30-50 mg/kg/día en fase aguda).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Usar con precaución',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADA por riesgo de hemorragia urémica e insuficiencia renal'
      },
      hepaticAdjustment: 'Contraindicada en insuficiencia hepática grave (riesgo hemorrágico severo).',
      administrationNotes: 'Tomar con abundante agua durante o después de las comidas. Suspender 7 días antes de cirugías electivas mayores si se requiere retirar antiagregación.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE SÍNDROME DE REYE EN PEDIATRÍA (ENCEFALOPATÍA Y DEGENERACIÓN GRASA HEPÁTICA MORTAL) Y RIESGO DE HEMORRAGIA GASTROINTESTINAL GRAVE.',
      contraindications: [
        'Niños y adolescentes con infecciones virales activas (Síndrome de Reye)',
        'Úlcera péptica activa o hemorragia digestiva recurrente',
        'Diátesis hemorrágica activa, hemofilia o trombocitopenia grave',
        'Tríada de Widal / Samter (asma, pólipos nasales y broncoespasmo severo inducido por AAS/AINEs)',
        'Tercer trimestre de embarazo'
      ],
      adverseEffects: {
        frequent: ['Dispepsia, ardor gástrico y dolor epigástrico', 'Sangrado gingival menor y hematomas'],
        moderate: ['Hemorragia gastrointestinal oculta y anemia ferropénica', 'Tinnitus y mareos (signo precoz de salicilismo a dosis altas)', 'Urticaria y broncoespasmo'],
        severe: ['Hemorragia digestiva masiva y perforación gástrica', 'Hemorragia intracraneal', 'Síndrome de Reye pediátrico', 'Toxicidad aguda por salicilatos (alcalosis respiratoria seguida de acidosis metabólica)']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'Categoría D a dosis plenas en el 3er trimestre (cierre prematuro del conducto arterioso e inercia uterina). Bajas dosis (81-100 mg) se usan bajo indicación médica para prevención de preeclampsia.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Signos de hemorragia digestiva o melenas', 'Hemograma y hemoglobina', 'Tinnitus o acúfenos']
    },
    interactions: [
      { id: 'asa-int-1', interactsWith: 'Anticoagulantes orales (Warfarina, Apixabán) y Heparinas', severity: 'Contraindicada', clinicalEffect: 'Aumento masivo sinérgico de riesgo hemorrágico digestivo e intracraneal.', recommendation: 'Evitar o monitorizar bajo estricta indicación de doble terapia.' },
      { id: 'asa-int-2', interactsWith: 'Ibuprofeno', severity: 'Mayor', clinicalEffect: 'El ibuprofeno bloquea el acceso de la aspirina al sitio catalítico de la COX-1 plaquetaria, anulando su efecto cardioprotector irreversible.', recommendation: 'Tomar aspirina al menos 30-60 minutos antes que ibuprofeno o espaciar 8 horas.' },
      { id: 'asa-int-3', interactsWith: 'Metotrexato a dosis altas', severity: 'Contraindicada', clinicalEffect: 'Disminución del aclaramiento renal de metotrexato con pancitopenia grave y toxicidad mortal.', recommendation: 'Evitar la asociación.' }
    ],
    storageAndConservation: 'Conservar en ambiente seco por debajo de 25°C. El olor a vinagre (ácido acético) indica descomposición del fármaco.',
    highAlertMedicine: false,
    prescriptionType: 'Venta libre (OTC)',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'paracetamol',
    genericName: 'Paracetamol (Acetaminofén)',
    commercialNames: ['Tylenol', 'Panadol', 'Efferalgan', 'Termalgin', 'Kitadol', 'Perfalgan'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y jarabe de Paracetamol',
    atcCode: 'N02BE01',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Otros analgésicos y antipiréticos / Anilidas',
    description: 'Analgésico y antipirético de primera línea con excelente tolerancia gástrica y nula acción antiagregante plaquetaria. Carece de efecto antiinflamatorio periférico significativo pero es el analgésico de elección en gastritis, ancianos, pediatría y embarazo.',
    presentations: [
      { id: 'pct-1', form: 'Comprimidos orales ranurados', concentration: '500 mg, 650 mg, 1000 mg (1 g)', route: 'Oral', packaging: 'Caja x 20 y 40 comprimidos' },
      { id: 'pct-2', form: 'Solución para infusión intravenosa (Perfalgan)', concentration: '10 mg/mL (1 g / 100 mL)', route: 'Intravenosa', packaging: 'Frasco o bolsa x 100 mL' },
      { id: 'pct-3', form: 'Gotas y jarabe pediátrico', concentration: '100 mg/mL (gotas) y 120 mg/5 mL (jarabe)', route: 'Oral', packaging: 'Frasco x 30 mL y 120 mL' },
      { id: 'pct-4', form: 'Supositorios rectales', concentration: '150 mg, 250 mg, 500 mg', route: 'Rectal', packaging: 'Caja x 6 supositorios' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis central de prostaglandinas actuando sobre la COX central (en tejidos con baja concentración de hidroperóxidos como el SNC), impidiendo la transmisión del estímulo doloroso y la termorregulación hipotalámica. Su metabolito AM404 activa receptores cannabinoides CB1 y canales TRPV1 medulares estimulando vías serotoninérgicas descendentes.',
      molecularTarget: 'COX central (COX-1/COX-2/COX-3) y metabolito AM404 modulador del sistema cannabinoide y serotoninérgico descendente',
      pharmacokinetics: {
        bioavailability: 'Oral: 60-90%; IV: 100%',
        halfLife: '1.5 a 3 horas en adultos sanos',
        metabolism: 'Hepático: 60% glucuronidación, 35% sulfatación. Un 5-10% se oxida vía CYP2E1 a N-acetil-p-benzoquinonaimina (NAPQI, tóxico neutralizado por glutatión)',
        elimination: 'Excreción 90% renal como conjugados inactivos'
      }
    },
    therapeuticIndications: [
      'Tratamiento sintomático del dolor leve a moderado (cefalea, odontalgia, dismenorrea, dolor osteomuscular)',
      'Control del síndrome febril en adultos y pediatría',
      'Analgésico de elección en artrosis y pacientes con úlcera péptica, asma inducida por AINEs o anticoagulados',
      'Dolor postoperatorio multimodal parenteral'
    ],
    posology: {
      adultStandard: 'Oral: 500 mg a 1000 mg cada 6 a 8 horas según necesidad (máx 3000 mg/día en ambulatorio; máx 2000 mg/día en ancianos, hepatopatía o desnutrición). Infusión IV: 1 g cada 6 horas en 15 minutos (máx 4 g/día en peso > 50 kg).',
      pediatricDose: '10 a 15 mg/kg por dosis cada 4 a 6 horas (máx 60 mg/kg/día sin superar 2 g/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Espaciar intervalo a cada 6 horas',
        severe: 'ClCr < 10 mL/min: Espaciar intervalo a cada 8 horas'
      },
      hepaticAdjustment: 'Reducir dosis máxima a 2 g/día en hepatopatía crónica estable. Contraindicado en insuficiencia hepática aguda activa.',
      administrationNotes: 'Evitar el uso simultáneo de preparados antigripales multisíntoma que contengan paracetamol para prevenir sobredosis inadvertida.'
    },
    safety: {
      blackBoxWarning: 'HEPATOTOXICIDAD GRAVE Y FALLO HEPÁTICO AGUDO FULMINANTE: La sobredosis aguda (> 7.5 a 10 g en adultos o > 150 mg/kg en niños) agota el glutatión hepático provocando necrosis centrolobulillar masiva. Antídoto: N-Acetilcisteína (NAC) precoz.',
      contraindications: [
        'Hipersensibilidad al paracetamol o a propacetamol',
        'Insuficiencia hepatocelular grave o hepatitis aguda activa descompensada'
      ],
      adverseEffects: {
        frequent: ['Excelente tolerancia gástrica'],
        moderate: ['Aumento transitorio de transaminasas a dosis altas continuadas', 'Hipotensión transitoria con infusión IV rápida'],
        severe: ['Necrosis hepática fulminante por sobredosis', 'Reacciones cutáneas graves (Stevens-Johnson / NET, muy raras)', 'Trombocitopenia']
      },
      pregnancyCategory: 'B',
      pregnancyDescription: 'Analgésico y antipirético de primera elección durante todo el embarazo a la menor dosis eficaz y por el menor tiempo posible.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Dosis acumulada total diaria estricta', 'Enzimas hepáticas (ALT/AST) e INR en sospecha de toxicidad']
    },
    interactions: [
      { id: 'pct-int-1', interactsWith: 'Alcohol (Consumo crónico de Etanol)', severity: 'Mayor', clinicalEffect: 'Inducción de CYP2E1 y depleción de glutatión hepático, disminuyendo el umbral de necrosis hepatotóxica ante dosis terapéuticas.', recommendation: 'Limitar la dosis máxima diaria a 2 g/día en pacientes alcohólicos.' },
      { id: 'pct-int-2', interactsWith: 'Warfarina (uso continuo > 2 g/día por más de 5 días)', severity: 'Moderada', clinicalEffect: 'Aumento leve a moderado del INR por posible inhibición competitiva del metabolismo de warfarina.', recommendation: 'Monitorizar INR en tratamientos diarios continuos prolongados.' }
    ],
    storageAndConservation: 'Conservar a temperatura ambiente por debajo de 30°C.',
    highAlertMedicine: false,
    prescriptionType: 'Venta libre (OTC)',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'metamizol',
    genericName: 'Metamizol Sódico / Magnésico (Dipirona)',
    commercialNames: ['Nolotil', 'Novalgina', 'Neomelubrina', 'Dipidona', 'Algi-Mabo'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas inyectables y cápsulas de Metamizol',
    atcCode: 'N02BB02',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Analgésicos y antipiréticos derivados de la pirazolona',
    description: 'Potente analgésico, antipirético y espasmolítico visceral con mínimo efecto lesivo sobre la mucosa gastroduodenal. Fármaco de referencia hospitalaria en dolor postoperatorio agudo y cólico renal/biliar.',
    presentations: [
      { id: 'met-1', form: 'Cápsulas duras', concentration: '575 mg', route: 'Oral', packaging: 'Caja x 10 y 20 cápsulas' },
      { id: 'met-2', form: 'Comprimidos recubiertos', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 comprimidos' },
      { id: 'met-3', form: 'Solución inyectable IM/IV', concentration: '2 g / 5 mL (400 mg/mL)', route: 'Intravenosa', packaging: 'Ampollas x 5 mL (Caja x 5)' },
      { id: 'met-4', form: 'Gotas orales pediátricas', concentration: '500 mg/mL', route: 'Oral', packaging: 'Frasco gotero x 10 y 20 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la ciclooxigenasa (COX) central y periférica reduciendo la producción de prostaglandinas. Estimula la vía óxido nítrico-GMPc-canales de K+ a nivel nociceptivo medular e inhibe el flujo de Ca2+ intracelular en la musculatura lisa visceral, confiriéndole su distintivo efecto antiespasmódico.',
      molecularTarget: 'Inhibición de COX central/periférica, apertura de canales de K+ y relajación de músculo liso visceral',
      pharmacokinetics: {
        bioavailability: 'Profármaco: hidrólisis rápida y completa en tracto digestivo a 4-metilaminoantipirina (4-MAA, activa al 90%)',
        halfLife: '4-MAA: 2.5 a 3.5 horas',
        metabolism: 'Hepático a metabolitos activos e inactivos',
        elimination: 'Excreción 90% renal'
      }
    },
    therapeuticIndications: [
      'Dolor agudo moderado a severo postoperatorio o postraumático',
      'Dolor de tipo cólico visceral espasmódico (cólico renal, ureteral y cólico biliar)',
      'Fiebre refractaria a otros antipiréticos'
    ],
    posology: {
      adultStandard: 'Oral: 575 mg a 1000 mg cada 6 a 8 horas con agua (máx 4000 mg/día). Infusión IV: 1 g a 2 g diluidos en 100 mL de SF 0.9% perfundidos lentamente en al menos 15-20 minutos (NUNCA en bolo rápido por riesgo de hipotensión grave).',
      pediatricDose: '10 a 15 mg/kg por dosis cada 6 a 8 horas (en mayores de 3 meses o > 5 kg).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis o espaciar intervalos',
        severe: 'ClCr < 10 mL/min: Reducir dosis un 50% en tratamientos repetidos'
      },
      hepaticAdjustment: 'Reducir dosis a la mitad en insuficiencia hepática grave.',
      administrationNotes: 'IV: Administrar SIEMPRE en infusión lenta en decúbito para evitar colapso hemodinámico e hipotensión profunda.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE AGRANULOCITOSIS INMUNOALÉRGICA POTENCIALMENTE MORTAL Y SHOCK ANAFILÁCTICO. Suspender inmediatamente ante fiebre inexplicada, odinofagia o úlceras orales.',
      contraindications: [
        'Hipersensibilidad a pirazolonas o antecedentes de agranulocitosis por metamizol',
        'Déficit congénito de glucosa-6-fosfato deshidrogenasa (G6PD, riesgo de hemólisis)',
        'Porfiria hepática aguda intermitente',
        'Hipotensión arterial previa o inestabilidad hemodinámica',
        'Tercer trimestre de embarazo'
      ],
      adverseEffects: {
        frequent: ['Coloración rojiza inocua de la orina por su metabolito ácido rubazónico'],
        moderate: ['Hipotensión arterial (dependiente de la velocidad de infusión IV)', 'Náuseas y sequedad de boca', 'Reacciones alérgicas cutáneas leves'],
        severe: ['Agranulocitosis fulminante (neutrófilos < 500/mm³)', 'Shock anafiláctico', 'Síndrome de Stevens-Johnson / Lyell']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Categoría C en 1° y 2° trimestre (evitar si no es indispensable). CONTRAINDICADO en 3° trimestre (Categoría D) por cierre prematuro del ductus arterioso.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Presión arterial durante la perfusión IV', 'Hemograma con recuento de leucocitos ante signos infecciosos inexplicados']
    },
    interactions: [
      { id: 'met-int-1', interactsWith: 'Ciclosporina', severity: 'Mayor', clinicalEffect: 'Disminuye las concentraciones séricas de ciclosporina aumentando riesgo de rechazo de injerto.', recommendation: 'Monitorizar niveles sanguíneos de ciclosporina.' },
      { id: 'met-int-2', interactsWith: 'Alcohol', severity: 'Moderada', clinicalEffect: 'Potenciación mutua de los efectos sobre el sistema nervioso central.', recommendation: 'Evitar consumo de alcohol.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido de la luz directa.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'ibuprofeno',
    genericName: 'Ibuprofeno',
    commercialNames: ['Advil', 'Motrin', 'Espidifen', 'Neobrufen', 'Actron'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y cápsulas de gel de Ibuprofeno',
    atcCode: 'M01AE01',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Derivados del ácido propiónico',
    description: 'AINE prototípico con potente acción antiinflamatoria, analgésica y antipirética de acción corta. Ampliamente utilizado en dismenorrea, odontalgia, artropatías inflamatorias y fiebre.',
    presentations: [
      { id: 'ibu-1', form: 'Comprimidos recubiertos y cápsulas blandas', concentration: '400 mg, 600 mg', route: 'Oral', packaging: 'Caja x 10, 20 y 30 comprimidos' },
      { id: 'ibu-2', form: 'Suspensión oral infantil', concentration: '100 mg / 5 mL (2%) y 200 mg / 5 mL (4%)', route: 'Oral', packaging: 'Frasco x 120 mL y 200 mL' },
      { id: 'ibu-3', form: 'Solución para infusión intravenosa', concentration: '400 mg / 100 mL', route: 'Intravenosa', packaging: 'Bolsa x 100 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición reversible y competitiva de las ciclooxigenasas COX-1 y COX-2, bloqueando la conversión de ácido araquidónico en prostaglandinas y tromboxano A2 en los tejidos periféricos inflamados y en el hipotálamo.',
      molecularTarget: 'Canal catalítico de las enzimas COX-1 y COX-2',
      pharmacokinetics: {
        bioavailability: 'Oral: > 80% absorbido rápidamente',
        halfLife: '1.8 a 2.5 horas',
        metabolism: 'Hepático casi total por CYP2C9 a metabolitos hidroxilados inactivos',
        elimination: 'Excreción 90% renal como metabolitos conjugados'
      }
    },
    therapeuticIndications: [
      'Dolor agudo somático o inflamatorio leve a moderado (dismenorrea, dolor dental, traumatismos)',
      'Artritis reumatoide, espondilitis anquilosante y crisis de artrosis',
      'Síndrome febril en adultos y niños',
      'Cierre del conducto arterioso permeable en prematuros (uso parenteral especializado)'
    ],
    posology: {
      adultStandard: 'Oral: 400 mg cada 6 a 8 horas con comida (dosis analgésica estándar 1200 mg/día; en inflamación articular grave hasta 600 mg cada 8 horas, máx 2400 mg/día por prescripción médica estricta).',
      pediatricDose: '5 a 10 mg/kg por dosis cada 6 a 8 horas (máx 30-40 mg/kg/día). No usar en menores de 3 meses o < 5 kg.',
      renalAdjustment: {
        normal: 'Dosis mínima eficaz',
        moderate: 'ClCr 10-50 mL/min: Usar con extrema precaución; riesgo de fallo hemodinámico',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO'
      },
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática. Contraindicado en fallo hepático severo.',
      administrationNotes: 'Tomar siempre con las comidas o un vaso de leche para reducir la agresión gástrica directa.'
    },
    safety: {
      blackBoxWarning: 'RIESGO CARDIOVASCULAR TROMBÓTICO (INFARTO DE MIOCARDIO E ICTUS) Y RIESGO GASTROINTESTINAL GRAVE (ÚLCERA, HEMORRAGIA Y PERFORACIÓN). CONTRAINDICADO EN CIRUGÍA DE BYPASS CORONARIO (CABG).',
      contraindications: [
        'Úlcera péptica activa o antecedente de hemorragia digestiva recurrente',
        'Tercer trimestre de embarazo (cierre prematuro del conducto arterioso)',
        'Insuficiencia cardíaca congestiva grave (NYHA III-IV) o cardiopatía isquémica establecida',
        'Tríada de Samter (asma y alergia a AAS/AINEs)',
        'Insuficiencia renal o hepática grave'
      ],
      adverseEffects: {
        frequent: ['Dispepsia, pirosis y dolor epigástrico', 'Náuseas'],
        moderate: ['Edema periférico y retención hidrosalina', 'Hipertensión arterial descompensada', 'Erupción cutánea'],
        severe: ['Hemorragia digestiva alta y perforación gástrica', 'Insuficiencia renal aguda hemodinámica', 'Infarto agudo de miocardio']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'Categoría C en 1° y 2° trimestre. CATEGORÍA D en el tercer trimestre (cierre prematuro del conducto arterioso e hipertensión pulmonar fetal).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Presión arterial', 'Función renal (creatinina sérica)', 'Signos de sangrado gastrointestinal']
    },
    interactions: [
      { id: 'ibu-int-1', interactsWith: 'Anticoagulantes orales (Warfarina, DOACs)', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico masivo de hemorragia gastrointestinal alta.', recommendation: 'Evitar asociación; preferir paracetamol.' },
      { id: 'ibu-int-2', interactsWith: 'IECAs/ARA-II (Enalapril, Losartán) + Diuréticos', severity: 'Mayor', clinicalEffect: 'Triple golpe renal ("Triple Whammy"): desencadena insuficiencia renal aguda prerrenal.', recommendation: 'Monitorizar función renal y volemia.' }
    ],
    storageAndConservation: 'Conservar en lugar seco por debajo de 30°C.',
    highAlertMedicine: false,
    prescriptionType: 'Venta libre (OTC)',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'ketorolaco',
    genericName: 'Ketorolaco Trometamol',
    commercialNames: ['Toradol', 'Droal', 'Algikey', 'Dolac'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas inyectables y comprimidos sublinguales de Ketorolaco',
    atcCode: 'M01AB15',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Derivados del ácido acético (Pirrolizina)',
    description: 'AINE con una de las acciones analgésicas más potentes, equiparable a opioides menores, pero con alta toxicidad gastrointestinal y renal. Su uso está estrictamente limitado a un máximo de 5 días por vía parenteral u oral.',
    presentations: [
      { id: 'ket-1', form: 'Solución inyectable IM/IV', concentration: '30 mg / 1 mL', route: 'Intravenosa', packaging: 'Ampollas x 1 mL (Caja x 5 y 10)' },
      { id: 'ket-2', form: 'Comprimidos sublinguales / orales', concentration: '10 mg y 20 mg', route: 'Sublingual', packaging: 'Caja x 10 y 20 comprimidos' },
      { id: 'ket-3', form: 'Solución oftálmica (colirio)', concentration: '5 mg/mL (0.5%)', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Potente inhibidor no selectivo de las enzimas ciclooxigenasa-1 (COX-1) y ciclooxigenasa-2 (COX-2) con pronunciada afinidad por COX-1, bloqueando intensamente la síntesis periférica de prostaglandinas proinflamatorias y proálgicas.',
      molecularTarget: 'Isoenzimas COX-1 (potente) y COX-2',
      pharmacokinetics: {
        bioavailability: 'Oral/Sublingual/IM: 100% de absorción rápida',
        halfLife: '4 a 6 horas (prolongada a 10 horas en ancianos e insuficiencia renal)',
        metabolism: 'Hepático por glucuronidación e hidroxilación',
        elimination: 'Excreción 90% renal'
      }
    },
    therapeuticIndications: [
      'Tratamiento a corto plazo del dolor agudo moderado a severo postoperatorio o postraumático',
      'Cólico nefrítico agudo intenso',
      'Dolor ocular postquirúrgico y conjuntivitis alérgica (colirio oftálmico)'
    ],
    posology: {
      adultStandard: 'IV o IM: Inicial 10 a 30 mg cada 6 a 8 horas según necesidad clínica. Dosis diaria máxima en adultos jóvenes: 90 mg/día. Ancianos o peso < 50 kg: máx 60 mg/día. Oral: 10 mg cada 6 horas (máx 40 mg/día). DURACIÓN MÁXIMA TOTAL: 5 DÍAS parenterales o 7 días orales.',
      pediatricDose: '0.5 mg/kg por dosis IV o IM cada 6 horas por máximo 48-72 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar con tope de 5 días',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis al 50% (máx 60 mg/día parenterales)',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO formalmente'
      },
      hepaticAdjustment: 'Usar con extrema cautela a dosis mínimas.',
      administrationNotes: 'NUNCA sobrepasar los 5 días de tratamiento por riesgo exponencial de hemorragia digestiva alta y perforación gástrica.'
    },
    safety: {
      blackBoxWarning: 'RIESGO CRÍTICO DE HEMORRAGIA GASTROINTESTINAL MAYOR, PERFORACIÓN GÁSTRICA Y FALLO RENAL AGUDO SI SE SUPERA EL LÍMITE DE 5 DÍAS DE TRATAMIENTO O EN PACIENTES DE RIESGO.',
      contraindications: [
        'Uso continuado > 5 días consecutivos',
        'Úlcera péptica activa o antecedente de hemorragia digestiva',
        'Pacientes con sospecha de hemorragia cerebrovascular o diátesis hemorrágica',
        'Analgesia profiláctica antes o durante cirugía mayor (riesgo de hemorragia)',
        'Insuficiencia renal moderada a grave o hipovolemia deshidratada',
        'Embarazo y trabajo de parto'
      ],
      adverseEffects: {
        frequent: ['Dolor epigástrico y náuseas', 'Somnolencia y mareo'],
        moderate: ['Edema periférico', 'Hipertensión', 'Sangrado en sitio de incisión quirúrgica'],
        severe: ['Hemorragia digestiva alta masiva y úlcera sangrante', 'Insuficiencia renal aguda anúrica', 'Broncoespasmo y anafilaxia']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO durante el embarazo, trabajo de parto y parto por riesgo de hemorragia e inhibición de contracciones uterinas.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Signos de hemorragia digestiva', 'Diuresis horaria y creatinina sérica', 'Presión arterial']
    },
    interactions: [
      { id: 'ket-int-1', interactsWith: 'Otros AINEs y Anticoagulantes (Warfarina, Heparina, AAS)', severity: 'Contraindicada', clinicalEffect: 'Aumento exponencial del riesgo de sangrado gastrointestinal mortal.', recommendation: 'Prohibida la coadministración de dos AINEs simultáneos.' },
      { id: 'ket-int-2', interactsWith: 'Metotrexato y Litio', severity: 'Mayor', clinicalEffect: 'Reduce el aclaramiento renal elevando la toxicidad de ambos fármacos.', recommendation: 'Evitar combinación.' }
    ],
    storageAndConservation: 'Conservar por debajo de 30°C protegido de la luz.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'naproxeno',
    genericName: 'Naproxeno Sódico',
    commercialNames: ['Aleve', 'Naprosyn', 'Flanax', 'Antalgin', 'Momen'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y tabletas de Naproxeno',
    atcCode: 'M01AE02',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Derivados del ácido propiónico',
    description: 'AINE de semivida intermedia-larga (12 a 15 horas) que permite cómoda posología cada 12 horas. Fármaco con el perfil de seguridad cardiovascular más favorable entre los AINEs clásicos en pacientes con riesgo coronario.',
    presentations: [
      { id: 'nap-1', form: 'Comprimidos recubiertos', concentration: '250 mg, 500 mg, 550 mg (Naproxeno sódico)', route: 'Oral', packaging: 'Caja x 10, 20 y 30 comprimidos' },
      { id: 'nap-2', form: 'Suspensión oral', concentration: '125 mg / 5 mL', route: 'Oral', packaging: 'Frasco x 100 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibidor no selectivo de las ciclooxigenasas COX-1 y COX-2, disminuyendo la síntesis de prostaglandinas inflamatorias, pirógenas y nociceptivas. Por su prolongada unión a la COX plaquetaria, mantiene una supresión sostenida del tromboxano A2 similar a dosis bajas de aspirina.',
      molecularTarget: 'Inhibición reversible de COX-1 y COX-2',
      pharmacokinetics: {
        bioavailability: 'Oral: 95% absorbido rápidamente',
        halfLife: '12 a 15 horas',
        metabolism: 'Hepático vía CYP2C9 y CYP1A2 a 6-O-desmetilnaproxeno',
        elimination: 'Excreción 95% en orina'
      }
    },
    therapeuticIndications: [
      'Artritis reumatoide, osteoartritis, espondilitis anquilosante y gota aguda',
      'Dismenorrea primaria y menorragia',
      'Dolor moderado postraumático, muscular y cefalea tensional / migraña',
      'AINE de elección cuando se requiere tratamiento antiinflamatorio en pacientes con antecedentes cardiovasculares'
    ],
    posology: {
      adultStandard: 'Oral: 500 mg inicial seguido de 250 mg o 500 mg cada 12 horas con las comidas (máx 1250 mg/día de naproxeno o 1375 mg/día de naproxeno sódico). Crisis de gota: 750 mg de inicio, luego 250 mg cada 8 horas.',
      pediatricDose: 'Niños > 5 años con artritis idiopática juvenil: 10 mg/kg/día divididos en dos tomas (cada 12h).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Usar con precaución y dosis reducidas',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO'
      },
      hepaticAdjustment: 'Reducir dosis en cirrosis hepática.',
      administrationNotes: 'Ingerir con un vaso lleno de agua durante o tras las comidas.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE ÚLCERAS, HEMORRAGIAS Y PERFORACIONES GASTROINTESTINALES (AUMENTA EN ANCIANOS Y TRATAMIENTOS CRÓNICOS).',
      contraindications: [
        'Úlcera péptica activa o hemorragia digestiva',
        'Tercer trimestre de embarazo',
        'Tríada asmática por aspirina',
        'Insuficiencia cardíaca, renal o hepática severa'
      ],
      adverseEffects: {
        frequent: ['Dispepsia, pirosis y dolor abdominal', 'Náuseas y cefalea'],
        moderate: ['Retención de líquidos y edema', 'Mareos y zumbido de oídos', 'Erupción cutánea'],
        severe: ['Hemorragia digestiva alta', 'Insuficiencia renal aguda', 'Broncoespasmo']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'Categoría C (Categoría D en el tercer trimestre). Evitar durante el embarazo.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Función renal y presión arterial', 'Hemograma y síntomas dispépticos']
    },
    interactions: [
      { id: 'nap-int-1', interactsWith: 'Anticoagulantes orales y antiagregantes', severity: 'Mayor', clinicalEffect: 'Aumento significativo del riesgo de hemorragia gastrointestinal.', recommendation: 'Evitar o asociar con un inhibidor de bomba de protones (omeprazol).' },
      { id: 'nap-int-2', interactsWith: 'Litio y Metotrexato', severity: 'Mayor', clinicalEffect: 'Elevación de niveles plasmáticos y toxicidad.', recommendation: 'Control de niveles séricos.' }
    ],
    storageAndConservation: 'Conservar a temperatura ambiente inferior a 25°C en envase protegido de la humedad.',
    highAlertMedicine: false,
    prescriptionType: 'Venta libre (OTC)',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'diclofenaco',
    genericName: 'Diclofenaco Sódico / Potásico',
    commercialNames: ['Voltaren', 'Cataflam', 'Artrotec', 'Dolotren'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y gel de Diclofenaco',
    atcCode: 'M01AB05',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Derivados del ácido fenilacético',
    description: 'AINE clásico con potente efecto antiinflamatorio y analgésico. Su sal potásica brinda una absorción más veloz para dolor agudo; la sal sódica se usa para formulaciones retardadas y vía parenteral/tópica.',
    presentations: [
      { id: 'dic-1', form: 'Comprimidos entéricos y cápsulas blandas', concentration: '50 mg y 100 mg (retard)', route: 'Oral', packaging: 'Caja x 20 y 40 comprimidos' },
      { id: 'dic-2', form: 'Solución inyectable IM/IV', concentration: '75 mg / 3 mL', route: 'Intramuscular', packaging: 'Ampollas x 3 mL (Caja x 5)' },
      { id: 'dic-3', form: 'Gel tópico al 1% y 2%', concentration: '10 mg/g y 20 mg/g', route: 'Tópica', packaging: 'Tubo x 60 g y 100 g' },
      { id: 'dic-4', form: 'Colirio oftálmico al 0.1%', concentration: '1 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la actividad de la ciclooxigenasa (COX-1 y COX-2 con ligera selectividad por COX-2 comparable a celecoxib), reduciendo la síntesis de prostaglandinas y tromboxanos. Puede inhibir también la vía de la lipooxigenasa y reducir la concentración intracelular de ácido araquidónico libre.',
      molecularTarget: 'Inhibición de COX-1 y COX-2 con afinidad relativa por COX-2',
      pharmacokinetics: {
        bioavailability: 'Oral: 50% (primer paso hepático del 50%); Tópica: 6% de absorción sistémica',
        halfLife: '1 a 2 horas (pero se acumula en el líquido sinovial articular por más de 12 horas)',
        metabolism: 'Hepático por CYP2C9 a 4-hidroxidiclofenaco y glucuronidación',
        elimination: 'Excreción 65% en orina y 35% en bilis/heces'
      }
    },
    therapeuticIndications: [
      'Crisis agudas de artrosis, artritis reumatoide y espondiloartritis',
      'Cólico renal y biliar agudo (vía intramuscular)',
      'Dolor postoperatorio, odontálgico y traumatismos agudos',
      'Inflamación ocular postoperatoria (colirio) y dolor musculoesquelético localizado (gel)'
    ],
    posology: {
      adultStandard: 'Oral: 50 mg cada 8-12 horas o 100 mg en toma única retard diaria (máx 150 mg/día). IM profunda: 75 mg en el cuadrante superior externo del glúteo (máx 75-150 mg/día por máximo 2 días).',
      pediatricDose: '0.5 a 2 mg/kg/día dividido en 2 a 3 tomas orales en mayores de 1 año.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Usar dosis mínimas',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO'
      },
      hepaticAdjustment: 'Monitorear enzimas hepáticas; puede causar hepatotoxicidad con aumento de ALT/AST.',
      administrationNotes: 'Inyección IM debe ser estrictamente profunda en el cuadrante glúteo superior externo para prevenir abscesos o necrosis tisular.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE EVENTOS TROMBÓTICOS CARDIOVASCULARES (INFARTO DE MIOCARDIO E ICTUS) SUPERIOR A OTROS AINES TRADICIONALES. CONTRAINDICADO EN CARDIOPATÍA ISQUÉMICA ESTABLECIDA.',
      contraindications: [
        'Cardiopatía isquémica establecida, enfermedad arterial periférica o enfermedad cerebrovascular',
        'Insuficiencia cardíaca congestiva confirmada (NYHA II-IV)',
        'Úlcera gastrointestinal activa o sangrado',
        'Tercer trimestre de embarazo'
      ],
      adverseEffects: {
        frequent: ['Epigastralgia, náuseas, diarrea y dispepsia', 'Elevación asintomática de transaminasas'],
        moderate: ['Retención hidrosalina y edemas', 'Cefalea y mareos', 'Erupción cutánea'],
        severe: ['Infarto agudo de miocardio e ictus trombótico', 'Hepatitis tóxica aguda', 'Hemorragia digestiva']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'Categoría C (Categoría D en el tercer trimestre). Evitar en la gestación.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Transaminasas (ALT/AST) en tratamientos > 4 semanas', 'Presión arterial', 'Función renal']
    },
    interactions: [
      { id: 'dic-int-1', interactsWith: 'IECAs y ARA-II', severity: 'Mayor', clinicalEffect: 'Atenúa el efecto antihipertensivo y deteriora la función renal aguda.', recommendation: 'Monitoreo de tensión arterial y función renal.' },
      { id: 'dic-int-2', interactsWith: 'Anticoagulantes orales', severity: 'Mayor', clinicalEffect: 'Riesgo grave de sangrado gastrointestinal.', recommendation: 'Evitar o asociar IBP.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'ketoprofeno',
    genericName: 'Ketoprofeno',
    commercialNames: ['Fastum', 'Oruvail', 'Actron Compuesto', 'Ketoprofen Braun'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y gel de Ketoprofeno',
    atcCode: 'M01AE03',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Derivados del ácido propiónico',
    description: 'AINE derivado del ácido propiónico con doble inhibición de ciclooxigenasa y lipooxigenasa. Eficaz en el tratamiento de procesos articulares agudos y crónicos, dismenorrea y lumbalgia.',
    presentations: [
      { id: 'ktp-1', form: 'Cápsulas y comprimidos de liberación prolongada', concentration: '50 mg, 100 mg, 200 mg', route: 'Oral', packaging: 'Caja x 20 y 30 cápsulas' },
      { id: 'ktp-2', form: 'Solución inyectable IM/IV', concentration: '100 mg / 2 mL', route: 'Intramuscular', packaging: 'Ampollas x 2 mL (Caja x 6)' },
      { id: 'ktp-3', form: 'Gel tópico al 2.5%', concentration: '25 mg/g', route: 'Tópica', packaging: 'Tubo x 60 g' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la ciclooxigenasa (COX-1 y COX-2) bloqueando la síntesis de prostaglandinas, e inhibe adicionalmente la 5-lipooxigenasa disminuyendo la producción de leucotrienos quimiotácticos proinflamatorios.',
      molecularTarget: 'Doble inhibición de COX-1/COX-2 y 5-lipooxigenasa',
      pharmacokinetics: {
        bioavailability: 'Oral: 90%; Absorción rápida',
        halfLife: '1.5 a 2 horas (formas estándar); prolongada a 5-8h en formas LP',
        metabolism: 'Hepático casi total por glucuronidación',
        elimination: 'Excreción 80% en orina'
      }
    },
    therapeuticIndications: [
      'Artritis reumatoide, artrosis, espondilitis y crisis agudas de gota',
      'Lumbalgia, ciatalgia y dolor musculoesquelético agudo',
      'Dismenorrea primaria'
    ],
    posology: {
      adultStandard: 'Oral: 50 mg cada 6 a 8 horas o 100 mg cada 12 horas; o 200 mg en toma única diaria con alimentos (máx 200 mg/día). IM profunda: 100 mg cada 12-24 horas.',
      pediatricDose: 'No recomendado en menores de 15 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Dosis máxima 100 mg/día',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO'
      },
      hepaticAdjustment: 'Reducir dosis un 50% en hepatopatía.',
      administrationNotes: 'Gel tópico: proteger estrictamente la zona de la radiación solar durante el tratamiento y 2 semanas posteriores por riesgo de fotosensibilización grave.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE FOTOSENSIBILIZACIÓN GRAVE CON QUEMADURAS SOLARES (GEL TÓPICO) Y TOXICIDAD GASTROINTESTINAL ALTA.',
      contraindications: [
        'Úlcera gastroduodenal activa',
        'Antecedentes de fotosensibilidad o alergia a ketoprofeno o fenofibrato',
        'Tercer trimestre de embarazo',
        'Insuficiencia cardíaca o renal severa'
      ],
      adverseEffects: {
        frequent: ['Molestias digestivas, dispepsia y náuseas'],
        moderate: ['Reacciones cutáneas y fotosensibilidad severa con ampollas', 'Cefalea y mareos'],
        severe: ['Hemorragia digestiva y perforación', 'Fallo renal agudo']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'Contraindicado en el tercer trimestre de embarazo.',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Signos cutáneos de fotosensibilidad', 'Función digestiva y renal']
    },
    interactions: [
      { id: 'ktp-int-1', interactsWith: 'Anticoagulantes orales', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo hemorrágico.', recommendation: 'Evitar asociación.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C al abrigo de la luz.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'indometacina',
    genericName: 'Indometacina',
    commercialNames: ['Indocid', 'Inacid', 'Flogoter', 'Indocin'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y supositorios de Indometacina',
    atcCode: 'M01AB01',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Derivados del indol',
    description: 'AINE potente con destacada actividad antiinflamatoria y antipirética pero con elevada incidencia de efectos adversos gástricos y neurológicos (cefalea frontal). Fármaco de elección en hemicránea continua, espondilitis y cierre del ductus arterioso persistente.',
    presentations: [
      { id: 'ind-1', form: 'Cápsulas orales', concentration: '25 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 y 50 cápsulas' },
      { id: 'ind-2', form: 'Cápsulas de liberación prolongada', concentration: '75 mg', route: 'Oral', packaging: 'Caja x 20 cápsulas' },
      { id: 'ind-3', form: 'Supositorios rectales', concentration: '50 mg y 100 mg', route: 'Rectal', packaging: 'Caja x 12 supositorios' },
      { id: 'ind-4', form: 'Polvo para solución inyectable IV (Indometacina sódica)', concentration: '1 mg', route: 'Intravenosa', packaging: 'Vial x 1 mg (Neonatología)' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe potentemente las ciclooxigenasas COX-1 y COX-2, reduce la motilidad y quimiotaxis de los polimorfonucleares y puede desacoplar la fosforilación oxidativa. En neonatología inhibe las prostaglandinas vasodilatadoras PGE2 y PGI2 estimulando el cierre del conducto arterioso.',
      molecularTarget: 'Inhibición potente de COX-1 y COX-2 e inhibición de motilidad leucocitaria',
      pharmacokinetics: {
        bioavailability: 'Oral: 90-100% absorbido rápidamente',
        halfLife: '4.5 horas',
        metabolism: 'Hepático por desmetilación y glucuronidación',
        elimination: 'Excreción 60% en orina y 33% en heces'
      }
    },
    therapeuticIndications: [
      'Artritis gotosa aguda (fármaco clásico de máxima eficacia)',
      'Espondilitis anquilosante y artropatías seronegativas',
      'Cefaleas autonómicas trigeminales (Hemicránea continua y paroxística, criterio diagnóstico patognomónico)',
      'Cierre médico del ductus arterioso permeable en neonatos prematuros'
    ],
    posology: {
      adultStandard: 'Oral: 25 a 50 mg cada 8 a 12 horas con las comidas (dosis diaria habitual 75 a 150 mg/día; máx 200 mg/día). Supositorios: 50 a 100 mg al acostarse.',
      pediatricDose: 'Prematuros para cierre de ductus: Protocolo de 3 dosis IV de 0.1 a 0.25 mg/kg cada 12-24 horas según edad posnatal.',
      renalAdjustment: {
        normal: 'Dosis estándar con protección gástrica',
        moderate: 'ClCr 10-50 mL/min: Usar con mucha precaución',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADA'
      },
      hepaticAdjustment: 'Reducir dosis.',
      administrationNotes: 'Tomar siempre con las comidas o leche y asociar gastroprotección. La cefalea matinal frontal es un efecto adverso muy frecuente.'
    },
    safety: {
      blackBoxWarning: 'ALTA INCIDENCIA DE EFECTOS ADVERSOS GASTROINTESTINALES (ÚLCERA Y PERFORACIÓN) Y NEUROLÓGICOS CENTRALES (CEFALEA FRONTAL GRAVE, MAREO Y CONFUSIÓN EN ANCIANOS).',
      contraindications: [
        'Úlcera péptica activa o colitis ulcerosa',
        'Epilepsia, enfermedad de Parkinson o psicosis (puede empeorar síntomas psiquiátricos)',
        'Tercer trimestre de embarazo',
        'Insuficiencia renal grave'
      ],
      adverseEffects: {
        frequent: ['Cefalea frontal persistente (20-50% de pacientes)', 'Vértigo y aturdimiento', 'Dispepsia y náuseas'],
        moderate: ['Depresión y confusión mental en ancianos', 'Retención hídrica e hipertensión', 'Diarrea o dolor cólico'],
        severe: ['Hemorragia digestiva grave y perforación', 'Enteropatía por AINEs (estenosis intestinales)', 'Agranulocitosis']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADA en el embarazo, salvo uso hospitalario en prematuridad.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Estado neurológico y cefalea', 'Función renal', 'Síntomas digestivos']
    },
    interactions: [
      { id: 'ind-int-1', interactsWith: 'Probenecid', severity: 'Mayor', clinicalEffect: 'Inhibe la excreción tubular de indometacina duplicando sus niveles plasmáticos.', recommendation: 'Reducir la dosis de indometacina.' },
      { id: 'ind-int-2', interactsWith: 'Triamtereno / Diuréticos', severity: 'Contraindicada', clinicalEffect: 'Riesgo de fracaso renal agudo hemodinámico severo.', recommendation: 'Evitar combinación.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C en lugar seco.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'nimesulida',
    genericName: 'Nimesulida',
    commercialNames: ['Mesulid', 'Nisulid', 'Aulin', 'Scabisan'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y sobres de Nimesulida',
    atcCode: 'M01AX17',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Sulfonanilidas (Preferente COX-2)',
    description: 'AINE de la familia de las sulfonanilidas con inhibición preferencial de la COX-2. Presenta un inicio analgésico veloz pero con riesgo de hepatotoxicidad grave, por lo que su uso está restringido a un máximo de 15 días.',
    presentations: [
      { id: 'nim-1', form: 'Comprimidos orales', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 10 y 20 comprimidos' },
      { id: 'nim-2', form: 'Granulado para suspensión oral (sobres)', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 15 y 30 sobres' },
      { id: 'nim-3', form: 'Gel tópico al 1%', concentration: '10 mg/g', route: 'Tópica', packaging: 'Tubo x 30 g y 60 g' }
    ],
    mechanismOfAction: {
      summary: 'Inhibidor preferencial de la ciclooxigenasa-2 (COX-2) con menor impacto inhibitorio sobre la COX-1 a concentraciones terapéuticas, reduciendo la incidencia de dispepsia gástrica. Adicionalmente neutraliza radicales libres de oxígeno e inhibe la liberación de histamina por mastocitos.',
      molecularTarget: 'Inhibición preferencial de COX-2',
      pharmacokinetics: {
        bioavailability: 'Oral: muy buena absorción (> 80%)',
        halfLife: '2 a 5 horas',
        metabolism: 'Hepático extenso por CYP2C9 a 4-hidroxi-nimesulida',
        elimination: 'Excreción 80% en orina'
      }
    },
    therapeuticIndications: [
      'Tratamiento del dolor agudo somático de corta evolución',
      'Dismenorrea primaria',
      'Dolor e inflamación osteoarticular aguda (segunda línea tras evaluar función hepática)'
    ],
    posology: {
      adultStandard: 'Oral: 100 mg cada 12 horas con las comidas (máx 200 mg/día). DURACIÓN MÁXIMA ESTRICTA: 15 DÍAS consecutivos.',
      pediatricDose: 'CONTRAINDICADA en menores de 12 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: No requiere ajuste inicial pero limitar duración',
        severe: 'ClCr < 30 mL/min: CONTRAINDICADA'
      },
      hepaticAdjustment: 'CONTRAINDICADA absolutamente en cualquier grado de insuficiencia hepática.',
      administrationNotes: 'Suspender de inmediato si el paciente presenta náuseas, vómitos, dolor abdominal inexplicable, orina oscura o ictericia.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HEPATOTOXICIDAD GRAVE, HEPATITIS FULMINANTE Y FALLO HEPÁTICO MORTAL. DURACIÓN MÁXIMA DE TRATAMIENTO: 15 DÍAS.',
      contraindications: [
        'Enfermedad hepática activa o antecedentes de daño hepático por nimesulida',
        'Uso simultáneo con otros fármacos potencialmente hepatotóxicos o alcohol',
        'Menores de 12 años',
        'Úlcera péptica activa o hemorragia digestiva',
        'Tercer trimestre de embarazo'
      ],
      adverseEffects: {
        frequent: ['Epigastralgia leve y náuseas'],
        moderate: ['Elevación de transaminasas', 'Prurito y exantema cutáneo', 'Vómitos'],
        severe: ['Hepatitis aguda tóxica, ictericia y fallo hepático fulminante', 'Hemorragia digestiva', 'Fallo renal']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADA en el tercer trimestre de embarazo y desaconsejada en toda la gestación.',
      lactationRisk: 'Contraindicado',
      monitoringParameters: ['Signos clínicos de toxicidad hepática (astenia, anorexia, ictericia, coluria)', 'Enzimas hepáticas (ALT/AST)']
    },
    interactions: [
      { id: 'nim-int-1', interactsWith: 'Fármacos hepatotóxicos (Paracetamol a dosis altas, Metotrexato, Isoniacida) y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Potenciación crítica del daño hepatocelular.', recommendation: 'Evitar la combinación simultánea.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido de la luz y humedad.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'piroxicam',
    genericName: 'Piroxicam (Piroxicanes)',
    commercialNames: ['Feldene', 'Piroxicam Cinfa', 'Cycladol (+ Betaciclodextrina)', 'Sasulen'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y comprimidos de Piroxicam',
    atcCode: 'M01AC01',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Oxicanes (Piroxicanes)',
    description: 'AINE de la familia de los oxicanes caracterizado por una semivida de eliminación extremadamente prolongada (50 horas), lo que permite una única toma diaria, pero conlleva un alto riesgo de acumulación, sangrado digestivo y reacciones cutáneas.',
    presentations: [
      { id: 'pir-1', form: 'Cápsulas duras y comprimidos solubles', concentration: '20 mg', route: 'Oral', packaging: 'Caja x 20 comprimidos' },
      { id: 'pir-2', form: 'Solución inyectable IM', concentration: '20 mg / 1 mL', route: 'Intramuscular', packaging: 'Ampollas x 1 mL (Caja x 6)' },
      { id: 'pir-3', form: 'Gel tópico al 0.5%', concentration: '5 mg/g', route: 'Tópica', packaging: 'Tubo x 60 g' }
    ],
    mechanismOfAction: {
      summary: 'Inhibidor no selectivo de las ciclooxigenasas COX-1 y COX-2, bloqueando la síntesis de prostaglandinas, prostaciclina y tromboxano A2. Inhibe además la agregación de neutrófilos e inhibe la liberación de enzimas lisosomales en la articulación inflamada.',
      molecularTarget: 'Inhibición de COX-1 y COX-2 e inhibición neutrofílica',
      pharmacokinetics: {
        bioavailability: 'Oral: casi 100% de absorción completa',
        halfLife: 'Extremadamente prolongada: 45 a 55 horas (alcanza estado estable tras 7 a 12 días)',
        metabolism: 'Hepático por CYP2C9 a metabolitos inactivos',
        elimination: 'Excreción renal y fecal'
      }
    },
    therapeuticIndications: [
      'Alivio sintomático de la artrosis, artritis reumatoide y espondilitis anquilosante (segunda línea por riesgo gastrointestinal)'
    ],
    posology: {
      adultStandard: 'Oral o IM: 20 mg una vez al día con la comida principal. En ancianos iniciar con 10 mg/día. Reevaluar a los 14 días.',
      pediatricDose: 'CONTRAINDICADO en menores de 18 años.',
      renalAdjustment: {
        normal: 'Dosis estándar (máx 20 mg/día)',
        moderate: 'ClCr 10-50 mL/min: Usar con mucha precaución',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO'
      },
      hepaticAdjustment: 'Reducir dosis por larga semivida metabólica.',
      administrationNotes: 'Prescribir siempre con un IBP gastroprotector. No asociar con otros AINEs.'
    },
    safety: {
      blackBoxWarning: 'RIESGO MUY ELEVADO DE HEMORRAGIA GASTROINTESTINAL, ÚLCERA PÉPTICA GRAVE Y REACCIONES CUTÁNEAS GRAVES (SÍNDROME DE STEVENS-JOHNSON / NET). NO ES FÁRMACO DE PRIMERA ELECCIÓN.',
      contraindications: [
        'Antecedentes de úlcera péptica previa o hemorragia digestiva',
        'Antecedentes de reacciones cutáneas graves por fármacos',
        'Uso simultáneo con otros AINEs o anticoagulantes',
        'Tercer trimestre de embarazo',
        'Insuficiencia cardíaca, hepática o renal severa'
      ],
      adverseEffects: {
        frequent: ['Dispepsia, náuseas y dolor abdominal'],
        moderate: ['Edema periférico e hipertensión arterial', 'Mareos y tinnitus'],
        severe: ['Hemorragia digestiva grave y perforación', 'Necrólisis epidérmica tóxica (NET) y Stevens-Johnson', 'Fallo renal agudo']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'CONTRAINDICADO en el tercer trimestre de embarazo y desaconsejado en los dos primeros.',
      lactationRisk: 'Precaución / Evaluar riesgo',
      monitoringParameters: ['Signos cutáneos tempranos de rash o eritema', 'Hemograma y sangre oculta en heces', 'Presión arterial']
    },
    interactions: [
      { id: 'pir-int-1', interactsWith: 'Anticoagulantes orales (Warfarina, Acenocumarol)', severity: 'Contraindicada', clinicalEffect: 'Riesgo inaceptable de sangrado mayor gastrointestinal.', recommendation: 'Evitar el uso concomitante.' }
    ],
    storageAndConservation: 'Conservar por debajo de 25°C protegido de la humedad.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  },
  {
    id: 'celecoxib',
    genericName: 'Celecoxib (Coxies / Inhibidores selectivos de COX-2)',
    commercialNames: ['Celebrex', 'Artilog', 'Celebra', 'Onsenal'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas de Celecoxib',
    atcCode: 'M01AH01',
    anatomicalSystem: '2.2 AINES',
    therapeuticClass: 'Antiinflamatorios no esteroideos / Coxibes (Inhibidores selectivos de COX-2)',
    description: 'Prototipo de los inhibidores altamente selectivos de la ciclooxigenasa-2 (COX-2). Proporciona eficacia analgésica y antiinflamatoria con un riesgo significativamente menor de úlceras y sangrado digestivo frente a AINEs tradicionales, pero con riesgo trombótico cardiovascular.',
    presentations: [
      { id: 'cel-1', form: 'Cápsulas duras', concentration: '100 mg y 200 mg', route: 'Oral', packaging: 'Caja x 10, 20 y 30 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe selectivamente la isoenzima ciclooxigenasa-2 (COX-2) inducida en macrófagos y sinoviocitos inflamados, sin inhibir la COX-1 constitutiva gástrica ni plaquetaria a dosis terapéuticas. Reduce la producción de prostaglandina E2 e I2 inflamatorias, preservando la síntesis protectora de PGE2 en la mucosa gástrica pero sin frenar el tromboxano A2 plaquetario, lo que altera el balance tromboxano/prostaciclina.',
      molecularTarget: 'Inhibición altamente selectiva de COX-2',
      pharmacokinetics: {
        bioavailability: 'Oral: muy buena absorción',
        halfLife: '8 a 12 horas',
        metabolism: 'Hepático casi total por CYP2C9 a metabolitos carboxilados inactivos',
        elimination: 'Excreción fecal (57%) y renal (27%)'
      }
    },
    therapeuticIndications: [
      'Alivio sintomático de la artrosis, artritis reumatoide y espondilitis anquilosante en pacientes con alto riesgo gastrointestinal',
      'Dolor agudo moderado somático y postoperatorio',
      'Dismenorrea primaria'
    ],
    posology: {
      adultStandard: 'Artrosis: 200 mg una vez al día o 100 mg cada 12 horas. Artritis reumatoide: 100 a 200 mg cada 12 horas. Dolor agudo: 400 mg inicial, seguido de 200 mg si es necesario el primer día, luego 200 mg cada 12 horas (máx 400 mg/día). Administrar a la dosis mínima eficaz por el menor tiempo posible.',
      pediatricDose: 'Niños ≥ 2 años con artritis idiopática juvenil: 10 a 25 kg: 50 mg cada 12h; > 25 kg: 100 mg cada 12h.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Usar con precaución',
        severe: 'ClCr < 10 mL/min: CONTRAINDICADO'
      },
      hepaticAdjustment: 'Reducir la dosis a la mitad en insuficiencia hepática moderada (Child-Pugh B). Contraindicado en Child-Pugh C.',
      administrationNotes: 'Puede tomarse con o sin alimentos. En pacientes cardiópatas se debe sopesar rigurosamente el riesgo trombótico.'
    },
    safety: {
      blackBoxWarning: 'RIESGO AUMENTADO DE EVENTOS TROMBÓTICOS CARDIOVASCULARES GRAVES, INFARTO DE MIOCARDIO E ICTUS MORTALES. CONTRAINDICADO TRAS CIRUGÍA DE BYPASS CORONARIO (CABG).',
      contraindications: [
        'Cardiopatía isquémica establecida, enfermedad arterial periférica o ictus previo',
        'Insuficiencia cardíaca congestiva clínica (NYHA II-IV)',
        'Hipersensibilidad conocida a sulfonamidas (alergia a sulfas)',
        'Úlcera péptica activa o hemorragia gastrointestinal',
        'Tercer trimestre de embarazo'
      ],
      adverseEffects: {
        frequent: ['Hipertensión arterial (mayor retención de sodio)', 'Dispepsia y dolor abdominal leve', 'Cefalea'],
        moderate: ['Edema periférico', 'Mareos', 'Sinusitis e infecciones respiratorias altas'],
        severe: ['Infarto agudo de miocardio e ictus isquémico', 'Insuficiencia cardíaca descompensada', 'Hemorragia digestiva (menor frecuencia que AINEs no selectivos pero posible)']
      },
      pregnancyCategory: 'D',
      pregnancyDescription: 'Categoría C en 1° y 2° trimestre. CATEGORÍA D en 3° trimestre (cierre prematuro del ductus arterioso).',
      lactationRisk: 'Compatible / Seguro',
      monitoringParameters: ['Presión arterial (riesgo de descontrol tensional)', 'Función renal', 'Signos cardiovasculares']
    },
    interactions: [
      { id: 'cel-int-1', interactsWith: 'Inhibidores e inductores de CYP2C9 (Fluconazol)', severity: 'Mayor', clinicalEffect: 'El fluconazol duplica las concentraciones plasmáticas de celecoxib por inhibición de CYP2C9.', recommendation: 'Reducir la dosis de celecoxib a la mitad si se asocia con fluconazol.' },
      { id: 'cel-int-2', interactsWith: 'Aspirina a dosis bajas', severity: 'Mayor', clinicalEffect: 'Anula la ventaja de protección gastrointestinal del celecoxib, elevando el riesgo de úlcera al nivel de los AINEs clásicos.', recommendation: 'Asociar gastroprotección si el paciente toma aspirina preventiva.' }
    ],
    storageAndConservation: 'Conservar por debajo de 30°C en su envase original.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-10-31T00:00:00Z'
  }
];
