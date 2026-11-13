import React, { useRef, useState } from 'react';
import { 
  Database, 
  Download, 
  Upload, 
  RotateCcw, 
  Plus, 
  FileCheck, 
  AlertTriangle, 
  Edit3, 
  Trash2, 
  Eye, 
  Copy,
  Check,
  X,
  Share2,
  ClipboardPaste
} from 'lucide-react';
import { Medication } from '../types/medication';
import {
  exportDatabaseToJson,
  importDatabaseFromJson,
  buildCustomChangesPayload
} from '../services/storageService';

interface DatabaseManagerProps {
  medications: Medication[];
  onUpdateMedications: (medications: Medication[]) => void;
  onResetDefaults: () => void;
  onOpenNewModal: () => void;
  onEditMedication: (medication: Medication) => void;
  onViewMedicationDetail: (medication: Medication) => void;
  onDeleteMedication: (id: string) => void;
  onDuplicateMedication: (medication: Medication) => void;
}

export const DatabaseManager: React.FC<DatabaseManagerProps> = ({
  medications,
  onUpdateMedications,
  onResetDefaults,
  onOpenNewModal,
  onEditMedication,
  onViewMedicationDetail,
  onDeleteMedication,
  onDuplicateMedication
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMode, setImportMode] = useState<'merge' | 'replace'>('merge');
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [copiedChanges, setCopiedChanges] = useState(false);
  const [showPasteBox, setShowPasteBox] = useState(false);
  const [pastedJson, setPastedJson] = useState('');

  // Stats
  const customCount = medications.filter(m => m.isCustom).length;
  const highAlertCount = medications.filter(m => m.highAlertMedicine).length;
  const totalInteractions = medications.reduce((acc, m) => acc + m.interactions.length, 0);
  const changesPayload = buildCustomChangesPayload(medications);
  const pendingChangesCount = changesPayload.modifiedOrAdded.length + changesPayload.deletedIds.length;

  const handleExport = () => {
    exportDatabaseToJson(medications);
    setStatusMessage({
      text: 'Base de datos exportada con éxito como archivo JSON.',
      type: 'success'
    });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleCopyChanges = async () => {
    try {
      const jsonStr = JSON.stringify(changesPayload, null, 2);
      await navigator.clipboard.writeText(jsonStr);
      setCopiedChanges(true);
      setStatusMessage({
        text: `Cambios copiados al portapapeles (${changesPayload.modifiedOrAdded.length} modificados/agregados, ${changesPayload.deletedIds.length} eliminados). Pégalos en el chat para fijarlos en la página publicada.`,
        type: 'success'
      });
      setTimeout(() => {
        setCopiedChanges(false);
        setStatusMessage(null);
      }, 6000);
    } catch {
      setStatusMessage({
        text: 'No se pudo copiar automáticamente al portapapeles. Usa "Descargar solo cambios (.json)".',
        type: 'error'
      });
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  const handleDownloadChanges = () => {
    const jsonStr = JSON.stringify(changesPayload, null, 2);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonStr);
    const downloadAnchor = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `farmaworld_cambios_${date}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setStatusMessage({
      text: 'Archivo de cambios descargado. Puedes adjuntarlo o importarlo en la página publicada.',
      type: 'success'
    });
    setTimeout(() => setStatusMessage(null), 5000);
  };

  const handleApplyPastedJson = () => {
    if (!pastedJson.trim()) return;
    try {
      const updated = importDatabaseFromJson(pastedJson.trim(), importMode);
      onUpdateMedications(updated);
      setPastedJson('');
      setShowPasteBox(false);
      setStatusMessage({
        text: `Cambios aplicados exitosamente (${updated.length} fármacos activos).`,
        type: 'success'
      });
    } catch (err) {
      setStatusMessage({
        text: err instanceof Error ? err.message : 'El texto pegado no es un JSON válido.',
        type: 'error'
      });
    }
    setTimeout(() => setStatusMessage(null), 5000);
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const updated = importDatabaseFromJson(content, importMode);
        onUpdateMedications(updated);
        setStatusMessage({
          text: `Base de datos importada exitosamente (${updated.length} fármacos activos).`,
          type: 'success'
        });
      } catch (err) {
        setStatusMessage({
          text: err instanceof Error ? err.message : 'Error desconocido al procesar JSON',
          type: 'error'
        });
      }
      setTimeout(() => setStatusMessage(null), 5000);
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Status Alert */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Gestión y Mantenimiento de la Base de Datos</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
              Control de sincronización local, copias de seguridad en JSON, restauración y actualización continua del vademécum.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenNewModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 rounded-lg transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Medicamento</span>
            </button>
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className={`mt-4 p-3 rounded-lg text-xs font-semibold flex items-center gap-2 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
              : 'bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
          }`}>
            {statusMessage.type === 'success' ? <FileCheck className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-300 uppercase block mb-1">Total Registros</span>
            <span className="text-xl font-mono font-black text-slate-900 dark:text-white tabular-nums">
              {medications.length}
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-300 uppercase block mb-1">Personalizados / Editados</span>
            <span className="text-xl font-mono font-black text-sky-600 dark:text-sky-400 tabular-nums">
              {customCount}
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-300 uppercase block mb-1">Alto Riesgo ISMP</span>
            <span className="text-xl font-mono font-black text-rose-600 dark:text-rose-400 tabular-nums">
              {highAlertCount}
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-300 uppercase block mb-1">Reglas de Interacción</span>
            <span className="text-xl font-mono font-black text-amber-600 dark:text-amber-400 tabular-nums">
              {totalInteractions}
            </span>
          </div>
        </div>
      </div>

      {/* Publish / Sync Browser Changes Panel */}
      <div className="bg-sky-50/70 dark:bg-sky-950/35 border border-sky-200 dark:border-sky-800/80 rounded-xl p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Publicar tus cambios de imágenes y nombres en la web ({pendingChangesCount} cambio{pendingChangesCount === 1 ? '' : 's'} local{pendingChangesCount === 1 ? '' : 'es'})
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              Las ediciones que realizas desde el formulario se guardan únicamente en la memoria local de este navegador. Para que todos los visitantes vean tus nombres e imágenes en la página publicada, copia tus cambios y pégalos en el chat para integrarlos al catálogo oficial, o descárgalos para importarlos en la página publicada.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={handleCopyChanges}
              disabled={pendingChangesCount === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-sky-500 dark:hover:bg-sky-600 rounded-lg transition-colors shadow-xs"
            >
              {copiedChanges ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedChanges ? '¡Cambios copiados!' : 'Copiar cambios (JSON)'}</span>
            </button>

            <button
              onClick={handleDownloadChanges}
              disabled={pendingChangesCount === 0}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-800 dark:text-sky-200 bg-white dark:bg-slate-900 border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar solo cambios</span>
            </button>
          </div>
        </div>
      </div>

      {/* Backup and Restore Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        
        {/* Export JSON Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2">
              <Download className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              Exportar Copia de Seguridad
            </h3>
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed mb-4">
              Descargue un archivo JSON íntegro con todas las fichas, dosis, fotos e interacciones para resguardo o migración.
            </p>
          </div>
          <button
            onClick={handleExport}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar JSON (.json)</span>
          </button>
        </div>

        {/* Import JSON Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2">
              <Upload className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              Restaurar / Importar Archivo
            </h3>
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed mb-3">
              Cargue un archivo JSON o pegue un paquete de cambios exportado desde la vista previa.
            </p>

            <div className="flex items-center gap-3 mb-3">
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="importMode"
                  checked={importMode === 'merge'}
                  onChange={() => setImportMode('merge')}
                  className="text-teal-600"
                />
                <span className="text-[11px] text-slate-700 dark:text-slate-200">Fusionar</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="importMode"
                  checked={importMode === 'replace'}
                  onChange={() => setImportMode('replace')}
                  className="text-teal-600"
                />
                <span className="text-[11px] text-slate-700 dark:text-slate-200">Reemplazar todo</span>
              </label>
            </div>

            {showPasteBox && (
              <div className="mb-3 space-y-2">
                <textarea
                  value={pastedJson}
                  onChange={(e) => setPastedJson(e.target.value)}
                  placeholder='Pega aquí el JSON copiado...'
                  rows={3}
                  className="w-full p-2 text-[11px] font-mono bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleApplyPastedJson}
                    className="flex-1 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-[11px]"
                  >
                    Aplicar JSON
                  </button>
                  <button
                    onClick={() => {
                      setShowPasteBox(false);
                      setPastedJson('');
                    }}
                    className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold rounded-lg text-[11px]"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept=".json,application/json"
            onChange={handleFileImport}
            className="hidden"
          />
          <div className="flex flex-col gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-xs"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Seleccionar archivo JSON</span>
            </button>
            <button
              onClick={() => setShowPasteBox(prev => !prev)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-lg transition-colors"
            >
              <ClipboardPaste className="w-3.5 h-3.5" />
              <span>{showPasteBox ? 'Ocultar cuadro de pegado' : 'Pegar JSON directamente'}</span>
            </button>
          </div>
        </div>

        {/* Reset to Standard Defaults Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
              <RotateCcw className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              Catálogo Oficial de Referencia
            </h3>
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed mb-4">
              Restaura la colección oficial original de monografías clínicas de referencia validadas por farmacología.
            </p>
          </div>

          {confirmReset ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onResetDefaults();
                  setConfirmReset(false);
                  setStatusMessage({
                    text: 'Catálogo oficial de monografías restablecido con éxito.',
                    type: 'success'
                  });
                  setTimeout(() => setStatusMessage(null), 4000);
                }}
                className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-xs"
              >
                Confirmar
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 font-bold text-xs"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer Catálogo Oficial</span>
            </button>
          )}
        </div>
      </div>

      {/* Inventory & Records Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Inventario Farmacológico en Memoria Local ({medications.length})
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-300 font-mono">
            Actualización inmediata
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-200 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Medicamento</th>
                <th className="py-3 px-3">Código ATC</th>
                <th className="py-3 px-3">Clase Terapéutica</th>
                <th className="py-3 px-3">Presentaciones</th>
                <th className="py-3 px-3">Interacciones</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {medications.map(med => (
                <tr key={med.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    {med.genericName}
                    {med.highAlertMedicine && (
                      <span className="ml-2 text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold px-1.5 py-0.2 rounded">
                        ALTO RIESGO
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 font-mono font-medium text-slate-600 dark:text-slate-200">
                    {med.atcCode}
                  </td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-200 max-w-xs truncate">
                    {med.therapeuticClass}
                  </td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                    {med.presentations.length} forma(s)
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-600 dark:text-slate-200">
                    {med.interactions.length} registradas
                  </td>
                  <td className="py-3 px-3">
                    {med.isCustom ? (
                      <span className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 font-bold px-1.5 py-0.5 rounded text-[10px]">
                        Personalizado
                      </span>
                    ) : (
                      <span className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200 font-semibold px-1.5 py-0.5 rounded text-[10px]">
                        Oficial
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => onViewMedicationDetail(med)}
                        className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-md cursor-pointer"
                        title="Ver ficha"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onDuplicateMedication(med)}
                        className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-md cursor-pointer"
                        title="Duplicar como plantilla"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onEditMedication(med)}
                        className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white rounded-md cursor-pointer"
                        title="Editar"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      {confirmDeleteId === med.id ? (
                        <div className="flex items-center gap-1 bg-rose-50 dark:bg-rose-950 p-1 rounded">
                          <button
                            onClick={() => {
                              onDeleteMedication(med.id);
                              setConfirmDeleteId(null);
                            }}
                            className="text-rose-600 dark:text-rose-400 font-bold p-0.5 cursor-pointer"
                            title="Confirmar"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setConfirmDeleteId(null)}
                            className="text-slate-500 dark:text-slate-300 p-0.5 cursor-pointer"
                            title="Cancelar"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmDeleteId(med.id)}
                          className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 rounded-md cursor-pointer"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
