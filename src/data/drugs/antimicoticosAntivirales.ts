import { Medication } from '../../types/medication';

const VIAL_IMG = '/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANTIMICOTICOS_ANTIVIRALES: Medication[] = [
  // ----------------------------------------------------
  // ANTIMICÓTICOS TÓPICOS Y ORALES
  // ----------------------------------------------------
  {
    id: 'nistatina',
    genericName: "Nistatina",
    commercialNames: ["Micostatina", "Bistatin-V"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVjdyzaCzj2ym6-JsJsjkvQf-ZNUPmVWAKlNCWcvDBw&s=10",
    imageAlt: "Nistatina - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVjdyzaCzj2ym6-JsJsjkvQf-ZNUPmVWAKlNCWcvDBw&s=10", "https://images-products.vitau.mx/7501563310450.jpeg"],
    atcCode: 'A07AA02',
    anatomicalSystem: '4.3 Antimicóticos tópicos y orales',
    therapeuticClass: 'Antimicótico poliénico bactericida y fungistático no absorbible',
    description: 'Antimicótico poliénico macrólido producido por Streptomyces noursei. Se une al ergosterol de las membranas fúngicas. Debido a que no se absorbe en el tracto gastrointestinal ni a través de la piel o mucosas intactas, ejerce una acción estrictamente local y carece de toxicidad sistémica en el tratamiento de candidiasis mucocutáneas.',
    presentations: [
      { id: 'nis-1', form: 'Suspensión oral', concentration: '100.000 UI/mL', route: 'Tópica oral (enjuagar y deglutir)', packaging: 'Frasco gotero de 30 mL y 60 mL' },
      { id: 'nis-2', form: 'Comprimidos orales / Grageas', concentration: '500.000 UI', route: 'Oral (lumen intestinal)', packaging: 'Caja x 30 comprimidos' },
      { id: 'nis-3', form: 'Pomada dérmica y óvulos vaginales', concentration: '100.000 UI/g y 100.000 UI/óvulo', route: 'Tópica cutánea / Vaginal', packaging: 'Tubo x 30 g y caja x 12 óvulos' }
    ],
    mechanismOfAction: {
      summary: 'Se fija selectivamente a las moléculas de ergosterol, principal esterol de la membrana celular de levaduras sensibles (Candida albicans). Esta fijación induce la formación de canales o poros transmembrana acuosos que alteran la permeabilidad celular, provocando la pérdida masiva de iones potasio, azúcares y componentes celulares esenciales, con la consiguiente lisis y muerte fúngica.',
      molecularTarget: 'Ergosterol de la membrana citoplasmática fúngica',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente nula (0%). Tópica nula. No se absorbe sistémicamente.',
        halfLife: 'No aplica sistémicamente.',
        metabolism: 'No se metaboliza',
        elimination: 'Excreción fecal casi del 100% como fármaco inalterado tras deglución'
      }
    },
    therapeuticIndications: [
      'Tratamiento y profilaxis de la candidiasis orofaríngea (muguet bucal) en neonatos, ancianos e inmunodeprimidos',
      'Candidiasis esofágica en combinación o como coadyuvante',
      'Candidiasis intestinal secundaria al uso prolongado de antibióticos de amplio espectro',
      'Candidiasis cutánea de pliegues intertriginosos y dermatitis del pañal moniliásica',
      'Candidiasis vulvovaginal aguda (óvulos)'
    ],
    posology: {
      adultStandard: 'Candidiasis orofaríngea: 400.000 a 600.000 UI (4 a 6 mL) de suspensión 4 veces al día tras las comidas; retener en la boca el mayor tiempo posible (2 a 3 minutos) mediante enjuagues antes de tragar. Candidiasis intestinal: 500.000 a 1.000.000 UI cada 8 horas. Pomada tópica: aplicar en área afectada 2 a 3 veces al día. Continuar el tratamiento al menos 48 horas tras la desaparición completa de los síntomas.',
      pediatricDose: 'Prematuros y neonatos con muguet: 100.000 UI (1 mL) 4 veces al día repartidos con cuentagotas en ambos lados de la boca. Niños mayores: 200.000 a 400.000 UI 4 veces al día.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste (no se absorbe sistémicamente).'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'AGITAR ENÉRGICAMENTE EL FRASCO ANTES DE USAR. Retener la suspensión en la cavidad oral el máximo tiempo posible antes de deglutir para asegurar contacto prolongado con las placas fúngicas. En portadores de prótesis dental, retirar la prótesis y desinfectarla sumergiéndola en solución de nistatina.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDA LA ADMINISTRACIÓN INTRAVENOSA O PARENTERAL: INDUCE CARDIOTOXICIDAD SEVERA Y COLAPSO VASCULAR MORTAL POR SU EXTREMA TOXICIDAD SISTÉMICA.',
      contraindications: [
        'Hipersensibilidad conocida a la nistatina',
        'Administración intravenosa o parenteral'
      ],
      adverseEffects: {
        frequent: ['Mal sabor de boca persistente', 'Náuseas o molestias gastrointestinales leves a dosis orales altas'],
        moderate: ['Diarrea transitoria', 'Dermatitis de contacto con formulación tópica'],
        severe: ['Reacciones anafilactoides extremadamente raras']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: No se absorbe sistémicamente ni pasa a la leche materna.'
    },
    interactions: [
      { interactingDrug: 'Resinas de intercambio iónico o adsorbentes intestinales', severity: 'Moderada', clinicalEffect: 'Disminución del contacto mucoso de la nistatina.', recommendation: 'Separar administraciones.' }
    ],
    monitoringParameters: ['Desaparición de placas blanquecinas orales o de lesiones eritematosas en pliegues', 'Tolerancia digestiva'],
    storageConditions: 'Conservar por debajo de 25 °C protegido de la luz y el calor excesivo.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'tolnaftato',
    genericName: "Tolnaftato",
    commercialNames: ["Tinactin"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuVoJcsQ90r9DpnbdDsyPGa_cWxqir4J1H7vARg4ZV48QIsVA_CAHBeI&s=10",
    imageAlt: "Tolnaftato - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuVoJcsQ90r9DpnbdDsyPGa_cWxqir4J1H7vARg4ZV48QIsVA_CAHBeI&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0kCmD6K2W45xLeUega3Hq40bUwWVBnuPORnrWyMFQg&s=10"],
    atcCode: 'D01AE18',
    anatomicalSystem: '4.3 Antimicóticos tópicos y orales',
    therapeuticClass: 'Antifúngico tiocarbamato sintético para dermatofitosis superficiales',
    description: 'Antimicótico tópico sintético de la familia de los tiocarbamatos. Actúa inhibiendo la epoxidación temprana del escualeno fúngico. Muy eficaz frente a dermatofitos superficiales (Trichophyton, Microsporum, Epidermophyton) en pie de atleta y tiña inguinal, careciendo de actividad sobre levaduras (Candida) o bacterias.',
    presentations: [
      { id: 'tol-1', form: 'Crema y solución dérmica al 1%', concentration: '10 mg/g (1%)', route: 'Tópica cutánea', packaging: 'Tubo de 15 g y 30 g' },
      { id: 'tol-2', form: 'Polvo y aerosol dérmico al 1%', concentration: '10 mg/g', route: 'Tópica cutánea en calzado y pliegues', packaging: 'Frasco espolvoreador de 45 g y spray' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe selectivamente la enzima escualeno monooxigenasa (escualeno epoxidasa) en la vía de biosíntesis del ergosterol fúngico. Esto provoca una deficiencia crítica de ergosterol en la membrana celular y una acumulación intracelular tóxica de escualeno, distorsionando las hifas fúngicas e inhibiendo el crecimiento micelial de dermatofitos.',
      molecularTarget: 'Escualeno epoxidasa fúngica en dermatofitos',
      pharmacokinetics: {
        bioavailability: 'Acción estrictamente tópica; no se detecta absorción sistémica cuantificable tras aplicación cutánea.',
        halfLife: 'No aplica.',
        metabolism: 'No aplica a nivel sistémico',
        elimination: 'Descamación epitelial'
      }
    },
    therapeuticIndications: [
      'Tratamiento y prevención de la Tinea pedis (pie de atleta)',
      'Tinea cruris (tiña inguinal o prurito del jinete) y Tinea corporis (tiña corporal superficial)',
      'Pitiriasis versicolor causada por Malassezia furfur'
    ],
    posology: {
      adultStandard: 'Aplicar una capa fina de crema o solución sobre el área limpia y seca 2 veces al día (mañana y noche) friccionando suavemente durante 2 a 4 semanas (en tiña podal puede requerir de 4 a 6 semanas). El polvo puede aplicarse en calcetines y calzado.',
      pediatricDose: 'Niños mayores de 2 años: Aplicar 1 a 2 veces al día bajo supervisión.',
      renalAdjustment: {
        normal: 'Sin ajuste',
        moderate: 'Sin ajuste',
        severe: 'Sin ajuste'
      },
      hepaticAdjustment: 'Sin ajuste.',
      administrationNotes: 'INACTIVO FRENTE A CANDIDA: no utilizar en candidiasis intertriginosa ni en micosis ungulares avanzadas (onicomicosis). Continuar el tratamiento durante 2 semanas adicionales después de que hayan desaparecido las lesiones cutáneas para prevenir recidivas.'
    },
    safety: {
      blackBoxWarning: 'USO EXCLUSIVAMENTE EXTERNO CUTÁNEO. NO ES EFICAZ EN INFECCIONES FÚNGICAS PROFUNDAS NI EN CANDIDIASIS.',
      contraindications: [
        'Hipersensibilidad conocida al tolnaftato o excipientes',
        'Uso oftálmico o en mucosas abiertas'
      ],
      adverseEffects: {
        frequent: ['Sensación leve y transitoria de calor o escozor local'],
        moderate: ['Dermatitis de contacto irritativa o prurito local'],
        severe: ['Reacciones cutáneas de hipersensibilidad con vesiculación']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro en aplicaciones dérmicas pequeñas; evitar aplicar en el pezón antes de amamantar.'
    },
    interactions: [
      { interactingDrug: 'No se conocen interacciones sistémicas significativas', severity: 'Leve', clinicalEffect: 'Ausencia de absorción sistémica relevante.', recommendation: 'Evitar aplicar simultáneamente con otras cremas en la misma zona sin espaciar.' }
    ],
    monitoringParameters: ['Resolución del prurito, descamación y eritema en el área tratada'],
    storageConditions: 'Conservar por debajo de 30 °C protegido del calor excesivo.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'imidazoles-clotrimazol-ketoconazol-miconazol',
    genericName: "Imidazoles: Ketoconazol, Clotrimazol, Miconazol",
    commercialNames: ["Medicasp (K)", "Lomecan (C)", "Menazan (M)"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchNwIMKfApZVk70AttnaKtetVF6tHCGAG-GIgVRbXymQ0mbZz-mFEbSJi&s=10",
    imageAlt: "Imidazoles: Ketoconazol, Clotrimazol, Miconazol - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchNwIMKfApZVk70AttnaKtetVF6tHCGAG-GIgVRbXymQ0mbZz-mFEbSJi&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ71RRKZccTiLrmW4y4NKMLcipvXRME2mI9ZZ2Xn6yMezfViIEy8wZgWkc&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlli664CJRMNzkTMFKSMFaVubNAyxo1bPI_LWO8M0R9g&s=10"],
    atcCode: 'D01AC08',
    anatomicalSystem: '4.3 Antimicóticos tópicos y orales',
    therapeuticClass: 'Antifúngicos azólicos imidazólicos inhibidores de la 14-alfa-desmetilasa',
    description: 'Grupo prototípico de antifúngicos azólicos con núcleo de anillo imidazol de amplio espectro. Comprende agentes tópicos y orales clave: Clotrimazol (referencia en candidiasis vulvovaginal y cutánea), Ketoconazol (champu para dermatitis seborreica y comprimidos orales con estricta restricción por hepatotoxicidad y bloqueo endocrino de cortisol/testosterona), y Miconazol (gel oral y crema).',
    presentations: [
      { id: 'imid-1', form: 'Clotrimazol crema al 1% y comprimidos/óvulos vaginales', concentration: '10 mg/g (1%) y óvulos de 100 mg y 500 mg', route: 'Tópica cutánea / Vaginal', packaging: 'Tubo x 30 g y caja con óvulo de 500 mg' },
      { id: 'imid-2', form: 'Ketoconazol gel/champú al 2% y crema al 2%', concentration: '20 mg/g (2%)', route: 'Tópica capilar / cutánea', packaging: 'Frasco champú x 100 mL y tubo x 30 g' },
      { id: 'imid-3', form: 'Ketoconazol comprimidos orales (RESTRINGIDO)', concentration: '200 mg', route: 'Oral (solo síndrome de Cushing o micosis resistentes sin alternativa)', packaging: 'Caja x 10 y 30 comprimidos' },
      { id: 'imid-4', form: 'Miconazol gel oral al 2%', concentration: '20 mg/g', route: 'Tópica oral', packaging: 'Tubo x 40 g' }
    ],
    mechanismOfAction: {
      summary: 'Inhiben potentemente la enzima fúngica citocromo P450 14-alfa-desmetilasa (CYP51A1), dependiente de hierro hêmico. Esta enzima cataliza la conversión de lanosterol en ergosterol. Su bloqueo causa un vaciamiento de ergosterol en la membrana plasmática del hongo y una acumulación anómala de 14-alfa-metilesteroles tóxicos, que desestabilizan la bicapa lipídica, alteran los transportadores iónicos y aumentan la fragilidad celular. A altas concentraciones, el ketoconazol inhibe también esteroidogénesis en la corteza suprarrenal y testículos humanos (enzimas CYP11B1 y CYP17).',
      molecularTarget: 'Citocromo P450 14-alfa-desmetilasa (CYP51) y enzimas de esteroidogénesis suprarrenal humana',
      pharmacokinetics: {
        bioavailability: 'Tópica (Clotrimazol, Miconazol, Ketoconazol champú): absorción sistémica insignificante (<1-3%). Oral (Ketoconazol): biodisponibilidad dependiente estrictamente de acidez gástrica (requiere pH bajo para disolución).',
        halfLife: 'Ketoconazol oral: bifásica, terminal de 8 horas.',
        metabolism: 'Hepático masivo por CYP3A4 (el ketoconazol es un potentísimo inhibidor de CYP3A4)',
        elimination: 'Excreción biliar y fecal mayoritaria (>80%)'
      }
    },
    therapeuticIndications: [
      'Candidiasis vulvovaginal aguda y recurrente (Clotrimazol óvulos vaginales y crema)',
      'Dermatitis seborreica del cuero cabelludo y caspa severa por Malassezia (Ketoconazol champú al 2%)',
      'Tiña pedis, cruris, corporis y candidiasis intertriginosa cutánea',
      'Candidiasis orofaríngea (Miconazol gel oral)',
      'Hipercortisolismo endógeno en Síndrome de Cushing (Ketoconazol oral como inhibidor esteroidogénico)'
    ],
    posology: {
      adultStandard: 'Candidiasis vulvovaginal: Clotrimazol 500 mg óvulo vaginal en dosis única nocturna o 100 mg cada noche por 6 días, más crema en genitales externos 2 veces al día. Dermatitis seborreica: Ketoconazol champú al 2%: masajear cuero cabelludo húmedo, dejar actuar 3 a 5 minutos y enjuagar; 2 veces por semana durante 2 a 4 semanas. Miconazol gel bucal: 2.5 mL 4 veces al día tras las comidas reteniéndolo en la boca. Ketoconazol oral en Cushing: 400 a 1200 mg/día divididos en 2 o 3 tomas bajo control estricto de transaminasas.',
      pediatricDose: 'Uso tópico de clotrimazol crema 1% en dermatitis del pañal por Candida 2 veces al día. Ketoconazol oral CONTRAINDICADO en niños por hepatotoxicidad.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'No requiere ajuste',
        severe: 'No requiere ajuste'
      },
      hepaticAdjustment: 'Ketoconazol oral CONTRAINDICADO DE FORMA ABSOLUTA en enfermedad hepática aguda o crónica.',
      administrationNotes: 'EL KETOCONAZOL ORAL TIENE RETIRADA LA INDICACIÓN PARA DERMATOFITOSIS BANALES por la EMA y FDA debido a riesgo de fallo hepático fulminante mortal y trasplante hepático. No ingerir antiácidos ni omeprazol junto con ketoconazol oral (requiere medio ácido gástrico para disolverse).'
    },
    safety: {
      blackBoxWarning: 'KETOCONAZOL ORAL: ALTO RIESGO DE HEPATOTOXICIDAD GRAVE Y MORTAL QUE PUEDE OCURRIR EN LOS PRIMEROS DÍAS DE TRATAMIENTO. POTENTE INHIBIDOR DE CYP3A4 CON RIESGO DE ARRITMIAS VENTRICULARES GRAVES POR INTERACCIONES MEDICAMENTOSAS.',
      contraindications: [
        'Ketoconazol oral: enfermedad hepática aguda o crónica',
        'Uso de ketoconazol oral simultáneo con sustratos de CYP3A4 que prolonguen el QT (pimozida, quinidina, metadona)',
        'Hipersensibilidad alérgica a derivados azólicos'
      ],
      adverseEffects: {
        frequent: ['Sensación local transitoria de quemazón, ardor o eritema con cremas u óvulos', 'Náuseas y dolor abdominal con ketoconazol oral'],
        moderate: ['Ginecomastia dolorosa, disminución de la libido e impotencia en varones (Ketoconazol oral bloquea síntesis de testosterona)', 'Irregularidades menstruales'],
        severe: ['Hepatitis tóxica colestásica o citolítica fulminante con necrosis hepática fatal (Ketoconazol oral)', 'Insuficiencia suprarrenal aguda por bloqueo de cortisol', 'Reacciones anafilácticas']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro en uso tópico (Clotrimazol, Miconazol). Ketoconazol oral contraindicado.'
    },
    interactions: [
      { interactingDrug: 'Warfarina y Anticoagulantes orales (incluso con Miconazol gel oral)', severity: 'Grave', clinicalEffect: 'Inhibición potente de CYP2C9 que eleva masivamente el INR con hemorragias digestivas y cerebrales mortales.', recommendation: 'Evitar el miconazol bucal en pacientes bajo anticoagulantes orales.' },
      { interactingDrug: 'Estatinas (Simvastatina, Atorvastatina con Ketoconazol oral)', severity: 'Grave', clinicalEffect: 'Aumento masivo de niveles plasmáticos de estatinas con rabdomiólisis severa e insuficiencia renal.', recommendation: 'Contraindicada la combinación.' },
      { interactingDrug: 'Antiácidos, Anti-H2 e IBP (Omeprazol)', severity: 'Moderada', clinicalEffect: 'Anulan la acidez gástrica disminuyendo la absorción oral del ketoconazol en más del 85%.', recommendation: 'Tomar con bebidas de cola ácidas o evitar.' }
    ],
    monitoringParameters: ['Enzimas hepáticas (ALT, AST, FA, Bilirrubina) semanales si se utiliza ketoconazol oral', 'Vigilancia de signos de hipocortisolismo (astenia, hipotensión, mareo)', 'Monitoreo de INR con miconazol gel'],
    storageConditions: 'Conservar por debajo de 25 °C protegido del calor.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'anfotericina-b',
    genericName: "Anfotericina B",
    commercialNames: ["Candipres. Ambisome", "Anfakir"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6l_AIPWa3F6_IluUGWE5iSh6W-yppeTcbjaszMwpxJxvc3GTG-G_XAx4&s=10",
    imageAlt: "Anfotericina B - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6l_AIPWa3F6_IluUGWE5iSh6W-yppeTcbjaszMwpxJxvc3GTG-G_XAx4&s=10", "https://curitek.com/wp-content/uploads/2025/01/ANFAKAIR-50-MG-INYECTABLE-AMFOTERICINA-B.jpg?v=1739223795", "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/stendhal_ambisome_solinyeciv_cj1fc50mg.png"],
    atcCode: 'J02AA01',
    anatomicalSystem: '4.3 Antimicóticos tópicos y orales',
    therapeuticClass: 'Antifúngico poliénico parenteral de máximo espectro fungicida para micosis invasivas',
    description: 'Antimicótico poliénico macrólido heptaeno obtenido de Streptomyces nodosus. Es el patrón oro histórico indiscutible de máxima potencia fungicida frente a micosis sistémicas mortales. La formulación liposomal (AmBisome) incorpora el principio activo dentro de bicapas esféricas de fosfolípidos que reducen drásticamente la nefrotoxicidad sin mermar la eficacia.',
    presentations: [
      { id: 'anf-1', form: 'Polvo liofilizado para dispersión para infusión liposomal (AmBisome)', concentration: '50 mg', route: 'Intravenosa exclusiva en dextrosa 5%', packaging: 'Frasco ampolla de 50 mg con filtro de jeringa' },
      { id: 'anf-2', form: 'Polvo liofilizado convencional con desoxicolato (Fungizone)', concentration: '50 mg', route: 'Intravenosa diluida', packaging: 'Frasco ampolla de 50 mg' }
    ],
    mechanismOfAction: {
      summary: 'La molécula anfipática de anfotericina B se une con avidez extrema al ergosterol presente en las membranas de hongos patógenos (afinidad aproximadamente 10 veces mayor que hacia el colesterol de las células humanas). Varios monómeros se ensamblan formando un poro cilíndrico transmembrana ("anillo en barril"), cuyo núcleo hidrófilo permite la fuga masiva de iones intracelulares potasio (K+) y magnesio (Mg2+), disipando el potencial transmembrana y causando necrosis osmótica fúngica inmediata.',
      molecularTarget: 'Ergosterol de la membrana fúngica y formación de poros transmembrana',
      pharmacokinetics: {
        bioavailability: 'Intravenosa: 100%. Por vía oral no se absorbe en absoluto.',
        halfLife: 'Bifásica muy prolongada: terminal de 15 días (acumulación en tejidos reticuloendoteliales: hígado, bazo, pulmón).',
        metabolism: 'Degradación tisular lenta',
        elimination: 'Excreción renal muy lenta (menos del 5% inalterada en orina en 24 horas)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de micosis sistémicas graves potencialmente mortales: aspergilosis invasiva, candidiasis sistémica refractaria, mucormicosis / cigomicosis rino-órbito-cerebral y pulmonar',
      'Meningitis criptocócica en pacientes con VIH / SIDA (en combinación con flucitosina)',
      'Leishmaniasis visceral (Kala-azar) refractaria o como pauta corta de primera línea',
      'Tratamiento empírico de micosis sospechadas en neutropenia febril persistente'
    ],
    posology: {
      adultStandard: 'Anfotericina B Liposomal (AmBisome): 3 a 5 mg/kg/día IV en infusión de al menos 120 minutos (en mucormicosis fulminante o del SNC puede incrementarse a 5-10 mg/kg/día). Meningitis criptocócica: 3 a 4 mg/kg/día liposomal asociada a flucitosina por 2 semanas. Anfotericina B Desoxicolato convencional: 0.5 a 1 mg/kg/día IV en infusión continua de 4 a 6 horas precedida de premedicación.',
      pediatricDose: 'Niños ≥1 mes: 3 a 5 mg/kg/día IV en infusión de 2 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'Usar formulación liposomal y prehidratar abundantemente con solución salina.',
        severe: 'No requiere reducción de dosis en insuficiencia renal; sin embargo, vigilar creatinina y electrólitos a diario.'
      },
      hepaticAdjustment: 'No requiere ajuste habitual.',
      administrationNotes: 'DILUIR EXCLUSIVAMENTE EN SOLUCIÓN DE DEXTROSA AL 5% EN AGUA. PROHIBIDO DILUIR EN SOLUCIÓN SALINA O RINGER: el cloruro sódico causa precipitación física inmediata masiva del fármaco. PREHIDRATAR CON 500-1000 ML DE SUERO SALINO 0.9% PREVIO A LA INFUSIÓN para minimizar la vasoconstricción arteriolar renal y la nefrotoxicidad. Premedicar con paracetamol, antihistamínicos o hidrocortisona para prevenir la reacción infusoria aguda.'
    },
    safety: {
      blackBoxWarning: 'DEBE UTILIZARSE EXCLUSIVAMENTE EN INFECCIONES FÚNGICAS GRAVES INVASIVAS CON AMENAZA VITAL. ALTO RIESGO DE REACCIONES INFUSORIAS AGUDAS CON ESCALOFRÍOS INTENSOS ("SHAKE AND BAKE"), FIEBRE, HIPOTENSIÓN Y NEFROTOXICIDAD TUBULAR SEVERA CON HIPOPOTASEMIA MORTAL.',
      contraindications: [
        'Hipersensibilidad alérgica a la anfotericina B',
        'Infecciones fúngicas superficiales banales'
      ],
      adverseEffects: {
        frequent: ['Reacción aguda infusoria mediada por citoquinas: escalofríos intensos violentos, fiebre alta ("shake and bake"), náuseas y cefalea durante la infusión', 'Hipopotasemia marcada e hipomagnesemia severa por pérdida tubular renal'],
        moderate: ['Anemia normocítica normocrómica por supresión de la síntesis de eritropoyetina', 'Tromboflebitis periférica'],
        severe: ['Necrosis tubular aguda e insuficiencia renal aguda', 'Acidosis tubular renal distal tipo I', 'Parada cardíaca o arritmias ventriculares por hipopotasemia severa o infusión rápida']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Precaución: Fármaco de rescate vital en el embarazo; datos limitados en lactancia.'
    },
    interactions: [
      { interactingDrug: 'Fármacos nefrotóxicos (Ciclosporina, Aminoglucósidos, Vancomicina, Cisplatino)', severity: 'Grave', clinicalEffect: 'Multiplicación exponencial de la tasa de fracaso renal agudo con necrosis tubular permanente.', recommendation: 'Evitar o monitorizar función renal diaria.' },
      { interactingDrug: 'Digoxina', severity: 'Grave', clinicalEffect: 'La hipopotasemia extrema inducida por anfotericina B precipita intoxicación digitálica letal.', recommendation: 'Reponer potasio agresivamente manteniendo K+ >4.0 mEq/L.' },
      { interactingDrug: 'Corticoides sistémicos', severity: 'Moderada', clinicalEffect: 'Pérdida adicional masiva de potasio.', recommendation: 'Monitorear ionograma.' }
    ],
    monitoringParameters: ['Potasio y Magnesio séricos diarios (requiere suplementación intravenosa casi universal)', 'Creatinina sérica y urea antes de cada dosis', 'Hemograma completo', 'Monitoreo de temperatura y constantes durante la infusión'],
    storageConditions: 'Conservar los viales liofilizados en nevera (2-8 °C). Proteger la solución reconstituida de la luz durante la infusión.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'equinocandinas-caspofungina-anidulafungina-micafungina',
    genericName: "Equinocandinas: Caspofungina, Anidulafungina, Micafungina",
    commercialNames: ["Suvepur (C)", "Mycamine (M)", "Equaltha (A)"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJkgiX6yaMj99TZJFckULNhlmK4d_95Dk_VYSI1dKbw&s=10",
    imageAlt: "Equinocandinas: Caspofungina, Anidulafungina, Micafungina - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJkgiX6yaMj99TZJFckULNhlmK4d_95Dk_VYSI1dKbw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXwEtxZgt2kt3hyZHKpReXb_bf--W3PdFk1G_uNdQQKqG1QLWmbF-aCY&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArJKwFHgHfhPZS-WPYo3qq205tJ7j-b5ro1xpJxvY7Q&s=10"],
    atcCode: 'J02AX04',
    anatomicalSystem: '4.3 Antimicóticos tópicos y orales',
    therapeuticClass: 'Antifúngicos lipopéptidos cíclicos inhibidores de la síntesis de beta-(1,3)-D-glucano',
    description: 'Familia de lipopéptidos semisintéticos cíclicos (Equinocandinas). Constituyen el tratamiento de primera línea de elección en guías IDSA/ESCMID para la candidiasis invasiva y candidemia. Destacan por su excepcional perfil de seguridad con nula toxicidad tubular renal debido a que su diana molecular (el glucano de la pared celular fúngica) no existe en las células de mamíferos.',
    presentations: [
      { id: 'equi-1', form: 'Caspofungina liofilizado para infusión IV', concentration: '50 mg y 70 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 50 mg y 70 mg' },
      { id: 'equi-2', form: 'Anidulafungina polvo liofilizado para infusión IV', concentration: '100 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 100 mg con diluyente' },
      { id: 'equi-3', form: 'Micafungina polvo para infusión IV', concentration: '50 mg y 100 mg', route: 'Intravenosa', packaging: 'Frasco ampolla de 50 y 100 mg' }
    ],
    mechanismOfAction: {
      summary: 'Inhiben de forma no competitiva y selectiva a la enzima 1,3-beta-glucano sintasa (complejo enzimático codificado por los genes FKS1 y FKS2) en la membrana celular fúngica. Esto paraliza la síntesis de beta-(1,3)-D-glucano, el polímero estructural fibroso primordial que otorga rigidez mecánica y resistencia osmótica a la pared celular fúngica, ocasionando lisis celular osmótica bactericida rápida en Candida spp. y efecto fungistático en hifas de Aspergillus.',
      molecularTarget: 'Subunidad catalítica de la 1,3-beta-D-glucano sintasa fúngica (Fks1p)',
      pharmacokinetics: {
        bioavailability: 'Intravenosa exclusiva: 100%. Oral nula (grandes péptidos cíclicos que no atraviesan enterocitos).',
        halfLife: 'Caspofungina: 9 a 11 horas (semivida tisular hasta 40-50h); Anidulafungina: 24 a 26 horas; Micafungina: 14 a 17 horas.',
        metabolism: 'Caspofungina: degradación espontánea e hidrólisis hepática; Anidulafungina: degradación química peptídica lenta independiente del hígado y riñón; Micafungina: metabolización hepática por arilsulfatasa y COMT',
        elimination: 'Excreción biliar y fecal predominante; eliminación renal mínima (<1-2% fármaco activo)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea de la candidiasis invasiva y candidemia en pacientes neutropénicos y no neutropénicos',
      'Tratamiento de rescate de la aspergilosis invasiva refractaria o con intolerancia a voriconazol o anfotericina B',
      'Candidiasis esofágica grave con necesidad de terapia parenteral',
      'Profilaxis de infecciones por Candida en pacientes sometidos a trasplante alogénico de progenitores hematopoyéticos'
    ],
    posology: {
      adultStandard: 'Caspofungina: Dosis de carga de 70 mg IV en infusión de 60 minutos el primer día, seguida de 50 mg IV una vez al día (aumentar a 70 mg/día si el peso corporal supera los 80 kg o se coadministran inductores enzimáticos). Anidulafungina: Dosis de carga de 200 mg IV el día 1, seguida de 100 mg IV una vez al día. Micafungina: 100 mg IV una vez al día (en candidiasis esofágica: 150 mg/día; profilaxis en trasplante: 50 mg/día).',
      pediatricDose: 'Caspofungina pediátrica (≥3 meses): Dosis de carga de 70 mg/m² el día 1, seguida de 50 mg/m²/día (máximo 70 mg/día).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'NO REQUIEREN NINGÚN AJUSTE DE DOSIS (incluyendo pacientes en hemodiálisis continua o intermitente).',
        severe: 'NO REQUIEREN AJUSTE (máxima seguridad renal).'
      },
      hepaticAdjustment: 'Anidulafungina y Micafungina: no requieren ajuste en insuficiencia hepática. Caspofungina: reducir la dosis de mantenimiento a 35 mg/día en insuficiencia hepática moderada (Child-Pugh 7-9).',
      administrationNotes: 'NO REQUIEREN PREHIDRATACIÓN NI PRODUCEN NEFROTOXICIDAD TUBULAR. Infundir siempre lentamente en al menos 60 minutos para evitar rubefacción facial mediada por histamina. Incompatibles con soluciones glucosadas o Ringer según producto (verificar ficha técnica: caspofungina es incompatible con glucosa; anidulafungina y micafungina pueden diluirse en salino o glucosa).'
    },
    safety: {
      blackBoxWarning: 'MICAFUNGINA: ASOCIADA AL DESARROLLO DE FOCOS DE ALTERACIÓN CELULAR PRENEOPLÁSICOS Y ADENOMAS/CARCINOMAS HEPÁTICOS EN RATAS TRAS TRATAMIENTOS REPETIDOS A DOSIS ALTAS (RESTRINGIR USO SI EXISTEN OTRAS EQUINOCANDINAS DISPONIBLES).',
      contraindications: [
        'Hipersensibilidad a las equinocandinas',
        'Insuficiencia hepática severa para micafungina (evaluación beneficio/riesgo)'
      ],
      adverseEffects: {
        frequent: ['Fiebre y cefalea leve', 'Flebitis en la vía periférica', 'Elevación transitoria leve de transaminasas'],
        moderate: ['Reacciones anafilactoides por liberación de histamina (rubor facial, prurito, disnea)', 'Hipopotasemia leve'],
        severe: ['Hepatotoxicidad con hiperbilirrubinemia o necrosis hepática (rara)', 'Shock anafiláctico']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Precaución: Se desconoce su paso a leche materna; evitar si existen alternativas.'
    },
    interactions: [
      { interactingDrug: 'Ciclosporina (con Caspofungina)', severity: 'Moderada', clinicalEffect: 'Aumento del 35% en el AUC de caspofungina y mayor riesgo de elevación de transaminasas hepáticas.', recommendation: 'Usar solo si el beneficio supera el riesgo; monitorizar ALT/AST.' },
      { interactingDrug: 'Tacrolimus (con Caspofungina o Micafungina)', severity: 'Moderada', clinicalEffect: 'Disminución del 20% de los niveles valle de tacrolimus.', recommendation: 'Controlar niveles plasmáticos de tacrolimus y ajustar dosis.' }
    ],
    monitoringParameters: ['Transaminasas hepáticas (ALT, AST) y fosfatasa alcalina basal y periódica', 'Hemograma y recuento plaquetario', 'Vigilancia de signos de flebitis'],
    storageConditions: 'Conservar los viales liofilizados refrigerados de 2 °C a 8 °C. Anidulafungina puede mantenerse a temperatura ambiente (<25 °C).',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // ANTIVIRALES
  // ----------------------------------------------------
  {
    id: 'zidovudina',
    genericName: "Zidovudina",
    commercialNames: ["Retrovir"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfuR6cI3i3hF5NRVK4t3mTc8BeeWqvIdtENtVIo97OIu4fr9EGqAqyg0&s=10",
    imageAlt: "Zidovudina - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfuR6cI3i3hF5NRVK4t3mTc8BeeWqvIdtENtVIo97OIu4fr9EGqAqyg0&s=10"],
    atcCode: 'J05AF01',
    anatomicalSystem: '4.4 Antivirales',
    therapeuticClass: 'Antirretroviral inhibidor nucleosídico de la transcriptasa inversa (INTR / NRTI)',
    description: 'Primer fármaco antirretroviral comercializado en la historia para la infección por el virus de la inmunodeficiencia humana (VIH-1 y VIH-2). Análogo de timidina que, tras ser fosforilado a su forma trifosfato activa, actúa como finalizador de cadena en la transcripción inversa del genoma viral. Fármaco de referencia en la prevención de la transmisión vertical materno-fetal periparto del VIH.',
    presentations: [
      { id: 'azt-1', form: 'Cápsulas y comprimidos orales', concentration: '100 mg, 250 mg y 300 mg', route: 'Oral', packaging: 'Caja x 30 y 60 cápsulas' },
      { id: 'azt-2', form: 'Solución oral jarabe', concentration: '50 mg / 5 mL (10 mg/mL)', route: 'Oral neonatal', packaging: 'Frasco x 200 mL' },
      { id: 'azt-3', form: 'Solución para infusión IV', concentration: '10 mg/mL', route: 'Intravenosa intraparto', packaging: 'Frasco ampolla de 20 mL (200 mg)' }
    ],
    mechanismOfAction: {
      summary: 'Penetra pasivamente en las células humanas diana donde tres quinasas celulares consecutivas (timidina quinasa celular, timidilato quinasa y difosfato quinasa) la convierten en el metabolito activo zidovudina 5\'-trifosfato (AZT-TP). El AZT-TP compite con el sustrato celular natural dTTP por la transcriptasa inversa del VIH; al incorporarse a la cadena naciente de ADN proviral, la ausencia del grupo 3\'-hidroxilo (-OH) en el azúcar dideoxirribosa impide la formación del enlace fosfodiéster 3\'-5\', terminando de manera prematura e irreversible la elongación del ADN retroviral.',
      molecularTarget: 'Transcriptasa Inversa del VIH y ADN polimerasa gamma mitocondrial humana',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 65% (buena absorción, atraviesa la barrera hematoencefálica con concentraciones en LCR del 60% de las plasmáticas).',
        halfLife: 'Plasmática aprox. 1 a 1.5 horas; vida media intracelular del trifosfato activo: 3 a 4 horas.',
        metabolism: 'Hepático masivo por glucuronidación mediante UGT2B7 a 5\'-glucuronil-zidovudina inactiva (75%)',
        elimination: 'Excreción renal del 70-80% (metabolito glucurónido y 15-20% inalterada)'
      }
    },
    therapeuticIndications: [
      'Prevención de la transmisión materno-fetal del VIH durante el embarazo, trabajo de parto y profilaxis neonatal',
      'Tratamiento de la infección por VIH-1 en regímenes de politerapia antirretroviral combinada',
      'Tratamiento del complejo de demencia asociada al VIH y mielopatía vacuolar (por excelente penetración en SNC)',
      'Profilaxis post-exposición (PEP) ocupacional o no ocupacional al VIH'
    ],
    posology: {
      adultStandard: 'Tratamiento oral combinado en adultos: 300 mg cada 12 horas (o 200 mg cada 8 horas). Prevención de transmisión vertical intraparto: al inicio del trabajo de parto infusión IV de 2 mg/kg en 1 hora, seguida de infusión continua a 1 mg/kg/hora hasta el pinzamiento del cordón umbilical.',
      pediatricDose: 'Profilaxis neonatal: 2 a 4 mg/kg vía oral cada 12 horas iniciando en las primeras 6 a 12 horas de vida y manteniéndolo durante 4 a 6 semanas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 15-50 mL/min: 300 mg una vez al día o 200 mg cada 12 horas.',
        severe: 'ClCr <15 mL/min o hemodiálisis: 100 mg cada 8 horas o 300 mg una vez al día tras diálisis.'
      },
      hepaticAdjustment: 'Reducir dosis a la mitad en cirrosis hepática descompensada debido a menor glucuronidación.',
      administrationNotes: 'MONITORIZAR HEMOGRAMA COMPLETO OBLIGATORIAMENTE CADA 2 A 4 SEMANAS: la supresión medular con anemia macrocítica profunda y neutropenia es muy frecuente. La macrocitosis eritrocitaria (VCM >100 fL) es un marcador biológico directo y universal de adherencia al tratamiento con AZT.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE TOXICIDAD HEMATOLÓGICA GRAVE (ANEMIA SEVERA REQUIRENTE DE TRANSFUSIONES Y NEUTROPENIA MORTAL). ASOCIADA A MIOPATÍA MITOCONDRIAL SINTOMÁTICA, ACIDOSIS LÁCTICA Y HEPATOMEGALIA CON ESTEATOSIS GRAVE.',
      contraindications: [
        'Neutropenia basal severa (<750 neutrófilos/mm³) o anemia grave basal (hemoglobina <7.5 g/dL)',
        'Hipersensibilidad alérgica a la zidovudina',
        'Lactantes con hiperbilirrubinemia no tratada'
      ],
      adverseEffects: {
        frequent: ['Anemia macrocítica (VCM marcadamente elevado)', 'Náuseas, vómitos, astenia intensa y cefalea', 'Pigmentación parda ungueal melanoniquia'],
        moderate: ['Neutropenia y leucopenia', 'Miopatía mitocondrial proximal con mialgias y elevación de CPK'],
        severe: ['Aplasia eritroide pura y pancitopenia', 'Acidosis láctica grave potencialmente mortal con esteatosis hepática microvesicular', 'Lipoatrofia facial y periférica']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado en madres con VIH: La lactancia materna transmite el VIH al lactante en países con acceso a fórmula infantil.'
    },
    interactions: [
      { interactingDrug: 'Estavudina (d4T)', severity: 'Grave', clinicalEffect: 'Antagonismo competitivo intracelular por la misma enzima timidina quinasa que anula la fosforilación y eficacia de ambos agentes.', recommendation: 'PROHIBIDA la coadministración simultánea.' },
      { interactingDrug: 'Ganciclovir y Ribavirina', severity: 'Grave', clinicalEffect: 'Potenciación extrema sinérgica de toxicidad hematológica con pancitopenia grave.', recommendation: 'Evitar la asociación o extremar controles hematológicos.' },
      { interactingDrug: 'Rifampicina', severity: 'Moderada', clinicalEffect: 'Inducción de UGT que reduce los niveles de AZT en un 50%.', recommendation: 'Evitar o ajustar dosis.' }
    ],
    monitoringParameters: ['Hemograma completo con recuento de reticulocitos y neutrófilos absoluto cada 2-4 semanas', 'Ácido láctico sérico si surgen náuseas, astenia o taquipnea', 'CPK en caso de mialgias', 'Transaminasas hepáticas'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'aciclovir',
    genericName: "Aciclovir",
    commercialNames: ["Isavir", "Cicloferon", "Zovirax"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_ytVwfd8F6KMkGMi9jhWKlh9gcy57kCcZkSwRD4-XoSE_2hfYD_g2Ccl&s=10",
    imageAlt: "Aciclovir - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_ytVwfd8F6KMkGMi9jhWKlh9gcy57kCcZkSwRD4-XoSE_2hfYD_g2Ccl&s=10", "https://production-media.fahorro.com/media/catalog/product/7/5/7501299300107_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265", "https://production-media.fahorro.com/media/catalog/product/7/5/7501046482490_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144"],
    atcCode: 'J05AB01',
    anatomicalSystem: '4.4 Antivirales',
    therapeuticClass: 'Antiviral análogo de nucleósido acíclico inhibidor selectivo de ADN polimerasa de Herpesviridae',
    description: 'Antiviral prototípico análogo de la desoxiguanosina. Presenta un mecanismo de bioactivación selectivo excepcional que requiere de una enzima codificada exclusivamente por el virus (la timidina quinasa viral), confiriéndole un índice terapéutico extraordinariamente alto frente al virus del herpes simple (VHS-1, VHS-2) y al virus de la varicela-zóster (VVZ).',
    presentations: [
      { id: 'aci-1', form: 'Comprimidos orales', concentration: '200 mg, 400 mg y 800 mg', route: 'Oral', packaging: 'Caja x 25, 30 y 35 comprimidos' },
      { id: 'aci-2', form: 'Polvo para solución para infusión IV', concentration: '250 mg y 500 mg', route: 'Intravenosa diluida', packaging: 'Frasco ampolla de 250 y 500 mg' },
      { id: 'aci-3', form: 'Crema dérmica y pomada oftálmica al 5% y 3%', concentration: '50 mg/g (5%) y 30 mg/g (3%)', route: 'Tópica cutánea / Oftálmica', packaging: 'Tubo x 2 g, 10 g y 4.5 g' }
    ],
    mechanismOfAction: {
      summary: 'El aciclovir es un profármaco inactivo. Su primera fosforilación a aciclovir-monofosfato requiere específicamente de la enzima timidina quinasa viral (TK), ausente en células humanas no infectadas. Dos quinasas celulares del huésped añaden dos fosfatos adicionales para generar aciclovir-trifosfato (ACV-TP). El ACV-TP compite con la dGTP por la ADN polimerasa viral; al ser incorporado a la cadena de ADN viral, la ausencia del grupo 3\'-OH en la cadena lateral acíclica actúa como terminador obligado de la cadena de ADN e inactiva de forma suicida a la polimerasa viral.',
      molecularTarget: 'Timidina quinasa viral específica y ADN polimerasa de herpesvirus',
      pharmacokinetics: {
        bioavailability: 'Oral baja (15-30%); no obstante, suficiente para infecciones cutáneo-mucosas. IV: 100%. Excelente difusión a LCR (50% de niveles plasmáticos).',
        halfLife: 'Aproximadamente 2.5 a 3.3 horas en normofunción renal (hasta 20 horas en anuria).',
        metabolism: 'Mínimo hepático (10-15% a 9-carboximetoximetilguanina)',
        elimination: 'Excreción renal masiva (>60-90% inalterado) por filtración glomerular y secreción tubular'
      }
    },
    therapeuticIndications: [
      'Encefalitis por herpes simple (VHS-1) en adultos y neonatos (urgencia neurológica con infusión IV)',
      'Herpes zóster agudo y prevención de neuralgia posherpética en mayores de 50 años',
      'Infecciones mucocutáneas primarias o recurrentes por VHS-1 y VHS-2 (herpes genital y labial)',
      'Varicela complicada en adultos, adolescentes y pacientes inmunodeprimidos',
      'Queratoconjuntivitis herpética (pomada oftálmica al 3%)'
    ],
    posology: {
      adultStandard: 'Encefalitis herpética IV: 10 mg/kg cada 8 horas en infusión lenta de 60 minutos durante 14 a 21 días. Herpes zóster oral: 800 mg 5 veces al día (cada 4 horas omitiendo la dosis nocturna) durante 7 días. Herpes genital primario: 400 mg cada 8 horas o 200 mg 5 veces al día por 7 a 10 días. Supresión recurrencias: 400 mg cada 12 horas continuo.',
      pediatricDose: 'Herpes neonatal: 20 mg/kg IV cada 8 horas por 21 días. Varicela en niños ≥2 años: 20 mg/kg/dosis vía oral 4 veces al día (máximo 800 mg/dosis) por 5 días.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 25-50 mL/min: Dosis completa cada 12 horas.',
        severe: 'ClCr 10-25 mL/min: Dosis completa cada 24 horas; ClCr <10 mL/min: Reducir dosis al 50% cada 24 horas.'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'INFUNDIR SIEMPRE EN AL MENOS 60 MINUTOS Y ASEGURAR UNA ABUNDANTE HIDRATACIÓN INTRAVENOSA O DE LÍQUIDOS ORALES: la inyección intravenosa rápida o en bolo precipita cristales aciculares insolubles de aciclovir en los túbulos renales colectores, causando insuficiencia renal aguda obstructiva intratubular.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE NEFROPATÍA POR CRISTALIZACIÓN TUBULAR AGUDA ANTE INFUSIÓN IV RÁPIDA O DESHIDRATACIÓN. RIESGO DE NEUROTOXICIDAD GRAVE (CONFUSIÓN, ALUCINACIONES, COMA) EN INSUFICIENCIA RENAL SIN AJUSTE POSOLÓGICO.',
      contraindications: [
        'Hipersensibilidad alérgica confirmada a aciclovir o valaciclovir'
      ],
      adverseEffects: {
        frequent: ['Cefalea y mareo', 'Náuseas, vómitos y diarrea leve', 'Flebitis e inflamación en el sitio de infusión IV'],
        moderate: ['Elevación transitoria de creatinina sérica y urea', 'Fotosensibilidad'],
        severe: ['Nefropatía por precipitación cristalina tubular e insuficiencia renal aguda', 'Neurotoxicidad: confusión mental, alucinaciones visuales, mioclonías, convulsiones y coma (más en ancianos o fallo renal)', 'Púrpura trombocitopénica trombótica (PTT/SUH) en inmunodeprimidos']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia; fármaco antiviral de referencia en el embarazo y puerperio.'
    },
    interactions: [
      { interactingDrug: 'Fármacos nefrotóxicos (Ciclosporina, Tacrolimus, Aminoglucósidos)', severity: 'Grave', clinicalEffect: 'Aumento sinérgico de la toxicidad tubular renal.', recommendation: 'Monitorear creatinina y diuresis horaria.' },
      { interactingDrug: 'Probenecid y Cimetidina', severity: 'Moderada', clinicalEffect: 'Compiten por la secreción tubular renal activa elevando los niveles y semivida de aciclovir en un 40%.', recommendation: 'Vigilar neurotoxicidad.' }
    ],
    monitoringParameters: ['Creatinina sérica y balance hídrico diario en infusión IV', 'Nivel de consciencia y estado neurológico', 'Inspección de la vía periférica para evitar extravasación tisular cáustica'],
    storageConditions: 'Comprimidos: por debajo de 25 °C. Polvo para infusión: no refrigerar tras su reconstitución ya que precipita en forma de cristales a bajas temperaturas.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'ribavirina',
    genericName: "Ribavirina",
    commercialNames: ["Vilona", "Virazide"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RqXeFLTa918aqkgPfnJCyyyvF5B9C-6JWHZDTAECqcF5NfCUGKSkxmI&s=10",
    imageAlt: "Ribavirina - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RqXeFLTa918aqkgPfnJCyyyvF5B9C-6JWHZDTAECqcF5NfCUGKSkxmI&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ384MOWchyTiNnQ12bkQvWc7gIgSSwz1S6Q2D2_ATmqm8kO1vGGj7hegs&s=10"],
    atcCode: 'J05AB04',
    anatomicalSystem: '4.4 Antivirales',
    therapeuticClass: 'Antiviral análogo de guanosina de amplio espectro frente a virus ARN y ADN',
    description: 'Análogo sintético de nucleósido purínico con un anillo triazol carboxamida. Posee una extraordinaria actividad antiviral de amplio espectro in vitro e in vivo frente a numerosos virus ARN y ADN. Clásicamente asociada a interferón en la hepatitis C crónica y formulada en aerosol para bronquiolitis por virus respiratorio sincitial (VRS) en niños de alto riesgo.',
    presentations: [
      { id: 'rib-1', form: 'Cápsulas y comprimidos recubiertos', concentration: '200 mg y 400 mg', route: 'Oral', packaging: 'Caja x 40, 84 y 168 cápsulas' },
      { id: 'rib-2', form: 'Polvo liofilizado para solución para inhalación en aerosol', concentration: '6 g', route: 'Inhalatoria por generador de aerosol SPAG-2', packaging: 'Frasco ampolla de 6 g' }
    ],
    mechanismOfAction: {
      summary: 'Ejerce múltiples mecanismos antivirales intracelulares tras ser fosforilada a ribavirina mono, di y trifosfato: 1) El monofosfato inhibe competitivamente a la enzima inosina monofosfato deshidrogenasa (IMPDH), agotando las reservas celulares de GTP necesarias para la síntesis de ácidos nucleicos virales; 2) El trifosfato actúa como mutágeno letal que es incorporado por la ARN polimerasa dependiente de ARN viral, provocando mutaciones catastróficas masivas (catástrofe de error) en el genoma viral; 3) Inhibe la adición de la caperuza 5\'-metilguanosina (capping) en el ARNm viral.',
      molecularTarget: 'Inosina monofosfato deshidrogenasa (IMPDH) y ARN polimerasa dependiente de ARN viral',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 45-65% (los alimentos ricos en grasas aumentan el AUC en un 70%). Atrapamiento masivo en eritrocitos circulantes donde se acumula de forma irreversible.',
        halfLife: 'Extremadamente prolongada: terminal de 200 a 300 horas (12 días) debido a la lenta liberación desde los hematíes.',
        metabolism: 'Hepático reversible por fosforilación intracelular y desribosilación microsomal',
        elimination: 'Excreción predominantemente renal (60%)'
      }
    },
    therapeuticIndications: [
      'Infección grave del tracto respiratorio inferior por Virus Respiratorio Sincitial (VRS) en lactantes y niños con cardiopatías congénitas o prematuridad (vía aerosol)',
      'Tratamiento de la infección crónica por Virus de la Hepatitis C (VHC) en pautas combinadas',
      'Tratamiento de fiebres hemorrágicas virales (Fiebre de Lassa, Fiebre hemorrágica de Crimea-Congo y fiebre hemorrágica con síndrome renal)',
      'Infección grave por Virus de la Hepatitis E en inmunodeprimidos'
    ],
    posology: {
      adultStandard: 'Hepatitis C crónica oral: 1000 mg/día (si peso <75 kg: 2 cápsulas de 200 mg por la mañana y 3 por la noche) o 1200 mg/día (si peso ≥75 kg: 3 cápsulas por la mañana y 3 por la noche) junto con las comidas principales. Fiebre de Lassa IV: dosis de carga de 30 mg/kg seguida de 16 mg/kg cada 6 horas.',
      pediatricDose: 'Infección por VRS en aerosol: solución al 2% administrada continuamente mediante generador SPAG-2 durante 12 a 18 horas al día durante 3 a 7 días. Niños ≥3 años oral (VHC): 15 mg/kg/día divididos en 2 tomas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: Alternar 200 mg y 400 mg en días alternos.',
        severe: 'ClCr <30 mL/min o hemodiálisis: CONTRAINDICADA DE FORMA ABSOLUTA debido a la acumulación irreversible en eritrocitos y riesgo de hemólisis mortal.'
      },
      hepaticAdjustment: 'No suele requerir ajuste específico salvo que coexista descompensación cirrótica grave.',
      administrationNotes: 'TERATOGÉNESIS EXTREMA: PROHIBIDO EL EMBARAZO TANTO EN MUJERES TRATADAS COMO EN PAREJAS FEMENINAS DE HOMBRES EN TRATAMIENTO DURANTE LA TERAPIA Y HASTA 6 MESES TRAS SUSPENDER EL FÁRMACO. Exige doble método anticonceptivo riguroso y test de embarazo mensual.'
    },
    safety: {
      blackBoxWarning: 'EXTREMA TERATOGÉNESIS Y EFECTO EMBRIOCIDA: CONTRAINDICADA EN MUJERES EMBARAZADAS Y EN HOMBRES CUYAS PAREJAS ESTÉN EMBARAZADAS. INDUCE ANEMIA HEMOLÍTICA DOSIS-DEPENDIENTE SEVERA QUE PUEDE DESENCADENAR ISQUEMIA MIOCÁRDICA AGUDA E INFARTO.',
      contraindications: [
        'Embarazo confirmado o sospechado y lactancia materna',
        'Varones con parejas femeninas embarazadas',
        'Hemoglobinopatías preexistentes (talasemia, drepanocitosis)',
        'Insuficiencia renal moderada a grave (ClCr <50 mL/min)',
        'Cardiopatía isquémica severa o inestable'
      ],
      adverseEffects: {
        frequent: ['Anemia hemolítica extravascular dosis-dependiente (descenso de hemoglobina en 2 a 3 g/dL en las primeras semanas)', 'Astenia intensa, cefalea y mareos', 'Tos e irritación respiratoria'],
        moderate: ['Hiperuricemia por destrucción eritrocitaria', 'Prurito y sequedad cutánea', 'Insomnio y labilidad emocional'],
        severe: ['Infarto agudo de miocardio desencadenado por anemia hemolítica brusca', 'Malformaciones fetales congénitas graves o muerte fetal intrauterina', 'Broncoespasmo agudo con la vía aerosol']
      },
      pregnancyCategory: 'X',
      lactationSafety: 'Contraindicado de forma absoluta: Riesgo mutágeno y teratógeno letal.'
    },
    interactions: [
      { interactingDrug: 'Zidovudina (AZT)', severity: 'Grave', clinicalEffect: 'Antagonismo mutuo de fosforilación intracelular y potenciación sinérgica de anemia aplásica severa mortal.', recommendation: 'Contraindicada la administración conjunta.' },
      { interactingDrug: 'Didanosina', severity: 'Grave', clinicalEffect: 'Aumento masivo de niveles intracelulares de didanosina con pancreatitis fulminante y acidosis láctica.', recommendation: 'Contraindicación absoluta.' }
    ],
    monitoringParameters: ['Hemograma completo con hemoglobina y hematocrito semanal al inicio y luego mensual', 'Test de embarazo mensual durante y hasta 6 meses post-tratamiento', 'Ácido úrico sérico', 'Electrocardiograma en pacientes coronarios'],
    storageConditions: 'Conservar por debajo de 25 °C en envase herméticamente cerrado.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'amantadina',
    genericName: "Amantadina",
    commercialNames: ["PK-Merz", "Kinestrel", "Antiflu-des", "Rosel"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiPd-dIDBB3CDbKJyyev4slrDPD_fzIjVpMK1h1qRdBjBS7ea8TnjoKiZ&s=10",
    imageAlt: "Amantadina - Presentación farmacológica",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiPd-dIDBB3CDbKJyyev4slrDPD_fzIjVpMK1h1qRdBjBS7ea8TnjoKiZ&s=10", "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/959367_A_1280_AL.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fw8rrmK4oYmjnjJh6d4XikRu4H13rNNoY-1X9KSGnMarQDkQY11LdAQh&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8p7qE_QwrT5MYvoKhaSsGqqYJHuzlPf4-uAOaB1diMhfvMATpXjYGS8I&s=10"],
    atcCode: 'N04BB01',
    anatomicalSystem: '4.4 Antivirales',
    therapeuticClass: 'Antiviral bloqueador del canal M2 del virus de la gripe A y antiparkinsoniano dopaminérgico/antiglutamatérgico',
    description: 'Amina tricíclica sintética simétrica derivada del adamantano. Clásicamente introducida como agente antiviral selectivo frente al virus Influenza A (gripe A). En la práctica contemporánea, debido a la resistencia universal casi del 100% en las cepas circulantes de influenza, su uso principal radica en la neurología como antiparkinsoniano y modulador de discinesias inducidas por levodopa.',
    presentations: [
      { id: 'ama-1', form: 'Cápsulas y comprimidos orales', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 20, 30 y 60 cápsulas' },
      { id: 'ama-2', form: 'Solución para infusión IV (Sulfato de Amantadina - PK-Merz)', concentration: '200 mg / 500 mL', route: 'Intravenosa', packaging: 'Frasco de infusión x 500 mL' }
    ],
    mechanismOfAction: {
      summary: '1) Mecanismo Antiviral: Bloquea selectivamente el canal iónico transmembrana de protones formado por la proteína tetramérica M2 del virus Influenza A. Al impedir la entrada de iones H+ desde el endosoma al interior del virión, bloquea la acidificación requerida para la disociación de la ribonucleoproteína viral de la matriz proteica M1 (bloqueo del denudamiento o desnudamiento viral), impidiendo la replicación del ARN. 2) Mecanismo Neuroquímico: Actúa como antagonista no competitivo de baja afinidad del receptor glutamatérgico NMDA y estimula la síntesis y liberación presináptica de dopamina, inhibiendo además su recaptación neuronal.',
      molecularTarget: 'Canal iónico protónico de proteína M2 del virus Influenza A y receptores NMDA de glutamato',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 85-90% (absorción prácticamente completa). Cruza la barrera hematoencefálica.',
        halfLife: 'Aproximadamente 12 a 18 horas en adultos jóvenes (se prolonga a 24-30 horas en ancianos y hasta 10 días en anuria).',
        metabolism: 'Hepático mínimo (menos del 5-10% es acetilado)',
        elimination: 'Excreción renal casi del 100% como fármaco inalterado por filtración glomerular y secreción tubular'
      }
    },
    therapeuticIndications: [
      'Tratamiento y profilaxis de la infección por cepas sensibles del Virus Influenza A (gripe A) cuando no hay resistencia documentada',
      'Enfermedad de Parkinson idiopática y parkinsonismo posencefalítico (tratamiento de discinesias motoras inducidas por L-dopa)',
      'Alivio sintomático de la astenia y fatiga crónica en pacientes con Esclerosis Múltiple',
      'Tratamiento de reacciones extrapiramidales inducidas por neurolépticos'
    ],
    posology: {
      adultStandard: 'Antiviral en Gripe A: 100 mg cada 12 horas vía oral (o 200 mg una vez al día) durante 5 días; iniciar preferentemente en las primeras 24-48 horas del inicio de los síntomas. Enfermedad de Parkinson: 100 mg una vez al día, aumentando a 100 mg cada 12 horas (máximo 400 mg/día en dosis divididas). Crisis acinética parkinsoniana IV: 200 mg IV una o dos veces al día en infusión de 3 horas.',
      pediatricDose: 'Niños de 1 a 9 años (antiviral): 5 mg/kg/día divididos en 2 tomas (máximo 150 mg/día). Niños ≥10 años: 100 mg cada 12 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: 100 mg al día; ClCr 15-29 mL/min: 100 mg cada 48 horas.',
        severe: 'ClCr <15 mL/min o hemodiálisis: 100 mg cada 7 días (la amantadina no es dializable; alto riesgo de neurotoxicidad mortal si se acumula).'
      },
      hepaticAdjustment: 'Usar con precaución en hepatopatía grave.',
      administrationNotes: 'AJUSTAR OBLIGATORIAMENTE EN INSUFICIENCIA RENAL Y ANCIANOS: la acumulación produce psicosis tóxica aguda, alucinaciones visuales y estado confusional grave. No retirar bruscamente en parkinsonismo para evitar el síndrome neuroléptico maligno de retirada o crisis acinéticas.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE PSICOSIS TÓXICA, ALUCINACIONES AUDITIVAS/VISUALES, CONVULSIONES Y SUICIDIO. LA RETIRADA BRUSCA PUEDE PRECIPITAR CRISIS NEUROLÉPTICA MALIGNA POTENCIALMENTE MORTAL.',
      contraindications: [
        'Insuficiencia renal terminal no monitorizada',
        'Antecedentes de crisis convulsivas o epilepsia mal controlada',
        'Psicosis activa o antecedentes de depresión mayor grave',
        'Embarazo (teratogénica documentada)'
      ],
      adverseEffects: {
        frequent: ['Livedo reticularis (patrón moteado rojizo-azulado característico en piel de extremidades inferiores)', 'Edema periférico maleolar ortostático', 'Insomnio, mareos, ansiedad y pesadillas'],
        moderate: ['Alucinaciones visuales bien estructuradas y confusión mental', 'Sequedad bucal y visión borrosa (efecto anticolinérgico leve)'],
        severe: ['Psicosis tóxica aguda con delirio paranoide y agresividad', 'Convulsiones epileptiformes en pacientes susceptibles', 'Insuficiencia cardíaca congestiva descompensada']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Se excreta en leche materna y puede suprimir la lactancia por efecto dopaminérgico inhibidor de prolactina.'
    },
    interactions: [
      { interactingDrug: 'Fármacos anticolinérgicos (Biperideno, Trihexifenidilo, Atropina)', severity: 'Grave', clinicalEffect: 'Potenciación aditiva de efectos anticolinérgicos centrales con psicosis confusional aguda, retención urinaria y glaucoma.', recommendation: 'Reducir la dosis si se combinan.' },
      { interactingDrug: 'Diuréticos ahorradores (Triamtereno / Hidroclorotiazida)', severity: 'Grave', clinicalEffect: 'Disminución del aclaramiento renal de amantadina con acumulación neurotóxica grave.', recommendation: 'Evitar la asociación.' }
    ],
    monitoringParameters: ['Aclaramiento renal y creatinina para ajuste estricto de dosis', 'Examen cutáneo de piernas (vigilancia de livedo reticularis)', 'Estado mental y despistaje de ideación paranoide o alucinaciones'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco y protegido de la luz.',
    updatedAt: '2026-03-30'
  }
];
