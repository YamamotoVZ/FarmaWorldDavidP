import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, 
  Search, 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  ArrowRightLeft, 
  BookOpen, 
  Pill,
  Sparkles
} from 'lucide-react';
import { Medication, InteractionAlert } from '../types/medication';
import { checkInteractions } from '../services/interactionEngine';

interface InteractionCheckerProps {
  medications: Medication[];
  selectedMedicationIds: string[];
  onToggleMedication: (medication: Medication) => void;
  onClearSelected: () => void;
  onSelectSpecificPair: (idA: string, idB: string) => void;
  onViewMedicationDetail: (medication: Medication) => void;
}

export const InteractionChecker: React.FC<InteractionCheckerProps> = ({
  medications,
  selectedMedicationIds,
  onToggleMedication,
  onClearSelected,
  onSelectSpecificPair,
  onViewMedicationDetail
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Find full selected Medication objects
  const selectedMedications = useMemo(() => {
    return medications.filter(m => selectedMedicationIds.includes(m.id));
  }, [medications, selectedMedicationIds]);

  // Compute interaction alerts
  const alerts: InteractionAlert[] = useMemo(() => {
    return checkInteractions(selectedMedications);
  }, [selectedMedications]);

  // Search filter for available medications
  const filteredAvailable = useMemo(() => {
    if (!searchTerm.trim()) {
      return medications.filter(m => !selectedMedicationIds.includes(m.id)).slice(0, 10);
    }
    const q = searchTerm.toLowerCase();
    return medications.filter(m => {
      const isSelected = selectedMedicationIds.includes(m.id);
      const matches = m.genericName.toLowerCase().includes(q) ||
        m.commercialNames.some(b => b.toLowerCase().includes(q)) ||
        m.therapeuticClass.toLowerCase().includes(q);
      return !isSelected && matches;
    });
  }, [medications, selectedMedicationIds, searchTerm]);

  // Preset clinical combinations
  const presetPairs = [
    {
      name: 'Warfarina + Ibuprofeno',
      desc: 'Hemorragia digestiva grave por erosión mucosa y anticoagulación',
      idA: 'warfarina',
      idB: 'ibuprofeno'
    },
    {
      name: 'Enalapril + Ibuprofeno',
      desc: 'Doble golpe hemodinámico renal y fallo agudo prerrenal',
      idA: 'enalapril',
      idB: 'ibuprofeno'
    },
    {
      name: 'Ciprofloxacino + Warfarina',
      desc: 'Potenciación crítica de anticoagulación y elevación de INR',
      idA: 'ciprofloxacino',
      idB: 'warfarina'
    },
    {
      name: 'Furosemida + Ibuprofeno',
      desc: 'Antagonismo natriurético y empeoramiento de insuficiencia cardíaca',
      idA: 'furosemida',
      idB: 'ibuprofeno'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Verificador Clínico de Interacciones Farmacológicas</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
              Seleccione 2 o más medicamentos para evaluar interacciones farmacodinámicas y farmacocinéticas en tiempo real.
            </p>
          </div>

          {selectedMedications.length > 0 && (
            <button
              onClick={onClearSelected}
              className="px-3 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-lg hover:bg-rose-100 transition-colors self-start sm:self-auto"
            >
              Limpiar selección ({selectedMedications.length})
            </button>
          )}
        </div>

        {/* Selected Drugs Chips */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Medicamentos en análisis ({selectedMedications.length}):
          </div>

          {selectedMedications.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-300 italic">
              No hay medicamentos seleccionados. Agregue medicamentos desde el catálogo o use el buscador inferior.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedMedications.map(med => (
                <div 
                  key={med.id}
                  className="flex items-center gap-1.5 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 px-2.5 py-1 rounded-lg text-xs font-medium"
                >
                  <Pill className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>{med.genericName}</span>
                  <button
                    onClick={() => onToggleMedication(med)}
                    className="ml-1 text-slate-400 hover:text-rose-600 p-0.5 rounded"
                    title="Quitar"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Add Input */}
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar para agregar fármaco al análisis..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Quick candidates list */}
          {filteredAvailable.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="text-[11px] text-slate-500 dark:text-slate-300 self-center mr-1">Sugerencias:</span>
              {filteredAvailable.map(med => (
                <button
                  key={med.id}
                  onClick={() => {
                    onToggleMedication(med);
                    setSearchTerm('');
                  }}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded text-xs transition-colors"
                >
                  <Plus className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                  <span>{med.genericName}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Preset Test Pairs */}
      <div className="bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4">
        <span className="text-xs font-bold text-slate-600 dark:text-slate-200 uppercase tracking-wider block mb-2">
          Combinaciones Clínicas Frecuentes para Demostración:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {presetPairs.map((p, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSpecificPair(p.idA, p.idB)}
              className="text-left p-2.5 bg-white dark:bg-slate-800 hover:border-sky-500 dark:hover:border-sky-500 border border-slate-200 dark:border-slate-700 rounded-lg transition-all group shadow-xs"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-between">
                <span>{p.name}</span>
                <ArrowRightLeft className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-300 mt-1 line-clamp-1">
                {p.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Results View */}
      {selectedMedications.length < 2 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto mb-3">
            <ArrowRightLeft className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
            Se requieren al menos 2 medicamentos
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-300 max-w-sm mx-auto">
            Agregue un segundo fármaco para iniciar la comprobación cruzada de seguridad e interacciones farmacológicas.
          </p>
        </div>
      ) : alerts.length === 0 ? (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 mb-1">
            No se detectaron interacciones farmacológicas documentadas
          </h3>
          <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
            Entre los {selectedMedications.length} fármacos analizados no constan interacciones mayores o contraindicaciones cruzadas en el registro activo.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Interacciones Identificadas ({alerts.length})</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-300 font-mono">
              Evaluación farmacológica cruzada
            </span>
          </div>

          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <div 
                key={i}
                className={`p-4 rounded-xl border transition-all ${
                  alert.severity === 'Contraindicada'
                    ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-900/60'
                    : alert.severity === 'Mayor'
                    ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-900/60'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Header: Drug Pair and Severity Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60 mb-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <span className="text-sky-700 dark:text-sky-400">{alert.drugA}</span>
                    <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-sky-700 dark:text-sky-400">{alert.drugB}</span>
                  </div>

                  <span 
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      alert.severity === 'Contraindicada'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : alert.severity === 'Mayor'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : alert.severity === 'Moderada'
                        ? 'bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200'
                        : 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    Severidad: {alert.severity}
                  </span>
                </div>

                {/* Clinical effect */}
                <div className="space-y-1.5 text-xs">
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">Mecanismo / Consecuencia Clínica: </strong>
                    {alert.clinicalEffect}
                  </p>

                  <p className="text-sky-800 dark:text-sky-200 font-medium leading-relaxed bg-white/70 dark:bg-slate-800/80 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/70">
                    <strong className="text-slate-900 dark:text-white">Conducta Clínica Sugerida: </strong>
                    {alert.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
