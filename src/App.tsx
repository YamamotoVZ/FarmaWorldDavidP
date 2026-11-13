import React, { useState, useEffect } from 'react';
import { Medication } from './types/medication';
import { 
  getStoredMedications, 
  saveMedication, 
  deleteMedication, 
  resetToDefaults 
} from './services/storageService';
import { TopNav, ActiveTab } from './components/TopNav';
import { MedicationCatalog } from './components/MedicationCatalog';
import { MedicationDetailModal } from './components/MedicationDetailModal';
import { MedicationFormModal } from './components/MedicationFormModal';
import { InteractionChecker } from './components/InteractionChecker';
import { PosologyCalculator } from './components/PosologyCalculator';
import { DatabaseManager } from './components/DatabaseManager';
import { Pill, ShieldAlert, CheckCircle2, AlertCircle, Sparkles, Plus } from 'lucide-react';

const HERO_BANNER = '/assets/aistudio/imagen_plm_5b659098.jpeg';

export default function App() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [activeTab, setActiveTab] = useState<ActiveTab>('catalog');
  
  // Modals
  const [selectedDetailMedication, setSelectedDetailMedication] = useState<Medication | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formInitialData, setFormInitialData] = useState<Medication | null>(null);

  // Interaction selection
  const [selectedForInteractionIds, setSelectedForInteractionIds] = useState<string[]>([]);

  // Calculator selected drug
  const [calculatorDrugId, setCalculatorDrugId] = useState<string | null>(null);

  // Theme
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Notification Toast
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Initialize DB
  useEffect(() => {
    const data = getStoredMedications();
    setMedications(data);
  }, []);

  // Sync theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Handler: Save medication from form
  const handleSaveMedication = (med: Medication) => {
    const updated = saveMedication(med);
    setMedications(updated);
    showToast(`Medicamento "${med.genericName}" guardado en la base de datos.`);
    // If detail modal was open for this drug, update it
    if (selectedDetailMedication && selectedDetailMedication.id === med.id) {
      setSelectedDetailMedication(med);
    }
  };

  // Handler: Delete medication
  const handleDeleteMedication = (id: string) => {
    const medToDelete = medications.find(m => m.id === id);
    const updated = deleteMedication(id);
    setMedications(updated);
    setSelectedForInteractionIds(prev => prev.filter(item => item !== id));
    if (selectedDetailMedication?.id === id) {
      setSelectedDetailMedication(null);
    }
    showToast(`"${medToDelete?.genericName || 'Medicamento'}" eliminado de la base de datos.`, 'info');
  };

  // Handler: Reset to factory default monographs
  const handleResetDefaults = () => {
    const defaults = resetToDefaults();
    setMedications(defaults);
    setSelectedForInteractionIds([]);
    showToast('Base de datos restablecida con el catálogo oficial.', 'success');
  };

  // Handler: Toggle drug into interaction checker
  const handleToggleInteraction = (med: Medication) => {
    setSelectedForInteractionIds(prev => {
      const exists = prev.includes(med.id);
      if (exists) {
        return prev.filter(id => id !== med.id);
      } else {
        const next = [...prev, med.id];
        showToast(`"${med.genericName}" añadido al verificador de interacciones.`);
        return next;
      }
    });
  };

  // Handler: Select specific pair for demo in interaction checker
  const handleSelectSpecificPair = (idA: string, idB: string) => {
    setSelectedForInteractionIds([idA, idB]);
    setActiveTab('interactions');
  };

  // Handler: Navigate to calculator with chosen drug
  const handleNavigateToCalculator = (med: Medication) => {
    setCalculatorDrugId(med.id);
    setActiveTab('calculator');
    if (selectedDetailMedication) {
      setSelectedDetailMedication(null);
    }
  };

  // Handler: Edit drug
  const handleOpenEdit = (med: Medication) => {
    setFormInitialData(med);
    setIsFormOpen(true);
  };

  // Handler: Duplicate as template
  const handleDuplicate = (med: Medication) => {
    const copy: Medication = {
      ...med,
      id: `${med.id}-copia-${Date.now()}`,
      genericName: `${med.genericName} (Copia)`,
      commercialNames: [...med.commercialNames],
      isCustom: true
    };
    setFormInitialData(copy);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased selection:bg-sky-500 selection:text-white transition-colors">
      
      {/* Top Navigation */}
      <TopNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenNewModal={() => {
          setFormInitialData(null);
          setIsFormOpen(true);
        }}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        interactionCount={selectedForInteractionIds.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Clinical Hero Banner (Shows on Catalog) */}
        {activeTab === 'catalog' && (
          <div className="relative rounded-2xl overflow-hidden mb-8 border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
            <div className="absolute inset-0">
              <img
                src={HERO_BANNER}
                alt="Guía Farmacológica de Repaso - PLM"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-right sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
            </div>

            <div className="relative p-6 sm:p-8 md:p-10 max-w-2xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-3">
                Guía Farmacológica de repaso
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Diccionario Médico-Farmacéutico donde podrás consultar de manera rápida indicaciones terapéuticas, dosis, presentación, nombre comercial de los medicamentos, entre muchos otros datos relevantes sobre medicamentos de uso común durante la práctica clínica.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setFormInitialData(null);
                    setIsFormOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Agregar Medicamento</span>
                </button>

                <button
                  onClick={() => setActiveTab('interactions')}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 rounded-lg transition-colors backdrop-blur-xs"
                >
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Verificador de Interacciones</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Tab Views */}
        {activeTab === 'catalog' && (
          <MedicationCatalog
            medications={medications}
            onSelectMedication={setSelectedDetailMedication}
            onEditMedication={handleOpenEdit}
            onDeleteMedication={handleDeleteMedication}
            onSelectForInteraction={handleToggleInteraction}
            selectedForInteractionIds={selectedForInteractionIds}
            onNavigateToCalculator={handleNavigateToCalculator}
          />
        )}

        {activeTab === 'interactions' && (
          <InteractionChecker
            medications={medications}
            selectedMedicationIds={selectedForInteractionIds}
            onToggleMedication={handleToggleInteraction}
            onClearSelected={() => setSelectedForInteractionIds([])}
            onSelectSpecificPair={handleSelectSpecificPair}
            onViewMedicationDetail={setSelectedDetailMedication}
          />
        )}

        {activeTab === 'calculator' && (
          <PosologyCalculator
            medications={medications}
            selectedMedicationId={calculatorDrugId}
            onSelectMedication={setSelectedDetailMedication}
          />
        )}

        {activeTab === 'database' && (
          <DatabaseManager
            medications={medications}
            onUpdateMedications={setMedications}
            onResetDefaults={handleResetDefaults}
            onOpenNewModal={() => {
              setFormInitialData(null);
              setIsFormOpen(true);
            }}
            onEditMedication={handleOpenEdit}
            onViewMedicationDetail={setSelectedDetailMedication}
            onDeleteMedication={handleDeleteMedication}
            onDuplicateMedication={handleDuplicate}
          />
        )}
      </main>

      {/* Detail Monograph Modal */}
      {selectedDetailMedication && (
        <MedicationDetailModal
          medication={selectedDetailMedication}
          onClose={() => setSelectedDetailMedication(null)}
          onEdit={(med) => {
            setSelectedDetailMedication(null);
            handleOpenEdit(med);
          }}
          onSelectForInteraction={handleToggleInteraction}
          isSelectedForInteraction={selectedForInteractionIds.includes(selectedDetailMedication.id)}
          onNavigateToCalculator={handleNavigateToCalculator}
          onUpdateMedication={handleSaveMedication}
        />
      )}

      {/* Drug Form Modal (Create / Edit) */}
      <MedicationFormModal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setFormInitialData(null);
        }}
        onSave={handleSaveMedication}
        initialData={formInitialData}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-50 rounded-xl shadow-xl text-xs font-semibold border border-slate-750 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-300 py-6 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Pill className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="font-bold text-slate-900 dark:text-white">FarmaWorld</span>
            <span>· Sistema Farmacológico Interactivo</span>
          </div>
          <p className="text-center sm:text-right text-[11px] max-w-md">
            Información clínica para uso exclusivo de profesionales de la salud. Verifique siempre las guías institucionales locales antes de la prescripción.
          </p>
        </div>
      </footer>
    </div>
  );
}
