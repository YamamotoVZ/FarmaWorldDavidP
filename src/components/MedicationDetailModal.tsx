import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Printer, 
  ShieldAlert, 
  Calculator, 
  Edit3, 
  AlertTriangle, 
  Pill, 
  Activity, 
  Layers, 
  FileCheck, 
  Droplet,
  Clock,
  Sparkles,
  Info,
  BookOpen,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  Flame,
  AlertCircle,
  Image as ImageIcon,
  Plus,
  Trash2,
  Star,
  ZoomIn
} from 'lucide-react';
import { Medication } from '../types/medication';

interface MedicationDetailModalProps {
  medication: Medication | null;
  onClose: () => void;
  onEdit: (med: Medication) => void;
  onSelectForInteraction: (med: Medication) => void;
  isSelectedForInteraction: boolean;
  onNavigateToCalculator: (med: Medication) => void;
  onUpdateMedication?: (med: Medication) => void;
}

type TabKey = 'general' | 'mechanism' | 'indications' | 'posology' | 'safety' | 'interactions' | 'all';

interface TabItem {
  id: TabKey;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | string;
}

export const MedicationDetailModal: React.FC<MedicationDetailModalProps> = ({
  medication,
  onClose,
  onEdit,
  onSelectForInteraction,
  isSelectedForInteraction,
  onNavigateToCalculator,
  onUpdateMedication
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('general');
  const [copied, setCopied] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAddingUrlModalOpen, setIsAddingUrlModalOpen] = useState(false);
  const [newImageUrlInput, setNewImageUrlInput] = useState('');
  const [imageActionMessage, setImageActionMessage] = useState<string | null>(null);
  const [previewZoomImage, setPreviewZoomImage] = useState<string | null>(null);

  // Compute allImages before any conditional return to strictly honor React hook rules
  const allImages = useMemo(() => {
    if (!medication) return [];
    if (medication.images && medication.images.length > 0) {
      return medication.images;
    }
    return medication.imageUrl ? [medication.imageUrl] : [];
  }, [medication]);

  // Reset image view state when switching active drug
  useEffect(() => {
    setSelectedImageIndex(0);
    setIsAddingUrlModalOpen(false);
    setNewImageUrlInput('');
    setPreviewZoomImage(null);
  }, [medication?.id]);

  if (!medication) return null;

  const activeImage = allImages[selectedImageIndex] || medication.imageUrl || '';

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `FICHA FARMACOLÓGICA: ${medication.genericName} (ATC: ${medication.atcCode})
Marcas: ${medication.commercialNames.join(', ')}
Grupo: ${medication.therapeuticClass} (${medication.anatomicalSystem})

1. DESCRIPCIÓN:
${medication.description}

2. MECANISMO DE ACCIÓN:
${medication.mechanismOfAction.summary}
Diana molecular: ${medication.mechanismOfAction.molecularTarget}
Farmacocinética: Biodisponibilidad: ${medication.mechanismOfAction.pharmacokinetics.bioavailability || 'N/R'}, t½: ${medication.mechanismOfAction.pharmacokinetics.halfLife || 'N/R'}, Metabolismo: ${medication.mechanismOfAction.pharmacokinetics.metabolism || 'N/R'}, Excreción: ${medication.mechanismOfAction.pharmacokinetics.elimination || 'N/R'}

3. INDICACIONES:
${medication.therapeuticIndications.map((ind, i) => `• ${ind}`).join('\n')}

4. POSOLOGÍA:
Adultos: ${medication.posology.adultStandard}
${medication.posology.pediatricDose ? `Pediatría: ${medication.posology.pediatricDose}\n` : ''}Ajuste Renal: Normal: ${medication.posology.renalAdjustment.normal} | Moderado: ${medication.posology.renalAdjustment.moderate} | Severo: ${medication.posology.renalAdjustment.severe}

5. SEGURIDAD:
${medication.safety.blackBoxWarning ? `BLACK BOX WARNING: ${medication.safety.blackBoxWarning}\n` : ''}Contraindicaciones: ${medication.safety.contraindications.join(', ')}
Embarazo: Cat. ${medication.safety.pregnancyCategory} | Lactancia: ${medication.safety.lactationRisk || medication.safety.lactationSafety || 'Evaluar'}

6. INTERACCIONES (${medication.interactions.length}):
${medication.interactions.map(it => `• Con: ${it.interactsWith || it.interactingDrug} [${it.severity}] -> ${it.clinicalEffect}`).join('\n')}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: TabItem[] = [
    { id: 'general', label: 'General & Formas', shortLabel: 'General', icon: Pill },
    { id: 'mechanism', label: 'Mecanismo & Cinética', shortLabel: 'Mecanismo', icon: Activity },
    { id: 'indications', label: 'Indicaciones Clínicas', shortLabel: 'Indicaciones', icon: FileCheck },
    { id: 'posology', label: 'Posología & Dosis', shortLabel: 'Posología', icon: Clock },
    { id: 'safety', label: 'Seguridad & Efectos', shortLabel: 'Seguridad', icon: ShieldAlert },
    { 
      id: 'interactions', 
      label: 'Interacciones', 
      shortLabel: 'Interacc.', 
      icon: Layers, 
      badge: medication.interactions.length 
    },
    { id: 'all', label: 'Vista Completa', shortLabel: 'Todo', icon: BookOpen },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddImageUrl = (url: string) => {
    const trimmed = url.trim();
    if (!trimmed) return;
    if (allImages.includes(trimmed)) {
      alert('Esta URL de imagen ya se encuentra registrada en esta ficha.');
      return;
    }
    const updatedImages = [...allImages, trimmed];
    const updatedMed: Medication = {
      ...medication,
      images: updatedImages,
      imageUrl: medication.imageUrl || trimmed
    };
    if (onUpdateMedication) {
      onUpdateMedication(updatedMed);
      setSelectedImageIndex(updatedImages.length - 1);
      setNewImageUrlInput('');
      setIsAddingUrlModalOpen(false);
      setImageActionMessage('¡Nueva imagen agregada exitosamente a la ficha!');
      setTimeout(() => setImageActionMessage(null), 3000);
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    if (allImages.length <= 1) {
      alert('La ficha debe conservar al menos una imagen clínica.');
      return;
    }
    const updatedImages = allImages.filter((_, i) => i !== indexToRemove);
    const updatedMed: Medication = {
      ...medication,
      images: updatedImages,
      imageUrl: updatedImages[0]
    };
    if (onUpdateMedication) {
      onUpdateMedication(updatedMed);
      setSelectedImageIndex(0);
      setImageActionMessage('Imagen eliminada de la ficha.');
      setTimeout(() => setImageActionMessage(null), 3000);
    }
  };

  const handleSetPrimary = (index: number) => {
    const chosen = allImages[index];
    const rest = allImages.filter((_, i) => i !== index);
    const reordered = [chosen, ...rest];
    const updatedMed: Medication = {
      ...medication,
      images: reordered,
      imageUrl: chosen
    };
    if (onUpdateMedication) {
      onUpdateMedication(updatedMed);
      setSelectedImageIndex(0);
      setImageActionMessage('Imagen fijada como portada principal.');
      setTimeout(() => setImageActionMessage(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-5xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden print:max-h-none print:shadow-none print:border-none animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ============================================================== */}
        {/* HEADER PRINCIPAL DE LA FICHA MÉDICA                           */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-linear-to-b from-slate-50 to-white dark:from-slate-850 dark:to-slate-900 flex flex-col sm:flex-row sm:items-start justify-between gap-4 print:bg-white print:border-b-2">
          
          <div className="flex items-start gap-4">
            {/* Foto / Ícono del medicamento */}
            <div 
              onClick={() => {
                if (activeImage) setPreviewZoomImage(activeImage);
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 overflow-hidden shrink-0 shadow-sm relative group cursor-pointer"
              title="Clic para ampliar imagen"
            >
              {activeImage ? (
                <>
                  <img
                    src={activeImage}
                    alt={medication.imageAlt || medication.genericName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {allImages.length > 1 && (
                    <div className="absolute bottom-1 right-1 bg-slate-950/80 text-white text-[9px] font-mono font-bold px-1 rounded backdrop-blur-xs">
                      {selectedImageIndex + 1}/{allImages.length}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                    <ZoomIn className="w-5 h-5 drop-shadow" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50">
                  <Pill className="w-8 h-8" />
                </div>
              )}
            </div>

            <div className="min-w-0">
              {/* Badges superiores de metadatos clínicos */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-300 dark:border-sky-800">
                  ATC: {medication.atcCode}
                </span>

                {medication.highAlertMedicine && (
                  <span className="bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    ALTO RIESGO ISMP
                  </span>
                )}

                <span className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                  Embarazo: <strong className="text-slate-900 dark:text-white font-mono">Cat. {medication.safety.pregnancyCategory}</strong>
                </span>

                {medication.prescriptionType && (
                  <span className="text-xs text-slate-500 dark:text-slate-300 hidden sm:inline">
                    · {medication.prescriptionType}
                  </span>
                )}
              </div>

              {/* Nombre genérico (DCI) */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>{medication.genericName}</span>
                {medication.isCustom && (
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                    Personalizado
                  </span>
                )}
              </h2>

              {/* Nombres comerciales destacados */}
              {medication.commercialNames.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-sky-700 dark:text-sky-300 font-semibold mt-1">
                  <span className="text-slate-500 dark:text-slate-300 font-normal">Nombres comerciales:</span>
                  <span className="bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800">
                    {medication.commercialNames.join(' · ')}
                  </span>
                </div>
              )}

              {/* Grupo anatómico, subclase y subdivisión */}
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 mt-1.5 flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-sky-800 dark:text-sky-200 bg-sky-50 dark:bg-sky-950/70 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800">
                  {medication.anatomicalSystem}
                </span>
                {medication.subdivision && (
                  <span className="font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    ↳ {medication.subdivision}
                  </span>
                )}
                <span className="text-slate-400 dark:text-slate-500">·</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">{medication.therapeuticClass}</span>
              </div>
            </div>
          </div>

          {/* Botones de acción rápida en cabecera */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-start print:hidden">
            <button
              onClick={handleCopySummary}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                copied 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title="Copiar resumen clínico de la ficha"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Copiar'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Imprimir ficha médica oficial"
              aria-label="Imprimir ficha"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Cerrar ficha"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BARRA DE APARTADOS (TAB SELECTOR DESTACADO)                    */}
        {/* ============================================================== */}
        <div className="bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-2 flex items-center gap-1.5 sm:gap-2 overflow-x-auto print:hidden shrink-0">
          <div className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:flex items-center gap-1.5 mr-2 shrink-0">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Apartados:</span>
          </div>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm ring-1 ring-sky-700 dark:ring-sky-500'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700 border border-slate-200/90 dark:border-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-200'}`} />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                    isActive 
                      ? 'bg-white/25 text-white' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Sub-navegador de anclas si está en modo "Vista Completa" */}
        {activeTab === 'all' && (
          <div className="bg-sky-50 dark:bg-sky-950/40 border-b border-sky-150 dark:border-sky-900/40 px-4 sm:px-6 py-1.5 flex items-center gap-2 overflow-x-auto text-[11px] text-sky-800 dark:text-sky-300 font-medium print:hidden">
            <span className="font-bold shrink-0">Saltar a:</span>
            <button onClick={() => scrollToSection('sec-general')} className="hover:underline shrink-0">1. General</button>
            <span>·</span>
            <button onClick={() => scrollToSection('sec-mechanism')} className="hover:underline shrink-0">2. Mecanismo</button>
            <span>·</span>
            <button onClick={() => scrollToSection('sec-indications')} className="hover:underline shrink-0">3. Indicaciones</button>
            <span>·</span>
            <button onClick={() => scrollToSection('sec-posology')} className="hover:underline shrink-0">4. Posología</button>
            <span>·</span>
            <button onClick={() => scrollToSection('sec-safety')} className="hover:underline shrink-0">5. Seguridad</button>
            <span>·</span>
            <button onClick={() => scrollToSection('sec-interactions')} className="hover:underline shrink-0">6. Interacciones</button>
          </div>
        )}

        {/* ============================================================== */}
        {/* CUERPO DEL CONTENIDO SCROLLABLE                                */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-8 flex-1 text-slate-800 dark:text-slate-200 text-sm">
          
          {/* ============================================================ */}
          {/* APARTADO 1: GENERAL & FORMAS FARMACÉUTICAS                   */}
          {/* ============================================================ */}
          {(activeTab === 'general' || activeTab === 'all' || window.matchMedia('print').matches) && (
            <section id="sec-general" className="space-y-6">
              
              {/* Encabezado del Apartado 1 */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0 border border-sky-200 dark:border-sky-800 shadow-xs">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Apartado 1</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-300">Identificación & Presentaciones</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    General, Formas Farmacéuticas & Presentaciones
                  </h3>
                </div>
              </div>

              {/* Sub-apartado: Descripción Farmacológica Profesional */}
              <div className="bg-slate-50/80 dark:bg-slate-850 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-4 bg-sky-600 dark:bg-sky-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Descripción Farmacológica
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {medication.description}
                </p>
              </div>

              {/* Sub-apartado: Galería de Imágenes Clínicas y Empaques (Multi-imagen por URL) */}
              <div className="space-y-3 bg-white dark:bg-slate-850 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-150 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-sky-600 dark:bg-sky-400 rounded-full shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      <span>Galería de Imágenes Clínicas ({allImages.length})</span>
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    {imageActionMessage && (
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded animate-in fade-in">
                        {imageActionMessage}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsAddingUrlModalOpen(prev => !prev)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-xs cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+ Agregar imagen por URL</span>
                    </button>
                  </div>
                </div>

                {/* Formulario desplegable para agregar imagen vía URL */}
                {isAddingUrlModalOpen && (
                  <div className="p-3.5 bg-sky-50/70 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-850 space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-900 dark:text-sky-200">
                        Ingresar enlace web directo de la imagen:
                      </span>
                      <button
                        onClick={() => setIsAddingUrlModalOpen(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="url"
                        value={newImageUrlInput}
                        onChange={(e) => setNewImageUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddImageUrl(newImageUrlInput);
                          }
                        }}
                        placeholder="https://ejemplo.com/caja-medicamento.jpg (Pegar URL de foto y pulsar Guardar)"
                        className="flex-1 p-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        autoFocus
                      />
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleAddImageUrl(newImageUrlInput)}
                          disabled={!newImageUrlInput.trim()}
                          className="px-3.5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer shadow-xs"
                        >
                          Guardar en Ficha
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setNewImageUrlInput('');
                            setIsAddingUrlModalOpen(false);
                          }}
                          className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visor interactivo y carrusel de miniaturas */}
                {allImages.length > 0 ? (
                  <div className="space-y-3">
                    {/* Gran Visor Activo */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950/5 dark:bg-slate-900/60 flex items-center justify-center max-h-72 sm:max-h-80 group">
                      <img
                        src={activeImage}
                        alt={`Vista clínica de ${medication.genericName}`}
                        referrerPolicy="no-referrer"
                        className="max-h-72 sm:max-h-80 w-auto max-w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-101"
                      />

                      {/* Botón flotante para ver en tamaño completo / Zoom */}
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                        <button
                          onClick={() => setPreviewZoomImage(activeImage)}
                          className="p-1.5 bg-slate-900/75 hover:bg-slate-900 text-white rounded-lg backdrop-blur-xs transition-colors cursor-pointer shadow-sm"
                          title="Ampliar imagen"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Barra inferior del visor activo con acciones */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-2.5 flex items-center justify-between text-xs text-white">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
                            Foto {selectedImageIndex + 1} de {allImages.length}
                          </span>
                          {activeImage === medication.imageUrl && (
                            <span className="bg-sky-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                              ★ Portada Actual
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          {activeImage !== medication.imageUrl && onUpdateMedication && (
                            <button
                              type="button"
                              onClick={() => handleSetPrimary(selectedImageIndex)}
                              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-[11px] font-semibold backdrop-blur-xs transition-colors cursor-pointer"
                              title="Fijar esta imagen como portada del vademécum"
                            >
                              Establecer como Portada
                            </button>
                          )}

                          {allImages.length > 1 && onUpdateMedication && (
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(selectedImageIndex)}
                              className="p-1 bg-rose-600/80 hover:bg-rose-600 text-white rounded text-[11px] backdrop-blur-xs transition-colors cursor-pointer"
                              title="Eliminar esta foto de la ficha"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Fila de miniaturas de la galería */}
                    <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
                      {allImages.map((img, idx) => {
                        const isSelected = idx === selectedImageIndex;
                        const isCover = img === medication.imageUrl;

                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-slate-100 dark:bg-slate-800 ${
                              isSelected
                                ? 'border-sky-600 ring-2 ring-sky-500/30 scale-102'
                                : 'border-slate-200 dark:border-slate-700 hover:border-slate-400 opacity-80 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Miniatura ${idx + 1}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            {isCover && (
                              <div className="absolute top-0.5 left-0.5 bg-sky-600 text-white text-[8px] font-bold px-1 rounded shadow-xs">
                                ★
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Botón rápido "+ Agregar URL" al final del carrusel */}
                      <button
                        type="button"
                        onClick={() => setIsAddingUrlModalOpen(true)}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shrink-0 border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 text-slate-500 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer text-[10px] font-bold"
                        title="Agregar nueva imagen por URL"
                      >
                        <Plus className="w-4 h-4" />
                        <span>+ URL</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500 dark:text-slate-300">
                    <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-60" />
                    <p className="text-xs font-semibold mb-2">No hay imágenes registradas para este medicamento</p>
                    <button
                      type="button"
                      onClick={() => setIsAddingUrlModalOpen(true)}
                      className="px-3 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors cursor-pointer"
                    >
                      + Agregar la primera imagen por URL
                    </button>
                  </div>
                )}
              </div>

              {/* Sub-apartado: Tabla de Presentaciones Comerciales */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-sky-600 dark:bg-sky-400 rounded-full shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Formas Farmacéuticas, Vías & Envases ({medication.presentations.length})
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-300 font-mono">Presentaciones disponibles</span>
                </div>

                <div className="border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-xs bg-white dark:bg-slate-900">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold">
                        <tr>
                          <th className="py-3 px-3.5">Forma Farmacéutica</th>
                          <th className="py-3 px-3.5">Concentración</th>
                          <th className="py-3 px-3.5">Vía de Adm.</th>
                          <th className="py-3 px-3.5">Envase / Presentación</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                        {medication.presentations.map((p, idx) => (
                          <tr key={p.id || idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="py-3 px-3.5 font-semibold text-slate-900 dark:text-white">
                              {p.form}
                            </td>
                            <td className="py-3 px-3.5 font-mono font-bold text-sky-700 dark:text-sky-300">
                              {p.concentration}
                            </td>
                            <td className="py-3 px-3.5">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                                {p.route}
                              </span>
                            </td>
                            <td className="py-3 px-3.5 text-slate-600 dark:text-slate-300">
                              {p.packaging || 'Envase estándar clínico'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sub-apartado: Almacenamiento y Conservación */}
              <div className="bg-sky-50/50 dark:bg-sky-950/20 p-4 sm:p-5 rounded-xl border border-sky-200/80 dark:border-sky-900/40">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 rounded-md bg-sky-600 text-white shrink-0">
                    <Info className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-sky-950 dark:text-sky-200 uppercase tracking-wider">
                    Almacenamiento, Conservación & Estabilidad
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                  {medication.storageAndConservation || medication.storageConditions || 'Conservar en ambiente seco, a temperatura inferior a 30 °C, protegido de la humedad y la luz solar directa.'}
                </p>
              </div>

            </section>
          )}

          {/* ============================================================ */}
          {/* APARTADO 2: MECANISMO DE ACCIÓN & FARMACOCINÉTICA            */}
          {/* ============================================================ */}
          {(activeTab === 'mechanism' || activeTab === 'all' || window.matchMedia('print').matches) && (
            <section id="sec-mechanism" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Encabezado del Apartado 2 */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800 shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Apartado 2</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-300">Farmacodinamia & LADME</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Mecanismo de Acción & Perfil Farmacocinético
                  </h3>
                </div>
              </div>

              {/* Sub-apartado: Mecanismo de Acción Detallado */}
              <div className="bg-slate-50/80 dark:bg-slate-850 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Mecanismo de Acción Fisiológico
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {medication.mechanismOfAction.summary}
                </p>

                {/* Diana Molecular Destacada */}
                <div className="mt-3 p-3.5 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-lg border border-indigo-200/80 dark:border-indigo-900/60 flex items-start gap-3">
                  <div className="p-1 rounded bg-indigo-600 text-white shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider block">
                      Diana Molecular / Celular Específica:
                    </span>
                    <span className="text-sm font-semibold font-mono text-indigo-900 dark:text-indigo-300">
                      {medication.mechanismOfAction.molecularTarget}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-apartado: Grid de Farmacocinética (LADME) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Parámetros Farmacocinéticos (LADME)
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Biodisponibilidad */}
                  <div className="p-4 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1.5">
                      <Droplet className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Biodisponibilidad (Absorción)</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {medication.mechanismOfAction.pharmacokinetics.bioavailability || 'No reportada en ficha técnica'}
                    </p>
                  </div>

                  {/* Semivida */}
                  <div className="p-4 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1.5">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Semivida Plasmática de Eliminación (t½)</span>
                    </div>
                    <p className="text-sm font-mono font-bold text-indigo-700 dark:text-indigo-300">
                      {medication.mechanismOfAction.pharmacokinetics.halfLife || 'No reportada en ficha técnica'}
                    </p>
                  </div>

                  {/* Metabolismo */}
                  <div className="p-4 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1.5">
                      <Activity className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Metabolismo / Biotransformación</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-200">
                      {medication.mechanismOfAction.pharmacokinetics.metabolism || 'No reportado en ficha técnica'}
                    </p>
                  </div>

                  {/* Excreción */}
                  <div className="p-4 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1.5">
                      <Layers className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Excreción / Vía de Eliminación</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-200">
                      {medication.mechanismOfAction.pharmacokinetics.elimination || 'No reportada en ficha técnica'}
                    </p>
                  </div>

                </div>
              </div>

            </section>
          )}

          {/* ============================================================ */}
          {/* APARTADO 3: INDICACIONES TERAPÉUTICAS                        */}
          {/* ============================================================ */}
          {(activeTab === 'indications' || activeTab === 'all' || window.matchMedia('print').matches) && (
            <section id="sec-indications" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Encabezado del Apartado 3 */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800 shadow-xs">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Apartado 3</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-300">Usos Clínicos Aprobados</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Indicaciones Terapéuticas & Guías Clínicas
                  </h3>
                </div>
              </div>

              {/* Lista numerada de indicaciones */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-emerald-600 dark:bg-emerald-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Indicaciones Autorizadas ({medication.therapeuticIndications.length})
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {medication.therapeuticIndications.map((ind, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 sm:p-4 bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs flex items-start gap-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                        {ind}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          )}

          {/* ============================================================ */}
          {/* APARTADO 4: POSOLOGÍA & AJUSTES                             */}
          {/* ============================================================ */}
          {(activeTab === 'posology' || activeTab === 'all' || window.matchMedia('print').matches) && (
            <section id="sec-posology" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Encabezado del Apartado 4 */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 border border-amber-200 dark:border-amber-800 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Apartado 4</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-300">Dosificación, Renal & Hepática</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Posología, Administración & Ajustes de Dosis
                  </h3>
                </div>
              </div>

              {/* Sub-apartado: Dosis Estándar en Adultos */}
              <div className="p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-amber-600 dark:bg-amber-400 rounded-full shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200 uppercase tracking-wider">
                      Dosis Estándar en Adultos
                    </h4>
                  </div>
                  <button
                    onClick={() => onNavigateToCalculator(medication)}
                    className="text-xs font-semibold text-amber-800 dark:text-amber-300 hover:underline flex items-center gap-1 cursor-pointer print:hidden"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Abrir en Calculadora</span>
                  </button>
                </div>
                <p className="text-sm font-mono font-bold text-slate-900 dark:text-white leading-relaxed bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-amber-200/60 dark:border-amber-800/60">
                  {medication.posology.adultStandard}
                </p>
              </div>

              {/* Sub-apartado: Posología Pediátrica (si existe) */}
              {medication.posology.pediatricDose && (
                <div className="p-4 sm:p-5 bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/80 rounded-xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-teal-600 dark:bg-teal-400 rounded-full shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-teal-950 dark:text-teal-200 uppercase tracking-wider">
                      Posología Pediátrica
                    </h4>
                  </div>
                  <p className="text-sm font-mono font-semibold text-slate-800 dark:text-slate-100 leading-relaxed bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-teal-200/60 dark:border-teal-800/60">
                    {medication.posology.pediatricDose}
                  </p>
                </div>
              )}

              {/* Sub-apartado: Tabla de Ajuste en Insuficiencia Renal */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-amber-600 dark:bg-amber-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Ajuste en Insuficiencia Renal (Aclaramiento de Creatinina - ClCr)
                  </h4>
                </div>

                <div className="border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-xs bg-white dark:bg-slate-900 text-xs sm:text-sm">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between">
                    <span>Estadio de Filtrado Glomerular</span>
                    <span>Conducta & Modificación Posológica</span>
                  </div>

                  <div className="divide-y divide-slate-150 dark:divide-slate-800">
                    
                    {/* Función Normal */}
                    <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <div className="flex items-center gap-2 sm:w-64">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="font-bold text-slate-800 dark:text-slate-100">Función Normal / Leve</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-300 font-mono">(&gt;50 mL/min)</span>
                      </div>
                      <div className="flex-1 font-medium text-slate-700 dark:text-slate-200 pl-4 sm:pl-0">
                        {medication.posology.renalAdjustment.normal}
                      </div>
                    </div>

                    {/* Insuficiencia Moderada */}
                    <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-amber-50/30 dark:bg-amber-950/15 hover:bg-amber-50/60 dark:hover:bg-amber-950/25">
                      <div className="flex items-center gap-2 sm:w-64">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="font-bold text-amber-800 dark:text-amber-300">Moderada</span>
                        <span className="text-[11px] text-amber-700 dark:text-amber-300 font-mono">(ClCr 10 - 50 mL/min)</span>
                      </div>
                      <div className="flex-1 font-semibold text-slate-800 dark:text-slate-100 pl-4 sm:pl-0">
                        {medication.posology.renalAdjustment.moderate}
                      </div>
                    </div>

                    {/* Insuficiencia Severa */}
                    <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-rose-50/30 dark:bg-rose-950/15 hover:bg-rose-50/60 dark:hover:bg-rose-950/25">
                      <div className="flex items-center gap-2 sm:w-64">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="font-bold text-rose-800 dark:text-rose-300">Severa / Terminal</span>
                        <span className="text-[11px] text-rose-700 dark:text-rose-300 font-mono">(ClCr &lt; 10 mL/min)</span>
                      </div>
                      <div className="flex-1 font-semibold text-rose-900 dark:text-rose-200 pl-4 sm:pl-0">
                        {medication.posology.renalAdjustment.severe}
                      </div>
                    </div>

                    {/* Hemodiálisis / TRRC */}
                    {medication.posology.renalAdjustment.dialysis && (
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-purple-50/30 dark:bg-purple-950/15">
                        <div className="flex items-center gap-2 sm:w-64">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
                          <span className="font-bold text-purple-800 dark:text-purple-300">Hemodiálisis / TRRC</span>
                        </div>
                        <div className="flex-1 font-medium text-slate-800 dark:text-slate-100 pl-4 sm:pl-0">
                          {medication.posology.renalAdjustment.dialysis}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>

              {/* Sub-apartado: Ajuste Hepático & Modo de Administración */}
              {(medication.posology.hepaticAdjustment || medication.posology.administrationNotes) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {medication.posology.hepaticAdjustment && (
                    <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
                      <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-1.5">
                        Ajuste en Insuficiencia Hepática
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        {medication.posology.hepaticAdjustment}
                      </p>
                    </div>
                  )}

                  {medication.posology.administrationNotes && (
                    <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
                      <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-1.5">
                        Modo de Administración & Cuidados
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        {medication.posology.administrationNotes}
                      </p>
                    </div>
                  )}
                </div>
              )}

            </section>
          )}

          {/* ============================================================ */}
          {/* APARTADO 5: SEGURIDAD, CONTRAINDICACIONES & REACCIONES       */}
          {/* ============================================================ */}
          {(activeTab === 'safety' || activeTab === 'all' || window.matchMedia('print').matches) && (
            <section id="sec-safety" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Encabezado del Apartado 5 */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center justify-center shrink-0 border border-rose-200 dark:border-rose-800 shadow-xs">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Apartado 5</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-300">Toxicidad, Gestación & Alertas</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Seguridad, Contraindicaciones & Efectos Adversos
                  </h3>
                </div>
              </div>

              {/* Sub-apartado: Black Box Warning (si existe) */}
              {medication.safety.blackBoxWarning && (
                <div className="p-4 sm:p-5 bg-rose-50 dark:bg-rose-950/50 border-2 border-rose-600 dark:border-rose-500 rounded-xl shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-black text-xs sm:text-sm uppercase tracking-wider">
                    <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
                    <span>ADVERTENCIA DE SEGURIDAD BLACK BOX (FDA / AEMPS)</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-rose-950 dark:text-rose-100 font-semibold pl-7">
                    {medication.safety.blackBoxWarning}
                  </p>
                </div>
              )}

              {/* Sub-apartado: Contraindicaciones */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-rose-600 dark:bg-rose-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Contraindicaciones Absolutas & Relativas ({medication.safety.contraindications.length})
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {medication.safety.contraindications.map((contra, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-white dark:bg-slate-850 rounded-xl border border-rose-200/80 dark:border-rose-900/50 shadow-xs flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100"
                    >
                      <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <span className="font-medium leading-relaxed">{contra}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-apartado: Embarazo y Lactancia */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Embarazo */}
                <div className="p-4 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Uso en el Embarazo
                    </span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      Categoría {medication.safety.pregnancyCategory}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {medication.safety.pregnancyDescription || (
                      medication.safety.pregnancyCategory === 'X' 
                        ? 'Contraindicado de forma absoluta en el embarazo por riesgo teratógeno comprobado.' 
                        : medication.safety.pregnancyCategory === 'D' 
                        ? 'Existe evidencia de riesgo fetal humano; usar solo si el beneficio vital justifica el riesgo.' 
                        : medication.safety.pregnancyCategory === 'C' 
                        ? 'Estudios en animales han demostrado efectos adversos; valorar minuciosamente la relación riesgo/beneficio.' 
                        : 'No hay evidencia de riesgo fetal en humanos; uso considerado seguro con vigilancia.'
                    )}
                  </p>
                </div>

                {/* Lactancia */}
                <div className="p-4 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Seguridad en la Lactancia
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {medication.safety.lactationRisk || 'Evaluada'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {medication.safety.lactationSafety || 'Evaluar la relación riesgo/beneficio antes de su administración durante la lactancia materna.'}
                  </p>
                </div>

              </div>

              {/* Sub-apartado: Reacciones Adversas por Frecuencia de Incidencia */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-rose-600 dark:bg-rose-400 rounded-full shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Reacciones Adversas por Frecuencia de Incidencia
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                  
                  {/* Frecuentes */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                      <span className="font-bold text-slate-900 dark:text-white">Frecuentes</span>
                      <span className="font-mono text-[11px] font-bold text-sky-700 dark:text-sky-300">&gt; 10%</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-200">
                      {medication.safety.adverseEffects.frequent.map((e, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-sky-600 dark:text-sky-400 font-bold">•</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Moderadas */}
                  <div className="p-4 bg-amber-50/40 dark:bg-amber-950/20 rounded-xl border border-amber-200/80 dark:border-amber-900/50 shadow-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-2">
                      <span className="font-bold text-amber-900 dark:text-amber-200">Moderadas</span>
                      <span className="font-mono text-[11px] font-bold text-amber-700 dark:text-amber-300">1% a 10%</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-200">
                      {medication.safety.adverseEffects.moderate.map((e, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Graves */}
                  <div className="p-4 bg-rose-50/50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 shadow-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/60 pb-2">
                      <span className="font-bold text-rose-900 dark:text-rose-200">Graves o de Alarma</span>
                      <span className="font-mono text-[11px] font-bold text-rose-700 dark:text-rose-300">&lt; 1%</span>
                    </div>
                    <ul className="space-y-1.5 text-rose-950 dark:text-rose-100 font-medium">
                      {medication.safety.adverseEffects.severe.map((e, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Sub-apartado: Parámetros de Monitorización */}
              {((medication.safety.monitoringParameters && medication.safety.monitoringParameters.length > 0) || (medication.monitoringParameters && medication.monitoringParameters.length > 0)) && (
                <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                    Parámetros de Monitorización & Control Clínico Periódico
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(medication.safety.monitoringParameters || medication.monitoringParameters || []).map((param, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                        <span>{param}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </section>
          )}

          {/* ============================================================ */}
          {/* APARTADO 6: INTERACCIONES FARMACOLÓGICAS                     */}
          {/* ============================================================ */}
          {(activeTab === 'interactions' || activeTab === 'all' || window.matchMedia('print').matches) && (
            <section id="sec-interactions" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Encabezado del Apartado 6 */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 border border-purple-200 dark:border-purple-800 shadow-xs">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Apartado 6</span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-300">Cinéticas & Dinámicas</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Interacciones Farmacológicas Clínicas ({medication.interactions.length})
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onSelectForInteraction(medication)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all border cursor-pointer print:hidden ${
                    isSelectedForInteraction
                      ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {isSelectedForInteraction ? '✓ En Verificador de Interacciones' : '+ Agregar a Verificador'}
                </button>
              </div>

              {/* Lista de interacciones */}
              {medication.interactions.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700/80 text-slate-500 dark:text-slate-300 italic">
                  No se registran interacciones críticas documentadas en esta monografía.
                </div>
              ) : (
                <div className="space-y-3.5">
                  {medication.interactions.map((inter, idx) => {
                    const isContraindicated = inter.severity === 'Contraindicada';
                    const isMajor = inter.severity === 'Mayor' || inter.severity === 'Grave';
                    const isModerate = inter.severity === 'Moderada';

                    return (
                      <div 
                        key={inter.id || idx} 
                        className={`p-4 rounded-xl border shadow-xs space-y-2.5 transition-all ${
                          isContraindicated 
                            ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900' 
                            : isMajor 
                            ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900' 
                            : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700/80'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-150 dark:border-slate-700/80 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">Concomitancia con:</span>
                            <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                              {inter.interactsWith || inter.interactingDrug || 'Fármaco concomitante'}
                            </span>
                          </div>

                          <span 
                            className={`font-bold px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider shadow-xs ${
                              isContraindicated
                                ? 'bg-rose-600 text-white'
                                : isMajor
                                ? 'bg-amber-600 text-white'
                                : isModerate
                                ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                                : 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                            }`}
                          >
                            {inter.severity}
                          </span>
                        </div>

                        <div className="space-y-1.5 text-xs sm:text-sm">
                          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                            <strong className="text-slate-900 dark:text-white">Efecto fisiopatológico / clínico: </strong>
                            {inter.clinicalEffect}
                          </p>
                          <p className="text-sky-800 dark:text-sky-200 font-medium leading-relaxed bg-sky-50/60 dark:bg-sky-950/40 p-2.5 rounded-lg border border-sky-100 dark:border-sky-900/50">
                            <strong className="text-sky-950 dark:text-sky-100">Conducta clínica recomendada: </strong>
                            {inter.recommendation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

            </section>
          )}

        </div>

        {/* ============================================================== */}
        {/* PIE DEL MODAL CON ACCIONES                                    */}
        {/* ============================================================== */}
        <div className="p-3.5 sm:px-6 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">
            Última actualización clínica: {medication.updatedAt ? new Date(medication.updatedAt).toLocaleDateString() : 'Marzo 2026'}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateToCalculator(medication)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Calculadora de Dosis</span>
            </button>

            <button
              onClick={() => onEdit(medication)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar Fármaco</span>
            </button>
          </div>
        </div>

      </div>

      {/* Modal de Zoom de Imagen en Alta Definición */}
      {previewZoomImage && (
        <div 
          onClick={() => setPreviewZoomImage(null)}
          className="fixed inset-0 z-60 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={previewZoomImage}
              alt="Detalle ampliado de imagen clínica"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[82vh] rounded-xl object-contain shadow-2xl border border-slate-800"
            />
            <button
              onClick={() => setPreviewZoomImage(null)}
              className="absolute top-2 right-2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer shadow-lg"
              title="Cerrar vista ampliada"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
