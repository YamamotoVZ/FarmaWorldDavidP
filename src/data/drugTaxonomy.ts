import { Medication } from '../types/medication';

export interface TaxonomyDivision {
  name: string;
  drugIds?: string[];
}

export interface TaxonomySubclass {
  id: string; // ej. '1.1'
  number: string; // '1.1'
  name: string; // '1.1 Analgésicos narcóticos'
  shortName: string; // 'Analgésicos narcóticos'
  parentGroupId: string; // '1'
  divisions: string[];
}

export interface TaxonomyGroup {
  id: string; // '1'
  number: string; // '1'
  name: string; // '1 Fármacos del Sistema Nervioso Central'
  shortName: string; // 'SNC'
  description: string;
  subclasses: TaxonomySubclass[];
}

export const DRUG_TAXONOMY: TaxonomyGroup[] = [
  {
    id: '1',
    number: '1',
    name: '1 Fármacos del Sistema Nervioso Central',
    shortName: 'SNC',
    description: 'Analgésicos narcóticos, AINES, corticosteroides, sedantes, antidepresivos, antipsicóticos, anticonvulsivos y anestésicos locales.',
    subclasses: [
      {
        id: '1.1',
        number: '1.1',
        name: '1.1 Analgésicos narcóticos',
        shortName: 'Analgésicos narcóticos',
        parentGroupId: '1',
        divisions: [
          'Agonista puro',
          'Agonista parcial',
          'Agonista-antagonista'
        ]
      },
      {
        id: '1.2',
        number: '1.2',
        name: '1.2 AINES',
        shortName: 'AINES',
        parentGroupId: '1',
        divisions: [
          'Ácidos',
          'No ácidos'
        ]
      },
      {
        id: '1.3',
        number: '1.3',
        name: '1.3 Corticosteroides (glucocorticoides)',
        shortName: 'Corticosteroides',
        parentGroupId: '1',
        divisions: [
          'Glucocorticoides sistémicos'
        ]
      },
      {
        id: '1.4',
        number: '1.4',
        name: '1.4 Ansiolíticos y sedantes hipnóticos',
        shortName: 'Ansiolíticos y sedantes',
        parentGroupId: '1',
        divisions: [
          'Benzodiacepinas',
          'Barbitúricos'
        ]
      },
      {
        id: '1.5',
        number: '1.5',
        name: '1.5 Antidepresivos',
        shortName: 'Antidepresivos',
        parentGroupId: '1',
        divisions: [
          'IMAO',
          'Tricíclicos',
          'Heterocíclicos',
          'ISRS',
          'Litio'
        ]
      },
      {
        id: '1.6',
        number: '1.6',
        name: '1.6 Antipsicóticos',
        shortName: 'Antipsicóticos',
        parentGroupId: '1',
        divisions: [
          'Fenotiazinas',
          'Butirofenonas'
        ]
      },
      {
        id: '1.7',
        number: '1.7',
        name: '1.7 Anticonvulsivos',
        shortName: 'Anticonvulsivos',
        parentGroupId: '1',
        divisions: [
          'Bloqueadores de canales de sodio',
          'Bloqueadores de canales de calcio T',
          'Moduladores GABA / Amplio espectro'
        ]
      },
      {
        id: '1.8',
        number: '1.8',
        name: '1.8 Anestésicos Locales',
        shortName: 'Anestésicos locales',
        parentGroupId: '1',
        divisions: [
          'Aminoamidas',
          'Aminoésteres'
        ]
      }
    ]
  },
  {
    id: '2',
    number: '2',
    name: '2 Antimicrobianos',
    shortName: 'Antimicrobianos',
    description: 'Antisépticos, antibióticos clasificados, antimicóticos, antivirales, antiprotozoarios, antihelmínticos y antifímicos.',
    subclasses: [
      {
        id: '2.1',
        number: '2.1',
        name: '2.1 Antisépticos',
        shortName: 'Antisépticos',
        parentGroupId: '2',
        divisions: [
          'Tópicos',
          'Orales: Nitrofurantoína y Fluoroquinolonas'
        ]
      },
      {
        id: '2.2',
        number: '2.2',
        name: '2.2 Antibióticos y sus clasificaciones',
        shortName: 'Antibióticos',
        parentGroupId: '2',
        divisions: [
          'Penicilinas',
          'Cefalosporinas (1ª, 2ª, 3ª, 4ª G)',
          'Macrólidos',
          'Tetraciclinas',
          'Carbapenemes',
          'Aminoglucósidos',
          'Inhibidores de Betalactamasas & Diversos'
        ]
      },
      {
        id: '2.3',
        number: '2.3',
        name: '2.3 Antimicóticos tópicos y orales',
        shortName: 'Antimicóticos',
        parentGroupId: '2',
        divisions: [
          'Imidazoles & Azoles',
          'Polienos',
          'Equinocandinas',
          'Tiocarbamatos'
        ]
      },
      {
        id: '2.4',
        number: '2.4',
        name: '2.4 Antivirales',
        shortName: 'Antivirales',
        parentGroupId: '2',
        divisions: [
          'Antirretrovirales (ITIAN)',
          'Antiherpéticos & Análogos de nucleósidos',
          'Antigripales (Aminas tricíclicas)'
        ]
      },
      {
        id: '2.5',
        number: '2.5',
        name: '2.5 Antiprotozoarios',
        shortName: 'Antiprotozoarios',
        parentGroupId: '2',
        divisions: [
          'Antiamebianos & Tricomonicidas',
          'Antipalúdicos'
        ]
      },
      {
        id: '2.6',
        number: '2.6',
        name: '2.6 Antihelmínticos',
        shortName: 'Antihelmínticos',
        parentGroupId: '2',
        divisions: [
          'Benzimidazoles',
          'Pirazinoisoquinolinas'
        ]
      },
      {
        id: '2.7',
        number: '2.7',
        name: '2.7 Antifímicos',
        shortName: 'Antifímicos (TBC)',
        parentGroupId: '2',
        divisions: [
          'Fármacos de Primera Línea Antituberculosa',
          'Aminoglucósidos antituberculosos'
        ]
      }
    ]
  },
  {
    id: '3',
    number: '3',
    name: '3 Fármacos Cardiovasculares y Renales',
    shortName: 'Cardiovasculares y Renales',
    description: 'Antihipertensivos clasificados por mecanismo y diuréticos de diversas clases tubulares.',
    subclasses: [
      {
        id: '3.1',
        number: '3.1',
        name: '3.1 Antihipertensivos',
        shortName: 'Antihipertensivos',
        parentGroupId: '3',
        divisions: [
          'Betabloqueantes',
          'Calcioantagonistas (Dihidropiridinas & No Dihidropiridinas)',
          'IECA (Inhibidores de la ECA)',
          'ARA-II (Antagonistas del Receptor AT1)'
        ]
      },
      {
        id: '3.2',
        number: '3.2',
        name: '3.2 Diuréticos',
        shortName: 'Diuréticos',
        parentGroupId: '3',
        divisions: [
          'Tiazídicos y análogos',
          'Diuréticos de asa',
          'Ahorradores de potasio',
          'Diuréticos osmóticos'
        ]
      }
    ]
  },
  {
    id: '4',
    number: '4',
    name: '4 Antidiabéticos',
    shortName: 'Antidiabéticos',
    description: 'Hipoglucemiantes orales/inyectables de todas las familias metabólicas e insulinas por tiempo de acción.',
    subclasses: [
      {
        id: '4.1',
        number: '4.1',
        name: '4.1 Hipoglucemiantes',
        shortName: 'Hipoglucemiantes',
        parentGroupId: '4',
        divisions: [
          'Biguanidas',
          'Sulfonilureas',
          'Glinidas',
          'Tiazolidinedionas',
          'Inhibidores de alfa-glucosidasa',
          'Inhibidores de DPP-4',
          'Inhibidores de SGLT-2',
          'Agonistas de Receptores de GLP-1'
        ]
      },
      {
        id: '4.2',
        number: '4.2',
        name: '4.2 Insulinas & Regulación metabólica',
        shortName: 'Insulinas & Regulación',
        parentGroupId: '4',
        divisions: [
          'Acción rápida (Regular / Cristalina)',
          'Acción intermedia (NPH / Isófana)',
          'Acción lenta / prolongada (Glargina / Análogos)'
        ]
      }
    ]
  }
];

