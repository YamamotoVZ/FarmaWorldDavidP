import { Medication } from '../types/medication';
import { INITIAL_MEDICATIONS } from '../data/initialMedications';
import { enrichMedicationWithTaxonomy } from '../data/drugTaxonomy';

const STORAGE_KEY = 'pharmadoc_medications_v4';
const DELETED_IDS_KEY = 'pharmadoc_deleted_ids_v1';

export const PRESET_IMAGES = [
  {
    id: 'blister-tablets',
    label: 'Blíster de Comprimidos / Cápsulas',
    url: '/assets/images/medication_blister_tablets_1793310902804.jpg'
  },
  {
    id: 'ampoule-vials',
    label: 'Viales y Ampollas Inyectables',
    url: '/assets/images/medication_ampoule_vial_1793310913789.jpg'
  },
  {
    id: 'clinical-desk',
    label: 'Mesa de Farmacología Clínica',
    url: '/assets/images/medical_hero_vademecum_1793310891379.jpg'
  }
];

function normalizeAssetUrl(url?: string): string | undefined {
  if (!url) return url;
  if (url.startsWith('/src/assets/images/')) {
    return url.replace('/src/assets/images/', '/assets/images/');
  }
  return url;
}

function normalizeMedication(med: Medication): Medication {
  const normalizedImageUrl = normalizeAssetUrl(med.imageUrl) || '';
  const normalizedImages = Array.isArray(med.images)
    ? med.images.map(u => normalizeAssetUrl(u) || '').filter(Boolean)
    : undefined;

  return enrichMedicationWithTaxonomy({
    ...med,
    imageUrl: normalizedImageUrl,
    ...(normalizedImages ? { images: normalizedImages } : {})
  });
}

function getDeletedIds(): string[] {
  try {
    const raw = localStorage.getItem(DELETED_IDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setDeletedIds(ids: string[]): void {
  try {
    localStorage.setItem(DELETED_IDS_KEY, JSON.stringify(ids));
  } catch {
    // Ignore storage quota errors
  }
}

function isSameCoreContentAsOfficial(item: Medication, official: Medication): boolean {
  const normItem = normalizeMedication(item);
  return (
    normItem.genericName === official.genericName &&
    normItem.imageUrl === official.imageUrl &&
    JSON.stringify(normItem.images || []) === JSON.stringify(official.images || []) &&
    JSON.stringify(normItem.commercialNames) === JSON.stringify(official.commercialNames) &&
    normItem.description === official.description &&
    normItem.atcCode === official.atcCode &&
    normItem.therapeuticClass === official.therapeuticClass &&
    normItem.posology?.adultStandard === official.posology?.adultStandard &&
    normItem.mechanismOfAction?.summary === official.mechanismOfAction?.summary
  );
}

export function getStoredMedications(): Medication[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initialized = INITIAL_MEDICATIONS.map(normalizeMedication);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialized));
      return initialized;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const deletedSet = new Set(getDeletedIds());
      const officialMap = new Map(INITIAL_MEDICATIONS.map(m => [m.id, normalizeMedication(m)]));
      const seenIds = new Set<string>();
      const merged: Medication[] = [];
      let didSync = false;

      for (const item of parsed) {
        if (!item || !item.id) continue;
        seenIds.add(item.id);
        const official = officialMap.get(item.id);
        if (!official) {
          merged.push(normalizeMedication(item));
        } else if (item.isCustom && !isSameCoreContentAsOfficial(item, official)) {
          merged.push(normalizeMedication(item));
        } else {
          if (item.isCustom) {
            didSync = true;
          }
          // Preserve official updates (such as fixed asset paths or baked edits)
          merged.push(official);
        }
      }

      // Append any newly added official medications not deleted by the user
      for (const official of INITIAL_MEDICATIONS) {
        if (!seenIds.has(official.id) && !deletedSet.has(official.id)) {
          merged.push(normalizeMedication(official));
          didSync = true;
        }
      }

      if (didSync) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        } catch {
          // Ignore storage quota errors
        }
      }

      return merged;
    }
    return INITIAL_MEDICATIONS.map(normalizeMedication);
  } catch (error) {
    console.error('Error al leer de localStorage:', error);
    return INITIAL_MEDICATIONS.map(normalizeMedication);
  }
}

