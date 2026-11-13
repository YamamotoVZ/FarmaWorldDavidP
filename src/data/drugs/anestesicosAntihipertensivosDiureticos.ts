import { Medication } from '../../types/medication';

const VIAL_IMG = '/src/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/src/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANESTESICOS_ANTIHIPERTENSIVOS_DIURETICOS: Medication[] = [
  // ----------------------------------------------------
  // 2.8 ANESTÉSICOS LOCALES
  // ----------------------------------------------------
  {
    id: 'lidocaina',
    genericName: 'Lidocaína Clorhidrato',
    commercialNames: ['Xilocaína', 'Lidopen', 'Versatis', 'Octocaine', 'EMLA (asoc.)'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco ámpula de Lidocaína inyectable y apósitos tópicos',
    atcCode: 'N01BB02',
    anatomicalSystem: '2.8 Anestésicos Locales',
    therapeuticClass: 'Anestésico local tipo amida de duración intermedia y antiarrítmico clase Ib',
    description: 'Anestésico local de enlace amida prototípico y antiarrítmico clase Ib. Bloquea de manera reversible la generación y conducción del impulso nervioso al interactuar con canales de sodio voltaje-dependientes en la membrana axonal neuronal y miocárdica.',
    presentations: [
      { id: 'lido-1', form: 'Solución inyectable al 1% y 2% (simple o con epinefrina 1:100.000 / 1:200.000)', concentration: '10 mg/mL (1%) y 20 mg/mL (2%)', route: 'Infiltrativa / Troncular / Epidural', packaging: 'Frasco ampolla de 20 mL y 50 mL' },
      { id: 'lido-2', form: 'Gel tópico y spray al 2% y 10%', concentration: '20 mg/g y 100 mg/mL', route: 'Tópica mucosa', packaging: 'Tubo x 30 g / Frasco atomizador 50 mL' },
      { id: 'lido-3', form: 'Parche dérmico al 5%', concentration: '700 mg por apósito', route: 'Tópica cutánea', packaging: 'Caja con 5 parches hidrofilicos' }
    ],
    mechanismOfAction: {
      summary: 'Difunde a través de la membrana neuronal en su forma no ionizada lipófila; intracelularmente se protona y se une selectivamente al sitio específico del receptor dentro del poro del canal de sodio dependiente de voltaje (Nav1.5 y homólogos neuronales) en estado abierto o inactivado. Impide la entrada de iones Na+, previene la despolarización y bloquea la propagación del potencial de acción.',
      molecularTarget: 'Canales de sodio dependientes de voltaje (Nav) en la membrana neuronal y miocárdica',
      pharmacokinetics: {
        bioavailability: 'Infiltración/Inyección: 100% tisular. Biodisponibilidad oral muy baja (<35%) por primer paso masivo.',
        halfLife: 'Bifásica, eliminación terminal 1.5 a 2 horas (aumentada a >4h en fallo hepático)',
        metabolism: 'Hepático microsomal masivo (90-95%) dependiente de CYP3A4 y CYP1A2 a metabolitos activos (monoetilglicinexilidida - MEGX y glicinexilidida - GX)',
        elimination: 'Excreción renal (<10% inalterado, >80% metabolitos conjugados)'
      }
    },
    therapeuticIndications: [
      'Anestesia local por infiltración percutánea y anestesia regional por bloqueo nervioso periférico o troncular',
      'Anestesia epidural e intratecal/raquídea para intervenciones quirúrgicas o analgesia obstétrica',
      'Anestesia tópica de mucosas oral, faríngea, uretral y ano-rectal',
      'Alivio sintomático de la neuralgia posherpética y dolor neuropático periférico (apósitos al 5%)',
      'Tratamiento de urgencia de taquiarritmias ventriculares potencialmente mortales (TV y FV post-infarto agudo)'
    ],
    posology: {
      adultStandard: 'Infiltración local: Lidocaína al 1% o 2% simple: dosis máxima única 4.5 mg/kg (sin superar 300 mg). Con epinefrina (vasoconstrictor): dosis máxima 7 mg/kg (sin superar 500 mg). Antiarrítmico IV: bolo inicial de 1 a 1.5 mg/kg IV en 2-3 min, seguido de infusión continua a 1-4 mg/min. Parche al 5%: aplicar hasta 3 parches simultáneos sobre piel intacta durante máximo 12 horas al día.',
      pediatricDose: 'Infiltración pediátrica: Dosis máxima 3 mg/kg de lidocaína simple (o 4.5 mg/kg con epinefrina). Monitorear signos neurológicos en niños.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Ajuste no requerido en dosis única',
        severe: 'Acumulación de metabolitos MEGX y GX con riesgo de neurotoxicidad si se infunde de forma prolongada.'
      },
      hepaticAdjustment: 'Reducir dosis de infusión continua en 50% en cirrosis grave o hepatopatía avanzada por disminución del aclaramiento de lidocaína.',
      administrationNotes: 'SIEMPRE aspirar antes de inyectar para evitar inyección intravascular inadvertida masiva. Disponer inmediatamente de emulsión lipídica al 20% (Intralipid) en caso de toxicidad sistémica por anestésicos locales (LAST).'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE TOXICIDAD SISTÉMICA GRAVE POR ANESTÉSICOS LOCALES (LAST): CONVULSIONES, COLAPSO CARDIOVASCULAR, ASISTOLIA Y MUERTE ANTE ABSORCIÓN RÁPIDA O INYECCIÓN INTRAVASCULAR ACCIDENTAL.',
      contraindications: [
        'Hipersensibilidad conocida a anestésicos locales tipo amida',
        'Bloqueo auriculoventricular de 2º y 3º grado sin marcapasos definitivo colocado',
        'Shock cardiogénico o hipovolémico severo',
        'Infección activa o sepsis en el sitio anatómico de la punción epidural o espinal'
      ],
      adverseEffects: {
        frequent: ['Parestesias peribucales y entumecimiento lingual (signo temprano de toxicidad)', 'Sabor metálico', 'Mareo, somnolencia, desorientación'],
        moderate: ['Temblores musculares y fasciculaciones', 'Hipotensión arterial y bradicardia', 'Acúfenos y diplopía'],
        severe: ['Toxicidad sistémica grave (LAST): convulsiones tónico-clónicas generalizadas', 'Colapso cardiovascular y parada cardíaca en asistolia', 'Metahemoglobinemia']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; excreción en leche materna insignificante clínicamente.'
    },
    interactions: [
      { interactingDrug: 'Betabloqueantes (Propranolol, Metoprolol)', severity: 'Grave', clinicalEffect: 'Disminución del flujo sanguíneo hepático y del aclaramiento de lidocaína, elevando niveles plasmáticos y riesgo de colapso.', recommendation: 'Reducir dosis de lidocaína y vigilar electrocardiograma.' },
      { interactingDrug: 'Cimetidina', severity: 'Moderada', clinicalEffect: 'Inhibe el citocromo hepático y aumenta las concentraciones séricas de lidocaína.', recommendation: 'Monitorizar signos tempranos de toxicidad neurológica.' },
      { interactingDrug: 'Antiarrítmicos (Amiodarona, Mexiletina)', severity: 'Grave', clinicalEffect: 'Efectos cardiodepresores y proarrítmicos aditivos.', recommendation: 'Evitar combinación o extremar vigilancia hemodinámica.' }
    ],
    monitoringParameters: ['Electrocardiograma continuo durante infusión IV', 'Tensión arterial y frecuencia cardíaca', 'Estado neurológico y nivel de consciencia', 'Signos prodrómicos de toxicidad (entumecimiento perioral, acúfenos)'],
    storageConditions: 'Conservar a temperatura ambiente (15-30 °C). Proteger de la congelación y la luz solar directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'proparacaina',
    genericName: 'Proparacaína Clorhidrato (Proximetacaína)',
    commercialNames: ['Poenkerat', 'Alcaine', 'Ophthaine', 'Proparacaine HCl Sol'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Colirio oftálmico anestésico de Proparacaína',
    atcCode: 'S01HA04',
    anatomicalSystem: '2.8 Anestésicos Locales',
    therapeuticClass: 'Anestésico local tópico oftálmico tipo éster',
    description: 'Anestésico oftálmico tópico de rápida acción y corta duración derivado del ácido benzoico (tipo éster). Induce anestesia corneal de inicio casi instantáneo con mínimo ardor o irritación inicial para tonometría y procedimientos oculares diagnósticos y quirúrgicos menores.',
    presentations: [
      { id: 'prop-1', form: 'Solución oftálmica estéril al 0.5%', concentration: '5 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 10 mL y 15 mL' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea reversiblemente la conducción de impulsos nerviosos en las terminaciones sensitivas corneales y conjuntivales al estabilizar la membrana neuronal mediante la inhibición de los canales de sodio dependientes de voltaje, previniendo la fase de despolarización.',
      molecularTarget: 'Canales de sodio dependientes de voltaje en terminales nerviosas del epitelio corneal',
      pharmacokinetics: {
        bioavailability: 'Acción estrictamente tópica ocular; inicio en 20-30 segundos con duración de 15 a 20 minutos.',
        halfLife: 'Local corta; hidrólisis inmediata por esterasas tisulares y pseudocolinesterasa plasmática.',
        metabolism: 'Rápida escisión por esterasas plasmáticas tisulares',
        elimination: 'Metabolitos inactivos eliminados por vía renal'
      }
    },
    therapeuticIndications: [
      'Anestesia tópica para tonometría ocular (medición de presión intraocular)',
      'Extracción de cuerpos extraños corneales o conjuntivales superficiales',
      'Raspado corneal diagnóstico y pruebas de sensibilidad epitelial',
      'Cirugía oftálmica menor como suturas conjuntivales o cateterismo de conducto lagrimal'
    ],
    posology: {
      adultStandard: 'Tonometría o procedimientos diagnósticos breves: Instilar 1 a 2 gotas en el fondo de saco conjuntival inmediatamente antes de la intervención. Cirugía ocular menor: 1 gota cada 5 a 10 minutos por 3 a 5 dosis.',
      pediatricDose: 'Instilar 1 gota en ojo a explorar. Proteger estrictamente el ojo de fricción o rascado.',
      renalAdjustment: {
        normal: 'No requiere ajuste',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste'
      },
      hepaticAdjustment: 'No requiere ajuste por mínima absorción sistémica.',
      administrationNotes: 'USO EXCLUSIVO EN CONSULTA OFTALMOLÓGICA. NUNCA prescribir ni dispensar para uso domiciliario por el paciente debido al alto riesgo de queratitis necrotizante, úlceras tróficas corneales y pérdida visual irreversible.'
    },
    safety: {
      blackBoxWarning: 'EL USO PROLONGADO O DOMICILIARIO INDUCE QUERATOPATÍA NEUROTÓFICA GRAVE, PÉRDIDA EPITELIAL CORNEAL, ULCERACIÓN ESTROMAL, PERFORACIÓN CORNEAL Y CEGUERA PERMANENTE.',
      contraindications: [
        'Hipersensibilidad a anestésicos locales tipo éster o derivados del ácido benzoico',
        'Prescripción para automedicación ambulatoria por el paciente'
      ],
      adverseEffects: {
        frequent: ['Sensación transitoria leve de escozor o quemazón en el momento de la instilación'],
        moderate: ['Hiperemia conjuntival reactiva', 'Edema corneal leve transitorio'],
        severe: ['Queratitis neurotrófica ulcerativa y necrosis estromal por uso repetido', 'Perforación corneal traumática por pérdida de reflejo de parpadeo', 'Reacciones alérgicas de hipersensibilidad tipo anafilactoide']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro en aplicaciones tópicas diagnósticas puntuales.'
    },
    interactions: [
      { interactingDrug: 'Inhibidores de colinesterasa tópicos oftálmicos', severity: 'Moderada', clinicalEffect: 'Disminución del metabolismo de los ésteres anestésicos.', recommendation: 'Evitar combinación simultánea.' }
    ],
    monitoringParameters: ['Integridad corneal con fluoresceína post-procedimiento', 'Protección ocular mecánica (parche) hasta recuperar sensibilidad corneal completa'],
    storageConditions: 'Conservar refrigerado de 2 °C a 8 °C. Mantener el frasco herméticamente cerrado y protegido de la luz (se oxida adquiriendo color pardo oscuro; si está oscuro, descartar).',
    updatedAt: '2026-03-30'
  },
  {
    id: 'mepivacaina',
    genericName: 'Mepivacaína Clorhidrato',
    commercialNames: ['Scandicain', 'Carbocaine', 'Mepivacaína Braun', 'Isocaine'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas de Mepivacaína para infiltración y odontología',
    atcCode: 'N01BB03',
    anatomicalSystem: '2.8 Anestésicos Locales',
    therapeuticClass: 'Anestésico local tipo amida de duración intermedia con mínima vasodilatación intrínseca',
    description: 'Anestésico local tipo amida con perfil farmacológico similar a la lidocaína pero con mucha menor propiedad vasodilatadora intrínseca, lo que permite una duración anestésica adecuada en odontología y bloqueos periféricos incluso sin necesidad de coadministrar vasoconstrictores adrenérgicos.',
    presentations: [
      { id: 'mepi-1', form: 'Solución inyectable al 2% y 3% (simple o con vasoconstrictor)', concentration: '20 mg/mL (2%) y 30 mg/mL (3%)', route: 'Infiltrativa / Troncular / Dental', packaging: 'Cartuchos dentales de 1.8 mL (caja x 50) y ampollas x 10 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe el flujo transmembrana de sodio a través de los canales Nav voltaje-dependientes en axones sensoriales y motores al fijarse al sitio de unión interno del canal. Altera la propagación de despolarización sin modificar el potencial de reposo axonal.',
      molecularTarget: 'Canales de sodio dependientes de voltaje en membranas excitables',
      pharmacokinetics: {
        bioavailability: 'Infiltración local: 100% biodisponibilidad tisular.',
        halfLife: 'Adulto: 1.9 a 3 horas; Neonato/Feto: hasta 9 horas (depuración fetal lenta)',
        metabolism: 'Hepático extenso por hidroxilación microsomal y N-desmetilación',
        elimination: 'Excreción urinaria casi total como metabolitos (menos del 5% inalterado)'
      }
    },
    therapeuticIndications: [
      'Anestesia por infiltración y bloqueo de nervios periféricos en odontología y estomatología',
      'Bloqueos tronculares, plexuales y epidurales en procedimientos quirúrgicos menores y ortopédicos',
      'Alternativa de elección cuando el uso de vasoconstrictores adrenérgicos (adrenalina) está contraindicado (cardiopatía isquémica, arritmias graves, tirotoxicosis)'
    ],
    posology: {
      adultStandard: 'Infiltración local / Odontología: Mepivacaína al 3% simple: 1 a 3 cartuchos (54 a 162 mg). Dosis máxima total en adulto: 4.4 mg/kg (máximo absoluto 300 mg al 3% o 400 mg con vasoconstrictor). Bloqueo epidural: 15 a 30 mL de solución al 1% o 2%.',
      pediatricDose: 'Máximo 3 mg/kg en niños mayores de 4 años calculando rigurosamente el volumen inyectado.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Dosis habitual en procedimientos únicos',
        severe: 'Posible acumulación si se administran dosis repetidas continuas.'
      },
      hepaticAdjustment: 'Reducir dosis total en insuficiencia hepática grave por depuración disminuida.',
      administrationNotes: 'Contraindicado el uso paracervical en obstetricia debido a su lenta eliminación por el feto inmaduro que causa toxicidad y bradicardia fetal extrema.'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADO PARA BLOQUEO PARACERVICAL OBSTÉTRICO DEBIDO AL RIESGO DE BRADICARDIA, ASFIXIA Y MUERTE FETAL POR RÁPIDA TRANSFERENCIA PLACENTARIA.',
      contraindications: [
        'Alergia documentada a anestésicos locales del grupo de las amidas',
        'Bloqueo auriculoventricular de alto grado',
        'Anestesia epidural en pacientes hipovolémicos no reanimados',
        'Bloqueo paracervical obstétrico'
      ],
      adverseEffects: {
        frequent: ['Parestesias periorales', 'Sensación de mareo o embriaguez', 'Bradicardia leve'],
        moderate: ['Temblores y mioclonías', 'Hipotensión postural', 'Acúfenos'],
        severe: ['Toxicidad del SNC con convulsiones epileptiformes', 'Depresión miocárdica severa y fibrilación ventricular', 'Bradicardia fetal profunda en administración obstétrica']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Baja concentración excretada en leche materna tras procedimientos ambulatorios dentales.'
    },
    interactions: [
      { interactingDrug: 'Antiarrítmicos clase I y III', severity: 'Grave', clinicalEffect: 'Potenciación del bloqueo de conducción cardíaca y depresión miocárdica.', recommendation: 'Monitorear pulso y presión arterial de forma estrecha.' },
      { interactingDrug: 'Sedantes e inductores anestésicos (Propofol, Midazolam)', severity: 'Moderada', clinicalEffect: 'Efectos depresores aditivos sobre el sistema nervioso central.', recommendation: 'Adecuar dosificación y vigilar vía aérea.' }
    ],
    monitoringParameters: ['Signos vitales (FC, PA)', 'Detección inmediata de toxicidad sistémica', 'Registro de dosis total administrada en miligramos'],
    storageConditions: 'Conservar entre 15 °C y 30 °C protegida de la luz y el congelamiento.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'bupivacaina',
    genericName: 'Bupivacaína Clorhidrato',
    commercialNames: ['Marcaina', 'Sensorcaine', 'Bupinex', 'Svedocain'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas de Bupivacaína hiperbárica e isobárica para anestesia regional',
    atcCode: 'N01BB01',
    anatomicalSystem: '2.8 Anestésicos Locales',
    therapeuticClass: 'Anestésico local tipo amida de larga duración y alta potencia',
    description: 'Anestésico local tipo amida lipófilo de potencia elevada y duración muy prolongada (hasta 8 a 12 horas). Fármaco de referencia para anestesia intratecal (raquídea), epidural y bloqueos de nervios periféricos en cirugía mayor y analgesia obstétrica. Presenta alta afinidad y disociación lenta por canales de sodio cardíacos, generando marcado riesgo de cardiotoxicidad refractaria ante inyección intravascular accidental.',
    presentations: [
      { id: 'bupi-1', form: 'Solución inyectable al 0.25% y 0.5% isobárica', concentration: '2.5 mg/mL (0.25%) y 5 mg/mL (0.5%)', route: 'Infiltrativa / Troncular / Epidural', packaging: 'Frasco ampolla de 10 mL y 20 mL' },
      { id: 'bupi-2', form: 'Solución inyectable al 0.5% hiperbárica (con dextrosa al 8%)', concentration: '5 mg/mL bupivacaína + 80 mg/mL glucosa', route: 'Intratecal / Raquídea', packaging: 'Ampollas de 4 mL (caja x 5)' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea la generación y conducción del impulso nervioso al inhibir de forma prolongada los canales Nav voltaje-dependientes en neuronas sensoriales y motoras. Debido a su alta liposolubilidad, penetra profundamente y se desliga con extrema lentitud de los canales de sodio miocárdicos durante la diástole, lo que explica tanto su larga duración analgésica como su cardiotoxicidad característica.',
      molecularTarget: 'Canales de sodio dependientes de voltaje en axones sensitivo-motores y cardiomiocitos',
      pharmacokinetics: {
        bioavailability: 'Intratecal/Epidural: 100% tisular. Unión a proteínas plasmáticas (alfa-1-glicoproteína ácida) del 95%.',
        halfLife: 'Terminal 2.7 a 3.5 horas en adultos; puede prolongarse a más de 8 horas en ancianos o hepatópatas.',
        metabolism: 'Hepático extenso por citocromo P450 (CYP3A4) a pipecolilxilidina (PPX)',
        elimination: 'Excreción renal (6% inalterado y metabolitos conjugados)'
      }
    },
    therapeuticIndications: [
      'Anestesia raquídea (subaracnoidea) para cirugía de abdomen inferior, urológica, ginecológica y de extremidades inferiores',
      'Anestesia y analgesia epidural postoperatoria y obstétrica para trabajo de parto',
      'Bloqueos nerviosos periféricos y plexuales mayores (plexo braquial, ciático, femoral)',
      'Infiltración de herida quirúrgica para analgesia postoperatoria prolongada'
    ],
    posology: {
      adultStandard: 'Anestesia raquídea: Bupivacaína hiperbárica al 0.5%: 7.5 a 15 mg (1.5 a 3 mL) intratecal según nivel metámero requerido. Epidural en cirugía: 50 a 100 mg (10 a 20 mL al 0.5%). Epidural obstétrica continua: infusión a 0.0625% - 0.125% combinada con opioide (fentanilo). Dosis máxima total en adulto: 2 mg/kg en 4 horas (máximo absoluto 150 mg).',
      pediatricDose: 'Anestesia espinal pediátrica: 0.3 a 0.5 mg/kg en niños; cálculo riguroso por anestesiólogo pediátrico.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste en dosis única',
        severe: 'Vigilar acumulación en infusiones postoperatorias prolongadas.'
      },
      hepaticAdjustment: 'Disminuir dosis en infusión continua epidural en hepatopatía descompensada.',
      administrationNotes: 'CONTRAINDICADA LA INYECCIÓN ENDOVENOSA. NUNCA utilizar en anestesia regional intravenosa (bloqueo de Bier) por riesgo fatal de paro cardíaco. Si ocurre cardiotoxicidad por LAST, iniciar RCP prolongada e infundir inmediatamente emulsión lipídica al 20% (bolo de 1.5 mL/kg seguido de infusión a 0.25 mL/kg/min).'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE CARDIOTOXICIDAD GRAVE, ARRITMIAS VENTRICULARES REFRACTARIAS Y PARADA CARDÍACA TRAS INYECCIÓN INTRAVASCULAR ACCIDENTAL. CONTRAINDICADA EN BLOQUEO REGIONAL INTRAVENOSO (BIER). LA CONCENTRACIÓN AL 0.75% ESTÁ PROHIBIDA EN ANESTESIA OBSTÉTRICA.',
      contraindications: [
        'Anestesia regional intravenosa (bloqueo de Bier)',
        'Concentración al 0.75% en obstetricia (prohibida por la FDA/EMA)',
        'Hipersensibilidad a anestésicos tipo amida',
        'Coagulopatía severa o tratamiento anticoagulante pleno para bloqueos neuroaxiales'
      ],
      adverseEffects: {
        frequent: ['Hipotensión arterial por simpatectomía neuroaxial', 'Retención urinaria transitoria', 'Bloqueo motor prolongado'],
        moderate: ['Bradicardia sinusal', 'Cefalea postpunción dural (en anestesia raquídea)', 'Náuseas y vómitos'],
        severe: ['Colapso cardiovascular y parada cardíaca refractaria a desfibrilación habitual', 'Toxicidad del SNC con convulsiones epilépticas', 'Bloqueo espinal total con depresión respiratoria (inyección subaracnoidea accidental)']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Excreción láctea mínima e insignificante tras anestesia regional quirúrgica.'
    },
    interactions: [
      { interactingDrug: 'Betabloqueantes y Calcioantagonistas', severity: 'Grave', clinicalEffect: 'Potenciación sinérgica de los efectos inotrópicos negativos y del bloqueo de la conducción AV.', recommendation: 'Monitoreo cardiovascular estricto.' },
      { interactingDrug: 'Otros anestésicos locales (Lidocaína)', severity: 'Grave', clinicalEffect: 'Efectos tóxicos sistémicos aditivos; las dosis combinadas deben reducirse proporcionalmente.', recommendation: 'No superar la dosis acumulativa ponderada.' }
    ],
    monitoringParameters: ['ECG y monitorización hemodinámica continua', 'Nivel sensitivo y motor del bloqueo neuroaxial', 'Disponibilidad inmediata del carro de parada y emulsión lipídica 20%'],
    storageConditions: 'Conservar a temperatura ambiente (15-30 °C). No congelar.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // ANTIHIPERTENSIVOS
  // ----------------------------------------------------
  {
    id: 'metoprolol',
    genericName: 'Metoprolol Tartrato / Succinato',
    commercialNames: ['Lopresor', 'Seloken', 'Betaloc', 'Toprol-XL'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de Metoprolol',
    atcCode: 'C07AB02',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Betabloqueante cardioselectivo beta-1 adrenérgico',
    description: 'Bloqueador adrenérgico beta-1 cardioselectivo sin actividad simpaticomimética intrínseca y con mínima acción estabilizadora de membrana. Reduce la frecuencia cardíaca, contractilidad y gasto cardíaco, disminuyendo la presión arterial y la demanda miocárdica de oxígeno.',
    presentations: [
      { id: 'meto-1', form: 'Comprimidos de liberación inmediata (Tartrato)', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos' },
      { id: 'meto-2', form: 'Comprimidos de liberación prolongada (Succinato)', concentration: '25 mg, 50 mg, 100 mg y 200 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'meto-3', form: 'Solución inyectable IV', concentration: '1 mg/mL', route: 'Intravenosa', packaging: 'Ampollas de 5 mL (5 mg)' }
    ],
    mechanismOfAction: {
      summary: 'Antagonista competitivo selectivo de los receptores beta-1 adrenérgicos ubicados predominantemente en el miocardio. Disminuye la frecuencia cardíaca sinusal en reposo y ejercicio, retarda la conducción en el nodo auriculoventricular, reduce la contractilidad miocárdica y suprime la secreción de renina en el aparato yuxtaglomerular renal.',
      molecularTarget: 'Receptores beta-1 adrenérgicos cardíacos y yuxtaglomerulares',
      pharmacokinetics: {
        bioavailability: 'Oral tartrato: 40-50% (primer paso hepático saturable). Oral succinato: 50% con liberación constante durante 24 horas.',
        halfLife: 'Tartrato: 3 a 7 horas; Succinato: nivel plasmático sostenido 24 horas.',
        metabolism: 'Hepático dependiente del citocromo polimórfico CYP2D6',
        elimination: 'Excreción urinaria >95% como metabolitos inactivos'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial en monoterapia o combinada',
      'Cardiopatía isquémica: angina de pecho estable y prevención secundaria post-infarto de miocardio',
      'Insuficiencia cardíaca crónica estable con fracción de eyección reducida (IC-FEr, formulación Succinato)',
      'Control de frecuencia ventricular en taquiarritmias supraventriculares (fibrilación auricular)',
      'Profilaxis de la migraña episódica'
    ],
    posology: {
      adultStandard: 'Hipertensión: Tartrato 50 a 100 mg cada 12 horas o Succinato 50 a 100 mg una vez al día (máximo 400 mg/día). Angina de pecho: 50 a 100 mg cada 12h. Insuficiencia cardíaca (Succinato): iniciar con 12.5 o 25 mg una vez al día e ir titulando al doble cada 2 semanas hasta dosis diana de 200 mg/día. Arritmias IV: 5 mg IV a pasar en 2 minutos; repetir cada 5 min hasta máximo 15 mg.',
      pediatricDose: 'Hipertensión pediátrica: 1 a 2 mg/kg/día divididos en 1 o 2 tomas (máximo 200 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste de dosis'
      },
      hepaticAdjustment: 'Reducir dosis inicial y titular lentamente en cirrosis hepática severa.',
      administrationNotes: 'NUNCA suspender de manera brusca; retirar de forma gradual a lo largo de 1-2 semanas para evitar el efecto rebote con crisis hipertensiva, angina inestable o infarto agudo de miocardio.'
    },
    safety: {
      blackBoxWarning: 'NO SUSPENDER ABRUPTAMENTE: LA RETIRADA BRUSCA PUEDE DESENCADENAR ISQUEMIA MIOCÁRDICA GRAVE, INFARTO AGUDO DE MIOCARDIO, ARRITMIAS VENTRICULARES MORTALES Y CRISIS HIPERTENSIVA DE REBOTE.',
      contraindications: [
        'Bloqueo AV de segundo o tercer grado sin marcapasos',
        'Bradicardia sinusal severa (<45 lpm) o síndrome del seno enfermo',
        'Shock cardiogénico o insuficiencia cardíaca aguda descompensada',
        'Asma bronquial severa o crisis broncoespástica activa',
        'Feocromocitoma no tratado previamente con alfa-bloqueantes'
      ],
      adverseEffects: {
        frequent: ['Bradicardia sinusal', 'Fatiga extrema y astenia', 'Extremidades frías y fenómeno de Raynaud'],
        moderate: ['Broncoespasmo en pacientes predispuestos', 'Disfunción eréctil', 'Pesadillas e insomnio'],
        severe: ['Bloqueo AV completo y parada sinusal', 'Descompensación aguda de insuficiencia cardíaca', 'Enmascaramiento de los síntomas de hipoglucemia (excepto sudoración)']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Precaución: Se excreta en leche materna; monitorizar bradicardia e hipotensión en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Verapamilo / Diltiazem IV', severity: 'Grave', clinicalEffect: 'Riesgo extremo de colapso hemodinámico, bradicardia severa y asistolia por inhibición sinérgica de la conducción AV y contractilidad.', recommendation: 'Evitar la administración intravenosa concomitante.' },
      { interactingDrug: 'Digoxina', severity: 'Moderada', clinicalEffect: 'Prolongación aditiva del tiempo de conducción AV y mayor riesgo de bradiarritmias.', recommendation: 'Control periódico de electrocardiograma y digoxinemia.' },
      { interactingDrug: 'Inhibidores de CYP2D6 (Fluoxetina, Paroxetina)', severity: 'Grave', clinicalEffect: 'Aumento de 4 a 6 veces en las concentraciones séricas de metoprolol, desencadenando bradicardia profunda.', recommendation: 'Reducir dosis de metoprolol a la mitad o cambiar a atenolol/nadolol.' }
    ],
    monitoringParameters: ['Frecuencia cardíaca (mantener >55 lpm en reposo)', 'Presión arterial sistólica y diastólica', 'Electrocardiograma basal y de control', 'Glucemia en pacientes diabéticos'],
    storageConditions: 'Conservar por debajo de 30 °C en lugar seco y protegido de la luz.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'nifedipino',
    genericName: 'Nifedipino',
    commercialNames: ['Adalat', 'Adalat OROS', 'Nifecor', 'Procardia XL'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de liberación osmótica de Nifedipino',
    atcCode: 'C08CA05',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Antagonista del calcio dihidropiridínico de acción vasodilatadora arteriolar selectiva',
    description: 'Bloqueador de los canales lentos de calcio del grupo de las dihidropiridinas. Actúa selectivamente sobre el músculo liso vascular arterial produciendo vasodilatación periférica y coronaria potente con mínima afectación directa sobre la conducción cardíaca nodal.',
    presentations: [
      { id: 'nif-1', form: 'Comprimidos de liberación modificada / osmótica (OROS)', concentration: '30 mg y 60 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'nif-2', form: 'Cápsulas de liberación prolongada (Retard)', concentration: '20 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas' },
      { id: 'nif-3', form: 'Cápsulas de gelatina blanda de liberación inmediata (OBSOLETA)', concentration: '10 mg', route: 'Oral', packaging: 'Caja x 20 cápsulas' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe el flujo de iones de calcio a través de los canales dependientes de voltaje tipo L en las células musculares lisas de la túnica media arterial y coronaria. Reduce el tono miógeno vascular, provocando dilatación arteriolar generalizada con disminución de la resistencia vascular periférica (poscarga) y de la presión arterial, además de mejorar la perfusión miocárdica transmural.',
      molecularTarget: 'Canales de calcio tipo L dependientes de voltaje (Cav1.2) en músculo liso vascular',
      pharmacokinetics: {
        bioavailability: 'Formulaciones OROS: 45-68% de biodisponibilidad con perfil plasmático plano y meseta constante por 24h.',
        halfLife: 'Formulación OROS: semivida aparente de 11 horas; formulación rápida: 2 horas.',
        metabolism: 'Hepático casi completo mediante la isoenzima CYP3A4 a derivados farmacológicamente inactivos',
        elimination: 'Excreción renal 70-80% como metabolitos inactivos, resto biliar/fecal'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial y de bata blanca resistente',
      'Angina de pecho crónica estable y angina vasoespástica (de Prinzmetal)',
      'Crisis hipertensiva en el embarazo y preeclampsia grave (fármaco de primera línea)',
      'Tocolítico de primera línea para inhibición del parto pretérmino (24 a 34 semanas)'
    ],
    posology: {
      adultStandard: 'Hipertensión y Angina: Nifedipino OROS 30 a 60 mg una vez al día con el desayuno; puede titularse hasta 90-120 mg/día. Tocolisis en amenaza de parto prematuro: 20 mg vía oral inicial, seguido de 10-20 mg cada 6-8 horas por 48 horas (máximo 160 mg/día).',
      pediatricDose: 'Crisis hipertensiva pediátrica (solo en UCI con OROS triturado o suspensión magistral): 0.25 a 0.5 mg/kg/dosis.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste de dosis'
      },
      hepaticAdjustment: 'Disminuir la dosis inicial a la mitad en cirrosis hepática debido a menor metabolismo hepático por CYP3A4.',
      administrationNotes: 'PROHIBIDA LA ADMINISTRACIÓN SUBLINGUAL DE CÁPSULAS RÁPIDAS EN CRISIS HIPERTENSIVAS: causa caídas bruscas descontroladas de la presión arterial con isquemia miocárdica aguda, ACV isquémico y muerte. Ingerir los comprimidos OROS enteros, sin masticar ni partir.'
    },
    safety: {
      blackBoxWarning: 'LAS CÁPSULAS DE LIBERACIÓN INMEDIATA ESTÁN PROHIBIDAS PARA EL TRATAMIENTO URGENTE DE LA HIPERTENSIÓN ARTERIAL POR RIESGO DE COLAPSO VASCULAR, INFARTO DE MIOCARDIO Y MUERTE.',
      contraindications: [
        'Hipotensión arterial severa (PAS <90 mmHg) y shock cardiogénico',
        'Estenosis aórtica severa sintomática',
        'Uso dentro del primer mes post-infarto agudo de miocardio sin insuficiencia cardíaca',
        'Hipersensibilidad a derivados dihidropiridínicos'
      ],
      adverseEffects: {
        frequent: ['Edema periférico maleolar dependiente de la gravedad (no responde a diuréticos)', 'Cefalea pulsátil', 'Rubefacción facial y sofocos'],
        moderate: ['Taquicardia refleja y palpitaciones', 'Mareo ortostático', 'Hiperplasia gingival'],
        severe: ['Isquemia miocárdica paradójica por robo coronario', 'Hipotensión severa con síncope', 'Hepatitis colestásica autoinmune infrecuente']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia; fármaco de elección en hipertensión postparto.'
    },
    interactions: [
      { interactingDrug: 'Zumo de pomelo (toronja)', severity: 'Grave', clinicalEffect: 'Potente inhibición del CYP3A4 intestinal que duplica o triplica los niveles de nifedipino, causando hipotensión severa.', recommendation: 'Prohibir estrictamente el consumo de zumo de pomelo.' },
      { interactingDrug: 'Sulfato de Magnesio IV', severity: 'Grave', clinicalEffect: 'Bloqueo neuromuscular exagerado y colapso circulatorio severo en preeclampsia.', recommendation: 'Monitoreo neuromuscular y hemodinámico riguroso si se coadministran.' },
      { interactingDrug: 'Inductores de CYP3A4 (Rifampicina, Fenitoína)', severity: 'Grave', clinicalEffect: 'Descenso drástico de los niveles de nifedipino con pérdida total del efecto antihipertensivo.', recommendation: 'Evitar o aumentar marcadamente la dosis de nifedipino.' }
    ],
    monitoringParameters: ['Presión arterial en bipedestación y decúbito', 'Frecuencia cardíaca', 'Aparición de edemas pretibiales o maleolares'],
    storageConditions: 'Conservar en envase original protegido de la luz y la humedad a menos de 30 °C.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'verapamilo',
    genericName: 'Verapamilo Clorhidrato',
    commercialNames: ['Manidon', 'Isoptin', 'Calan', 'Veramex'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Caja y blíster de Verapamilo comprimidos recubiertos',
    atcCode: 'C08DA01',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Antagonista del calcio no dihidropiridínico (fenilalquilamina) inotrópico y cronotrópico negativo',
    description: 'Calcioantagonista de clase fenilalquilamina con marcada predilección por los canales de calcio del tejido cardíaco. Deprime selectivamente el automatismo del nodo sinusal, retrasa la conducción auriculoventricular y reduce la contractilidad miocárdica de forma mucho más intensa que las dihidropiridinas.',
    presentations: [
      { id: 'ver-1', form: 'Comprimidos orales de liberación inmediata', concentration: '80 mg y 120 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' },
      { id: 'ver-2', form: 'Comprimidos de liberación retardada / prolongada', concentration: '120 mg, 180 mg y 240 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'ver-3', form: 'Solución inyectable intravenosa', concentration: '2.5 mg/mL (ampolla de 2 mL)', route: 'Intravenosa', packaging: 'Caja x 5 ampollas de 5 mg' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe selectivamente los canales de calcio voltaje-dependientes de tipo L en el nodo auriculoventricular (AV), nodo sinusal y cardiomiocitos contráctiles, fijándose al poro del canal en su conformación abierta. Esto prolonga el periodo refractario efectivo del nodo AV, enlentece la velocidad de conducción nodal y reduce el consumo miocárdico de oxígeno mediante un marcado efecto inotrópico y cronotrópico negativo.',
      molecularTarget: 'Canales de calcio tipo L (Cav1.2) en nodo AV y miocardio contráctil',
      pharmacokinetics: {
        bioavailability: 'Oral: 20 a 35% por intenso metabolismo presistémico hepático (primer paso saturable).',
        halfLife: 'Dosis única: 2.8 a 7.4 horas; con dosis repetidas se prolonga a 4.5-12 horas.',
        metabolism: 'Hepático masivo por CYP3A4 y CYP1A2 a norverapamilo (con 20% de actividad vasodilatadora)',
        elimination: 'Excreción urinaria 70% como metabolitos, heces 16%'
      }
    },
    therapeuticIndications: [
      'Reversión y control urgente de taquicardias supraventriculares paroxísticas (TSVP)',
      'Control de la frecuencia ventricular en fibrilación auricular y aleteo auricular con respuesta rápida',
      'Angina de pecho crónica estable, de esfuerzo y angina vasoespástica',
      'Hipertensión arterial esencial moderada a grave',
      'Profilaxis de la cefalea en racimos (cluster headache) y migraña'
    ],
    posology: {
      adultStandard: 'Antiarrítmico IV en TSVP: 5 a 10 mg IV en bolo lento en 2 minutos bajo ECG continuo; repetir 5 mg a los 15-30 min si no revierte. Hipertensión y Angina oral: 80 mg cada 8 horas o formulación retardada 180 a 240 mg una vez al día (máximo 480 mg/día).',
      pediatricDose: 'Arritmias pediátricas IV: 0.1 a 0.2 mg/kg en bolo lento en 2-3 minutos con monitorización estricta. CONTRAINDICADO en lactantes menores de 1 año por riesgo de colapso cardiovascular irreversible.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste habitual',
        severe: 'Reducir dosis oral al 75% y monitorizar intervalo PR.'
      },
      hepaticAdjustment: 'Reducir dosis oral al 20-30% de la dosis habitual en cirrosis hepática debido a aumento masivo de la biodisponibilidad y semivida.',
      administrationNotes: 'CONTRAINDICADO EN LACTANTES MENORES DE 1 AÑO (riesgo de parada cardíaca en asistolia). NUNCA administrar por vía intravenosa junto con o pocas horas después de un betabloqueante endovenoso.'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADO EN SÍNDROME DE WOLFF-PARKINSON-WHITE CON FIBRILACIÓN AURICULAR (ACELERA LA CONDUCCIÓN POR LA VÍA ACCESORIA PUDIENDO INDUCIR FIBRILACIÓN VENTRICULAR Y PARADA CARDÍACA).',
      contraindications: [
        'Insuficiencia cardíaca congestiva con fracción de eyección deprimida (<40%)',
        'Bloqueo auriculoventricular de 2º o 3º grado (salvo con marcapasos)',
        'Síndrome del nodo sinusal enfermo',
        'Síndrome de Wolff-Parkinson-White o Lown-Ganong-Levine con fibrilación auricular',
        'Shock cardiogénico o hipotensión arterial severa'
      ],
      adverseEffects: {
        frequent: ['Estreñimiento resistente (en hasta el 30% de pacientes por inhibición del músculo liso colónico)', 'Mareo y cefalea', 'Bradicardia sinusal'],
        moderate: ['Hipotensión arterial', 'Edema maleolar', 'Bloqueo AV de primer grado con prolongación del PR'],
        severe: ['Bloqueo auriculoventricular completo y asistolia', 'Colapso hemodinámico agudo por disfunción sistólica ventricular', 'Hepatotoxicidad reversible']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia; bajas concentraciones en leche humana.'
    },
    interactions: [
      { interactingDrug: 'Betabloqueantes orales o IV (Metoprolol, Propranolol)', severity: 'Grave', clinicalEffect: 'Bradicardia extrema, bloqueo AV completo y paro cardíaco por inhibición aditiva de la conducción.', recommendation: 'Evitar la asociación intravenosa; vigilar estrechamente en uso oral.' },
      { interactingDrug: 'Digoxina', severity: 'Grave', clinicalEffect: 'Inhibe la glicoproteína P renal, incrementando la digoxinemia en un 50-75% con intoxicación digitálica grave.', recommendation: 'Reducir la dosis de digoxina a la mitad y monitorear digoxinemia.' },
      { interactingDrug: 'Estatinas (Simvastatina, Lovastatina)', severity: 'Grave', clinicalEffect: 'Inhibe CYP3A4, multiplicando los niveles séricos de la estatina con alto riesgo de rabdomiólisis.', recommendation: 'Limitar la dosis de simvastatina a máximo 10 mg/día o cambiar a pravastatina/rosuvastatina.' }
    ],
    monitoringParameters: ['Electrocardiograma (vigilar intervalo PR y ritmo)', 'Presión arterial y pulso', 'Hábito intestinal (estreñimiento)', 'Función hepática'],
    storageConditions: 'Conservar entre 15 °C y 30 °C. Proteger de la luz.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'captopril',
    genericName: 'Captopril',
    commercialNames: ['Capoten', 'Cesplon', 'Tensiomin', 'Capotena'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos orales ranurados de Captopril',
    atcCode: 'C09AA01',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) con grupo sulfhidrilo',
    description: 'Primer inhibidor de la enzima convertidora de angiotensina (IECA) desarrollado. Posee un grupo sulfhidrilo (-SH) característico en su molécula. De inicio de acción rápido y corta duración, actúa disminuyendo la síntesis de angiotensina II y la secreción de aldosterona.',
    presentations: [
      { id: 'cap-1', form: 'Comprimidos orales ranurados', concentration: '25 mg y 50 mg', route: 'Oral / Sublingual (emergencia)', packaging: 'Caja x 30 y 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe de forma competitiva la peptidildipeptidasa denominada Enzima Convertidora de Angiotensina (ECA), impidiendo la conversión de angiotensina I en el potente vasoconstrictor endógeno angiotensina II. Simultáneamente bloquea la degradación de bradicinina (cininasa II), aumentando las concentraciones de prostaglandinas vasodilatadoras (PGE2 y prostaciclina) y óxido nítrico.',
      molecularTarget: 'Enzima Convertidora de Angiotensina (ECA / Quininasa II)',
      pharmacokinetics: {
        bioavailability: 'Aproximadamente 60-75% en ayunas; la presencia de alimentos en el estómago disminuye la absorción en un 30-40%.',
        halfLife: 'Aproximadamente 1.7 a 2 horas en función renal normal; se prolonga a más de 20 horas en anuria.',
        metabolism: 'Hepático parcial a dímeros de disulfuro y conjugados de cisteína',
        elimination: 'Excreción renal >95% (40-50% fármaco inalterado)'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial y renovascular',
      'Urgencias hipertensivas sintomáticas (vía oral o masticado/sublingual)',
      'Insuficiencia cardíaca congestiva crónica sintomática (asociado a diuréticos)',
      'Post-infarto de miocardio precoz con disfunción ventricular izquierda',
      'Nefropatía diabética tipo 1 incipiente o establecida con proteinuria'
    ],
    posology: {
      adultStandard: 'Hipertensión: inicial 25 a 50 mg/día repartidos en 2 tomas (1 hora antes de comidas); mantenimiento 50 a 100 mg cada 12 horas (máximo 150 mg/día). Insuficiencia cardíaca: inicio con 6.25 mg cada 8 horas para evitar hipotensión de primera dosis, titulando semanalmente. Urgencia hipertensiva: 25 mg vía oral o sublingual.',
      pediatricDose: 'Hipertensión pediátrica: Recién nacidos: 0.01 a 0.05 mg/kg/dosis cada 8-12 horas. Niños mayores: 0.15 a 0.3 mg/kg/dosis cada 8 horas (máximo 6 mg/kg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 20-50 mL/min: Iniciar con 75% de la dosis estándar cada 12-24 horas.',
        severe: 'ClCr <20 mL/min: Iniciar con 50% de la dosis habitual cada 24 horas y titular bajo control de potasio y creatinina.'
      },
      hepaticAdjustment: 'No suele requerir ajuste específico salvo ascitis refractaria o síndrome hepatorrenal.',
      administrationNotes: 'Administrar 1 hora ANTES de las comidas para evitar interferencia en la biodisponibilidad. Riesgo de hipotensión severa tras la primera dosis en pacientes hipovolémicos o bajo tratamiento diurético previo.'
    },
    safety: {
      blackBoxWarning: 'TERATOGÉNESIS MORTAL: CONTRAINDICADO DE FORMA ABSOLUTA DURANTE EL SEGUNDO Y TERCER TRIMESTRE DE EMBARAZO POR RIESGO DE OLIGOHIDRAMNIOS, HIPOPLASIA PULMONAR FETAL, ANURIA, MALFORMACIONES CRANEOFACIALES Y MUERTE FETAL.',
      contraindications: [
        'Embarazo confirmado o lactancia',
        'Antecedente de angioedema previo inducido por IECAs o idiopático',
        'Estenosis bilateral de la arteria renal o estenosis arterial en riñón único funcionante',
        'Uso simultáneo con aliskireno en pacientes diabéticos o con fallo renal'
      ],
      adverseEffects: {
        frequent: ['Tos seca persistente irritativa no productiva mediada por bradicinina (5-20%)', 'Hipotensión ortostática tras primera dosis', 'Disgeusia transitoria (sabor metálico por grupo sulfhidrilo)'],
        moderate: ['Hiperpotasemia (especialmente con suplementos de K+)', 'Erupción cutánea pruriginosa', 'Deterioro agudo transitorio de función renal'],
        severe: ['Angioedema de lengua, glotis y laringe con asfixia potencialmente mortal', 'Agranulocitosis y neutropenia grave (por grupo -SH)', 'Insuficiencia renal anúrica en estenosis arterial renal bilateral']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro con precaución: Se excreta en cantidades mínimas; preferible enalapril en prematuros.'
    },
    interactions: [
      { interactingDrug: 'Suplementos de Potasio y Diuréticos Ahorradores (Espironolactona)', severity: 'Grave', clinicalEffect: 'Aumento sinérgico marcado del potasio sérico con hiperpotasemia fatal y paro cardíaco.', recommendation: 'Monitorear ionograma seriado y evitar suplementos innecesarios.' },
      { interactingDrug: 'AINES (Ibuprofeno, Diclofenaco, Ketorolaco)', severity: 'Grave', clinicalEffect: 'Inhibición de prostaglandinas renales vasodilatadoras que anula el efecto antihipertensivo y precipita fallo renal agudo.', recommendation: 'Evitar el uso crónico conjunto; hidratar adecuadamente.' },
      { interactingDrug: 'Litio', severity: 'Grave', clinicalEffect: 'Disminución del aclaramiento renal de litio con aumento peligroso de litemia e intoxicación neurotóxica.', recommendation: 'Monitorear niveles plasmáticos de litio y ajustar dosis.' }
    ],
    monitoringParameters: ['Creatinina sérica y filtrado glomerular', 'Potasio sérico (K+)', 'Presión arterial ambulatoria', 'Recuento leucocitario en caso de fiebre o infección'],
    storageConditions: 'Conservar por debajo de 30 °C en frascos herméticos y secos (proteger de humedad).',
    updatedAt: '2026-03-30'
  },
  {
    id: 'losartan',
    genericName: 'Losartán Potásico',
    commercialNames: ['Cozaar', 'Convertal', 'Cardioral', 'Simperten', 'Satoren'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos recubiertos de Losartán Potásico',
    atcCode: 'C09CA01',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Antagonista de los Receptores de Angiotensina II (ARA-II / AT1)',
    description: 'Antagonista oral selectivo y competitivo del receptor AT1 de la angiotensina II. Bloquea las acciones presoras y proliferativas de la angiotensina II sin interferir con la degradación de la bradicinina, lo que minimiza la incidencia de tos seca e inducida por IECAs. Posee además un efecto uricosúrico intrínseco distintivo.',
    presentations: [
      { id: 'los-1', form: 'Comprimidos recubiertos', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea selectivamente el receptor de angiotensina II subtipo 1 (AT1) presente en músculo liso vascular, glándula suprarrenal y miocardio. Su metabolito hepático activo E-3174 es un antagonista no competitivo aún más potente (10 a 40 veces más activo) y de vida media prolongada. Inhibe la vasoconstricción mediada por angiotensina II y la síntesis de aldosterona, reduce la hipertrofia ventricular y promueve la natriuresis.',
      molecularTarget: 'Receptores AT1 de Angiotensina II y transportador URAT1 renal (uricosúrico)',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 33% debido a metabolización de primer paso hepático.',
        halfLife: 'Losartán original: 2 horas; metabolito activo E-3174: 6 a 9 horas.',
        metabolism: 'Hepático masivo por CYP2C9 y CYP3A4 al metabolito carboxílico activo E-3174',
        elimination: 'Excreción biliar/fecal 60%, renal 35%'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial en adultos y niños mayores de 6 años',
      'Protección renal en pacientes diabéticos tipo 2 con proteinuria e hipertensión (nefroprotección)',
      'Reducción del riesgo de accidente cerebrovascular en pacientes con hipertensión e hipertrofia ventricular izquierda (estudio LIFE)',
      'Insuficiencia cardíaca crónica en pacientes intolerantes a los IECAs por tos persistente',
      'Hipertensión arterial asociada a hiperuricemia o gota concomitante'
    ],
    posology: {
      adultStandard: 'Hipertensión: 50 mg una vez al día; puede aumentarse a 100 mg una vez al día o 50 mg cada 12 horas. Pacientes deplecionados de volumen o ancianos: iniciar con 25 mg/día. Nefropatía diabética: 50 a 100 mg una vez al día.',
      pediatricDose: 'Niños ≥6 años y 20-50 kg: 0.7 mg/kg una vez al día (máximo 25 mg/día). Niños >50 kg: 50 mg una vez al día (máximo 100 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <30 mL/min o hemodiálisis: iniciar con 25 mg/día y vigilar potasio sérico.'
      },
      hepaticAdjustment: 'Iniciar con dosis baja de 25 mg una vez al día en cirrosis hepática o insuficiencia hepática compensada.',
      administrationNotes: 'Puede administrarse con o sin alimentos. Vigilar el nivel sérico de potasio especialmente al asociarse a ahorradores de potasio o insuficiencia renal.'
    },
    safety: {
      blackBoxWarning: 'TOXICIDAD FETAL GRAVE: DEBE SUSPENDERSE INMEDIATAMENTE AL CONFIRMARSE EMBARAZO POR CAUSAR LESIÓN RENAL FETAL, OLIGOHIDRAMNIOS, DEFORMIDAD ESQUELÉTICA Y MUERTE FETAL O NEONATAL.',
      contraindications: [
        'Embarazo y lactancia materna',
        'Insuficiencia hepática grave',
        'Estenosis bilateral de la arteria renal',
        'Coadministración con aliskireno en diabetes mellitus o insuficiencia renal moderada-severa'
      ],
      adverseEffects: {
        frequent: ['Mareo e inestabilidad ortostática', 'Cefalea leve', 'Fatiga general'],
        moderate: ['Hiperpotasemia', 'Hipotensión en pacientes hipovolémicos', 'Aumento moderado transitorio de creatinina sérica'],
        severe: ['Angioedema (menos frecuente que con IECAs pero documentado)', 'Fallo renal agudo en pacientes con estenosis de arteria renal', 'Rabdomiólisis infrecuente']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'No recomendado: Se desconoce su excreción en leche materna humana; riesgo de daño renal neonatal.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos ahorradores de potasio y suplementos de K+', severity: 'Grave', clinicalEffect: 'Aumento sustancial del potasio sérico con arritmias cardíacas graves.', recommendation: 'Monitorear niveles de potasio periódicamente.' },
      { interactingDrug: 'Fluconazol (Inhibidor CYP2C9)', severity: 'Moderada', clinicalEffect: 'Disminución de la conversión de losartán a su metabolito activo potente E-3174.', recommendation: 'Vigilar control tensional.' },
      { interactingDrug: 'AINES', severity: 'Grave', clinicalEffect: 'Atenuación del efecto hipotensor y riesgo acelerado de nefropatía aguda.', recommendation: 'Evitar o mantener normovolemia.' }
    ],
    monitoringParameters: ['Presión arterial ambulatoria', 'Electrolitos séricos (potasio)', 'Creatinina sérica y tasa de filtración glomerular', 'Ácido úrico en sangre'],
    storageConditions: 'Conservar a temperatura ambiente protegida de la humedad y la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'candesartan',
    genericName: 'Candesartán Cilexetilo',
    commercialNames: ['Atacand', 'Blopress', 'Karvea', 'Parapres', 'Amias'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos de Candesartán Cilexetilo en blíster',
    atcCode: 'C09CA06',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Antagonista potente de receptores AT1 de Angiotensina II de disociación muy lenta',
    description: 'Profármaco que durante la absorción gastrointestinal se bioactiva por esterasas a candesartán. Es un bloqueador del receptor AT1 de insuperable afinidad y disociación extraordinariamente lenta (unión prácticamente irreversible), logrando control de la presión arterial uniforme durante más de 24 horas y reducción demostrada de la morbimortalidad en insuficiencia cardíaca.',
    presentations: [
      { id: 'cand-1', form: 'Comprimidos orales ranurados', concentration: '8 mg, 16 mg y 32 mg', route: 'Oral', packaging: 'Caja x 28 y 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Antagonista no competitivo selectivo del receptor AT1 de la angiotensina II. Se une con fuerza y afinidad unas 80 veces mayor que el losartán y se disocia con extrema lentitud del receptor, bloqueando sostenidamente la cascada intracelular de fosfolipasa C, la liberación de aldosterona y la vasoconstricción arterial periférica.',
      molecularTarget: 'Receptores AT1 de Angiotensina II con enlace cuasi-irreversible',
      pharmacokinetics: {
        bioavailability: 'Bioactivación completa a candesartán libre; biodisponibilidad del 15% con escasa variabilidad interindividual.',
        halfLife: 'Terminal de 9 a 12 horas; el efecto biológico antihipertensivo persiste más de 24 horas.',
        metabolism: 'Hidrólisis completa en la pared intestinal durante la absorción; metabolismo hepático menor por CYP2C9',
        elimination: 'Excreción renal 33% e intestinal/biliar 67% inalterado'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial en estadios I a III',
      'Tratamiento de la insuficiencia cardíaca con disfunción sistólica ventricular izquierda (FEVI ≤40%) añadida a IECAs o en pacientes intolerantes (programa CHARM)',
      'Profilaxis de la nefropatía en pacientes hipertensos con microalbuminuria'
    ],
    posology: {
      adultStandard: 'Hipertensión: inicial 8 mg una vez al día; dosis de mantenimiento habitual 16 mg una vez al día (máximo 32 mg/día). Insuficiencia cardíaca: inicio con 4 mg una vez al día, duplicando la dosis cada 2 semanas según tolerancia hasta la dosis objetivo de 32 mg/día.',
      pediatricDose: 'Niños ≥6 años: <50 kg: 4 a 8 mg una vez al día (máximo 16 mg); ≥50 kg: 8 a 16 mg una vez al día (máximo 32 mg).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-60 mL/min: Iniciar con 4 mg/día.',
        severe: 'ClCr <30 mL/min: Iniciar con 4 mg/día y controlar K+ y creatinina estrechamente.'
      },
      hepaticAdjustment: 'Iniciar con 4 mg una vez al día en insuficiencia hepática leve a moderada. Contraindicado en colestasis severa.',
      administrationNotes: 'Tomar con o sin comida una vez al día a la misma hora. No suspender sin indicación médica.'
    },
    safety: {
      blackBoxWarning: 'DEBE INTERRUMPIRSE INMEDIATAMENTE AL DIAGNOSTICARSE EMBARAZO; EL BLOQUEO DEL SISTEMA RENINA-ANGIOTENSINA PROVOCA LESIÓN FETAL GRAVE, OLIGOHIDRAMNIOS Y MUERTE.',
      contraindications: [
        'Segundo y tercer trimestre de gestación y lactancia',
        'Insuficiencia hepática grave o colestasis con obstrucción biliar',
        'Uso conjunto con aliskireno en diabetes mellitus o insuficiencia renal'
      ],
      adverseEffects: {
        frequent: ['Mareo e inestabilidad postural', 'Cefalea', 'Infecciones de vías respiratorias altas'],
        moderate: ['Hipotensión sintomática', 'Hiperpotasemia', 'Deterioro moderado de la función renal'],
        severe: ['Insuficiencia renal aguda', 'Angioedema facial y laríngeo infrecuente', 'Leucopenia y neutropenia raras']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado: No se dispone de datos de seguridad en humanos durante la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos ahorradores de potasio y sales de K+', severity: 'Grave', clinicalEffect: 'Hiperpotasemia potencialmente mortal.', recommendation: 'Monitorización periódica obligatoria de electrólitos.' },
      { interactingDrug: 'Litio', severity: 'Grave', clinicalEffect: 'Aumento de niveles plasmáticos de litio con toxicidad neurotóxica.', recommendation: 'Monitorear litemia y ajustar dosis.' },
      { interactingDrug: 'AINES', severity: 'Grave', clinicalEffect: 'Disminución del efecto antihipertensivo y riesgo sinérgico de fracaso renal agudo.', recommendation: 'Garantizar hidratación y evitar uso prolongado.' }
    ],
    monitoringParameters: ['Presión arterial en reposo', 'Potasio y creatinina sérica antes y 2 semanas tras inicio o ajuste de dosis', 'Tasa de filtración glomerular'],
    storageConditions: 'Conservar a menos de 30 °C en su envase original protegido de la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'valsartan',
    genericName: 'Valsartán',
    commercialNames: ['Diovan', 'Tareg', 'Valpress', 'Entresto (asociado a Sacubitrilo)'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos ranurados de Valsartán',
    atcCode: 'C09CA03',
    anatomicalSystem: 'Antihipertensivos',
    therapeuticClass: 'Antagonista potente y selectivo del receptor AT1 de Angiotensina II',
    description: 'Antagonista no peptídico del receptor AT1 de la angiotensina II con una afinidad aproximadamente 20.000 veces mayor por el receptor AT1 que por el AT2. Reduce la morbimortalidad cardiovascular post-infarto de miocardio y en insuficiencia cardíaca.',
    presentations: [
      { id: 'val-1', form: 'Comprimidos recubiertos con película', concentration: '80 mg, 160 mg y 320 mg', route: 'Oral', packaging: 'Caja x 28 y 30 comprimidos' },
      { id: 'val-2', form: 'Comprimidos en combinación Sacubitrilo/Valsartán', concentration: '24/26 mg, 49/51 mg, 97/103 mg', route: 'Oral', packaging: 'Caja x 28 y 56 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea selectivamente el receptor subtipo AT1 en músculo liso vascular, glándula suprarrenal y riñón, impidiendo todas las acciones vasoconstrictoras, proliferativas y retenedoras de sodio y agua de la angiotensina II. Al no bloquear la enzima de conversión de angiotensina, no estimula la producción de bradicinina y no produce tos irritativa.',
      molecularTarget: 'Receptores AT1 de Angiotensina II',
      pharmacokinetics: {
        bioavailability: 'Aproximadamente 25% (rango 10-35%); los alimentos reducen el AUC en un 40%.',
        halfLife: 'Aproximadamente 6 a 9 horas.',
        metabolism: 'Mínimo hepático (alrededor del 20% es biotransformado por CYP2C9 a metabolito inactivo hidroxilado)',
        elimination: 'Excreción biliar y fecal (83%) y renal (13%) principalmente como fármaco inalterado'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial en adultos y niños a partir de 6 años',
      'Insuficiencia cardíaca sintomática con fracción de eyección reducida (FEVI deprimida)',
      'Post-infarto agudo de miocardio reciente (12 h - 10 días) con insuficiencia cardíaca clínica o disfunción ventricular',
      'En combinación con sacubitrilo (ARNI): tratamiento de primera línea de la insuficiencia cardíaca con fracción de eyección reducida'
    ],
    posology: {
      adultStandard: 'Hipertensión: 80 a 160 mg una vez al día; puede aumentarse a 320 mg una vez al día. Post-infarto de miocardio: iniciar tan pronto como a las 12 horas con 20 mg dos veces al día, titulando progresivamente a 40 mg, 80 mg y 160 mg dos veces al día. Insuficiencia cardíaca: inicio con 40 mg dos veces al día hasta dosis diana de 160 mg dos veces al día.',
      pediatricDose: 'Niños ≥6 años: <35 kg: 40 mg una vez al día (máx. 80 mg); ≥35 kg: 80 mg una vez al día (máx. 160 mg).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <30 mL/min o hemodiálisis: iniciar con precaución a dosis baja.'
      },
      hepaticAdjustment: 'No superar 80 mg/día en insuficiencia hepática leve a moderada sin colestasis. Contraindicado en insuficiencia hepática grave o cirrosis biliar.',
      administrationNotes: 'Puede tomarse con o sin comida. Si se cambia de un IECA a Sacubitrilo/Valsartán, se requiere un período de lavado estricto de al menos 36 HORAS para evitar angioedema mortal.'
    },
    safety: {
      blackBoxWarning: 'TOXICIDAD FETAL GRAVE: DEBE SUSPENDERSE AL CONFIRMARSE EMBARAZO; EL BLOQUEO DEL EJE RENINA-ANGIOTENSINA DURANTE EL 2º Y 3º TRIMESTRE PROVOCA DAÑO RENAL FETAL SEVERO Y MUERTE.',
      contraindications: [
        'Embarazo y lactancia materna',
        'Insuficiencia hepática grave, cirrosis biliar y colestasis',
        'Uso simultáneo con aliskireno en diabetes o insuficiencia renal',
        'Coadministración simultánea con un IECA (riesgo de hipotensión severa e hiperpotasemia)'
      ],
      adverseEffects: {
        frequent: ['Mareos e inestabilidad postural', 'Hipotensión ortostática', 'Cefalea leve'],
        moderate: ['Hiperpotasemia', 'Elevación transitoria del nitrógeno ureico y creatinina', 'Fatiga y astenia'],
        severe: ['Insuficiencia renal aguda en pacientes con estenosis arterial renal bilateral o hipovolemia', 'Angioedema (raro)', 'Sincope']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado: No se recomienda durante la lactancia por ausencia de datos de seguridad clínica.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos ahorradores de potasio / sales de potasio', severity: 'Grave', clinicalEffect: 'Aumento sinérgico marcado del potasio sérico con riesgo de paro cardíaco.', recommendation: 'Monitorear niveles de potasio sérico.' },
      { interactingDrug: 'Litio', severity: 'Grave', clinicalEffect: 'Aumento de concentraciones séricas de litio y toxicidad.', recommendation: 'Vigilar estrechamente niveles de litemia.' },
      { interactingDrug: 'AINES', severity: 'Grave', clinicalEffect: 'Deterioro de la función renal y reducción del efecto antihipertensivo.', recommendation: 'Mantener hidratación adecuada.' }
    ],
    monitoringParameters: ['Presión arterial en reposo', 'Ionograma sérico (K+)', 'Creatinina y filtrado glomerular', 'Función hepática en pacientes con hepatopatía'],
    storageConditions: 'Conservar a temperatura ambiente protegida de la humedad excesiva.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // DIURÉTICOS
  // ----------------------------------------------------
  {
    id: 'hidroclorotiazida',
    genericName: 'Hidroclorotiazida',
    commercialNames: ['Esidrex', 'Microzide', 'Hidrosaluretil', 'Diclotride'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de Hidroclorotiazida',
    atcCode: 'C03AA03',
    anatomicalSystem: '2 Diuréticos',
    therapeuticClass: 'Diurético tiazídico de techo intermedio y antihipertensivo',
    description: 'Diurético tiazídico prototípico. Actúa a nivel del túbulo contorneado distal renal inhibiendo la reabsorción de cloruro de sodio. Es uno de los fármacos antihipertensivos de primera línea más ampliamente prescritos, tanto en monoterapia como en combinación a dosis fijas con IECAs, ARA-II y betabloqueantes.',
    presentations: [
      { id: 'hctz-1', form: 'Comprimidos orales ranurados', concentration: '12.5 mg, 25 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe selectivamente el cotransportador simporter de sodio-cloro (NCCT / SLC12A3) en la membrana luminal de las células epiteliales del túbulo contorneado distal. Aumenta la excreción urinaria de sodio, cloro y agua, disminuyendo el volumen plasmático y el gasto cardíaco inicialmente; a largo plazo reduce la resistencia vascular periférica mediante relajación arteriolar directa.',
      molecularTarget: 'Cotransportador Na+/Cl- (NCCT / SLC12A3) del túbulo contorneado distal',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 65 a 75%.',
        halfLife: 'Terminal 6 a 15 horas.',
        metabolism: 'No se metaboliza de forma hepática relevante',
        elimination: 'Excreción renal >95% como fármaco inalterado mediante filtración glomerular y secreción tubular'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial como monoterapia o base de terapia combinada',
      'Edema asociado a insuficiencia cardíaca congestiva leve a moderada',
      'Edema de origen renal o hepático (síndrome nefrótico y ascitis cirrótica)',
      'Diabetes insípida nefrogénica (reduce paradójicamente el volumen urinario)',
      'Profilaxis de litiasis renal cálcica idiopática (reduce la calciuria)'
    ],
    posology: {
      adultStandard: 'Hipertensión: 12.5 mg a 25 mg una vez al día por la mañana (dosis superiores a 25 mg aumentan efectos metabólicos adversos sin mayor beneficio hipotensor). Edemas: 25 a 50 mg una vez al día o en días alternos (máximo 100 mg/día).',
      pediatricDose: 'Edema pediátrico: 1 a 2 mg/kg/día en 1 o 2 tomas (máximo 37.5 mg/día en niños pequeños o 50 mg/día en mayores).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: Eficacia diurética disminuida.',
        severe: 'ClCr <30 mL/min: Ineficaz como diurético (pierde efecto); cambiar a diuréticos del asa (furosemida).'
      },
      hepaticAdjustment: 'Usar con precaución en hepatopatía grave; el desequilibrio electrolítico puede precipitar encefalopatía hepática.',
      administrationNotes: 'Administrar por la mañana con el desayuno para evitar nicturia y trastornos del sueño. Fomentar ingesta de alimentos ricos en potasio si no está combinado con ahorradores de potasio.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE HIPOPOTASEMIA GRAVE, HIPONATREMIA Y ARRITMIAS VENTRICULARES EN COMBINACIÓN CON DIGOXINA. VINCULADA A MAYOR RIESGO DE CÁNCER DE PIEL NO MELANOMA EN USO CRÓNICO PROLONGADO (FOTOSENSIBILIDAD).',
      contraindications: [
        'Anuria o insuficiencia renal severa (ClCr <30 mL/min)',
        'Hipopotasemia o hiponatremia refractaria severa',
        'Hipercalcemia o hiperuricemia sintomática con gota aguda activa',
        'Alergia a sulfonamidas y derivados'
      ],
      adverseEffects: {
        frequent: ['Hipopotasemia e hipomagnesemia', 'Hiperuricemia y crisis de gota', 'Hiperglucemia en diabéticos o prediabéticos'],
        moderate: ['Hiponatremia dilucional', 'Hipercolesterolemia y elevación de triglicéridos', 'Mareo ortostático y calambres musculares'],
        severe: ['Arritmias ventriculares por hipopotasemia severa', 'Pancreatitis aguda necrosante (infrecuente)', 'Miopía aguda y glaucoma secundario de ángulo cerrado']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Precaución: Se excreta en leche materna y a dosis altas puede inhibir la lactogénesis.'
    },
    interactions: [
      { interactingDrug: 'Digoxina', severity: 'Grave', clinicalEffect: 'La hipopotasemia inducida por tiazidas sensibiliza el miocardio a la intoxicación digitálica mortal.', recommendation: 'Controlar periódicamente niveles de potasio sérico y digoxinemia.' },
      { interactingDrug: 'Litio', severity: 'Grave', clinicalEffect: 'Disminución del aclaramiento renal de litio con incremento de litemia y neurotoxicidad severa.', recommendation: 'Evitar la asociación o monitorear litemia semanalmente.' },
      { interactingDrug: 'AINES', severity: 'Moderada', clinicalEffect: 'Disminución de la eficacia diurética y antihipertensiva por inhibición de prostaglandinas renales.', recommendation: 'Vigilar presión arterial y función renal.' }
    ],
    monitoringParameters: ['Ionograma sérico completo (Na+, K+, Cl-, Ca2+, Mg2+)', 'Glucemia en ayunas y ácido úrico', 'Creatinina y urea sérica', 'Presión arterial'],
    storageConditions: 'Conservar en envases bien cerrados a temperatura ambiente (15 a 30 °C).',
    updatedAt: '2026-03-30'
  },
  {
    id: 'clortalidona',
    genericName: 'Clortalidona',
    commercialNames: ['Hygroton', 'Thalitone', 'Tenoretic (asoc.)'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos de Clortalidona en blíster',
    atcCode: 'C03BA04',
    anatomicalSystem: '2 Diuréticos',
    therapeuticClass: 'Diurético análogo tiazídico (tipo ftalimidina) de acción ultra-prolongada',
    description: 'Diurético de estructura no tiazídica pero con mecanismo análogo (tipo tiazida). Posee una prolongadísima semivida de eliminación y un amplio volumen de distribución debido a su unión masiva a la anhidrasa carbónica eritrocitaria, logrando un control tensional continuo y sostenido superior en ensayos clínicos como ALLHAT.',
    presentations: [
      { id: 'clor-1', form: 'Comprimidos orales ranurados', concentration: '25 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe el cotransportador electroneutro Na+/Cl- en el túbulo contorneado distal de la nefrona, aumentando la excreción urinaria de sodio, cloruro y agua acoplada. Posee una lenta disociación de la anhidrasa carbónica dentro de los eritrocitos circulantes, actuando como un reservorio tisular que garantiza una diuresis y vasodilatación periférica persistente por 48 a 72 horas.',
      molecularTarget: 'Cotransportador Na+/Cl- en el túbulo contorneado distal y unión a anhidrasa carbónica eritrocitaria',
      pharmacokinetics: {
        bioavailability: 'Aproximadamente 65%. Fuerte acumulación en glóbulos rojos (unión eritrocitaria >90%).',
        halfLife: 'Extremadamente prolongada: 40 a 60 horas.',
        metabolism: 'Hepático mínimo',
        elimination: 'Excreción renal 65-75% de forma inalterada'
      }
    },
    therapeuticIndications: [
      'Hipertensión arterial esencial (fármaco de elección en guías ACC/AHA)',
      'Edema secundario a insuficiencia cardíaca congestiva clase funcional II-III',
      'Edemas asociados a síndrome nefrótico o cirrosis hepática',
      'Diabetes insípida nefrogénica'
    ],
    posology: {
      adultStandard: 'Hipertensión: 12.5 mg a 25 mg una vez al día por la mañana (o 25 mg cada 48 horas); rara vez se requiere aumentar a 50 mg/día. Edemas: 50 a 100 mg una vez al día o cada 48 horas.',
      pediatricDose: 'Edema pediátrico: 1 a 2 mg/kg cada 48 horas (dosis máxima 50 mg).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: Puede requerir menor frecuencia de dosificación.',
        severe: 'ClCr <30 mL/min: Ineficaz; no recomendada.'
      },
      hepaticAdjustment: 'Usar con extrema cautela en cirrosis para no precipitar encefalopatía amoniacal.',
      administrationNotes: 'Tomar por la mañana con el desayuno. Monitorear estrechamente los niveles de potasio sérico, ya que la hipopotasemia es más frecuente que con hidroclorotiazida debido a su larga duración de acción.'
    },
    safety: {
      blackBoxWarning: 'ALTO RIESGO DE HIPOPOTASEMIA SEVERA E HIPONATREMIA DILUCIONAL PROFUNDA DEBIDO A SU SEMIVIDA EXCEPCIONALMENTE PROLONGADA DE MÁS DE 48 HORAS.',
      contraindications: [
        'Anuria o insuficiencia renal severa (ClCr <30 mL/min)',
        'Hipopotasemia o hiponatremia resistente al tratamiento',
        'Crisis de gota aguda activa o hiperuricemia grave',
        'Hipersensibilidad a derivados sulfonamídicos'
      ],
      adverseEffects: {
        frequent: ['Hipopotasemia sintomática (astenia, debilidad, calambres)', 'Hiperuricemia asintomática', 'Hiponatremia'],
        moderate: ['Hiperglucemia e intolerancia a la glucosa', 'Alcalosis metabólica hipoclorémica', 'Hipotensión ortostática'],
        severe: ['Arritmias cardíacas por hipopotasemia profunda', 'Pancreatitis aguda necrotizante', 'Agranulocitosis o trombocitopenia alérgica']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Precaución: Pasa a la leche materna; evitar dosis altas durante la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Digoxina', severity: 'Grave', clinicalEffect: 'Aparición de arritmias ventriculares graves por hipopotasemia prolongada.', recommendation: 'Control estricto de potasio sérico y ECG.' },
      { interactingDrug: 'Litio', severity: 'Grave', clinicalEffect: 'Disminución del aclaramiento renal del catión litio con intoxicación severa.', recommendation: 'Evitar uso simultáneo.' },
      { interactingDrug: 'Corticoides sistémicos', severity: 'Moderada', clinicalEffect: 'Potenciación extrema de la pérdida urinaria de potasio.', recommendation: 'Monitorizar ionograma y suplementar potasio.' }
    ],
    monitoringParameters: ['Potasio sérico (K+) y Sodio sérico (Na+)', 'Ácido úrico y glucemia basal', 'Presión arterial sistólica y diastólica'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'furosemida',
    genericName: 'Furosemida',
    commercialNames: ['Seguril', 'Lasix', 'Furosemide Teva', 'Edenol'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Ampollas inyectables y comprimidos de Furosemida',
    atcCode: 'C03CA01',
    anatomicalSystem: '2 Diuréticos',
    therapeuticClass: 'Diurético de techo alto (de asa) derivado sulfonamídico',
    description: 'Diurético de asa de máxima potencia natriurética (techo alto). Inhibe el cotransportador Na+/K+/2Cl- en la porción gruesa del asa ascendente de Henle. Induce una eliminación rápida y masiva de agua y electrólitos, siendo el tratamiento de elección en emergencias por sobrecarga hídrica como el edema agudo de pulmón.',
    presentations: [
      { id: 'furo-1', form: 'Solución inyectable IV / IM', concentration: '10 mg/mL (ampolla de 2 mL = 20 mg)', route: 'Intravenosa / Intramuscular', packaging: 'Caja x 5 y 10 ampollas de 20 mg' },
      { id: 'furo-2', form: 'Comprimidos orales ranurados', concentration: '40 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'furo-3', form: 'Solución inyectable de alta concentración', concentration: '250 mg / 25 mL', route: 'Infusión IV continua', packaging: 'Ampolla de 25 mL' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea de forma reversible el cotransportador simporter Na+/K+/2Cl- (NKCC2) en la membrana luminal del segmento grueso de la rama ascendente del asa de Henle, aboliendo el gradiente osmótico medular cortico-papilar. Provoca excreción masiva de hasta el 20-25% de la carga filtrada de sodio, cloro, potasio, calcio y magnesio, acompañada de un rápido aumento de la capacitancia venosa sistémica mediado por prostaglandinas.',
      molecularTarget: 'Cotransportador Na+/K+/2Cl- (NKCC2) en la rama ascendente gruesa del asa de Henle',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 50-60% (rango 10-90% con gran variabilidad por edema intestinal). IV: 100%.',
        halfLife: 'Aproximadamente 1 a 2 horas (se prolonga hasta 8-10 horas en insuficiencia renal y hepática avanzada).',
        metabolism: 'Mínimo hepático por glucuronidación (alrededor del 10-15%)',
        elimination: 'Excreción renal 65-80% principalmente inalterado por secreción tubular activa mediada por aniones orgánicos'
      }
    },
    therapeuticIndications: [
      'Edema agudo de pulmón cardiogénico (urgencia médica vital)',
      'Insuficiencia cardíaca congestiva crónica descompensada con sobrecarga de volumen',
      'Edema y ascitis refractaria en cirrosis hepática (habitualmente asociada a espironolactona)',
      'Edema en síndrome nefrótico e insuficiencia renal crónica avanzada',
      'Crisis hipertensivas con hipervolemia o insuficiencia renal',
      'Hipercalcemia aguda sintomática (asociada a reposición salina isotónica)'
    ],
    posology: {
      adultStandard: 'Edema agudo de pulmón: 40 a 80 mg IV en bolo lento en 2 minutos; repetir según respuesta horaria o infusión a 5-20 mg/hora. Edema crónico oral: 20 a 80 mg una vez al día por la mañana; puede aumentarse hasta 160-240 mg/día en dosis divididas. Insuficiencia renal oligúrica: hasta 250 a 1000 mg/día en infusión lenta (máximo ritmo de infusión 4 mg/minuto para prevenir ototoxicidad).',
      pediatricDose: 'Oral: 1 a 2 mg/kg/dosis cada 12 o 24 horas (máximo 6 mg/kg/día). Intravenoso: 0.5 a 1 mg/kg/dosis en bolo lento (máximo 2 mg/kg).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Dosis habitual',
        severe: 'Requiere dosis sustancialmente mayores (hasta 250-500 mg IV) debido a menor secreción tubular.'
      },
      hepaticAdjustment: 'Monitorear rigurosamente ionograma; la hipopotasemia o alcalosis inducida precipita coma hepático.',
      administrationNotes: 'EL RITMO DE INFUSIÓN INTRAVENOSA NO DEBE SUPERAR LOS 4 MG/MINUTO: la inyección en bolo rápido de dosis altas induce ototoxicidad aguda con acúfenos y sordera neurosensorial transitoria o permanente.'
    },
    safety: {
      blackBoxWarning: 'DIURÉTICO POTENTE QUE EN DOSIS ELEVADAS CAUSA DIURESIS EXTREMA CON DESHIDRATACIÓN AGUDA, DEPLECIÓN DE VOLUMEN PLASMÁTICO, COLAPSO VASCULAR Y ALTERACIONES ELECTROLÍTICAS GRAVES.',
      contraindications: [
        'Anuria irreversible que no responde a dosis de prueba',
        'Hipovolemia severa o deshidratación con hipotensión',
        'Hipopotasemia o hiponatremia graves no corregidas',
        'Estado de precoma o coma por encefalopatía hepática'
      ],
      adverseEffects: {
        frequent: ['Hipopotasemia marcada', 'Hiponatremia e hipomagnesemia', 'Deshidratación e hipotensión ortostática', 'Alcalosis metabólica hipoclorémica'],
        moderate: ['Hiperuricemia con crisis de gota', 'Hipocalcemia', 'Calambres musculares intensos'],
        severe: ['Ototoxicidad: acúfenos, hipoacusia y sordera transitoria o permanente (mayor con aminoglucósidos)', 'Fallo renal prerrenal por hipovolemia', 'Pancreatitis aguda y nefritis intersticial alérgica']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'No recomendado: Inhibe la lactancia por depleción hidrosalina; se excreta en leche materna.'
    },
    interactions: [
      { interactingDrug: 'Aminoglucósidos (Gentamicina, Amikacina)', severity: 'Grave', clinicalEffect: 'Potenciación sinérgica masiva de ototoxicidad y nefrotoxicidad; sordera neurosensorial irreversible.', recommendation: 'Evitar la asociación o monitorear audiometría y función renal.' },
      { interactingDrug: 'Digoxina', severity: 'Grave', clinicalEffect: 'La hipopotasemia e hipomagnesemia inducida por furosemida incrementa letalmente la toxicidad digitálica.', recommendation: 'Mantener potasio sérico estrictamente por encima de 4.0 mEq/L.' },
      { interactingDrug: 'AINES', severity: 'Moderada', clinicalEffect: 'Reducción drástica del efecto natriurético por inhibición de prostaglandinas renales.', recommendation: 'Ajustar dosis de diurético y vigilar balance hídrico.' }
    ],
    monitoringParameters: ['Balance hídrico estricto y diuresis horaria', 'Ionograma sérico diario (K+, Na+, Mg2+, Cl-)', 'Creatinina sérica y urea', 'Presión arterial y pulso', 'Función auditiva en infusiones altas'],
    storageConditions: 'Conservar entre 15 °C y 30 °C. Proteger las ampollas de la luz directa (se degradan adquiriendo tinte amarillo).',
    updatedAt: '2026-03-30'
  },
  {
    id: 'manitol',
    genericName: 'Manitol',
    commercialNames: ['Manitol al 10% y 20% Baxter / Braun', 'Osmitrol', 'Resectisol'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco de infusión intravenosa de solución de Manitol al 20%',
    atcCode: 'B05BC01',
    anatomicalSystem: '2 Diuréticos',
    therapeuticClass: 'Diurético osmótico parenteral de techo ilimitado',
    description: 'Polialcohol hexahidroxilado farmacológicamente inerte que actúa como diurético osmótico intravascular. Al infundirse por vía intravenosa, no atraviesa la barrera hematoencefálica intacta, elevando la osmolaridad plasmática y drenando agua libre del parénquima cerebral hacia el torrente vascular para reducir de inmediato la hipertensión intracraneal y el edema cerebral.',
    presentations: [
      { id: 'man-1', form: 'Solución para infusión intravenosa al 20%', concentration: '200 g/L (20 g en 100 mL, 50 g en 250 mL)', route: 'Intravenosa con filtro', packaging: 'Frasco de infusión x 250 mL y 500 mL' },
      { id: 'man-2', form: 'Solución para infusión intravenosa al 10%', concentration: '100 g/L', route: 'Intravenosa', packaging: 'Frasco de infusión x 500 mL' }
    ],
    mechanismOfAction: {
      summary: 'Fármaco osmóticamente activo no metabolizable que se distribuye exclusivamente en el espacio extracelular. A nivel sistémico crea un gradiente osmótico transendotelial que extrae agua del parénquima cerebral y humor acuoso hacia el lecho vascular. A nivel renal se filtra libremente por el glomérulo sin reabsorberse tubularmente, reteniendo agua por presión osmótica a lo largo del túbulo proximal y asa de Henle e induciendo diuresis acuosa masiva.',
      molecularTarget: 'Osmolaridad plasmática y tubular renal (mecanismo físico-químico no receptor)',
      pharmacokinetics: {
        bioavailability: 'Intravenosa: 100%. Oral no se absorbe (provoca diarrea osmótica masiva).',
        halfLife: 'Aproximadamente 1.5 horas en sujetos normales (hasta 36 horas en anuria).',
        metabolism: 'Mínimo hepático insignificante a glucógeno (<10%)',
        elimination: 'Excreción renal >90% por filtración glomerular sin reabsorción'
      }
    },
    therapeuticIndications: [
      'Reducción de la presión intracraneal (PIC) elevada y tratamiento del edema cerebral vasogénico o citotóxico (traumatismo craneoencefálico, hemorragia, tumores)',
      'Disminución rápida de la presión intraocular (PIO) en crisis aguda de glaucoma de ángulo cerrado refractario',
      'Promoción de la diuresis forzada en ciertas intoxicaciones exógenas'
    ],
    posology: {
      adultStandard: 'Hipertensión intracraneal o Glaucoma agudo: Manitol al 20%: 0.25 a 1 g/kg (1.25 a 5 mL/kg) administrado en infusión intravenosa rápida en 20 a 30 minutos a través de vía venosa permeable con filtro; puede repetirse cada 6 a 8 horas si la osmolaridad sérica es <320 mOsm/kg y la brecha osmolar <20 mOsm/kg.',
      pediatricDose: 'Reducción de PIC pediátrica: 0.25 a 0.5 g/kg en infusión IV durante 20 a 30 minutos.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Usar dosis bajas y vigilar diuresis',
        severe: 'CONTRAINDICADO EN ANURIA O INSUFICIENCIA RENAL AGUDA ESTABLECIDA (induce edema agudo de pulmón por sobrecarga masiva de volumen intravascular).'
      },
      hepaticAdjustment: 'No requiere ajuste primario.',
      administrationNotes: 'INSPECCIONAR EL FRASCO ANTES DE LA ADMINISTRACIÓN: a bajas temperaturas el manitol cristaliza. Si presenta cristales, calentar al baño maría a 50-60 °C hasta disolución completa y enfriar a temperatura corporal antes de infundir. USAR SIEMPRE EQUIPO DE INFUSIÓN CON FILTRO.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE EDEMA AGUDO DE PULMÓN Y CONGESTIÓN CIRCULATORIA SEVERA POR EXPANSIÓN RÁPIDA DEL VOLUMEN PLASMÁTICO EN PACIENTES CON CARDIOPATÍA O INSUFICIENCIA RENAL. NO ADMINISTRAR SI LA OSMOLARIDAD SÉRICA EXCEDE 320 MOSM/KG.',
      contraindications: [
        'Anuria completa por nefropatía orgánica severa',
        'Insuficiencia cardíaca congestiva grave y edema agudo de pulmón',
        'Hemorragia intracraneal activa no quirúrgica (salvo durante craneotomía abierta)',
        'Deshidratación severa o hiperosmolaridad sérica (>320 mOsm/kg)'
      ],
      adverseEffects: {
        frequent: ['Expansión intravascular transitoria con cefalea y náuseas', 'Sed intensa y sequedad bucal', 'Deshidratación y poliuria extrema'],
        moderate: ['Hiponatremia dilucional inicial seguida de hipernatremia grave', 'Hipopotasemia o hiperpotasemia', 'Flebitis en el sitio de inyección'],
        severe: ['Edema pulmonar agudo cardiogénico', 'Nefrosis osmótica e insuficiencia renal aguda por vacuolización tubular', 'Acidosis metabólica e hiperosmolaridad extrema']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro en indicaciones agudas de emergencia vital.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos de asa (Furosemida)', severity: 'Moderada', clinicalEffect: 'Efecto sinérgico potente en la reducción de la presión intracraneal y riesgo de deshidratación extrema.', recommendation: 'Monitorear volemia y electrólitos estrechamente.' },
      { interactingDrug: 'Fármacos nefrotóxicos (Ciclosporina, Aminoglucósidos)', severity: 'Grave', clinicalEffect: 'Potenciación del riesgo de necrosis tubular y fallo renal osmótico.', recommendation: 'Vigilar creatinina y diuresis horaria.' }
    ],
    monitoringParameters: ['Osmolaridad sérica (mantener <320 mOsm/kg)', 'Brecha osmolar (osmolar gap)', 'Presión venosa central y signos de sobrecarga pulmonar', 'Ionograma sérico seriado (Na+, K+)', 'Diuresis horaria mediante sonda vesical'],
    storageConditions: 'Conservar entre 20 °C y 30 °C. Si se forman cristales por frío, disolver con calor suave.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'espironolactona',
    genericName: 'Espironolactona',
    commercialNames: ['Aldactone', 'Vivoramin', 'Aldoleo', 'Spironone'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de Espironolactona',
    atcCode: 'C03DA01',
    anatomicalSystem: '2 Diuréticos',
    therapeuticClass: 'Diurético ahorrador de potasio y antagonista del receptor mineralocorticoide de aldosterona',
    description: 'Antagonista competitivo sintético de los receptores intracelulares de aldosterona. Actúa en el túbulo colector distal promoviendo la excreción de sodio y cloruro mientras conserva potasio e iones de hidrógeno. Demostró una reducción contundente de la mortalidad en insuficiencia cardíaca con fracción de eyección reducida (estudio RALES) y es el tratamiento de elección en ascitis cirrótica e hiperaldosteronismo primario.',
    presentations: [
      { id: 'espi-1', form: 'Comprimidos orales recubiertos', concentration: '25 mg, 50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 20, 30 y 50 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Se une competitivamente a los receptores citosólicos mineralocorticoides (MR) en las células principales del túbulo contorneado distal tardío y del túbulo colector cortical. Impide la translocación nuclear del complejo aldosterona-receptor y bloquea la transcripción de proteínas inducidas por aldosterona (AIP), reduciendo la síntesis e inserción de canales epiteliales de sodio (ENaC) y de bombas Na+/K+-ATPasa basolaterales. Esto disminuye la reabsorción de Na+ y previene la eliminación tubular de K+ y H+.',
      molecularTarget: 'Receptor mineralocorticoide citoplásmico (MR) en el túbulo colector renal',
      pharmacokinetics: {
        bioavailability: 'Aproximadamente 70-90% (los alimentos mejoran significativamente su absorción).',
        halfLife: 'Espironolactona: 1.4 horas; su metabolito activo principal Canrenona: 13 a 24 horas.',
        metabolism: 'Hepático rápido y extenso a canrenona, 7-alfa-tiometil-espironolactona y 6-beta-hidroxi-canrenona',
        elimination: 'Excreción renal y biliar/fecal balanceada como metabolitos'
      }
    },
    therapeuticIndications: [
      'Insuficiencia cardíaca crónica sintomática con fracción de eyección reducida (IC-FEr, clase NYHA II-IV)',
      'Edema y ascitis refractaria secundaria a cirrosis hepática (fármaco pilar)',
      'Hipertensión arterial resistente (cuarto escalón de tratamiento)',
      'Hiperaldosteronismo primario (adenoma suprarrenal o hiperplasia bilateral) diagnóstico y tratamiento',
      'Síndrome nefrótico cuando no responde a otros diuréticos'
    ],
    posology: {
      adultStandard: 'Insuficiencia cardíaca crónica: iniciar con 25 mg una vez al día; titular a 50 mg una vez al día si el K+ sérico se mantiene <5.0 mEq/L. Ascitis cirrótica: 100 mg una vez al día (generalmente combinada con furosemida 40 mg en proporción 100:40 para balance electrolítico), titulando hasta 400 mg/día. Hipertensión resistente: 25 a 50 mg una vez al día.',
      pediatricDose: 'Edema e hipertensión pediátrica: 1 a 3 mg/kg/día administrados en 1 o 2 tomas (máximo 100 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: Iniciar con 12.5 a 25 mg cada 48 horas y vigilar K+ estrictamente.',
        severe: 'ClCr <30 mL/min: CONTRAINDICADA de forma absoluta por alto riesgo de hiperpotasemia fatal.'
      },
      hepaticAdjustment: 'Ajustar cuidadosamente; el desequilibrio hidroelectrolítico rápido puede precipitar encefalopatía.',
      administrationNotes: 'Tomar preferiblemente con alimentos para optimizar la biodisponibilidad y reducir molestias gástricas. NO utilizar suplementos de potasio ni sustitutos de sal con contenido de KCl.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HIPERPOTASEMIA GRAVE POTENCIALMENTE MORTAL, ESPECIALMENTE EN PACIENTES CON INSUFICIENCIA RENAL O EN COMBINACIÓN CON IECAS, ARA-II O SUPLEMENTOS DE POTASIO.',
      contraindications: [
        'Hiperpotasemia basal confirmada (>5.0 mEq/L)',
        'Insuficiencia renal moderada a grave (ClCr <30 mL/min o creatinina sérica >2.5 mg/dL en hombres o >2.0 mg/dL en mujeres)',
        'Enfermedad de Addison o insuficiencia suprarrenal primaria',
        'Uso concomitante con eplerenona u otros diuréticos ahorradores de potasio'
      ],
      adverseEffects: {
        frequent: ['Ginecomastia dolorosa uni o bilateral en varones (hasta 10% por bloqueo androgénico y unión a receptores de estrógenos)', 'Trastornos menstruales y amenorrea en mujeres', 'Hiperpotasemia leve a moderada'],
        moderate: ['Disfunción eréctil y disminución de la libido', 'Somnolencia, cefalea y mareo', 'Molestias gastrointestinales y gastritis'],
        severe: ['Hiperpotasemia severa (>6.5 mEq/L) con arritmias cardíacas letales y paro en diástole', 'Acidosis metabólica hiperclorémica en cirróticos descompensados', 'Agranulocitosis (rara)']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: El metabolito activo canrenona pasa en cantidades ínfimas compatibles con la lactancia.'
    },
    interactions: [
      { interactingDrug: 'IECAs (Captopril) y ARA-II (Losartán)', severity: 'Grave', clinicalEffect: 'Aumento sinérgico crítico de los niveles de potasio sérico con riesgo de asistolia.', recommendation: 'Monitorear potasio sérico basal, a la semana, al mes y periódicamente.' },
      { interactingDrug: 'Suplementos de potasio y sales dietéticas de potasio', severity: 'Grave', clinicalEffect: 'Hiperpotasemia extrema y paro cardíaco.', recommendation: 'Contraindicada la administración conjunta.' },
      { interactingDrug: 'AINES (Ibuprofeno, Indometacina)', severity: 'Grave', clinicalEffect: 'Atenuación de la eficacia diurética y aceleración de hiperpotasemia e insuficiencia renal.', recommendation: 'Evitar el uso conjunto.' }
    ],
    monitoringParameters: ['Potasio sérico y Sodio sérico (a la semana y al mes de inicio)', 'Creatinina sérica y TFG', 'Presión arterial', 'Desarrollo de mastodinia o ginecomastia'],
    storageConditions: 'Conservar a menos de 30 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  }
];
