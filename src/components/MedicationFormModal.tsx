import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Upload, 
  Plus, 
  Trash2, 
  Save, 
  Image as ImageIcon, 
  AlertTriangle, 
  Pill, 
  Check, 
  Info 
} from 'lucide-react';
import { 
  Medication, 
  DrugPresentation, 
  DrugInteraction, 
  PregnancyCategory, 
  LactationRisk, 
  PrescriptionType, 
  AdministrationRoute, 
  InteractionSeverity 
} from '../types/medication';
import { PRESET_IMAGES } from '../services/storageService';
import { DRUG_TAXONOMY } from '../data/drugTaxonomy';

interface MedicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (medication: Medication) => void;
  initialData?: Medication | null;
}

export const MedicationFormModal: React.FC<MedicationFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [genericName, setGenericName] = useState('');
  const [commercialNamesStr, setCommercialNamesStr] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [atcCode, setAtcCode] = useState('');
  const [anatomicalSystem, setAnatomicalSystem] = useState('1.1 Analgésicos narcóticos');
  const [subdivision, setSubdivision] = useState('Agonista puro');
  const [therapeuticClass, setTherapeuticClass] = useState('');
  const [description, setDescription] = useState('');
  const [highAlertMedicine, setHighAlertMedicine] = useState(false);
  const [prescriptionType, setPrescriptionType] = useState<PrescriptionType>('Receta médica simple');

  // Presentations
  const [presentations, setPresentations] = useState<DrugPresentation[]>([
    { id: 'p-1', form: 'Comprimidos', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos' }
  ]);

  // Mechanism & PK
  const [mechanismSummary, setMechanismSummary] = useState('');
  const [molecularTarget, setMolecularTarget] = useState('');
  const [bioavailability, setBioavailability] = useState('');
  const [halfLife, setHalfLife] = useState('');
  const [metabolism, setMetabolism] = useState('');
  const [elimination, setElimination] = useState('');

  // Indications
  const [indicationsStr, setIndicationsStr] = useState('');

  // Posology
  const [adultStandard, setAdultStandard] = useState('');
  const [pediatricDose, setPediatricDose] = useState('');
  const [renalNormal, setRenalNormal] = useState('Dosis habitual');
  const [renalModerate, setRenalModerate] = useState('');
  const [renalSevere, setRenalSevere] = useState('');
  const [renalDialysis, setRenalDialysis] = useState('');
  const [hepaticAdjustment, setHepaticAdjustment] = useState('');
  const [administrationNotes, setAdministrationNotes] = useState('');

  // Safety
  const [blackBoxWarning, setBlackBoxWarning] = useState('');
  const [contraindicationsStr, setContraindicationsStr] = useState('');
  const [adverseFrequentStr, setAdverseFrequentStr] = useState('');
  const [adverseModerateStr, setAdverseModerateStr] = useState('');
  const [adverseSevereStr, setAdverseSevereStr] = useState('');
  const [pregnancyCategory, setPregnancyCategory] = useState<PregnancyCategory>('B');
  const [pregnancyDescription, setPregnancyDescription] = useState('');
  const [lactationRisk, setLactationRisk] = useState<LactationRisk>('Compatible / Seguro');
  const [monitoringParametersStr, setMonitoringParametersStr] = useState('');

  // Storage
  const [storageAndConservation, setStorageAndConservation] = useState('Conservar a temperatura ambiente por debajo de 25°C protegido de la humedad.');

  // Interactions
  const [interactions, setInteractions] = useState<DrugInteraction[]>([]);

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setGenericName(initialData.genericName);
      setCommercialNamesStr(initialData.commercialNames.join(', '));
      const initialImages = initialData.images && initialData.images.length > 0
        ? initialData.images
        : (initialData.imageUrl ? [initialData.imageUrl] : [PRESET_IMAGES[0].url]);
      setImages(initialImages);
      setImageUrl(initialData.imageUrl || initialImages[0] || PRESET_IMAGES[0].url);
      setNewImageUrl('');
      setAtcCode(initialData.atcCode);
      setAnatomicalSystem(initialData.anatomicalSystem);
      setSubdivision(initialData.subdivision || '');
      setTherapeuticClass(initialData.therapeuticClass);
      setDescription(initialData.description);
      setHighAlertMedicine(Boolean(initialData.highAlertMedicine));
      setPrescriptionType(initialData.prescriptionType || 'Receta médica simple');

      setPresentations(initialData.presentations);

      setMechanismSummary(initialData.mechanismOfAction.summary);
      setMolecularTarget(initialData.mechanismOfAction.molecularTarget);
      setBioavailability(initialData.mechanismOfAction.pharmacokinetics.bioavailability || '');
      setHalfLife(initialData.mechanismOfAction.pharmacokinetics.halfLife || '');
      setMetabolism(initialData.mechanismOfAction.pharmacokinetics.metabolism || '');
      setElimination(initialData.mechanismOfAction.pharmacokinetics.elimination || '');

      setIndicationsStr(initialData.therapeuticIndications.join('\n'));

      setAdultStandard(initialData.posology.adultStandard);
      setPediatricDose(initialData.posology.pediatricDose || '');
      setRenalNormal(initialData.posology.renalAdjustment.normal);
      setRenalModerate(initialData.posology.renalAdjustment.moderate);
      setRenalSevere(initialData.posology.renalAdjustment.severe);
      setRenalDialysis(initialData.posology.renalAdjustment.dialysis || '');
      setHepaticAdjustment(initialData.posology.hepaticAdjustment || '');
      setAdministrationNotes(initialData.posology.administrationNotes || '');

      setBlackBoxWarning(initialData.safety.blackBoxWarning || '');
      setContraindicationsStr(initialData.safety.contraindications.join('\n'));
      setAdverseFrequentStr(initialData.safety.adverseEffects.frequent.join(', '));
      setAdverseModerateStr(initialData.safety.adverseEffects.moderate.join(', '));
      setAdverseSevereStr(initialData.safety.adverseEffects.severe.join(', '));
      setPregnancyCategory(initialData.safety.pregnancyCategory);
      setPregnancyDescription(initialData.safety.pregnancyDescription || '');
      setLactationRisk((initialData.safety.lactationRisk as LactationRisk) || (initialData.safety.lactationSafety ? 'Compatible / Seguro' : 'Precaución / Evaluar riesgo'));
      setMonitoringParametersStr(initialData.safety.monitoringParameters ? initialData.safety.monitoringParameters.join(', ') : '');

      setStorageAndConservation(initialData.storageAndConservation || initialData.storageConditions || '');
      setInteractions(initialData.interactions.map((inter, idx) => ({
        id: inter.id || `inter-${idx}-${Date.now()}`,
        interactsWith: inter.interactsWith || inter.interactingDrug || '',
        severity: inter.severity || 'Mayor',
        clinicalEffect: inter.clinicalEffect || '',
        recommendation: inter.recommendation || ''
      })));
    } else {
      // Reset defaults for new drug
      setGenericName('');
      setCommercialNamesStr('');
      setImageUrl(PRESET_IMAGES[0].url);
      setImages([PRESET_IMAGES[0].url]);
      setNewImageUrl('');
      setAtcCode('');
      setAnatomicalSystem('1.1 Analgésicos narcóticos');
      setSubdivision('Agonista puro');
      setTherapeuticClass('');
      setDescription('');
      setHighAlertMedicine(false);
      setPrescriptionType('Receta médica simple');
      setPresentations([
        { id: 'p-1', form: 'Comprimidos', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 30' }
      ]);
      setMechanismSummary('');
      setMolecularTarget('');
      setBioavailability('');
      setHalfLife('');
      setMetabolism('');
      setElimination('');
      setIndicationsStr('');
      setAdultStandard('');
      setPediatricDose('');
      setRenalNormal('Dosis habitual sin ajuste.');
      setRenalModerate('Evaluar reducción de dosis.');
      setRenalSevere('Reducir intervalo o espaciar dosis.');
      setRenalDialysis('');
      setHepaticAdjustment('');
      setAdministrationNotes('');
      setBlackBoxWarning('');
      setContraindicationsStr('');
      setAdverseFrequentStr('');
      setAdverseModerateStr('');
      setAdverseSevereStr('');
      setPregnancyCategory('B');
      setPregnancyDescription('Usar bajo supervisión médica.');
      setLactationRisk('Compatible / Seguro');
      setMonitoringParametersStr('');
      setStorageAndConservation('Conservar a temperatura ambiente por debajo de 25°C.');
      setInteractions([]);
    }
    setErrors({});
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  // Add URL to images gallery
  const handleAddImageUrl = (urlToAdd?: string) => {
    const url = (urlToAdd || newImageUrl).trim();
    if (!url) return;
    if (images.includes(url)) {
      alert('Esta URL de imagen ya está en la galería.');
      return;
    }
    const updated = [...images, url];
    setImages(updated);
    if (!imageUrl || images.length === 0) {
      setImageUrl(url);
    }
    if (!urlToAdd) setNewImageUrl('');
  };

  // Remove image from gallery
  const handleRemoveImage = (indexToRemove: number) => {
    const urlToRemove = images[indexToRemove];
    const updated = images.filter((_, idx) => idx !== indexToRemove);
    setImages(updated);
    if (imageUrl === urlToRemove) {
      setImageUrl(updated[0] || '');
    }
  };

  // Set primary cover image
  const handleSetPrimaryImage = (url: string) => {
    setImageUrl(url);
  };

  // Handle local image upload via File Reader
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar los 5 MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const newUrl = reader.result;
          setImages(prev => [...prev, newUrl]);
          if (!imageUrl) {
            setImageUrl(newUrl);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Add / Remove Presentations
  const handleAddPresentation = () => {
    setPresentations([
      ...presentations,
      {
        id: `p-${Date.now()}`,
        form: 'Comprimidos',
        concentration: '100 mg',
        route: 'Oral',
        packaging: 'Caja'
      }
    ]);
  };

  const handleUpdatePresentation = (id: string, field: keyof DrugPresentation, value: string) => {
    setPresentations(presentations.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleRemovePresentation = (id: string) => {
    if (presentations.length <= 1) {
      alert('Debe conservar al menos una presentación farmacéutica.');
      return;
    }
    setPresentations(presentations.filter(p => p.id !== id));
  };

  // Add / Remove Interactions
  const handleAddInteraction = () => {
    setInteractions([
      ...interactions,
      {
        id: `inter-${Date.now()}`,
        interactsWith: '',
        severity: 'Mayor',
        clinicalEffect: '',
        recommendation: ''
      }
    ]);
  };

  const handleUpdateInteraction = (id: string, field: keyof DrugInteraction, value: string) => {
    setInteractions(interactions.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handleRemoveInteraction = (id: string) => {
    setInteractions(interactions.filter(i => i.id !== id));
  };

  // Validation & Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!genericName.trim()) newErrors.genericName = 'El nombre genérico (DCI) es obligatorio.';
    if (!atcCode.trim()) newErrors.atcCode = 'El código ATC es obligatorio (ej. C09AA02).';
    if (!therapeuticClass.trim()) newErrors.therapeuticClass = 'La clase terapéutica es requerida.';
    if (!adultStandard.trim()) newErrors.adultStandard = 'La dosis estándar en adultos es obligatoria.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const cleanedCommercial = commercialNamesStr
      .split(/[,·\n]/)
      .map(s => s.trim())
      .filter(Boolean);

    const cleanedIndications = indicationsStr
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const cleanedContraindications = contraindicationsStr
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const cleanedFrequent = adverseFrequentStr
      .split(/[,;\n]/)
      .map(s => s.trim())
      .filter(Boolean);

    const cleanedModerate = adverseModerateStr
      .split(/[,;\n]/)
      .map(s => s.trim())
      .filter(Boolean);

    const cleanedSevere = adverseSevereStr
      .split(/[,;\n]/)
      .map(s => s.trim())
      .filter(Boolean);

    const cleanedMonitoring = monitoringParametersStr
      .split(/[,;\n]/)
      .map(s => s.trim())
      .filter(Boolean);

    const finalImages = images.length > 0 ? images : (imageUrl.trim() ? [imageUrl.trim()] : [PRESET_IMAGES[0].url]);
    const primaryImg = imageUrl.trim() || finalImages[0] || PRESET_IMAGES[0].url;

    const drugToSave: Medication = {
      id: initialData?.id || genericName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      genericName: genericName.trim(),
      commercialNames: cleanedCommercial,
      imageUrl: primaryImg,
      images: finalImages,
      atcCode: atcCode.trim().toUpperCase(),
      anatomicalSystem: anatomicalSystem.trim(),
      subdivision: subdivision.trim() || undefined,
      therapeuticClass: therapeuticClass.trim(),
      description: description.trim(),
      presentations,
      mechanismOfAction: {
        summary: mechanismSummary.trim(),
        molecularTarget: molecularTarget.trim(),
        pharmacokinetics: {
          bioavailability: bioavailability.trim(),
          halfLife: halfLife.trim(),
          metabolism: metabolism.trim(),
          elimination: elimination.trim()
        }
      },
      therapeuticIndications: cleanedIndications.length > 0 ? cleanedIndications : ['Uso según criterio médico clínico'],
      posology: {
        adultStandard: adultStandard.trim(),
        pediatricDose: pediatricDose.trim() || undefined,
        renalAdjustment: {
          normal: renalNormal.trim() || 'Dosis estándar',
          moderate: renalModerate.trim() || 'Ajustar dosis',
          severe: renalSevere.trim() || 'Reducción marcada',
          dialysis: renalDialysis.trim() || undefined
        },
        hepaticAdjustment: hepaticAdjustment.trim() || undefined,
        administrationNotes: administrationNotes.trim() || undefined
      },
      safety: {
        blackBoxWarning: blackBoxWarning.trim() || undefined,
        contraindications: cleanedContraindications.length > 0 ? cleanedContraindications : ['Hipersensibilidad conocida al principio activo'],
        adverseEffects: {
          frequent: cleanedFrequent,
          moderate: cleanedModerate,
          severe: cleanedSevere
        },
        pregnancyCategory,
        pregnancyDescription: pregnancyDescription.trim(),
        lactationRisk,
        monitoringParameters: cleanedMonitoring
      },
      interactions: interactions
        .filter(i => (i.interactsWith || i.interactingDrug || '').trim() !== '')
        .map((i, idx) => ({
          id: i.id || `inter-${idx}-${Date.now()}`,
          interactsWith: (i.interactsWith || i.interactingDrug || '').trim(),
          severity: i.severity,
          clinicalEffect: i.clinicalEffect,
          recommendation: i.recommendation
        })),
      storageAndConservation: storageAndConservation.trim(),
      highAlertMedicine,
      prescriptionType,
      createdAt: initialData?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isCustom: true
    };

    onSave(drugToSave);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center">
              <Pill className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {initialData ? 'Editar Medicamento Clínico' : 'Ingresar Nuevo Medicamento al Vademécum'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Complete la ficha farmacológica para actualizar la base de datos interactiva.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* SECTION 1: Nomenclatura y Clasificación */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <span>01. Nomenclatura y Clasificación Farmacológica</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nombre Genérico / DCI <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={genericName}
                  onChange={(e) => setGenericName(e.target.value)}
                  placeholder="ej. Amoxicilina + Ácido Clavulánico"
                  className={`w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-slate-900 dark:text-white ${
                    errors.genericName ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.genericName && <p className="text-rose-500 text-[11px] mt-1">{errors.genericName}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Código ATC <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={atcCode}
                  onChange={(e) => setAtcCode(e.target.value)}
                  placeholder="ej. J01CR02"
                  className={`w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg font-mono text-slate-900 dark:text-white ${
                    errors.atcCode ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.atcCode && <p className="text-rose-500 text-[11px] mt-1">{errors.atcCode}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Marcas Comerciales Frecuentes
                </label>
                <input
                  type="text"
                  value={commercialNamesStr}
                  onChange={(e) => setCommercialNamesStr(e.target.value)}
                  placeholder="Separadas por comas (ej. Augmentine, Clavinex, Curam)"
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Clase Terapéutica / Grupo <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={therapeuticClass}
                  onChange={(e) => setTherapeuticClass(e.target.value)}
                  placeholder="ej. Antibiótico Betalactámico / Inhibidor de Betalactamasa"
                  className={`w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-slate-900 dark:text-white ${
                    errors.therapeuticClass ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.therapeuticClass && <p className="text-rose-500 text-[11px] mt-1">{errors.therapeuticClass}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Clasificación Farmacológica (Temario 1 - 4) <span className="text-rose-500">*</span>
                </label>
                <select
                  value={anatomicalSystem}
                  onChange={(e) => {
                    const newSys = e.target.value;
                    setAnatomicalSystem(newSys);
                    const subObj = DRUG_TAXONOMY.flatMap(g => g.subclasses).find(s => s.name === newSys);
                    if (subObj && subObj.divisions.length > 0) {
                      setSubdivision(subObj.divisions[0]);
                    } else {
                      setSubdivision('');
                    }
                  }}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  {DRUG_TAXONOMY.map(group => (
                    <optgroup key={group.id} label={group.name.toUpperCase()}>
                      {group.subclasses.map(sub => (
                        <option key={sub.id} value={sub.name}>
                          {sub.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subdivisión / Familia Específica
                </label>
                {(() => {
                  const currentSub = DRUG_TAXONOMY.flatMap(g => g.subclasses).find(s => s.name === anatomicalSystem);
                  if (currentSub && currentSub.divisions.length > 0) {
                    return (
                      <select
                        value={subdivision}
                        onChange={(e) => setSubdivision(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                      >
                        {currentSub.divisions.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    );
                  }
                  return (
                    <input
                      type="text"
                      value={subdivision}
                      onChange={(e) => setSubdivision(e.target.value)}
                      placeholder="ej. Agonista puro, Benzodiacepinas, etc."
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                    />
                  );
                })()}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Régimen de Prescripción
                </label>
                <select
                  value={prescriptionType}
                  onChange={(e) => setPrescriptionType(e.target.value as PrescriptionType)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  <option value="Receta médica simple">Receta médica simple</option>
                  <option value="Venta libre (OTC)">Venta libre (OTC)</option>
                  <option value="Receta retenida / Controlado">Receta retenida / Controlado</option>
                  <option value="Uso hospitalario exclusivo">Uso hospitalario exclusivo</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="highAlert"
                checked={highAlertMedicine}
                onChange={(e) => setHighAlertMedicine(e.target.checked)}
                className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
              />
              <label htmlFor="highAlert" className="text-slate-800 dark:text-slate-200 font-semibold cursor-pointer">
                Fármaco de Alto Riesgo (ISMP / Institute for Safe Medication Practices)
              </label>
            </div>
          </div>

          {/* SECTION 2: Galería de Imágenes Clínicas (Múltiples imágenes por URL) */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                <span>02. Galería de Imágenes Clínicas ({images.length})</span>
              </h3>
              <span className="text-[11px] text-slate-500 dark:text-slate-300">
                Puedes registrar varias fotos por URL (caja, blíster, ampolla, comprimido)
              </span>
            </div>

            {/* Ingrese nueva URL */}
            <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2.5">
              <label className="block font-semibold text-slate-800 dark:text-slate-200 text-xs">
                Agregar imagen a través de URL:
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddImageUrl();
                    }
                  }}
                  placeholder="https://ejemplo.com/foto-farmaco.jpg (Pegar enlace web directo y pulsar Agregar)"
                  className="flex-1 p-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="button"
                  onClick={() => handleAddImageUrl()}
                  className="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Agregar URL</span>
                </button>
              </div>

              {/* Botones secundarios: Archivo local y presets */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-200/80 dark:border-slate-750">
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md font-medium text-xs transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-sky-600" />
                    <span>O subir foto desde archivo</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] text-slate-500 dark:text-slate-300">Presets clínicos:</span>
                  {PRESET_IMAGES.slice(0, 4).map(preset => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleAddImageUrl(preset.url)}
                      className="px-2 py-1 rounded text-[11px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-400 text-slate-600 dark:text-slate-200 transition-colors cursor-pointer"
                      title="Agregar esta imagen prediseñada"
                    >
                      + {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grilla de imágenes del medicamento */}
            {images.length > 0 ? (
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 flex items-center justify-between">
                  <span>Imágenes asignadas a este fármaco ({images.length}):</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-300">Haz clic en "Portada" para elegir la foto principal del catálogo</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {images.map((img, idx) => {
                    const isPrimary = img === (imageUrl || images[0]);
                    return (
                      <div
                        key={idx}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all bg-slate-100 dark:bg-slate-800 ${
                          isPrimary
                            ? 'border-sky-500 shadow-md ring-2 ring-sky-500/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <div className="h-24 w-full bg-slate-900/5 overflow-hidden">
                          <img
                            src={img}
                            alt={`Imagen ${idx + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>

                        {/* Badges y Controles */}
                        <div className="p-1.5 bg-white dark:bg-slate-850 flex items-center justify-between gap-1 border-t border-slate-150 dark:border-slate-800">
                          {isPrimary ? (
                            <span className="text-[10px] font-bold text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-950/80 px-1.5 py-0.5 rounded">
                              ★ Portada
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleSetPrimaryImage(img)}
                              className="text-[10px] text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:underline font-medium cursor-pointer"
                              title="Hacer portada principal"
                            >
                              Fijar portada
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="p-1 text-slate-500 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/60 rounded cursor-pointer transition-colors"
                            title="Eliminar esta foto"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500 dark:text-slate-300">
                <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-60" />
                <p className="text-xs">No hay imágenes agregadas aún. Ingrese una URL arriba para agregar la primera.</p>
              </div>
            )}
          </div>

          {/* SECTION 3: Descripción Clínica */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800">
              03. Descripción y Resumen Farmacológico
            </h3>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Resumen del fármaco, familia química, características clínicas relevantes..."
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          {/* SECTION 4: Presentaciones Farmacéuticas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                04. Formas y Presentaciones Farmacéuticas ({presentations.length})
              </h3>
              <button
                type="button"
                onClick={handleAddPresentation}
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Agregar presentación</span>
              </button>
            </div>

            <div className="space-y-2">
              {presentations.map((p, index) => (
                <div key={p.id} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                  <div>
                    <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Forma</label>
                    <input
                      type="text"
                      value={p.form}
                      onChange={(e) => handleUpdatePresentation(p.id, 'form', e.target.value)}
                      placeholder="ej. Comprimidos recubiertos"
                      className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Concentración</label>
                    <input
                      type="text"
                      value={p.concentration}
                      onChange={(e) => handleUpdatePresentation(p.id, 'concentration', e.target.value)}
                      placeholder="ej. 500 mg / 125 mg"
                      className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded font-mono text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Vía</label>
                    <select
                      value={p.route}
                      onChange={(e) => handleUpdatePresentation(p.id, 'route', e.target.value)}
                      className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                    >
                      <option value="Oral">Oral</option>
                      <option value="Intravenosa">Intravenosa</option>
                      <option value="Intramuscular">Intramuscular</option>
                      <option value="Subcutánea">Subcutánea</option>
                      <option value="Inhalatoria">Inhalatoria</option>
                      <option value="Tópica">Tópica</option>
                      <option value="Oftálmica">Oftálmica</option>
                      <option value="Rectal">Rectal</option>
                      <option value="Sublingual">Sublingual</option>
                      <option value="Transdérmica">Transdérmica</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Empaque / Envase</label>
                      <input
                        type="text"
                        value={p.packaging || ''}
                        onChange={(e) => handleUpdatePresentation(p.id, 'packaging', e.target.value)}
                        placeholder="ej. Caja x 20 comprimidos"
                        className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemovePresentation(p.id)}
                      className="text-rose-500 hover:text-rose-700 p-1.5 mt-3.5"
                      title="Eliminar presentación"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: Mecanismo de Acción y Farmacocinética */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800">
              05. Mecanismo de Acción & Farmacocinética
            </h3>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Resumen del Mecanismo Fisiopatológico
              </label>
              <textarea
                rows={2}
                value={mechanismSummary}
                onChange={(e) => setMechanismSummary(e.target.value)}
                placeholder="Inhibe la síntesis de la pared celular bacteriana mediante unión covalente a transpeptidasas PBP..."
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Diana Molecular / Receptor / Enzima
              </label>
              <input
                type="text"
                value={molecularTarget}
                onChange={(e) => setMolecularTarget(e.target.value)}
                placeholder="ej. PBP-1A/2/3, Receptor Beta-2 adrenérgico, HMG-CoA Reductasa"
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold block mb-1">Biodisponibilidad</label>
                <input
                  type="text"
                  value={bioavailability}
                  onChange={(e) => setBioavailability(e.target.value)}
                  placeholder="ej. ~70-80%"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold block mb-1">Vida Media (t½)</label>
                <input
                  type="text"
                  value={halfLife}
                  onChange={(e) => setHalfLife(e.target.value)}
                  placeholder="ej. 1 a 2 horas"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded font-mono text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold block mb-1">Metabolismo</label>
                <input
                  type="text"
                  value={metabolism}
                  onChange={(e) => setMetabolism(e.target.value)}
                  placeholder="ej. Hepático vía CYP3A4"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold block mb-1">Eliminación</label>
                <input
                  type="text"
                  value={elimination}
                  onChange={(e) => setElimination(e.target.value)}
                  placeholder="ej. Renal inalterado 60%"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* SECTION 6: Indicaciones Terapéuticas */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800">
              06. Indicaciones Terapéuticas
            </h3>
            <textarea
              rows={3}
              value={indicationsStr}
              onChange={(e) => setIndicationsStr(e.target.value)}
              placeholder="Ingrese cada indicación clínica en una línea separada..."
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          {/* SECTION 7: Posología & Ajustes Renales */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800">
              07. Posología y Guía de Dosificación
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Dosis Adulto Estándar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={adultStandard}
                  onChange={(e) => setAdultStandard(e.target.value)}
                  placeholder="ej. 875/125 mg cada 12 horas o 500 mg cada 8 horas VO"
                  className={`w-full p-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-slate-900 dark:text-white font-mono ${
                    errors.adultStandard ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.adultStandard && <p className="text-rose-500 text-[11px] mt-1">{errors.adultStandard}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Dosis Pediátrica
                </label>
                <input
                  type="text"
                  value={pediatricDose}
                  onChange={(e) => setPediatricDose(e.target.value)}
                  placeholder="ej. 25 a 45 mg/kg/día dividido cada 12 horas"
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono"
                />
              </div>
            </div>

            {/* Renal adjustments */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-slate-700 dark:text-slate-300 block">
                Ajuste en Insuficiencia Renal (Aclaramiento de Creatinina - ClCr)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-1">ClCr &gt; 50 mL/min</label>
                  <input
                    type="text"
                    value={renalNormal}
                    onChange={(e) => setRenalNormal(e.target.value)}
                    placeholder="Dosis estándar"
                    className="w-full p-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-amber-700 dark:text-amber-300 font-semibold block mb-1">ClCr 10 - 50 mL/min (Moderada)</label>
                  <input
                    type="text"
                    value={renalModerate}
                    onChange={(e) => setRenalModerate(e.target.value)}
                    placeholder="ej. 500 mg cada 12h"
                    className="w-full p-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-rose-700 dark:text-rose-300 font-semibold block mb-1">ClCr &lt; 10 mL/min (Severa)</label>
                  <input
                    type="text"
                    value={renalSevere}
                    onChange={(e) => setRenalSevere(e.target.value)}
                    placeholder="ej. 500 mg cada 24h"
                    className="w-full p-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-purple-700 dark:text-purple-300 font-semibold block mb-1">Consideración en Hemodiálisis</label>
                <input
                  type="text"
                  value={renalDialysis}
                  onChange={(e) => setRenalDialysis(e.target.value)}
                  placeholder="ej. Administrar dosis suplementaria post-diálisis"
                  className="w-full p-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Ajuste en Insuficiencia Hepática
                </label>
                <input
                  type="text"
                  value={hepaticAdjustment}
                  onChange={(e) => setHepaticAdjustment(e.target.value)}
                  placeholder="ej. Reducir 50% en Child-Pugh C o contraindicado"
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Notas de Administración
                </label>
                <input
                  type="text"
                  value={administrationNotes}
                  onChange={(e) => setAdministrationNotes(e.target.value)}
                  placeholder="ej. Tomar con alimentos para minimizar malestar gástrico"
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* SECTION 8: Seguridad y Efectos Adversos */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800">
              08. Seguridad, Reacciones Adversas y Contraindicaciones
            </h3>

            <div>
              <label className="block font-semibold text-rose-700 dark:text-rose-400 mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Alerta de Seguridad Black Box (si aplica)
              </label>
              <textarea
                rows={2}
                value={blackBoxWarning}
                onChange={(e) => setBlackBoxWarning(e.target.value)}
                placeholder="Advertencia de recuadro negro para riesgos mortales o discapacitantes..."
                className="w-full p-2.5 bg-rose-50/40 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/60 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Contraindicaciones (una por línea)
              </label>
              <textarea
                rows={3}
                value={contraindicationsStr}
                onChange={(e) => setContraindicationsStr(e.target.value)}
                placeholder="Hipersensibilidad confirmada&#10;Hepatopatía grave activa&#10;Tercer trimestre de embarazo"
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Efectos Frecuentes (&gt; 10%)
                </label>
                <textarea
                  rows={2}
                  value={adverseFrequentStr}
                  onChange={(e) => setAdverseFrequentStr(e.target.value)}
                  placeholder="Diarrea, náuseas, cefalea (separados por comas)"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 block mb-1">
                  Moderadas (1% a 10%)
                </label>
                <textarea
                  rows={2}
                  value={adverseModerateStr}
                  onChange={(e) => setAdverseModerateStr(e.target.value)}
                  placeholder="Vómitos, prurito, hiperpotasemia"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-rose-700 dark:text-rose-400 block mb-1">
                  Graves / Alarma (&lt; 1%)
                </label>
                <textarea
                  rows={2}
                  value={adverseSevereStr}
                  onChange={(e) => setAdverseSevereStr(e.target.value)}
                  placeholder="Anafilaxia, Stevens-Johnson, paro respiratorio"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white text-xs"
                />
              </div>
            </div>

            {/* Pregnancy & Lactation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Categoría de Riesgo en Embarazo (FDA)
                </label>
                <select
                  value={pregnancyCategory}
                  onChange={(e) => setPregnancyCategory(e.target.value as PregnancyCategory)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-mono font-bold"
                >
                  <option value="A">Categoría A (Seguro en estudios controlados humanos)</option>
                  <option value="B">Categoría B (Sin evidencia de riesgo en estudios)</option>
                  <option value="C">Categoría C (No puede descartarse riesgo; evaluar balance)</option>
                  <option value="D">Categoría D (Evidencia positiva de riesgo fetal; solo vital)</option>
                  <option value="X">Categoría X (Contraindicado absoluto en embarazo)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Riesgo en Lactancia Materna
                </label>
                <select
                  value={lactationRisk}
                  onChange={(e) => setLactationRisk(e.target.value as LactationRisk)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  <option value="Compatible / Seguro">Compatible / Seguro</option>
                  <option value="Precaución / Evaluar riesgo">Precaución / Evaluar riesgo</option>
                  <option value="Contraindicado">Contraindicado</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Detalle / Comentario Clínico sobre Embarazo
              </label>
              <input
                type="text"
                value={pregnancyDescription}
                onChange={(e) => setPregnancyDescription(e.target.value)}
                placeholder="ej. No se observó teratogenicidad en animales; evitar en rotura prematura de membranas"
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* SECTION 9: Interacciones Farmacológicas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                09. Interacciones Farmacológicas ({interactions.length})
              </h3>
              <button
                type="button"
                onClick={handleAddInteraction}
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Agregar interacción</span>
              </button>
            </div>

            <div className="space-y-3">
              {interactions.map((item, idx) => {
                const itemId = item.id || `inter-${idx}`;
                return (
                  <div key={itemId} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Fármaco o Grupo que Interactúa</label>
                        <input
                          type="text"
                          value={item.interactsWith || item.interactingDrug || ''}
                          onChange={(e) => handleUpdateInteraction(itemId, 'interactsWith', e.target.value)}
                          placeholder="ej. Warfarina, Metotrexato, AINEs"
                          className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white font-medium"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Severidad</label>
                          <select
                            value={item.severity}
                            onChange={(e) => handleUpdateInteraction(itemId, 'severity', e.target.value)}
                            className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white font-bold"
                          >
                            <option value="Contraindicada">Contraindicada (Grave)</option>
                            <option value="Mayor">Mayor</option>
                            <option value="Moderada">Moderada</option>
                            <option value="Menor">Menor</option>
                          </select>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveInteraction(itemId)}
                          className="text-rose-500 hover:text-rose-700 p-1.5 mt-3.5"
                          title="Eliminar interacción"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Efecto Clínico / Fisiológico</label>
                      <input
                        type="text"
                        value={item.clinicalEffect}
                        onChange={(e) => handleUpdateInteraction(itemId, 'clinicalEffect', e.target.value)}
                        placeholder="ej. Aumento de litemia con riesgo de neurotoxicidad..."
                        className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mb-0.5">Recomendación Médica Sugerida</label>
                      <input
                        type="text"
                        value={item.recommendation}
                        onChange={(e) => handleUpdateInteraction(itemId, 'recommendation', e.target.value)}
                        placeholder="ej. Monitorear niveles séricos o suspender AINE..."
                        className="w-full p-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white text-xs"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 10: Almacenamiento */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider pb-1 border-b border-slate-200 dark:border-slate-800">
              10. Almacenamiento y Conservación
            </h3>
            <input
              type="text"
              value={storageAndConservation}
              onChange={(e) => setStorageAndConservation(e.target.value)}
              placeholder="ej. Conservar a temperatura inferior a 25°C en su envase original..."
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
            />
          </div>

          {/* Footer Save Button */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <Save className="w-4 h-4" />
              <span>Guardar en Base de Datos</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