/**
 * Mapeo explícito y exhaustivo de cada fármaco individual (por ID)
 * hacia su ubicación taxonómica exacta: Grupo principal, Subclase y Subdivisión.
 */
interface TaxonomyMapping {
  mainCategory: string;
  anatomicalSystem: string;
  subdivision: string;
}

const DRUG_ID_MAP: Record<string, TaxonomyMapping> = {
  // 1.1 Analgésicos narcóticos
  'morfina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.1 Analgésicos narcóticos',
    subdivision: 'Agonista puro'
  },
  'meperidina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.1 Analgésicos narcóticos',
    subdivision: 'Agonista puro'
  },
  'metadona': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.1 Analgésicos narcóticos',
    subdivision: 'Agonista puro'
  },
  'buprenorfina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.1 Analgésicos narcóticos',
    subdivision: 'Agonista parcial'
  },
  'pentazocina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.1 Analgésicos narcóticos',
    subdivision: 'Agonista-antagonista'
  },
  'nalbufina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.1 Analgésicos narcóticos',
    subdivision: 'Agonista-antagonista'
  },

  // 1.2 AINES
  'acido-acetilsalicilico': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'ibuprofeno': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'naproxeno': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'ketoprofeno': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'diclofenaco': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'ketorolaco': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'indometacina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'piroxicam': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'Ácidos'
  },
  'paracetamol': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'No ácidos'
  },
  'metamizol': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'No ácidos'
  },
  'nimesulida': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'No ácidos'
  },
  'celecoxib': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.2 AINES',
    subdivision: 'No ácidos'
  },

  // 1.3 Corticosteroides
  'dexametasona': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.3 Corticosteroides (glucocorticoides)',
    subdivision: 'Glucocorticoides sistémicos'
  },
  'hidrocortisona': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.3 Corticosteroides (glucocorticoides)',
    subdivision: 'Glucocorticoides sistémicos'
  },
  'prednisona': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.3 Corticosteroides (glucocorticoides)',
    subdivision: 'Glucocorticoides sistémicos'
  },
  'metilprednisolona': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.3 Corticosteroides (glucocorticoides)',
    subdivision: 'Glucocorticoides sistémicos'
  },

  // 1.4 Ansiolíticos y Sedantes
  'diazepam': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Benzodiacepinas'
  },
  'clordiazepoxido': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Benzodiacepinas'
  },
  'lorazepam': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Benzodiacepinas'
  },
  'oxazepam': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Benzodiacepinas'
  },
  'clonazepam': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Benzodiacepinas'
  },
  'fenobarbital': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Barbitúricos'
  },
  'pentobarbital': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Barbitúricos'
  },
  'tiopental': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.4 Ansiolíticos y sedantes hipnóticos',
    subdivision: 'Barbitúricos'
  },

  // 1.5 Antidepresivos
  'fenelzina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'IMAO'
  },
  'imipramina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'Tricíclicos'
  },
  'amitriptilina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'Tricíclicos'
  },
  'venlafaxina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'Heterocíclicos'
  },
  'amoxapina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'Heterocíclicos'
  },
  'trazodona': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'Heterocíclicos'
  },
  'fluoxetina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'ISRS'
  },
  'sertralina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'ISRS'
  },
  'litio': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.5 Antidepresivos',
    subdivision: 'Litio'
  },

  // 1.6 Antipsicóticos
  'clorpromazina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.6 Antipsicóticos',
    subdivision: 'Fenotiazinas'
  },
  'haloperidol': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.6 Antipsicóticos',
    subdivision: 'Butirofenonas'
  },

  // 1.7 Anticonvulsivos
  'carbamazepina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.7 Anticonvulsivos',
    subdivision: 'Bloqueadores de canales de sodio'
  },
  'fenitoina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.7 Anticonvulsivos',
    subdivision: 'Bloqueadores de canales de sodio'
  },
  'etosuximida': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.7 Anticonvulsivos',
    subdivision: 'Bloqueadores de canales de calcio T'
  },
  'acido-valproico': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.7 Anticonvulsivos',
    subdivision: 'Moduladores GABA / Amplio espectro'
  },

  // 1.8 Anestésicos Locales
  'lidocaina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.8 Anestésicos Locales',
    subdivision: 'Aminoamidas'
  },
  'proparacaina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.8 Anestésicos Locales',
    subdivision: 'Aminoésteres'
  },
  'mepivacaina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.8 Anestésicos Locales',
    subdivision: 'Aminoamidas'
  },
  'bupivacaina': {
    mainCategory: '1 Fármacos del Sistema Nervioso Central',
    anatomicalSystem: '1.8 Anestésicos Locales',
    subdivision: 'Aminoamidas'
  },

  // 2.1 Antisépticos
  'povidona-yodada': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Tópicos'
  },
  'hipoclorito-sodico': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Tópicos'
  },
  'benzalconio-benzetonio': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Tópicos'
  },
  'peroxido-hidrogeno': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Tópicos'
  },
  'clorhexidina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Tópicos'
  },
  'nitrofurantoina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Orales: Nitrofurantoína y Fluoroquinolonas'
  },
  'acido-nalidixico': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Orales: Nitrofurantoína y Fluoroquinolonas'
  },
  'ciprofloxacino': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Orales: Nitrofurantoína y Fluoroquinolonas'
  },
  'levofloxacino': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Orales: Nitrofurantoína y Fluoroquinolonas'
  },
  'moxifloxacino': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.1 Antisépticos',
    subdivision: 'Orales: Nitrofurantoína y Fluoroquinolonas'
  },

  // 2.2 Antibióticos y sus clasificaciones
  'penicilina-g': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Penicilinas'
  },
  'amoxicilina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Penicilinas'
  },
  'cefalexina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Cefalosporinas (1ª, 2ª, 3ª, 4ª G)'
  },
  'cefuroxima': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Cefalosporinas (1ª, 2ª, 3ª, 4ª G)'
  },
  'ceftriaxona': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Cefalosporinas (1ª, 2ª, 3ª, 4ª G)'
  },
  'cefepima': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Cefalosporinas (1ª, 2ª, 3ª, 4ª G)'
  },
  'eritromicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Macrólidos'
  },
  'claritromicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Macrólidos'
  },
  'azitromicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Macrólidos'
  },
  'oxitetraciclina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Tetraciclinas'
  },
  'tetraciclina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Tetraciclinas'
  },
  'doxiciclina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Tetraciclinas'
  },
  'minociclina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Tetraciclinas'
  },
  'imipenem-cilastatina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Carbapenemes'
  },
  'meropenem': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Carbapenemes'
  },
  'gentamicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Aminoglucósidos'
  },
  'amikacina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Aminoglucósidos'
  },
  'netilmicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Aminoglucósidos'
  },
  'tobramicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Aminoglucósidos'
  },
  'amoxicilina-acido-clavulanico': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Inhibidores de Betalactamasas & Diversos'
  },
  'trimetroprima-sulfametoxazol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Inhibidores de Betalactamasas & Diversos'
  },
  'cloranfenicol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Inhibidores de Betalactamasas & Diversos'
  },
  'lincomicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Inhibidores de Betalactamasas & Diversos'
  },
  'clindamicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Inhibidores de Betalactamasas & Diversos'
  },
  'vancomicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.2 Antibióticos y sus clasificaciones',
    subdivision: 'Inhibidores de Betalactamasas & Diversos'
  },

  // 2.3 Antimicóticos tópicos y orales
  'nistatina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.3 Antimicóticos tópicos y orales',
    subdivision: 'Polienos'
  },
  'tolnaftato': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.3 Antimicóticos tópicos y orales',
    subdivision: 'Tiocarbamatos'
  },
  'imidazoles-clotrimazol-ketoconazol-miconazol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.3 Antimicóticos tópicos y orales',
    subdivision: 'Imidazoles & Azoles'
  },
  'anfotericina-b': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.3 Antimicóticos tópicos y orales',
    subdivision: 'Polienos'
  },
  'equinocandinas-caspofungina-anidulafungina-micafungina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.3 Antimicóticos tópicos y orales',
    subdivision: 'Equinocandinas'
  },

  // 2.4 Antivirales
  'zidovudina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.4 Antivirales',
    subdivision: 'Antirretrovirales (ITIAN)'
  },
  'aciclovir': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.4 Antivirales',
    subdivision: 'Antiherpéticos & Análogos de nucleósidos'
  },
  'ribavirina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.4 Antivirales',
    subdivision: 'Antiherpéticos & Análogos de nucleósidos'
  },
  'amantadina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.4 Antivirales',
    subdivision: 'Antigripales (Aminas tricíclicas)'
  },

  // 2.5 Antiprotozoarios
  'metronidazol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.5 Antiprotozoarios',
    subdivision: 'Antiamebianos & Tricomonicidas'
  },
  'diloxanida': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.5 Antiprotozoarios',
    subdivision: 'Antiamebianos & Tricomonicidas'
  },
  'tinidazol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.5 Antiprotozoarios',
    subdivision: 'Antiamebianos & Tricomonicidas'
  },
  'quinina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.5 Antiprotozoarios',
    subdivision: 'Antipalúdicos'
  },
  'primaquina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.5 Antiprotozoarios',
    subdivision: 'Antipalúdicos'
  },
  'cloroquina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.5 Antiprotozoarios',
    subdivision: 'Antipalúdicos'
  },

  // 2.6 Antihelmínticos
  'albendazol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.6 Antihelmínticos',
    subdivision: 'Benzimidazoles'
  },
  'mebendazol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.6 Antihelmínticos',
    subdivision: 'Benzimidazoles'
  },
  'praziquantel': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.6 Antihelmínticos',
    subdivision: 'Pirazinoisoquinolinas'
  },

  // 2.7 Antifímicos
  'isoniacida': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.7 Antifímicos',
    subdivision: 'Fármacos de Primera Línea Antituberculosa'
  },
  'etambutol': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.7 Antifímicos',
    subdivision: 'Fármacos de Primera Línea Antituberculosa'
  },
  'rifampicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.7 Antifímicos',
    subdivision: 'Fármacos de Primera Línea Antituberculosa'
  },
  'pirazinamida': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.7 Antifímicos',
    subdivision: 'Fármacos de Primera Línea Antituberculosa'
  },
  'estreptomicina': {
    mainCategory: '2 Antimicrobianos',
    anatomicalSystem: '2.7 Antifímicos',
    subdivision: 'Aminoglucósidos antituberculosos'
  },

  // 3.1 Antihipertensivos
  'metoprolol': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'Betabloqueantes'
  },
  'nifedipino': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'Calcioantagonistas (Dihidropiridinas & No Dihidropiridinas)'
  },
  'verapamilo': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'Calcioantagonistas (Dihidropiridinas & No Dihidropiridinas)'
  },
  'captopril': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'IECA (Inhibidores de la ECA)'
  },
  'losartan': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'ARA-II (Antagonistas del Receptor AT1)'
  },
  'candesartan': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'ARA-II (Antagonistas del Receptor AT1)'
  },
  'valsartan': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.1 Antihipertensivos',
    subdivision: 'ARA-II (Antagonistas del Receptor AT1)'
  },

  // 3.2 Diuréticos
  'hidroclorotiazida': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.2 Diuréticos',
    subdivision: 'Tiazídicos y análogos'
  },
  'clortalidona': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.2 Diuréticos',
    subdivision: 'Tiazídicos y análogos'
  },
  'furosemida': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.2 Diuréticos',
    subdivision: 'Diuréticos de asa'
  },
  'espironolactona': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.2 Diuréticos',
    subdivision: 'Ahorradores de potasio'
  },
  'manitol': {
    mainCategory: '3 Fármacos Cardiovasculares y Renales',
    anatomicalSystem: '3.2 Diuréticos',
    subdivision: 'Diuréticos osmóticos'
  },

  // 4.1 Hipoglucemiantes
  'metformina': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Biguanidas'
  },
  'glibenclamida': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Sulfonilureas'
  },
  'rosiglitazona': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Tiazolidinedionas'
  },
  'pioglitazona': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Tiazolidinedionas'
  },
  'semaglutida': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Agonistas de Receptores de GLP-1'
  },
  'liraglutida': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Agonistas de Receptores de GLP-1'
  },
  'dulaglutida': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Agonistas de Receptores de GLP-1'
  },
  'tirzepatida': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.1 Hipoglucemiantes',
    subdivision: 'Agonistas de Receptores de GLP-1'
  },

  // 4.2 Insulinas & Regulación metabólica
  'insulina-regular': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.2 Insulinas & Regulación metabólica',
    subdivision: 'Acción rápida (Regular / Cristalina)'
  },
  'insulina-nph': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.2 Insulinas & Regulación metabólica',
    subdivision: 'Acción intermedia (NPH / Isófana)'
  },
  'insulina-glargina': {
    mainCategory: '4 Antidiabéticos',
    anatomicalSystem: '4.2 Insulinas & Regulación metabólica',
    subdivision: 'Acción lenta / prolongada (Glargina / Análogos)'
  }
};

