import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Pill, 
  Activity, 
  Baby, 
  HeartPulse, 
  AlertCircle, 
  CheckCircle, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { Medication } from '../types/medication';

interface PosologyCalculatorProps {
  medications: Medication[];
  selectedMedicationId?: string | null;
  onSelectMedication: (medication: Medication) => void;
}

export const PosologyCalculator: React.FC<PosologyCalculatorProps> = ({
  medications,
  selectedMedicationId,
  onSelectMedication
}) => {
  const [activeDrugId, setActiveDrugId] = useState<string>(
    selectedMedicationId || (medications.length > 0 ? medications[0].id : '')
  );

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedMedicationId) {
      setActiveDrugId(selectedMedicationId);
    }
  }, [selectedMedicationId]);

  const activeDrug = useMemo(() => {
    return medications.find(m => m.id === activeDrugId) || medications[0] || null;
  }, [medications, activeDrugId]);

  // --- Calculator 1: Pediatric / Weight-Based Dose ---
  const [patientWeightKg, setPatientWeightKg] = useState<number>(18);
  const [doseMgPerKg, setDoseMgPerKg] = useState<number>(40);
  const [isDosePerDay, setIsDosePerDay] = useState<boolean>(true); // true = mg/kg/day, false = mg/kg/dose
  const [frequencyDosesPerDay, setFrequencyDosesPerDay] = useState<number>(2); // 2 = cada 12h, 3 = cada 8h, 4 = cada 6h
  const [suspensionMg, setSuspensionMg] = useState<number>(400); // 400 mg
  const [suspensionMl, setSuspensionMl] = useState<number>(5); // en 5 mL

  // Calculations
  const pediatricResults = useMemo(() => {
    if (!patientWeightKg || patientWeightKg <= 0 || !doseMgPerKg || doseMgPerKg <= 0) {
      return null;
    }

    let totalMgPerDay = 0;
    let mgPerDose = 0;

    if (isDosePerDay) {
      totalMgPerDay = doseMgPerKg * patientWeightKg;
      mgPerDose = totalMgPerDay / (frequencyDosesPerDay || 1);
    } else {
      mgPerDose = doseMgPerKg * patientWeightKg;
      totalMgPerDay = mgPerDose * (frequencyDosesPerDay || 1);
    }

    let mlPerDose = 0;
    if (suspensionMg > 0 && suspensionMl > 0) {
      const concentrationMgPerMl = suspensionMg / suspensionMl;
      mlPerDose = mgPerDose / concentrationMgPerMl;
    }

    return {
      totalMgPerDay: Math.round(totalMgPerDay * 10) / 10,
      mgPerDose: Math.round(mgPerDose * 10) / 10,
      mlPerDose: Math.round(mlPerDose * 10) / 10
    };
  }, [patientWeightKg, doseMgPerKg, isDosePerDay, frequencyDosesPerDay, suspensionMg, suspensionMl]);

  // --- Calculator 2: Cockcroft-Gault Creatinine Clearance (ClCr) ---
  const [patientAge, setPatientAge] = useState<number>(68);
  const [patientWeightRenal, setPatientWeightRenal] = useState<number>(72);
  const [patientSerumCreatinine, setPatientSerumCreatinine] = useState<number>(1.6);
  const [patientSex, setPatientSex] = useState<'male' | 'female'>('male');

  const clCrResult = useMemo(() => {
    if (!patientAge || patientAge <= 0 || !patientWeightRenal || !patientSerumCreatinine || patientSerumCreatinine <= 0) {
      return null;
    }

    // Cockcroft-Gault: ((140 - edad) * peso) / (72 * CrSérica) * (0.85 si mujer)
    let crcl = ((140 - patientAge) * patientWeightRenal) / (72 * patientSerumCreatinine);
    if (patientSex === 'female') {
      crcl *= 0.85;
    }

    let stage = 'Normal';
    let stageColor = 'text-emerald-600 dark:text-emerald-400';
    let riskLevel: 'normal' | 'moderate' | 'severe' = 'normal';

    if (crcl >= 90) {
      stage = 'Función Renal Normal (≥ 90 mL/min)';
      stageColor = 'text-emerald-600 dark:text-emerald-400';
      riskLevel = 'normal';
    } else if (crcl >= 60) {
      stage = 'Insuficiencia Renal Leve (60 - 89 mL/min)';
      stageColor = 'text-sky-600 dark:text-sky-400';
      riskLevel = 'normal';
    } else if (crcl >= 30) {
      stage = 'Insuficiencia Renal Moderada (30 - 59 mL/min)';
      stageColor = 'text-amber-600 dark:text-amber-400';
      riskLevel = 'moderate';
    } else if (crcl >= 15) {
      stage = 'Insuficiencia Renal Severa (15 - 29 mL/min)';
      stageColor = 'text-rose-600 dark:text-rose-400';
      riskLevel = 'severe';
    } else {
      stage = 'Fallo Renal Terminal (< 15 mL/min)';
      stageColor = 'text-purple-600 dark:text-purple-400';
      riskLevel = 'severe';
    }

    return {
      value: Math.round(crcl * 10) / 10,
      stage,
      stageColor,
      riskLevel
    };
  }, [patientAge, patientWeightRenal, patientSerumCreatinine, patientSex]);

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Drug Selector */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Calculadora Posológica & Función Renal</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
              Calcule dosificaciones en pediatría por mg/kg y estime el aclaramiento renal con la fórmula Cockcroft-Gault.
            </p>
          </div>

          {/* Drug Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
              Fármaco Activo:
            </span>
            <select
              value={activeDrugId}
              onChange={(e) => setActiveDrugId(e.target.value)}
              className="py-1.5 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {medications.map(m => (
                <option key={m.id} value={m.id}>
                  {m.genericName} ({m.atcCode})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Drug Posology Brief */}
        {activeDrug && (
          <div className="mt-4 bg-slate-50/70 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700/80 p-3.5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                {activeDrug.genericName} · <span className="font-mono text-sky-600 dark:text-sky-400">{activeDrug.atcCode}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-200 mt-0.5 font-mono">
                Dosis estándar: {activeDrug.posology.adultStandard}
              </p>
              {activeDrug.posology.pediatricDose && (
                <p className="text-teal-700 dark:text-teal-400 mt-0.5 font-mono">
                  Referencia pediatría: {activeDrug.posology.pediatricDose}
                </p>
              )}
            </div>

            <button
              onClick={() => onSelectMedication(activeDrug)}
              className="px-3 py-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shrink-0 self-start md:self-auto"
            >
              Ver Ficha Completa
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* MODULE 1: PEDIATRIC & WEIGHT-BASED CALCULATOR */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs flex flex-col">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
            <Baby className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Calculadora Pediátrica & mg/kg
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-300">
                Ajuste por peso corporal y cálculo de volumen en suspensión oral
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs flex-1">
            {/* Weight Input */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Peso del Paciente (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="150"
                    value={patientWeightKg}
                    onChange={(e) => setPatientWeightKg(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono font-bold text-slate-900 dark:text-white"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-slate-500 dark:text-slate-300 text-xs font-mono">
                    kg
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Dosis Objetivo
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={doseMgPerKg}
                    onChange={(e) => setDoseMgPerKg(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono font-bold text-slate-900 dark:text-white"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-slate-500 dark:text-slate-300 text-xs font-mono">
                    mg/kg
                  </span>
                </div>
              </div>
            </div>

            {/* Mode: per day vs per dose */}
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="doseType"
                  checked={isDosePerDay}
                  onChange={() => setIsDosePerDay(true)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300">mg/kg/día</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="doseType"
                  checked={!isDosePerDay}
                  onChange={() => setIsDosePerDay(false)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300">mg/kg por dosis única</span>
              </label>
            </div>

            {/* Frequency */}
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Frecuencia de Administración
              </label>
              <select
                value={frequencyDosesPerDay}
                onChange={(e) => setFrequencyDosesPerDay(parseInt(e.target.value) || 1)}
                className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium"
              >
                <option value={3}>Cada 8 horas (3 tomas al día)</option>
                <option value={2}>Cada 12 horas (2 tomas al día)</option>
                <option value={4}>Cada 6 horas (4 tomas al día)</option>
                <option value={1}>Cada 24 horas (1 toma al día)</option>
              </select>
            </div>

            {/* Suspension concentration */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Concentración del Jarabe / Suspensión
              </span>
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={suspensionMg}
                    onChange={(e) => setSuspensionMg(parseFloat(e.target.value) || 0)}
                    placeholder="mg"
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white font-mono"
                  />
                  <span className="absolute inset-y-0 right-2 flex items-center text-slate-500 dark:text-slate-300 text-[10px]">mg</span>
                </div>
                <span className="text-slate-500 dark:text-slate-300 font-bold">en</span>
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={suspensionMl}
                    onChange={(e) => setSuspensionMl(parseFloat(e.target.value) || 0)}
                    placeholder="mL"
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white font-mono"
                  />
                  <span className="absolute inset-y-0 right-2 flex items-center text-slate-500 dark:text-slate-300 text-[10px]">mL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Box */}
          {pediatricResults && (
            <div className="mt-5 p-4 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 rounded-xl space-y-2">
              <span className="text-[11px] font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider block">
                Resultado de Dosificación Calculada
              </span>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-teal-100 dark:border-teal-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-300 block">Dosis por Toma</span>
                  <span className="text-base font-mono font-bold text-slate-900 dark:text-white">
                    {pediatricResults.mgPerDose} <span className="text-xs font-normal">mg</span>
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-teal-100 dark:border-teal-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-300 block">Volumen Jarabe</span>
                  <span className="text-base font-mono font-bold text-teal-700 dark:text-teal-300">
                    {pediatricResults.mlPerDose} <span className="text-xs font-normal">mL</span>
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-teal-100 dark:border-teal-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-300 block">Total Diario</span>
                  <span className="text-base font-mono font-bold text-slate-900 dark:text-white">
                    {pediatricResults.totalMgPerDay} <span className="text-xs font-normal">mg</span>
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-teal-800 dark:text-teal-200 text-center pt-1 font-medium">
                Administrar <strong>{pediatricResults.mlPerDose} mL</strong> cada {24 / frequencyDosesPerDay} horas.
              </p>
            </div>
          )}
        </div>

        {/* MODULE 2: RENAL FUNCTION & COCKCROFT-GAULT CALCULATOR */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs flex flex-col">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
            <HeartPulse className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Aclaramiento de Creatinina (Cockcroft-Gault)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-300">
                Ajuste posológico individualizado según la función renal
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs flex-1">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Edad (años)
                </label>
                <input
                  type="number"
                  min="18"
                  max="120"
                  value={patientAge}
                  onChange={(e) => setPatientAge(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Peso Real (kg)
                </label>
                <input
                  type="number"
                  min="20"
                  max="250"
                  value={patientWeightRenal}
                  onChange={(e) => setPatientWeightRenal(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Creatinina Sérica (mg/dL)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.2"
                  max="20"
                  value={patientSerumCreatinine}
                  onChange={(e) => setPatientSerumCreatinine(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Sexo Biológico
                </label>
                <select
                  value={patientSex}
                  onChange={(e) => setPatientSex(e.target.value as 'male' | 'female')}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium"
                >
                  <option value="male">Hombre (Factor 1.0)</option>
                  <option value="female">Mujer (Factor 0.85)</option>
                </select>
              </div>
            </div>

            {/* Clearance Result Panel */}
            {clCrResult && (
              <div className="p-4 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider">
                    Aclaramiento Estimado (ClCr)
                  </span>
                  <span className="text-xl font-mono font-black text-sky-700 dark:text-sky-400">
                    {clCrResult.value} <span className="text-xs font-normal">mL/min</span>
                  </span>
                </div>

                <div className={`text-xs font-bold ${clCrResult.stageColor}`}>
                  {clCrResult.stage}
                </div>

                {/* Specific drug guidance based on computed ClCr */}
                {activeDrug && (
                  <div className="mt-3 pt-3 border-t border-sky-200/60 dark:border-sky-800/60 text-xs space-y-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">
                      Recomendación para {activeDrug.genericName}:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      {clCrResult.value >= 50
                        ? activeDrug.posology.renalAdjustment.normal
                        : clCrResult.value >= 10
                        ? activeDrug.posology.renalAdjustment.moderate
                        : activeDrug.posology.renalAdjustment.severe}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
