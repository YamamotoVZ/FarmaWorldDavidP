import { Medication } from '../types/medication';
import { enrichMedicationWithTaxonomy } from './drugTaxonomy';
import { ANALGESICOS_NARCOTICOS } from './drugs/analgesicosNarcoticos';
import { AINES } from './drugs/aines';
import { CORTICOSTEROIDES } from './drugs/corticosteroides';
import { ANSIOLITICOS_SEDANTES } from './drugs/ansioliticosSedantes';
import { ANTIDEPRESIVOS } from './drugs/antidepresivos';
import { ANTIPSICOTICOS_ANTICONVULSIVOS } from './drugs/antipsicoticosAnticonvulsivos';
import { ANESTESICOS_ANTIHIPERTENSIVOS_DIURETICOS } from './drugs/anestesicosAntihipertensivosDiureticos';
import { ANTIDIABETICOS_INSULINAS } from './drugs/antidiabeticosInsulinas';
import { ANTISEPTICOS } from './drugs/antisepticos';
import { ANTIBACTERIANOS } from './drugs/antibacterianos';
import { ANTIMICOTICOS_ANTIVIRALES } from './drugs/antimicoticosAntivirales';
import { ANTIPROTOZOARIOS_ANTIHELMINTICOS_ANTIFIMICOS } from './drugs/antiprotozoariosAntihelminticosAntifimicos';

/**
 * Catálogo Farmacológico Oficial estructurado según la clasificación
 * canónica oficial (1 Fármacos SNC, 2 Antimicrobianos, 3 Cardiovasculares y Renales, 4 Antidiabéticos)
 */
export const INITIAL_MEDICATIONS: Medication[] = [
  ...ANALGESICOS_NARCOTICOS,
  ...AINES,
  ...CORTICOSTEROIDES,
  ...ANSIOLITICOS_SEDANTES,
  ...ANTIDEPRESIVOS,
  ...ANTIPSICOTICOS_ANTICONVULSIVOS,
  ...ANESTESICOS_ANTIHIPERTENSIVOS_DIURETICOS,
  ...ANTIDIABETICOS_INSULINAS,
  ...ANTISEPTICOS,
  ...ANTIBACTERIANOS,
  ...ANTIMICOTICOS_ANTIVIRALES,
  ...ANTIPROTOZOARIOS_ANTIHELMINTICOS_ANTIFIMICOS,
].map(enrichMedicationWithTaxonomy);