/**
 * Normaliza y enriquece cualquier objeto Medication con los campos canónicos
 * de mainCategory, anatomicalSystem y subdivision según el temario oficial del usuario.
 */
export function enrichMedicationWithTaxonomy(med: Medication): Medication {
  const mapped = DRUG_ID_MAP[med.id];
  if (mapped) {
    return {
      ...med,
      mainCategory: mapped.mainCategory,
      anatomicalSystem: mapped.anatomicalSystem,
      subdivision: mapped.subdivision
    };
  }

  // Inferir fallback si es un medicamento personalizado
  let mainCategory = med.mainCategory || '1 Fármacos del Sistema Nervioso Central';
  let anatomicalSystem = med.anatomicalSystem || '1.1 Analgésicos narcóticos';
  let subdivision = med.subdivision;

  if (med.anatomicalSystem) {
    if (med.anatomicalSystem.startsWith('1.') || med.anatomicalSystem.includes('Narcóticos') || med.anatomicalSystem.includes('AINES') || med.anatomicalSystem.includes('Corticosteroides') || med.anatomicalSystem.includes('Ansiolíticos') || med.anatomicalSystem.includes('Antidepresivos') || med.anatomicalSystem.includes('Antipsicóticos') || med.anatomicalSystem.includes('Anticonvulsivos') || med.anatomicalSystem.includes('Anestésicos')) {
      mainCategory = '1 Fármacos del Sistema Nervioso Central';
    } else if (med.anatomicalSystem.startsWith('2.') || med.anatomicalSystem.includes('Antisépticos') || med.anatomicalSystem.includes('Antibacterianos') || med.anatomicalSystem.includes('Antibióticos') || med.anatomicalSystem.includes('Antimicóticos') || med.anatomicalSystem.includes('Antivirales') || med.anatomicalSystem.includes('Antiprotozoarios') || med.anatomicalSystem.includes('Antihelmínticos') || med.anatomicalSystem.includes('Antifímicos')) {
      mainCategory = '2 Antimicrobianos';
    } else if (med.anatomicalSystem.startsWith('3.') || med.anatomicalSystem.includes('Antihipertensivos') || med.anatomicalSystem.includes('Diuréticos')) {
      mainCategory = '3 Fármacos Cardiovasculares y Renales';
    } else if (med.anatomicalSystem.startsWith('4.') || med.anatomicalSystem.includes('Hipoglucemiantes') || med.anatomicalSystem.includes('Insulinas')) {
      mainCategory = '4 Antidiabéticos';
    }
  }

  return {
    ...med,
    mainCategory,
    anatomicalSystem,
    subdivision: subdivision || 'General'
  };
}

/**
 * Obtiene todas las subclases de la taxonomía en orden estricto (1.1, 1.2 ... 4.2)
 */
export function getAllTaxonomySubclasses(): TaxonomySubclass[] {
  return DRUG_TAXONOMY.flatMap(g => g.subclasses);
}
