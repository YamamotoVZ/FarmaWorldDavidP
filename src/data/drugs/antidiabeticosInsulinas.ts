import { Medication } from '../../types/medication';

const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANTIDIABETICOS_INSULINAS: Medication[] = [
  // ----------------------------------------------------
  // 4.1 HIPOGLUCEMIANTES ORALES
  // ----------------------------------------------------
  {
    id: 'glibenclamida',
    genericName: "Glibenclamida",
    commercialNames: ["Biojara", "Glidiabet", "Glucovance", "Sil-Norboral"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgkehzJLFbw4Bpjhg8MyxNN3Z87Va9dd9-_bw2-kXaKQg1EhjlVvhuSk&s=10",
    imageAlt: "Glibenclamida - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgkehzJLFbw4Bpjhg8MyxNN3Z87Va9dd9-_bw2-kXaKQg1EhjlVvhuSk&s=10", "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Peru/DEF/SIDEF/400x400/Glidiabet.png", "https://farmaciasfleming.mx/wp-content/uploads/2026/02/7501298244808-135519.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLrhshBGQzJbX4KmRC5gOJddT63e7bn_0kduyfedBE_9xoDOYfuU1MMM&s=10"],
    atcCode: 'A10BB01',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Sulfonilurea de segunda generación secretagoga de insulina',
    description: 'Hipoglucemiante oral perteneciente al grupo de las sulfonilureas de segunda generación. Estimula potentemente la secreción de insulina endógena por las células beta pancreáticas de manera glucosa-independiente, conllevando un riesgo significativo de hipoglucemia severa y prolongada, especialmente en adultos mayores.',
    presentations: [
      { id: 'glib-1', form: 'Comprimidos orales ranurados', concentration: '5 mg', route: 'Oral', packaging: 'Caja x 30, 60 y 100 comprimidos' },
      { id: 'glib-2', form: 'Comprimidos orales micronizados', concentration: '2.5 mg y 5 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Se une con alta afinidad al receptor de sulfonilurea de tipo 1 (SUR1) acoplado al canal de potasio sensible a ATP (K_ATP) en la membrana de las células beta de los islotes de Langerhans. Cierra los canales K_ATP, despolarizando la membrana celular y provocando la apertura de canales de calcio dependientes de voltaje de tipo L. El influjo de Ca2+ resultante desencadena la exocitosis de gránulos de insulina preformada de forma persistente.',
      molecularTarget: 'Subunidad SUR1 de los canales de potasio sensibles a ATP (K_ATP) pancreáticos',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 90-95%; alta unión a albúmina sérica (99%).',
        halfLife: 'Plasmática 1.5 a 4 horas; sin embargo, su vida media biológica y efecto hipoglucemiante persiste hasta 24 horas.',
        metabolism: 'Hepático casi total por citocromo CYP2C9 a metabolitos débilmente activos (4-trans-hidroxi y 3-cis-hidroxiglibenclamida)',
        elimination: 'Excreción bifásica balanceada: 50% urinaria y 50% biliar/fecal'
      }
    },
    therapeuticIndications: [
      'Diabetes mellitus tipo 2 no controlada adecuadamente con dieta, ejercicio y metformina en pacientes seleccionados sin fragilidad',
      'Diabetes neonatal por mutaciones activadoras en los genes KCNJ11 o ABCC8 del canal K_ATP (indicación de rescate génico)'
    ],
    posology: {
      adultStandard: 'Dosis inicial: 2.5 a 5 mg una vez al día administrados inmediatamente antes del desayuno o la primera comida principal. Ajustar en incrementos de 2.5 mg semanales según glucemias capilares. Dosis de mantenimiento: 5 a 10 mg/día (máximo 15 mg/día divididos en 2 tomas).',
      pediatricDose: 'No recomendada en pediatría excepto en diabetes monogénica neonatal bajo protocolo de endocrinología pediátrica.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: No se recomienda; riesgo acentuado de hipoglucemia por acumulación de metabolitos.',
        severe: 'ClCr <30 mL/min: CONTRAINDICADA de forma absoluta. Usar insulinas o inhibidores de DPP-4 ajustados.'
      },
      hepaticAdjustment: 'Contraindicada en insuficiencia hepática grave por incapacidad de metabolizar el fármaco y riesgo letal de hipoglucemia.',
      administrationNotes: 'ADMINISTRAR SIEMPRE 15 A 30 MINUTOS ANTES DE UNA COMIDA PRINCIPAL QUE CONTENGA CARBOHIDRATOS. Nunca saltarse comidas tras haber tomado la dosis. Educar rigurosamente al paciente y cuidadores sobre signos de alarma de hipoglucemia.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE HIPOGLUCEMIA SEVERA, PROLONGADA Y POTENCIALMENTE MORTAL. REQUIERE INGRESO HOSPITALARIO Y MONITORIZACIÓN GLUCÉMICA POR AL MENOS 24-48 HORAS POR EL EFECTO HIPOGLUCEMIANTE PERSISTENTE.',
      contraindications: [
        'Diabetes mellitus tipo 1 o cetoacidosis diabética',
        'Coma hiperosmolar hiperglucémico',
        'Insuficiencia renal moderada a grave (TFG <50 mL/min)',
        'Insuficiencia hepática grave',
        'Embarazo y período de lactancia',
        'Pacientes ancianos frágiles con deterioro cognitivo o riesgo elevado de caídas'
      ],
      adverseEffects: {
        frequent: ['Hipoglucemia sintomática (temblor, diaforesis, taquicardia, hambre)', 'Aumento de peso corporal (1 a 3 kg)', 'Molestias digestivas leves'],
        moderate: ['Reacciones alérgicas cutáneas maculopapulares o urticaria', 'Fotosensibilidad cutánea', 'Hiponatremia leve'],
        severe: ['Coma hipoglucémico profundo con convulsiones y daño neurológico anóxico', 'Ictericia colestásica y hepatitis reactiva', 'Discrasias sanguíneas (agranulocitosis, trombocitopenia)']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Pasa a la leche materna y puede causar hipoglucemia neonatal severa.'
    },
    interactions: [
      { interactingDrug: 'Fluconazol y Miconazol', severity: 'Grave', clinicalEffect: 'Inhibición potente de CYP2C9 que eleva los niveles de glibenclamida provocando hipoglucemia profunda y coma.', recommendation: 'Evitar la asociación o reducir drásticamente la dosis de glibenclamida.' },
      { interactingDrug: 'Betabloqueantes no cardioselectivos (Propranolol)', severity: 'Grave', clinicalEffect: 'Enmascaran los signos autonómicos adrenérgicos de alerta de la hipoglucemia (taquicardia, temblores) y bloquean la glucogenólisis compensatoria.', recommendation: 'Evitar betabloqueantes o usar cardioselectivos vigilando diaforesis.' },
      { interactingDrug: 'Alcohol etílico', severity: 'Grave', clinicalEffect: 'Inhibe la neoglucogénesis hepática y prolonga drásticamente la hipoglucemia inducida por sulfonilureas.', recommendation: 'Prohibir el consumo de alcohol.' }
    ],
    monitoringParameters: ['Glucemia capilar pre y postprandial', 'Hemoglobina glicosilada (HbA1c) cada 3 meses', 'Creatinina y aclaramiento renal anual', 'Peso corporal periódico'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz directa y humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'metformina',
    genericName: "Metformina",
    commercialNames: ["Dimefor", "Dinamel", "Dabex XR"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501300408976_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Metformina - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501300408976_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQezgWGq9dvvugR4oTIqFFCxfpFzByDmUbF20r61Hd5IYPm6tJ_WkLYkV&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ESvrOHRWritqxW5qnb3Ms08WXaw0a3N3yFCLP5kPNg&s=10", "https://http2.mlstatic.com/D_NQ_NP_861255-MLU78661621166_092024-O.webp"],
    atcCode: 'A10BA02',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Biguanida antihiperglucemiante sensibilizadora de insulina',
    description: 'Fármaco de referencia y primera línea indiscutible para el tratamiento farmacológico de la diabetes mellitus tipo 2 en todo el mundo. No estimula la secreción de insulina pancreática (no produce hipoglucemia en monoterapia ni aumento de peso), sino que mejora la sensibilidad periférica y hepática a la insulina y reduce la morbimortalidad cardiovascular.',
    presentations: [
      { id: 'met-1', form: 'Comprimidos orales de liberación inmediata', concentration: '500 mg, 850 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 30, 60 y 100 comprimidos' },
      { id: 'met-2', form: 'Comprimidos de liberación prolongada (XR / LP)', concentration: '500 mg, 750 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Actúa principalmente a nivel hepático inhibiendo de forma transitoria el complejo I de la cadena de transporte de electrones mitocondrial, lo que disminuye el ATP celular e incrementa la relación AMP/ATP intracelular. Esto activa la proteína quinasa activada por AMP (AMPK), suprimiendo la transcripción de enzimas clave de la neoglucogénesis hepática (FBP1 y PEPCK) y de la lipogénesis. Adicionalmente estimula la translocación del transportador GLUT4 en miocitos y adipocitos aumentando la captación periférica de glucosa, modula la microbiota intestinal y estimula la secreción de GLP-1.',
      molecularTarget: 'Complejo I mitocondrial y activación de AMPK (proteína quinasa activada por AMP)',
      pharmacokinetics: {
        bioavailability: 'Aproximadamente 50-60% en ayunas; la ingesta con alimentos disminuye ligeramente la velocidad de absorción pero reduce la intolerancia digestiva.',
        halfLife: 'Plasmática aprox. 6.5 horas; semivida biológica eritrocitaria hasta 17.6 horas.',
        metabolism: 'No sufre metabolismo hepático; no interacciona con citocromos P450.',
        elimination: 'Excreción renal casi del 100% como fármaco inalterado por filtración glomerular y secreción tubular activa mediada por OCT2'
      }
    },
    therapeuticIndications: [
      'Diabetes mellitus tipo 2 en monoterapia o en combinación con otros hipoglucemiantes o insulina',
      'Prevención de la progresión a diabetes en adultos con prediabetes (glucemia alterada en ayunas o intolerancia oral)',
      'Síndrome de ovario poliquístico (SOP) con resistencia a la insulina e hiperandrogenismo (indicación off-label consolidada)',
      'Atenuación de la ganancia ponderal asociada al uso de antipsicóticos atípicos'
    ],
    posology: {
      adultStandard: 'Dosis inicial: 500 mg u 850 mg una vez al día con la cena para optimizar tolerancia digestiva. Incrementar semanalmente según tolerancia y glucemia hasta dosis óptima de 1000 mg cada 12 horas o 850 mg cada 8 horas (dosis máxima terapéutica 2550 mg/día). Formulación XR: 500 a 2000 mg una vez al día con la cena.',
      pediatricDose: 'Niños ≥10 años y adolescentes con DM2: Iniciar con 500 mg una o dos veces al día; dosis máxima 2000 mg/día en dosis divididas.',
      renalAdjustment: {
        normal: 'TFG >60 mL/min: Dosis completa estándar (hasta 2000-2550 mg/día).',
        moderate: 'TFG 45-59 mL/min: Dosis máxima 1500 mg/día; TFG 30-44 mL/min: Dosis máxima 1000 mg/día con monitoreo semestral de función renal.',
        severe: 'TFG <30 mL/min: CONTRAINDICADA DE FORMA ABSOLUTA debido a la acumulación de fármaco y riesgo extremo de acidosis láctica mortal.'
      },
      hepaticAdjustment: 'Contraindicada en insuficiencia hepática grave o cirrosis descompensada por menor depuración de lactato.',
      administrationNotes: 'SUSPENDER METFORMINA 48 HORAS ANTES DE PROCEDIMIENTOS CON CONTRASTE YODADO INTRAVASCULAR O CIRUGÍAS MAYORES CON ANESTESIA GENERAL, y no reiniciar hasta 48 horas después tras verificar creatinina normal. Tomar SIEMPRE con las comidas para reducir diarrea y meteorismo.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE ACIDOSIS LÁCTICA GRAVE ASOCIADA A METFORMINA (MALA): RARA PERO CON UNA MORTALIDAD SUPERIOR AL 30-50%. SE PRODUCE PRINCIPALMENTE ANTE INSUFICIENCIA RENAL GRAVE (TFG <30 ML/MIN), SEPSIS, HIPOVOLEMIA O HIPOXIA TISULAR AGUDA.',
      contraindications: [
        'Insuficiencia renal severa (TFG <30 mL/min)',
        'Cuadros clínicos de hipoperfusión o hipoxia tisular: shock séptico, choque cardiogénico, infarto agudo de miocardio reciente, insuficiencia respiratoria aguda o insuficiencia cardíaca descompensada',
        'Insuficiencia hepática grave o alcoholismo agudo/crónico',
        'Acidosis metabólica aguda o cetoacidosis diabética'
      ],
      adverseEffects: {
        frequent: ['Diarrea acuosa, distensión abdominal y náuseas (hasta 20-30% al inicio del tratamiento)', 'Disgeusia (sabor metálico característico en la boca)', 'Pérdida moderada de peso apetecible (1-3 kg)'],
        moderate: ['Déficit crónico de vitamina B12 y anemia megaloblástica por interferencia en la absorción íleal dependiente de calcio'],
        severe: ['Acidosis láctica grave con hiperventilación (respiración de Kussmaul), dolor abdominal intenso, hipotermia, colapso circulatorio y coma']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia materna; pasa a leche en concentraciones insignificantes sin afectar al lactante.'
    },
    interactions: [
      { interactingDrug: 'Medios de contraste yodados intravasculares', severity: 'Grave', clinicalEffect: 'La nefropatía inducida por contraste produce insuficiencia renal aguda con acumulación masiva de metformina y acidosis láctica mortal.', recommendation: 'Suspender 48 horas antes y reanudar tras 48 horas con creatinina estable.' },
      { interactingDrug: 'Alcohol etílico agudo', severity: 'Grave', clinicalEffect: 'Potenciación extrema del riesgo de acidosis láctica por inhibición simultánea de la neoglucogénesis y aumento de lactato.', recommendation: 'Desaconsejar taxativamente el consumo de alcohol.' },
      { interactingDrug: 'Fármacos que compiten por transporte renal OCT2 (Cimetidina, Trimetoprima)', severity: 'Moderada', clinicalEffect: 'Aumento de las concentraciones plasmáticas de metformina por reducción de su secreción tubular activa.', recommendation: 'Monitorear función renal y vigilar síntomas de acidosis.' }
    ],
    monitoringParameters: ['Tasa de filtración glomerular estimada (TFGe) y creatinina sérica antes de iniciar y cada 6-12 meses', 'Niveles séricos de vitamina B12 cada 2-3 años en tratamiento crónico', 'HbA1c cada 3 a 6 meses'],
    storageConditions: 'Conservar por debajo de 30 °C en lugar seco y protegido de la luz solar.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'rosiglitazona',
    genericName: "Rosiglitazona",
    commercialNames: ["Avandia", "Avandamet"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8GjwwuqxdNHvxD2yP0pHhTkoOsQ6k0ijIFU02ugIvWLgCvkdmeZeV_F4&s=10",
    imageAlt: "Rosiglitazona - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8GjwwuqxdNHvxD2yP0pHhTkoOsQ6k0ijIFU02ugIvWLgCvkdmeZeV_F4&s=10", "https://vitau.mx/_next/image?url=https%3A%2F%2Fimages-products.vitau.mx%2F7501043111515_25198.jpg&w=3840&q=85"],
    atcCode: 'A10BG02',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Tiazolidinediona (Glitazona) agonista potente de PPAR-gamma',
    description: 'Antidiabético oral del grupo de las tiazolidinedionas o glitazonas. Actúa como ligando agonista de alta afinidad del receptor nuclear activado por proliferadores de peroxisomas gamma (PPAR-γ), aumentando la sensibilidad a la insulina en tejido adiposo, muscular y hepático. Históricamente restringida por señales de riesgo de cardiopatía isquémica y edema pulmonar.',
    presentations: [
      { id: 'rosi-1', form: 'Comprimidos orales recubiertos', concentration: '4 mg y 8 mg', route: 'Oral', packaging: 'Caja x 28 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Se une como agonista selectivo a los receptores nucleares PPAR-gamma presentes predominantemente en adipocitos y en menor grado en miocitos esqueléticos y hepatocitos. Tras heterodimerizarse con el receptor retinoide X (RXR), promueve la transcripción de genes sensibles a insulina que regulan el metabolismo glucídico y lipídico, incrementando la expresión del transportador GLUT4, reduciendo citoquinas proinflamatorias como TNF-alfa y ácidos grasos libres circulantes, y redistribuyendo la grasa visceral hacia depósitos subcutáneos.',
      molecularTarget: 'Receptor nuclear activado por proliferadores de peroxisomas gamma (PPAR-γ)',
      pharmacokinetics: {
        bioavailability: 'Aproximadamente 99%. Unión a proteínas plasmáticas del 99.8%.',
        halfLife: 'Terminal de 3 a 4 horas; su efecto farmacodinámico génico es duradero.',
        metabolism: 'Hepático casi exclusivo mediante citocromo CYP2C8 y secundariamente CYP2C9 a metabolitos inactivos',
        elimination: 'Excreción renal 64% y fecal 23% como metabolitos'
      }
    },
    therapeuticIndications: [
      'Tratamiento de segunda o tercera línea en diabetes mellitus tipo 2 refractaria con marcado predominio de resistencia a la insulina cuando otros hipoglucemiantes están contraindicados o no son tolerados'
    ],
    posology: {
      adultStandard: 'Dosis inicial: 4 mg una vez al día por la mañana o 2 mg dos veces al día. Si el control glucémico es inadecuado tras 8 a 12 semanas, puede incrementarse a 8 mg una vez al día (o 4 mg cada 12 horas).',
      pediatricDose: 'No recomendada en niños ni adolescentes menores de 18 años.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste de dosis en nefropatía; no obstante, vigilar retención hidrosalina extrema.'
      },
      hepaticAdjustment: 'CONTRAINDICADA si las transaminasas (ALT) se encuentran basales >2.5 veces el límite superior normal.',
      administrationNotes: 'Puede administrarse con o sin alimentos. El efecto hipoglucemiante máximo demora entre 8 y 12 semanas debido al mecanismo de inducción transcripcional nuclear.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE DESENCADENAR O AGRAVAR INSUFICIENCIA CARDÍACA CONGESTIVA POR RETENCIÓN HÍDRICA GRAVE. CONTRAINDICADA EN PACIENTES CON INSUFICIENCIA CARDÍACA CLASE NYHA I A IV. ALTO RIESGO DE FRACTURAS ÓSEAS EN MUJERES.',
      contraindications: [
        'Insuficiencia cardíaca congestiva en cualquier estadio funcional (NYHA I-IV)',
        'Síndrome coronario agudo o cardiopatía isquémica conocida previa',
        'Enfermedad hepática activa o transaminasas basales >2.5 veces el límite normal',
        'Cetoacidosis diabética o diabetes mellitus tipo 1'
      ],
      adverseEffects: {
        frequent: ['Retención hídrica y edema periférico marcado', 'Aumento de peso corporal significativo (grasa subcutánea y agua)', 'Anemia dilucional leve'],
        moderate: ['Mayor incidencia de fracturas óseas distales (húmero, muñeca, pie) en mujeres posmenopáusicas', 'Edema macular diabético'],
        severe: ['Insuficiencia cardíaca congestiva descompensada con edema agudo de pulmón', 'Infarto agudo de miocardio o isquemia miocárdica', 'Hepatotoxicidad infrecuente']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Ausencia de datos de seguridad; no se recomienda durante la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Gemfibrozilo (Inhibidor potente de CYP2C8)', severity: 'Grave', clinicalEffect: 'Aumento al doble del AUC plasmático de rosiglitazona con riesgo acentuado de edema y descompensación cardíaca.', recommendation: 'Evitar la combinación o reducir la dosis a la mitad.' },
      { interactingDrug: 'Rifampicina (Inductor de CYP2C8)', severity: 'Moderada', clinicalEffect: 'Disminución del 65% en las concentraciones de rosiglitazona con pérdida de control glucémico.', recommendation: 'Ajustar dosis de rosiglitazona.' },
      { interactingDrug: 'Insulina', severity: 'Grave', clinicalEffect: 'Riesgo multiplicado de retención hídrica masiva, edema pulmonar y eventos cardiovasculares.', recommendation: 'Evitar combinación o monitorizar signos congestivos estrictamente.' }
    ],
    monitoringParameters: ['Signos y síntomas de insuficiencia cardíaca y edemas', 'Transaminasas hepáticas basales y periódicas', 'Densidad mineral ósea en mujeres de riesgo', 'Fondo de ojo (descarte de edema macular)'],
    storageConditions: 'Conservar entre 15 °C y 30 °C protegido de la luz y humedad en envase hermético.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'pioglitazona',
    genericName: "Pioglitazona",
    commercialNames: ["Glitacar", "Plagox", "Gliozac"],
    imageUrl: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1163604_A_1280_AL.jpg",
    imageAlt: "Pioglitazona - Presentación farmacológica",
    images: ["https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1163604_A_1280_AL.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oaLQPJAgFzUq2Bgf2tQaYa7XggxU-XwWvv-sIPnYjQ&s=10", "https://farmaciaherrera.com.mx/cdn/shop/files/Imagenes_de_planograma__036adab1-1d17-4e84-980a-f789605b4c26__07502009744969_A1R1.jpg?v=1732561754&width=1500"],
    atcCode: 'A10BG03',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Tiazolidinediona agonista PPAR-gamma y modulador PPAR-alfa con beneficio en esteatohepatitis',
    description: 'Tiazolidinediona que actúa como agonista selectivo de los receptores PPAR-γ con modulación secundaria de PPAR-α. Reduce intensamente la insulinorresistencia periférica, disminuye la esteatosis hepática (tratamiento evidenciado en esteatohepatitis asociada a disfunción metabólica - MASH) y reduce eventos macrovasculares recurrentes en ictus.',
    presentations: [
      { id: 'pio-1', form: 'Comprimidos orales ranurados', concentration: '15 mg, 30 mg y 45 mg', route: 'Oral', packaging: 'Caja x 28 y 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Agonista potente de los receptores nucleares PPAR-gamma y ligando débil de PPAR-alfa. Activa la diferenciación adipocítica en el tejido celular subcutáneo, promoviendo el aclaramiento de lípidos ectópicos del hígado y músculo esquelético (lipotoxicidad reducida). Incrementa los niveles circulantes de adiponectina (hormona antidiabética y antiinflamatoria), estimula la expresión de GLUT1 y GLUT4 y reduce la producción hepática autónoma de glucosa.',
      molecularTarget: 'Receptores nucleares PPAR-γ y PPAR-α celulares',
      pharmacokinetics: {
        bioavailability: 'Oral >80%. Unión a proteínas plasmáticas superior al 99%.',
        halfLife: 'Pioglitazona inalterada: 3 a 7 horas; metabolitos activos totales M-III y M-IV: 16 a 24 horas.',
        metabolism: 'Hepático extenso mediado por citocromos CYP2C8 y CYP3A4 a múltiples metabolitos farmacológicamente activos',
        elimination: 'Excreción predominantemente biliar y fecal (55-60%), excreción renal 15-30%'
      }
    },
    therapeuticIndications: [
      'Diabetes mellitus tipo 2 como biterapia o triterapia en pacientes con resistencia insulínica marcada y esteatosis hepática',
      'Esteatohepatitis no alcohólica / MASH confirmada histológicamente (indicación recomendada por guías AASLD/EASL)',
      'Prevención secundaria de ictus recurrente e infarto de miocardio en pacientes con resistencia a la insulina (estudio IRIS)'
    ],
    posology: {
      adultStandard: 'Dosis inicial habitual: 15 mg a 30 mg una vez al día con o sin alimentos. Si la respuesta glucémica es insuficiente tras 8-12 semanas, titular hasta un máximo de 45 mg una vez al día.',
      pediatricDose: 'No recomendada en pediatría.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste de dosis (incluyendo pacientes en diálisis), pero vigilar minuciosamente la retención hídrica.'
      },
      hepaticAdjustment: 'No iniciar tratamiento si los niveles séricos de ALT superan 2.5 veces el límite superior normal.',
      administrationNotes: 'Tomar una vez al día a cualquier hora independientemente de las comidas. El beneficio completo en la hemoglobina glicosilada se consolida tras 10 a 14 semanas de tratamiento continuo.'
    },
    safety: {
      blackBoxWarning: 'LAS TIAZOLIDINEDIONAS PROVOCAN O EMPEORAN LA INSUFICIENCIA CARDÍACA CONGESTIVA POR RETENCIÓN HÍDRICA DEPENDIENTE DE LA DOSIS. CONTRAINDICADA EN CLASES FUNCIONALES NYHA II A IV.',
      contraindications: [
        'Insuficiencia cardíaca congestiva conocida o antecedentes de descompensación (NYHA II-IV)',
        'Cáncer de vejiga activo o antecedentes documentados de neoplasia vesical',
        'Hematuria macroscópica no filiada',
        'Insuficiencia hepática grave',
        'Cetoacidosis diabética'
      ],
      adverseEffects: {
        frequent: ['Edema periférico maleolar por retención hidrosalina', 'Ganancia ponderal progresiva (1.5 a 4 kg)', 'Infecciones respiratorias altas'],
        moderate: ['Riesgo aumentado de fracturas óseas periféricas en mujeres posmenopáusicas', 'Anemia dilucional hipocrómica transitoria', 'Edema macular diabético'],
        severe: ['Descompensación de insuficiencia cardíaca y edema pulmonar', 'Asociación estadística controvertida con riesgo leve de neoplasia urotelial vesical en uso muy prolongado a altas dosis']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Pasa a la leche materna en modelos animales; suspender durante la lactancia.'
    },
    interactions: [
      { interactingDrug: 'Gemfibrozilo (Inhibidor de CYP2C8)', severity: 'Grave', clinicalEffect: 'Aumento de hasta 3 veces en la exposición plasmática de pioglitazona con alto riesgo de edemas e insuficiencia cardíaca.', recommendation: 'Dosis máxima de pioglitazona 15 mg/día si se combina.' },
      { interactingDrug: 'Rifampicina', severity: 'Moderada', clinicalEffect: 'Inducción de CYP2C8 con reducción del 54% de niveles de pioglitazona.', recommendation: 'Ajustar dosis según respuesta glucémica.' },
      { interactingDrug: 'Insulina exógena', severity: 'Grave', clinicalEffect: 'Multiplicación sinérgica del riesgo de edema masivo e insuficiencia cardíaca descompensada.', recommendation: 'Usar con extrema cautela y dosis bajas de ambos agentes.' }
    ],
    monitoringParameters: ['Signos clínicos de retención hídrica y sobrecarga ventricular', 'Transaminasas hepáticas periódicas', 'Sedimento urinario y vigilancia de hematuria macro/microscópica', 'Densidad mineral ósea'],
    storageConditions: 'Conservar por debajo de 25 °C en envase hermético protegido de la humedad.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // ANÁLOGOS DEL RECEPTOR DE GLP-1 (arGLP-1 / INCRETINOMIMÉTICOS)
  // ----------------------------------------------------
  {
    id: 'semaglutida',
    genericName: "Semaglutida",
    commercialNames: ["Ozempic", "Wegoby", "Rybelsus"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7503007822864.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144&format=jpeg",
    imageAlt: "Semaglutida - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7503007822864.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144&format=jpeg", "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1447726_A_1280_AL.jpg?w=180&h=180", "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/163459/4093_frente.png.png?v=638824215439600000"],
    atcCode: 'A10BJ06',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Agonista del receptor del péptido similar al glucagón-1 (arGLP-1) de acción prolongada y cardioprotector',
    description: 'Análogo sintético de larga duración del GLP-1 humano nativo (94% de homología) modificado con una cadena espaciadora de diácido graso C18 que le confiere una unión reversible de alta afinidad a la albúmina plasmática. Proporciona control glucémico potente dependiente de glucosa, reducción de eventos cardiovasculares mayores (MACE), nefroprotección y pérdida ponderal clínicamente significativa.',
    presentations: [
      { id: 'sem-1', form: 'Solución inyectable en pluma precargada multidosis SC (Ozempic)', concentration: '1.34 mg/mL (plumas de 0.25 mg, 0.5 mg, 1 mg y 2 mg por dosis)', route: 'Subcutánea', packaging: 'Pluma precargada desechable con 4 o 6 agujas NovoFine Plus' },
      { id: 'sem-2', form: 'Comprimidos orales con potenciador de absorción SNAC (Rybelsus)', concentration: '3 mg, 7 mg y 14 mg', route: 'Oral', packaging: 'Caja con blíster antihumedad x 30 comprimidos' },
      { id: 'sem-3', form: 'Solución inyectable en pluma precargada semanal (Wegovy)', concentration: '0.25 mg, 0.5 mg, 1 mg, 1.7 mg y 2.4 mg / dosis', route: 'Subcutánea', packaging: 'Caja con 4 plumas unidosis' }
    ],
    mechanismOfAction: {
      summary: 'Agonista selectivo de los receptores transmembrana de GLP-1 acoplados a proteína Gs en las células beta de los islotes pancreáticos, activando la adenilato ciclasa y aumentando el AMPc intracelular. Induce la secreción de insulina exclusivamente ante concentraciones elevadas de glucosa plasmática (riesgo mínimo de hipoglucemia en monoterapia) y suprime la secreción inapropiada de glucagón por las células alfa en hiperglucemia. A nivel gastrointestinal retarda el vaciamiento gástrico postprandial, aplanando la curva glucémica; y a nivel del sistema nervioso central penetra el núcleo arcuato hipotalámico activando neuronas anorexígenas POMC/CART e inhibiendo las neuronas orexígenas NPY/AgRP, induciendo saciedad temprana y reduciendo el apetito y la preferencia por alimentos calóricos.',
      molecularTarget: 'Receptor humano del péptido similar al glucagón-1 (GLP-1R)',
      pharmacokinetics: {
        bioavailability: 'Subcutánea: aprox. 89%. Oral (Rybelsus): 0.4 a 1% facilitada por el transportador químico SNAC (salcaprozato de sodio) que eleva el pH local y previene la degradación enzimática en el estómago.',
        halfLife: 'Aproximadamente 168 horas (7 días), lo que permite una única administración subcutánea semanal.',
        metabolism: 'Proteólisis enzimática generalizada de la cadena peptídica y beta-oxidación de la cadena de ácido graso (no depende de enzimas del citocromo P450)',
        elimination: 'Excreción bifásica lenta: metabolitos inactivos por vía renal (alrededor del 3% inalterada en orina) y vía fecal/biliar'
      }
    },
    therapeuticIndications: [
      'Tratamiento de adultos con diabetes mellitus tipo 2 no controlada adecuadamente como monoterapia (en intolerancia a metformina) o en combinación con otros hipoglucemiantes orales o insulina',
      'Reducción del riesgo de eventos cardiovasculares adversos mayores (MACE: muerte cardiovascular, infarto agudo de miocardio no mortal o accidente cerebrovascular no mortal) en adultos con diabetes tipo 2 y enfermedad cardiovascular establecida (estudio SUSTAIN-6)',
      'Protección renal: reducción de la progresión a enfermedad renal crónica terminal y duplicación de creatinina en pacientes diabéticos con nefropatía (estudio FLOW)',
      'Manejo crónico del peso en obesidad (IMC ≥30 kg/m²) o sobrepeso (IMC ≥27 kg/m²) asociado a comorbilidades metabólicas (Wegovy)'
    ],
    posology: {
      adultStandard: 'Subcutánea (Ozempic): Dosis inicial de 0.25 mg SC una vez a la semana durante 4 semanas (fase de adaptación gastrointestinal; no es dosis terapéutica de control glucémico). A la semana 4, incrementar a 0.5 mg SC una vez a la semana. Si se requiere mayor control glucémico tras al menos 4 semanas con 0.5 mg, puede escalarse a 1 mg SC una vez a la semana (máximo 2 mg SC una vez a la semana). Oral (Rybelsus): Iniciar con 3 mg una vez al día durante 30 días; luego titular a 7 mg una vez al día. Si se requiere mayor reducción de HbA1c tras 30 días, escalar a dosis de mantenimiento de 14 mg una vez al día.',
      pediatricDose: 'Niños y adolescentes ≥12 años con obesidad: Iniciar titulación semanal a 0.25 mg SC escalando cada 4 semanas hasta 2.4 mg SC una vez por semana.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'TFG 30-59 mL/min: No requiere ajuste de dosis. Monitorear hidratación para evitar lesión prerrenal secundaria a vómitos.',
        severe: 'TFG 15-29 mL/min: No requiere ajuste posológico; experiencia clínica respaldada por el estudio FLOW. TFG <15 mL/min o hemodiálisis: No recomendado por experiencia limitada.'
      },
      hepaticAdjustment: 'No requiere ajuste de dosis en insuficiencia hepática leve, moderada o grave (Child-Pugh A, B o C).',
      administrationNotes: 'ADMINISTRACIÓN ORAL RIGUROSA (Rybelsus): Ingerir el comprimido entero por la mañana EN AYUNO ESTRICTO, inmediatamente al levantarse, acompañado ÚNICAMENTE de un sorbo de agua corriente limpia (máximo 120 mL o medio vaso). Esperar AL MENOS 30 MINUTOS antes de comer, beber cualquier otro líquido o tomar cualquier otro medicamento oral. Vía SC (Ozempic): Inyectar una vez por semana el mismo día de cada semana, a cualquier hora, con o sin alimentos, en abdomen, muslo o parte superior del brazo, rotando los sitios anatómicos.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE TUMORES DE CÉLULAS C TIROIDEAS: EN ESTUDIOS PRECLÍNICOS EN ROEDORES CAUSA TUMORES DE CÉLULAS C TIROIDEAS DEPENDIENTES DE LA DOSIS Y DURACIÓN, INCLUYENDO CARCINOMA MEDULAR DE TIROIDES (CMT). CONTRAINDICADA EN PACIENTES CON ANTECEDENTES PERSONALES O FAMILIARES DE CMT O SÍNDROME DE NEOPLASIA ENDOCRINA MÚLTIPLE TIPO 2 (MEN 2).',
      contraindications: [
        'Antecedentes personales o familiares de Carcinoma Medular de Tiroides (CMT)',
        'Síndrome de Neoplasia Endocrina Múltiple tipo 2 (MEN 2)',
        'Antecedentes de pancreatitis aguda grave inducida por análogos de GLP-1',
        'Diabetes mellitus tipo 1 o tratamiento de cetoacidosis diabética',
        'Embarazo confirmado y período de lactancia materna'
      ],
      adverseEffects: {
        frequent: ['Náuseas (hasta 20-30% al inicio de la titulación, suelen disminuir con el tiempo)', 'Diarrea acuosa o deposiciones blandas', 'Vómitos, dispepsia, pirosis y dolor abdominal difuso', 'Estreñimiento por retardo de motilidad colónica', 'Sensación de saciedad precoz y eructos'],
        moderate: ['Colelitiasis y colecistitis litiásica (por pérdida rápida de peso y menor contractilidad vesicular)', 'Astenia, fatiga y mareo', 'Aumento de la frecuencia cardíaca en reposo (2 a 6 lpm)', 'Empeoramiento transitorio precoz de la retinopatía diabética por descenso brusco de glucemias'],
        severe: ['Pancreatitis aguda necrotizante o hemorrágica (suspender de inmediato)', 'Obstrucción intestinal, gastroparesia severa e íleo paralítico', 'Lesión renal aguda prerrenal por hipovolemia debida a vómitos o diarrea deshidratante', 'Reacciones anafilácticas y angioedema']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Estudios en animales han demostrado toxicidad reproductiva y embriofetal. Suspender semaglutida al menos 2 meses antes de un embarazo planificado debido a su prolongada semivida de eliminación (5 semanas de lavado).',
      lactationRisk: 'Contraindicado',
      lactationSafety: 'No recomendado: Se desconoce si pasa a la leche materna humana. Evitar durante la lactancia.',
      monitoringParameters: ['Hemoglobina glicosilada (HbA1c) trimestral', 'Función renal (creatinina y TFGe) en pacientes que refieran vómitos o diarrea intensa', 'Amilasa y lipasa sérica urgente ante dolor epigástrico intenso irradiado a la espalda', 'Fondo de ojo periódico en pacientes con retinopatía diabética previa', 'Palpación tiroidea periódica']
    },
    interactions: [
      {
        id: 'sem-inter-1',
        interactsWith: 'Sulfonilureas (Glibenclamida) e Insulina exógena',
        severity: 'Mayor',
        clinicalEffect: 'Aumento significativo del riesgo de hipoglucemia severa y sintomática al combinar un estimulante glucosa-independiente con el arGLP-1.',
        recommendation: 'Reducir la dosis previa de sulfonilurea en un 50% o la dosis de insulina basal en un 20-30% al iniciar semaglutida; intensificar la automonitorización de glucemia capilar.'
      },
      {
        id: 'sem-inter-2',
        interactsWith: 'Fármacos orales de estrecho margen terapéutico (Warfarina, Levotiroxina, Digoxina)',
        severity: 'Moderada',
        clinicalEffect: 'El retardo del vaciamiento gástrico inducido por semaglutida puede demorar el tiempo hasta la concentración máxima (Tmax) y alterar la tasa de absorción de medicamentos orales administrados conjuntamente.',
        recommendation: 'Monitorear estrechamente los parámetros clínicos y analíticos (ej. control del INR con warfarina y niveles de TSH con levotiroxina).'
      },
      {
        id: 'sem-inter-3',
        interactsWith: 'Fármacos orales tomados simultáneamente con Rybelsus',
        severity: 'Mayor',
        clinicalEffect: 'Tomar cualquier otro medicamento oral junto con el comprimido de Rybelsus reduce drásticamente la absorción mediada por SNAC de semaglutida o del fármaco coadministrado.',
        recommendation: 'Espaciar cualquier otra medicación oral al menos 30 minutos después de ingerir el comprimido de Rybelsus.'
      }
    ],
    storageAndConservation: 'Plumas sin abrir: conservar en nevera entre 2 °C y 8 °C (no congelar). Pluma en uso: conservar a temperatura ambiente (<30 °C) o en nevera durante un máximo de 56 días con el capuchón puesto para proteger de la luz. Comprimidos Rybelsus: conservar en el blíster original de aluminio antihumedad a menos de 30 °C.',
    storageConditions: 'Refrigerar sin abrir (2-8 °C). Tras apertura mantener <30 °C durante 56 días protegido de la luz.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    updatedAt: '2026-11-11'
  },
  {
    id: 'liraglutida',
    genericName: "Liraglutida",
    commercialNames: ["Victoza", "Saxenda"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnQ9gbgFVZT0kl7_lwWSF-UnDN7oopDlpbR02mf6EG0re50FXcVz80Tf5&s=10",
    imageAlt: "Liraglutida - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnQ9gbgFVZT0kl7_lwWSF-UnDN7oopDlpbR02mf6EG0re50FXcVz80Tf5&s=10", "https://production-media.fahorro.com/media/catalog/product/7/5/7503007822710.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265&format=jpeg"],
    atcCode: 'A10BJ02',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Agonista del receptor de GLP-1 (arGLP-1) análogo humano de administración diaria',
    description: 'Análogo del GLP-1 humano con 97% de homología aminoacídica, obtenido por ADN recombinante y acilado con un ácido graso C16 (ácido palmítico) en Lys26 que promueve la autoasociación en heptámeros y unión a la albúmina, prolongando su semivida plasmática a 13 horas para administración subcutánea una vez al día. Reduce significativamente la mortalidad cardiovascular en diabetes tipo 2 (ensayo LEADER).',
    presentations: [
      { id: 'lir-1', form: 'Solución inyectable en pluma precargada multidosis SC (Victoza)', concentration: '6 mg/mL (suministra dosis fijas de 0.6 mg, 1.2 mg y 1.8 mg en 3 mL)', route: 'Subcutánea', packaging: 'Caja con 2 o 3 plumas precargadas desechables' },
      { id: 'lir-2', form: 'Solución inyectable en pluma precargada multidosis SC (Saxenda)', concentration: '6 mg/mL (suministra dosis de 0.6 mg, 1.2 mg, 1.8 mg, 2.4 mg y 3.0 mg)', route: 'Subcutánea', packaging: 'Caja con 5 plumas precargadas de 3 mL' }
    ],
    mechanismOfAction: {
      summary: 'Se une selectivamente al receptor de GLP-1 y lo activa, estimulando la adenilato ciclasa y aumentando la secreción de insulina por las células beta en presencia de concentraciones elevadas de glucosa. Inhibe simultáneamente la liberación de glucagón por las células alfa pancreáticas sin comprometer la respuesta contrarreguladora frente a la hipoglucemia. Retarda el vaciamiento gástrico reduciendo los picos hiperglucémicos postprandiales e interactúa con centros hipotalámicos saciogénicos, aumentando la sensación de plenitud y disminuyendo la ingesta calórica total diaria.',
      molecularTarget: 'Receptor de GLP-1 humano acoplado a proteína Gs',
      pharmacokinetics: {
        bioavailability: 'Subcutánea aprox. 55%. Concentración plasmática máxima alcanzada a las 8-12 horas tras la inyección.',
        halfLife: 'Aproximadamente 13 horas, garantizando cobertura glucémica estable durante 24 horas con una dosis diaria.',
        metabolism: 'Degradación endógena por endopeptidasas y dipeptidil peptidasa-4 (DPP-4) sin órgano principal de metabolización',
        elimination: 'Mínima eliminación inalterada; los metabolitos peptídicos degradados se excretan por orina (6%) y heces (5%)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de adultos y niños ≥10 años con diabetes mellitus tipo 2 insuficientemente controlada en monoterapia o añadido a otros hipoglucemiantes',
      'Prevención y reducción de eventos cardiovasculares adversos mayores (muerte cardiovascular, infarto no fatal o ACV no fatal) en adultos con diabetes tipo 2 y enfermedad cardiovascular confirmada (ensayo LEADER)',
      'Control y manejo crónico de peso en adultos y adolescentes ≥12 años con obesidad (Saxenda)'
    ],
    posology: {
      adultStandard: 'Diabetes tipo 2 (Victoza): Iniciar con 0.6 mg SC una vez al día durante al menos 1 semana para mejorar la tolerabilidad gastrointestinal. Transcurrida la semana, incrementar la dosis a 1.2 mg SC una vez al día. Si no se logra el objetivo de HbA1c deseado, puede aumentarse tras otra semana a la dosis máxima recomendada de 1.8 mg SC una vez al día. Manejo de peso (Saxenda): Iniciar con 0.6 mg/día e incrementar 0.6 mg semanalmente hasta la dosis objetivo de 3.0 mg SC una vez al día.',
      pediatricDose: 'Niños ≥10 años con diabetes tipo 2: Iniciar con 0.6 mg SC una vez al día; titular semanalmente hasta 1.2 mg o máximo 1.8 mg una vez al día.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'TFG 30-59 mL/min: No requiere ajuste de dosis.',
        severe: 'TFG 15-29 mL/min: No requiere ajuste posológico; monitorizar signos de deshidratación. TFG <15 mL/min o hemodiálisis: No recomendado debido a escasez de datos.'
      },
      hepaticAdjustment: 'No requiere ajuste de dosis en pacientes con insuficiencia hepática leve o moderada. Usar con precaución en insuficiencia hepática grave.',
      administrationNotes: 'Administrar una vez al día a cualquier hora fija, con o sin alimentos, mediante inyección subcutánea en abdomen, muslo o parte superior del brazo. No requiere ajuste horario respecto a las comidas.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE CARCINOMA MEDULAR DE TIROIDES: CONTRAINDICADA EN PACIENTES CON HISTORIAL FAMILIAR O PERSONAL DE CARCINOMA MEDULAR DE TIROIDES (CMT) O SÍNDROME DE NEOPLASIA ENDOCRINA MÚLTIPLE TIPO 2 (MEN 2).',
      contraindications: [
        'Antecedente personal o familiar de carcinoma medular de tiroides o síndrome MEN 2',
        'Antecedente documentado de pancreatitis aguda previa',
        'Hipersensibilidad alérgica a la liraglutida',
        'Cetoacidosis diabética o diabetes mellitus tipo 1',
        'Embarazo y lactancia'
      ],
      adverseEffects: {
        frequent: ['Náuseas (hasta 28-30% en las primeras 4 semanas)', 'Diarrea y deposiciones blandas', 'Vómitos, estreñimiento, dispepsia y distensión abdominal', 'Disminución marcada del apetito'],
        moderate: ['Litiasis biliar y colecistitis sintomática', 'Aumento de la frecuencia cardíaca en reposo', 'Reacciones eritematosas en el sitio de inyección subcutánea'],
        severe: ['Pancreatitis aguda potencialmente mortal', 'Fallo renal agudo secundario a vómitos deshidratantes', 'Reacciones alérgicas anafilácticas']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Toxicidad reproductiva en animales. No debe utilizarse durante el embarazo; cambiar a insulina si se confirma gestación.',
      lactationRisk: 'Contraindicado',
      lactationSafety: 'Contraindicado: Pasa a la leche materna en modelos animales. Se desaconseja durante la lactancia.',
      monitoringParameters: ['HbA1c trimestral', 'Función renal periódica en pacientes con eventos gastrointestinales', 'Vigilancia de signos de pancreatitis (dolor epigástrico continuo)', 'Nódulos tiroideos']
    },
    interactions: [
      {
        id: 'lir-inter-1',
        interactsWith: 'Sulfonilureas (Glibenclamida) e Insulina',
        severity: 'Mayor',
        clinicalEffect: 'Aumento sinérgico del riesgo de hipoglucemia.',
        recommendation: 'Reducir la dosis de sulfonilurea en 50% o de insulina basal en 20% al iniciar liraglutida.'
      },
      {
        id: 'lir-inter-2',
        interactsWith: 'Warfarina y derivados cumarínicos',
        severity: 'Moderada',
        clinicalEffect: 'Posible alteración del INR por enlentecimiento del vaciado gástrico.',
        recommendation: 'Monitorear el INR con mayor frecuencia tras iniciar o modificar la dosis de liraglutida.'
      }
    ],
    storageAndConservation: 'Sin abrir: conservar en nevera entre 2 °C y 8 °C (no congelar). En uso: conservar a menos de 30 °C o en nevera por un período máximo de 30 días protegido de la luz con el capuchón colocado.',
    storageConditions: 'Refrigerar sin abrir (2-8 °C). Tras primer uso mantener <30 °C por un máximo de 30 días.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    updatedAt: '2026-11-11'
  },
  {
    id: 'dulaglutida',
    genericName: "Dulaglutida",
    commercialNames: ["Trulicity"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501082243420.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144&format=jpeg",
    imageAlt: "Dulaglutida - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501082243420.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144&format=jpeg"],
    atcCode: 'A10BJ05',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Agonista del receptor de GLP-1 (arGLP-1) fusionado a la fracción Fc de IgG4 de administración semanal',
    description: 'Molécula biotecnológica constituida por dos cadenas idénticas de análogo de GLP-1 humano unidas mediante puentes disulfuro a una porción Fc de inmunoglobulina G4 (IgG4) humana modificada. Esta estructura macromolecular previene la degradación por la enzima DPP-4 y disminuye el aclaramiento renal por exclusión de tamaño, confiriéndole una semivida de 5 días que permite una inyección subcutánea semanal en pluma con aguja oculta automática.',
    presentations: [
      { id: 'dul-1', form: 'Solución inyectable en pluma precargada unidosis automática semanal', concentration: '0.75 mg / 0.5 mL, 1.5 mg / 0.5 mL, 3.0 mg / 0.5 mL y 4.5 mg / 0.5 mL', route: 'Subcutánea', packaging: 'Caja con 4 plumas autoinyectables precargadas desechables con aguja interna no visible' }
    ],
    mechanismOfAction: {
      summary: 'Se une a los receptores de GLP-1 en las células beta del páncreas estimulando la transcripción del gen de proinsulina y la exocitosis de gránulos de insulina acoplada a la entrada de calcio dependiente de glucosa. Suprime la secreción posprandial de glucagón en las células alfa, disminuye la producción hepática autónoma de glucosa y retrasa el vaciado gástrico. En el estudio cardiovascular REWIND demostró una reducción estadísticamente significativa del 12% en MACE tanto en prevención secundaria como en prevención primaria de pacientes diabéticos con múltiples factores de riesgo.',
      molecularTarget: 'Receptor de GLP-1 de células beta pancreáticas y células alfa',
      pharmacokinetics: {
        bioavailability: 'Subcutánea aprox. 65% tras inyección abdominal. Pico plasmático entre 24 y 72 horas.',
        halfLife: 'Aproximadamente 5 días (112 a 115 horas), idóneo para administración semanal continua.',
        metabolism: 'Catabolismo proteico general en aminoácidos constituyentes similar a las inmunoglobulinas endógenas',
        elimination: 'Degradación proteolítica sistémica; no sufre filtración ni eliminación renal como molécula intacta'
      }
    },
    therapeuticIndications: [
      'Tratamiento de adultos con diabetes mellitus tipo 2 no controlada en monoterapia (cuando metformina no es tolerable) o añadida a otros antidiabéticos',
      'Reducción del riesgo de eventos cardiovasculares adversos mayores (MACE: muerte cardiovascular, infarto no fatal o ictus no fatal) en adultos con diabetes tipo 2 con enfermedad cardiovascular establecida o con múltiples factores de riesgo cardiovascular (estudio REWIND)'
    ],
    posology: {
      adultStandard: 'Dosis inicial habitual: 0.75 mg SC una vez a la semana (o 1.5 mg una vez a la semana en monoterapia). Para control glucémico adicional tras al menos 4 semanas, incrementar a 1.5 mg SC una vez por semana. En pacientes seleccionados con necesidad de intensificación glucémica: puede aumentarse tras 4 semanas a 3.0 mg SC una vez por semana y finalmente hasta un máximo de 4.5 mg SC una vez por semana.',
      pediatricDose: 'Niños ≥10 años con diabetes tipo 2: Iniciar con 0.75 mg SC una vez por semana; puede escalarse a 1.5 mg/semana tras 4 semanas si el control glucémico es subóptimo.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'TFG 30-59 mL/min: No requiere ajuste de dosis.',
        severe: 'TFG 15-29 mL/min: No requiere ajuste posológico (estudio AWARD-7 respaldó seguridad en nefropatía avanzada). TFG <15 mL/min o hemodiálisis: No recomendada por datos limitados.'
      },
      hepaticAdjustment: 'No requiere ajuste de dosis en insuficiencia hepática.',
      administrationNotes: 'Inyectar una vez por semana, el mismo día de cada semana, a cualquier hora, independientemente de las comidas. El dispositivo de pluma automática tiene la aguja integrada y oculta que se inserta y retira automáticamente al presionar el botón verde superior.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE TUMORES TIROIDEOS DE CÉLULAS C: ASOCIADA A CARCINOMA MEDULAR DE TIROIDES EN ANIMALES DE LABORATORIO. CONTRAINDICADA EN PACIENTES CON CMT O MEN 2.',
      contraindications: [
        'Hipersensibilidad a la dulaglutida',
        'Antecedente personal o familiar de carcinoma medular de tiroides (CMT) o síndrome MEN 2',
        'Pancreatitis previa documentada',
        'Cetoacidosis diabética o diabetes mellitus tipo 1'
      ],
      adverseEffects: {
        frequent: ['Náuseas leves a moderadas transitorias (alrededor del 15-20%)', 'Diarrea y vómitos', 'Dolor abdominal y disminución del apetito', 'Dispepsia'],
        moderate: ['Fatiga y astenia', 'Aumento de 2-4 latidos por minuto en la frecuencia cardíaca sinusal', 'Reacciones cutáneas locales leves en el sitio de inyección'],
        severe: ['Pancreatitis aguda necrotizante', 'Deshidratación severa con fracaso renal agudo', 'Reacciones de hipersensibilidad sistémica']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'No utilizar durante la gestación. Suspender al menos 1 mes antes de un embarazo planificado y reemplazar por insulina.',
      lactationRisk: 'Contraindicado',
      lactationSafety: 'Contraindicado: Se desconoce su paso a leche materna; evitar durante la lactancia.',
      monitoringParameters: ['HbA1c trimestral', 'Función renal en pacientes con intolerancia digestiva severa', 'Síntomas sugestivos de pancreatitis']
    },
    interactions: [
      {
        id: 'dul-inter-1',
        interactsWith: 'Sulfonilureas e Insulina',
        severity: 'Mayor',
        clinicalEffect: 'Mayor riesgo de hipoglucemia sintomática grave.',
        recommendation: 'Reducir la dosis basal de insulina o suspender/reducir la sulfonilurea al añadir dulaglutida.'
      },
      {
        id: 'dul-inter-2',
        interactsWith: 'Fármacos orales concomitantes',
        severity: 'Moderada',
        clinicalEffect: 'El retraso del vaciamiento gástrico puede retrasar el tiempo al pico máximo de medicamentos orales.',
        recommendation: 'En general no requiere ajuste posológico; vigilar fármacos de índice terapéutico estrecho.'
      }
    ],
    storageAndConservation: 'Conservar en nevera entre 2 °C y 8 °C en el embalaje original para protegerlo de la luz. Si es necesario, puede conservarse fuera de la nevera a temperatura no superior a 30 °C durante un período máximo único de hasta 14 días.',
    storageConditions: 'Refrigerar (2-8 °C). Fuera de nevera hasta 14 días a <30 °C protegido de la luz.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    updatedAt: '2026-11-11'
  },
  {
    id: 'tirzepatida',
    genericName: "Tirzepatida",
    commercialNames: ["Mounjaro (DM2)", "Zepbound (Manejo de peso)"],
    imageUrl: "https://www.yza.mx/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_YzaMexico/default/dwec6263a8/images/large/7501082243642_2.jpg?sw=1000&sh=1000",
    imageAlt: "Tirzepatida - Presentación farmacológica",
    images: ["https://www.yza.mx/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_YzaMexico/default/dwec6263a8/images/large/7501082243642_2.jpg?sw=1000&sh=1000", "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1508159-231113144609-zepbound-file.jpg?c=original"],
    atcCode: 'A10BX16',
    anatomicalSystem: '4.1 Hipoglucemiantes orales',
    therapeuticClass: 'Co-agonista dual de receptores de GIP y GLP-1 ("Twincretina") de administración semanal',
    description: 'Péptido sintético de 39 aminoácidos con actividad coagonista dual balanceada sobre los receptores del polipéptido insulinotrópico dependiente de glucosa (GIP) y del péptido similar al glucagón-1 (GLP-1). La estimulación sinérgica de ambos receptores de incretinas logra una eficacia sin precedentes en reducción de hemoglobina glicosilada (reducciones superiores al 2.5% en HbA1c en el programa SURPASS) y pérdidas ponderales de hasta el 20-25% del peso corporal.',
    presentations: [
      { id: 'tir-1', form: 'Solución inyectable en pluma precargada autoinyectable semanal SC', concentration: '2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg y 15 mg en 0.5 mL', route: 'Subcutánea', packaging: 'Caja con 4 plumas unidosis precargadas desechables' }
    ],
    mechanismOfAction: {
      summary: 'Agonista dual de alta afinidad por los receptores endógenos de GIP y GLP-1. Modificado con una fracción de diácido graso C20 que prolonga su semivida a 5 días. Actúa sobre los receptores de GIP en el tejido adiposo blanco mejorando la sensibilidad a la insulina, estimulando la lipólisis fisiológica y reduciendo la lipotoxicidad ectópica hepática y muscular; a nivel pancreático el agonismo dual GIP/GLP-1 genera una estimulación de la secreción de insulina de primera y segunda fase mucho más potente que cualquier agonista selectivo de GLP-1 solo. A nivel hipotalámico la estimulación simultánea de receptores GIP y GLP-1 produce una sinergia profunda que suprime el hambre hedónica y homeostática, incrementando la saciedad y el gasto metabólico.',
      molecularTarget: 'Receptores humanos acoplados a proteína G de GIP (GIPR) y GLP-1 (GLP-1R)',
      pharmacokinetics: {
        bioavailability: 'Subcutánea aprox. 80%. Concentración máxima alcanzada entre 8 y 72 horas.',
        halfLife: 'Aproximadamente 5 días (120 horas), permitiendo posología subcutánea una vez a la semana.',
        metabolism: 'Proteólisis del esqueleto peptídico y beta-oxidación de la cadena de ácido graso',
        elimination: 'Excreción urinaria (metabolitos fragmentados) en un 66% y fecal en un 33%; no se elimina como molécula intacta'
      }
    },
    therapeuticIndications: [
      'Tratamiento de adultos con diabetes mellitus tipo 2 insuficientemente controlada como complemento a dieta y ejercicio físico, en monoterapia o en combinación con otros hipoglucemiantes orales o insulina basal',
      'Tratamiento y manejo crónico de peso en adultos con obesidad (IMC ≥30 kg/m²) o sobrepeso (IMC ≥27 kg/m²) con comorbilidades metabólicas asociadas (Zepbound)'
    ],
    posology: {
      adultStandard: 'Dosis inicial: 2.5 mg SC una vez a la semana durante 4 semanas (dosis de inicio para tolerabilidad gastrointestinal; no terapéutica). A las 4 semanas, incrementar a 5 mg SC una vez a la semana (dosis de mantenimiento inicial). Si se requiere mayor control glucémico tras al menos 4 semanas con 5 mg, puede aumentarse en incrementos de 2.5 mg cada 4 semanas: 7.5 mg, 10 mg, 12.5 mg, hasta la dosis máxima tolerada de 15 mg SC una vez a la semana.',
      pediatricDose: 'No recomendada en niños o adolescentes menores de 18 años (seguridad no establecida).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'TFG 30-59 mL/min: No requiere ajuste de dosis.',
        severe: 'TFG 15-29 mL/min: No requiere ajuste posológico; monitorizar adecuada hidratación. TFG <15 mL/min: Experiencia limitada.'
      },
      hepaticAdjustment: 'No requiere ajuste de dosis en insuficiencia hepática.',
      administrationNotes: 'Inyectar una vez por semana el mismo día de cada semana, a cualquier hora, con o sin alimentos, en abdomen, muslo o deltoides. ADVERTENCIA EN MUJERES EN EDAD FÉRTIL QUE USAN ANTICONCEPTIVOS ORALES: el retardo del vaciado gástrico puede reducir la Cmax de los anticonceptivos hormonales orales; se recomienda utilizar un método de barrera no hormonal o cambiar a anticonceptivo no oral durante 4 semanas tras el inicio y durante 4 semanas tras cada escalada de dosis.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE TUMORES TIROIDEOS DE CÉLULAS C: ASOCIADA A CARCINOMA MEDULAR DE TIROIDES EN MODELOS PRECLÍNICOS. CONTRAINDICADA EN ANTECEDENTES DE CMT O SÍNDROME MEN 2.',
      contraindications: [
        'Antecedentes personales o familiares de carcinoma medular de tiroides (CMT)',
        'Síndrome de Neoplasia Endocrina Múltiple tipo 2 (MEN 2)',
        'Antecedentes de pancreatitis aguda grave',
        'Diabetes mellitus tipo 1 o cetoacidosis',
        'Embarazo y lactancia'
      ],
      adverseEffects: {
        frequent: ['Náuseas (hasta 30% en escaladas de dosis)', 'Diarrea y deposiciones frecuentes', 'Disminución marcada del apetito y saciedad precoz', 'Vómitos, dispepsia y estreñimiento'],
        moderate: ['Reflujo gastroesofágico y eructos', 'Colelitiasis por pérdida ponderal acelerada', 'Aumento de frecuencia cardíaca de 2-5 lpm', 'Alopecia efluvio telógeno transitorio por descenso rápido de peso'],
        severe: ['Pancreatitis aguda', 'Gastroparesia severa e íleo', 'Fallo renal agudo prerrenal deshidratante', 'Reacciones anafilácticas severas']
      },
      pregnancyCategory: 'C',
      pregnancyDescription: 'Toxicidad fetal en estudios preclínicos. Debe suspenderse al menos 1 mes antes de planificar un embarazo.',
      lactationRisk: 'Contraindicado',
      lactationSafety: 'Contraindicado: Evitar durante la lactancia.',
      monitoringParameters: ['HbA1c trimestral', 'Peso corporal periódico', 'Función renal e ionograma ante vómitos profusos', 'Signos clínicos de pancreatitis aguda']
    },
    interactions: [
      {
        id: 'tir-inter-1',
        interactsWith: 'Anticonceptivos orales combinados',
        severity: 'Mayor',
        clinicalEffect: 'El retraso del vaciado gástrico disminuye el pico plasmático de absorción de anticonceptivos orales hasta en un 66%, con riesgo de ovulación imprevista y fallo anticonceptivo.',
        recommendation: 'Añadir un método de barrera (preservativo) o cambiar a método no oral durante 4 semanas al iniciar tirzepatida y durante 4 semanas tras cada incremento de dosis.'
      },
      {
        id: 'tir-inter-2',
        interactsWith: 'Sulfonilureas e Insulina',
        severity: 'Mayor',
        clinicalEffect: 'Riesgo elevado de hipoglucemia severa.',
        recommendation: 'Reducir la dosis de sulfonilurea o insulina basal al iniciar o titular tirzepatida.'
      },
      {
        id: 'tir-inter-3',
        interactsWith: 'Fármacos orales de estrecho margen terapéutico (Warfarina, Digoxina, Antiepilépticos)',
        severity: 'Moderada',
        clinicalEffect: 'Modificación del Tmax y potencial retraso en la absorción digestiva.',
        recommendation: 'Monitorear estrechamente los niveles séricos y efectos farmacológicos.'
      }
    ],
    storageAndConservation: 'Conservar en nevera entre 2 °C y 8 °C en el embalaje original para proteger de la luz. No congelar. Puede conservarse fuera de nevera a temperatura no superior a 30 °C durante un máximo de hasta 21 días.',
    storageConditions: 'Refrigerar (2-8 °C). Fuera de nevera hasta 21 días a <30 °C.',
    highAlertMedicine: false,
    prescriptionType: 'Receta médica simple',
    updatedAt: '2026-11-11'
  },

  // ----------------------------------------------------
  // 4.2 INSULINAS: RÁPIDA, INTERMEDIA Y LENTA
  // ----------------------------------------------------
  {
    id: 'insulina-regular',
    genericName: "Insulina Humana Regular",
    commercialNames: ["Humulin R", "Insulex R"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501082208009.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Insulina Humana Regular - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501082208009.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265", "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/998745_A_1280_AL.jpg"],
    atcCode: 'A10AB01',
    anatomicalSystem: '4.2 Insulinas',
    therapeuticClass: 'Insulina humana biosintética de acción rápida / corta (ADN recombinante)',
    description: 'Insulina idéntica a la hormona endógena humana producida mediante tecnología de ADN recombinante. Es la única insulina autorizada para administración intravenosa e intramuscular en el tratamiento de emergencias metabólicas como la cetoacidosis diabética y el síndrome hiperosmolar, además del control glucémico prandial.',
    presentations: [
      { id: 'insr-1', form: 'Solución inyectable estéril transparente (100 UI/mL)', concentration: '100 UI/mL', route: 'Subcutánea / Intravenosa / Intramuscular', packaging: 'Frasco ampolla (vial) de 10 mL (1000 UI)' },
      { id: 'insr-2', form: 'Cartuchos para pluma inyectora (100 UI/mL)', concentration: '100 UI/mL', route: 'Subcutánea', packaging: 'Cartucho de 3 mL (300 UI) x 5 unidades' }
    ],
    mechanismOfAction: {
      summary: 'Se une a la subunidad alfa del receptor de insulina de la membrana celular de tejidos sensibles (músculo, tejido adiposo e hígado), activando por autofosforilación la tirosina quinasa de la subunidad beta intracelular. Activa la cascada de señalización IRS/PI3K/Akt, promoviendo la translocación rápida de vesículas intracelulares con transportadores de glucosa GLUT4 hacia la membrana plasmática. Facilita la entrada de glucosa a las células, estimula la glucogenogénesis y la lipogénesis, e inhibe la neoglucogénesis, glucogenólisis y lipólisis.',
      molecularTarget: 'Receptor de Insulina (tirosina quinasa transmembrana) y transportador GLUT4',
      pharmacokinetics: {
        bioavailability: 'SC: Inicio en 30 minutos, pico plasmático a las 1.5 a 3.5 horas, duración 6 a 8 horas. IV: Inicio inmediato (1-2 min), pico inmediato, vida media de eliminación plasmática 5 a 10 minutos, duración 30-60 minutos.',
        halfLife: 'IV: 5 a 9 minutos; SC: absorción prolongada por hexámeros que deben disociarse a monómeros.',
        metabolism: 'Hepático (50-60%) por enzima degradadora de insulina (IDE / insulinasa), y renal (30-40%)',
        elimination: 'Excreción renal tras catabolismo tubular proximal'
      }
    },
    therapeuticIndications: [
      'Cetoacidosis diabética (CAD) y estado hiperosmolar hiperglucémico (EHH) mediante infusión intravenosa continua',
      'Control de hiperglucemia prandial en diabetes mellitus tipo 1 y tipo 2',
      'Tratamiento de la hiperpotasemia aguda severa con infusión de insulina regular más glucosa hipertónica',
      'Manejo de diabetes gestacional y diabetes en pacientes hospitalizados o en estado crítico'
    ],
    posology: {
      adultStandard: 'Uso prandial SC: Inyectar 30 minutos ANTES de la ingesta de alimentos; dosificación individualizada según conteo de carbohidratos (típicamente 0.1 a 0.2 UI/kg por comida). Cetoacidosis diabética IV: bolo inicial de 0.1 UI/kg IV seguido de infusión intravenosa continua a 0.1 UI/kg/hora (o infusión continua directa a 0.14 UI/kg/h sin bolo) con titulación horaria según glucemia. Hiperpotasemia severa: 10 UI de insulina regular IV en bolo acompañadas de 50 mL de dextrosa al 50% (25 g de glucosa) en 15-30 minutos.',
      pediatricDose: 'CAD pediátrica: Infusión IV a 0.05 - 0.1 UI/kg/hora tras expansión con cristaloides previa.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis total al 75% debido a menor degradación renal de insulina.',
        severe: 'ClCr <10 mL/min: Reducir dosis total al 50% por aclaramiento renal marcadamente descendido.'
      },
      hepaticAdjustment: 'En insuficiencia hepática avanzada disminuye la neoglucogénesis y el catabolismo de insulina; reducir dosis y monitorizar glucemias estrechamente.',
      administrationNotes: 'POR VÍA SUBCUTÁNEA DEBE INYECTARSE ESTRICTAMENTE 30 MINUTOS ANTES DE LAS COMIDAS (su formulación hexamérica requiere tiempo para disociarse). Rotar constantemente los sitios de inyección en abdomen, muslos o brazos para prevenir lipodistrofia.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HIPOGLUCEMIA SEVERA O SHOCK HIPOGLUCÉMICO POR ERRORES EN LA DOSIFICACIÓN O DISCORDANCIA CON LA INGESTA CALÓRICA. LA HIPOGLUCEMIA PUEDE PRODUCIR COMA, CONVULSIONES Y MUERTE.',
      contraindications: [
        'Episodio agudo de hipoglucemia',
        'Hipersensibilidad al principio activo o a los excipientes (metacresol)'
      ],
      adverseEffects: {
        frequent: ['Hipoglucemia (palpitaciones, palidez, sudor frío, hambre, confusión)', 'Aumento de peso corporal'],
        moderate: ['Lipohipertrofia o lipoatrofia en sitios de punción repetida sin rotación', 'Reacciones alérgicas cutáneas locales eritematosas'],
        severe: ['Coma hipoglucémico profundo con secuelas neurológicas irreversibles', 'Hipopotasemia severa inducida por redistribución intracelular masiva', 'Shock anafiláctico']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Insulina de elección prioritaria en diabetes gestacional y lactancia.'
    },
    interactions: [
      { interactingDrug: 'Betabloqueantes no selectivos', severity: 'Grave', clinicalEffect: 'Enmascaran los signos autonómicos de alerta de la hipoglucemia y bloquean la recuperación glucémica.', recommendation: 'Educar sobre diaforesis como síntoma no bloqueado.' },
      { interactingDrug: 'Corticosteroides sistémicos', severity: 'Grave', clinicalEffect: 'Aumento drástico de la resistencia a la insulina y gluconeogénesis, duplicando los requerimientos de insulina.', recommendation: 'Ajustar y escalar dosis de insulina durante corticoterapia.' },
      { interactingDrug: 'Inhibidores de la ECA', severity: 'Moderada', clinicalEffect: 'Pueden potenciar el efecto reductor de la glucosa y precipitar hipoglucemias imprevistas.', recommendation: 'Vigilar glucemias capilares.' }
    ],
    monitoringParameters: ['Glucemia capilar seriada horaria en infusión IV', 'Potasio sérico (K+) previo y durante el tratamiento', 'HbA1c cada 3 meses', 'Inspección periódica de la piel en áreas de inyección'],
    storageConditions: 'Viales sin abrir: Conservar en nevera de 2 °C a 8 °C (no congelar). En uso: mantener a temperatura ambiente (<30 °C) durante un máximo de 28 a 42 días.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'insulina-nph',
    genericName: "Insulina Humana NPH (Isófana )",
    commercialNames: ["Humulin N", "Insulex N"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501082208108.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Insulina Humana NPH (Isófana ) - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501082208108.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144", "https://farmaciasanjorge.com/cdn/shop/products/7501125102790_fb82d5d2-17dd-404c-9a5f-6fcceb08d5bc_1024x.jpg?v=1701389372"],
    atcCode: 'A10AC01',
    anatomicalSystem: '4.2 Insulinas',
    therapeuticClass: 'Insulina humana de acción intermedia conjugada con protamina',
    description: 'Insulina humana biosintética de acción intermedia formulada como un complejo cristalino isófano con la proteína protamina y zinc en medio neutro. Presenta un aspecto lechoso turbio característico tras homogenización. Provee cobertura de insulina basal durante 12 a 18 horas con un pico de acción intermedio evidente entre las 4 y 10 horas tras su inyección subcutánea.',
    presentations: [
      { id: 'nph-1', form: 'Suspensión inyectable turbia blanquecina (100 UI/mL)', concentration: '100 UI/mL', route: 'Subcutánea ESTRICTA', packaging: 'Frasco ampolla (vial) de 10 mL (1000 UI)' },
      { id: 'nph-2', form: 'Plumas precargadas descartables o cartuchos (100 UI/mL)', concentration: '100 UI/mL', route: 'Subcutánea ESTRICTA', packaging: 'Plumas / Cartuchos de 3 mL (300 UI) x 5 unidades' }
    ],
    mechanismOfAction: {
      summary: 'La adición de la proteína básica protamina a la molécula de insulina forma microcristales estables de disolución lenta en el tejido celular subcutáneo. Tras la inyección subcutánea, las enzimas proteolíticas tisulares degradan gradualmente la protamina, liberando monómeros de insulina activa al torrente vascular de forma pausada y prolongada. Activa los receptores de insulina tisulares facilitando la captación periférica de glucosa y suprimiendo la glucogenólisis hepática.',
      molecularTarget: 'Receptores de Insulina tisulares y liberación retardada por protamina',
      pharmacokinetics: {
        bioavailability: 'SC: Inicio de acción en 1 a 2 horas, pico de concentración máximo entre las 4 y 10 horas, duración biológica efectiva de 12 a 18 horas (rango hasta 20h).',
        halfLife: 'Absorción subcutánea retardada con cinética de orden cero dependiente del tamaño del cristal.',
        metabolism: 'Degradación proteolítica de protamina tisular seguida de degradación de insulina por insulinasa hepática y renal',
        elimination: 'Filtración y catabolismo tubular renal'
      }
    },
    therapeuticIndications: [
      'Control de los requerimientos basales de insulina en diabetes mellitus tipo 1 (asociada a insulina prandial)',
      'Control glucémico basal en diabetes mellitus tipo 2 cuando los hipoglucemiantes orales son insuficientes',
      'Diabetes mellitus gestacional no controlada con dieta (fármaco basal de amplia seguridad clásica)'
    ],
    posology: {
      adultStandard: 'Dosificación basal individualizada: Habitualmente 0.2 a 0.4 UI/kg/día en 1 o 2 dosis subcutáneas. En esquema de dos dosis diarias: 2/3 de la dosis total matutina antes del desayuno y 1/3 nocturna antes de la cena o preferiblemente antes de acostarse (hora de dormir) para reducir el riesgo de hipoglucemia nocturna de las 3:00 AM.',
      pediatricDose: 'Individualizada según edad y requerimientos basales (0.2 a 0.5 UI/kg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis total al 75%.',
        severe: 'ClCr <10 mL/min: Reducir dosis total al 50% por menor aclaramiento de insulina.'
      },
      hepaticAdjustment: 'Reducir dosis por menor catabolismo y mayor riesgo de hipoglucemia.',
      administrationNotes: 'PROHIBIDA LA VÍA INTRAVENOSA: LA INYECCIÓN IV DE PROTAMINA CAUSA COLAPSO CARDIOVASCULAR SEVERO Y SHOCK ANAFILÁCTICO. ANTES DE INYECTAR, HOMOGENEIZAR LA SUSPENSIÓN INVIRTIENDO EL VIAL O LA PLUMA SUAVEMENTE 10 VECES (NO AGITAR BRUSCAMENTE PARA EVITAR ESPUMA).'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADA DE FORMA ABSOLUTA POR VÍA INTRAVENOSA. RIESGO SIGNIFICATIVO DE HIPOGLUCEMIA NOCTURNA GRAVE DEBIDO AL PICO DE ACCIÓN PRONUNCIADO A LAS 6-8 HORAS TRAS LA ADMINISTRACIÓN NOCTURNA.',
      contraindications: [
        'Administración intravenosa',
        'Episodio agudo de hipoglucemia en curso',
        'Alergia documentada a la protamina'
      ],
      adverseEffects: {
        frequent: ['Hipoglucemia, especialmente nocturna (pesadillas, sudoración fría profusa nocturna, cefalea matutina)', 'Aumento ponderal'],
        moderate: ['Lipohipertrofia subcutánea por falta de rotación del sitio de inyección', 'Reacciones alérgicas cutáneas locales'],
        severe: ['Coma hipoglucémico nocturno inadvertido (fenómeno de Somogyi)', 'Reacciones anafilácticas mediadas por anticuerpos antiprotamina']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; no penetra en la leche materna en cantidades activas.'
    },
    interactions: [
      { interactingDrug: 'Betabloqueantes', severity: 'Grave', clinicalEffect: 'Atenuación de los síntomas adrenérgicos de hipoglucemia y prolongación del cuadro hipoglucémico.', recommendation: 'Monitorización intensificada de la glucemia.' },
      { interactingDrug: 'Corticoides sistémicos', severity: 'Grave', clinicalEffect: 'Hiperglucemia vespertina muy intensa con aumento de los requerimientos insulínicos.', recommendation: 'Escalar la dosis basal de NPH diurna.' },
      { interactingDrug: 'Alcohol etílico', severity: 'Grave', clinicalEffect: 'Inhibición de la glucogenólisis nocturna con alto riesgo de hipoglucemia mortal durante el sueño.', recommendation: 'Prohibir consumo de bebidas alcohólicas.' }
    ],
    monitoringParameters: ['Glucemia capilar matutina en ayunas y a las 3:00 AM para descartar hipoglucemias silentes', 'HbA1c trimestral', 'Inspección de sitios anatómicos de inyección'],
    storageConditions: 'Refrigerar sin abrir entre 2 °C y 8 °C (no congelar). En uso: mantener a temperatura ambiente (<30 °C) hasta 28 días.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'insulina-glargina',
    genericName: "Insulina Glargina",
    commercialNames: ["Galactus", "Valvey", "Toujeo", "Lantus"],
    imageUrl: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1229290_A_1280_AL.jpg",
    imageAlt: "Insulina Glargina - Presentación farmacológica",
    images: ["https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1229290_A_1280_AL.jpg", "https://farmaciapopularenlinea.com/cdn/shop/files/caja-Valvey-con-5-jeringas_b7836029-8769-418e-b07f-ec25e2771165.png?v=1783994187", "https://farmaciaherrera.myshopify.com/cdn/shop/files/7501165010628.jpg", "https://kalanfarmacia.com.mx/wp-content/uploads/2021/08/lantus.jpg"],
    atcCode: 'A10AE04',
    anatomicalSystem: '4.2 Insulinas',
    therapeuticClass: 'Análogo de insulina humana de acción ultralenta y perfil basal sin picos',
    description: 'Análogo sintético de insulina humana obtenido por ADN recombinante modificado molecularmente (sustitución de asparagina por glicina en posición A21 y adición de dos argininas en posición B31-B32). Formulada como solución ácida transparente a pH 4.0; al inyectarse en el tejido celular subcutáneo neutro (pH 7.4), micro-precipita en hexámeros estables que se disuelven lentamente, suministrando un perfil farmacocinético basal plano sin picos durante más de 24 horas.',
    presentations: [
      { id: 'glar-1', form: 'Solución inyectable estéril U-100 (100 UI/mL)', concentration: '100 UI/mL', route: 'Subcutánea ESTRICTA', packaging: 'Frasco ampolla de 10 mL y cartuchos/plumas SoloStar de 3 mL' },
      { id: 'glar-2', form: 'Solución inyectable concentrada U-300 (300 UI/mL - Toujeo)', concentration: '300 UI/mL', route: 'Subcutánea ESTRICTA', packaging: 'Plumas precargadas SoloStar de 1.5 mL (450 UI)' }
    ],
    mechanismOfAction: {
      summary: 'El cambio molecular desplaza el punto isoeléctrico hacia la neutralidad celular. A pH ácido (4.0) en el vial es completamente soluble; tras la inyección subcutánea, el pH fisiológico tisular provoca la formación de microprecipitados de los que se liberan lentamente dímeros y monómeros de insulina hacia los capilares a velocidad constante. Mantiene concentraciones séricas basales prácticamente planas durante 24 horas (o hasta 36 horas en la formulación U-300) sin pico de concentración pronunciado, reduciendo drásticamente las hipoglucemias nocturnas respecto a la insulina NPH.',
      molecularTarget: 'Receptor de Insulina y disolución retardada por microprecipitación isoeléctrica tisular',
      pharmacokinetics: {
        bioavailability: 'SC: Inicio de acción en 1 a 2 horas; perfil de concentración plano sin pico detectable; duración sostenida de 24 horas (U-100) y hasta 36 horas (U-300).',
        halfLife: 'Semivida de absorción terminal de 12 horas (cinética de absorción no saturable).',
        metabolism: 'Parcialmente metabolizada en el depósito subcutáneo en el extremo carboxilo de la cadena B a metabolitos activos M1 y M2',
        elimination: 'Catabolismo tisular y depuración renal'
      }
    },
    therapeuticIndications: [
      'Tratamiento basal de la diabetes mellitus tipo 1 en adultos, adolescentes y niños a partir de los 2 años',
      'Tratamiento basal en diabetes mellitus tipo 2 cuando se requiere soporte insulínico continuo',
      'Sustitución de insulinas intermedias (NPH) en pacientes con hipoglucemias nocturnas repetidas o variabilidad glucémica elevada'
    ],
    posology: {
      adultStandard: 'Diabetes tipo 1: Iniciar habitualmente con el 40-50% de los requerimientos insulínicos totales diarios como glargina en dosis única diaria administrada a la misma hora del día (por la mañana o por la noche). Diabetes tipo 2: Iniciar con 10 UI o 0.2 UI/kg una vez al día; titular 2 UI cada 3 días hasta alcanzar glucemia basal en ayunas entre 80 y 130 mg/dL.',
      pediatricDose: 'Niños ≥2 años: Dosificación individualizada según esquema basal-bolo por endocrinología pediátrica.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Puede requerirse reducción del 20-25% de la dosis.',
        severe: 'ClCr <10 mL/min: Reducción de hasta el 50% de la dosis por menor depuración renal.'
      },
      hepaticAdjustment: 'Puede requerir reducción de dosis por disminución de la capacidad neoglucogénica.',
      administrationNotes: 'PROHIBIDA LA VÍA INTRAVENOSA. NUNCA MEZCLAR NI DILUIR EN LA MISMA JERINGA CON NINGUNA OTRA INSULINA NI MEDICAMENTO (el pH ácido de 4.0 causaría precipitación inmediata de la otra insulina). Administrar una vez al día a la misma hora fija.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDA LA ADMINISTRACIÓN INTRAVENOSA (PROVOCA HIPOGLUCEMIA MASIVA INMEDIATA). NUNCA MEZCLAR CON OTRAS INSULINAS EN LA MISMA JERINGA DEBIDO A SU PH ÁCIDO.',
      contraindications: [
        'Administración intravenosa',
        'Episodio activo de hipoglucemia',
        'Hipersensibilidad a la insulina glargina o a sus excipientes'
      ],
      adverseEffects: {
        frequent: ['Hipoglucemia leve a moderada (significativamente menor tasa de hipoglucemia nocturna que con NPH)', 'Aumento ponderal'],
        moderate: ['Dolor o escozor transitorio en el sitio de inyección debido a la formulación a pH ácido (4.0)', 'Lipodistrofia local si no se rota el punto de aplicación'],
        severe: ['Coma hipoglucémico grave por sobredosificación', 'Reacciones de hipersensibilidad alérgica sistémica raras']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia; la insulina no se absorbe intacta por el tracto digestivo del lactante.'
    },
    interactions: [
      { interactingDrug: 'Otras insulinas en la misma jeringa', severity: 'Grave', clinicalEffect: 'Precipitación física inmediata y alteración completa del perfil farmacocinético de ambos agentes.', recommendation: 'Utilizar siempre jeringas o plumas completamente separadas.' },
      { interactingDrug: 'Pioglitazona / Rosiglitazona', severity: 'Grave', clinicalEffect: 'Aumento significativo del riesgo de retención hídrica grave y descompensación de insuficiencia cardíaca.', recommendation: 'Monitorear estrechamente edema y signos de congestión.' },
      { interactingDrug: 'Betabloqueantes', severity: 'Grave', clinicalEffect: 'Enmascaramiento de los síntomas autonómicos adrenérgicos de la hipoglucemia.', recommendation: 'Control glucémico riguroso.' }
    ],
    monitoringParameters: ['Glucemia capilar en ayunas (diana 80-130 mg/dL)', 'HbA1c cada 3 meses', 'Inspección periódica del tejido celular subcutáneo en áreas de punción', 'Función renal periódica'],
    storageConditions: 'Sin abrir: Conservar en refrigeración de 2 °C a 8 °C (no congelar). En uso: mantener a temperatura ambiente (<30 °C) hasta por 28 días (o hasta 42 días para Toujeo).',
    updatedAt: '2026-03-30'
  }
];
