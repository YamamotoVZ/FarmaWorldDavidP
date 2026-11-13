import { Medication } from '../types/medication';
import { INITIAL_MEDICATIONS } from '../data/initialMedications';
import { enrichMedicationWithTaxonomy } from '../data/drugTaxonomy';

const STORAGE_KEY = 'pharmadoc_medications_v4';

export const PRESET_IMAGES = [
  {
    id: 'blister-tablets',
    label: 'Blíster de Comprimidos / Cápsulas',
    url: '/src/assets/images/medication_blister_tablets_1793310902804.jpg'
  },
  {
    id: 'ampoule-vials',
    label: 'Viales y Ampollas Inyectables',
    url: '/src/assets/images/medication_ampoule_vial_1793310913789.jpg'
  },
  {
    id: 'clinical-desk',
    label: 'Mesa de Farmacología Clínica',
    url: '/src/assets/images/medical_hero_vademecum_1793310891379.jpg'
  }
];

export function getStoredMedications(): Medication[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MEDICATIONS));
      return INITIAL_MEDICATIONS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map(enrichMedicationWithTaxonomy);
    }
    return INITIAL_MEDICATIONS;
  } catch (error) {
    console.error('Error al leer de localStorage:', error);
    return INITIAL_MEDICATIONS;
  }
}

export function saveMedication(medication: Medication): Medication[] {
  const current = getStoredMedications();
  const index = current.findIndex(m => m.id === medication.id);
  
  let updated: Medication[];
  const now = new Date().toISOString();
  
  if (index >= 0) {
    updated = [...current];
    updated[index] = {
      ...medication,
      updatedAt: now,
      isCustom: true
    };
  } else {
    updated = [
      {
        ...medication,
        createdAt: now,
        updatedAt: now,
        isCustom: true
      },
      ...current
    ];
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function deleteMedication(id: string): Medication[] {
  const current = getStoredMedications();
  const updated = current.filter(m => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function resetToDefaults(): Medication[] {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MEDICATIONS));
  return INITIAL_MEDICATIONS;
}

export function exportDatabaseToJson(medications: Medication[]): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(medications, null, 2));
  const downloadAnchor = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `pharmadoc_backup_${date}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function importDatabaseFromJson(jsonContent: string, mode: 'merge' | 'replace'): Medication[] {
  try {
    const parsed = JSON.parse(jsonContent);
    if (!Array.isArray(parsed)) {
      throw new Error('El archivo JSON no contiene un arreglo de medicamentos válido.');
    }
    
    // Validar propiedades mínimas
    const valid = parsed.filter(item => item && item.genericName && item.atcCode);
    if (valid.length === 0) {
      throw new Error('No se encontraron registros de medicamentos compatibles.');
    }
    
    let result: Medication[];
    if (mode === 'replace') {
      result = valid;
    } else {
      const current = getStoredMedications();
      const existingIds = new Set(current.map(m => m.id));
      const newItems = valid.filter(v => !existingIds.has(v.id));
      result = [...valid.filter(v => existingIds.has(v.id)), ...current.filter(c => !valid.some(v => v.id === c.id)), ...newItems];
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    return result;
  } catch (err) {
    throw err instanceof Error ? err : new Error('Error al importar archivo');
  }
}
