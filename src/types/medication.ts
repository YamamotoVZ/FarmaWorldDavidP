export type PregnancyCategory = 'A' | 'B' | 'C' | 'D' | 'X';

export type LactationRisk = 'Compatible / Seguro' | 'Precaución / Evaluar riesgo' | 'Contraindicado' | (string & {});

export type PrescriptionType = 
  | 'Venta libre (OTC)' 
  | 'Receta médica simple' 
  | 'Receta retenida / Controlado' 
  | 'Uso hospitalario exclusivo'
  | (string & {});

export type AdministrationRoute = 
  | 'Oral' 
  | 'Intravenosa' 
  | 'Intramuscular' 
  | 'Subcutánea' 
  | 'Inhalatoria' 
  | 'Tópica' 
  | 'Oftálmica' 
  | 'Rectal'
  | 'Sublingual'
  | 'Transdérmica'
  | (string & {});

export type InteractionSeverity = 'Contraindicada' | 'Mayor' | 'Grave' | 'Moderada' | 'Menor' | (string & {});

export interface DrugPresentation {
  id: string;
  form: string; // ej. Comprimidos recubiertos, Jarabe, Solución inyectable
  concentration: string; // ej. 500 mg, 1 g / 10 ml
  route: AdministrationRoute;
  packaging?: string; // ej. Caja x 20 comprimidos, Frasco ampolla
}

export interface DrugInteraction {
  id?: string;
  interactsWith?: string; // Nombre de fármaco o grupo farmacológico
  interactingDrug?: string; // Variante sintáctica admitida
  severity: InteractionSeverity;
  clinicalEffect: string; // Qué sucede fisiológicamente / clínicamente
  recommendation: string; // Conducta clínica sugerida
}

export interface Pharmacokinetics {
  bioavailability?: string; // ej. 70-80%
  halfLife?: string; // ej. 1 a 2 horas
  metabolism?: string; // ej. Hepático vía CYP3A4
  elimination?: string; // ej. Renal 60%
}

export interface Medication {
  id: string;
  genericName: string; // Denominación Común Internacional (DCI)
  commercialNames: string[]; // Nombres de marca
  imageUrl?: string;
  imageAlt?: string;
  images?: string[]; // Colección de URLs de imágenes clínicas (caja, blíster, ampolla, comprimido)
  atcCode: string; // ej. C09AA02
  anatomicalSystem: string; // ej. 1.1 Analgésicos narcóticos, 2.1 Antisépticos
  mainCategory?: string; // ej. 1 Fármacos del Sistema Nervioso Central
  subdivision?: string; // ej. Agonista puro, Ácidos, Benzodiacepinas, etc.
  therapeuticClass: string; // ej. Inhibidores de la ECA, Betalactámico
  description: string; // Resumen farmacológico profesional
  
  presentations: DrugPresentation[];
  
  mechanismOfAction: {
    summary: string;
    molecularTarget: string;
    pharmacokinetics: Pharmacokinetics;
  };
  
  therapeuticIndications: string[];
  
  posology: {
    adultStandard: string;
    pediatricDose?: string;
    renalAdjustment: {
      normal: string;
      moderate: string; // ClCr 10-50
      severe: string; // ClCr <10
      dialysis?: string;
    };
    hepaticAdjustment?: string;
    administrationNotes?: string;
  };
  
  safety: {
    blackBoxWarning?: string;
    contraindications: string[];
    adverseEffects: {
      frequent: string[]; // >10%
      moderate: string[]; // 1-10%
      severe: string[]; // <1% o de alarma
    };
    pregnancyCategory: PregnancyCategory;
    pregnancyDescription?: string;
    lactationRisk?: LactationRisk;
    lactationSafety?: string;
    monitoringParameters?: string[];
  };
  
  interactions: DrugInteraction[];
  
  storageAndConservation?: string;
  storageConditions?: string;
  monitoringParameters?: string[];
  highAlertMedicine?: boolean; // ISMP (Fármaco de alto riesgo)
  prescriptionType?: PrescriptionType;
  
  createdAt?: string;
  updatedAt?: string;
  isCustom?: boolean;
}

export interface InteractionAlert {
  drugA: string;
  drugB: string;
  severity: InteractionSeverity;
  clinicalEffect: string;
  recommendation: string;
}