export function saveMedication(medication: Medication): Medication[] {
  const current = getStoredMedications();
  const index = current.findIndex(m => m.id === medication.id);
  const normalized = normalizeMedication(medication);

  let updated: Medication[];
  const now = new Date().toISOString();

  if (index >= 0) {
    updated = [...current];
    updated[index] = {
      ...normalized,
      updatedAt: now,
      isCustom: true
    };
  } else {
    updated = [
      {
        ...normalized,
        createdAt: now,
        updatedAt: now,
        isCustom: true
      },
      ...current
    ];
  }

  // Ensure re-added ID is no longer marked deleted
  const deleted = getDeletedIds().filter(id => id !== medication.id);
  setDeletedIds(deleted);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function deleteMedication(id: string): Medication[] {
  const current = getStoredMedications();
  const updated = current.filter(m => m.id !== id);

  if (INITIAL_MEDICATIONS.some(m => m.id === id)) {
    const deleted = Array.from(new Set([...getDeletedIds(), id]));
    setDeletedIds(deleted);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function resetToDefaults(): Medication[] {
  const defaults = INITIAL_MEDICATIONS.map(normalizeMedication);
  setDeletedIds([]);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

export interface CustomChangesPayload {
  type: 'farmaworld_changes_v1';
  exportedAt: string;
  modifiedOrAdded: Medication[];
  deletedIds: string[];
}

export function buildCustomChangesPayload(medications: Medication[]): CustomChangesPayload {
  const officialMap = new Map(INITIAL_MEDICATIONS.map(m => [m.id, normalizeMedication(m)]));
  const modifiedOrAdded = medications.filter(med => {
    const official = officialMap.get(med.id);
    if (!official) return true;
    if (med.isCustom) return !isSameCoreContentAsOfficial(med, official);
    return (
      med.genericName !== official.genericName ||
      med.imageUrl !== official.imageUrl ||
      JSON.stringify(med.images || []) !== JSON.stringify(official.images || []) ||
      JSON.stringify(med.commercialNames) !== JSON.stringify(official.commercialNames)
    );
  });

  const currentIds = new Set(medications.map(m => m.id));
  const deletedIds = INITIAL_MEDICATIONS
    .filter(m => !currentIds.has(m.id))
    .map(m => m.id);

  return {
    type: 'farmaworld_changes_v1',
    exportedAt: new Date().toISOString(),
    modifiedOrAdded,
    deletedIds
  };
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

    // Soporte para paquete compacto de cambios (farmaworld_changes_v1)
    if (parsed && !Array.isArray(parsed) && parsed.type === 'farmaworld_changes_v1') {
      const payload = parsed as CustomChangesPayload;
      const incoming = (payload.modifiedOrAdded || []).map(m =>
        normalizeMedication({ ...m, isCustom: true })
      );
      const deletedSet = new Set(payload.deletedIds || []);
      const current = getStoredMedications().filter(m => !deletedSet.has(m.id));
      const incomingMap = new Map(incoming.map(m => [m.id, m]));
      const updatedExisting = current.map(m => incomingMap.get(m.id) || m);
      const existingIds = new Set(current.map(m => m.id));
      const brandNew = incoming.filter(m => !existingIds.has(m.id));
      const result = [...brandNew, ...updatedExisting];

      setDeletedIds(Array.from(deletedSet));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      return result;
    }

    if (!Array.isArray(parsed)) {
      throw new Error('El archivo JSON no contiene un arreglo de medicamentos válido.');
    }

    // Validar propiedades mínimas
    const valid = parsed
      .filter(item => item && item.genericName && item.atcCode)
      .map(normalizeMedication);
    if (valid.length === 0) {
      throw new Error('No se encontraron registros de medicamentos compatibles.');
    }

    let result: Medication[];
    if (mode === 'replace') {
      result = valid;
    } else {
      const current = getStoredMedications();
      const incomingMap = new Map(valid.map(v => [v.id, v]));
      const existingIds = new Set(current.map(m => m.id));
      const newItems = valid.filter(v => !existingIds.has(v.id));
      result = [...newItems, ...current.map(c => incomingMap.get(c.id) || c)];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    return result;
  } catch (err) {
    throw err instanceof Error ? err : new Error('Error al importar archivo');
  }
}
