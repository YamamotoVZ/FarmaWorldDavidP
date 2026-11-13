import { Medication } from '../../types/medication';

const VIAL_IMG = '/src/assets/images/medication_ampoule_vial_1793310913789.jpg';
const BLISTER_IMG = '/src/assets/images/medication_blister_tablets_1793310902804.jpg';

export const ANTISEPTICOS: Medication[] = [
  // ----------------------------------------------------
  // 4.1 ANTISÉPTICOS TÓPICOS
  // ----------------------------------------------------
  {
    id: 'povidona-yodada',
    genericName: 'Povidona Yodada (Iodopovidona / Polividona Yodada)',
    commercialNames: ['Betadine', 'Isodine', 'Braunol', 'Poviderm'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco de solución antiséptica dérmica de Povidona Yodada',
    atcCode: 'D08AG02',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Antiséptico y desinfectante halogenado liberador de yodo libre (yodóforo)',
    description: 'Complejo químico soluble formado por polivinilpirrolidona y yodo elemental. Actúa como reservorio yodóforo que libera lentamente yodo libre no fijado con potente actividad microbicida de amplio espectro frente a bacterias grampositivas, gramnegativas, micobacterias, esporas, hongos y virus.',
    presentations: [
      { id: 'povi-1', form: 'Solución dérmica acuosa al 10% (1% de yodo libre disponible)', concentration: '100 mg/mL', route: 'Tópica cutánea', packaging: 'Frasco con aplicador de 125 mL, 500 mL y 1000 mL' },
      { id: 'povi-2', form: 'Solución jabonosa (Scrub quirúrgico) al 7.5% - 10%', concentration: '75-100 mg/mL', route: 'Lavado quirúrgico de piel', packaging: 'Frasco dispensador de 500 mL y 1000 mL' },
      { id: 'povi-3', form: 'Solución bucofaríngea / gargarismos al 10%', concentration: '100 mg/mL (diluir para enjuagues)', route: 'Tópica bucal', packaging: 'Frasco x 125 mL' }
    ],
    mechanismOfAction: {
      summary: 'El yodo libre liberado penetra rápidamente la pared de los microorganismos y oxida grupos funcionales sulfhidrilo (-SH), aminas, fenoles e hidroxilos de proteínas enzimáticas y estructurales vitales del patógeno, además de halogenar ácidos nucleicos e inducir la precipitación y lisis bacteriana.',
      molecularTarget: 'Proteínas estructurales microbianas, enzimas respiratorias y ácidos nucleicos bacterianos',
      pharmacokinetics: {
        bioavailability: 'Mínima absorción transcutánea en piel intacta; absorción sistémica significativa de yoduro a través de quemaduras extensas, heridas abiertas o mucosas.',
        halfLife: 'Sistémica de yoduro absorbido: 2 a 3 días (eliminación tiroidea y renal).',
        metabolism: 'El yodo elemental absorbido se reduce a yoduro inorgánico sistémico',
        elimination: 'Excreción renal y captación por la glándula tiroides'
      }
    },
    therapeuticIndications: [
      'Antisepsia preoperatoria de la piel íntegra en el campo quirúrgico',
      'Lavado antiséptico de manos del personal quirúrgico (formulación espumosa)',
      'Desinfección de pequeñas heridas superficiales, escoriaciones y quemaduras menores',
      'Antisepsia de la zona de inserción de catéteres vasculares o punciones venosas'
    ],
    posology: {
      adultStandard: 'Antisepsia quirúrgica: Aplicar solución al 10% pura directamente sobre la piel limpia formando una película homogénea y dejar secar al aire durante al menos 2 a 3 minutos antes de la incisión. Curación de heridas: Aplicar con gasa estéril 1 a 2 veces al día. Gargarismos: Diluir una cucharada en medio vaso de agua tibia.',
      pediatricDose: 'Uso en niños mayores de 30 meses en áreas limitadas. CONTRAINDICADA EN RECIÉN NACIDOS Y PREMATUROS por riesgo de absorción transcutánea masiva e hipotiroidismo inducido por efecto Wolff-Chaikoff.',
      renalAdjustment: {
        normal: 'Uso tópico estándar',
        moderate: 'Evitar en superficies cruentas extensas',
        severe: 'CONTRAINDICADA en grandes quemaduras en insuficiencia renal por riesgo de acidosis metabólica e hiperosmolaridad por absorción de PEG/yodo.'
      },
      hepaticAdjustment: 'No requiere ajuste tópico.',
      administrationNotes: 'DEJAR SECAR POR COMPLETO AL AIRE (2-3 minutos): el secado potencia la actividad biocida y evita quemaduras químicas bajo electrocauterio. Retirar el exceso de solución acumulada bajo el paciente en quirófano para prevenir maceración cutánea. INCOMPATIBLE CON DERIVADOS MERCURIALES (forma yoduro de mercurio cáustico).'
    },
    safety: {
      blackBoxWarning: 'CONTRAINDICADA EN NEONATOS Y PREMATUROS DEBIDO A ABSORCIÓN TRANSCUTÁNEA MASIVA DE YODO QUE DESENCADENA HIPOTIROIDISMO NEONATAL GRAVE O BOCIO. PROHIBIDA LA ASOCIACIÓN CON MERCUROCROMO O ANTISÉPTICOS MERCURIALES.',
      contraindications: [
        'Recién nacidos y lactantes menores de 1 mes (especialmente prematuros)',
        'Hipersensibilidad al yodo o a la povidona',
        'Pacientes con disfunción tiroidea activa, bocio o adenoma tiroideo autónomo',
        'Antes o después de tratamientos o gammagrafías con yodo radiactivo (131-I)',
        'Uso simultáneo con antisépticos derivados del mercurio'
      ],
      adverseEffects: {
        frequent: ['Dermatitis de contacto irritativa o tinción marrón temporal de la piel'],
        moderate: ['Reacciones cutáneas alérgicas eritematosas pruriginosas'],
        severe: ['Hipotiroidismo o hipertiroidismo inducido por yodo (efecto Jod-Basedow)', 'Acidosis metabólica grave, hipernatremia y fallo renal tras aplicación en quemaduras >20% de superficie corporal']
      },
      pregnancyCategory: 'D',
      lactationSafety: 'Contraindicado en uso repetido: El yodo absorbido se concentra fuertemente en la leche materna causando hipotiroidismo en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Antisépticos mercuriales (Timerosal, Mercurocromo)', severity: 'Grave', clinicalEffect: 'Formación de precipitados de yoduro de mercurio altamente cáusticos y necrotizantes sobre la piel.', recommendation: 'Prohibida terminantemente la combinación.' },
      { interactingDrug: 'Litio', severity: 'Moderada', clinicalEffect: 'Efecto hipotiroideo sinérgico tras absorción sistémica repetida de yodo.', recommendation: 'Evitar curas prolongadas con povidona en pacientes con litio.' }
    ],
    monitoringParameters: ['Función tiroidea (TSH, T4 libre) si se utiliza de forma continuada en heridas', 'Integridad cutánea en zonas de apoyo'],
    storageConditions: 'Conservar por debajo de 25 °C en envase bien cerrado y al abrigo de la luz.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'hipoclorito-sodico',
    genericName: 'Hipoclorito Sódico (Solución de Dakin / Cloro Líquido)',
    commercialNames: ['Solución de Dakin', 'Amukina', 'Hypochlorite Sodique Braun', 'Milton'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Solución desinfectante de Hipoclorito Sódico diluido',
    atcCode: 'D08AX07',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Antiséptico y desinfectante clorado oxidante de amplio espectro',
    description: 'Compuesto clorado oxidante soluble que genera ácido hipocloroso (HOCl). En formulaciones diluidas y tamponadas (solución de Dakin al 0.05% - 0.5%) actúa como antiséptico y agente de desbridamiento químico selectivo de tejido desvitalizado en heridas fétidas y úlceras crónicas colonizadas por biopelículas bacterianas.',
    presentations: [
      { id: 'hipo-1', form: 'Solución tópica diluida tamponada (Solución de Dakin 0.25% - 0.5%)', concentration: '2.5 mg/mL (0.25%) a 5 mg/mL (0.5%) cloro activo', route: 'Tópica en lavado e irrigación', packaging: 'Frasco opaco de 500 mL y 1000 mL' },
      { id: 'hipo-2', form: 'Solución concentrada para antisepsia y desinfección ambiental (Amukina 1.15%)', concentration: '11.5 mg/mL', route: 'Tópica diluida y desinfección', packaging: 'Frasco de 500 mL' }
    ],
    mechanismOfAction: {
      summary: 'En solución acuosa genera ácido hipocloroso no disociado (HOCl), molécula neutra de bajo peso molecular que penetra con facilidad las membranas celulares y destruye los complejos de biopelículas bacterianas (biofilms). Oxida irreversiblemente enlaces peptídicos, grupos tiol esenciales y desnaturaliza las nucleoproteínas del microorganismo, ejerciendo además una acción lítica sobre el tejido colágeno desvitalizado y necrótico.',
      molecularTarget: 'Proteínas de pared, enzimas metabólicas respiratorias y matriz de biofilm bacteriano',
      pharmacokinetics: {
        bioavailability: 'Acción estrictamente local oxidativa. No se absorbe sistémicamente.',
        halfLife: 'Inmediata tisular; se consume rápidamente en presencia de materia orgánica o pus.',
        metabolism: 'Neutralización inmediata por proteínas tisulares a cloruro sódico inorgánico y agua',
        elimination: 'No aplica eliminación sistémica'
      }
    },
    therapeuticIndications: [
      'Irrigación y desbridamiento químico de heridas sépticas fétidas, escaras por presión y úlceras diabéticas con tejido esfacelar',
      'Desinfección de conductos radiculares en endodoncia odontológica (disolución de restos pulpares)',
      'Desinfección de piel y agua en emergencias sanitarias',
      'Antisepsia de heridas traumáticas contaminadas por anaerobios y Pseudomonas aeruginosa'
    ],
    posology: {
      adultStandard: 'Heridas y úlceras colonizadas: Lavar o irrigar con solución de Dakin al 0.125% - 0.25% durante 5 a 10 minutos, protegiendo los bordes cutáneos perilesionales con pasta de zinc o vaselina. Retirar y enjuagar con suero fisiológico estéril tras el lavado. Frecuencia: 1 a 2 veces al día por periodos breves (3 a 5 días) hasta lograr lecho limpio.',
      pediatricDose: 'Uso en apósitos húmedos con formulación diluida al 0.125% por tiempo limitado.',
      renalAdjustment: {
        normal: 'Uso tópico sin absorción sistémica',
        moderate: 'Sin precauciones especiales sistémicas',
        severe: 'Sin precauciones especiales sistémicas'
      },
      hepaticAdjustment: 'No requiere ajuste.',
      administrationNotes: 'NUNCA MEZCLAR CON ÁCIDOS NI AMONÍACO (libera gas cloro altamente tóxico y letal para las vías respiratorias). Proteger meticulosamente la piel sana circundante para evitar maceración o dermatitis química. No mantener en heridas limpias con tejido de granulación activo (puede retardar la cicatrización).'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDA LA INYECCIÓN ENDOVENOSA O LA MEZCLA CON ÁCIDOS. LA MEZCLA CON ÁCIDOS PRODUCE LIBERACIÓN INMEDIATA DE GAS CLORO CAÚSTICO LETAL.',
      contraindications: [
        'Hipersensibilidad al cloro o al hipoclorito sódico',
        'Heridas limpias en fase de granulación activa y epitelización (citotóxico para queratinocitos y fibroblastos)',
        'Aplicación en cavidades cerradas o articulaciones sin drenaje libre'
      ],
      adverseEffects: {
        frequent: ['Sensación de ardor o escozor local transitorio', 'Olor a cloro característico'],
        moderate: ['Irritación y maceración de la piel perilesional sana si no se protege adecuadamente'],
        severe: ['Necrosis tisular por uso a concentraciones excesivas (>0.5%)', 'Dermatitis química severa', 'Edema pulmonar por inhalación accidental de vapores de cloro']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro en aplicaciones tópicas localizadas con enjuague posterior.'
    },
    interactions: [
      { interactingDrug: 'Sustancias ácidas (Ácido acético, limpiadores ácidos)', severity: 'Grave', clinicalEffect: 'Reacción química exotérmica con liberación de vapores de gas cloro extremadamente irritantes y asfixiantes.', recommendation: 'Prohibida la manipulación conjunta.' },
      { interactingDrug: 'Peróxido de hidrógeno', severity: 'Moderada', clinicalEffect: 'Neutralización mutua inmediata y violenta con liberación rápida de gas oxígeno.', recommendation: 'No asociar en la misma herida.' }
    ],
    monitoringParameters: ['Evolución del lecho ulceroso (aparición de tejido de granulación para suspender)', 'Signos de irritación perilesional'],
    storageConditions: 'Conservar en frascos opacos oscuros de polietileno protegidos de la luz y el calor excesivo (se descompone con rapidez).',
    updatedAt: '2026-03-30'
  },
  {
    id: 'benzalconio-benzetonio',
    genericName: 'Cloruro de Benzalconio y Benzetonio',
    commercialNames: ['Bactine', 'Merthiolate Antiséptico Incoloro', 'Dettol Cloruro', 'Bacti-Cide'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Solución spray antiséptica incolora de Cloruro de Benzalconio',
    atcCode: 'D08AJ01',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Antiséptico catiónico surfactante de amonio cuaternario',
    description: 'Compuestos amónicos cuaternarios tensioactivos catiónicos de acción antiséptica. Actúan alterando la permeabilidad osmótica de la membrana citoplasmática bacteriana. Muy utilizados en antisepsia de heridas superficiales sin producir dolor, picor ni manchas en la piel.',
    presentations: [
      { id: 'benz-1', form: 'Solución dérmica / Spray al 0.13% - 0.2%', concentration: '1.3 a 2 mg/mL', route: 'Tópica cutánea', packaging: 'Frasco atomizador de 120 mL y 250 mL' },
      { id: 'benz-2', form: 'Tintura o solución tópica al 1:1000 (0.1%)', concentration: '1 mg/mL', route: 'Tópica', packaging: 'Frasco x 500 mL' }
    ],
    mechanismOfAction: {
      summary: 'La carga catiónica positiva de la molécula de amonio cuaternario se une electrostáticamente a los grupos fosfato aniónicos con carga negativa de los fosfolípidos de la membrana celular bacteriana. La cadena alquílica hidrófoba se inserta en la bicapa lipídica, desorganizando su arquitectura molecular, provocando poros y la fuga masiva de metabolitos esenciales intracelulares (potasio, ATP) y la lisis celular.',
      molecularTarget: 'Bicapa fosfolipídica y membrana citoplasmática bacteriana',
      pharmacokinetics: {
        bioavailability: 'Acción tópica; mínima absorción a través de la piel íntegra.',
        halfLife: 'No aplica (acción local).',
        metabolism: 'No se metaboliza en la piel',
        elimination: 'Se inactiva en contacto con materia orgánica y jabones aniónicos'
      }
    },
    therapeuticIndications: [
      'Antisepsia de heridas menores, raspones, raspaduras y quemaduras superficiales no abiertas',
      'Desinfección de piel previa a inyecciones o punciones capilares menores',
      'Conservante antimicrobiano en colirios oftálmicos y aerosoles nasales'
    ],
    posology: {
      adultStandard: 'Heridas superficiales: Pulverizar o aplicar con gasa limpia sobre el área afectada 1 a 3 veces al día según sea necesario tras limpiar la suciedad visible con agua corriente.',
      pediatricDose: 'Niños mayores de 2 años: Aplicar 1 a 2 veces al día en raspones menores.',
      renalAdjustment: {
        normal: 'Sin ajuste',
        moderate: 'Sin ajuste',
        severe: 'Sin ajuste'
      },
      hepaticAdjustment: 'Sin ajuste.',
      administrationNotes: 'INCOMPATIBLE CON JABONES COMUNES: los jabones son tensioactivos aniónicos que neutralizan e inactivan instantáneamente la actividad antiséptica del benzalconio. Aclarar perfectamente los restos de jabón con agua antes de aplicar el producto.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDO EL CONTACTO CON EL OÍDO MEDIO EN CASO DE SOSPECHA DE PERFORACIÓN TIMPÁNICA POR RIESGO DE OTOTOXICIDAD COCLEOVESTIBULAR SEVERA.',
      contraindications: [
        'Hipersensibilidad a compuestos de amonio cuaternario',
        'Uso en el oído medio o con membrana timpánica perforada',
        'Aplicación en heridas profundas, mordeduras de animales o quemaduras graves de tercer grado'
      ],
      adverseEffects: {
        frequent: ['Sensación leve y transitoria de hormigueo'],
        moderate: ['Dermatitis de contacto alérgica o eccema de contacto'],
        severe: ['Ototoxicidad coclear e hipoacusia neurosensorial permanente si alcanza el oído interno a través de perforación timpánica']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Seguro en aplicaciones superficiales cutáneas breves.'
    },
    interactions: [
      { interactingDrug: 'Jabones convencionales aniónicos', severity: 'Moderada', clinicalEffect: 'Neutralización inmediata de la eficacia antimicrobiana del antiséptico.', recommendation: 'Enjuagar meticulosamente todo residuo de jabón antes de aplicar.' }
    ],
    monitoringParameters: ['Signos de dermatitis de contacto o sensibilización cutánea'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'peroxido-hidrogeno',
    genericName: 'Peróxido de Hidrógeno (Agua Oxigenada al 3% - 10 Volúmenes)',
    commercialNames: ['Agua Oxigenada 10 Vol.', 'Cikaderma', 'Forex Agua Oxigenada'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Frasco de plástico opaco de Peróxido de Hidrógeno al 3%',
    atcCode: 'D08AX01',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Antiséptico oxidante y agente hemostático capilar efervescente',
    description: 'Solución acuosa oxidante de acción mecánica y antimicrobiana rápida pero breve. Al entrar en contacto con la enzima tisular catalasa presente en sangre y tejidos, se descompone velozmente en agua y oxígeno naciente gaseoso, produciendo una abundante efervescencia que desincrusta detritos celulares, bacterias anaerobias y favorece la hemostasia capilar.',
    presentations: [
      { id: 'per-1', form: 'Solución tópica al 3% (correspondiente a 10 volúmenes de oxígeno activo)', concentration: '30 mg/mL', route: 'Tópica dérmica y gingival', packaging: 'Frasco opaco de 250 mL y 500 mL' }
    ],
    mechanismOfAction: {
      summary: 'Ejerce una doble acción: 1) Química oxidativa: produce radicales libres hidroxilo altamente reactivos que dañan lípidos de membrana y ADN microbiano de patógenos anaerobios obligados carentes de catalasa; 2) Mecánica desbridante: la degradación inmediata catalizada por catalasa libera millones de microburbujas de oxígeno gaseoso que despejan mecánicamente detritos celulares, pus y cuerpos extraños del lecho de la lesión.',
      molecularTarget: 'Catalasa tisular, radicales libres oxidantes y microorganismos anaerobios',
      pharmacokinetics: {
        bioavailability: 'No absorbible; degradación enzimática instantánea en contacto con tejido orgánico o hemoglobina.',
        halfLife: 'Segundos a minutos in situ.',
        metabolism: 'Conversión rápida por catalasas y peroxidasas en agua (H2O) y oxígeno (O2)',
        elimination: 'Gaseosa y acuosa in situ'
      }
    },
    therapeuticIndications: [
      'Limpieza inicial y desbridamiento mecánico de heridas agudas sucias con tierra, detritos y riesgo de tétanos (anaerobios)',
      'Hemostasia de hemorragias capilares superficiales (epistaxis anterior en gasa empapada)',
      'Enjuagues bucales en gingivitis úlcero-necrotizante aguda (GUNA / boca de trinchera)'
    ],
    posology: {
      adultStandard: 'Limpieza de heridas: Aplicar directamente sobre la lesión o mediante gasa estéril la solución al 3% pura o diluida al 50% con suero fisiológico; dejar efervescer 1-2 minutos y enjuagar abundantemente con solución salina estéril. Enjuagues bucales: diluir a partes iguales con agua tibia y escupir (no tragar).',
      pediatricDose: 'Aplicación puntual en raspaduras; enjuagar posteriormente con agua estéril.',
      renalAdjustment: {
        normal: 'Sin ajuste',
        moderate: 'Sin ajuste',
        severe: 'Sin ajuste'
      },
      hepaticAdjustment: 'Sin ajuste.',
      administrationNotes: 'PROHIBIDA LA IRRIGACIÓN A PRESIÓN EN CAVIDADES CERRADAS O FÍSTULAS PROFUNDAS SIN RETORNO LIBRE: el oxígeno liberado a presión puede penetrar en los vasos sanguíneos y producir embolia gaseosa arterial o venosa mortal.'
    },
    safety: {
      blackBoxWarning: 'NUNCA INSTILAR A PRESIÓN EN CAVIDADES QUIRÚRGICAS CERRADAS O HERIDAS PROFUNDAS; EXISTE RIESGO COMPROBADO DE EMBOLIA GASEOSA MASIVA Y PARADA CARDÍACA.',
      contraindications: [
        'Instilación en cavidades corporales cerradas (espacio retroperitoneal, mediastino, pleura, articulaciones cerradas)',
        'Heridas quirúrgicas limpias en fase de epitelización (destruye los nuevos capilares y fibroblastos)'
      ],
      adverseEffects: {
        frequent: ['Sensación punzante de escozor y palidez temporal por vasoconstricción y microburbujas en el lecho'],
        moderate: ['Hipertrofia reversible de papilas linguales (lengua negra vellosa) con enjuagues repetidos'],
        severe: ['Embolia gaseosa sistémica (oxígeno intravascular) con colapso cardiovascular o ictus', 'Enfisema subcutáneo a tensión']
      },
      pregnancyCategory: 'A',
      lactationSafety: 'Seguro en aplicaciones tópicas superficiales.'
    },
    interactions: [
      { interactingDrug: 'Agentes reductores y yoduros', severity: 'Moderada', clinicalEffect: 'Reacción de oxidación vigorosa con desactivación mutua.', recommendation: 'Evitar mezcla en la misma herida.' }
    ],
    monitoringParameters: ['Aparición de signos de enfisema subcutáneo (crepitación) o dolor súbito'],
    storageConditions: 'Conservar en frasco opaco a temperatura inferior a 25 °C protegido de la luz y el calor excesivo.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'clorhexidina',
    genericName: 'Clorhexidina Digluconato',
    commercialNames: ['Hibiscrub', 'Bactiseptic', 'Cristalmina', 'Corsodyl', 'Peridont'],
    imageUrl: VIAL_IMG,
    imageAlt: 'Solución acuosa y jabonosa de Clorhexidina Digluconato al 2%',
    atcCode: 'D08AC02',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Antiséptico bisbiguanida catiónico de amplio espectro y alta sustantividad',
    description: 'Antiséptico de referencia del grupo de las bisbiguanidas catiónicas. Posee una sustantividad cutánea excepcional: se une fuertemente a los estratos córneos de la piel ejerciendo una actividad bactericida residual persistente de hasta 6 a 24 horas tras su aplicación. Fármaco de primera línea para la prevención de infecciones del torrente sanguíneo asociadas a catéteres y antisepsia quirúrgica.',
    presentations: [
      { id: 'clor-1', form: 'Solución alcohólica al 2% (clorhexidina 2% en alcohol isopropílico al 70%)', concentration: '20 mg/mL en alcohol', route: 'Tópica cutánea preoperatoria', packaging: 'Aplicadores estériles con esponja de 10.5 mL y 26 mL' },
      { id: 'clor-2', form: 'Solución acuosa al 1% o 2%', concentration: '10 mg/mL y 20 mg/mL', route: 'Tópica dérmica en heridas', packaging: 'Frasco con pulverizador de 125 mL' },
      { id: 'clor-3', form: 'Colutorio bucal al 0.12% y 0.2%', concentration: '1.2 mg/mL y 2 mg/mL', route: 'Enjuague bucal', packaging: 'Frasco de 200 mL y 500 mL' }
    ],
    mechanismOfAction: {
      summary: 'La molécula dicatiónica de clorhexidina interactúa rápidamente con las cargas negativas de los grupos fosfato de los lipopolisacáridos bacterianos. Se adsorbe sobre la pared y desestabiliza la membrana plasmática celular; a bajas concentraciones provoca la pérdida de iones potasio y fósforo (efecto bacteriostático), mientras que a concentraciones antisépticas habituales precipita irreversiblemente el citoplasma y los ácidos nucleicos bacterianos, causando muerte celular rápida.',
      molecularTarget: 'Bicapa lipídica y membrana citoplasmática bacteriana',
      pharmacokinetics: {
        bioavailability: 'Absorción cutánea prácticamente nula a través de piel íntegra. Absorción oral insignificante (<1%).',
        halfLife: 'Sustantividad tisular: permanece unida a la queratina de la piel y mucosas con efecto activo hasta por 24 a 48 horas.',
        metabolism: 'No se metaboliza tópicamente',
        elimination: 'Excreción fecal de la fracción deglutida (>95% inalterada)'
      }
    },
    therapeuticIndications: [
      'Antisepsia de la piel en la inserción y cura de catéteres venosos centrales y arteriales (reduce bacteriemias)',
      'Preparación del campo quirúrgico preoperatorio (clorhexidina alcohólica al 2%)',
      'Lavado quirúrgico de manos del equipo médico y lavado de pacientes en UCI para reducir colonización por SAMR',
      'Antisepsia bucal y tratamiento coadyuvante de gingivitis, periodontitis y profilaxis de neumonía asociada a ventilación mecánica'
    ],
    posology: {
      adultStandard: 'Inserción de catéteres / Quirúrgico: Aplicar clorhexidina al 2% en alcohol al 70% mediante fricción repetida durante al menos 30 segundos; DEJAR SECAR COMPLETAMENTE AL AIRE durante 2 minutos antes de puncionar o realizar incisión. Colutorio bucal: Enjuagar la boca con 15 mL al 0.12% durante 1 minuto dos veces al día tras cepillarse los dientes (enjuagar antes con agua para eliminar restos de pasta dental).',
      pediatricDose: 'Usar con precaución formulación acuosa en lactantes mayores. CONTRAINDICADA la formulación alcohólica en recién nacidos de muy bajo peso (<1000 g) por riesgo de quemaduras químicas cutáneas.',
      renalAdjustment: {
        normal: 'Sin ajuste',
        moderate: 'Sin ajuste',
        severe: 'Sin ajuste'
      },
      hepaticAdjustment: 'Sin ajuste.',
      administrationNotes: 'CONTRAINDICADA EN CIRUGÍA DE OÍDO MEDIO Y NEUROCIRUGÍA (gravemente ototóxica y neurotóxica). Proteger los ojos: el contacto directo con la córnea produce queratitis ulcerativa y opacidad corneal irreversible. Enjuagar la boca con agua tras el dentífrico antes de usar el colutorio, ya que el laurilsulfato sódico de las pastas inactiva la clorhexidina.'
    },
    safety: {
      blackBoxWarning: 'PROHIBIDO EL CONTACTO CON EL OÍDO MEDIO O INTERNO (CAUSA SORDERA NEUROSENSORIAL PERMANENTE POR OTOTOXICIDAD DIRECTA) Y CON EL TEJIDO NERVIOSO/MENINGES EN NEUROCIRUGÍA (NEUROTOXICIDAD SEVERA).',
      contraindications: [
        'Intervenciones con riesgo de contacto con meninges o tejido cerebral',
        'Cirugías otológicas o pacientes con tímpano perforado',
        'Contacto directo con los ojos (toxicidad corneal irreversible)',
        'Hipersensibilidad alérgica conocida a la clorhexidina'
      ],
      adverseEffects: {
        frequent: ['Tinción marrón superficial extrínseca de dientes, empastes y dorso de la lengua (con uso bucal prolongado)', 'Alteración transitoria del gusto (disgeusia)'],
        moderate: ['Dermatitis de contacto irritativa en personas de piel sensible'],
        severe: ['Anafilaxia y shock anafiláctico perioperatorio grave mediado por IgE', 'Sordera neurosensorial bilateral por entrada accidental al oído medio', 'Lesión endotelial corneal con ceguera por contacto ocular directo']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Seguro: Compatible con la lactancia en uso tópico.'
    },
    interactions: [
      { interactingDrug: 'Laurilsulfato de sodio (detergente común en pastas dentales)', severity: 'Moderada', clinicalEffect: 'Inactivación del compuesto catiónico por el tensoactivo aniónico.', recommendation: 'Esperar al menos 30 minutos entre el cepillado dental y el uso del colutorio.' }
    ],
    monitoringParameters: ['Reacciones anafilactoides perioperatorias', 'Coloración del esmalte dental en uso bucal prolongado'],
    storageConditions: 'Conservar a temperatura ambiente protegida del calor excesivo y de la luz solar.',
    updatedAt: '2026-03-30'
  },

  // ----------------------------------------------------
  // ORALES / URINARIOS & FLUOROQUINOLONAS
  // ----------------------------------------------------
  {
    id: 'nitrofurantoina',
    genericName: 'Nitrofurantoína Macrocristalina',
    commercialNames: ['Furadantina', 'Macrodantina', 'Macrobid', 'Furantoína'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Cápsulas de Nitrofurantoína macrocristalina en blíster',
    atcCode: 'J01XE01',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Antibacteriano y antiséptico urinario nitrofuranico bactericida de vías bajas',
    description: 'Antiséptico y antimicrobiano urinario oral sintético del grupo de los nitrofuranos. Se absorbe rápidamente y se concentra con altísima selectividad en la luz vesical y orina, careciendo de niveles tisulares parenquimatosos renales o sistémicos significativos. Es el fármaco de primera línea de elección en guías internacionales para la cistitis aguda no complicada.',
    presentations: [
      { id: 'nit-1', form: 'Cápsulas de cristales macrocristalinos', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 40 cápsulas' },
      { id: 'nit-2', form: 'Suspensión oral', concentration: '25 mg / 5 mL', route: 'Oral', packaging: 'Frasco de 120 mL' }
    ],
    mechanismOfAction: {
      summary: 'Es reducida por flavoproteínas nitrorreductasas bacterianas dentro de la célula a intermediarios electrofílicos muy inestables y reactivos. Estos metabolitos reactivos atacan y dañan simultáneamente el ADN ribosómico bacteriano, inhiben la síntesis proteica en los ribosomas, la síntesis de la pared celular y el ciclo respiratorio de Krebs. Su acción multimodal hace sumamente infrecuente el desarrollo de resistencias bacterianas cromosómicas.',
      molecularTarget: 'Nitrorreductasas bacterianas y daño multisitio a ribosomas y ADN bacteriano',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 80%; los alimentos aumentan sustancialmente su absorción y biodisponibilidad y mejoran la tolerancia gástrica.',
        halfLife: 'Muy corta: 20 a 60 minutos en plasma.',
        metabolism: 'Hepático y tisular extenso (60-70%) a metabolitos inactivos',
        elimination: 'Excreción renal 30-40% en forma inalterada rápida por filtración glomerular, alcanzando concentraciones urinarias masivas (50-200 mcg/mL)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de primera línea de la cistitis aguda no complicada en mujeres',
      'Profilaxis a largo plazo de infecciones urinarias recidivantes o recurrentes',
      'Tratamiento de bacteriuria asintomática en el segundo y tercer trimestre inicial del embarazo'
    ],
    posology: {
      adultStandard: 'Cistitis aguda no complicada: 100 mg cada 12 horas (formulación de liberación modificada) o 50-100 mg cada 6 horas con las comidas durante 5 días. Profilaxis de ITUs recurrentes: 50 a 100 mg una vez al día por la noche al acostarse durante 3 a 6 meses.',
      pediatricDose: 'Niños >3 meses: 5 a 7 mg/kg/día divididos cada 6 horas (máximo 100 mg cada 6h). Profilaxis: 1 a 2 mg/kg/día.',
      renalAdjustment: {
        normal: 'TFG >45 mL/min: Dosis completa estándar.',
        moderate: 'TFG 30-44 mL/min: Usar solo si no existen alternativas con estrecha vigilancia.',
        severe: 'TFG <30 mL/min: CONTRAINDICADA DE FORMA ABSOLUTA (no alcanza niveles terapéuticos en la orina y se acumulan metabolitos sistémicos neurotóxicos).'
      },
      hepaticAdjustment: 'Contraindicada en disfunción hepática severa o antecedentes de ictericia/hepatitis colestásica previa inducida por el fármaco.',
      administrationNotes: 'TOMAR SIEMPRE CON ALIMENTOS O UN VASO DE LECHE: duplica la absorción y disminuye las náuseas. Advertir al paciente que tiñe la orina de un color amarillo oscuro o marrón parduzco inofensivo. CONTRAINDICADA EN EL EMBARAZO A TÉRMINO (semanas 38-42) por inducir anemia hemolítica en el recién nacido.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE TOXICIDAD PULMONAR SEVERA (FIBROSIS PULMONAR INTERSTICIAL IRREVERSIBLE EN USO CRÓNICO PROLONGADO) Y HEPATOTOXICIDAD MORTAL. CONTRAINDICADA EN EL EMBARAZO A TÉRMINO POR ANEMIA HEMOLÍTICA NEONATAL.',
      contraindications: [
        'Insuficiencia renal moderada a grave (TFG <30 mL/min)',
        'Embarazo a término (semanas 38 a 42) y durante el trabajo de parto',
        'Lactantes menores de 1 mes (riesgo de hemólisis por inmadurez de la glucosa-6-fosfato deshidrogenasa)',
        'Deficiencia congénita de Glucosa-6-Fosfato Deshidrogenasa (G6PD)',
        'Antecedentes de neumonitis o hepatitis colestásica inducida por nitrofurantoína'
      ],
      adverseEffects: {
        frequent: ['Náuseas, anorexia y vómitos', 'Coloración pardo-oscura inofensiva de la orina', 'Cefalea leve'],
        moderate: ['Neuropatía periférica sensitivo-motora distal grave e irreversible en uso continuado', 'Reacciones de hipersensibilidad pulmonar aguda'],
        severe: ['Fibrosis pulmonar intersticial crónica insidiosa con disnea y tos tras meses de uso', 'Hepatitis autoinmune fulminante o necrosis hepática subaguda', 'Anemia hemolítica en déficit de G6PD']
      },
      pregnancyCategory: 'B',
      lactationSafety: 'Precaución: Compatible salvo si el lactante es menor de 1 mes o padece déficit de G6PD.'
    },
    interactions: [
      { interactingDrug: 'Antiácidos con Trisilicato de Magnesio', severity: 'Moderada', clinicalEffect: 'Adsorben la nitrofurantoína y reducen drásticamente su biodisponibilidad urinaria.', recommendation: 'Separar las tomas al menos 2 horas.' },
      { interactingDrug: 'Probenecid', severity: 'Moderada', clinicalEffect: 'Disminuye la secreción tubular renal de nitrofurantoína, reduciendo su eficacia en vejiga y aumentando toxicidad sistémica.', recommendation: 'Evitar la asociación.' }
    ],
    monitoringParameters: ['Auscultación pulmonar y radiografía de tórax si aparecen síntomas respiratorios', 'Enzimas hepáticas periódicas en profilaxis >3 meses', 'Aparición de parestesias distales en pies/manos'],
    storageConditions: 'Conservar por debajo de 25 °C en lugar seco y protegido de la luz directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'acido-nalidixico',
    genericName: 'Ácido Nalidíxico (Fluoroquinolona de 1ª Generación)',
    commercialNames: ['Wintomylon', 'Nalix', 'NegGram'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Comprimidos orales de Ácido Nalidíxico',
    atcCode: 'J01MB02',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Quinolona no fluorada de 1ª generación / antiséptico urinario',
    description: 'Prototipo histórico de las quinolonas sintéticas de primera generación (no fluorada). De espectro antibacteriano limitado exclusivamente a enterobacterias gramnegativas urinarias y rápida aparición de resistencia cromosómica.',
    presentations: [
      { id: 'nal-1', form: 'Comprimidos orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos' },
      { id: 'nal-2', form: 'Suspensión oral', concentration: '250 mg / 5 mL', route: 'Oral', packaging: 'Frasco de 120 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la subunidad A de la enzima bacteriana ADN girasa (topoisomerasa II bacteriana), bloqueando la transcripción y replicación del ADN genómico bacteriano. No posee el átomo de flúor en posición 6 característico de las fluoroquinolonas modernas, lo que le confiere una potencia intrínseca sensiblemente menor y nula actividad frente a Pseudomonas o gérmenes grampositivos.',
      molecularTarget: 'Subunidad A de la ADN girasa bacteriana (Topoisomerasa II)',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 90%; alta concentración en orina pero muy baja penetración tisular.',
        halfLife: 'Aproximadamente 1.5 a 2.5 horas.',
        metabolism: 'Hepático rápido a ácido hidroxi-nalidíxico (activo) y conjugados glucurónidos',
        elimination: 'Excreción urinaria rápida (80%)'
      }
    },
    therapeuticIndications: [
      'Tratamiento de infecciones agudas no complicadas del tracto urinario inferior causadas por enterobacterias gramnegativas sensibles (E. coli, Proteus, Klebsiella)'
    ],
    posology: {
      adultStandard: '1 g (2 comprimidos de 500 mg) cada 6 horas durante 7 a 14 días. En tratamiento prolongado puede reducirse a 500 mg cada 6 horas.',
      pediatricDose: 'Niños >3 meses: 55 mg/kg/día divididos en 4 tomas cada 6 horas.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 20-50 mL/min: Usar con precaución.',
        severe: 'ClCr <20 mL/min: CONTRAINDICADO por acumulación tóxica e ineficacia urinaria.'
      },
      hepaticAdjustment: 'Usar con precaución en hepatopatía grave.',
      administrationNotes: 'Administrar preferentemente 1 hora antes de las comidas. Evitar la exposición a la luz solar directa durante el tratamiento debido a fotosensibilidad cutánea intensa.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE HIPERTENSIÓN ENDOCRANEAL BENIGNA (PSEUDOTUMOR CEREBRI) EN LACTANTES Y NIÑOS PEQUEÑOS CON ABOMBAMIENTO DE LA FONTANELA. RIESGO DE CONVULSIONES.',
      contraindications: [
        'Insuficiencia renal grave (ClCr <20 mL/min)',
        'Antecedentes de crisis convulsivas o epilepsia',
        'Déficit congénito de glucosa-6-fosfato deshidrogenasa',
        'Lactantes menores de 3 meses'
      ],
      adverseEffects: {
        frequent: ['Náuseas, vómitos y dolor abdominal', 'Fotosensibilidad cutánea intensa con ampollas por sol'],
        moderate: ['Cefalea y trastornos visuales transitorios (diplopía, cromatopsia)', 'Mareo y vértigo'],
        severe: ['Hipertensión intracraneal benigna (abombamiento fontanelar en niños, edema de papila)', 'Convulsiones en epilépticos', 'Anemia hemolítica en déficit de G6PD']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Precaución: Pasa a la leche materna; no recomendado.'
    },
    interactions: [
      { interactingDrug: 'Anticoagulantes orales (Warfarina)', severity: 'Grave', clinicalEffect: 'Desplazamiento de la warfarina de sus sitios de unión con prolongación peligrosa del INR y hemorragia.', recommendation: 'Monitorizar INR y reducir dosis de anticoagulante.' }
    ],
    monitoringParameters: ['Signos neurológicos (cefalea, vómitos, abombamiento fontanelar)', 'Función renal'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'ciprofloxacino',
    genericName: 'Ciprofloxacino Clorhidrato (Fluoroquinolona de 2ª Generación)',
    commercialNames: ['Cipro', 'Baycip', 'Ciproxina', 'Rigoran'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos recubiertos de Ciprofloxacino de 500 mg',
    atcCode: 'J01MA02',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Fluoroquinolona de 2ª generación con máxima potencia frente a gramnegativos y Pseudomonas',
    description: 'Fluoroquinolona de segunda generación de referencia mundial. Posee una extraordinaria potencia bactericida frente a bacterias aerobias gramnegativas entéricas y es la única quinolona oral con excelente cobertura demostrada frente a Pseudomonas aeruginosa, además de penetración tisular y prostática masiva.',
    presentations: [
      { id: 'cip-1', form: 'Comprimidos recubiertos con película', concentration: '250 mg, 500 mg y 750 mg', route: 'Oral', packaging: 'Caja x 10, 14 y 20 comprimidos' },
      { id: 'cip-2', form: 'Solución para infusión intravenosa', concentration: '200 mg / 100 mL y 400 mg / 200 mL', route: 'Intravenosa', packaging: 'Frascos para infusión de 100 y 200 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe de forma potente y selectiva las topoisomerasas bacterianas tipo II: la ADN girasa (predominante en bacilos gramnegativos) y la topoisomerasa IV. Impide el superenrollamiento negativo del ADN cromosómico bacteriano, estabilizando los complejos escindidos ADN-enzima, bloqueando el avance de las horquillas de replicación y causando rupturas masivas de doble cadena en el ADN con lisis bacteriana rápida.',
      molecularTarget: 'ADN girasa bacteriana (subunidades GyrA y GyrB) y Topoisomerasa IV (ParC/ParE)',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 70-80% con excelente absorción digestiva y biodisponibilidad equivalente a la vía IV.',
        halfLife: 'Aproximadamente 4 a 6 horas.',
        metabolism: 'Hepático parcial (alrededor del 15%) a metabolitos menores',
        elimination: 'Excreción predominantemente renal (40-50% inalterado) por filtración y secreción tubular, y excreción fecal/biliar (20-35%)'
      }
    },
    therapeuticIndications: [
      'Infecciones complicadas del tracto urinario y pielonefritis aguda grave',
      'Prostatitis bacteriana aguda y crónica (excelente difusión prostática)',
      'Gastroenteritis bacteriana invasiva severa (Salmonella, Shigella, Campylobacter) y fiebre tifoidea',
      'Infecciones osteoarticulares crónicas (osteomielitis) y respiratorias por Pseudomonas aeruginosa',
      'Profilaxis y tratamiento postexposición del carbunco por inhalación (Bacillus anthracis)'
    ],
    posology: {
      adultStandard: 'Infección urinaria no complicada: 250 a 500 mg cada 12 horas por 3 días. Pielonefritis aguda / Infección grave: 500 a 750 mg vía oral cada 12 horas o 400 mg IV cada 12 horas durante 7 a 14 días. Prostatitis crónica: 500 mg cada 12 horas durante 4 a 6 semanas.',
      pediatricDose: 'Uso restringido en pediatría (solo infecciones urinarias complicadas refractarias o fibrosis quística): 10 a 20 mg/kg cada 12 horas vía oral (máximo 750 mg cada 12h) o 6 a 10 mg/kg cada 8 horas IV (máximo 400 mg cada 8h).',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'ClCr 30-50 mL/min: 250 a 500 mg cada 12 horas.',
        severe: 'ClCr <30 mL/min: 250 a 500 mg cada 18 o 24 horas (o reducir dosis IV a 200 mg cada 12-24h).'
      },
      hepaticAdjustment: 'No suele requerir ajuste salvo insuficiencia hepática y renal combinada.',
      administrationNotes: 'NO TOMAR CON ANTIÁCIDOS, LECHE O SUPLEMENTOS DE CALCIO, HIERRO O ZINC: los cationes divalentes y trivalentes forman quelatos insolubles con ciprofloxacino anulando totalmente su absorción (separar tomas al menos 2 horas antes o 4 horas después). Ingerir con abundante líquido para evitar cristaluria.'
    },
    safety: {
      blackBoxWarning: 'ALERTAS FDA/EMA: RIESGO DE TENDINITIS Y ROTURA DEL TENDÓN DE AQUILES; NEUROPATÍA PERIFÉRICA PERMANENTE; DISCONFORT NEUROPSIQUIÁTRICO SEVERO; RUPTURA O DISECCIÓN DE ANEURISMA AÓRTICO; Y EMPEORAMIENTO GRAVE DE MIASTENIA GRAVIS.',
      contraindications: [
        'Antecedentes de tendinitis o rotura tendinosa previa ligada a fluoroquinolonas',
        'Miastenia gravis confirmada',
        'Coadministración simultánea con tizanidina (hipotensión extrema por CYP1A2)',
        'Hipersensibilidad a quinolonas'
      ],
      adverseEffects: {
        frequent: ['Náuseas, diarrea y malestar epigástrico', 'Cefalea y mareos leves'],
        moderate: ['Fotosensibilidad cutánea', 'Tendinopatía aquilea con dolor y tumefacción', 'Insomnio, agitación y pesadillas'],
        severe: ['Rotura bilateral del tendón de Aquiles (especialmente en >60 años y uso concomitante con corticoides)', 'Disección o aneurisma aórtico', 'Prolongación del intervalo QT y torsades de pointes', 'Colitis pseudomembranosa por Clostridioides difficile']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'No recomendado: Pasa a la leche materna con potencial artropatía en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Antiácidos, Calcio, Hierro, Magnesio, Sucralfato', severity: 'Grave', clinicalEffect: 'Quelación química masiva en el lumen digestivo con pérdida casi total de la absorción oral.', recommendation: 'Separar la administración al menos 2 horas antes o 4-6 horas después.' },
      { interactingDrug: 'Teofilina', severity: 'Grave', clinicalEffect: 'Inhibe potentemente el CYP1A2 duplicando los niveles séricos de teofilina con convulsiones e intoxicación letal.', recommendation: 'Reducir la dosis de teofilina a la mitad y monitorear teofilinemia.' },
      { interactingDrug: 'Corticoides sistémicos (Dexametasona, Prednisona)', severity: 'Grave', clinicalEffect: 'Riesgo sinérgico exponencial de tendinitis y rotura del tendón de Aquiles.', recommendation: 'Evitar terminantemente la coadministración.' }
    ],
    monitoringParameters: ['Aparición de dolor, inflamación o edema en tendón de Aquiles (suspender inmediatamente)', 'Electrocardiograma (intervalo QTc)', 'Función renal', 'Signos neurológicos periféricos'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz y la humedad.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'levofloxacino',
    genericName: 'Levofloxacino (Fluoroquinolona de 3ª Generación / Respiratoria)',
    commercialNames: ['Tavanic', 'Levaquin', 'Elequine', 'Ducressa'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de Levofloxacino de 500 mg',
    atcCode: 'J01MA12',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Fluoroquinolona de 3ª generación ("quinolona respiratoria") con excelente actividad neumocócica',
    description: 'Enantiómero L-(-) puro y biológicamente activo del ofloxacino. Prototipo de las fluoroquinolonas de tercera generación comúnmente denominadas "quinolonas respiratorias". Combina una alta potencia frente a Streptococcus pneumoniae (incluyendo cepas resistentes a penicilina) con excelente actividad frente a bacilos gramnegativos, patógenos intracelulares atípicos y Mycobacterium tuberculosis.',
    presentations: [
      { id: 'lev-1', form: 'Comprimidos recubiertos ranurados', concentration: '500 mg y 750 mg', route: 'Oral', packaging: 'Caja x 7, 10 y 14 comprimidos' },
      { id: 'lev-2', form: 'Solución para infusión intravenosa', concentration: '5 mg/mL (500 mg / 100 mL)', route: 'Intravenosa', packaging: 'Frasco de infusión x 100 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe selectivamente las enzimas topoisomerasa II (ADN girasa) y topoisomerasa IV bacterianas. La conformación espacial estereoisomérica L pura le otorga una afinidad hacia la ADN girasa bacteriana entre 8 y 128 veces superior a la del dextroisómero inactivo, desestabilizando los enlaces helicoidales del genoma bacteriano y conduciendo a una fragmentación masiva del ADN.',
      molecularTarget: 'ADN girasa y Topoisomerasa IV bacteriana con afinidad neumocócica incrementada',
      pharmacokinetics: {
        bioavailability: 'Oral prácticamente del 99-100% (bioequivalencia oral/intravenosa total).',
        halfLife: 'Terminal de 6 a 8 horas, permitiendo una única administración al día.',
        metabolism: 'Mínimo hepático (<5%)',
        elimination: 'Excreción renal masiva (>85% inalterado por filtración y secreción tubular)'
      }
    },
    therapeuticIndications: [
      'Neumonía adquirida en la comunidad (NAC) moderada a grave y neumonía nosocomial',
      'Exacerbación aguda bacteriana de EPOC y sinusitis bacteriana aguda complicada',
      'Pielonefritis aguda e infecciones urinarias complicadas',
      'Prostatitis bacteriana crónica y epididimitis aguda',
      'Infecciones complicadas de piel y tejidos blandos',
      'Tuberculosis multirresistente (fármaco de segunda línea clave)'
    ],
    posology: {
      adultStandard: 'Neumonía adquirida en la comunidad: 500 mg una vez al día por 7 a 14 días (o pauta corta de 750 mg una vez al día por 5 días). Sinusitis o Exacerbación EPOC: 500 mg una vez al día por 7 días. Infecciones urinarias complicadas o Pielonefritis: 500 mg o 750 mg una vez al día por 5 a 10 días. Prostatitis crónica: 500 mg una vez al día durante 28 días.',
      pediatricDose: 'Restringido a situaciones de extrema necesidad (infección por patógenos multirresistentes): 8 a 10 mg/kg cada 12 horas en mayores de 5 años.',
      renalAdjustment: {
        normal: 'ClCr ≥50 mL/min: Dosis completa (500 mg q24h).',
        moderate: 'ClCr 20-49 mL/min: Inicial 500 mg, luego 250 mg cada 24 horas.',
        severe: 'ClCr <20 mL/min o hemodiálisis: Inicial 500 mg, luego 250 mg cada 48 horas.'
      },
      hepaticAdjustment: 'No requiere ajuste por escasa metabolización hepática.',
      administrationNotes: 'Mantener adecuada hidratación. Separar de suplementos de hierro, zinc, antiácidos con magnesio/aluminio y sucralfato al menos 2 horas. Suspender inmediatamente si surge tendalgia o inflamación del tendón de Aquiles.'
    },
    safety: {
      blackBoxWarning: 'RIESGO DE TENDINITIS Y ROTURA DEL TENDÓN DE AQUILES, PROLONGACIÓN DEL INTERVALO QTc CON TORSADES DE POINTES, DISECCIÓN AÓRTICA Y NEUROPATÍA PERIFÉRICA SENSITIVA.',
      contraindications: [
        'Hipersensibilidad a levofloxacino u otras quinolonas',
        'Antecedentes de trastornos tendinosos vinculados a fluoroquinolonas',
        'Epilepsia o bajo umbral convulsivo',
        'Miastenia gravis'
      ],
      adverseEffects: {
        frequent: ['Náuseas y diarrea', 'Cefalea, insomnio y mareo', 'Flebitis en infusión IV rápida'],
        moderate: ['Tendinitis aquilea', 'Dispepsia y dolor abdominal', 'Fotosensibilidad'],
        severe: ['Rotura tendinosa del tendón de Aquiles', 'Prolongación severa del intervalo QT y arritmias ventriculares', 'Disección o rotura de aneurisma aórtico', 'Psicosis aguda, ideación suicida y depresión']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Se excreta en leche materna con riesgo de artropatía articular.'
    },
    interactions: [
      { interactingDrug: 'Fármacos que prolongan el intervalo QT (Amiodarona, Haloperidol, Sertralina)', severity: 'Grave', clinicalEffect: 'Aumento del riesgo de prolongación del QT, taquicardia ventricular polimórfica y torsades de pointes letales.', recommendation: 'Evitar coadministración; monitorear ECG.' },
      { interactingDrug: 'Corticoides sistémicos', severity: 'Grave', clinicalEffect: 'Riesgo exponencialmente elevado de rotura tendinosa.', recommendation: 'Evitar el uso concomitante.' },
      { interactingDrug: 'Antiácidos que contienen cationes divalentes/trivalentes', severity: 'Grave', clinicalEffect: 'Pérdida de hasta un 80% de la absorción oral por quelación.', recommendation: 'Separar tomas al menos 2 a 4 horas.' }
    ],
    monitoringParameters: ['Dolor en tendones (Aquiles, rotuliano)', 'Intervalo QTc en pacientes con cardiopatía o polifarmacia', 'Función renal para ajuste posológico'],
    storageConditions: 'Conservar por debajo de 30 °C protegido de la luz solar directa.',
    updatedAt: '2026-03-30'
  },
  {
    id: 'moxifloxacino',
    genericName: 'Moxifloxacino Clorhidrato (Fluoroquinolona de 4ª Generación)',
    commercialNames: ['Avelox', 'Actira', 'Octegra', 'Vigamox (colirio)'],
    imageUrl: BLISTER_IMG,
    imageAlt: 'Blíster de comprimidos de Moxifloxacino de 400 mg',
    atcCode: 'J01MA14',
    anatomicalSystem: '4.1 Antisépticos',
    therapeuticClass: 'Fluoroquinolona de 4ª generación de amplio espectro anaeróbico y respiratorio',
    description: 'Fluoroquinolona de cuarta generación de amplio espectro antimicrobiano. Incorpora un grupo metoxi en la posición C-8 y un sustituyente diazabiciclo en la posición C-7, lo que le confiere una actividad incrementada frente a bacterias grampositivas y anaerobias estrictas (Bacteroides fragilis), con eliminación predominantemente hepática independiente del riñón.',
    presentations: [
      { id: 'mox-1', form: 'Comprimidos recubiertos con película', concentration: '400 mg', route: 'Oral', packaging: 'Caja x 5, 7 y 10 comprimidos' },
      { id: 'mox-2', form: 'Solución para infusión intravenosa', concentration: '400 mg / 250 mL', route: 'Intravenosa', packaging: 'Bolsa de infusión x 250 mL' },
      { id: 'mox-3', form: 'Solución oftálmica estéril al 0.5%', concentration: '5 mg/mL', route: 'Oftálmica', packaging: 'Frasco gotero x 5 mL' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe simultánea y equilibradamente la topoisomerasa II (ADN girasa) y la topoisomerasa IV bacterianas con afinidad dual idéntica. Esta inhibición balanceada sobre ambas enzimas reduce de forma trascendental la probabilidad de selección de mutantes resistentes en un solo paso y expande la cobertura hacia bacterias anaerobias e intracelulares complejas.',
      molecularTarget: 'ADN girasa y Topoisomerasa IV bacteriana con afinidad dual equilibrada',
      pharmacokinetics: {
        bioavailability: 'Oral aprox. 91% (no interferida sustancialmente por la ingesta de alimentos).',
        halfLife: 'Prolongada: 12 a 15 horas, idónea para pauta en monodosis diaria.',
        metabolism: 'Hepático no microsomal (fase II: glucuronidación y sulfatación, sin intervención de CYP450)',
        elimination: 'Excreción bifásica balanceada: 45% fecal y 45% renal (solo 20% inalterado por orina, lo que explica su INEFICACIA EN INFECCIONES URINARIAS)'
      }
    },
    therapeuticIndications: [
      'Neumonía adquirida en la comunidad (NAC) moderada a grave cuando otros fármacos no son apropiados',
      'Exacerbación aguda bacteriana severa de la bronquitis crónica / EPOC',
      'Sinusitis bacteriana aguda refractaria',
      'Infección intraabdominal complicada (peritonitis secundaria, abscesos intraabdominales en combinación o monoterapia)',
      'Enfermedad inflamatoria pélvica (EIP) leve a moderada no complicada',
      'Conjuntivitis bacteriana purulenta (formulación colirio al 0.5%)'
    ],
    posology: {
      adultStandard: 'Dosis única fija: 400 mg vía oral o 400 mg en infusión intravenosa lenta (durante al menos 60 minutos) una vez al día. Duración: NAC: 7 a 14 días; Exacerbación EPOC: 5 a 10 días; Infección intraabdominal complicada: 5 a 14 días. Colirio oftálmico: 1 gota en ojo afectado 3 veces al día durante 7 días.',
      pediatricDose: 'CONTRAINDICADO en niños y adolescentes en período de crecimiento por riesgo de artropatía de cartílagos de carga.',
      renalAdjustment: {
        normal: 'Dosis estándar',
        moderate: 'NO REQUIERE AJUSTE DE DOSIS (incluso en insuficiencia renal severa o diálisis por metabolización hepática no renal).',
        severe: 'NO UTILIZAR EN INFECCIONES URINARIAS O PIELONEFRITIS (concentración urinaria activa insuficiente).'
      },
      hepaticAdjustment: 'Usar con precaución en insuficiencia hepática leve a moderada (Child-Pugh A-B). CONTRAINDICADO en insuficiencia hepática grave (Child-Pugh C) o transaminasas >5 veces el valor normal.',
      administrationNotes: 'NO UTILIZAR EN EL TRATAMIENTO DE INFECCIONES URINARIAS: la excreción urinaria inalterada es insignificante, por lo que carece de eficacia clínica en cistitis o pielonefritis. La infusión IV debe durar al menos 60 minutos para evitar hipotensión.'
    },
    safety: {
      blackBoxWarning: 'RIESGO ELEVADO DE PROLONGACIÓN DEL INTERVALO QT Y MUERTE SÚBITA POR ARRITMIAS VENTRICULARES. RIESGO DE HEPATOTOXICIDAD FULMINANTE Y ROTURA TENDINOSA DEL TENDÓN DE AQUILES.',
      contraindications: [
        'Prolongación congénita o adquirida del intervalo QT demostrada',
        'Trastornos electrolíticos no corregidos (hipopotasemia o hipomagnesemia graves)',
        'Insuficiencia hepática grave (Child-Pugh C)',
        'Bradicardia clínicamente significativa o insuficiencia cardíaca con FEVI reducida',
        'Antecedentes de trastornos tendinosos inducidos por quinolonas',
        'Menores de 18 años, embarazo y lactancia'
      ],
      adverseEffects: {
        frequent: ['Náuseas, diarrea y vómitos', 'Cefalea y mareo'],
        moderate: ['Prolongación del intervalo QTc en el ECG', 'Elevación moderada de transaminasas hepáticas'],
        severe: ['Hepatitis fulminante que puede requerir trasplante hepático o provocar la muerte', 'Torsades de pointes y fibrilación ventricular mortal', 'Rotura tendinosa del tendón de Aquiles', 'Colitis pseudomembranosa por C. difficile']
      },
      pregnancyCategory: 'C',
      lactationSafety: 'Contraindicado: Se excreta en leche con riesgo de lesiones articulares en el lactante.'
    },
    interactions: [
      { interactingDrug: 'Antiarrítmicos clase IA (Quinidina, Procainamida) y clase III (Amiodarona, Sotalol)', severity: 'Grave', clinicalEffect: 'Prolongación extrema aditiva del intervalo QT con riesgo de paro cardíaco por torsades de pointes.', recommendation: 'Contraindicación absoluta de uso simultáneo.' },
      { interactingDrug: 'Psicofármacos (Haloperidol, Antidepresivos tricíclicos, Fenotiazinas)', severity: 'Grave', clinicalEffect: 'Potenciación del riesgo de arritmias ventriculares fatales.', recommendation: 'Evitar combinación o monitorizar ECG.' },
      { interactingDrug: 'Antiácidos quelantes (Al, Mg, Fe)', severity: 'Moderada', clinicalEffect: 'Disminución marcada de la biodisponibilidad oral de moxifloxacino.', recommendation: 'Separar las tomas al menos 4 horas.' }
    ],
    monitoringParameters: ['Electrocardiograma (medición del intervalo QTc)', 'Enzimas hepáticas (ALT, AST, bilirrubina)', 'Dolor o edema tendinoso en miembros inferiores'],
    storageConditions: 'Conservar a menos de 25 °C en el envase original protegido de la humedad y la luz.',
    updatedAt: '2026-03-30'
  }
];
