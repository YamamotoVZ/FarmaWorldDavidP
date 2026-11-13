import { Medication } from '../../types/medication';

const VIAL_IMG = '/src/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/src/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANTIBACTERIANOS: Medication[] = [
  // ----------------------------------------------------
  // PENICILINAS
  // ----------------------------------------------------
  {
    id: 'penicilina-g',
    genericName: 'Penicilina G Sódica / Benzatínica (Bencilpenicilina)',
    commercialNames: ['Benzetacil', 'Penilevel', 'Bencilpenicilina Sódica Richet', 'Bicillin L-A'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco ampolla de Penicilina G liofilizada para inyección',
    atcCode: 'J01CE01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Antibiótico betalactámico bactericida del grupo de las penicilinas naturales',
    description: 'Antibiótico betalactámico natural bactericida de espectro reducido. Fármaco de primera línea insustituible para el tratamiento de la sífilis (todas sus etapas), la erisipela estreptocócica, la faringoamigdalitis estreptocócica y la profilaxis secundaria de la fiebre reumática.',
    presentations: [
      { id: 'pen-1', form: 'Polvo liofilizado para solución inyectable IV (Sódica/Potásica)', concentration: '1.000.000 UI, 2.000.000 UI y 5.000.000 UI', route: 'Intravenosa', packaging: 'Frasco ampolla con liofilizado' },
      { id: 'pen-2', form: 'Suspensión inyectable de liberación prolongada (Benzatínica)', concentration: '1.200.000 UI y 2.400.000 UI', route: 'Intramuscular profunda ESTRICTA', packaging: 'Jeringa precargada o frasco ampolla con diluyente' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la tercera y última etapa de la síntesis de la pared celular bacteriana al unirse irreversiblemente a las proteínas fijadoras de penicilina (PBP-1 y PBP-3) en la membrana citoplasmática bacteriana. Esto inhibe la enzima transpeptidasa, impidiendo la formación de puentes cruzados de peptidoglicano en la pared celular y activando autolisinas bacterianas que conducen a la lisis celular osmótica.',
      molecularTarget: 'Proteínas fijadoras de penicilina (PBP) y transpeptidasas de pared bacteriana',
      pharmacokinetics: {
        bioavailability: 'G sódica IV: 100%. G Benzatínica IM: absorción ultra-lenta con niveles bactericidas persistentes en plasma por 3 a 4 semanas.',
        halfLife: 'G sódica IV: 30 a 50 minutos; Benzatínica: varios días.',
        metabolism: 'Mínimo hepático (10%)',
        elimination: 'Excreción renal masiva (80-90% inalterado) por filtración y secreción tubular proximal activa'
      }
    },
    therapeuticIndications: [
      'Tratamiento de elección de la sífilis en todas sus etapas (primaria, secundaria, latente y neurosífilis)',
      'Faringoamigdalitis estreptocócica aguda por Streptococcus pyogenes y erisipela',
      'Profilaxis secundaria a largo plazo de la fiebre reumática recurrente',
      'Meningitis bacteriana por Streptococcus pneumoniae sensible o Neisseria meningitidis',
      'Fasciitis necrotizante estreptocócica y gangrena gaseosa por Clostridium perfringens'
    ],
    posology: {
      adultStandard: 'Sífilis primaria/secundaria: Penicilina G Benzatínica 2.400.000 UI IM en dosis única profunda en glúteo (o 1.2 millones en cada glúteo). Sífilis latente tardía: 2.400.000 UI IM una vez a la semana durante 3 semanas consecutivas. Neurosífilis: Penicilina G Sódica cristalina 18 a 24 millones de UI/día IV continuas o divididas en 3 a 4 millones de UI cada 4 horas durante 10 a 14 días. Profilaxis fiebre reumática: 1.200.000 UI IM cada 3 a 4 semanas.',
      pediatricDose: 'Faringitis estreptocócica / Sífilis congénita: 50.000 UI/kg IM dosis única (máximo 2.400.000 UI).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis de penicilina sódica IV al 75% o espaciar cada 6 horas.',
        severe: 'ClCr <10 mL/min: Reducir al 20-50% o espaciar cada 8-12 horas (riesgo de neurotoxicidad y convulsiones).'
      },
      hepaticAdjustment: 'No requiere ajuste habitual salvo hepatopatía con fallo renal concomitante.',
      administrationNotes: 'PROHIBIDA DE FORMA ABSOLUTA LA ADMINISTRACIÓN INTRAVENOSA DE PENICILINA G BENZATÍNICA: la inyección IV accidental provoca embolismo pulmonar inmediato, oclusión vascular, paro cardiorrespiratorio y muerte instantánea. Inyectar exclusivamente por vía IM profunda en el cuadrante superior externo del glúteo.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDA LA ADMINISTRACIÓN INTRAVENOSA DE PENICILINA BENZATÍNICA POR RIESGO DE PARADA CARDIORRESPIRATORIA Y MUERTE INMEDIATA POR EMBOLIA. ALTO RIESGO DE SHOCK ANAFILÁCTICO EN PACIENTES ALÉRGICOS.',
      contraindications: [
        'Hipersensibilidad alérgica demostrada a penicilinas o betalactámicos',
        'Vía intravenosa para la formulación benzatínica o procaínica'
      ],
      adverseEffects: {
        frequent: ['Dolor e induración intensa en el sitio de inyección intramuscular', 'Urticaria y exantema cutáneo'],
        moderate: ['Reacción de Jarisch-Herxheimer durante el tratamiento de la sífilis (fiebre alta, escalofríos, mialgias y taquicardia secundaria a liberación masiva de endotoxinas treponémicas)'],
        severe: ['Shock anafiláctico potencialmente mortal', 'Neurotoxicidad con mioclonías y convulsiones por dosis altas de sal sódica en fallo renal', 'Nefritis intersticial aguda alérgica']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; cantidades ínfimas en leche materna.'
    },
    interactions: [
      { interactingDrug: 'Metotrexato', severity: 'Grave', clinicalEffect: 'La penicilina compite por la secreción tubular renal de metotrexato, provocando toxicidad pancitopénica severa.', recommendation: 'Monitorear niveles de metotrexato y hemograma.' },
      { interactingDrug: 'Probenecid', severity: 'Moderada', clinicalEffect: 'Bloquea la secreción tubular renal de penicilina duplicando sus niveles y duración.', recommendation: 'Utilizado deliberadamente en neurosífilis.' }
    ],
    monitoringParameters: ['Descarte de alergia previa a penicilinas', 'Signos de reacción anafiláctica inmediata post-inyección (mantener al paciente 30 min en observación)', 'Función renal'],
    storageConditions: 'Liofilizado: conservar por debajo de 25 °C. Solución reconstituida: usar de inmediato o conservar en nevera por máximo 24 horas.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'amoxicilina',
    genericName: 'Amoxicilina Trihidrato',
    commercialNames: ['Amoxil', 'Clamoxyl', 'Ardine', 'Amoxal'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y suspensión oral de Amoxicilina',
    atcCode: 'J01CA04',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Aminopenicilina semisintética de amplio espectro bactericida',
    description: 'Aminopenicilina semisintética bactericida de espectro ampliado frente a bacterias grampositivas y ciertas gramnegativas. Es el antibiótico oral de primera elección en infecciones respiratorias pediátricas y del adulto debido a su excelente absorción oral, la cual no es afectada por los alimentos.',
    presentations: [
      { id: 'amox-1', form: 'Cápsulas o comprimidos orales', concentration: '500 mg, 875 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 14, 20 y 30 unidades' },
      { id: 'amox-2', form: 'Polvo para suspensión oral', concentration: '250 mg / 5 mL y 500 mg / 5 mL', route: 'Oral', packaging: 'Frasco para reconstituir x 100 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe las enzimas transpeptidasas y carboxipeptidasas (PBPs) bacterianas en la membrana interna, bloqueando la síntesis del peptidoglicano de la pared celular. Las bacterias en crecimiento rápido sufren debilidad estructural osmótica, edema y activación de hidrolasas autolíticas con estallido celular.',
      molecularTarget: 'Proteínas fijadoras de penicilina (PBP-1A, PBP-2, PBP-3)',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 75-90% (ampliamente superior a ampicilina y no interferida por alimentos).',
        halfLife: 'Aproximadamente 1 a 1.5 horas.',
        metabolism: 'Hepático menor (10-25% a ácido peniciloico)',
        elimination: 'Excreción renal 60-70% inalterada por filtración y secreción tubular'
      }
    },
    therapeuticIndications: [
      'Infecciones del tracto respiratorio superior: otitis media aguda (OMA), sinusitis maxilar aguda, faringoamigdalitis',
      'Neumonía adquirida en la comunidad típica (fármaco de elección a dosis altas frente a neumococo)',
      'Erradicación de Helicobacter pylori en úlcera péptica (componente clave de esquemas triples y cuádruples)',
      'Infecciones odontogénicas agudas (abscesos dentoalveolares)',
      'Profilaxis de endocarditis bacteriana antes de procedimientos dentales invasivos'
    ],
    posology: {
      adultStandard: 'Infección estándar: 500 mg a 1000 mg cada 8 horas o 875 mg cada 12 horas por 7 a 10 días. Otitis/Neumonía a dosis alta: 1000 mg cada 8 horas. Erradicación de H. pylori: 1000 mg cada 12 horas durante 14 días. Profilaxis endocarditis: 2 g vía oral 30-60 minutos antes del procedimiento dental.',
      pediatricDose: 'Niños: 40 a 50 mg/kg/día divididos cada 8 horas; Otitis media aguda con neumococo resistente: 80 a 90 mg/kg/día divididos en 2 o 3 tomas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-30 mL/min: 500 mg cada 12 horas.',
        severe: 'ClCr <10 mL/min: 500 mg cada 24 horas.'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'Puede tomarse con o sin alimentos. La suspensión reconstituida debe mantenerse refrigerada y usarse en un máximo de 7 a 14 días. NUNCA ADMINISTRAR EN CASO DE SOSPECHA DE MONONUCLEOSIS INFECCIOSA (el virus de Epstein-Barr induce un exantema maculopapular difuso característico en casi el 100% de los pacientes).'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADA EN PACIENTES CON ALERGIA GRAVE A PENICILINAS POR RIESGO DE SHOCK ANAFILÁCTICO. EVITAR EN MONONUCLEOSIS INFECCIOSA POR RIESGO DE EXANTEMA CUTÁNEO SEVERO GENERALIZADO.',
      contraindications: [
        'Alergia documentada a penicilinas y betalactámicos',
        'Mononucleosis infecciosa activa (induce rash maculopapular extenso)'
      ],
      adverseEffects: {
        frequent: ['Diarrea y náuseas leves', 'Erupción cutánea maculopapular eritematosa'],
        moderate: ['Candidiasis mucocutánea u oral secundaria', 'Urticaria alérgica'],
        severe: ['Shock anafiláctico y edema de glotis', 'Colitis pseudomembranosa por C. difficile', 'Síndrome de Stevens-Johnson']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Fármaco de primera elección en embarazo y lactancia.'
    },
    interactions: [
      { interactingDrug: 'Alopurinol', severity: 'Moderada', clinicalEffect: 'Aumento marcado de la frecuencia de erupciones cutáneas alérgicas.', recommendation: 'Evitar la asociación o vigilar aparición de rash.' },
      { interactingDrug: 'Metotrexato', severity: 'Grave', clinicalEffect: 'Disminución del aclaramiento de metotrexato con riesgo de toxicidad hematológica grave.', recommendation: 'Monitorear hemograma.' }
    ],
    monitoringParameters: ['Descarte de antecedentes alérgicos', 'Aparición de diarrea profusa o exantema cutáneo'],
    storageConditions: 'Cápsulas: a menos de 30 °C. Suspensión reconstituida: conservar en nevera (2-8 °C) por 14 días.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // CEFALOSPORINAS: 1ª, 2ª, 3ª, 4ª GENERACIÓN
  // ----------------------------------------------------
  {
    id: 'cefalexina',
    genericName: 'Cefalexina (Cefalosporina de 1ª Generación)',
    commercialNames: ['Keflex', 'Cefalex', 'Beliam', 'Lepitex'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas orales de Cefalexina de 500 mg',
    atcCode: 'J01DB01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Cefalosporina de primera generación oral con alta actividad antiestafilocócica',
    description: 'Cefalosporina oral de primera generación. Destaca por su alta actividad bactericida frente a cocos grampositivos productores de penicilinasa como Staphylococcus aureus sensible a meticilina (SASM) y Streptococcus pyogenes, siendo un pilar en infecciones de piel y tejidos blandos.',
    presentations: [
      { id: 'cefa1-1', form: 'Cápsulas y comprimidos orales', concentration: '500 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 12, 16 y 24 cápsulas' },
      { id: 'cefa1-2', form: 'Polvo para suspensión oral', concentration: '250 mg / 5 mL', route: 'Oral', packaging: 'Frasco para reconstituir x 100 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis del peptidoglicano de la pared celular bacteriana mediante la unión a proteínas fijadoras de penicilina específicas (PBPs). Induce la disfunción osmótica y la activación de autolisinas bacterianas.',
      molecularTarget: 'Proteínas fijadoras de penicilina (PBPs)',
      pharmacokinetics: {
        bioavailability: 'Oral excelente (>90%), no afectada de forma clínicamente relevante por la comida.',
        halfLife: 'Aproximadamente 0.9 a 1.2 horas.',
        metabolism: 'No sufre metabolismo hepático',
        elimination: 'Excreción renal >90% inalterada en las primeras 8 horas por filtración y secreción tubular activa'
      }
    },
    therapeuticIndications: [
      'Infecciones bacterianas de piel y tejidos blandos: celulitis, impétigo, forunculosis, foliculitis',
      'Faringoamigdalitis estreptocócica en pacientes con alergia no anafiláctica a penicilinas',
      'Infecciones del tracto urinario bajo no complicadas en mujeres embarazadas',
      'Infecciones óseas y articulares leves causadas por SASM'
    ],
    posology: {
      adultStandard: '500 mg cada 6 horas o 1 g cada 12 horas por vía oral durante 7 a 10 días (máximo 4 g/día en infecciones severas).',
      pediatricDose: '25 a 50 mg/kg/día divididos en 2 a 4 tomas (hasta 100 mg/kg/día en celulitis moderada).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-40 mL/min: 500 mg cada 8 a 12 horas.',
        severe: 'ClCr <10 mL/min: 250 a 500 mg cada 12 a 24 horas.'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'Puede administrarse con o sin comida. En pacientes con antecedentes de urticaria o anafilaxia grave inmediata por penicilina debe evitarse por riesgo de reactividad cruzada (alrededor del 3-5%).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE REACCIÓN ANAFILÁCTICA CRUZADA EN PACIENTES CON ALERGIA SEVERA A PENICILINAS.',
      contraindications: [
        'Hipersensibilidad grave conocida a cefalosporinas o betalactámicos'
      ],
      adverseEffects: {
        frequent: ['Diarrea y náuseas leves', 'Erupción cutánea maculopapular'],
        moderate: ['Candidiasis vulvovaginal', 'Elevación transitoria de transaminasas'],
        severe: ['Anafilaxia', 'Colitis pseudomembranosa por C. difficile']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Metformina', severity: 'Moderada', clinicalEffect: 'Aumento de niveles plasmáticos de metformina por competencia en el transporte renal de cationes.', recommendation: 'Monitorear glucemia.' }
    ],
    monitoringParameters: ['Evolución de la lesión cutánea', 'Función renal en tratamiento prolongado'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'cefuroxima',
    genericName: 'Cefuroxima Axetilo / Sódica (Cefalosporina de 2ª Generación)',
    commercialNames: ['Zinnat', 'Ceftin', 'Zinacef', 'Kurocef'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y vial inyectable de Cefuroxima',
    atcCode: 'J01DC02',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Cefalosporina de segunda generación resistente a betalactamasas',
    description: 'Cefalosporina de segunda generación disponible tanto por vía parenteral (sódica) como oral en forma de profármaco éster (cefuroxima axetilo). Posee una excelente estabilidad frente a betalactamasas de Haemophilus influenzae y Moraxella catarrhalis.',
    presentations: [
      { id: 'cefa2-1', form: 'Comprimidos recubiertos (Axetilo)', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 10, 14 y 20 comprimidos' },
      { id: 'cefa2-2', form: 'Polvo para solución inyectable IV / IM (Sódica)', concentration: '750 mg y 1500 mg', route: 'Intravenosa / Intramuscular', packaging: 'Frasco ampolla con disolvente' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared celular bacteriana fijándose a las PBPs diana (principalmente PBP-1a y PBP-2). Su estructura química confiere una elevada resistencia a la hidrólisis por betalactamasas de gramnegativos.',
      molecularTarget: 'Proteínas fijadoras de penicilina (PBP-1a, PBP-1b, PBP-2)',
      pharmacokinetics: {
        bioavailability: 'Axetilo oral: 37% en ayunas, aumentando a 52% tras las comidas (lipofilia del éster).',
        halfLife: 'Aproximadamente 1.2 a 1.5 horas.',
        metabolism: 'El axetilo se hidroliza en la mucosa intestinal a cefuroxima activa libre',
        elimination: 'Excreción renal casi exclusiva (>85% inalterada)'
      }
    },
    therapeuticIndications: [
      'Exacerbación aguda de bronquitis crónica y neumonía bacteriana adquirida en la comunidad',
      'Sinusitis aguda bacteriana y otitis media recurrente',
      'Enfermedad de Lyme temprana (eritema migrans) como alternativa a doxiciclina',
      'Profilaxis antibiótica perioperatoria en cirugía cardíaca, ortopédica y vascular (vía IV)'
    ],
    posology: {
      adultStandard: 'Oral (Axetilo): 250 a 500 mg cada 12 horas inmediatamente después de las comidas principales durante 7 a 10 días. Intravenoso (Sódica): 750 mg a 1.5 g IV cada 8 horas.',
      pediatricDose: 'Oral: 20 a 30 mg/kg/día divididos en 2 tomas (máximo 500 mg cada 12h). IV: 50 a 100 mg/kg/día divididos cada 8 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-20 mL/min: 750 mg IV cada 12 horas o 250-500 mg VO cada 24 horas.',
        severe: 'ClCr <10 mL/min: 750 mg IV cada 24 horas.'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'TOMAR LOS COMPRIMIDOS ORALES CON COMIDA: los lípidos de los alimentos mejoran notablemente la absorción del axetilo. No triturar los comprimidos debido a su intenso sabor amargo persistente.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE REACCIONES DE HIPERSENSIBILIDAD INMEDIATA GRAVES (ANAFILAXIA) EN PACIENTES SUSCEPTIBLES.',
      contraindications: [
        'Hipersensibilidad a cefalosporinas o betalactámicos'
      ],
      adverseEffects: {
        frequent: ['Diarrea acuosa y náuseas', 'Cefalea leve'],
        moderate: ['Eosinofilia transitoria', 'Vaginitis por Candida'],
        severe: ['Colitis por Clostridioides difficile', 'Anafilaxia', 'Eritema multiforme']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Antiácidos e Inhibidores de Bomba de Protones (Omeprazol)', severity: 'Moderada', clinicalEffect: 'La elevación del pH gástrico reduce la solubilidad y disminuye sustancialmente la biodisponibilidad de cefuroxima axetilo.', recommendation: 'Separar la administración al menos 2 horas.' }
    ],
    monitoringParameters: ['Tolerancia gastrointestinal', 'Función renal'],
    storageConditions: 'Conservar por debajo de 25 °C en envase hermético.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'ceftriaxona',
    genericName: 'Ceftriaxona Sódica (Cefalosporina de 3ª Generación)',
    commercialNames: ['Rocephin', 'Cefaxona', 'Cefter', 'Terbac'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Vial de Ceftriaxona liofilizada para inyección IV o IM',
    atcCode: 'J01DD04',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Cefalosporina de tercera generación parenteral de amplio espectro y vida media prolongada',
    description: 'Cefalosporina parenteral de tercera generación con potente actividad frente a enterobacterias, Neisseria gonorrhoeae y Streptococcus pneumoniae. Su prolongada vida media plasmática permite una única administración diaria y su excelente penetración meníngea la convierte en el pilar hospitalario de emergencias sépticas y del SNC.',
    presentations: [
      { id: 'cefa3-1', form: 'Polvo liofilizado para solución inyectable IV / IM', concentration: '500 mg, 1 g y 2 g', route: 'Intravenosa / Intramuscular', packaging: 'Frasco ampolla con ampolla de agua estéril o lidocaína al 1% para vía IM' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared bacteriana fijándose a las PBPs (especialmente PBP-2 y PBP-3) de bacterias gramnegativas y grampositivas. Resistente a la mayoría de las betalactamasas de espectro restringido mediadas por plásmidos.',
      molecularTarget: 'Proteínas fijadoras de penicilina (PBP-2 y PBP-3 bacterianas)',
      pharmacokinetics: {
        bioavailability: 'Intramuscular e Intravenosa: 100%.',
        halfLife: 'Excepcionalmente prolongada: 6 a 9 horas, permitiendo dosificación cada 24 horas.',
        metabolism: 'Mínimo hepático',
        elimination: 'Eliminación bidentada balanceada: 60% renal y 40% biliar/fecal sin necesidad habitual de reajuste en insuficiencia renal pura'
      }
    },
    therapeuticIndications: [
      'Meningitis bacteriana aguda purulenta (empírica en combinación con vancomicina)',
      'Sepsis y bacteriemia de foco abdominal, urinario o respiratorio',
      'Neumonía adquirida en la comunidad grave hospitalizada',
      'Infección gonocócica diseminada y gonorrea no complicada (uretritis, cervicitis, proctitis)',
      'Enfermedad de Lyme neuroborreliosis y artritis de Lyme grave',
      'Infecciones graves osteoarticulares y profilaxis quirúrgica en cirugía colorrectal'
    ],
    posology: {
      adultStandard: 'Infección estándar / Neumonía: 1 g a 2 g IV o IM una vez al día (cada 24 horas). Meningitis bacteriana / Sepsis severa: 2 g IV cada 12 horas (4 g/día). Gonorrea no complicada: 500 mg IM en dosis única profunda (asociada a doxiciclina si no se descarta Chlamydia).',
      pediatricDose: 'Infecciones graves: 50 a 75 mg/kg/día cada 24 horas. Meningitis pediátrica: 100 mg/kg/día en 1 o 2 dosis (máximo 4 g/día). CONTRAINDICADA EN NEONATOS HIPERBILIRRUBINÉMICOS.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <10 mL/min: Máximo 2 g al día si no hay disfunción hepática combinada.'
      },
      hepaticAdjustment: 'No suele requerir ajuste salvo que concurra insuficiencia hepática y renal grave simultánea.',
      administrationNotes: 'CONTRAINDICADA DE FORMA ABSOLUTA LA ADMINISTRACIÓN CON SOLUCIONES QUE CONTENGAN CALCIO (incluyendo Ringer Lactato): se forman microcristales de ceftriaxona-calcio precipitados irreversibles que causan daño fatal en pulmones y riñones neonatales. Para inyección IM dolorosa, reconstituir exclusivamente con solución de lidocaína al 1% (NUNCA inyectar lidocaína por vía IV).'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADA EN RECIÉN NACIDOS TRATADOS CON SOLUCIONES IV DE CALCIO POR RIESGO DE PRECIPITACIÓN PULMONAR Y RENAL MORTAL. CONTRAINDICADA EN NEONATOS CON ICTERICIA POR RIESGO DE ENCEFALOPATÍA POR KERNICTERUS.',
      contraindications: [
        'Recién nacidos prematuros o con ictericia neonatal/acidosis (desplaza la bilirrubina de la albúmina induciendo kernicterus)',
        'Coadministración simultánea o secuencial con soluciones IV con calcio (Ringer Lactato)',
        'Alergia grave documentada a betalactámicos'
      ],
      adverseEffects: {
        frequent: ['Diarrea asociada a antibióticos', 'Dolor e induración en el sitio de inyección IM'],
        moderate: ['Pseudolitiasis biliar (barro biliar de ceftriaxona cálcica) transitoria y reversible al suspender', 'Trombocitosis o leucopenia leve'],
        severe: ['Precipitación fatal ceftriaxona-calcio en neonatos', 'Encefalopatía por kernicterus neonatal', 'Colitis pseudomembranosa por C. difficile']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Soluciones que contienen Calcio (Ringer Lactato, nutrición parenteral)', severity: 'Grave', clinicalEffect: 'Precipitación química masiva intravascular con obstrucción microvascular multiorgánica mortal.', recommendation: 'Prohibida la administración por la misma vía en 48 horas.' },
      { interactingDrug: 'Anticoagulantes orales (Warfarina)', severity: 'Moderada', clinicalEffect: 'Prolongación del INR por alteración de la flora intestinal sintetizadora de vitamina K.', recommendation: 'Monitorear INR.' }
    ],
    monitoringParameters: ['Bilirrubina sérica en neonatos', 'Función renal y hepática en tratamientos superiores a 14 días', 'Ecografía de vesícula biliar si surge dolor abdominal en hipocondrio derecho'],
    storageConditions: 'Conservar por debajo de 25 °C protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'cefepima',
    genericName: 'Cefepima Diclorhidrato (Cefalosporina de 4ª Generación)',
    commercialNames: ['Maxipime', 'Cefepime Hospira', 'Axepim', 'Cefepim Kabi'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco ampolla de Cefepima polvo para inyección parenteral',
    atcCode: 'J01DE01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Cefalosporina de cuarta generación de amplio espectro antipseudomónico (zwitterión)',
    description: 'Cefalosporina de cuarta generación de amplio espectro. Su estructura de ion dipolar zwitteriónico le permite penetrar velozmente la membrana externa de las bacterias gramnegativas y exhibe una notable resistencia a la degradación por betalactamasas cromosómicas inducibles (AmpC), conservando a la vez una potente actividad frente a Pseudomonas aeruginosa y cocos grampositivos.',
    presentations: [
      { id: 'cefa4-1', form: 'Polvo para solución inyectable IV / IM', concentration: '1 g y 2 g', route: 'Intravenosa / Intramuscular', packaging: 'Frasco ampolla con liofilizado' }
    ],
    mechanismOfAction: {
      summary: 'Penetra con rapidez a través de las porinas OmpF de la membrana externa gramnegativa y se une con afinidad ultra-alta a PBP-3 y PBP-2, inhibiendo la síntesis de la pared celular. Posee baja afinidad por las betalactamasas de clase C (AmpC) cromosómicas, lo que le confiere una tasa de hidrólisis mínima ante cepas con resistencia desreprimida.',
      molecularTarget: 'PBPs bacterianas de alta afinidad (PBP-3, PBP-2, PBP-1a)',
      pharmacokinetics: {
        bioavailability: 'Intravenosa / Intramuscular: 100%.',
        halfLife: 'Aproximadamente 2 horas.',
        metabolism: 'Metabolismo hepático menor (<1%)',
        elimination: 'Excreción renal masiva (>85% inalterada por filtración glomerular)'
      }
    },
    therapeuticIndications: [
      'Tratamiento empírico de primera línea de la neutropenia febril en pacientes oncológicos',
      'Neumonía nosocomial y neumonía asociada a ventilación mecánica por patógenos resistentes',
      'Infecciones bacterianas graves del tracto urinario y pielonefritis complicada',
      'Infecciones intraabdominales complicadas (en combinación con metronidazol)',
      'Infecciones graves de piel, tejidos blandos y quemaduras infectadas por Pseudomonas'
    ],
    posology: {
      adultStandard: 'Infecciones graves / Neumonía nosocomial: 2 g IV cada 8 horas en infusión de 30 minutos. Neutropenia febril: 2 g IV cada 8 horas. Infección urinaria grave: 1 a 2 g IV cada 12 horas. Duración: 7 a 10 días.',
      pediatricDose: 'Niños ≥2 meses: 50 mg/kg cada 8 o 12 horas (máximo 2 g cada 8h).',
      renalAdjustment: {
        normal: 'ClCr >60 mL/min: 2 g cada 8 horas.',
        moderate: 'ClCr 30-50 mL/min: 2 g cada 12 horas; ClCr 11-29 mL/min: 2 g cada 24 horas.',
        severe: 'ClCr <11 mL/min o hemodiálisis: 1 g cada 24 horas (ajustar obligatoriamente para evitar neurotoxicidad severa).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'AJUSTAR OBLIGATORIAMENTE EN INSUFICIENCIA RENAL: la falta de ajuste en pacientes con función renal deprimida induce encefalopatía urémico-cefepímica con confusión, estado epiléptico no convulsivo y coma reversible al dializar.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE NEUROTOXICIDAD GRAVE: ENCEFALOPATÍA, MIOCLONÍAS, CONVULSIONES Y ESTADO EPILÉPTICO NO CONVULSIVO ANTE LA FALTA DE AJUSTE POSOLÓGICO RIGUROSO EN INSUFICIENCIA RENAL.',
      contraindications: [
        'Hipersensibilidad a cefepima, cefalosporinas u otros betalactámicos'
      ],
      adverseEffects: {
        frequent: ['Diarrea y erupciones cutáneas', 'Náuseas y flebitis local'],
        moderate: ['Prueba de Coombs directa positiva sin hemólisis', 'Elevación transitoria de transaminasas'],
        severe: ['Neurotoxicidad grave: encefalopatía aguda, afasia, mioclonías y estado epiléptico no convulsivo', 'Colitis por C. difficile']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Aminoglucósidos (Amikacina, Gentamicina)', severity: 'Moderada', clinicalEffect: 'Sinergia antibacteriana pero posible nefrotoxicidad aditiva.', recommendation: 'Administrar en sitios separados y monitorizar creatinina.' }
    ],
    monitoringParameters: ['Función renal diaria (ClCr / TFGe) para reajustar dosis de inmediato', 'Estado neurológico y nivel de consciencia', 'Electroencefalograma en caso de alteración mental'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco y protegido de la luz.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // MACRÓLIDOS: ERITROMICINA, CLARITROMICINA, AZITROMICINA
  // ----------------------------------------------------
  {
    id: 'eritromicina',
    genericName: 'Eritromicina (Estearato / Etilsuccinato / Lactobionato)',
    commercialNames: ['Pantomicina', 'Erythrocin', 'E-Mycin', 'Ilosone'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y viales de Eritromicina',
    atcCode: 'J01FA01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Antibiótico macrólido de anillo lactónico de 14 átomos y agonista de motilina',
    description: 'Primer antibiótico macrólido introducido clínicamente. Posee un anillo lactónico de 14 miembros. Además de su acción bacteriostática frente a cocos grampositivos y patógenos atípicos, estimula directamente los receptores de motilina gastrointestinales, utilizándose como agente procinético.',
    presentations: [
      { id: 'eri-1', form: 'Comprimidos recubiertos gastro-resistentes', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 comprimidos' },
      { id: 'eri-2', form: 'Polvo para infusión IV (Lactobionato)', concentration: '1 g', route: 'Intravenosa', packaging: 'Frasco ampolla x 1 g' }
    ],
    mechanismOfAction: {
      summary: 'Se une reversiblemente a la subunidad ribosómica 50S bacteriana (específicamente al ARN ribosomal 23S). Bloquea el proceso de translocación del peptidil-ARNt desde el sitio aceptor al donador, deteniendo la elongación de la cadena polipeptídica.',
      molecularTarget: 'Subunidad 50S del ribosoma bacteriano (ARN 23S) y receptor de motilina gástrico',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 30-50% (inestable en medio ácido gástrico; requiere cubierta entérica).',
        halfLife: 'Aproximadamente 1.5 a 2 horas.',
        metabolism: 'Hepático masivo mediante citocromo CYP3A4 (es un potente inhibidor enzimático)',
        elimination: 'Excreción biliar y fecal predominante (>90%), solo 2-5% renal'
      }
    },
    therapeuticIndications: [
      'Infecciones por Bordetella pertussis (tos ferina) y difteria (Corynebacterium diphtheriae)',
      'Neumonía atípica por Mycoplasma pneumoniae, Chlamydia pneumoniae y Legionella',
      'Gastroparesia diabética severa e íleo postoperatorio (uso procinético)',
      'Alternativa en faringoamigdalitis estreptocócica en pacientes con alergia grave a penicilinas'
    ],
    posology: {
      adultStandard: 'Infección oral: 250 a 500 mg cada 6 horas (o 1 g cada 12 horas) durante 7 a 14 días. Infección grave IV: 15 a 20 mg/kg/día en infusión IV continua o dividida cada 6 horas. Procinético en gastroparesia: 125 a 250 mg IV o VO 30 minutos antes de las comidas.',
      pediatricDose: '30 a 50 mg/kg/día divididos en 4 tomas cada 6 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'Dosis máxima 2 g/día en insuficiencia renal extrema (riesgo de ototoxicidad).'
      },
      hepaticAdjustment: 'Usar con gran cautela en hepatopatía; contraindicada la sal estolato en hepatópatas por riesgo de ictericia colestásica.',
      administrationNotes: 'ALTO RIESGO DE ESTENOSIS HIPERTRÓFICA DE PÍLORO EN RECIÉN NACIDOS TRATADOS EN LAS PRIMERAS 2 SEMANAS DE VIDA. La infusión IV debe ser diluida y lenta (en al menos 60 minutos) para evitar tromboflebitis severa y arritmias.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PROLONGACIÓN DEL INTERVALO QT, TORSADES DE POINTES Y MUERTE SÚBITA POR INHIBICIÓN DE CYP3A4. ASOCIADA A ESTENOSIS HIPERTRÓFICA DEL PÍLORO EN NEONATOS.',
      contraindications: [
        'Coadministración con derivados ergóticos, pimozida, astemizol o cisaprida',
        'Antecedentes de ictericia colestásica o hepatotoxicidad por eritromicina',
        'Prolongación del intervalo QT conocida'
      ],
      adverseEffects: {
        frequent: ['Dolor cólico abdominal intenso, náuseas, vómitos y diarrea (hasta en 30-40% por motilina)', 'Flebitis por vía IV'],
        moderate: ['Elevación de transaminasas e ictericia colestásica (estolato)'],
        severe: ['Ototoxicidad e hipoacusia neurosensorial transitoria con dosis altas IV', 'Torsades de pointes y parada cardíaca', 'Estenosis hipertrófica de píloro infantil']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro con precaución: Vigilar vómitos de estenosis pilórica en lactante.'
    },
    interactions: [
      { interactingDrug: 'Inhibidores e inductores de CYP3A4 y sustratos (Simvastatina, Carbamazepina, Ciclosporina)', severity: 'Grave', clinicalEffect: 'Potente inhibición de CYP3A4 que dispara los niveles plasmáticos de fármacos coadministrados provocando rabdomiólisis o neurotoxicidad.', recommendation: 'Suspender estatinas durante el tratamiento.' },
      { interactingDrug: 'Fármacos que prolongan el QT', severity: 'Grave', clinicalEffect: 'Arritmias ventriculares letales por bloqueo del canal hERG.', recommendation: 'Evitar combinación.' }
    ],
    monitoringParameters: ['Electrocardiograma (intervalo QTc)', 'Enzimas hepáticas', 'Función auditiva ante acúfenos'],
    storageConditions: 'Conservar por debajo de 25 °C en envase protegido de la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'claritromicina',
    genericName: 'Claritromicina',
    commercialNames: ['Klaricid', 'Biaxin', 'Klacid', 'Kofron'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de Claritromicina de 500 mg',
    atcCode: 'J01FA09',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Macrólido semisintético de 14 miembros con estabilidad ácida y metabolito activo',
    description: 'Derivado semisintético de la eritromicina obtenido por sustitución de un grupo metoxi en C-6. Esta modificación molecular le confiere estabilidad frente al ácido gástrico, excelente biodisponibilidad y mejor tolerancia digestiva, generando un metabolito hepático (14-hidroxi-claritromicina) con potente actividad antimicrobiana sinérgica.',
    presentations: [
      { id: 'cla-1', form: 'Comprimidos recubiertos y formulación de liberación prolongada (UD)', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 10, 14 y 20 comprimidos' },
      { id: 'cla-2', form: 'Polvo para suspensión oral', concentration: '125 mg / 5 mL y 250 mg / 5 mL', route: 'Oral', packaging: 'Frasco para reconstituir x 60 y 100 mL' },
      { id: 'cla-3', form: 'Polvo para infusión IV', concentration: '500 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 500 mg' }
    ],
    mechanismOfAction: {
      summary: 'Se une a la subunidad ribosómica 50S del microorganismo sensible, inhibiendo la síntesis proteica dependiente de ARN al impedir la translocación de cadenas peptídicas. Su metabolito 14-hidroxiclaritromicina es dos veces más potente frente a Haemophilus influenzae y actúa en sinergia con el fármaco original.',
      molecularTarget: 'Subunidad 50S ribosómica (sitio de unión en ARNr 23S)',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 55% (estable en medio ácido gástrico; no interferida por comida).',
        halfLife: 'Claritromicina: 3 a 5 horas; 14-hidroxiclaritromicina: 7 a 9 horas.',
        metabolism: 'Hepático extenso mediado por CYP3A4 a 14-hidroxiclaritromicina',
        elimination: 'Excreción mixta: 30-40% renal y el resto fecal/biliar'
      }
    },
    therapeuticIndications: [
      'Infecciones respiratorias: faringoamigdalitis, sinusitis aguda, neumonía adquirida en la comunidad típica y atípica',
      'Erradicación de Helicobacter pylori en regímenes combinados de úlcera péptica',
      'Infecciones por Mycobacterium avium complex (MAC) en pacientes inmunodeprimidos (VIH)',
      'Infecciones cutáneas leves a moderadas causadas por Staphylococcus o Streptococcus'
    ],
    posology: {
      adultStandard: 'Infección respiratoria estándar: 250 a 500 mg cada 12 horas por vía oral durante 7 a 14 días (o formulación UD: 500 a 1000 mg una vez al día con la comida). Erradicación de H. pylori: 500 mg cada 12 horas durante 14 días. Infección grave IV: 500 mg IV cada 12 horas en infusión de 60 min.',
      pediatricDose: 'Niños ≥6 meses: 7.5 mg/kg cada 12 horas (máximo 500 mg cada 12h) durante 7 a 10 días.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-60 mL/min: Reducir dosis en un 50% si se superan los 500 mg/día.',
        severe: 'ClCr <30 mL/min: Reducir la dosis a la mitad (250 mg una vez al día o cada 12h máximo); no utilizar la formulación de liberación prolongada UD.'
      },
      hepaticAdjustment: 'No suele requerir ajuste si la función renal es normal.',
      administrationNotes: 'LOS COMPRIMIDOS DE LIBERACIÓN PROLONGADA (UD) DEBEN TOMARSE OBLIGATORIAMENTE CON ALIMENTOS y tragarse enteros sin masticar. Potente inhibidor de CYP3A4: verificar interacciones con la medicación basal del paciente antes de prescribir.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PROLONGACIÓN DEL INTERVALO QT Y MUERTE CARDIOVASCULAR SÚBITA EN PACIENTES CON ENFERMEDAD CORONARIA PREVIA (ALERTA FDA CLARICOR). POTENTE INHIBIDOR DE CYP3A4.',
      contraindications: [
        'Prolongación congénita o documentada del intervalo QT o arritmias ventriculares',
        'Insuficiencia hepática grave combinada con insuficiencia renal',
        'Uso simultáneo con estatinas dependientes de CYP3A4 (lovastatina, simvastatina), colchicina en fallo renal o ergotamínicos'
      ],
      adverseEffects: {
        frequent: ['Disgeusia (sabor metálico o amargo muy marcado en la boca)', 'Náuseas, diarrea y dispepsia', 'Cefalea'],
        moderate: ['Elevación transitoria de transaminasas hepáticas', 'Insomnio y pesadillas'],
        severe: ['Prolongación del QT y torsades de pointes', 'Hepatitis colestásica o necrosis hepática fulminante', 'Colitis por C. difficile']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Precaución: Se excreta en leche humana; preferible azitromicina.'
    },
    interactions: [
      { interactingDrug: 'Colchicina', severity: 'Grave', clinicalEffect: 'Inhibición dual de CYP3A4 y glicoproteína P que causa intoxicación mortal por colchicina con fallo multiorgánico.', recommendation: 'CONTRAINDICADA absolutamente la asociación en ancianos o fallo renal.' },
      { interactingDrug: 'Estatinas (Simvastatina, Atorvastatina)', severity: 'Grave', clinicalEffect: 'Aumento masivo de niveles plasmáticos de estatinas con rabdomiólisis e insuficiencia renal aguda.', recommendation: 'Suspender la estatina durante la pauta con claritromicina.' },
      { interactingDrug: 'Anticoagulantes orales (Warfarina / DOACs)', severity: 'Grave', clinicalEffect: 'Aumento del efecto anticoagulante con riesgo hemorrágico.', recommendation: 'Monitorear estrechamente coagulación.' }
    ],
    monitoringParameters: ['Electrocardiograma en pacientes coronarios o polimedicados', 'Función renal para ajuste de dosis', 'Enzimas hepáticas'],
    storageConditions: 'Conservar por debajo de 30 °C. La suspensión reconstituida NO debe refrigerarse (se conserva a temperatura ambiente hasta 14 días).',
    updatedAt: '2026-03-30'
  },
  {
    id: 'azitromicina',
    genericName: 'Azitromicina Dihidrato',
    commercialNames: ['Zithromax', 'Zitromax', 'Vinzam', 'Toraseptol'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos orales de Azitromicina de 500 mg',
    atcCode: 'J01FA10',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Azálido semisintético de 15 miembros con extraordinaria penetración tisular y prolongada semivida',
    description: 'Antibiótico de la familia de los azálidos (subclase de macrólidos con un átomo de nitrógeno metil-sustituido en el anillo lactónico de 15 miembros). Presenta concentraciones tisulares e intracelulares hasta 50 veces superiores a las plasmáticas, acumulación selectiva en macrófagos y fagocitos que lo transportan al sitio de infección, y una prolongadísima semivida que permite ciclos cortos de 3 a 5 días.',
    presentations: [
      { id: 'azi-1', form: 'Comprimidos recubiertos', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 3 y 6 comprimidos' },
      { id: 'azi-2', form: 'Polvo para suspensión oral', concentration: '200 mg / 5 mL (40 mg/mL)', route: 'Oral', packaging: 'Frasco para reconstituir x 15, 30 y 60 mL' },
      { id: 'azi-3', form: 'Polvo para infusión IV', concentration: '500 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 500 mg' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose al dominio V del ARN ribosomal 23S en la subunidad 50S del ribosoma, bloqueando la transpeptidación y translocación de cadenas polipeptídicas. Se concentra masivamente en el citoplasma de neutrófilos, monocitos y macrófagos tisulares por atrapamiento iónico ácido, los cuales migran por quimiotaxis hacia el foco inflamatorio liberando el fármaco directamente sobre las bacterias invasoras.',
      molecularTarget: 'Subunidad 50S ribosómica y acumulación fagocitaria específica',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 37% (estable al ácido gástrico; alimentos no alteran comprimidos).',
        halfLife: 'Extremadamente prolongada: 68 a 72 horas en tejidos y fagocitos.',
        metabolism: 'Hepático mínimo (<10%) por desmetilación; NO inhibe el citocromo CYP3A4 de forma relevante',
        elimination: 'Excreción biliar y fecal masiva (>80%) como fármaco inalterado, solo 6-12% renal'
      }
    },
    therapeuticIndications: [
      'Infecciones genitales no complicadas por Chlamydia trachomatis (uretritis y cervicitis)',
      'Neumonía adquirida en la comunidad por patógenos atípicos (Mycoplasma, Legionella, Chlamydia pneumoniae)',
      'Exacerbación aguda bacteriana de EPOC y profilaxis antiinflamatoria en bronquiectasias',
      'Faringitis estreptocócica en pacientes alérgicos a betalactámicos',
      'Profilaxis y tratamiento de infección diseminada por Mycobacterium avium complex (MAC)',
      'Diarrea del viajero y shigelosis'
    ],
    posology: {
      adultStandard: 'Infección respiratoria estándar: 500 mg una vez al día durante 3 días consecutivos (dosis total 1.5 g) o 500 mg el día 1 seguido de 250 mg una vez al día los días 2 a 5. Uretritis/Cervicitis por Chlamydia: 1 g vía oral en dosis única. Infección grave IV: 500 mg IV una vez al día en infusión de al menos 60 minutos.',
      pediatricDose: 'Niños ≥6 meses: 10 mg/kg una vez al día durante 3 días (o 10 mg/kg el día 1 seguido de 5 mg/kg/día los días 2-5).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <10 mL/min: Usar con precaución; la exposición plasmática aumenta un 33%.'
      },
      hepaticAdjustment: 'Usar con precaución en insuficiencia hepática grave ya que la vía biliar es la ruta principal de eliminación.',
      administrationNotes: 'Puede tomarse con o sin alimentos (aunque la suspensión pediátrica se tolera mejor con comida). Los antiácidos que contienen hidróxido de aluminio y magnesio disminuyen el pico sérico en un 25% (separar tomas 2 horas).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PROLONGACIÓN DEL INTERVALO QT, TORSADES DE POINTES Y PARADA CARDÍACA FATAL, PARTICULARMENTE EN PACIENTES CON FACTORES DE RIESGO ARRÍTMICO CONOCIDOS O ANCIANOS.',
      contraindications: [
        'Hipersensibilidad a azitromicina, eritromicina o cualquier macrólido/azálido',
        'Antecedentes documentados de ictericia colestásica o disfunción hepática asociada previamente al fármaco'
      ],
      adverseEffects: {
        frequent: ['Diarrea acuosa y retortijones abdominales', 'Náuseas y flatulencia'],
        moderate: ['Cefalea y mareo', 'Erupción cutánea eritematosa'],
        severe: ['Prolongación del intervalo QTc y muerte cardíaca súbita', 'Ictericia colestásica y hepatitis fulminante', 'Colitis por C. difficile']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; bajas concentraciones en leche materna sin efectos adversos graves descritos.'
    },
    interactions: [
      { interactingDrug: 'Fármacos que prolongan el intervalo QT (Amiodarona, Sotalol, Citalopram, Hidroxicloroquina)', severity: 'Grave', clinicalEffect: 'Efecto proarrítmico sinérgico sobre el intervalo QT con torsades de pointes mortales.', recommendation: 'Evitar la combinación o monitoreo electrocardiográfico riguroso.' },
      { interactingDrug: 'Digoxina', severity: 'Moderada', clinicalEffect: 'Aumento de niveles séricos de digoxina por inhibición de la glicoproteína P intestinal.', recommendation: 'Controlar niveles de digoxina.' }
    ],
    monitoringParameters: ['Electrocardiograma en pacientes con cardiopatía o factores de riesgo de QT largo', 'Función hepática en pautas prolongadas'],
    storageConditions: 'Conservar por debajo de 30 °C. La suspensión reconstituida se conserva a temperatura ambiente durante un máximo de 10 días.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // TETRACICLINAS: OXITETRACICLINA, TETRACICLINA, DOXICICLINA, MINOCICLINA
  // ----------------------------------------------------
  {
    id: 'oxitetraciclina',
    genericName: 'Oxitetraciclina Clorhidrato',
    commercialNames: ['Terramicina', 'Oxitetra', 'Terramicina Oftálmica'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y pomada tópica de Oxitetraciclina',
    atcCode: 'J01AA06',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Tetraciclina natural de primera generación y acción corta',
    description: 'Antibiótico bacteriostático natural de amplio espectro producido por Streptomyces rimosus. Pertenece a la primera generación de tetraciclinas de acción corta e hidrofilia elevada, con alta afinidad por quelar iones de calcio en huesos y esmalte dentario en desarrollo.',
    presentations: [
      { id: 'oxi-1', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 16 y 24 cápsulas' },
      { id: 'oxi-2', form: 'Pomada dérmica y oftálmica al 1%', concentration: '10 mg/g', route: 'Tópica / Oftálmica', packaging: 'Tubo x 15 g y 3.5 g' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose de forma reversible a la subunidad ribosómica 30S, bloqueando el acceso del aminoacil-ARNt al sitio aceptor (A) del complejo ribosoma-ARNm.',
      molecularTarget: 'Subunidad 30S del ribosoma bacteriano',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 60-80% en ayunas; fuertemente quelada e inactivada por leche y alimentos lácteos.',
        halfLife: 'Corta: 6 a 9 horas.',
        metabolism: 'No se metaboliza en grado apreciable',
        elimination: 'Excreción renal y fecal balanceada (70% orina como fármaco inalterado)'
      }
    },
    therapeuticIndications: [
      'Infecciones cutáneas y oculares superficiales (pomada tópica/oftálmica)',
      'Infecciones por Rickettsias, Chlamydia y Brucella cuando no se dispone de doxiciclina'
    ],
    posology: {
      adultStandard: 'Oral: 250 mg a 500 mg cada 6 horas en ayunas (1 hora antes o 2 horas después de las comidas). Tópica: aplicar en capa fina sobre la lesión 2 a 3 veces al día.',
      pediatricDose: 'CONTRAINDICADA EN NIÑOS MENORES DE 8 AÑOS.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Reducir dosis o espaciar a cada 12 horas.',
        severe: 'CONTRAINDICADA en fallo renal (provoca uremia prerrenal por efecto antianabólico proteico).'
      },
      hepaticAdjustment: 'Usar con precaución.',
      administrationNotes: 'PROHIBIDA EN MENORES DE 8 AÑOS Y EMBARAZADAS: se deposita en el tejido óseo y causa hipoplasia del esmalte dental con coloración marrón-grisácea irreversible permanente en los dientes definitivos.'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADA EN MENORES DE 8 AÑOS Y EN EL EMBARAZO POR HIPOPLASIA DENTAL, COLORACIÓN DENTARIA PARDA PERMANENTE Y DETENCIÓN TRANSITORIA DEL CRECIMIENTO ÓSEO.',
      contraindications: [
        'Niños menores de 8 años de edad',
        'Segundo y tercer trimestre del embarazo y lactancia',
        'Insuficiencia renal moderada a grave',
        'Hipersensibilidad a tetraciclinas'
      ],
      adverseEffects: {
        frequent: ['Náuseas, vómitos y ardor epigástrico', 'Fotosensibilidad cutánea exagerada ante exposición solar'],
        moderate: ['Coloración amarillenta o parda permanente de los dientes en niños', 'Esofagitis ulcerativa por deglución sin agua'],
        severe: ['Hipertensión intracraneal idiopática (pseudotumor cerebri)', 'Hepatotoxicidad esteatósica en embarazadas']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado: Pasa a la leche materna y quelar calcio neonatal.'
    },
    interactions: [
      { interactingDrug: 'Lácteos, Calcio, Hierro, Antiácidos', severity: 'Grave', clinicalEffect: 'Formación de quelatos insolubles con pérdida total de absorción oral.', recommendation: 'Separar tomas al menos 3 horas.' }
    ],
    monitoringParameters: ['Descarte de embarazo', 'Protección solar'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'tetraciclina',
    genericName: 'Tetraciclina Clorhidrato',
    commercialNames: ['Tetraciclina MK', 'Ambramicina', 'Achromycin', 'Quimpe Antibiótico'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas orales de Tetraciclina de 500 mg',
    atcCode: 'J01AA07',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Tetraciclina sistémica natural bacteriostática de amplio espectro',
    description: 'Antibiótico natural arquetípico de amplio espectro de la clase de las tetraciclinas. Posee un núcleo policíclico carboxamida hidronaftaceno. Clásicamente utilizada en acné vulgar moderado a severo y en esquemas cuádruples de erradicación de Helicobacter pylori.',
    presentations: [
      { id: 'tetra-1', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 20 y 30 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Penetra pasivamente a través de las porinas de la membrana externa y activamente por transporte dependiente de energía en la membrana interna bacteriana. Se fija a la subunidad 30S ribosómica, estorbando estéricamente la entrada del aminoacil-ARNt y paralizando la síntesis proteica.',
      molecularTarget: 'Subunidad ribosómica 30S bacteriana',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 65-80% en ayuno estricto; los alimentos reducen la absorción en un 50% y los lácteos en más del 80%.',
        halfLife: 'Aproximadamente 8 a 11 horas.',
        metabolism: 'Mínimo hepático',
        elimination: 'Excreción renal 60% inalterada, resto fecal'
      }
    },
    therapeuticIndications: [
      'Acné vulgar inflamatorio moderado a severo (Propionibacterium/Cutibacterium acnes)',
      'Erradicación de Helicobacter pylori en esquemas cuádruples con bismuto',
      'Infecciones por espiroquetas, rickettsiosis y cólera (Vibrio cholerae)'
    ],
    posology: {
      adultStandard: 'Acné: 250 a 500 mg cada 12 horas en ayunas durante 8 a 12 semanas. Erradicación H. pylori (pauta con bismuto): 500 mg cada 6 horas durante 14 días. Infecciones generales: 500 mg cada 6 horas.',
      pediatricDose: 'CONTRAINDICADA EN MENORES DE 8 AÑOS.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Espaciar a cada 12-18 horas.',
        severe: 'ClCr <10 mL/min: CONTRAINDICADA por toxicidad urémica antianabólica.'
      },
      hepaticAdjustment: 'Usar con precaución.',
      administrationNotes: 'TOMAR SIEMPRE CON UN VASO GRANDE DE AGUA (250 ML) Y PERMANECER EN POSICIÓN ERGUIDA AL MENOS 30 MINUTOS: las cápsulas retenidas en el esófago causan esofagitis química con úlceras esofágicas profundas.'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADA EN MENORES DE 8 AÑOS Y EMBARAZO POR HIPOPLASIA Y COLORACIÓN DENTAL PARDA PERMANENTE IRREVERSIBLE. RIESGO DE ÚLCERAS ESOFÁGICAS POR INGESTIÓN SIN AGUA.',
      contraindications: [
        'Embarazo y lactancia',
        'Niños menores de 8 años',
        'Insuficiencia renal moderada a grave',
        'Hipersensibilidad a tetraciclinas'
      ],
      adverseEffects: {
        frequent: ['Disfagia y dolor retroesternal por esofagitis química', 'Fotosensibilidad solar severa con eritema y quemaduras', 'Náuseas y malestar gástrico'],
        moderate: ['Decoloración dental en dientes en formación', 'Candidiasis oral o vaginal'],
        severe: ['Pseudotumor cerebri (hipertensión endocraneal benigna con edema de papila)', 'Esteatosis hepática microvesicular grave']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado: Pasa a la leche materna.'
    },
    interactions: [
      { interactingDrug: 'Lácteos, Calcio, Hierro, Magnesio, Bismuto', severity: 'Grave', clinicalEffect: 'Quelación en tubo digestivo con caída del 85% en la absorción del antibiótico.', recommendation: 'Separar las tomas al menos 2 a 3 horas.' },
      { interactingDrug: 'Retinoides orales (Isotretinoína)', severity: 'Grave', clinicalEffect: 'Riesgo sinérgico de hipertensión intracraneal benigna (pseudotumor cerebri) grave con riesgo de pérdida visual.', recommendation: 'Contraindicación absoluta de uso simultáneo.' }
    ],
    monitoringParameters: ['Descarte de embarazo', 'Aparición de cefalea visual pulsátil o esofagitis'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'doxiciclina',
    genericName: 'Doxiciclina Hiclato / Monohidrato',
    commercialNames: ['Vibramicina', 'Doxiclat', 'Proderma', 'Oracea', 'Doxiten'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y comprimidos de Doxiciclina de 100 mg',
    atcCode: 'J01AA02',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Tetraciclina semisintética de segunda generación, lipófila y acción prolongada',
    description: 'Tetraciclina semisintética de segunda generación de alta liposolubilidad y prolongada vida media. Posee una absorción oral casi completa que apenas es afectada por la comida, penetra de forma excelente en tejidos corporales y se elimina predominantemente por vía biliar e intestinal en forma de quelatos inactivos, haciéndola el fármaco de elección de su grupo en pacientes con insuficiencia renal.',
    presentations: [
      { id: 'dox-1', form: 'Cápsulas y comprimidos orales', concentration: '100 mg y 200 mg', route: 'Oral', packaging: 'Caja x 14, 20 y 30 unidades' },
      { id: 'dox-2', form: 'Polvo para infusión intravenosa', concentration: '100 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 100 mg' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana por unión reversible a la subunidad 30S del ribosoma, bloqueando la adición de nuevos aminoácidos a la cadena peptídica naciente. Ejerce además acciones no antibióticas antiinflamatorias al inhibir metaloproteinasas de matriz tisular (MMP) y citocinas proinflamatorias.',
      molecularTarget: 'Subunidad ribosómica 30S y metaloproteinasas de matriz (MMP-8 y MMP-9)',
      pharmacokinetics: {
        bioavailability: 'Oral superior al 90-95% (la presencia de alimentos convencionales reduce menos del 15% su absorción).',
        halfLife: 'Prolongada: 18 a 22 horas, permitiendo una toma cada 12 o 24 horas.',
        metabolism: 'Parcial hepático',
        elimination: 'Excreción fecal y biliar no renal (se excreta como quelato inerte por el epitelio intestinal), excretándose solo un 30% por vía renal'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea de la Enfermedad de Lyme (Borrelia burgdorferi) en todas sus fases iniciales',
      'Rickettsiosis (fiebre manchada de las Montañas Rocosas, tifus murino y epidémico)',
      'Infecciones genitales por Chlamydia trachomatis, Ureaplasma y Mycoplasma genitalium',
      'Neumonía adquirida en la comunidad atípica (Mycoplasma pneumoniae, Chlamydia pneumoniae)',
      'Brucelosis humana (asociada a rifampicina o gentamicina)',
      'Acné inflamatorio y rosácea papulopustulosa'
    ],
    posology: {
      adultStandard: 'Dosis estándar: 100 mg cada 12 horas el primer día, seguido de 100 mg una vez al día (o 100 mg cada 12h en infecciones severas) por vía oral durante 7 a 21 días. Enfermedad de Lyme / Rickettsiosis: 100 mg cada 12 horas por 14 a 21 días. Uretritis no gonocócica: 100 mg cada 12 horas por 7 días.',
      pediatricDose: 'Uso tradicionalmente restringido en <8 años; sin embargo, en Rickettsiosis (fiebre botonosa / fiebre de las Montañas Rocosas) la AAP la considera el fármaco de elección a 2.2 mg/kg cada 12 horas por su perfil salvador de vidas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'NO REQUIERE AJUSTE DE DOSIS (incluso en insuficiencia renal terminal o hemodiálisis debido a su vía de excreción intestinal).',
        severe: 'NO REQUIERE AJUSTE.'
      },
      hepaticAdjustment: 'Usar con precaución en hepatopatía avanzada.',
      administrationNotes: 'TOMAR CON UN VASO LLENO DE AGUA (200-250 ML) Y NO ACOSTARSE HASTA PASADOS AL MENOS 30 A 45 MINUTOS PARA EVITAR ULCERACIÓN ESOFÁGICA QUÍMICA AGUDA. Advertir fotosensibilidad: usar protector solar.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE ÚLCERAS ESOFÁGICAS GRAVES POR RETENCIÓN ESOFÁGICA. CONTRAINDICADA EN EMBARAZO TRAS LA SEMANA 16 POR RIESGO DE TINCIÓN DENTAL FETAL.',
      contraindications: [
        'Embarazo a partir de la semana 16 de gestación',
        'Hipersensibilidad alérgica a tetraciclinas'
      ],
      adverseEffects: {
        frequent: ['Náuseas y malestar epigástrico', 'Fotosensibilidad cutánea con quemaduras solares intensas', 'Diarrea leve'],
        moderate: ['Esofagitis y disfagia retroesternal', 'Candidiasis genital'],
        severe: ['Pseudotumor cerebri (hipertensión endocraneal idiopática)', 'Hepatotoxicidad infrecuente', 'Reacción de hipersensibilidad DRESS']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro en tandas cortas (<14 días): Los niveles en leche son bajos y el calcio lácteo quelar el fármaco impidiendo la absorción neonatal.'
    },
    interactions: [
      { interactingDrug: 'Isotretinoína y retinoides orales', severity: 'Grave', clinicalEffect: 'Aumento sinérgico del riesgo de hipertensión intracraneal benigna (pseudotumor cerebri).', recommendation: 'Contraindicada la administración concomitante.' },
      { interactingDrug: 'Hierro oral, Calcio y Magnesio', severity: 'Moderada', clinicalEffect: 'Quelación con reducción de la absorción de doxiciclina en un 30-45%.', recommendation: 'Separar tomas al menos 2 horas.' },
      { interactingDrug: 'Antiepilépticos inductores (Fenitoína, Carbamazepina, Fenobarbital)', severity: 'Moderada', clinicalEffect: 'Aceleran el metabolismo de la doxiciclina reduciendo su semivida a la mitad.', recommendation: 'Aumentar la dosis de doxiciclina a 100 mg cada 12 horas continuas.' }
    ],
    monitoringParameters: ['Descarte de embarazo', 'Aparición de cefalea pulsátil, alteraciones visuales o acúfenos', 'Fotosensibilidad'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz directa y humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'minociclina',
    genericName: 'Minociclina Clorhidrato',
    commercialNames: ['Minocin', 'Solodyn', 'Arestin', 'Sebomin'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas de Minociclina de 100 mg',
    atcCode: 'J01AA08',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Tetraciclina semisintética de máxima liposolubilidad y penetración en el SNC',
    description: 'Tetraciclina semisintética de segunda generación que ostenta la mayor liposolubilidad del grupo. Cruza eficazmente la barrera hematoencefálica y penetra de forma masiva en glándulas sebáceas, saliva y lágrimas. Es el tratamiento oral de referencia en acné vulgar recalcitrante, pero presenta una incidencia característica de efectos vestibulares y pigmentación cutánea tisular.',
    presentations: [
      { id: 'min-1', form: 'Cápsulas y comprimidos orales', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose reversiblemente a la subunidad 30S del ribosoma. Su elevada lipofilia le permite atravesar las paredes celulares ricas en lípidos de microorganismos como Cutibacterium acnes y penetrar los folículos pilosebáceos, reduciendo drásticamente la población bacteriana y los ácidos grasos libres proinflamatorios del sebo.',
      molecularTarget: 'Subunidad ribosómica 30S bacteriana y lípidos sebáceos',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente del 90-100% (absorción casi total no alterada significativamente por alimentos).',
        halfLife: 'Prolongada: 15 a 23 horas.',
        metabolism: 'Hepático moderado (50%) a metabolitos inactivos',
        elimination: 'Excreción fecal y biliar (60-70%) y renal (10-20%)'
      }
    },
    therapeuticIndications: [
      'Acné vulgar inflamatorio moderado a severo y foliculitis resistente',
      'Infecciones cutáneas por cepas de Staphylococcus aureus resistente a meticilina (SARM) adquiridas en la comunidad',
      'Infecciones de transmisión sexual (Chlamydia) cuando otras tetraciclinas no son viables',
      'Portadores asintomáticos de Neisseria meningitidis en nasofaringe (elimina el estado de portador)'
    ],
    posology: {
      adultStandard: 'Acné vulgar: 50 a 100 mg cada 12 horas vía oral o 100 mg una vez al día con abundante agua durante 6 a 12 semanas. Infección cutánea / SARM comunitario: 100 mg cada 12 horas.',
      pediatricDose: 'CONTRAINDICADA EN MENORES DE 8 AÑOS.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No suele requerir ajuste',
        severe: 'Reducir la dosis total a un máximo de 100 mg/día.'
      },
      hepaticAdjustment: 'Usar con precaución en hepatopatía por metabolización hepática parcial.',
      administrationNotes: 'Tomar con abundante agua para evitar esofagitis. Advertir sobre mareo vestibular y pigmentación gris-azulada en piel, encías, cicatrices o escleras en tratamientos crónicos superiores a varios meses.'
    },
    safety: {
      blackBoxWarning: 'ALTO RIESGO DE TOXICIDAD VESTIBULAR (VÉRTIGO, ATAXIA Y MAREO) Y DE TRASTORNOS AUTOINMUNES (LUPUS INDUCIDO POR MINOCICLINA Y HEPATITIS AUTOINMUNE). CONTRAINDICADA EN EMBARAZO.',
      contraindications: [
        'Embarazo y lactancia materna',
        'Niños menores de 8 años de edad',
        'Hipersensibilidad alérgica a tetraciclinas'
      ],
      adverseEffects: {
        frequent: ['Toxicidad vestibular: mareo, vértigo, ataxia y náuseas (especialmente en mujeres al inicio)', 'Hiperpigmentación cutánea azul-grisácea en cicatrices, encías y uñas en uso prolongado'],
        moderate: ['Fotosensibilidad cutánea', 'Esofagitis'],
        severe: ['Lupus eritematoso sistémico inducido por fármacos (anticuerpos antinucleares y antihistonas positivos)', 'Hepatitis autoinmune grave', 'Hipertensión endocraneal benigna (pseudotumor cerebri)']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado: Pasa a la leche materna.'
    },
    interactions: [
      { interactingDrug: 'Isotretinoína', severity: 'Grave', clinicalEffect: 'Riesgo sinérgico de pseudotumor cerebri con edema de papila y ceguera.', recommendation: 'Contraindicación absoluta de uso simultáneo.' },
      { interactingDrug: 'Antiácidos con cationes polivalentes', severity: 'Moderada', clinicalEffect: 'Disminución de la absorción oral por quelación.', recommendation: 'Separar tomas 2 horas.' }
    ],
    monitoringParameters: ['Función hepática y despistaje de síntomas lúpicos (artralgias, fiebre) en tratamientos >3 meses', 'Aparición de vértigo incapacitante', 'Inspección de pigmentación dérmica y mucosa'],
    storageConditions: 'Conservar por debajo de 25 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // CARBAPENEMES: IMIPENEM, MEROPENEM
  // ----------------------------------------------------
  {
    id: 'imipenem-cilastatina',
    genericName: 'Imipenem + Cilastatina Sódica',
    commercialNames: ['Tienam', 'Primaxin', 'Imipenem Kabi'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Vial de infusión de Imipenem con Cilastatina',
    atcCode: 'J01DH51',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Carbapenémico parenteral ultrarrápido asociado a inhibidor de deshidropeptidasa-I renal',
    description: 'Primer antibiótico betalactámico carbapenémico. Presenta un espectro antibacteriano ultrarrápido frente a grampositivos, gramnegativos aerobios y anaerobios productores de betalactamasas de espectro extendido (BLEE) y AmpC. Se coadministra en proporción 1:1 con cilastatina, un inhibidor específico de la enzima renal deshidropeptidasa-I que previene la degradación tubular del imipenem y evita la nefrotoxicidad.',
    presentations: [
      { id: 'imi-1', form: 'Polvo para infusión intravenosa', concentration: '500 mg Imipenem + 500 mg Cilastatina', route: 'Intravenosa con bomba', packaging: 'Frasco ampolla de infusión x 500 mg' }
    ],
    mechanismOfAction: {
      summary: 'El imipenem inhibe la síntesis de la pared bacteriana fijándose con alta afinidad a PBP-2 y PBP-1b en enterobacterias y PBP-2 en Pseudomonas, desencadenando la formación de esferoplastos y la lisis bacteriana rápida. La cilastatina no tiene actividad antibacteriana propia, pero inhibe competitivamente a la deshidropeptidasa renal (DHP-1) en el ribete en cepillo del túbulo contorneado proximal, bloqueando la degradación metabólica del imipenem en metabolitos nefrotóxicos inactivos.',
      molecularTarget: 'PBPs bacterianas (PBP-2 y PBP-1b) e inhibición enzimática de DHP-1 renal',
      pharmacokinetics: {
        bioavailability: 'Intravenosa: 100%.',
        halfLife: 'Aproximadamente 1 hora para ambos compuestos.',
        metabolism: 'El imipenem es hidrolizado en el riñón por DHP-1 (bloqueada por cilastatina); metabolismo sistémico menor',
        elimination: 'Excreción renal >70% de imipenem inalterado y cilastatina por filtración y secreción tubular'
      }
    },
    therapeuticIndications: [
      'Infecciones nosocomiales graves polimicrobianas y sepsis por enterobacterias productoras de BLEE',
      'Infecciones intraabdominales complicadas (peritonitis terciaria, abscesos)',
      'Neumonía nosocomial grave y asociada a ventilación mecánica',
      'Infecciones complicadas de piel, tejidos blandos y fascitis necrotizante',
      'Infecciones óseas complicadas y sepsis urinaria resistente'
    ],
    posology: {
      adultStandard: '500 mg (de imipenem) IV cada 6 horas o 1 g IV cada 8 horas administrado en infusión de al menos 40 a 60 minutos (dosis máxima en infecciones graves por Pseudomonas: 4 g/día).',
      pediatricDose: 'Niños ≥3 meses: 15 a 25 mg/kg cada 6 horas (máximo 2 a 4 g/día). CONTRAINDICADO EN MENINGITIS PEDIÁTRICA POR RIESGO DE CONVULSIONES.',
      renalAdjustment: {
        normal: 'ClCr >70 mL/min: 500 mg cada 6h o 1 g cada 8h.',
        moderate: 'ClCr 40-70 mL/min: 500 mg cada 8h; ClCr 20-40 mL/min: 500 mg cada 12h.',
        severe: 'ClCr <20 mL/min: 250 a 500 mg cada 12h (alto riesgo de neurotoxicidad convulsiva si no se ajusta rigurosamente).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'ALTO RIESGO CONVULSIVÓGENO: es el carbapenémico con mayor potencial epileptógeno (actúa como antagonista del receptor GABA-A en el SNC). La infusión rápida puede inducir náuseas súbitas e hipotensión; infundir siempre en 40-60 minutos.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE CRISIS CONVULSIVAS Y NEUROTOXICIDAD, ESPECIALMENTE EN PACIENTES CON LESIÓN DEL SNC, INSUFICIENCIA RENAL NO AJUSTADA O USO CON ÁCIDO VALPROICO.',
      contraindications: [
        'Hipersensibilidad a carbapenémicos o betalactámicos',
        'Coadministración simultánea con Ácido Valproico (causa descenso fulminante de los niveles de valproato)',
        'Meningitis del SNC (usar meropenem en su lugar por neurotoxicidad)'
      ],
      adverseEffects: {
        frequent: ['Náuseas y vómitos durante la infusión IV rápida', 'Diarrea y flebitis local'],
        moderate: ['Elevación transitoria de transaminasas', 'Exantema alérgico maculopapular'],
        severe: ['Convulsiones epileptiformes y mioclonías (hasta en 1.5-3% de casos)', 'Encefalopatía urémico-tóxica', 'Colitis por C. difficile']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Precaución: Compatible con precaución; se excreta en cantidades bajas en leche humana.'
    },
    interactions: [
      { interactingDrug: 'Ácido Valproico / Divalproato de Sodio', severity: 'Grave', clinicalEffect: 'Descenso fulminante e irreversible de los niveles séricos de ácido valproico en 60-95% en pocas horas con crisis convulsivas incontrolables y estado epiléptico refractario mortal.', recommendation: 'CONTRAINDICACIÓN ABSOLUTA. La adición de valproato no compensa la caída; cambiar a meropenem/otro antibiótico o anticonvulsivo.' },
      { interactingDrug: 'Ganciclovir', severity: 'Grave', clinicalEffect: 'Aumento sinérgico masivo del riesgo de convulsiones generalizadas.', recommendation: 'Evitar la combinación a menos que sea imprescindible.' }
    ],
    monitoringParameters: ['Función renal diaria (ClCr) para ajuste inmediato', 'Vigilancia de signos neurológicos prodrómicos (temblor, mioclonías)', 'Niveles séricos de anticonvulsivos'],
    storageConditions: 'Conservar por debajo de 25 °C. Solución reconstituida: usar en un plazo de 4 horas.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'meropenem',
    genericName: 'Meropenem Trihidrato',
    commercialNames: ['Meronem', 'Merrem', 'Meropenem Hospira', 'Kabi Meropenem'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco ampolla de Meropenem en polvo para solución inyectable',
    atcCode: 'J01DH02',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Carbapenémico parenteral de ultrarrápido espectro estable a la DHP-1 renal y seguro en SNC',
    description: 'Carbapenémico semisintético parenteral de segunda generación. Posee un grupo 1-beta-metilo en su estructura que lo hace intrínsecamente estable frente a la hidrólisis por la deshidropeptidasa-I renal (no requiere cilastatina) y una cadena lateral con menor afinidad por receptores GABA del SNC, confiriéndole un riesgo convulsivógeno drásticamente inferior que permite su uso en infecciones del sistema nervioso central como la meningitis bacteriana.',
    presentations: [
      { id: 'mero-1', form: 'Polvo para solución inyectable o infusión IV', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Frasco ampolla de 500 mg y 1 g' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared bacteriana uniéndose selectivamente a las PBPs (con altísima afinidad por PBP-2, PBP-3 y PBP-4 en gramnegativos y PBP-1 y PBP-2 en grampositivos). Penetra velozmente por las porinas OprD de Pseudomonas aeruginosa y resiste la degradación por casi todas las serino-betalactamasas (AmpC, BLEE y carbapenemasas OXA-48). Su estabilidad frente a DHP-1 renal se debe al impedimento estérico que genera su grupo metilo en posición C-1.',
      molecularTarget: 'PBPs bacterianas de alta afinidad (PBP-2 y PBP-3)',
      pharmacokinetics: {
        bioavailability: 'Intravenosa: 100%. Excelente difusión al líquido cefalorraquídeo en meninges inflamadas.',
        halfLife: 'Aproximadamente 1 hora.',
        metabolism: 'Mínimo hepático (hidrólisis del anillo betalactámico a metabolito inactivo ICI-213,689 en un 25%)',
        elimination: 'Excreción renal masiva (70% inalterado) por filtración glomerular y secreción tubular'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea de la meningitis bacteriana nosocomial o comunitaria y absceso cerebral',
      'Sepsis y choque séptico nosocomial refractario por bacterias productoras de BLEE o multirresistentes',
      'Neutropenia febril de alto riesgo en pacientes oncohematológicos',
      'Infecciones intraabdominales complicadas graves y fascitis necrotizante',
      'Infecciones broncopulmonares en fibrosis quística por Pseudomonas multirresistente'
    ],
    posology: {
      adultStandard: 'Infección nosocomial grave / Sepsis: 1 g IV cada 8 horas administrado en infusión de 30 minutos o infusión extendida de 3 a 4 horas (la infusión extendida optimiza el parámetro farmacodinámico T > CMI). Meningitis bacteriana / Fibrosis quística: 2 g IV cada 8 horas. Neutropenia febril: 1 g IV cada 8 horas.',
      pediatricDose: 'Niños ≥3 meses: 10 a 20 mg/kg cada 8 horas; Meningitis pediátrica: 40 mg/kg cada 8 horas (máximo 2 g cada 8h).',
      renalAdjustment: {
        normal: 'ClCr >50 mL/min: Dosis completa estándar.',
        moderate: 'ClCr 26-50 mL/min: 1 g cada 12 horas; ClCr 10-25 mL/min: 500 mg cada 12 horas.',
        severe: 'ClCr <10 mL/min: 500 mg cada 24 horas; Hemodiálisis: administrar dosis post-diálisis.'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'LA INFUSIÓN EXTENDIDA (3 HORAS) O CONTINUA MAXIMIZA LA SUPERVIVENCIA EN CHOQUE SÉPTICO al mantener los niveles plasmáticos por encima de la CMI durante el 100% del intervalo posológico. Reconstituir con agua bidestilada estéril o suero salino al 0.9%.'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADO EL USO SIMULTÁNEO CON ÁCIDO VALPROICO POR RIESGO DE DISMINUCIÓN DRÁSTICA DE VALPROEMIA CON CRISIS CONVULSIVAS REFRACTARIAS GRAVES.',
      contraindications: [
        'Hipersensibilidad confirmada a meropenem u otros carbapenémicos',
        'Coadministración con ácido valproico/divalproato sódico'
      ],
      adverseEffects: {
        frequent: ['Diarrea y náuseas', 'Cefalea leve', 'Trombocitosis transitoria'],
        moderate: ['Elevación de transaminasas y fosfatasa alcalina', 'Exantema y prurito'],
        severe: ['Convulsiones (mucho menos frecuente que con imipenem, <0.4%)', 'Colitis pseudomembranosa por C. difficile', 'Shock anafiláctico']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; paso a leche insignificante.'
    },
    interactions: [
      { interactingDrug: 'Ácido Valproico', severity: 'Grave', clinicalEffect: 'Inhibe la acilpéptido hidrolasa e incrementa la glucuronidación de valproato reduciendo los niveles séricos de ácido valproico en más del 80% en 24h, precipitando convulsiones letales.', recommendation: 'CONTRAINDICADA la asociación; sustituir por otro antibiótico u otro anticomicial.' },
      { interactingDrug: 'Probenecid', severity: 'Moderada', clinicalEffect: 'Inhibe la secreción tubular renal de meropenem prolongando su semivida en un 38%.', recommendation: 'No se recomienda su uso conjunto.' }
    ],
    monitoringParameters: ['Creatinina y aclaramiento renal para ajuste estricto', 'Hemograma y recuento plaquetario', 'Descarte de colonización o sobreinfección por hongos o C. difficile'],
    storageConditions: 'Conservar por debajo de 30 °C. Reconstituido en suero salino: usar en un plazo de 3 horas a temperatura ambiente o 24 horas refrigerado.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // AMINOGLUCÓSIDOS: GENTAMICINA, AMIKACINA, NETILMICINA, TOBRAMICINA
  // ----------------------------------------------------
  {
    id: 'gentamicina',
    genericName: 'Gentamicina Sulfato',
    commercialNames: ['Genta-Gobens', 'Gentamicina Braun', 'Garamycin', 'Gentisul'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas inyectables de Gentamicina de 80 mg / 2 mL',
    atcCode: 'J01GB03',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Aminoglucósido bactericida de espectro gramnegativo con efecto postantibiótico prolongado',
    description: 'Aminoglucósido bactericida rápido de amplio uso clínico obtenido de Micromonospora purpurea. Presenta un efecto bactericida concentración-dependiente y un marcado efecto postantibiótico (PAE). Fármaco clave en pauta de dosis única diaria para sepsis grave por enterobacterias y en sinergia con betalactámicos en endocarditis bacteriana.',
    presentations: [
      { id: 'gen-1', form: 'Solución inyectable IV / IM', concentration: '20 mg/2 mL, 40 mg/2 mL, 80 mg/2 mL y 240 mg/3 mL', route: 'Intravenosa / Intramuscular', packaging: 'Ampollas de 2 mL y viales de 80 y 240 mg' },
      { id: 'gen-2', form: 'Colirio oftálmico al 0.3%', concentration: '3 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Penetra a través de la membrana externa por difusión facilitada por porinas y atraviesa la membrana citoplasmática mediante un proceso de transporte activo dependiente de oxígeno y gradiente electroquímico (por lo que es INEFICAZ EN CONDICIONES ANAERÓBICAS O TEJIDO ABSCEDADO ÁCIDO). Se une irreversiblemente a la subunidad ribosómica 30S bacteriana (proteína S12 y ARNr 16S), induciendo una lectura errónea del código del ARNm e incorporando aminoácidos incorrectos que forman proteínas anómalas letales para la membrana celular.',
      molecularTarget: 'Subunidad ribosómica 30S (ARN ribosomal 16S)',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente nula (<1%). IM e IV: 100%. Mínima unión a proteínas (<10%).',
        halfLife: 'Aproximadamente 2 a 3 horas en adultos con función renal normal (prolongada a 30-50 horas en anuria).',
        metabolism: 'No se metaboliza en el organismo',
        elimination: 'Excreción renal masiva (>90% inalterado) casi exclusiva por filtración glomerular, acumulándose en la corteza renal'
      }
    },
    therapeuticIndications: [
      'Tratamiento empírico de choque en sepsis grave y bacteriemia por enterobacterias gramnegativas',
      'Infecciones urinarias complicadas y urosepsis aguda grave',
      'Sinergia bactericida combinada con ampicilina o vancomicina en endocarditis infecciosa por Enterococcus o Streptococcus viridans',
      'Infecciones intraabdominales graves y peritonitis (en combinación con antianaeróbicos)',
      'Conjuntivitis bacteriana grave (colirio tópico)'
    ],
    posology: {
      adultStandard: 'Pauta de dosis única diaria extendida (de elección): 5 a 7 mg/kg IV en infusión de 30 a 60 minutos cada 24 horas (alcanza picos bactericidas más altos y valles protectores más bajos, reduciendo la nefrotoxicidad). Pauta fraccionada tradicional: 1 a 1.7 mg/kg cada 8 horas. Sinergia en endocarditis: 1 mg/kg cada 8 horas o 3 mg/kg cada 24 horas.',
      pediatricDose: 'Neonatos: 4 a 5 mg/kg cada 24 a 36 horas según edad gestacional. Niños mayores: 6 a 7.5 mg/kg una vez al día.',
      renalAdjustment: {
        normal: 'ClCr >60 mL/min: Pauta completa cada 24 horas.',
        moderate: 'ClCr 40-60 mL/min: Administrar dosis cada 36 horas; ClCr 20-40 mL/min: Administrar cada 48 horas.',
        severe: 'ClCr <20 mL/min: Monitorizar niveles plasmáticos (pico y valle); redosificar solo cuando el nivel valle caiga <1 mcg/mL.'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'MONITORIZAR NIVELES PLASMÁTICOS PICO Y VALLE: el nivel valle (tomado justo antes de la siguiente dosis) debe ser estrictamente <1 mcg/mL (<0.5 mcg/mL en dosis única diaria) para prevenir la necrosis tubular aguda y ototoxicidad irreversible. Mantener al paciente perfectamente hidratado.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE NEFROTOXICIDAD (NECROSIS TUBULAR AGUDA) Y OTOTOXICIDAD IRREVERSIBLE VESTIBULAR Y AUDITIVA. PUEDE CAUSAR BLOQUEO NEUROMUSCULAR Y PARADA RESPIRATORIA CON ANESTÉSICOS O EN MIASTENIA GRAVIS.',
      contraindications: [
        'Hipersensibilidad alérgica demostrada a aminoglucósidos',
        'Miastenia gravis (riesgo de crisis miasténica y paro respiratorio por inhibición presináptica de acetilcolina)',
        'Insuficiencia renal preexistente no monitorizada'
      ],
      adverseEffects: {
        frequent: ['Aumento transitorio de creatinina sérica y proteinuria leve', 'Cilindruria'],
        moderate: ['Vértigo vestibular, mareo, náuseas y ataxia (lesión de crestas ampollares)', 'Acúfenos'],
        severe: ['Necrosis tubular aguda oligúrica e insuficiencia renal aguda', 'Sordera neurosensorial bilateral permanente (destrucción de células ciliadas del órgano de Corti)', 'Bloqueo neuromuscular agudo con apnea']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro con precaución: Se excreta en leche en cantidades mínimas no absorbibles por el lactante.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos de asa (Furosemida IV)', severity: 'Grave', clinicalEffect: 'Aumento sinérgico masivo del riesgo de ototoxicidad irreversible y nefrotoxicidad.', recommendation: 'Evitar el uso conjunto; si es imprescindible, distanciar las dosis.' },
      { interactingDrug: 'Fármacos nefrotóxicos (Vancomicina, Cisplatino, Ciclosporina)', severity: 'Grave', clinicalEffect: 'Potenciación aditiva de necrosis tubular aguda.', recommendation: 'Monitorear niveles séricos de ambos fármacos y creatinina diaria.' },
      { interactingDrug: 'Relajantes musculares no despolarizantes (Rocuronio, Vecuronio)', severity: 'Grave', clinicalEffect: 'Prolongación severa del bloqueo neuromuscular con parálisis respiratoria postanestésica prolongada.', recommendation: 'Administrar gluconato cálcico o neostigmina para revertir si ocurre.' }
    ],
    monitoringParameters: ['Niveles séricos de gentamicina: Valle (<1 mcg/mL) y Pico (16-24 mcg/mL en monodosis)', 'Creatinina sérica y diuresis horaria', 'Evaluación auditiva y equilibrio'],
    storageConditions: 'Conservar entre 15 °C y 30 °C. No congelar.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'amikacina',
    genericName: 'Amikacina Sulfato',
    commercialNames: ['Biclin', 'Amikin', 'Amikacina Kabi', 'Kanbina'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Vial inyectable de Amikacina de 500 mg / 2 mL',
    atcCode: 'J01GB06',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Aminoglucósido semisintético derivado de kanamicina resistente a enzimas bacterianas inactivadoras',
    description: 'Aminoglucósido semisintético obtenido por acilación de la kanamicina A. Su cadena lateral L-hidroxiaminobutirilo bloquea estéricamente a la gran mayoría de las enzimas bacterianas modificadoras de aminoglucósidos (acetilasas, nucleotidilasas y fosfotransferasas), convirtiéndola en el aminoglucósido más resistente y de mayor cobertura frente a bacilos gramnegativos multirresistentes y Mycobacterium tuberculosis.',
    presentations: [
      { id: 'ami-1', form: 'Solución inyectable IV / IM', concentration: '250 mg/2 mL, 500 mg/2 mL y 1000 mg/4 mL', route: 'Intravenosa / Intramuscular', packaging: 'Frasco ampolla de 2 mL y 4 mL' }
    ],
    mechanismOfAction: {
      summary: 'Se une a la subunidad ribosómica 30S bacteriana alterando el reconocimiento del codón en el ARNm, induciendo proteínas anómalas que desorganizan la permeabilidad de la membrana bacteriana y causando muerte bacteriana rápida concentración-dependiente.',
      molecularTarget: 'Subunidad 30S del ribosoma bacteriano y resistencia por impedimento estérico',
      pharmacokinetics: {
        bioavailability: 'Intravenosa e Intramuscular: 100%. Oral nula.',
        halfLife: 'Aproximadamente 2 a 3 horas en normofunción renal.',
        metabolism: 'No se metaboliza',
        elimination: 'Excreción renal >94% inalterada en las primeras 24 horas por filtración glomerular'
      }
    },
    therapeuticIndications: [
      'Infecciones nosocomiales graves por bacilos gramnegativos multirresistentes (Pseudomonas aeruginosa, Acinetobacter baumannii, Enterobacterias BLEE)',
      'Tratamiento de rescate en sepsis grave y neumonía nosocomial asociada a ventilación',
      'Tuberculosis multirresistente (TB-MDR) como agente inyectable de segunda línea',
      'Infecciones graves por micobacterias no tuberculosas (Mycobacterium avium complex)'
    ],
    posology: {
      adultStandard: 'Dosis única extendida (preferida): 15 mg/kg IV en infusión de 30 a 60 minutos una vez al día (máximo 1.5 g/día). Dosis fraccionada: 7.5 mg/kg cada 12 horas. Tuberculosis MDR: 15 mg/kg/día IM o IV 3 a 5 veces por semana.',
      pediatricDose: 'Neonatos: 15 mg/kg cada 24-36h. Niños: 15 a 20 mg/kg una vez al día.',
      renalAdjustment: {
        normal: 'ClCr >60 mL/min: 15 mg/kg cada 24 horas.',
        moderate: 'ClCr 40-60 mL/min: 15 mg/kg cada 36 horas; ClCr 20-40 mL/min: 15 mg/kg cada 48 horas.',
        severe: 'ClCr <20 mL/min: Dosificar según niveles plasmáticos valle (mantener valle <4-5 mcg/mL antes de reinyectar).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'CONTROLAR NIVELES SÉRICOS: en dosis única diaria el nivel valle debe ser <4-5 mcg/mL y el pico deseable entre 55 y 65 mcg/mL. Mantener una hidratación intravenosa abundante para disminuir la fijación cortical renal.'
    },
    safety: {
      blackBoxWarning: 'RIESGO GRAVE DE OTOTOXICIDAD COCLEAR BILATERAL IRREVERSIBLE CON SORDERA PERMANENTE Y NEFROTOXICIDAD TUBULAR AGUDA. BLOQUEO NEUROMUSCULAR AGUDO.',
      contraindications: [
        'Hipersensibilidad a la amikacina u otros aminoglucósidos',
        'Miastenia gravis'
      ],
      adverseEffects: {
        frequent: ['Aumento de creatinina sérica y oliguria leve', 'Cilindros granulares en orina'],
        moderate: ['Tinnitus y acúfenos de alta frecuencia', 'Parestesias'],
        severe: ['Pérdida auditiva neurosensorial permanente para tonos altos que progresa a sordera completa', 'Fallo renal agudo que requiere hemodiálisis', 'Parálisis muscular respiratoria']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro con precaución: No se absorbe vía digestiva por el recién nacido.'
    },
    interactions: [
      { interactingDrug: 'Furosemida y Ácido Etacrínico', severity: 'Grave', clinicalEffect: 'Destrucción acelerada de las células ciliadas cocleares con sordera permanente.', recommendation: 'Evitar combinación simultánea.' },
      { interactingDrug: 'Anestésicos y Bloqueantes Neuromusculares', severity: 'Grave', clinicalEffect: 'Abolición de la transmisión neuromuscular con paro respiratorio prolongado.', recommendation: 'Tener disponible cloruro de calcio IV y ventilación mecánica.' }
    ],
    monitoringParameters: ['Niveles séricos valle (<4 mcg/mL) y pico (55-65 mcg/mL)', 'Creatinina sérica seriada diaria o cada 48h', 'Audiometría de control si el tratamiento supera los 7-10 días'],
    storageConditions: 'Conservar por debajo de 30 °C. No congelar.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'netilmicina',
    genericName: 'Netilmicina Sulfato',
    commercialNames: ['Netromicina', 'Netacin', 'Vectacin', 'Netildex (colirio)'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas inyectables de Netilmicina',
    atcCode: 'J01GB07',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Aminoglucósido semisintético de espectro bactericida con menor potencial ototóxico',
    description: 'Aminoglucósido semisintético derivado de la sisomicina mediante N-etilación en C-1. Esta modificación reduce su afinidad por las células ciliadas del oído interno y el epitelio tubular renal en modelos animales, ofreciendo una menor incidencia relativa de oto y nefrotoxicidad sin sacrificar potencia bactericida frente a enterobacterias.',
    presentations: [
      { id: 'net-1', form: 'Solución inyectable IV / IM', concentration: '50 mg/mL, 100 mg/mL y 150 mg/1.5 mL', route: 'Intravenosa / Intramuscular', packaging: 'Ampollas de 1.5 mL y 2 mL' },
      { id: 'net-2', form: 'Colirio oftálmico al 0.3%', concentration: '3 mg/mL', route: 'Oftálmica', packaging: 'Frasco de 5 mL y monodosis' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana por unión a la subunidad 30S ribosómica, alterando la decodificación del ARNm y comprometiendo la estabilidad de la envoltura bacteriana.',
      molecularTarget: 'Subunidad 30S del ribosoma bacteriano',
      pharmacokinetics: {
        bioavailability: 'Intravenosa e Intramuscular: 100%.',
        halfLife: 'Aproximadamente 2 a 2.5 horas.',
        metabolism: 'No se metaboliza',
        elimination: 'Excreción renal >85% inalterada por filtración glomerular'
      }
    },
    therapeuticIndications: [
      'Infecciones urinarias complicadas y pielonefritis por gramnegativos sensibles',
      'Sepsis grave y bacteriemia nosocomial',
      'Infecciones intraabdominales graves (en combinación con antianaeróbicos)',
      'Infecciones oftálmicas superficiales bacterianas (colirio)'
    ],
    posology: {
      adultStandard: 'Dosis única diaria: 4 a 6 mg/kg una vez al día en infusión IV de 30 a 60 minutos o IM profunda. Pauta fraccionada: 1.5 a 2 mg/kg cada 8 horas. Colirio: 1 a 2 gotas en ojo afectado cada 4 a 6 horas.',
      pediatricDose: 'Niños: 6 a 7.5 mg/kg una vez al día (o 2 a 2.5 mg/kg cada 8h).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: Administrar cada 36-48 horas.',
        severe: 'ClCr <30 mL/min: Dosificar según niveles plasmáticos valle (<2 mcg/mL).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'El nivel valle sérico previo a la siguiente inyección debe ser <2 mcg/mL (preferentemente <1 mcg/mL en dosis única diaria). Hidratar adecuadamente.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE NEFROTOXICIDAD Y OTOTOXICIDAD AUDITIVA Y VESTIBULAR. POTENCIAL BLOQUEO NEUROMUSCULAR.',
      contraindications: [
        'Hipersensibilidad a la netilmicina o aminoglucósidos',
        'Miastenia gravis'
      ],
      adverseEffects: {
        frequent: ['Aumento de creatinina sérica', 'Cilindros urinarios'],
        moderate: ['Mareo y vértigo transitorio', 'Acúfenos'],
        severe: ['Necrosis tubular aguda', 'Sordera neurosensorial bilateral permanente', 'Parálisis neuromuscular']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro en pautas habituales: Absorción intestinal nula en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos de asa (Furosemida)', severity: 'Grave', clinicalEffect: 'Aumento de ototoxicidad y daño coclear.', recommendation: 'Evitar el uso concomitante.' }
    ],
    monitoringParameters: ['Creatinina sérica diaria', 'Niveles séricos valle (<1-2 mcg/mL)', 'Control auditivo'],
    storageConditions: 'Conservar por debajo de 30 °C. No congelar.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'tobramicina',
    genericName: 'Tobramicina Sulfato',
    commercialNames: ['Tobrex (colirio)', 'Nebcin', 'TOBI (inhalada)', 'Bramitob'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Vial inyectable, colirio y solución para inhalación de Tobramicina',
    atcCode: 'J01GB01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Aminoglucósido bactericida de máxima potencia intrínseca antipseudomónica',
    description: 'Aminoglucósido producido por Streptomyces tenebrarius. Destaca por poseer una actividad bactericida intrínseca frente a Pseudomonas aeruginosa entre 2 y 4 veces más potente que la gentamicina. Es el fármaco de referencia formulado para inhalación continua en el control y erradicación de la colonización pulmonar crónica por Pseudomonas en pacientes con fibrosis quística.',
    presentations: [
      { id: 'tob-1', form: 'Solución inyectable IV / IM', concentration: '40 mg/mL (ampolla de 2 mL = 80 mg) y 100 mg/mL', route: 'Intravenosa / Intramuscular', packaging: 'Frasco ampolla de 2 mL' },
      { id: 'tob-2', form: 'Solución para inhalación por nebulizador', concentration: '300 mg / 5 mL', route: 'Inhalatoria por nebulizador', packaging: 'Ampollas de 5 mL (caja x 56 unidades)' },
      { id: 'tob-3', form: 'Colirio oftálmico estéril al 0.3%', concentration: '3 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose irreversiblemente a la subunidad 30S del ribosoma e interfiere con la integridad de la membrana citoplasmática externa de Pseudomonas aeruginosa.',
      molecularTarget: 'Subunidad ribosómica 30S en bacilos gramnegativos aerobios',
      pharmacokinetics: {
        bioavailability: 'Intravenosa e IM: 100%. Inhalada: biodisponibilidad sistémica muy baja (<10%), alcanzando concentraciones masivas en el esputo pulmonar (>1000 mcg/g). Oftálmica: acción local tópica.',
        halfLife: 'Sistémica: 2 a 3 horas en normofunción renal.',
        metabolism: 'No se metaboliza',
        elimination: 'Excreción renal >90% inalterada por filtración glomerular'
      }
    },
    therapeuticIndications: [
      'Tratamiento de mantenimiento de la infección pulmonar crónica por Pseudomonas aeruginosa en pacientes con fibrosis quística de 6 años o más (vía inhalatoria)',
      'Sepsis y bacteriemias graves por Pseudomonas aeruginosa (vía parenteral combinada con antipseudomónicos betalactámicos)',
      'Infecciones bacterianas superficiales del ojo y sus anejos: conjuntivitis, blefaritis, queratitis bacteriana (colirio al 0.3%)'
    ],
    posology: {
      adultStandard: 'Infección sistémica grave IV / IM: 5 a 7 mg/kg una vez al día en infusión de 30-60 minutos (o 1 a 1.7 mg/kg cada 8 horas). Fibrosis quística inhalada (TOBI): 300 mg nebulizados dos veces al día (cada 12 horas) durante ciclos de 28 días de tratamiento seguidos de 28 días de descanso. Colirio oftálmico: 1 a 2 gotas en ojo afectado cada 4 horas.',
      pediatricDose: 'Inhalatoria en FQ (≥6 años): 300 mg cada 12 horas en ciclos de 28 días. Parenteral pediátrica: 6 a 7.5 mg/kg una vez al día.',
      renalAdjustment: {
        normal: 'Dosis sistémica estándar',
        moderate: 'ClCr 30-50 mL/min: Espaciar dosis sistémica a cada 36-48 horas.',
        severe: 'ClCr <30 mL/min: Dosificar según niveles plasmáticos valle (<1 mcg/mL).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'LA SOLUCIÓN INHALADA DEBE NEBULIZARSE EXCLUSIVAMENTE CON DISPOSITIVOS APROBADOS (PARI LC PLUS) Y NUNCA INYECTARSE POR VÍA PARENTERAL. No mezclar con otros medicamentos en el nebulizador.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE NEFROTOXICIDAD TUBULAR Y OTOTOXICIDAD EN ADMINISTRACIÓN SISTÉMICA. RIESGO DE BRONCOESPASMO AGUDO PARADÓJICO CON LA FORMULACIÓN INHALADA.',
      contraindications: [
        'Hipersensibilidad a la tobramicina o aminoglucósidos',
        'Miastenia gravis'
      ],
      adverseEffects: {
        frequent: ['Disfonía, tos y faringitis (vía inhalada)', 'Aumento de creatinina (vía parenteral)'],
        moderate: ['Broncoespasmo agudo en asmáticos / FQ tras nebulización', 'Tinnitus y mareos'],
        severe: ['Ototoxicidad vestibular y coclear bilateral permanente', 'Necrosis tubular aguda con insuficiencia renal anúrica']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro: Vía inhalada u oftálmica no produce niveles plasmáticos detectables en la madre ni en la leche.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos de asa y otros nefrotóxicos', severity: 'Grave', clinicalEffect: 'Potenciación aditiva de ototoxicidad y fallo renal.', recommendation: 'Evitar asociación sistémica.' }
    ],
    monitoringParameters: ['Función pulmonar (FEV1) antes y después de la primera dosis inhalada', 'Creatinina sérica y niveles valle (<1-2 mcg/mL en parenteral)', 'Control audiológico'],
    storageConditions: 'Ampollas inhaladas: Conservar refrigeradas de 2 °C a 8 °C (hasta 28 días a temperatura ambiente <25 °C). Colirio y ampollas IV: <25 °C.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // BETALACTÁMICO INHIBITORIO & ANTIBIÓTICOS DIVERSOS
  // ----------------------------------------------------
  {
    id: 'amoxicilina-acido-clavulanico',
    genericName: 'Amoxicilina + Ácido Clavulánico (Clavulanato)',
    commercialNames: ['Augmentine', 'Clavulin', 'Amoxiclav', 'Curam'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y viales de Amoxicilina con Ácido Clavulánico',
    atcCode: 'J01CR02',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Combinación de aminopenicilina con inhibidor suicida de betalactamasas',
    description: 'Combinación sinérgica de amoxicilina con ácido clavulánico (derivado de Streptomyces clavuligerus). El ácido clavulánico actúa como inhibidor "suicida" irreversible de betalactamasas de clase A de Ambler (incluyendo penicilinasas de SASM, betalactamasas de H. influenzae, M. catarrhalis, E. coli y Bacteroides fragilis), restaurando y expandiendo el espectro de la amoxicilina.',
    presentations: [
      { id: 'amoxc-1', form: 'Comprimidos orales recubiertos', concentration: '500/125 mg y 875/125 mg (proporción 7:1)', route: 'Oral', packaging: 'Caja x 14, 20 y 30 comprimidos' },
      { id: 'amoxc-2', form: 'Comprimidos de liberación prolongada', concentration: '1000/62.5 mg (Augmentine Plus)', route: 'Oral', packaging: 'Caja x 28 comprimidos' },
      { id: 'amoxc-3', form: 'Polvo para suspensión oral', concentration: '250/62.5 mg / 5 mL y 400/57 mg / 5 mL (8:1)', route: 'Oral', packaging: 'Frasco para reconstituir x 70 y 120 mL' },
      { id: 'amoxc-4', form: 'Polvo para solución inyectable IV', concentration: '1000/200 mg y 2000/200 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 1.2 g y 2.2 g' }
    ],
    mechanismOfAction: {
      summary: 'La amoxicilina ejerce la acción bactericida por inhibición de la transpeptidación en la síntesis de pared. El ácido clavulánico tiene una estructura betalactámica muy similar que se une como falso sustrato al centro activo de las betalactamasas; tras ser hidrolizado, forma un enlace covalente irreversible con la serina del sitio catalítico de la enzima (inhibición suicida), inactivándola de forma permanente y protegiendo a la amoxicilina de su destrucción.',
      molecularTarget: 'Betalactamasas de clase A (penicilinasas y TEM/SHV) y PBPs bacterianas',
      pharmacokinetics: {
        bioavailability: 'Ambos componentes son bien absorbidos por vía oral (biodisponibilidad aprox. 70-80%); la absorción del clavulanato es máxima cuando se administra inmediatamente antes o al inicio de las comidas.',
        halfLife: 'Amoxicilina: 1 hora; Ácido clavulánico: 1 hora.',
        metabolism: 'El ácido clavulánico se metaboliza extensamente a nivel hepático (50%)',
        elimination: 'Amoxicilina: excreción renal 60-70%; Clavulanato: excreción renal 40% y degradación metabólica'
      }
    },
    therapeuticIndications: [
      'Infecciones del tracto respiratorio superior e inferior causadas por bacterias productoras de betalactamasas (sinusitis, OMA resistente, exacerbación de EPOC, NAC)',
      'Mordeduras humanas y animales (perro, gato - cobertura frente a Pasteurella multocida y anaerobios orales)',
      'Infecciones de piel y tejidos blandos: celulitis complicada, abscesos, pie diabético leve-moderado',
      'Infecciones intraabdominales leves a moderadas y ginecológicas',
      'Infecciones odontogénicas graves con flemón y celulitis facial'
    ],
    posology: {
      adultStandard: 'Infección estándar oral: 500/125 mg cada 8 horas o 875/125 mg cada 12 horas inmediatamente al inicio de las comidas principales durante 7 a 10 días. Infección severa oral: 875/125 mg cada 8 horas o 1000/62.5 mg cada 12h. Infección severa IV: 1000/200 mg cada 8 horas en infusión de 30-40 minutos.',
      pediatricDose: 'Niños: 40 a 50 mg/kg/día (basado en amoxicilina) en formulación 4:1 o 7:1 dividida cada 8 o 12 horas; Infecciones respiratorias graves por neumococo resistente: hasta 80-90 mg/kg/día con formulación 8:1 (para evitar sobredosis de ácido clavulánico que produce diarrea).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-30 mL/min: 500/125 mg cada 12 horas; NO usar la formulación 875/125 mg.',
        severe: 'ClCr <10 mL/min: 500/125 mg cada 24 horas.'
      },
      hepaticAdjustment: 'Vigilar estrechamente función hepática; contraindicado si existen antecedentes de hepatitis colestásica por clavulánico.',
      administrationNotes: 'ADMINISTRAR SIEMPRE AL COMIENZO DE UNA COMIDA: optimiza la absorción del clavulanato y minimiza drásticamente la intolerancia gastrointestinal y la diarrea osmótica provocada por el clavulánico no absorbido.'
    },
    safety: {
      blackBoxWarning: 'ALTO RIESGO DE HEPATOTOXICIDAD COLESTÁSICA INDUCIDA POR ÁCIDO CLAVULÁNICO (ICTERICIA, PRURITO Y ELEVACIÓN DE FOSFATASA ALCALINA QUE PUEDE MANIFESTARSE HASTA 6 SEMANAS TRAS SUSPENDER EL TRATAMIENTO).',
      contraindications: [
        'Hipersensibilidad alérgica a penicilinas y betalactámicos',
        'Antecedente documentado de ictericia colestásica o disfunción hepática ligada a amoxicilina/clavulánico previa'
      ],
      adverseEffects: {
        frequent: ['Diarrea (hasta en 15-25% por efecto motilina-símil y osmótico del ácido clavulánico)', 'Náuseas y vómitos', 'Candidiasis mucocutánea'],
        moderate: ['Erupción cutánea maculopapular alérgica', 'Urticaria'],
        severe: ['Hepatitis colestásica aguda con ictericia e insuficiencia hepática reversible', 'Shock anafiláctico', 'Colitis pseudomembranosa por C. difficile']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; puede producir heces blandas en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Metotrexato', severity: 'Grave', clinicalEffect: 'Disminución del aclaramiento renal con acumulación tóxica de metotrexato.', recommendation: 'Monitorear hemograma y niveles de metotrexato.' },
      { interactingDrug: 'Alopurinol', severity: 'Moderada', clinicalEffect: 'Aumento significativo en la tasa de exantemas alérgicos cutáneos.', recommendation: 'Evitar la asociación.' }
    ],
    monitoringParameters: ['Tolerancia digestiva (diarrea)', 'Enzimas hepáticas y bilirrubina si surge ictericia o prurito', 'Función renal'],
    storageConditions: 'Comprimidos: conservar en blíster antihumedad por debajo de 25 °C (el clavulánico es muy higroscópico). Suspensión reconstituida: en nevera (2-8 °C) por 7 días.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'trimetroprima-sulfametoxazol',
    genericName: 'Trimetoprima + Sulfametoxazol (Cotrimoxazol / TMP-SMX)',
    commercialNames: ['Bactrim', 'Septrin', 'Bactrimel', 'Soltrim'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos y ampollas de Trimetoprima Sulfametoxazol',
    atcCode: 'J01EE01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Combinación antimicrobiana sinérgica de inhibidores secuenciales de la síntesis del ácido fólico',
    description: 'Combinación fija a proporción 1:5 de dos antimetabolitos sintéticos (trimetoprima y sulfametoxazol). Actúan de forma sinérgica bloqueando dos etapas enzimáticas consecutivas esenciales de la síntesis bacteriana del ácido tetrahidrofólico, transformando dos agentes bacteriostáticos individuales en una combinación bactericida potente. Fármaco de primera línea insustituible para la neumonía por Pneumocystis jirovecii y nocardiosis.',
    presentations: [
      { id: 'cot-1', form: 'Comprimidos orales estándar', concentration: '80 mg TMP + 400 mg SMX', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos' },
      { id: 'cot-2', form: 'Comprimidos orales de doble potencia (Forte)', concentration: '160 mg TMP + 800 mg SMX', route: 'Oral', packaging: 'Caja x 10, 20 y 30 comprimidos' },
      { id: 'cot-3', form: 'Suspensión oral pediátrica', concentration: '40 mg TMP + 200 mg SMX / 5 mL', route: 'Oral', packaging: 'Frasco de 100 mL' },
      { id: 'cot-4', form: 'Solución para infusión IV', concentration: '80 mg TMP + 400 mg SMX / 5 mL', route: 'Intravenosa diluida', packaging: 'Ampollas de 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'El sulfametoxazol es un análogo estructural competitivo del ácido para-aminobenzoico (PABA) que inhibe la enzima dihidropteroato sintasa bacteriana, bloqueando la formación de ácido dihidrofólico. La trimetoprima inhibe de forma selectiva y potente la siguiente enzima de la vía, la dihidrofolato reductasa bacteriana (DHFR, con una afinidad 50.000 veces superior que sobre la enzima humana), impidiendo la reducción a ácido tetrahidrofólico activo. Esta inhibición dual en serie bloquea la síntesis de purinas, timidina, ARN, ADN y proteínas bacterianas.',
      molecularTarget: 'Dihidropteroato sintasa (SMX) y Dihidrofolato reductasa bacteriana (TMP)',
      pharmacokinetics: {
        bioavailability: 'Oral excelente (>90-100%). Penetración masiva en pulmón, riñón, próstata y LCR.',
        halfLife: 'Trimetoprima: 10 a 11 horas; Sulfametoxazol: 9 a 12 horas (cinética armónica).',
        metabolism: 'Hepático moderado por acetilación (SMX) y O-desmetilación (TMP)',
        elimination: 'Excreción predominantemente renal (>70% TMP y 50% SMX inalterados) por filtración y secreción tubular activa'
      }
    },
    therapeuticIndications: [
      'Tratamiento y profilaxis de la neumonía por Pneumocystis jirovecii (PJP/PCP) en pacientes inmunodeprimidos (VIH)',
      'Tratamiento de infecciones cutáneas y abscesos por Staphylococcus aureus resistente a meticilina (SARM) comunitario',
      'Infecciones del tracto urinario complicadas y prostatitis bacteriana crónica',
      'Nocardiosis sistémica y cerebral (fármaco de elección)',
      'Diarrea del viajero invasiva, shigelosis y profilaxis en granulomatosis con poliangeítis'
    ],
    posology: {
      adultStandard: 'Infección estándar / ITU / SARM cutáneo: 1 comprimido Forte (160/800 mg) vía oral cada 12 horas durante 7 a 14 días. Neumonía por Pneumocystis jirovecii (tratamiento agudo): 15 a 20 mg/kg/día (basado en TMP) IV o VO divididos cada 6 u 8 horas durante 21 días (con corticoides si PaO2 <70 mmHg). Profilaxis PJP en VIH (CD4 <200): 1 comprimido Forte una vez al día o 3 veces por semana.',
      pediatricDose: 'Niños ≥2 meses: 8 mg/kg TMP + 40 mg/kg SMX al día divididos cada 12 horas. CONTRAINDICADO EN MENORES DE 2 MESES.',
      renalAdjustment: {
        normal: 'ClCr >30 mL/min: Dosis completa estándar.',
        moderate: 'ClCr 15-30 mL/min: Reducir dosis al 50% (1 comprimido al día o espaciar cada 24 horas).',
        severe: 'ClCr <15 mL/min: NO SE RECOMIENDA salvo hemodiálisis con estrecho monitoreo (riesgo de cristaluria e hiperpotasemia fatal).'
      },
      hepaticAdjustment: 'Contraindicado en daño parenquimatoso hepático grave o ictericia.',
      administrationNotes: 'INGERIR CON ABUNDANTE LÍQUIDO (AL MENOS 1.5 A 2 LITROS AL DÍA EN ADULTOS) para prevenir la formación de cristales sulfonamídicos en los túbulos renales (cristaluria con hematuria e insuficiencia renal). CONTRAINDICADO EN MENORES DE 2 MESES POR RIESGO DE KERNICTERUS.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE REACCIONES DERMATOLÓGICAS GRAVES Y FATALES (SÍNDROME DE STEVENS-JOHNSON Y NECRÓLISIS EPIDÉRMICA TÓXICA), DISCRASIAS SANGUÍNEAS MORTALES (AGRANULOCITOSIS, APLASIA MEDULAR) E HIPERPOTASEMIA SEVERA.',
      contraindications: [
        'Lactantes menores de 6 semanas - 2 meses de vida (desplaza la bilirrubina de la albúmina causando kernicterus cerebral)',
        'Antecedentes de alergia a sulfamidas, sulfonilureas o diuréticos tiazídicos',
        'Anemia megaloblástica documentada por déficit de folato',
        'Insuficiencia hepática o renal severa no dializada',
        'Embarazo a término (riesgo de kernicterus en el neonato) y primer trimestre (teratogénesis por antifolato)'
      ],
      adverseEffects: {
        frequent: ['Náuseas, vómitos y anorexia', 'Erupción cutánea maculopapular pruriginosa', 'Hiperpotasemia (la trimetoprima actúa como amilorida bloqueando canales de sodio ENaC renales)'],
        moderate: ['Elevación de creatinina sérica (la trimetoprima compite por la secreción tubular de creatinina sin reducir necesariamente el filtrado real)', 'Fotosensibilidad cutánea'],
        severe: ['Síndrome de Stevens-Johnson (SSJ) y Necrólisis Epidérmica Tóxica (NET/Lyell)', 'Agranulocitosis, trombocitopenia severa y anemia aplásica', 'Necrosis hepática fulminante']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado en el primer mes de vida: Pasa a la leche materna con alto riesgo de inducir kernicterus e ictericia en neonatos.'
    },
    interactions: [
      { interactingDrug: 'Warfarina y Anticoagulantes orales', severity: 'Grave', clinicalEffect: 'Inhibe potentemente el CYP2C9 duplicando el tiempo de protrombina e INR con hemorragias masivas.', recommendation: 'Reducir la dosis de warfarina en 50% y monitorizar INR cada 48 horas.' },
      { interactingDrug: 'Metotrexato', severity: 'Grave', clinicalEffect: 'Desplaza al metotrexato de las proteínas plasmáticas y compite por su secreción renal causando toxicidad pancitopénica mortal.', recommendation: 'Evitar terminantemente la asociación.' },
      { interactingDrug: 'Inhibidores de la ECA, ARA-II y Espironolactona', severity: 'Grave', clinicalEffect: 'Aumento sinérgico crítico del potasio sérico con hiperpotasemia fatal y paro cardíaco.', recommendation: 'Monitorear ionograma sérico seriado.' }
    ],
    monitoringParameters: ['Potasio sérico (K+) y Creatinina sérica', 'Hemograma completo con recuento de plaquetas y leucocitos', 'Aparición inmediata de cualquier lesión eritematosa o ampollar en piel o mucosas (suspender de urgencia)'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'cloranfenicol',
    genericName: 'Cloranfenicol / Succinato de Cloranfenicol',
    commercialNames: ['Chloromycetin', 'Quemicetina', 'Cloranfenicol Poen', 'Paraxin'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco ampolla de Cloranfenicol polvo inyectable y colirio',
    atcCode: 'J01BA01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Antibiótico fenílico de amplio espectro e inhibidor de la peptidil-transferasa ribosómica',
    description: 'Antibiótico fenílico neutro de amplísimo espectro bacteriano y excelente penetración meníngea. Históricamente trascendental pero hoy restringido a infecciones graves con amenaza vital sin alternativas debido a su toxicidad medular impredecible (anemia aplásica idiopática mortal) y al síndrome del niño gris en neonatos.',
    presentations: [
      { id: 'clo-1', form: 'Polvo para solución inyectable IV (Succinato sódico)', concentration: '1 g', route: 'Intravenosa', packaging: 'Frasco ampolla con liofilizado' },
      { id: 'clo-2', form: 'Solución oftálmica estéril al 0.5%', concentration: '5 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL y 10 mL' },
      { id: 'clo-3', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 20 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Difunde a través de la membrana bacteriana y se une de manera reversible a la subunidad ribosómica 50S bacteriana en las inmediaciones del centro peptidil-transferasa. Bloquea la formación del enlace peptídico entre el aminoacil-ARNt y la cadena en crecimiento. Puede inhibir secundariamente la síntesis de proteínas mitocondriales en células eucariotas de mamíferos (en particular en precursores eritroides medulares) debido a la homología de los ribosomas mitocondriales 70S.',
      molecularTarget: 'Centro peptidil-transferasa de la subunidad 50S ribosómica',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 80-90%. IV (succinato) requiere hidrólisis plasmática a cloranfenicol libre (biodisponibilidad aprox. 70%). Difusión al LCR del 60-80% respecto al plasma.',
        halfLife: 'Adulto normofuncionante: 1.5 a 3.5 horas; Neonatos: 24 a 48 horas (inmadurez enzimática).',
        metabolism: 'Hepático masivo (90%) mediante glucuroniltransferasa a glucurónido de cloranfenicol inactivo',
        elimination: 'Excreción renal 80-90% (solo 10% fármaco libre activo)'
      }
    },
    therapeuticIndications: [
      'Meningitis bacteriana aguda refractaria o grave en pacientes con alergia mayor a betalactámicos',
      'Fiebre tifoidea y paratifoidea grave refractaria (Salmonella typhi)',
      'Infecciones graves por Rickettsias (tifus, fiebre manchada de las Montañas Rocosas) con contraindicación de tetraciclinas',
      'Absceso cerebral bacteriano anaeróbico',
      'Conjuntivitis bacteriana superficial (colirio oftálmico tópico)'
    ],
    posology: {
      adultStandard: 'Infección sistémica grave: 50 mg/kg/día vía intravenosa divididos en 4 tomas (12.5 mg/kg cada 6 horas); en infecciones del SNC por gérmenes moderadamente resistentes puede aumentarse temporalmente hasta 100 mg/kg/día bajo monitorización estricta. Colirio: 1 gota en ojo afectado cada 2-4 horas.',
      pediatricDose: 'Niños mayores: 50 mg/kg/día divididos cada 6 horas. Prematuros y recién nacidos <2 semanas: MÁXIMO 25 mg/kg/día cada 24 horas con monitorización obligatoria de niveles séricos.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste de la fracción activa libre (se acumula el metabolito glucurónido no tóxico).'
      },
      hepaticAdjustment: 'Reducir dosis a la mitad y monitorear niveles plasmáticos en cirrosis o insuficiencia hepática para prevenir acumulación tóxica.',
      administrationNotes: 'PROHIBIDO EL USO INDISCRIMINADO O EN INFECCIONES BANALES. Monitorizar hemograma completo cada 48 horas durante el tratamiento parenteral. Mantener niveles plasmáticos de cloranfenicol estrictamente entre 10 y 20 mcg/mL (niveles >25 mcg/mL desencadenan toxicidad mitocondrial medular y niveles >40-50 mcg/mL causan el síndrome del niño gris).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE ANEMIA APLÁSICA IDIOPÁTICA MORTAL IRREVERSIBLE NO DOSIS-DEPENDIENTE (1 EN 20.000 A 40.000 PACIENTES, QUE PUEDE MANIFESTARSE SEMANAS O MESES DESPUÉS DE FINALIZADO EL TRATAMIENTO). SÍNDROME DEL NIÑO GRIS MORTAL EN RECIÉN NACIDOS.',
      contraindications: [
        'Tratamiento de infecciones menores (resfriados, gripe, infecciones de garganta banales)',
        'Antecedentes de depresión medular o discrasias sanguíneas inducidas por cloranfenicol',
        'Recién nacidos y prematuros sin monitorización estricta de niveles plasmáticos',
        'Uso simultáneo con fármacos mielosupresores'
      ],
      adverseEffects: {
        frequent: ['Supresión medular dosis-dependiente reversible (anemia, reticulocitopenia, trombocitopenia leve)', 'Náuseas y vómitos', 'Sabor amargo en la boca'],
        moderate: ['Neuritis óptica y neuritis periférica en tratamientos prolongados', 'Candidiasis oral'],
        severe: ['Anemia aplásica idiopática irreversible fatal', 'Síndrome del Niño Gris en neonatos (distensión abdominal, vómitos, coloración gris cenicienta, cianosis, flacidez, hipotermia, colapso cardiovascular y muerte)', 'Agranulocitosis fulminante']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Pasa a la leche materna con alto riesgo de toxicidad medular en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Fármacos mielosupresores (Quimioterapia, Cotrimoxazol, Metotrexato)', severity: 'Grave', clinicalEffect: 'Potenciación aditiva catastrófica de aplasia medular.', recommendation: 'Contraindicada la asociación.' },
      { interactingDrug: 'Fenitoína y Warfarina', severity: 'Grave', clinicalEffect: 'Inhibe potentemente el metabolismo microsomal hepático duplicando o triplicando sus niveles con ataxia, coma o sangrado masivo.', recommendation: 'Reducir dosis de fenitoína/anticoagulante y monitorear niveles.' }
    ],
    monitoringParameters: ['Hemograma completo con recuento de reticulocitos y plaquetas cada 48-72 horas', 'Niveles plasmáticos de cloranfenicol (diana: 10-20 mcg/mL)', 'Vigilancia estrecha de distensión abdominal o cianosis en neonatos'],
    storageConditions: 'Conservar por debajo de 25 °C protegido de la luz.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'lincomicina',
    genericName: 'Lincomicina Clorhidrato',
    commercialNames: ['Lincocin', 'Cillimycin', 'Lincomicina Genfar'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas inyectables de Lincomicina de 600 mg',
    atcCode: 'J01FF02',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Lincosamida natural bacteriostática de espectro grampositivo y anaeróbico',
    description: 'Antibiótico natural primario de la clase de las lincosamidas producido por Streptomyces lincolnensis. Muy activo frente a bacterias grampositivas aerobias y anaerobias, pero con una absorción oral irregular y una mayor tasa de efectos adversos digestivos respecto a su derivado semisintético clindamicina.',
    presentations: [
      { id: 'lin-1', form: 'Solución inyectable IM / IV', concentration: '300 mg/mL (ampolla de 2 mL = 600 mg)', route: 'Intramuscular / Intravenosa diluida', packaging: 'Caja x 1 y 5 ampollas de 600 mg' },
      { id: 'lin-2', form: 'Cápsulas orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 12 y 24 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Se une a la subunidad 50S del ribosoma bacteriano en un sitio cercano o superpuesto al de los macrólidos y cloranfenicol (sitio MLSB). Inhibe la reacción de transpeptidación y promueve la disociación prematura del peptidil-ARNt del ribosoma.',
      molecularTarget: 'Subunidad 50S ribosómica bacteriana',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 20-30% en ayunas; la ingesta con alimentos disminuye la absorción a la mitad.',
        halfLife: 'Aproximadamente 4 a 6 horas.',
        metabolism: 'Hepático parcial a metabolitos inactivos',
        elimination: 'Excreción biliar y fecal principal, solo 10-15% renal'
      }
    },
    therapeuticIndications: [
      'Infecciones graves de piel y tejidos blandos por Staphylococcus aureus o Streptococcus pyogenes en pacientes alérgicos a penicilinas',
      'Infecciones osteoarticulares (osteomielitis aguda y crónica) por su excelente penetración ósea',
      'Infecciones respiratorias e intraabdominales por anaerobios sensibles'
    ],
    posology: {
      adultStandard: 'Intramuscular: 600 mg IM profunda cada 12 o 24 horas. Intravenosa: 600 mg a 1000 mg IV diluidos en al menos 100-250 mL de suero salino o glucosado a infundir en un mínimo de 60 minutos cada 8 a 12 horas (máximo 8 g/día). Oral: 500 mg cada 6 u 8 horas con el estómago vacío (1 hora antes o 2 horas después de comer).',
      pediatricDose: 'Niños mayores de 1 mes: 10 a 20 mg/kg/día IM divididos cada 12-24h; IV: 10 a 20 mg/kg/día en infusión lenta divididos cada 8-12h.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <20 mL/min: Reducir dosis al 70-75% de la habitual.'
      },
      hepaticAdjustment: 'Reducir dosis o espaciar intervalos en cirrosis severa.',
      administrationNotes: 'PROHIBIDA LA INYECCIÓN INTRAVENOSA RÁPIDA EN BOLO: la administración IV directa en bolo sin diluir produce colapso cardiopulmonar fulminante, hipotensión severa, arritmias ventriculares y parada cardíaca. Infundir SIEMPRE diluido en al menos 60 minutos.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDA LA ADMINISTRACIÓN INTRAVENOSA DIRECTA EN BOLO SIN DILUIR POR RIESGO DE PARADA CARDÍACA Y COLAPSO CARDIOVASCULAR MORTAL. ALTO RIESGO DE COLITIS PSEUDOMEMBRANOSA GRAVE POR CLOSTRIDIOIDES DIFFICILE.',
      contraindications: [
        'Hipersensibilidad a lincosamidas (lincomicina, clindamicina)',
        'Antecedentes de colitis ulcerosa, enfermedad de Crohn o colitis asociada a antibióticos',
        'Inyección intravenosa directa en bolo rápido',
        'Recién nacidos (la formulación inyectable contiene alcohol bencílico que causa síndrome de jadeo mortal en neonatos)'
      ],
      adverseEffects: {
        frequent: ['Diarrea acuosa severa', 'Náuseas y vómitos', 'Dolor e induración en el sitio IM'],
        moderate: ['Erupciones cutáneas alérgicas y prurito', 'Elevación transitoria de transaminasas'],
        severe: ['Colitis pseudomembranosa grave potencialmente mortal', 'Parada cardíaca o hipotensión por infusión IV rápida', 'Agranulocitosis y trombocitopenia raras']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Precaución: Pasa a la leche materna; vigilar diarrea con sangre en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Bloqueantes neuromusculares (Vecuronio, Rocuronio)', severity: 'Grave', clinicalEffect: 'Aumento aditivo del bloqueo neuromuscular con parálisis muscular y apnea respiratoria.', recommendation: 'Monitorear relajación neuromuscular.' },
      { interactingDrug: 'Macrólidos (Eritromicina)', severity: 'Moderada', clinicalEffect: 'Antagonismo competitivo en el sitio de unión ribosómico 50S; inactivación mutua.', recommendation: 'No coadministrar simultáneamente.' }
    ],
    monitoringParameters: ['Aparición de diarrea profusa con sangre o moco (descartar toxina de C. difficile y suspender)', 'Monitoreo de presión arterial y ECG durante la infusión IV'],
    storageConditions: 'Conservar por debajo de 30 °C. No congelar las ampollas.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'clindamicina',
    genericName: 'Clindamicina Fosfato / Clorhidrato',
    commercialNames: ['Dalacin', 'Cleocin', 'Dalacin C', 'Clinwas'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas y ampollas inyectables de Clindamicina',
    atcCode: 'J01FF01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Lincosamida semisintética clorada con potente actividad anti-anaeróbica e inhibidora de toxinas',
    description: 'Derivado semisintético 7-desoxi-7-cloro de la lincomicina. Posee una biodisponibilidad oral muy superior, una potencia antibacteriana marcadamente más alta y una excelente difusión en tejido óseo y abscesos. Es el fármaco de elección en infecciones anaeróbicas necrotizantes por su capacidad única de suprimir la síntesis de exotoxinas bacterianas (superantígenos del shock tóxico).',
    presentations: [
      { id: 'cli-1', form: 'Cápsulas orales (Clorhidrato)', concentration: '150 mg y 300 mg', route: 'Oral', packaging: 'Caja x 16 y 24 cápsulas' },
      { id: 'cli-2', form: 'Solución inyectable IV / IM (Fosfato)', concentration: '150 mg/mL (ampollas de 2 mL = 300 mg, 4 mL = 600 mg)', route: 'Intravenosa diluida / Intramuscular', packaging: 'Ampollas de 2 y 4 mL' },
      { id: 'cli-3', form: 'Gel y solución tópica al 1%', concentration: '10 mg/g', route: 'Tópica dérmica', packaging: 'Tubo x 30 g y frasco x 50 mL' }
    ],
    mechanismOfAction: {
      summary: 'Se une a la subunidad 50S del ribosoma bacteriano interfiriendo con la transpeptidación y translocación proteica. A concentraciones subinhibitorias, inhibe selectivamente la transcripción y biosíntesis de toxinas estafilocócicas y estreptocócicas causantes de choque tóxico (toxina del síndrome de choque tóxico TSST-1, toxina de Panton-Valentine y estreptolisina O). Posee un prolongado efecto postantibiótico y excelente penetración intracelular en macrófagos y leucocitos.',
      molecularTarget: 'Subunidad 50S ribosómica y supresión de la síntesis de exotoxinas bacterianas',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 90% (rápida y prácticamente completa, no interferida por la presencia de alimentos). Concentración ósea del 60-80% de la plasmática.',
        halfLife: 'Aproximadamente 2.4 a 3 horas.',
        metabolism: 'Hepático extenso mediante citocromo CYP3A4 a sulfóxido de clindamicina y N-desmetilclindamicina',
        elimination: 'Excreción biliar y fecal (80-90% como metabolitos inactivos), solo 10% urinaria'
      }
    },
    therapeuticIndications: [
      'Infecciones graves de piel y partes blandas: fascitis necrotizante por Streptococcus pyogenes y gangrena gaseosa clostridiana (asociada a betalactámicos por su efecto inhibidor de toxinas)',
      'Síndrome de choque tóxico estreptocócico y estafilocócico',
      'Infecciones osteoarticulares crónicas (osteomielitis y artritis séptica)',
      'Infecciones odontogénicas graves de la cavidad oral y flemones oromaxilofaciales',
      'Infecciones ginecológicas e intraabdominales por anaerobios (Bacteroides fragilis)',
      'Acné inflamatorio papulopustuloso (formulación tópica al 1%)'
    ],
    posology: {
      adultStandard: 'Oral: 300 mg a 450 mg cada 6 u 8 horas durante 7 a 14 días con abundante agua. Intravenosa (Fosfato): 600 mg a 900 mg IV cada 8 horas (o 600 mg cada 6h en choque tóxico grave) diluidos en al menos 100 mL de suero salino o glucosado e infundidos en 30 a 60 minutos (máximo 4.8 g/día). Tópica: aplicar fina capa en lesiones de acné 2 veces al día.',
      pediatricDose: 'Oral: 10 a 25 mg/kg/día divididos cada 6 u 8 horas. Intravenosa: 20 a 40 mg/kg/día divididos cada 6 u 8 horas en infusión lenta.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste habitual (la vía biliar compensa la eliminación).'
      },
      hepaticAdjustment: 'Prolongación de la semivida en cirrosis grave; puede requerir espaciar intervalos o reducir dosis en fallo hepático severo con ictericia.',
      administrationNotes: 'TOMAR LAS CÁPSULAS ORALES CON UN VASO GRANDE DE AGUA (250 ML) Y PERMANECER ERGUIDO 30 MINUTOS para evitar esofagitis química ulcerativa. NUNCA ADMINISTRAR POR VÍA INTRAVENOSA EN BOLO RÁPIDO SIN DILUIR (induce parada cardíaca e hipotensión fulminante).'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE COLITIS PSEUDOMEMBRANOSA GRAVE Y POTENCIALMENTE MORTAL CAUSADA POR LA PROLIFERACIÓN DE CLOSTRIDIOIDES DIFFICILE PRODUCTOR DE TOXINAS A Y B. PROHIBIDA LA INYECCIÓN IV DIRECTA EN BOLO SIN DILUIR.',
      contraindications: [
        'Hipersensibilidad a la clindamicina o lincomicina',
        'Antecedentes de colitis asociada a antibióticos o enfermedad inflamatoria intestinal',
        'Inyección intravenosa en bolo rápido'
      ],
      adverseEffects: {
        frequent: ['Diarrea líquida (hasta en 20-30% de pacientes)', 'Náuseas, vómitos y dolor abdominal cólico'],
        moderate: ['Erupción cutánea maculopapular y prurito', 'Elevación moderada de transaminasas'],
        severe: ['Colitis pseudomembranosa fulminante con megacolon tóxico y perforación intestinal', 'Hipotensión severa y asistolia por infusión IV rápida', 'Síndrome de Stevens-Johnson']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Precaución: Pasa a la leche materna; vigilar diarrea con sangre o candidiasis en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Bloqueantes neuromusculares (Rocuronio, Atracurio)', severity: 'Grave', clinicalEffect: 'Potenciación aditiva del bloqueo de la placa motora con apnea prolongada.', recommendation: 'Monitorear función respiratoria y vigilar en UCI postquirúrgica.' },
      { interactingDrug: 'Eritromicina y Macrólidos', severity: 'Moderada', clinicalEffect: 'Antagonismo competitivo en el ribosoma 50S bacteriano que neutraliza la acción de ambos agentes.', recommendation: 'Evitar la administración concomitante.' }
    ],
    monitoringParameters: ['Frecuencia y consistencia de las deposiciones (descartar toxina A/B de C. difficile ante cualquier diarrea profusa)', 'Función hepática en pautas de más de 10 días', 'Velocidad de infusión IV'],
    storageConditions: 'Conservar por debajo de 30 °C. No congelar.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'vancomicina',
    genericName: 'Vancomicina Clorhidrato',
    commercialNames: ['Vancocin', 'Vancomicina Hospira', 'Vancomax', 'Vancotie'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Vial de Vancomicina polvo liofilizado para infusión IV y solución oral',
    atcCode: 'J01XA01',
    anatomicalSystem: '4.2 Antibacterianos',
    therapeuticClass: 'Antibiótico glucopéptido bactericida tricíclico de alta potencia frente a grampositivos resistentes',
    description: 'Antibiótico glucopéptido de referencia mundial producido por Amycolatopsis orientalis. Es el fármaco de primera línea para el tratamiento parenteral de infecciones graves invasivas causadas por Staphylococcus aureus resistente a meticilina (SARM) y enterococos sensibles, así como el tratamiento de elección oral para la infección por Clostridioides difficile grave.',
    presentations: [
      { id: 'van-1', form: 'Polvo liofilizado para infusión IV (o solución oral)', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa en infusión lenta / Oral (solo colitis por C. difficile)', packaging: 'Frasco ampolla de 500 mg y 1 g' },
      { id: 'van-2', form: 'Cápsulas orales', concentration: '125 mg y 250 mg', route: 'Oral ESTRICTA para C. difficile', packaging: 'Caja x 10 y 20 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis del peptidoglicano de la pared bacteriana en una etapa previa a la de los betalactámicos. Se une con altísima afinidad y especificidad mediante enlaces de hidrógeno al extremo terminal D-alanil-D-alanina libre de los precursores de la pared celular bacteriana (monómeros de mureína). Este impedimento estérico bloquea la transglucosidación (elongación del polímero de peptidoglicano) y la transpeptidación (puentes cruzados). Altera además la permeabilidad de la membrana y la síntesis de ARN bacteriano.',
      molecularTarget: 'Extremo D-alanil-D-alanina del precursor de peptidoglicano bacteriano',
      pharmacokinetics: {
        bioavailability: 'Intravenosa: 100%. Por vía oral prácticamente NO se absorbe (<5%), permaneciendo íntegra en el lumen colónico donde alcanza concentraciones intraluminales masivas (>2000 mcg/g) para erradicar C. difficile.',
        halfLife: 'Adulto normofuncionante: 4 a 8 horas (se prolonga a 7 u 8 días en anuria).',
        metabolism: 'Mínimo hepático (<5%)',
        elimination: 'Excreción renal masiva (>80-90% inalterado) por filtración glomerular'
      }
    },
    therapeuticIndications: [
      'Infecciones graves invasivas causadas por Staphylococcus aureus resistente a meticilina (SARM): bacteriemia, neumonía nosocomial, endocarditis infecciosa, osteomielitis',
      'Infecciones graves de piel y tejidos blandos complicadas por grampositivos resistentes',
      'Profilaxis perioperatoria en cirugía cardiovascular u ortopédica en instituciones con alta prevalencia de SARM o alergia grave a betalactámicos',
      'Tratamiento de primera línea por VÍA ORAL de la colitis pseudomembranosa por Clostridioides difficile grave o fulminante'
    ],
    posology: {
      adultStandard: 'Infecciones invasivas por SARM IV: Dosis de carga de 25 a 30 mg/kg IV en pacientes críticos, seguida de 15 a 20 mg/kg cada 8 a 12 horas en infusión lenta (ajustando para un AUC24/CMI entre 400 y 600 o nivel valle de 15 a 20 mcg/mL). Colitis por Clostridioides difficile ORAL: 125 mg vía oral cada 6 horas durante 10 días (o 500 mg cada 6h en casos fulminantes con íleo).',
      pediatricDose: 'Niños: 15 mg/kg IV cada 6 horas o 20 mg/kg cada 8 horas (máximo 60 mg/kg/día). Colitis por C. difficile: 10 mg/kg VO cada 6 horas (máximo 125 mg por toma).',
      renalAdjustment: {
        normal: 'ClCr >60 mL/min: Dosis completa cada 8 o 12 horas.',
        moderate: 'ClCr 30-50 mL/min: 15 mg/kg cada 24 horas; ClCr 15-29 mL/min: 15 mg/kg cada 48 horas.',
        severe: 'ClCr <15 mL/min o hemodiálisis: Administrar dosis de carga de 15-20 mg/kg y redosificar según niveles séricos valle (<10-15 mcg/mL).'
      },
      hepaticAdjustment: 'No requiere ajuste habitual.',
      administrationNotes: 'EL RITMO DE INFUSIÓN IV NO DEBE SUPERAR NUNCA LOS 10 MG/MINUTO (MÍNIMO 60 MINUTOS PARA 1 G Y AL MENOS 120 MINUTOS PARA DOSIS SUPERIORES): la infusión rápida induce el "SÍNDROME DEL HOMBRE ROJO" (liberación no alérgica masiva de histamina con eritema rubicundo intenso, prurito en cuello, cara y torso superior, hipotensión y colapso). LA VÍA ORAL NO TIENE EFICACIA EN INFECCIONES SISTÉMICAS.'
    },
    safety: {
      blackBoxWarning: 'LA INFUSIÓN RÁPIDA DESENCADENA EL SÍNDROME DEL HOMBRE ROJO CON ERITEMA TORÁCICO, HIPOTENSIÓN SEVERA Y COLAPSO CIRCULATORIO. RIESGO ELEVADO DE NEFROTOXICIDAD (NECROSIS TUBULAR AGUDA) ASOCIADO A NIVELES VALLE >20 MCG/ML O COADMINISTRACIÓN CON PIPERACILINA/TAZOBACTAM O AMINOGLUCÓSIDOS.',
      contraindications: [
        'Hipersensibilidad alérgica conocida a la vancomicina',
        'Vía intramuscular (produce necrosis tisular grave en el sitio de inyección)'
      ],
      adverseEffects: {
        frequent: ['Síndrome del hombre rojo por desgranulación histamínica si se infunde rápido', 'Flebitis y dolor en la vena periférica de infusión'],
        moderate: ['Fiebre medicamentosa y escalofríos', 'Eosinofilia transitoria'],
        severe: ['Nefrotoxicidad con insuficiencia renal aguda', 'Ototoxicidad vestibular y coclear (generalmente en sobredosis o con otros ototóxicos)', 'Neutropenia y agranulocitosis reversible tras tratamientos superiores a 2 semanas']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia; absorción oral nula en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Piperacilina/Tazobactam', severity: 'Grave', clinicalEffect: 'Aumento sinérgico pronunciado de la incidencia de lesión renal aguda nefrotóxica.', recommendation: 'Monitorear diariamente creatinina o sustituir por cefepima/meropenem si es viable.' },
      { interactingDrug: 'Aminoglucósidos (Gentamicina, Amikacina)', severity: 'Grave', clinicalEffect: 'Multiplicación del riesgo de necrosis tubular renal y ototoxicidad.', recommendation: 'Control terapéutico farmacocinético estricto de niveles valle de ambos fármacos.' }
    ],
    monitoringParameters: ['Niveles séricos valle de vancomicina (mantener 15-20 mcg/mL en infecciones graves o AUC/CMI 400-600)', 'Creatinina sérica diaria o cada 48 horas', 'Hemograma semanal en tratamientos >14 días (descarte de neutropenia)'],
    storageConditions: 'Liofilizado: conservar por debajo de 25 °C. Solución diluida para infusión: estable 24 horas refrigerada.',
    updatedAt: '2026-03-30'
  }
];
