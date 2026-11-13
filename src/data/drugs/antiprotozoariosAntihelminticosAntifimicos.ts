import { Medication } from '../../types/medication';

const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANTIPROTOZOARIOS_ANTIHELMINTICOS_ANTIFIMICOS: Medication[] = [
  // ----------------------------------------------------
  // 4.5 ANTIPROTOZOARIOS
  // ----------------------------------------------------
  {
    id: 'metronidazol',
    genericName: "Metronidazol",
    commercialNames: ["Flagenase", "Flagyl V"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501299300251_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144",
    imageAlt: "Metronidazol - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501299300251_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144", "https://www.yza.mx/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_YzaMexico/default/dw6fa10690/images/large/7501299301111_1.jpg?sw=1000&sh=1000", "https://production-media.fahorro.com/media/catalog/product/7/5/7501072340092.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144"],
    atcCode: 'J01XD01',
    anatomicalSystem: '4.5 Antiprotozoarios',
    therapeuticClass: 'Antiprotozoario nitroimidazólico y antibacteriano bactericida frente a anaerobios estrictos',
    description: 'Fármaco prototípico del grupo de los 5-nitroimidazoles. Presenta una actividad bactericida y protozoocida rápida frente a microorganismos anaerobios obligados y protozoos microaerófilos como Entamoeba histolytica, Giardia lamblia y Trichomonas vaginalis.',
    presentations: [
      { id: 'metz-1', form: 'Comprimidos orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos' },
      { id: 'metz-2', form: 'Solución para infusión IV en bolsa', concentration: '5 mg/mL (500 mg / 100 mL)', route: 'Intravenosa', packaging: 'Bolsa para infusión de 100 mL' },
      { id: 'metz-3', form: 'Óvulos vaginales y gel dérmico al 0.75%', concentration: '500 mg por óvulo y 7.5 mg/g gel', route: 'Vaginal / Tópica cutánea', packaging: 'Caja x 10 óvulos y tubo x 30 g' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco que ingresa por difusión pasiva a la célula diana. En el interior de microorganismos anaerobios o protozoos, el grupo 5-nitro es reducido por la enzima piruvato-ferredoxina oxidorreductasa (PFOR) a intermediarios radicales nitro libres inestables y altamente citotóxicos. Estos radicales interaccionan con el ADN del patógeno, induciendo la pérdida de la estructura helicoidal, rotura de cadenas y muerte celular inmediata. Solo actúa en condiciones de bajo potencial redox.',
      molecularTarget: 'Piruvato-ferredoxina oxidorreductasa (PFOR) y fragmentación del ADN microbiano',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente del 90-100% (bioequivalencia total oral/IV). Penetra masivamente en todos los tejidos corporales, abscesos, hueso y LCR (45-100% de niveles plasmáticos).',
        halfLife: 'Aproximadamente 6 a 8 horas.',
        metabolism: 'Hepático extenso mediante oxidación microsomal a metabolito hidroxi-activo y metabolito ácido acético',
        elimination: 'Excreción renal masiva (60-80% principalmente como metabolitos que tiñen la orina) y biliar/fecal (10%)'
      }
    },
    therapeuticIndications: [
      'Amebiasis invasiva intestinal (disentería amebiana) y absceso hepático amebiano por Entamoeba histolytica',
      'Giardiasis aguda y crónica sintomática (Giardia lamblia / duodenalis)',
      'Tricomoniasis urogenital en mujeres y varones por Trichomonas vaginalis (tratar a la pareja)',
      'Vaginosis bacteriana por Gardnerella vaginalis',
      'Infecciones intraabdominales graves y peritonitis polimicrobiana por anaerobios (Bacteroides fragilis)',
      'Rosácea papulopustulosa facial (gel tópico al 0.75%)'
    ],
    posology: {
      adultStandard: 'Amebiasis invasiva o absceso hepático: 750 mg vía oral o 500 mg IV cada 8 horas durante 7 a 10 días (seguido obligatoriamente de un amebicida intraluminal como furoato de diloxanida para erradicar quistes). Giardiasis: 250 a 500 mg cada 8 horas por 5 a 7 días (o 2 g una vez al día por 3 días). Tricomoniasis: 2 g vía oral en dosis única (o 500 mg cada 12 horas por 7 días, tratando simultáneamente a la pareja sexual). Infecciones anaerobias IV: 500 mg cada 8 horas en infusión de 30 min.',
      pediatricDose: 'Amebiasis: 35 a 50 mg/kg/día divididos cada 8 horas por 10 días. Giardiasis: 15 mg/kg/día divididos cada 8 horas por 5 días.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <10 mL/min: Reducir dosis al 50% o administrar dosis suplementaria post-hemodiálisis.'
      },
      hepaticAdjustment: 'Reducir dosis diaria al 50% en insuficiencia hepática severa o cirrosis descompensada.',
      administrationNotes: 'PROHIBIDO EL CONSUMO DE ALCOHOL DURANTE EL TRATAMIENTO Y HASTA 48 HORAS DESPUÉS: produce un EFECTO DISULFIRAM (ANTABÚS) INTENSO con rubor facial violento, cefalea pulsátil, náuseas, vómitos explosivos, hipotensión arterial, palpitaciones y sensación de muerte inminente. Advertir que tiñe la orina de un color marrón-rojizo oscuro inofensivo.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDO EL CONSUMO DE BEBIDAS ALCOHÓLICAS POR REACCIÓN DISULFIRAM GRAVE. ALTO RIESGO DE NEUROPATÍA PERIFÉRICA SENSITIVA Y ENCEFALOPATÍA CEREBELOSA TOXICA EN TRATAMIENTOS PROLONGADOS.',
      contraindications: [
        'Primer trimestre del embarazo (teratogénesis controvertida)',
        'Hipersensibilidad a nitroimidazoles',
        'Consumo concomitante de alcohol o propilenglicol dentro de las 48 horas',
        'Enfermedad orgánica activa grave del SNC'
      ],
      adverseEffects: {
        frequent: ['Sabor metálico desagradable persistente en la boca', 'Náuseas, anorexia y dolor epigástrico', 'Orina marrón-rojiza oscura'],
        moderate: ['Cefalea y mareos', 'Candidiasis oral o vaginal sobreañadida'],
        severe: ['Neuropatía periférica sensitiva dolorosa simétrica en extremidades (uso prolongado)', 'Encefalopatía cerebelosa con ataxia, disartria y alteración del nivel de consciencia reversible al suspender', 'Convulsiones epileptiformes']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Precaución: Pasa a la leche materna; si se usa dosis única de 2 g, suspender lactancia durante 24 horas descartando la leche.'
    },
    interactions: [
      { interactingDrug: 'Alcohol etílico', severity: 'Grave', clinicalEffect: 'Inhibición de la aldehído deshidrogenasa con acumulación de acetaldehído y efecto antabús severo.', recommendation: 'Prohibir terminantemente el alcohol hasta 48 horas post-tratamiento.' },
      { interactingDrug: 'Warfarina y Anticoagulantes orales', severity: 'Grave', clinicalEffect: 'Inhibe el metabolismo hepático de warfarina duplicando el INR con alto riesgo hemorrágico.', recommendation: 'Monitorear estrechamente INR y reducir dosis de anticoagulante.' },
      { interactingDrug: 'Litio', severity: 'Grave', clinicalEffect: 'Aumento de niveles plasmáticos de litio con neurotoxicidad.', recommendation: 'Monitorear litemia y función renal.' }
    ],
    monitoringParameters: ['Descarte de consumo de alcohol', 'Examen neurológico (parestesias, marcha, reflejos) en tratamientos >10 días', 'Función hepática en cirróticos'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco y protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'diloxanida',
    genericName: 'Furoato de Diloxanida',
    commercialNames: ['Furamide', 'Entamide', 'Diloxanide Furoate GSK'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos orales de Furoato de Diloxanida',
    atcCode: 'P01AC01',
    anatomicalSystem: '4.5 Antiprotozoarios',
    therapeuticClass: 'Antiamebiano luminal de contacto directo de elección',
    description: 'Amebicida luminal de contacto directo no absorbible de referencia mundial. Fármaco de primera elección para erradicar el estado de portador asintomático de quistes de Entamoeba histolytica y como terapia de consolidación obligada tras el tratamiento tisular con metronidazol en la amebiasis invasiva para evitar recaídas y transmisión comunitaria.',
    presentations: [
      { id: 'dil-1', form: 'Comprimidos orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'El furoato de diloxanida es un profármaco que en el lumen intestinal es hidrolizado por esterasas de la mucosa a diloxanida libre. La diloxanida libre ejerce una acción amebicida de contacto directo sobre los trofozoítos de Entamoeba histolytica en la luz del colon, impidiendo su enquistamiento y destruyendo las formas móviles antes de que invadan la mucosa.',
      molecularTarget: 'Trofozoítos luminales de Entamoeba histolytica en la luz colónica',
      pharmacokinetics: {
        bioavailability: 'La fracción de diloxanida libre absorbida (aprox. 90%) se glucuroniza velozmente y carece de toxicidad o actividad tisular. Su efecto terapéutico antiamebiano lo realiza la fracción luminal local.',
        halfLife: 'Sistémica de eliminación de metabolito inactivo: 6 horas.',
        metabolism: 'Hidrólisis intraluminal a diloxanida y furoato, con posterior glucuronidación hepática rápida de la fracción absorbida',
        elimination: 'Excreción renal masiva del glucurónido inactivo (90%) y fecal de la fracción luminal no absorbida'
      }
    },
    therapeuticIndications: [
      'Tratamiento de elección de los portadores asintomáticos de quistes de Entamoeba histolytica',
      'Erradicación luminal de quistes y trofozoítos tras el tratamiento de amebiasis invasiva (absceso hepático o disentería) tratada previamente con metronidazol'
    ],
    posology: {
      adultStandard: '500 mg vía oral cada 8 horas con las comidas durante 10 días consecutivos.',
      pediatricDose: 'Niños: 20 mg/kg/día divididos en 3 tomas con las comidas durante 10 días (máximo 1500 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'ADMINISTRAR CON LAS COMIDAS. No utilizar como monoterapia en el absceso hepático o amebiasis invasiva aguda porque carece de penetración tisular suficiente; siempre debe administrarse DESPUÉS de completar el metronidazol.'
    },
    safety: {
      blackBoxWarning: 'INEFICAZ EN MONOTERAPIA PARA EL ABSCESO HEPÁTICO AMEBIANO U OTRAS FORMAS EXTRAINTESTINALES (AMEBICIDA EXCLUSIVAMENTE LUMINAL).',
      contraindications: [
        'Hipersensibilidad al furoato de diloxanida',
        'Primer trimestre del embarazo'
      ],
      adverseEffects: {
        frequent: ['Meteorismo, flatulencia excesiva y distensión abdominal (en hasta el 80% de pacientes)', 'Náuseas leves'],
        moderate: ['Cólicos abdominales y diarrea transitoria', 'Prurito y erupción cutánea'],
        severe: ['Reacciones alérgicas graves (excepcionales)']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro con precaución: Se desconocen efectos en la leche materna; evitar si hay alternativas.'
    },
    interactions: [
      { interactingDrug: 'No presenta interacciones medicamentosas graves conocidas', severity: 'Leve', clinicalEffect: 'Fármaco bien tolerado sin interferencia de citocromos.', recommendation: 'Completar el ciclo de 10 días.' }
    ],
    monitoringParameters: ['Examen coproparasitoscópico seriado (3 muestras en días alternos) 4 semanas post-tratamiento para confirmar erradicación de quistes'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'tinidazol',
    genericName: 'Tinidazol (Tricomonicida / Antiamebiano)',
    commercialNames: ['Fasigyn', 'Tindamax', 'Tricolam', 'Gynatrac'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos orales de Tinidazol de 500 mg',
    atcCode: 'P01AB02',
    anatomicalSystem: '4.5 Antiprotozoarios',
    therapeuticClass: 'Nitroimidazol de segunda generación con semivida prolongada y excelente tolerancia gástrica',
    description: 'Antiprotozoario y antibacteriano del grupo de los 5-nitroimidazoles de segunda generación. Posee una vida media plasmática que duplica a la del metronidazol, lo que permite pautas terapéuticas ultracortas en dosis única diaria con una incidencia significativamente menor de náuseas y sabor metálico.',
    presentations: [
      { id: 'tin-1', form: 'Comprimidos orales recubiertos', concentration: '500 mg y 1000 mg (1 g)', route: 'Oral', packaging: 'Caja x 4 y 8 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'El grupo 5-nitro es reducido por ferredoxina en el citoplasma de protozoos y bacterias anaerobias, liberando radicales libres electrofílicos que causan desestabilización estructural del ADN y rotura de la doble hélice con inhibición de la síntesis de ácidos nucleicos y lisis microbiana.',
      molecularTarget: 'ADN microbiano de protozoos y anaerobios mediante reducción nitro-radicalar',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente del 100% (absorción rápida y completa no afectada por comida).',
        halfLife: 'Prolongada: 12 a 14 horas (frente a 7h del metronidazol).',
        metabolism: 'Hepático moderado por citocromo CYP3A4',
        elimination: 'Excreción renal (20-25% inalterado) y fecal (12%)'
      }
    },
    therapeuticIndications: [
      'Tricomoniasis urogenital (Trichomonas vaginalis): fármaco de elección en dosis única',
      'Giardiasis sintomática (Giardia lamblia) en adultos y niños',
      'Amebiasis intestinal y absceso hepático amebiano',
      'Vaginosis bacteriana en mujeres adultas no gestantes',
      'Profilaxis de infecciones anaerobias postquirúrgicas en cirugía colorrectal y ginecológica'
    ],
    posology: {
      adultStandard: 'Tricomoniasis y Giardiasis: 2 g vía oral en DOSIS ÚNICA administrados con una comida principal (tratar obligatoriamente a la pareja sexual en tricomoniasis). Vaginosis bacteriana: 2 g una vez al día por 2 días consecutivos (o 1 g una vez al día por 5 días). Amebiasis intestinal: 2 g una vez al día durante 3 días. Absceso hepático amebiano: 1.5 a 2 g una vez al día durante 3 a 5 días con las comidas.',
      pediatricDose: 'Niños >3 años: Giardiasis / Amebiasis: 50 mg/kg en dosis única (máximo 2 g) tomada con alimentos.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <10 mL/min o hemodiálisis: administrar una dosis suplementaria completa (50% de la dosis) tras la sesión de diálisis.'
      },
      hepaticAdjustment: 'Reducir dosis a la mitad en insuficiencia hepática grave.',
      administrationNotes: 'INGERIR CON ALIMENTOS PARA MINIMIZAR MOLESTIAS GÁSTRICAS. PROHIBICIÓN ABSOLUTA DE CONSUMO DE BEBIDAS ALCOHÓLICAS DURANTE EL TRATAMIENTO Y HASTA AL MENOS 72 HORAS DESPUÉS DE LA ÚLTIMA DOSIS POR RIESGO DE EFECTO DISULFIRAM SEVERO.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE CARCINOGÉNESIS EN ESTUDIOS ANIMALES DE POR VIDA CON NITROIMIDAZOLES. PROHIBIDA LA INGESTA DE ALCOHOL HASTA 72 HORAS POST-TRATAMIENTO POR REACCIÓN DISULFIRAM GRAVE.',
      contraindications: [
        'Primer trimestre del embarazo y lactancia',
        'Consumo de alcohol dentro de las 72 horas previas o posteriores',
        'Hipersensibilidad a derivados nitroimidazólicos',
        'Trastornos neurológicos orgánicos centrales activos'
      ],
      adverseEffects: {
        frequent: ['Sabor metálico o amargo en la boca (menos intenso que con metronidazol)', 'Náuseas y anorexia leve'],
        moderate: ['Cefalea y mareos', 'Orina oscura marrón-rojiza'],
        severe: ['Neuropatía periférica y parestesias (en ciclos prolongados)', 'Convulsiones y encefalopatía', 'Leucopenia transitoria']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Pasa a la leche materna; suspender la lactancia durante el tratamiento y hasta 72 horas después de la última dosis.'
    },
    interactions: [
      { interactingDrug: 'Alcohol etílico', severity: 'Grave', clinicalEffect: 'Efecto disulfiram severo con hipotensión, taquicardia, vómitos y rubor facial.', recommendation: 'Evitar consumo de alcohol por 72 horas.' },
      { interactingDrug: 'Warfarina', severity: 'Grave', clinicalEffect: 'Inhibición de la degradación de warfarina con prolongación del INR y riesgo hemorrágico.', recommendation: 'Monitorear coagulación.' }
    ],
    monitoringParameters: ['Descarte de consumo de alcohol', 'Tratamiento simultáneo de la pareja sexual en tricomoniasis'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'quinina',
    genericName: "Quinina Sulfato",
    commercialNames: ["Quincare"],
    imageUrl: "https://www.advacarepharma.com/images/caja-de-inyeccion-de-quinina-dihidroxido.png?w=500&h=500&fit=contain",
    imageAlt: "Quinina Sulfato - Presentación farmacológica",
    images: ["https://www.advacarepharma.com/images/caja-de-inyeccion-de-quinina-dihidroxido.png?w=500&h=500&fit=contain"],
    atcCode: 'P01BC01',
    anatomicalSystem: '4.5 Antiprotozoarios',
    therapeuticClass: 'Antipalúdico alcaloide de la corteza de la quina esquizonticida sanguíneo',
    description: 'Alcaloide natural extraído de la corteza del árbol de la quina (Cinchona officinalis). Es el antipalúdico esquizonticida hemático de rescate clásico para el paludismo grave y complicado por Plasmodium falciparum resistente a cloroquina y para la babesiosis humana.',
    presentations: [
      { id: 'qui-1', form: 'Comprimidos orales (Sulfato de quinina)', concentration: '300 mg y 600 mg', route: 'Oral', packaging: 'Caja x 14 y 20 comprimidos' },
      { id: 'qui-2', form: 'Solución inyectable para infusión IV (Diclorhidrato de quinina)', concentration: '300 mg/mL (ampolla de 2 mL = 600 mg)', route: 'Intravenosa diluida lenta', packaging: 'Ampollas de 2 mL' }
    ],
    mechanismOfAction: {
      summary: 'Se concentra por gradiente de pH en la vacuola digestiva ácida del parásito intraeritrocitario. Inhibe la polimerización del hemo tóxico libre en hemozoína biológicamente inerte (pigmento malárico). La acumulación de hemo libre lisis la membrana vacuolar y destruye al parásito por estrés oxidativo masivo.',
      molecularTarget: 'Detoxificación de hemo en la vacuola digestiva de Plasmodium falciparum',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 80-90%. Unión a proteínas plasmáticas (alfa-1-glicoproteína ácida) del 70-90%.',
        halfLife: 'En sujetos sanos: 11 a 18 horas; en paludismo grave puede prolongarse hasta 24 horas.',
        metabolism: 'Hepático extenso mediante citocromo CYP3A4 a 3-hidroxiquinina',
        elimination: 'Excreción renal del 20% inalterada, resto metabolizado'
      }
    },
    therapeuticIndications: [
      'Tratamiento de rescate del paludismo grave y complicado por Plasmodium falciparum resistente a cloroquina (en combinación con doxiciclina o clindamicina)',
      'Paludismo no complicado por P. falciparum en gestantes en el primer trimestre',
      'Babesiosis humana grave (asociada a clindamicina)'
    ],
    posology: {
      adultStandard: 'Paludismo grave IV: Dosis de carga de 20 mg/kg de sal diclorhidrato diluida en 500 mL de dextrosa al 5% en infusión lenta durante 4 horas, seguida a las 8 horas por 10 mg/kg en infusión de 4 horas cada 8 horas hasta que el paciente tolere la vía oral. Oral: 600 mg de sulfato de quinina cada 8 horas durante 7 días (asociado a doxiciclina 100 mg cada 12h por 7 días o clindamicina en embarazadas).',
      pediatricDose: '10 mg/kg de sal cada 8 horas durante 7 días en infusión lenta.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Espaciar a cada 12 horas o reducir dosis al 75%.',
        severe: 'ClCr <10 mL/min o hemodiálisis: Reducir la dosis de mantenimiento en un 33-50% (administrar cada 12-24 horas; no reducir la dosis de carga inicial).'
      },
      hepaticAdjustment: 'Reducir dosis de mantenimiento a la mitad en insuficiencia hepática severa.',
      administrationNotes: 'PROHIBIDA LA ADMINISTRACIÓN INTRAVENOSA RÁPIDA EN BOLO: infundir siempre en un mínimo de 4 HORAS por riesgo de colapso cardiovascular y paro cardíaco. MONITORIZAR GLUCEMIAS SERIADAS: la quinina es un potente secretagogo de insulina pancreática y causa hipoglucemia severa refractaria, especialmente en mujeres gestantes.'
    },
    safety: {
      blackBoxWarning: 'ALTO RIESGO DE ARRITMIAS VENTRICULARES FATALES (PROLONGACIÓN DEL INTERVALO QT Y TORSADES DE POINTES) E HIPOGLUCEMIA SEVERA MORTAL. RIESGO DE CINCHONISMO SEVERO Y CEGUERA.',
      contraindications: [
        'Prolongación del intervalo QT conocida',
        'Antecedentes de fiebre de aguas negras (hemólisis masiva y fallo renal por quinina)',
        'Deficiencia congénita de G6PD grave',
        'Neuritis óptica o tinnitus preexistente severo',
        'Miastenia gravis'
      ],
      adverseEffects: {
        frequent: ['CINCHONISMO CARACTERÍSTICO: acúfenos, hipoacusia neurosensorial transitoria, mareo, cefalea, náuseas y visión borrosa', 'Hipoglucemia sintomática por hiperinsulinismo reactivo'],
        moderate: ['Hipotensión arterial', 'Diplopía y alteraciones en la visión cromática'],
        severe: ['Prolongación del intervalo QTc y torsades de pointes mortales', 'Amaurosis y ceguera tóxica por toxicidad retiniana', 'Fiebre de aguas negras con hemólisis intravascular aguda masiva, hemoglobinuria y necrosis tubular aguda']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia; bajas concentraciones en leche humana.'
    },
    interactions: [
      { interactingDrug: 'Fármacos que prolongan el intervalo QT (Amiodarona, Haloperidol, Moxifloxacino)', severity: 'Grave', clinicalEffect: 'Aumento del riesgo de paro cardíaco por torsades de pointes.', recommendation: 'Evitar la asociación; monitorizar ECG.' },
      { interactingDrug: 'Digoxina', severity: 'Grave', clinicalEffect: 'Disminuye el aclaramiento de digoxina duplicando sus concentraciones séricas con intoxicación digitálica.', recommendation: 'Reducir dosis de digoxina a la mitad y monitorear.' }
    ],
    monitoringParameters: ['Glucemia capilar seriada cada 4-6 horas (riesgo extremo de hipoglucemia)', 'Electrocardiograma continuo (intervalo QTc)', 'Constantes vitales durante infusión IV'],
    storageConditions: 'Conservar por debajo de 25 °C protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'primaquina',
    genericName: "Primaquina",
    commercialNames: ["Primaquina BCN"],
    imageUrl: "https://prixz.com/salud/wp-content/uploads/2021/01/Primaquina-%C2%BFQue-es-y-para-que-sirve.jpg",
    imageAlt: "Primaquina - Presentación farmacológica",
    images: ["https://prixz.com/salud/wp-content/uploads/2021/01/Primaquina-%C2%BFQue-es-y-para-que-sirve.jpg"],
    atcCode: 'P01BA03',
    anatomicalSystem: '4.5 Antiprotozoarios',
    therapeuticClass: 'Antipalúdico 8-aminoquinolona gametocitocida y esquizonticida tisular curativo radical',
    description: 'Antipalúdico sintético del grupo de las 8-aminoquinolonas. Es el único fármaco de uso generalizado capaz de destruir las formas tisulares latentes intrahepáticas (hipnozoítos) de Plasmodium vivax y Plasmodium ovale, logrando la cura radical y previniendo las recaídas tardías. Ejerce además una potente acción gametocitocida frente a Plasmodium falciparum que corta la cadena de transmisión del paludismo a los mosquitos Anopheles.',
    presentations: [
      { id: 'pri-1', form: 'Comprimidos orales', concentration: '7.5 mg y 15 mg de base', route: 'Oral', packaging: 'Caja x 14 y 28 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Es biotransformada por el citocromo hepático CYP2D6 a metabolitos quinona electrofílicos altamente reactivos. Estos intermediarios reactivos generan especies reactivas de oxígeno (estrés oxidativo radicalar intracelular masivo) que dañan las mitocondrias de los hipnozoítos hepáticos, inhiben la cadena de transporte de electrones del parásito y colapsan la síntesis de pirimidinas de Plasmodium.',
      molecularTarget: 'Mitocondrias del hipnozoíto hepático y estrés oxidativo mediado por CYP2D6',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente del 96% (absorción rápida y casi total tomada con comida).',
        halfLife: 'Corta: 4 a 7 horas.',
        metabolism: 'Hepático masivo y dependiente del citocromo CYP2D6 para generar metabolitos activos (los metabolizadores lentos de CYP2D6 presentan fracaso terapéutico)',
        elimination: 'Excreción urinaria rápida como metabolitos carboxílicos'
      }
    },
    therapeuticIndications: [
      'Cura radical de las formas latentes hepáticas (hipnozoítos) de Plasmodium vivax y Plasmodium ovale para prevención de recaídas (tras esquizonticida hemático)',
      'Acción gametocitocida para interrumpir la transmisión de Plasmodium falciparum',
      'Profilaxis primaria del paludismo en viajeros a zonas con predominio de P. vivax',
      'Tratamiento de la neumonía por Pneumocystis jirovecii leve a moderada (asociada a clindamicina como alternativa a cotrimoxazol)'
    ],
    posology: {
      adultStandard: 'Cura radical de P. vivax / P. ovale: 15 a 30 mg de primaquina base (o 0.5 mg/kg/día) vía oral una vez al día con la comida principal durante 14 días consecutivos tras haber completado el tratamiento con cloroquina. Dosis gametocitocida en P. falciparum: 0.25 mg/kg en dosis única.',
      pediatricDose: 'Niños: 0.5 mg/kg/día de primaquina base una vez al día con alimentos durante 14 días. CONTRAINDICADA EN DEFICIT DE G6PD.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No suele requerir ajuste',
        severe: 'Usar con precaución; vigilar hemólisis.'
      },
      hepaticAdjustment: 'Usar con precaución en hepatopatía grave.',
      administrationNotes: 'OBLIGATORIA LA DETERMINACIÓN PREVIA DE LA ACTIVIDAD DE LA ENZIMA GLUCOSA-6-FOSFATO DESHIDROGENASA (G6PD): en pacientes con déficit congénito de G6PD la primaquina desencadena hemólisis intravascular masiva fatal con hemoglobinuria e insuficiencia renal aguda. CONTRAINDICADA EN EL EMBARAZO.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE CRISIS HEMOLÍTICA AGUDA MORTAL EN PACIENTES CON DEFICIENCIA DE GLUCOSA-6-FOSFATO DESHIDROGENASA (G6PD). DETERMINAR SIEMPRE LA ACTIVIDAD DE G6PD ANTES DE PRESCRIBIR. RIESGO DE METAHEMOGLOBINEMIA GRAVE. CONTRAINDICADA EN EMBARAZO.',
      contraindications: [
        'Deficiencia congénita de Glucosa-6-Fosfato Deshidrogenasa (G6PD) confirmada o sospechada',
        'Embarazo (el feto tiene niveles fisiológicamente bajos de G6PD y sufrirá hemólisis intrauterina fatal)',
        'Lactancia si se desconoce el estado de G6PD del lactante',
        'Uso simultáneo con otros fármacos hemolíticos o depresores medulares'
      ],
      adverseEffects: {
        frequent: ['Dolor epigástrico y cólicos abdominales (tomar siempre con alimentos)', 'Náuseas y anorexia'],
        moderate: ['Metahemoglobinemia asintomática o cianosis leve (niveles de metahemoglobina del 5-15%)'],
        severe: ['Crisis hemolítica intravascular aguda con ictericia, orina oscura por hemoglobinuria y colapso renal', 'Agranulocitosis fulminante', 'Metahemoglobinemia severa con hipoxia tisular']
      },
      pregnancyCategory: 'X',
      lactationSafety: 'Contraindicado: Salvo que se haya confirmado previamente actividad enzimática normal de G6PD en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Fármacos que inducen hemólisis o metahemoglobinemia (Dapsona, Sulfamidas)', severity: 'Grave', clinicalEffect: 'Potenciación sinérgica de hemólisis y metahemoglobinemia severa.', recommendation: 'Contraindicada la administración conjunta.' },
      { interactingDrug: 'Inhibidores potentes de CYP2D6 (Fluoxetina, Bupropión)', severity: 'Moderada', clinicalEffect: 'Bloquean la bioactivación de la primaquina provocando fracaso en la erradicación de hipnozoítos y recaída malárica.', recommendation: 'Evitar inhibidores de CYP2D6 durante los 14 días.' }
    ],
    monitoringParameters: ['Nivel de actividad de Glucosa-6-Fosfato Deshidrogenasa (G6PD) PREVIO al inicio', 'Hemograma y hemoglobina basal y al día 3 y 7', 'Nivel de metahemoglobina en sangre y saturación de oxígeno', 'Coloración de la orina (descarte de hemoglobinuria oscura)'],
    storageConditions: 'Conservar por debajo de 30 °C en envases bien cerrados al abrigo de la luz.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'cloroquina',
    genericName: "Cloroquina",
    commercialNames: ["Aralen", "Cloropron"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501328975436_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Cloroquina - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501328975436_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265", "https://curitek.com/wp-content/uploads/2023/08/CLOROPRON-CLOROQUINA.jpg?v=1714511032"],
    atcCode: 'P01BA01',
    anatomicalSystem: '4.5 Antiprotozoarios',
    therapeuticClass: 'Antipalúdico 4-aminoquinolona esquizonticida eritrocítico rápido y antirreumático',
    description: 'Antipalúdico sintético arquetípico derivado de la 4-aminoquinolina. Durante décadas fue el fármaco de primera línea mundial para todas las formas de paludismo. Hoy en día es el fármaco de elección para el paludismo por Plasmodium vivax, P. ovale, P. malariae y P. knowlesi sensibles, pero la resistencia en P. falciparum es prácticamente global. Posee además propiedades antiinflamatorias e inmunomoduladoras en enfermedades autoinmunes.',
    presentations: [
      { id: 'clo-1', form: 'Comprimidos orales (Fosfato de cloroquina)', concentration: '250 mg (equivalente a 150 mg de cloroquina base)', route: 'Oral', packaging: 'Caja x 30 comprimidos' },
      { id: 'clo-2', form: 'Solución inyectable IM / SC', concentration: '40 mg/mL de base', route: 'Intramuscular profunda', packaging: 'Ampollas de 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Penetra libremente en la forma no ionizada a la vacuola digestiva ácida del trofozoíto intraeritrocitario de Plasmodium. Allí se protona intensamente (atrapamiento iónico), alcanzando concentraciones miles de veces superiores a las del plasma. Se une al hemo libre e inhibe a la enzima hemo-polimerasa, impidiendo la conversión del ferriprotoporfirina IX tóxico en hemozoína insoluble. La acumulación del complejo hemo-cloroquina lisa las membranas fúngicas y fagocíticas del parásito.',
      molecularTarget: 'Hemo libre y prevención de cristalización a hemozoína en la vacuola digestiva',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 89% (rápida y completa absorción). Extraordinario volumen de distribución con acumulación tisular masiva en melanina retiniana, hígado, bazo y miocardio.',
        halfLife: 'Extremadamente prolongada: 1 a 2 meses (acumulación tisular y desorción lenta).',
        metabolism: 'Hepático parcial por CYP2C8 y CYP3A4 a desetilcloroquina (activa)',
        elimination: 'Excreción renal del 50% inalterada'
      }
    },
    therapeuticIndications: [
      'Tratamiento y profilaxis del paludismo por Plasmodium vivax, Plasmodium ovale, Plasmodium malariae y cepas sensibles de P. falciparum',
      'Amebiasis extraintestinal (absceso hepático amebiano como tratamiento de rescate)',
      'Lupus eritematoso discoide y sistémico y artritis reumatoide leve'
    ],
    posology: {
      adultStandard: 'Tratamiento agudo de paludismo oral (dosis expresadas en cloroquina base): Esquema de 3 días (total 1500 mg base): Día 1: 600 mg base (4 comprimidos) iniciales, seguidos de 300 mg base a las 6 horas; Días 2 y 3: 300 mg base cada día en toma única matutina (asociar primaquina para P. vivax/ovale). Profilaxis de paludismo: 300 mg base una vez a la semana el mismo día de cada semana.',
      pediatricDose: 'Niños: Dosis inicial de 10 mg base/kg, seguida de 5 mg base/kg a las 6h, 24h y 48h (dosis total 25 mg base/kg). Dosis tóxica letal muy baja en niños.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 10-50 mL/min: Reducir dosis al 50-75% de la habitual.',
        severe: 'ClCr <10 mL/min o hemodiálisis: Reducir al 50% y monitorizar ECG.'
      },
      hepaticAdjustment: 'Usar con precaución; se acumula intensamente en parénquima hepático.',
      administrationNotes: 'EXTREMA TOXICIDAD PEDIÁTRICA EN SOBREDOSIS: tan solo 1 o 2 comprimidos pueden ser mortales para un niño pequeño por colapso cardiovascular y paro respiratorio inmediato. Administrar siempre con las comidas para mitigar náuseas.'
    },
    safety: {
      blackBoxWarning: 'ÍNDICE TERAPÉUTICO ESTRECHO: LA SOBREDOSIS AGUDA PRODUCE COLAPSO CARDIOVASCULAR MORTAL, ARRITMIAS VENTRICULARES Y PARADA CARDÍACA EN MINUTOS. EL USO CRÓNICO PROVOCA RETINOPATÍA EN "OJO DE BUEY" CON CEGUERA IRREVERSIBLE.',
      contraindications: [
        'Retinopatía preexistente o alteraciones del campo visual macular',
        'Miastenia gravis (empeora el bloqueo neuromuscular)',
        'Hipersensibilidad a 4-aminoquinolinas',
        'Psoriasis activa (desencadena brotes eritrodérmicos severos)'
      ],
      adverseEffects: {
        frequent: ['Prurito cutáneo intolerable e intenso (muy común en poblaciones de ascendencia africana)', 'Náuseas, vómitos y dolor abdominal', 'Cefalea y visión borrosa transitoria'],
        moderate: ['Despigmentación del cabello y fotofobia', 'Hipotensión leve'],
        severe: ['Retinopatía por cloroquina irreversible ("maculopatía en ojo de buey") con escotoma central y ceguera permanente en uso crónico', 'Cardiopatía por depósito y arritmias ventriculares letales (prolongación del QTc)', 'Mioclonías y convulsiones']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia en pautas antipalúdicas habituales.'
    },
    interactions: [
      { interactingDrug: 'Fármacos que prolongan el intervalo QT (Amiodarona, Haloperidol, Azitromicina)', severity: 'Grave', clinicalEffect: 'Prolongación severa del QT con riesgo inminente de torsades de pointes y muerte súbita.', recommendation: 'Evitar el uso combinado; monitorizar electrocardiograma.' },
      { interactingDrug: 'Digoxina', severity: 'Moderada', clinicalEffect: 'Aumento de niveles plasmáticos de digoxina.', recommendation: 'Monitorear niveles séricos de digoxina.' }
    ],
    monitoringParameters: ['Examen oftalmológico (fondo de ojo y campimetría) basal y anual en tratamientos crónicos >6 meses', 'Electrocardiograma (intervalo QTc)', 'Hemograma periódico'],
    storageConditions: 'Conservar por debajo de 30 °C bajo llave fuera del alcance de los niños.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // 4.6 ANTIHELMÍNTICOS
  // ----------------------------------------------------
  {
    id: 'albendazol',
    genericName: "Albendazol",
    commercialNames: ["Eskazole", "Zentel"],
    imageUrl: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1264702_A_1280_AL.jpg",
    imageAlt: "Albendazol - Presentación farmacológica",
    images: ["https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1264702_A_1280_AL.jpg", "https://production-media.fahorro.com/media/catalog/product/7/5/7501070618919_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265", "https://production-media.fahorro.com/media/catalog/product/7/5/7501070618933_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265"],
    atcCode: 'P02CA03',
    anatomicalSystem: '4.6 Antihelmínticos',
    therapeuticClass: 'Antihelmíntico benzimidazol carbamato de amplio espectro nematodicida, cestodicida y larvicida',
    description: 'Antihelmíntico sintético de amplio espectro perteneciente a la familia de los benzimidazoles. Muy eficaz frente a nematodos intestinales y tisulares, cestodos y sus formas larvarias. Es el tratamiento médico de elección para la neurocisticercosis (Taenia solium) y la equinococosis quística (quiste hidatídico).',
    presentations: [
      { id: 'alb-1', form: 'Comprimidos masticables ranurados', concentration: '200 mg y 400 mg', route: 'Oral', packaging: 'Caja x 2, 6 y 10 comprimidos' },
      { id: 'alb-2', form: 'Suspensión oral', concentration: '100 mg / 5 mL y 400 mg / 10 mL', route: 'Oral', packaging: 'Frasco de 10 mL y 20 mL' }
    ],
    mechanismOfAction: {
      summary: 'Se une selectivamente con alta afinidad a la beta-tubulina del citoesqueleto del parásito, inhibiendo su polimerización en microtúbulos funcionales. Esto desorganiza el citoesqueleto celular, paraliza el transporte axonal de vesículas secretoras e inhibe irreversiblemente la captación de glucosa por los enterocitos del helminto. El agotamiento consiguiente de los depósitos de glucógeno y la depleción de ATP inmovilizan y matan al parásito. Posee además acción larvicida y ovicida.',
      molecularTarget: 'Beta-tubulina del parásito helminto y transporte de glucosa',
      pharmacokinetics: {
        bioavailability: 'Oral baja (<5%) en ayunas para parasitosis intestinales; LA INGESTA CON UNA COMIDA RICA EN GRASAS MULTIPLICA LA ABSORCIÓN HASTA 5 A 8 VECES para el tratamiento de infecciones tisulares (quiste hidatídico, neurocisticercosis).',
        halfLife: 'Albendazol sulfóxido (metabolito activo circulante): 8 a 12 horas.',
        metabolism: 'Hepático rápido de primer paso microsomal (CYP3A4 y flavina monooxigenasa) al metabolito activo albendazol sulfóxido',
        elimination: 'Excreción biliar y renal (menos del 1% inalterado)'
      }
    },
    therapeuticIndications: [
      'Nematodiasis intestinales: Ascaris lumbricoides, Enterobius vermicularis (oxiuros), Trichuris trichiura, Ancylostoma duodenale y Necator americanus',
      'Neurocisticercosis parenquimatosa debida a formas larvarias de Taenia solium',
      'Equinococosis quística (enfermedad hidatídica por Echinococcus granulosus) en hígado o pulmón',
      'Larva migrans cutánea y visceral (Toxocariasis)',
      'Estrongiloidiasis (Strongyloides stercoralis) y capilariasis'
    ],
    posology: {
      adultStandard: 'Nematodiasis intestinales habituales (Ascaris, Oxiuros, Uncinarias): 400 mg vía oral en DOSIS ÚNICA (repetir a las 2 semanas en oxiuros para romper el ciclo biológico). Neurocisticercosis: 15 mg/kg/día divididos cada 12 horas (máximo 800 mg/día) TOMADO CON COMIDAS GRASAS durante 8 a 30 días (con corticoides previos para evitar edema cerebral). Quiste hidatídico: 400 mg cada 12 horas con comidas grasas durante ciclos de 28 días seguidos de 14 días de descanso (hasta 3 ciclos).',
      pediatricDose: 'Niños ≥2 años: 400 mg en dosis única. Niños de 1 a 2 años: 200 mg en dosis única. Neurocisticercosis: 15 mg/kg/día con alimentos grasos.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste'
      },
      hepaticAdjustment: 'Vigilar transaminasas; suspender si las enzimas hepáticas se triplican durante tratamientos prolongados.',
      administrationNotes: 'ADMINISTRACIÓN DIFERENCIADA SEGÚN INDICACIÓN: en infecciones intestinales administrar EN AYUNAS (mínima absorción sistémica y máxima permanencia en luz colónica); en infecciones tisulares sistémicas (neurocisticercosis, hidatidosis) ADMINISTRAR OBLIGATORIAMENTE CON UNA COMIDA RICA EN GRASAS para multiplicar su absorción al torrente sanguíneo. CONTRAINDICADO EN EMBARAZO (teratogénico).'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADO EN EL EMBARAZO DEBIDO A TERATOGÉNESIS COMPROBADA Y EFECTO EMBRIOCIDA. EN NEUROCISTICERCOSIS DEBE PREMEDICARSE CON CORTICOIDES SISTÉMICOS PARA PREVENIR HIPERTENSIÓN ENDOCRANEAL Y MUERTE POR REACCIÓN INFLAMATORIA AGUDA.',
      contraindications: [
        'Embarazo confirmado o sospechado (exige test de embarazo previo negativo)',
        'Hipersensibilidad a compuestos benzimidazólicos',
        'Cirrosis descompensada o fallo hepático severo'
      ],
      adverseEffects: {
        frequent: ['Dolor abdominal cólico transitorio y diarrea leve (por expulsión de parásitos)', 'Cefalea y mareos leves'],
        moderate: ['Elevación asintomática de transaminasas hepáticas en tratamientos prolongados (hasta 15%)', 'Alopecia difusa reversible'],
        severe: ['Leucopenia y pancitopenia con agranulocitosis por toxicidad medular en ciclos largos', 'Hipertensión intracraneal masiva y convulsiones en neurocisticercosis si no se asocian corticoides']
      },
      pregnancyCategory: 'X',
      lactationSafety: 'Precaución: Pasa a la leche materna; evitar amamantar durante el tratamiento y 48 horas después.'
    },
    interactions: [
      { interactingDrug: 'Dexametasona y Cimetidina', severity: 'Moderada', clinicalEffect: 'Aumentan las concentraciones plasmáticas de albendazol sulfóxido en un 50% (efecto buscado en neurocisticercosis).', recommendation: 'Monitorear respuesta clínica y transaminasas.' },
      { interactingDrug: 'Antiepilépticos inductores (Fenitoína, Carbamazepina)', severity: 'Moderada', clinicalEffect: 'Disminuyen significativamente los niveles séricos de albendazol sulfóxido.', recommendation: 'Ajustar dosis del antihelmíntico.' }
    ],
    monitoringParameters: ['Test de embarazo previo en mujeres en edad fértil', 'Transaminasas hepáticas cada 2 semanas en ciclos prolongados', 'Hemograma con recuento leucocitario antes y durante ciclos largos'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'mebendazol',
    genericName: "Mebendazol",
    commercialNames: ["Vermox", "Exbenzol"],
    imageUrl: "https://wecarepharma.mx/cdn/shop/files/Imagenes_de_planograma__87b2cab5-9fc0-44d6-b47c-becad124506e__07501109900619.1.jpg?v=1744694839&width=800",
    imageAlt: "Mebendazol - Presentación farmacológica",
    images: ["https://wecarepharma.mx/cdn/shop/files/Imagenes_de_planograma__87b2cab5-9fc0-44d6-b47c-becad124506e__07501109900619.1.jpg?v=1744694839&width=800", "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/162010/130.png?v=638663448754270000"],
    atcCode: 'P02CA01',
    anatomicalSystem: '4.6 Antihelmínticos',
    therapeuticClass: 'Antihelmíntico benzimidazol de acción predominantemente intraluminal gastrointestinal',
    description: 'Benzimidazol antihelmíntico sintético de absorción sistémica muy escasa (<2-10%). Altamente eficaz y seguro para la erradicación de infestaciones intestinales por nematodos simples o mixtas (ascaridiasis, enterobiasis, tricuriasis y uncinariasis).',
    presentations: [
      { id: 'meb-1', form: 'Comprimidos orales ranurados masticables', concentration: '100 mg y 500 mg', route: 'Oral', packaging: 'Caja x 6 comprimidos de 100 mg y envase de 500 mg' },
      { id: 'meb-2', form: 'Suspensión oral', concentration: '100 mg / 5 mL (20 mg/mL)', route: 'Oral', packaging: 'Frasco de 30 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la formación de microtúbulos citoplasmáticos uniéndose irreversiblemente a la tubulina de las células intestinales de los helmintos. Esto bloquea la captación de glucosa y otros nutrientes del lumen intestinal del hospedador, agotando el ATP celular e induciendo cambios degenerativos autolíticos en el retículo endoplásmico del parásito con parálisis y muerte por inanición en 48 a 72 horas.',
      molecularTarget: 'Tubulina de los helmintos y transporte de glucosa intestinal',
      pharmacokinetics: {
        bioavailability: 'Oral sumamente baja (<2-10% por baja solubilidad y extenso metabolismo presistémico hepático de primer paso).',
        halfLife: 'Terminal de 3 a 6 horas.',
        metabolism: 'Hepático casi total a derivados descarboxilados e hidroxilados inactivos',
        elimination: 'Excreción fecal casi exclusiva (>95% inalterado no absorbido), solo 2% renal'
      }
    },
    therapeuticIndications: [
      'Enterobiasis / Oxiuriasis (Enterobius vermicularis): infestación por lombrices infantiles',
      'Ascaridiasis (Ascaris lumbricoides) y Tricuriasis (Trichuris trichiura / tricocéfalo)',
      'Anquilostomiasis y Necatoriasis (uncinariasis)',
      'Infestaciones mixtas por múltiples nematodos gastrointestinales'
    ],
    posology: {
      adultStandard: 'Oxiuriasis: 100 mg (1 comprimido o 5 mL) vía oral en DOSIS ÚNICA; es IMPRESCINDIBLE REPETIR LA MISMA DOSIS A LAS 2 SEMANAS para eliminar las larvas nacidas de los huevos supervivientes y tratar a todo el núcleo familiar conviviente. Ascaris, Trichuris o Uncinarias: 100 mg cada 12 horas (mañana y noche) durante 3 días consecutivos (o 500 mg en dosis única).',
      pediatricDose: 'Niños ≥2 años: misma dosificación que el adulto (100 mg dosis única en oxiuros y repetir a las 2 semanas; 100 mg cada 12h por 3 días en ascaris). CONTRAINDICADO EN MENORES DE 1-2 AÑOS por riesgo de convulsiones.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste (no se absorbe sistémicamente).'
      },
      hepaticAdjustment: 'No requiere ajuste habitual salvo sobredosis en hepatopatía grave.',
      administrationNotes: 'Los comprimidos pueden masticarse, tragarse enteros o triturarse y mezclarse con la comida. No requiere laxantes ni ayuno previo. EN OXIURIASIS ES VITAL TRATAR SIMULTÁNEAMENTE A TODA LA FAMILIA Y LAVAR SÁBANAS Y ROPA INTERIOR CON AGUA CALIENTE para erradicar los huevos en el entorno doméstico.'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADO EN EL EMBARAZO POR TERATOGÉNESIS DEMOSTRADA EN MODELOS ANIMALES. CONTRAINDICADO EL USO SIMULTÁNEO CON METRONIDAZOL POR RIESGO DE SÍNDROME DE STEVENS-JOHNSON GRAVE.',
      contraindications: [
        'Embarazo confirmado o sospechado',
        'Coadministración simultánea con Metronidazol (asociada a Síndrome de Stevens-Johnson / NET)',
        'Lactantes y niños menores de 1 año (asociado a crisis convulsivas)',
        'Hipersensibilidad a benzimidazoles'
      ],
      adverseEffects: {
        frequent: ['Dolor cólico abdominal transitorio y diarrea durante la expulsión masiva de parásitos'],
        moderate: ['Náuseas y flatulencia', 'Erupción cutánea alérgica leve'],
        severe: ['Síndrome de Stevens-Johnson / Necrólisis Epidérmica Tóxica (asociado especialmente a metronidazol)', 'Neutropenia y hepatitis tóxica (solo con dosis altas prolongadas en hidatidosis)']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro con precaución: Absorción sistémica insignificante, compatible en dosis única.'
    },
    interactions: [
      { interactingDrug: 'Metronidazol', severity: 'Grave', clinicalEffect: 'Aparición fulminante de Síndrome de Stevens-Johnson (SSJ) y necrólisis epidérmica tóxica potencialmente mortales.', recommendation: 'CONTRAINDICADA absolutamente la asociación de mebendazol con metronidazol.' },
      { interactingDrug: 'Cimetidina', severity: 'Moderada', clinicalEffect: 'Inhibe el metabolismo hepático elevando los niveles séricos de mebendazol.', recommendation: 'Vigilar efectos adversos.' }
    ],
    monitoringParameters: ['Repetición estricta de la dosis a los 14 días en oxiuros', 'Examen parasitológico de heces a las 3 semanas si persisten síntomas'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'praziquantel',
    genericName: "Praziquantel",
    commercialNames: ["Cisticid"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDc2dSeO6vjt_Ch6hWMP0Pa_6MaRY5y942HfZG0cz3kZahrxeJq4X2YRo&s=10",
    imageAlt: "Praziquantel - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDc2dSeO6vjt_Ch6hWMP0Pa_6MaRY5y942HfZG0cz3kZahrxeJq4X2YRo&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o8AbX7utppC8TS8qtbrfCk0Mn69UyhOjLMhIvbN_RH1I-JVQgP1Y9MM&s=10"],
    atcCode: 'P02BA01',
    anatomicalSystem: '4.6 Antihelmínticos',
    therapeuticClass: 'Antihelmíntico sintético pirazinoisoquinolínico cestodicida y esquistosomicida de elección',
    description: 'Derivado pirazinoisoquinolínico sintético. Es el antihelmíntico de primera línea indiscutible de referencia mundial recomendado por la OMS para el tratamiento de todas las formas de esquistosomiasis (bilharziosis) e infestaciones por trematodos y cestodos (tenias adultas intestinales y cisticercosis).',
    presentations: [
      { id: 'prz-1', form: 'Comprimidos orales ranurados en tres cuartas partes (de 150 mg cada segmento)', concentration: '600 mg', route: 'Oral', packaging: 'Frasco o caja x 6 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Aumenta velozmente la permeabilidad de las membranas de las células del tegumento del parásito a los iones divalentes, en particular al calcio (Ca2+). La entrada masiva intracelular de calcio induce una contracción tetánica muscular inmediata e irreversible y una parálisis espástica de las ventosas y musculatura del helminto. Simultáneamente provoca vacuolización y desintegración del tegumento parasitario, exponiendo los antígenos internos del parásito al sistema inmunitario del huésped, lo que induce su destrucción por fagocitos y leucocitos.',
      molecularTarget: 'Canales de calcio regulados por voltaje dependientes de subunidades beta del parásito y tegumento',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 80% (rápida absorción; los alimentos ricos en carbohidratos duplican el AUC). Cruza la barrera hematoencefálica.',
        halfLife: 'Praziquantel original: 1 a 1.5 horas; metabolitos hidroxilados: 4 a 6 horas.',
        metabolism: 'Hepático extenso y rápido de primer paso microsomal (CYP3A4) a metabolitos hidroxilados inactivos',
        elimination: 'Excreción renal masiva (70-80% como metabolitos en 24 horas)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de todas las especies de esquistosomiasis: Schistosoma mansoni, S. haematobium, S. japonicum, S. mekongi e intercalatum',
      'Infestaciones intestinales por cestodos adultos: Taenia saginata (tenia del ganado vacuno), Taenia solium (tenia del cerdo), Diphyllobothrium latum (tenia del pescado) e Hymenolepis nana',
      'Distomatosis y fascioliasis hepática por Clonorchis sinensis, Opisthorchis viverrini y Paragonimus westermani',
      'Neurocisticercosis (en combinación con albendazol y corticoides)'
    ],
    posology: {
      adultStandard: 'Esquistosomiasis: 40 a 60 mg/kg vía oral divididos en 2 o 3 tomas en un solo día con intervalos de 4 a 6 horas ingeridos con líquidos durante las comidas. Teniasis intestinal (Taenia saginata, T. solium, D. latum): 10 a 25 mg/kg vía oral en DOSIS ÚNICA. Hymenolepis nana: 25 mg/kg en dosis única. Clonorquiasis / Opistorquiasis: 25 mg/kg cada 8 horas durante 2 a 3 días.',
      pediatricDose: 'Niños ≥1 año: Esquistosomiasis: 40 mg/kg en dosis única o dividida en 2 tomas el mismo día. Teniasis: 10 a 20 mg/kg en dosis única.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste (los metabolitos renales son inactivos).'
      },
      hepaticAdjustment: 'El aclaramiento hepático disminuye marcadamente en cirrosis con hipertensión portal; dosificar con precaución.',
      administrationNotes: 'TRAGAR LOS COMPRIMIDOS ENTEROS CON AGUA DURANTE LAS COMIDAS SIN MASTICAR: tienen un sabor intensamente amargo que puede inducir náuseas o vómitos inmediatos. CONTRAINDICADO EN CISTICERCOSIS OCULAR (la destrucción del parásito dentro del globo ocular causa desprendimiento retiniano y ceguera permanente).'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADO EN CISTICERCOSIS OCULAR POR RIESGO DE REACCIÓN INFLAMATORIA DESTRUCTIVA INTRAOCULAR CON PÉRDIDA VISUAL IRREVERSIBLE. PUEDE INDUCIR CRISIS CONVULSIVAS EN NEUROCISTICERCOSIS LATENTE NO DIAGNOSTICADA.',
      contraindications: [
        'Cisticercosis intraocular (ocular) confirmada',
        'Uso simultáneo con inductores enzimáticos potentes de CYP3A4 (Rifampicina)',
        'Hipersensibilidad al praziquantel'
      ],
      adverseEffects: {
        frequent: ['Malestar abdominal difuso, náuseas y vómitos', 'Cefalea, mareo, somnolencia y astenia'],
        moderate: ['Fiebre, urticaria y prurito (reacción inmunitaria a la lisis de esquistosomas)', 'Mialgias'],
        severe: ['Crisis convulsivas e hipertensión endocraneal por muerte de cisticercos cerebrales', 'Reacciones meníngeas']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro con precaución: Se excreta en leche materna; no amamantar durante el día de tratamiento y las 72 horas posteriores.'
    },
    interactions: [
      { interactingDrug: 'Rifampicina', severity: 'Grave', clinicalEffect: 'Inducción masiva de CYP3A4 que reduce las concentraciones plasmáticas de praziquantel a niveles indetectables con fracaso terapéutico completo.', recommendation: 'CONTRAINDICADA la asociación; suspender rifampicina al menos 4 semanas antes.' },
      { interactingDrug: 'Carbamazepina y Fenitoína', severity: 'Moderada', clinicalEffect: 'Reducción marcada de la biodisponibilidad de praziquantel.', recommendation: 'Considerar fármaco alternativo o ajustar dosis.' }
    ],
    monitoringParameters: ['Examen oftalmológico previo para descartar cisticercos en cámara anterior o vítrea', 'Evaluación neurológica ante cefalea o vómitos'],
    storageConditions: 'Conservar por debajo de 30 °C en envase protegido de la humedad.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // 4.7 ANTIFÍMICOS (ANTITUBERCULOSOS DE PRIMERA LÍNEA)
  // ----------------------------------------------------
  {
    id: 'isoniacida',
    genericName: "Isoniacida",
    commercialNames: ["Valifol", "Dotbal-S"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeLKbINA2JrexlKbF0X78lF3ZhiwzlRmPMNwvmnf1fIUSSyuUpLl_eXZa&s=10",
    imageAlt: "Isoniacida - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeLKbINA2JrexlKbF0X78lF3ZhiwzlRmPMNwvmnf1fIUSSyuUpLl_eXZa&s=10", "https://production-media.fahorro.com/media/catalog/product/7/5/7501101630040.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265"],
    atcCode: 'J04AC01',
    anatomicalSystem: '4.7 Antifímicos',
    therapeuticClass: 'Antituberculoso bactericida de primera línea inhibidor de la síntesis de ácidos micólicos',
    description: 'Pilar fundamental e imprescindible del tratamiento de la tuberculosis activa y de la infección tuberculosa latente. Presenta una potencia bactericida temprana máxima frente a Mycobacterium tuberculosis en fase de replicación activa dentro de cavidades tuberculosas.',
    presentations: [
      { id: 'inh-1', form: 'Comprimidos orales ranurados', concentration: '100 mg y 300 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos' },
      { id: 'inh-2', form: 'Solución inyectable IM / IV', concentration: '100 mg/mL (ampolla de 5 mL = 500 mg)', route: 'Intramuscular / Intravenosa', packaging: 'Ampollas de 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco que penetra en el bacilo tuberculoso y es activado por la enzima catalasa-peroxidasa micobacteriana (KatG) en un radical isonicotinoilo reactivo. Este radical se une covalentemente al NAD+ formando un aducto inhibitorio (INH-NAD) que bloquea selectivamente a la enzima enoil-ACP reductasa (InhA), enzima clave en la vía de síntesis de ácidos grasos tipo II (FAS-II). Esto paraliza la síntesis de ácidos micólicos, componentes lipídicos estructurales indispensables de la pared celular micobacteriana, provocando lisis bacilar.',
      molecularTarget: 'Catalasa-peroxidasa KatG micobacteriana y enoil-ACP reductasa (InhA)',
      pharmacokinetics: {
        bioavailability: 'Oral excelente (>90% en ayunas; la ingesta con comida reduce la absorción en un 40%). Penetra en todos los tejidos y cavidades caseosas.',
        halfLife: 'Genéticamente determinada por el polimorfismo de la N-acetiltransferasa 2 (NAT2): Acetiladores rápidos: 1 a 1.5 horas; Acetiladores lentos: 3 a 5 horas (mayor toxicidad neurológica y hepática).',
        metabolism: 'Hepático dependiente de NAT2 a acetilisoniacida y ácido isonicotínico',
        elimination: 'Excreción renal del 75-90% en 24 horas como metabolitos'
      }
    },
    therapeuticIndications: [
      'Tratamiento de la tuberculosis activa pulmonar y extrapulmonar (meníngea, ósea, miliar) en politerapia combinada',
      'Tratamiento de la infección tuberculosa latente (ITL) como monoterapia durante 6 a 9 meses o combinada con rifampicina durante 3 meses'
    ],
    posology: {
      adultStandard: 'Tratamiento diario continuo: 5 mg/kg/día vía oral en toma única matutina en ayunas (dosis habitual fija de 300 mg una vez al día). Pauta intermitente (3 veces/semana): 10 mg/kg (habitualmente 600-900 mg). Tratamiento de infección tuberculosa latente: 300 mg una vez al día durante 6 a 9 meses. COADMINISTRAR SIEMPRE CON PIRIDOXINA (VITAMINA B6) A 25-50 MG/DÍA en pacientes con riesgo de neuropatía.',
      pediatricDose: 'Niños: 10 a 15 mg/kg/día en toma única diaria (máximo 300 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste habitual',
        severe: 'ClCr <10 mL/min o hemodiálisis: reducir al 50-70% (200 mg/día en acetiladores lentos) y dosificar post-diálisis.'
      },
      hepaticAdjustment: 'Suspender inmediatamente si las transaminasas (ALT/AST) superan 3 veces el límite normal con síntomas digestivos o 5 veces el límite normal en ausencia de síntomas.',
      administrationNotes: 'TOMAR EN AYUNAS (1 HORA ANTES O 2 HORAS DESPUÉS DE LAS COMIDAS). PRESCRIBIR OBLIGATORIAMENTE PIRIDOXINA (VITAMINA B6) A 25-50 MG/DÍA en diabéticos, alcohólicos, desnutridos, embarazadas e insuficiencia renal para prevenir la neuropatía periférica por depleción de piridoxal-fosfato.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HEPATOTOXICIDAD GRAVE Y HEPATITIS FULMINANTE MORTAL DEPENDIENTE DE LA EDAD (MAYOR FRECUENCIA EN >35-50 AÑOS Y ALCOHÓLICOS). VIGILAR RIGUROSAMENTE SÍNTOMAS PRODRÓMICOS (ANOREXIA, NÁUSEAS, ICTERICIA).',
      contraindications: [
        'Hepatopatía activa aguda o antecedentes de hepatitis inducida previamente por isoniacida',
        'Reacciones adversas graves previas (fiebre medicamentosa, exantema exfoliativo)',
        'Hipersensibilidad a la isoniacida'
      ],
      adverseEffects: {
        frequent: ['Elevación asintomática de transaminasas (en hasta el 10-20% de pacientes al inicio)', 'Parestesias y entumecimiento distal en pies si no se coadministra piridoxina'],
        moderate: ['Neuropatía periférica sensitivo-motora por déficit de vitamina B6', 'Cefalea, insomnio y mareo'],
        severe: ['Hepatitis tóxica severa con ictericia y necrosis hepática fulminante fatal', 'Lupus eritematoso inducido por fármacos con anticuerpos antihistonas positivos', 'Convulsiones y psicosis tóxica']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia; administrar suplemento de piridoxina a la madre y al recién nacido.'
    },
    interactions: [
      { interactingDrug: 'Alcohol etílico', severity: 'Grave', clinicalEffect: 'Aumento sinérgico marcado del riesgo de hepatitis tóxica mortal.', recommendation: 'Prohibir terminantemente el consumo de alcohol.' },
      { interactingDrug: 'Fenitoína y Carbamazepina', severity: 'Grave', clinicalEffect: 'Inhibe potentemente su metabolismo microsomal duplicando niveles séricos con ataxia, nistagmo y coma.', recommendation: 'Monitorear niveles séricos de antiepilépticos y reducir su dosis.' },
      { interactingDrug: 'Paracetamol a dosis altas', severity: 'Moderada', clinicalEffect: 'Mayor riesgo de hepatotoxicidad por inducción de metabolitos reactivos.', recommendation: 'Limitar uso de paracetamol.' }
    ],
    monitoringParameters: ['Transaminasas hepáticas (ALT/AST, Bilirrubina) basal y mensual en pacientes de riesgo (>35 años, hepatópatas)', 'Aparición de parestesias distales en miembros inferiores', 'Adherencia terapéutica'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'etambutol',
    genericName: "Etambutol",
    commercialNames: ["DoTbal"],
    imageUrl: "https://sanorim.mx/cdn/shop/files/DOTBAL_2.jpg?v=1777511510",
    imageAlt: "Etambutol - Presentación farmacológica",
    images: ["https://sanorim.mx/cdn/shop/files/DOTBAL_2.jpg?v=1777511510"],
    atcCode: 'J04AK02',
    anatomicalSystem: '4.7 Antifímicos',
    therapeuticClass: 'Antituberculoso sintético bacteriostático inhibidor de la arabinosiltransferasa',
    description: 'Antifímico sintético oral de primera línea. Su función primaria en el esquema tetraconjugado inicial es proteger a la isoniacida y rifampicina frente a la emergencia de mutantes resistentes naturales. Presenta una toxicidad diana ocular muy característica sobre el nervio óptico (neuritis retrobulbar).',
    presentations: [
      { id: 'etm-1', form: 'Comprimidos orales ranurados', concentration: '400 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe de forma específica a la enzima arabinosiltransferasa III bacteriana (codificada por el gen embB), implicada en la biosíntesis del arabinogalactano y del lipoarabinomanano (LAM). La interrupción de la polimerización del arabinano impide la unión covalentemente acoplada del arabinogalactano con el peptidoglicano y los ácidos micólicos, desestabilizando críticamente la pared celular e incrementando la permeabilidad a otros antifímicos.',
      molecularTarget: 'Arabinosiltransferasa III (gen embB) de la pared de Mycobacterium tuberculosis',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 75-80% (buena absorción, poco afectada por alimentos).',
        halfLife: 'Aproximadamente 3 a 4 horas en función renal normal (se prolonga a 24-36 horas en anuria).',
        metabolism: 'Hepático menor (15% oxidado a derivados de ácido dicarboxílico)',
        elimination: 'Excreción renal masiva (>50-70% inalterada) por filtración y secreción tubular activa'
      }
    },
    therapeuticIndications: [
      'Fase inicial intensiva del tratamiento de la tuberculosis activa pulmonar y extrapulmonar combinada con isoniacida, rifampicina y pirazinamida',
      'Tratamiento de infecciones diseminadas por Mycobacterium avium complex (MAC) en pacientes inmunodeprimidos (asociada a claritromicina o azitromicina)'
    ],
    posology: {
      adultStandard: 'Dosis estándar diaria: 15 a 20 mg/kg/día vía oral en toma única matutina (habitualmente 1200 mg/día para 50-70 kg). Pauta intermitente (3 veces/semana): 30 mg/kg (máximo 2000-2400 mg). En tuberculosis suele mantenerse durante los primeros 2 meses de la fase de inducción y suspenderse una vez confirmada la sensibilidad a INH y RIF.',
      pediatricDose: 'Niños: 15 a 25 mg/kg/día en toma única. EXTREMA PRECAUCIÓN EN MENORES DE 5-6 AÑOS debido a la imposibilidad de evaluar la agudeza visual y la visión de los colores.',
      renalAdjustment: {
        normal: 'ClCr >50 mL/min: Dosis estándar cada 24 horas.',
        moderate: 'ClCr 30-50 mL/min: 15 mg/kg cada 24 a 36 horas.',
        severe: 'ClCr <30 mL/min o hemodiálisis: 15 a 25 mg/kg administrados únicamente 3 VECES POR SEMANA (cada 48h) tras diálisis (ajuste obligatorio para evitar ceguera irreversible).'
      },
      hepaticAdjustment: 'No suele requerir ajuste específico.',
      administrationNotes: 'EVALUAR AGUDEZA VISUAL Y DISCRIMINACIÓN DE COLORES (VERDE Y ROJO) ANTES DE INICIAR Y MENSUALMENTE: el etambutol induce neuritis óptica retrobulbar con escotoma central y ceguera para los colores rojo y verde. Instruir al paciente para que suspenda el fármaco de inmediato ante cualquier cambio visual.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE NEURITIS ÓPTICA RETROBULBAR DOSIS-DEPENDIENTE CON PÉRDIDA DE AGUDEZA VISUAL, ESCOTIOMA CENTRAL Y CEGUERA DE LOS COLORES (DISCROMATOPSIA ROJO-VERDE) QUE PUEDE SER IRREVERSIBLE.',
      contraindications: [
        'Neuritis óptica o antecedentes de neuropatía del nervio óptico',
        'Pacientes incapaces de reportar alteraciones visuales (niños menores de 5 años o pacientes comatosos/inconscientes)',
        'Hipersensibilidad al etambutol'
      ],
      adverseEffects: {
        frequent: ['Hiperuricemia asintomática por inhibición competitiva de la excreción tubular de ácido úrico', 'Náuseas y malestar digestivo leve'],
        moderate: ['Artralgias por elevación de ácido úrico', 'Erupción cutánea y prurito'],
        severe: ['Neuritis óptica retrobulbar con disminución de la agudeza visual, escotoma central y pérdida de la visión de colores rojo-verde', 'Neuropatía periférica', 'Atrofia óptica irreversible si no se suspende tempranamente']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia materna; pasa a leche en concentraciones muy bajas.'
    },
    interactions: [
      { interactingDrug: 'Antiácidos que contienen Hidróxido de Aluminio', severity: 'Moderada', clinicalEffect: 'Disminuyen la absorción oral de etambutol en un 30%.', recommendation: 'Separar las tomas al menos 2 horas.' }
    ],
    monitoringParameters: ['Agudeza visual (test de Snellen) y prueba de discriminación cromática (láminas de Ishihara para rojo-verde) basal y mensual', 'Creatinina sérica y aclaramiento renal', 'Ácido úrico en sangre'],
    storageConditions: 'Conservar por debajo de 25 °C en envase protegido de la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'rifampicina',
    genericName: "Rifampicina",
    commercialNames: ["DoTBal"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501061017004.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265&format=jpeg",
    imageAlt: "Rifampicina - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501061017004.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265&format=jpeg", "https://sanorim.mx/cdn/shop/files/DOTBAL_2.jpg?v=1777511510"],
    atcCode: 'J04AB02',
    anatomicalSystem: '4.7 Antifímicos',
    therapeuticClass: 'Antituberculoso y bactericida esteroideo inhibidor de la ARN polimerasa bacteriana',
    description: 'Antibiótico semisintético derivado de la rifamicina B producida por Amycolatopsis rifamycinica. Posee una extraordinaria potencia bactericida esterilizante capaz de erradicar bacilos tuberculosos intracelulares latentes y de crecimiento lento intermitente en las profundidades del caseum, reduciendo la duración del tratamiento antituberculoso a 6 meses. Fármaco inductor por excelencia del citocromo hepático CYP450.',
    presentations: [
      { id: 'rif-1', form: 'Cápsulas orales', concentration: '300 mg y 600 mg', route: 'Oral', packaging: 'Caja x 24 y 30 cápsulas' },
      { id: 'rif-2', form: 'Jarabe suspensión oral', concentration: '100 mg / 5 mL (20 mg/mL)', route: 'Oral pediátrica', packaging: 'Frasco x 120 mL' },
      { id: 'rif-3', form: 'Polvo liofilizado para infusión IV', concentration: '600 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 600 mg con diluyente' }
    ],
    mechanismOfAction: {
      summary: 'Se une de forma muy estable y específica a la subunidad beta de la enzima ARN polimerasa dependiente de ADN bacteriana (codificada por el gen rpoB). Bloquea estéricamente el avance del canal por donde transcurre la cadena naciente de ARN sintetizada, inhibiendo la iniciación y elongación de la transcripción bacteriana. No inhibe a las ARN polimerasas de las células de mamíferos.',
      molecularTarget: 'Subunidad beta de la ARN polimerasa dependiente de ADN bacteriana (gen rpoB)',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 90-95% en ayunas (los alimentos retrasan y reducen el pico sérico en un 30%). Gran penetración tisular y fagocitaria.',
        halfLife: 'Inicial 3 a 5 horas; tras 1-2 semanas de uso continuo se acorta a 2 a 3 horas debido a una potente autoinducción de su propio metabolismo microsomal.',
        metabolism: 'Hepático masivo por desacetilación a 25-O-desacetilrifampicina activa y potente inductor del sistema CYP3A4, CYP2C9, CYP2C19, CYP1A2 y glicoproteína P',
        elimination: 'Excreción biliar y fecal mayoritaria (60-65%), eliminación renal 30% como metabolito activo'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea de la tuberculosis en todas sus formas clínicas (componente indispensable de la fase de inducción y consolidación)',
      'Profilaxis de contactos cercanos de casos de enfermedad meningocócica invasiva (Neisseria meningitidis)',
      'Profilaxis de portadores de Haemophilus influenzae tipo b',
      'Tratamiento de la lepra (Mycobacterium leprae) en el esquema multidroga de la OMS',
      'Infecciones graves estafilocócicas con biopelículas (prótesis articulares, endocarditis valvular protésica) asociada a vancomicina'
    ],
    posology: {
      adultStandard: 'Tuberculosis activa: 10 mg/kg/día vía oral en toma única matutina en ayunas (dosis fija habitual: 600 mg/día para peso ≥50 kg; 450 mg/día para <50 kg). Profilaxis meningococo: 600 mg cada 12 horas durante 2 días (total 4 dosis). Infecciones protésicas por SASM/SARM: 300 a 450 mg cada 12 horas asociada a otro antibiótico activo.',
      pediatricDose: 'Tuberculosis: 10 a 20 mg/kg/día en toma única en ayunas (máximo 600 mg/día). Profilaxis meningocócica: 10 mg/kg cada 12 horas por 2 días.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'ClCr <10 mL/min o hemodiálisis: no requiere ajuste habitual (la vía biliar compensa la eliminación).'
      },
      hepaticAdjustment: 'Usar con extrema precaución en cirrosis; no superar 8 mg/kg/día y monitorizar bilirrubina y transaminasas semanalmente.',
      administrationNotes: 'ADMINISTRAR ESTRICTAMENTE CON EL ESTÓMAGO VACÍO (AL MENOS 1 HORA ANTES O 2 HORAS DESPUÉS DE COMER): la presencia de alimentos reduce drásticamente la concentración máxima en sangre. ADVERTIR AL PACIENTE QUE TIÑE TODAS LAS SECRECIONES CORPORALES (ORINA, SUDOR, SALIVA, LÁGRIMAS Y HECES) DE UN COLOR ROJO-NARANJA BRILLANTE INTENSO Y QUE TIÑE DE FORMA PERMANENTE LAS LENTES DE CONTACTO BLANDAS.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HEPATOTOXICIDAD GRAVE Y HEPATITIS COLESTÁSICA ICTÉRICA, ESPECIALMENTE EN COMBINACIÓN CON ISONIACIDA. POTENTÍSIMO INDUCTOR ENZIMÁTICO DEL CITOCROMO P450: REDUCE DRÁSTICAMENTE LOS NIVELES PLASMÁTICOS DE CIENTOS DE MEDICAMENTOS CRÍTICOS.',
      contraindications: [
        'Insuficiencia hepática grave o ictericia activa',
        'Coadministración con inhibidores de la proteasa del VIH (disminuye sus niveles a cero)',
        'Hipersensibilidad a rifamicinas'
      ],
      adverseEffects: {
        frequent: ['Coloración naranja-rojiza inocua de orina, saliva, lágrimas y sudor', 'Náuseas, pirosis y dolor epigástrico leve'],
        moderate: ['Elevación transitoria de bilirrubina y fosfatasa alcalina (ictericia colestásica)', 'Síndrome pseudogripal inmunológico (fiebre, escalofríos, mialgias) en pautas intermitentes'],
        severe: ['Hepatitis tóxica colestásica y citolítica aguda potencialmente mortal', 'Púrpura trombocitopénica inmunitaria severa con hemorragias', 'Insuficiencia renal aguda por nefritis intersticial']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia materna; tiñe la leche materna de tono naranja.'
    },
    interactions: [
      { interactingDrug: 'Anticonceptivos orales hormonales', severity: 'Grave', clinicalEffect: 'Acelera masivamente el aclaramiento de estrógenos y progestágenos provocando fallo anticonceptivo absoluto y embarazo no deseado.', recommendation: 'Utilizar métodos anticonceptivos no hormonales de barrera (preservativo) obligatoriamente.' },
      { interactingDrug: 'Anticoagulantes orales (Warfarina / DOACs)', severity: 'Grave', clinicalEffect: 'Inducción de CYP2C9 y glicoproteína P que anula el efecto anticoagulante con trombosis masiva.', recommendation: 'Aumentar la dosis de warfarina al doble o triple bajo INR diario.' },
      { interactingDrug: 'Inmunosupresores (Ciclosporina, Tacrolimus)', severity: 'Grave', clinicalEffect: 'Descenso del 70-80% de los niveles séricos del inmunosupresor provocando rechazo agudo del injerto.', recommendation: 'Monitorear niveles sanguíneos diarios y triplicar dosis según controles.' }
    ],
    monitoringParameters: ['Transaminasas hepáticas, fosfatasa alcalina y bilirrubina basal y mensual', 'Revisión exhaustiva de interacciones con TODA la medicación crónica del paciente', 'Hemograma con recuento plaquetario'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco y protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'pirazinamida',
    genericName: "Pirazinamida",
    commercialNames: ["DoTBal"],
    imageUrl: "https://ik.imagekit.io/buscamed/tr:w-1200,ar-1-1,cm-pad_resize,bg-ffffff/2790929752720228876.webp",
    imageAlt: "Pirazinamida - Presentación farmacológica",
    images: ["https://ik.imagekit.io/buscamed/tr:w-1200,ar-1-1,cm-pad_resize,bg-ffffff/2790929752720228876.webp"],
    atcCode: 'J04AK01',
    anatomicalSystem: '4.7 Antifímicos',
    therapeuticClass: 'Antituberculoso bactericida esterilizante en medio ácido intracelular',
    description: 'Análogo sintético de la nicotinamida. Es el agente esterilizante más eficaz del régimen antituberculoso de primera línea. Su actividad bactericida es máxima en el ambiente ácido (pH <5.5) característico del interior de los macrófagos y de los focos de necrosis caseosa aguda, eliminando la población bacilar persistente y permitiendo acortar la duración global del tratamiento de 9 a 6 meses.',
    presentations: [
      { id: 'pza-1', form: 'Comprimidos orales ranurados', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos' }
    ],
    mechanismOfAction: {
      summary: 'Es un profármaco que difunde pasivamente al interior de Mycobacterium tuberculosis, donde es convertido por la enzima micobacteriana nicotinamidasa/pirazinamidasa (codificada por el gen pncA) en su metabolito activo, el ácido pirazinoico (POA). En el medio extracelular ácido el POA se protona a HPOA no ionizado, reingresa al bacilo y se acumula masivamente por incapacidad de bombeo eflujo, colapsando el potencial de membrana transitoria protónica celular (fuerza motriz protónica), desestabilizando el transporte de membrana y desarticulando la síntesis de ácidos grasos.',
      molecularTarget: 'Pirazinamidasa (gen pncA), fuerza motriz protónica y síntesis de FAS-I micobacteriana',
      pharmacokinetics: {
        bioavailability: 'Oral superior al 90% (excelente absorción no afectada por comida). Excelente difusión tisular y en LCR (alcanza concentraciones equivalentes a las plasmáticas).',
        halfLife: 'Aproximadamente 9 a 10 horas (se prolonga a 20-25 horas en insuficiencia renal avanzada).',
        metabolism: 'Hepático extenso mediado por xantina oxidasa microsomal a ácido 5-hidroxi-pirazinoico',
        elimination: 'Excreción predominantemente renal (70% metabolitos y 3-5% inalterada) por filtración glomerular'
      }
    },
    therapeuticIndications: [
      'Tratamiento de la tuberculosis activa pulmonar y extrapulmonar durante la fase inicial intensiva de inducción (primeros 2 meses) en combinación con isoniacida, rifampicina y etambutol',
      'Meningitis tuberculosa (por su extraordinaria penetración en LCR y tejido cerebral)'
    ],
    posology: {
      adultStandard: 'Dosis diaria continua en fase inicial: 20 a 25 mg/kg/día vía oral en toma única matutina (habitualmente: peso 40-55 kg: 1000 a 1500 mg/día; 56-75 kg: 1500 a 2000 mg/día; >75 kg: 2000 a 2500 mg/día). Pauta intermitente (3 veces/semana): 30 a 35 mg/kg (máximo 2.5 a 3 g). Duración habitual: 2 meses iniciales.',
      pediatricDose: 'Niños: 30 a 40 mg/kg/día en toma única matutina (máximo 1.5 a 2 g/día).',
      renalAdjustment: {
        normal: 'ClCr >50 mL/min: Dosis completa diaria.',
        moderate: 'ClCr 30-50 mL/min: Usar con precaución o espaciar.',
        severe: 'ClCr <30 mL/min o hemodiálisis: 25 a 35 mg/kg administrados únicamente 3 VECES POR SEMANA (cada 48h) tras diálisis (ajuste obligatorio para evitar acumulación tóxica masiva de ácido pirazinoico).'
      },
      hepaticAdjustment: 'CONTRAINDICADA en hepatopatía grave preexistente; es el antifímico de primera línea con mayor potencial hepatotóxico intrínseco.',
      administrationNotes: 'ES EL ANTITUBERCULOSO MÁS HEPATOTÓXICO: monitorizar transaminasas estrechamente. Induce hiperuricemia en prácticamente el 100% de los pacientes (la pirazinamida bloquea la secreción tubular de urato), lo que suele cursar con artralgias pero no requiere suspender el fármaco salvo crisis de gota tofácea aguda.'
    },
    safety: {
      blackBoxWarning: 'MÁXIMO POTENCIAL HEPATOTÓXICO ENTRE LOS ANTITUBERCULOSOS: RIESGO DE HEPATITIS SEVERA Y NECROSIS HEPÁTICA FULMINANTE MORTAL. INDUCE HIPERURICEMIA Y CRISIS DE GOTA AGUDA.',
      contraindications: [
        'Insuficiencia hepática severa o cirrosis descompensada',
        'Gota aguda activa grave resistente',
        'Hipersensibilidad a la pirazinamida'
      ],
      adverseEffects: {
        frequent: ['Hiperuricemia casi universal (bloqueo de excreción renal de ácido úrico)', 'Artralgias de hombros, rodillas o dedos sin sinovitis destructiva', 'Náuseas y anorexia matutina'],
        moderate: ['Elevación transitoria moderada de transaminasas', 'Fotosensibilidad cutánea y rubor facial'],
        severe: ['Hepatitis tóxica citolítica aguda grave con fallo hepático fulminante mortal', 'Crisis de artritis gotosa aguda poliarticular severa', 'Sideroblastosis o trombocitopenia']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro: Compatible con la lactancia materna según la OMS y AAP.'
    },
    interactions: [
      { interactingDrug: 'Alopurinol', severity: 'Moderada', clinicalEffect: 'Inhibe la xantina oxidasa pero no contrarresta completamente la hiperuricemia inducida por pirazinamida.', recommendation: 'Usar AINEs para artralgias leves.' },
      { interactingDrug: 'Isoniacida y Rifampicina', severity: 'Grave', clinicalEffect: 'Potenciación hepatotóxica sinérgica aditiva sobre el parénquima hepático.', recommendation: 'Monitorear transaminasas basales y cada 2 a 4 semanas.' }
    ],
    monitoringParameters: ['Transaminasas hepáticas (ALT, AST, Bilirrubina) antes de iniciar y periódicamente', 'Niveles séricos de ácido úrico', 'Evaluación clínica de signos de hepatotoxicidad (ictericia, náuseas persistentes)'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'estreptomicina',
    genericName: "Estreptomicina",
    commercialNames: ["Sulfestrep", "Bucomicina"],
    imageUrl: "https://production-media.fahorro.com/media/catalog/product/7/5/7501125107054.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
    imageAlt: "Estreptomicina - Presentación farmacológica",
    images: ["https://production-media.fahorro.com/media/catalog/product/7/5/7501125107054.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265", "https://res.cloudinary.com/prixz/image/upload/w_500/q_auto/f_auto/items/7501125108457.webp"],
    atcCode: 'J01GA01',
    anatomicalSystem: '4.7 Antifímicos',
    therapeuticClass: 'Aminoglucósido natural bactericida inyectable para tuberculosis resistente y zoonosis graves',
    description: 'Primer antibiótico descubierto en la historia con eficacia curativa sobre Mycobacterium tuberculosis (obtenido por Selman Waksman de Streptomyces griseus). Es un aminoglucósido parenteral bactericida que actúa sobre bacilos extracelulares en cavidades tuberculosas. Muy utilizado en regímenes de retratamiento antituberculoso y tratamiento de zoonosis graves como la peste y la tularemia.',
    presentations: [
      { id: 'est-1', form: 'Polvo para solución inyectable IM', concentration: '1000 mg (1 g)', route: 'Intramuscular profunda ESTRICTA', packaging: 'Frasco ampolla con polvo liofilizado' }
    ],
    mechanismOfAction: {
      summary: 'Penetra a través de la envoltura bacteriana mediante transporte activo dependiente de potencial oxidativo y se une de manera irreversible a la proteína S12 de la subunidad ribosómica 30S de Mycobacterium tuberculosis. Altera la fidelidad de traducción del ARNm introduciendo aminoácidos erróneos en las cadenas polipeptídicas e inhibe la iniciación de la síntesis proteica, destruyendo la membrana citoplasmática bacteriana.',
      molecularTarget: 'Proteína S12 de la subunidad ribosómica 30S y ARNr 16S bacteriano',
      pharmacokinetics: {
        bioavailability: 'Intramuscular: 100%. Por vía oral no se absorbe en absoluto.',
        halfLife: 'Aproximadamente 2 a 3 horas en adultos jóvenes (se prolonga a más de 50-100 horas en anuria).',
        metabolism: 'No se metaboliza en el organismo',
        elimination: 'Excreción renal masiva (>80-90% inalterada) por filtración glomerular'
      }
    },
    therapeuticIndications: [
      'Tratamiento de la tuberculosis pulmonar y extrapulmonar activa en pautas combinadas de retratamiento o cuando hay resistencia a otros fármacos',
      'Tratamiento de elección de la peste bubónica y neumónica (Yersinia pestis)',
      'Tularemia aguda grave (Francisella tularensis)',
      'Brucelosis humana sistémica (en combinación con doxiciclina)',
      'Endocarditis enterocócica o por viridans en sinergia con penicilinas'
    ],
    posology: {
      adultStandard: 'Tuberculosis: 15 mg/kg/día (dosis habitual de 750 a 1000 mg una vez al día) por vía INTRAMUSCULAR PROFUNDA en el glúteo durante los primeros 2 meses de inducción (reducir a 500-750 mg/día en pacientes >60 años o peso <50 kg). Tularemia / Peste: 1 g IM cada 12 horas durante 10 días.',
      pediatricDose: 'Niños: 20 a 40 mg/kg/día IM una vez al día (máximo 1 g/día). CONTRAINDICADA EN EL EMBARAZO.',
      renalAdjustment: {
        normal: 'ClCr >50 mL/min: Dosis completa cada 24 horas.',
        moderate: 'ClCr 10-50 mL/min: 15 mg/kg administrados cada 36 a 48 horas.',
        severe: 'ClCr <10 mL/min o hemodiálisis: 15 mg/kg administrados únicamente 2 o 3 VECES POR SEMANA tras la diálisis, con monitorización obligatoria de niveles séricos valle (<1-2 mcg/mL).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'INYECCIÓN EXCLUSIVAMENTE INTRAMUSCULAR PROFUNDA EN EL CUADRANTE SUPERIOR EXTERNO DEL GLÚTEO: alternar estrictamente los sitios anatómicos de inyección para reducir el dolor y la fibrosis. CONTRAINDICADA EN EL EMBARAZO: atraviesa la placenta y causa sordera neurosensorial congénita bilateral completa y daño vestibular irreversible en el feto.'
    },
    safety: {
      blackBoxWarning: 'EXTREMA OTOTOXICIDAD VESTIBULAR Y COCLEAR IRREVERSIBLE: PROVOCA PÉRDIDA AUDITIVA PERMANENTE Y VÉRTIGO INCACAPITANTE. NEFROTOXICIDAD TUBULAR SEVERA. CONTRAINDICADA EN EL EMBARAZO POR CAUSAR SORDERA CONGÉNITA FETAL IRREVERSIBLE.',
      contraindications: [
        'Embarazo en cualquier trimestre (causa sordera congénita bilateral irreversible en el feto)',
        'Hipersensibilidad a la estreptomicina o aminoglucósidos',
        'Miastenia gravis',
        'Pérdida auditiva neurosensorial o vestibulopatía preexistente'
      ],
      adverseEffects: {
        frequent: ['Dolor, induración e inflamación en el sitio de inyección intramuscular', 'Parestesias periorales y entumecimiento facial transitorio tras la inyección'],
        moderate: ['Toxicidad vestibular: vértigo, mareo, inestabilidad en la marcha, ataxia y nistagmo (lesión del VIII par craneal)', 'Elevación de creatinina sérica'],
        severe: ['Sordera neurosensorial bilateral permanente e irreversible', 'Necrosis tubular aguda e insuficiencia renal', 'Bloqueo neuromuscular agudo con apnea respiratoria']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Seguro con precaución: No se absorbe por el tracto digestivo del lactante.'
    },
    interactions: [
      { interactingDrug: 'Diuréticos de asa (Furosemida)', severity: 'Grave', clinicalEffect: 'Aumento sinérgico masivo de la destrucción de células ciliadas cocleovestibulares con sordera irreversible.', recommendation: 'Evitar el uso concomitante.' },
      { interactingDrug: 'Otros fármacos nefrotóxicos y ototóxicos (Vancomicina, Cisplatino)', severity: 'Grave', clinicalEffect: 'Potenciación aditiva de fallo renal y ototoxicidad.', recommendation: 'Evitar la asociación y monitorizar niveles séricos.' }
    ],
    monitoringParameters: ['Audiometría tonal y pruebas vestibulares calóricas basales y periódicas', 'Creatinina sérica y aclaramiento de creatinina', 'Nivel sérico valle de estreptomicina (<2 mcg/mL previo a la dosis)'],
    storageConditions: 'Conservar por debajo de 25 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  }
];
