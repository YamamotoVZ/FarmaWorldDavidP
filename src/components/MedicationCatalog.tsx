import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  AlertTriangle, 
  Eye, 
  Edit3, 
  Trash2, 
  Calculator, 
  X, 
  Check, 
  Pill,
  ChevronDown,
  ChevronRight,
  FolderTree,
  Layers,
  HeartPulse,
  Shield,
  Droplet,
  Activity,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { Medication, AdministrationRoute } from '../types/medication';
import { DRUG_TAXONOMY, TaxonomyGroup, TaxonomySubclass } from '../data/drugTaxonomy';

interface MedicationCatalogProps {
  medications: Medication[];
  onSelectMedication: (medication: Medication) => void;
  onEditMedication: (medication: Medication) => void;
  onDeleteMedication: (id: string) => void;
  onSelectForInteraction: (medication: Medication) => void;
  selectedForInteractionIds: string[];
  onNavigateToCalculator: (medication: Medication) => void;
}

export const MedicationCatalog: React.FC<MedicationCatalogProps> = ({
  medications,
  onSelectMedication,
  onEditMedication,
  onDeleteMedication,
  onSelectForInteraction,
  selectedForInteractionIds,
  onNavigateToCalculator
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMainGroup, setSelectedMainGroup] = useState<string>('all');
  const [selectedSubclass, setSelectedSubclass] = useState<string>('all');
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [selectedRoute, setSelectedRoute] = useState<string>('all');
  const [selectedPregnancy, setSelectedPregnancy] = useState<string>('all');
  const [selectedPrescription, setSelectedPrescription] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Estado del explorador taxonómico interactivo
  const [isTaxonomyOpen, setIsTaxonomyOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
    '3': true,
    '4': true
  });
  const [expandedSubclasses, setExpandedSubclasses] = useState<Record<string, boolean>>({
    '1.1': true,
    '1.2': true,
    '1.4': true,
    '1.5': true,
    '2.1': true,
    '2.2': true,
    '4.1': true
  });

  const toggleGroupExpand = (groupId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const toggleSubclassExpand = (subclassId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSubclasses(prev => ({ ...prev, [subclassId]: !prev[subclassId] }));
  };

  const handleExpandAll = () => {
    setExpandedGroups({ '1': true, '2': true, '3': true, '4': true });
    const allSubs: Record<string, boolean> = {};
    DRUG_TAXONOMY.forEach(g => {
      g.subclasses.forEach(s => {
        allSubs[s.id] = true;
      });
    });
    setExpandedSubclasses(allSubs);
  };

  const handleCollapseAll = () => {
    setExpandedGroups({ '1': false, '2': false, '3': false, '4': false });
    setExpandedSubclasses({});
  };

  // Rutas disponibles
  const routes: AdministrationRoute[] = [
    'Oral', 'Intravenosa', 'Intramuscular', 'Subcutánea', 'Inhalatoria', 'Tópica', 'Oftálmica', 'Rectal'
  ];

  // Identificar divisiones activas si se selecciona una subclase en particular
  const activeSubclassObj = useMemo(() => {
    if (selectedSubclass === 'all') return null;
    for (const group of DRUG_TAXONOMY) {
      const match = group.subclasses.find(s => s.name === selectedSubclass || s.id === selectedSubclass);
      if (match) return match;
    }
    return null;
  }, [selectedSubclass]);

  // Medicamentos filtrados
  const filtered = useMemo(() => {
    return medications.filter(med => {
      // 1. Filtro de búsqueda textual libre
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesGeneric = med.genericName.toLowerCase().includes(query);
        const matchesBrand = med.commercialNames.some(b => b.toLowerCase().includes(query));
        const matchesAtc = med.atcCode.toLowerCase().includes(query);
        const matchesClass = med.therapeuticClass.toLowerCase().includes(query);
        const matchesSystem = med.anatomicalSystem.toLowerCase().includes(query);
        const matchesSubdivision = med.subdivision?.toLowerCase().includes(query) || false;
        const matchesIndication = med.therapeuticIndications.some(i => i.toLowerCase().includes(query));
        const matchesMechanism = med.mechanismOfAction.summary.toLowerCase().includes(query);

        if (!matchesGeneric && !matchesBrand && !matchesAtc && !matchesClass && !matchesSystem && !matchesSubdivision && !matchesIndication && !matchesMechanism) {
          return false;
        }
      }

      // 2. Filtro de Grupo Principal (1, 2, 3, 4)
      if (selectedMainGroup !== 'all') {
        const targetGroup = DRUG_TAXONOMY.find(g => g.id === selectedMainGroup);
        if (targetGroup) {
          const matchByField = med.mainCategory && med.mainCategory.startsWith(targetGroup.number);
          const matchBySystem = med.anatomicalSystem && med.anatomicalSystem.startsWith(targetGroup.number + '.');
          if (!matchByField && !matchBySystem) {
            return false;
          }
        }
      }

      // 3. Filtro de Subclase (1.1, 1.2, ..., 4.2)
      if (selectedSubclass !== 'all') {
        const matchesName = med.anatomicalSystem === selectedSubclass;
        const matchesCode = med.anatomicalSystem && med.anatomicalSystem.startsWith(selectedSubclass + ' ');
        if (!matchesName && !matchesCode) {
          return false;
        }
      }

      // 4. Filtro de Subdivisión específica (ej. 'Agonista puro', 'Ácidos', 'Benzodiacepinas')
      if (selectedDivision !== 'all') {
        if (!med.subdivision || med.subdivision !== selectedDivision) {
          return false;
        }
      }

      // 5. Filtro de Vía de administración
      if (selectedRoute !== 'all') {
        const hasRoute = med.presentations.some(p => p.route === selectedRoute);
        if (!hasRoute) return false;
      }

      // 6. Filtro de Categoría de Embarazo
      if (selectedPregnancy !== 'all' && med.safety.pregnancyCategory !== selectedPregnancy) {
        return false;
      }

      // 7. Filtro de Régimen / Alto Riesgo
      if (selectedPrescription !== 'all') {
        if (selectedPrescription === 'high-alert' && !med.highAlertMedicine) return false;
        if (selectedPrescription !== 'high-alert' && med.prescriptionType !== selectedPrescription) return false;
      }

      return true;
    });
  }, [
    medications, 
    searchTerm, 
    selectedMainGroup, 
    selectedSubclass, 
    selectedDivision, 
    selectedRoute, 
    selectedPregnancy, 
    selectedPrescription
  ]);

  // Limpiar todos los filtros
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedMainGroup('all');
    setSelectedSubclass('all');
    setSelectedDivision('all');
    setSelectedRoute('all');
    setSelectedPregnancy('all');
    setSelectedPrescription('all');
  };

  const isFiltered = 
    searchTerm !== '' || 
    selectedMainGroup !== 'all' || 
    selectedSubclass !== 'all' || 
    selectedDivision !== 'all' || 
    selectedRoute !== 'all' || 
    selectedPregnancy !== 'all' || 
    selectedPrescription !== 'all';

  // Contadores para cada nivel taxonómico
  const getGroupCount = (groupId: string) => {
    return medications.filter(m => {
      const matchField = m.mainCategory && m.mainCategory.startsWith(groupId);
      const matchSys = m.anatomicalSystem && m.anatomicalSystem.startsWith(groupId + '.');
      return matchField || matchSys;
    }).length;
  };

  const getSubclassCount = (subclassName: string, subclassId: string) => {
    return medications.filter(m => m.anatomicalSystem === subclassName || (m.anatomicalSystem && m.anatomicalSystem.startsWith(subclassId + ' '))).length;
  };

  const getDivisionCount = (subclassName: string, subclassId: string, divisionName: string) => {
    return medications.filter(m => {
      const matchesSub = m.anatomicalSystem === subclassName || (m.anatomicalSystem && m.anatomicalSystem.startsWith(subclassId + ' '));
      return matchesSub && m.subdivision === divisionName;
    }).length;
  };

  const getGroupIcon = (id: string) => {
    switch (id) {
      case '1': return Activity;
      case '2': return Shield;
      case '3': return HeartPulse;
      case '4': return Droplet;
      default: return Pill;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* ============================================================== */}
      {/* BARRA SUPERIOR DE BÚSQUEDA Y VISTAS                           */}
      {/* ============================================================== */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Barra de búsqueda interactiva */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por DCI (Morfina, Paracetamol), marcas, ATC, subdivisión, mecanismo..."
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Selector de modo Cuadrícula / Tabla y botón de limpiar filtros */}
          <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
            {isFiltered && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-rose-600 dark:text-rose-400 hover:underline px-2 py-1 font-semibold cursor-pointer"
              >
                Limpiar filtros
              </button>
            )}


            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Vista en tarjetas con foto"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Vista tabular clínica"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FILTROS RÁPIDOS TRADICIONALES EN LÍNEA                       */}
        {/* ============================================================ */}
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3 text-xs">
          
          {/* Selector de Clasificación (Orden estricto 1.1 a 4.2) */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-600 dark:text-slate-300 font-semibold">Clasificación:</span>
            <select
              value={selectedSubclass}
              onChange={(e) => {
                setSelectedSubclass(e.target.value);
                setSelectedDivision('all');
                if (e.target.value !== 'all') {
                  const sub = DRUG_TAXONOMY.flatMap(g => g.subclasses).find(s => s.name === e.target.value || s.id === e.target.value);
                  if (sub) {
                    setSelectedMainGroup(sub.parentGroupId);
                  }
                } else {
                  setSelectedMainGroup('all');
                }
              }}
              className="py-1 px-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">Todas las subclases ({medications.length})</option>
              {DRUG_TAXONOMY.map(group => (
                <optgroup key={group.id} label={group.name.toUpperCase()}>
                  {group.subclasses.map(sub => (
                    <option key={sub.id} value={sub.name}>
                      {sub.name} ({getSubclassCount(sub.name, sub.id)})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Selector de Subdivisión (Aparece si la subclase tiene divisiones) */}
          {activeSubclassObj && activeSubclassObj.divisions.length > 0 && (
            <div className="flex items-center gap-1.5 animate-in fade-in slide-in-from-left-2">
              <span className="text-sky-700 dark:text-sky-300 font-bold">División:</span>
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="py-1 px-2.5 bg-sky-50/70 dark:bg-sky-950/50 border border-sky-300 dark:border-sky-800 rounded-md text-sky-900 dark:text-sky-200 font-semibold focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="all">Todas las divisiones ({getSubclassCount(activeSubclassObj.name, activeSubclassObj.id)})</option>
                {activeSubclassObj.divisions.map(div => (
                  <option key={div} value={div}>
                    {div} ({getDivisionCount(activeSubclassObj.name, activeSubclassObj.id, div)})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Vía de administración */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-300 font-medium">Vía:</span>
            <select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="py-1 px-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">Todas las vías</option>
              {routes.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Categoría de riesgo en embarazo */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-300 font-medium">Embarazo:</span>
            <select
              value={selectedPregnancy}
              onChange={(e) => setSelectedPregnancy(e.target.value)}
              className="py-1 px-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">Cualquier riesgo</option>
              <option value="A">Cat. A</option>
              <option value="B">Cat. B</option>
              <option value="C">Cat. C</option>
              <option value="D">Cat. D</option>
              <option value="X">Cat. X</option>
            </select>
          </div>

          {/* Fármacos de alto riesgo / Prescripción */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-300 font-medium">Control:</span>
            <select
              value={selectedPrescription}
              onChange={(e) => setSelectedPrescription(e.target.value)}
              className="py-1 px-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">Todos los regímenes</option>
              <option value="high-alert">Alto Riesgo ISMP</option>
              <option value="Receta médica simple">Receta simple</option>
              <option value="Receta retenida / Controlado">Controlado</option>
              <option value="Uso hospitalario exclusivo">Hospitalario</option>
              <option value="Venta libre (OTC)">Venta libre (OTC)</option>
            </select>
          </div>

          <div className="ml-auto text-slate-500 dark:text-slate-300 font-mono text-xs">
            Mostrando <span className="font-bold text-slate-900 dark:text-white tabular-nums">{filtered.length}</span> de <span className="tabular-nums">{medications.length}</span> fármacos
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESPLIEGUE JERÁRQUICO DE CLASIFICACIÓN (ACORDEÓN / ÁRBOL)       */}
      {/* ============================================================== */}
      {isTaxonomyOpen && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-150 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold">
                <FolderTree className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>Clasificación Farmacológica & Despliegue de Divisiones</span>
                  <span className="text-[11px] font-mono font-normal text-slate-500 dark:text-slate-300">
                    (Temario 1 - 4)
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  Haz clic en cualquier categoría, subclase o división para filtrar al instante los fármacos correspondientes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 text-xs">
              <button
                onClick={handleExpandAll}
                className="px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                Desplegar todo
              </button>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <button
                onClick={handleCollapseAll}
                className="px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                Contraer todo
              </button>
              {selectedMainGroup !== 'all' || selectedSubclass !== 'all' || selectedDivision !== 'all' ? (
                <>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <button
                    onClick={() => {
                      setSelectedMainGroup('all');
                      setSelectedSubclass('all');
                      setSelectedDivision('all');
                    }}
                    className="px-2.5 py-1 font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer"
                  >
                    Ver todos (quitar filtro)
                  </button>
                </>
              ) : null}
            </div>
          </div>

          {/* Grilla interactiva de los 4 Grandes Grupos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DRUG_TAXONOMY.map((group) => {
              const GroupIcon = getGroupIcon(group.id);
              const isGroupExpanded = expandedGroups[group.id] ?? false;
              const isGroupActive = selectedMainGroup === group.id && selectedSubclass === 'all';
              const groupCount = getGroupCount(group.id);

              return (
                <div
                  key={group.id}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isGroupActive
                      ? 'border-sky-500 bg-sky-50/40 dark:bg-sky-950/20 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Encabezado del Gran Grupo */}
                  <div 
                    onClick={() => {
                      if (selectedMainGroup === group.id && selectedSubclass === 'all') {
                        setSelectedMainGroup('all');
                      } else {
                        setSelectedMainGroup(group.id);
                        setSelectedSubclass('all');
                        setSelectedDivision('all');
                      }
                    }}
                    className="p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none bg-white/70 dark:bg-slate-850/80 hover:bg-sky-50/30 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 shadow-xs ${
                        isGroupActive
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                      }`}>
                        <GroupIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          {group.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-300 truncate">
                          {group.subclasses.length} subclases · {groupCount} fármacos
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                        {groupCount}
                      </span>
                      <button
                        onClick={(e) => toggleGroupExpand(group.id, e)}
                        className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 cursor-pointer"
                        title={isGroupExpanded ? 'Contraer grupo' : 'Desplegar grupo'}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isGroupExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Subclases y Divisiones desplegadas */}
                  {isGroupExpanded && (
                    <div className="p-3 pt-2 space-y-2.5 border-t border-slate-150 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
                      {group.subclasses.map((sub) => {
                        const isSubActive = selectedSubclass === sub.name;
                        const subCount = getSubclassCount(sub.name, sub.id);
                        const isSubExpanded = expandedSubclasses[sub.id] ?? false;
                        const hasDivisions = sub.divisions && sub.divisions.length > 0;

                        return (
                          <div
                            key={sub.id}
                            className={`rounded-lg border transition-all text-xs overflow-hidden ${
                              isSubActive && selectedDivision === 'all'
                                ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800'
                                : 'bg-white dark:bg-slate-850/90 border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                            }`}
                          >
                            {/* Cabecera de la subclase (ej. 1.1 Analgésicos narcóticos) */}
                            <div
                              onClick={() => {
                                setSelectedMainGroup(group.id);
                                setSelectedSubclass(sub.name);
                                setSelectedDivision('all');
                              }}
                              className="p-2 sm:px-2.5 flex items-center justify-between gap-2 cursor-pointer select-none"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="font-mono font-bold text-sky-700 dark:text-sky-400 shrink-0">
                                  {sub.number}
                                </span>
                                <span className={`font-semibold truncate ${
                                  isSubActive ? 'text-sky-900 dark:text-sky-200' : 'text-slate-800 dark:text-slate-100'
                                }`}>
                                  {sub.shortName}
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-300">
                                  {subCount}
                                </span>
                                {hasDivisions && (
                                  <button
                                    onClick={(e) => toggleSubclassExpand(sub.id, e)}
                                    className="p-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                                    title={isSubExpanded ? 'Contraer divisiones' : 'Desplegar divisiones'}
                                  >
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSubExpanded ? 'rotate-180' : ''}`} />
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Despliegue de Divisiones de la Subclase (ej: Agonista puro, Ácidos, etc.) */}
                            {hasDivisions && isSubExpanded && (
                              <div className="px-2.5 pb-2 pt-1 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60">
                                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                  <span>Divisiones:</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {sub.divisions.map((div) => {
                                    const isDivActive = isSubActive && selectedDivision === div;
                                    const divCount = getDivisionCount(sub.name, sub.id, div);

                                    return (
                                      <button
                                        key={div}
                                        onClick={() => {
                                          setSelectedMainGroup(group.id);
                                          setSelectedSubclass(sub.name);
                                          setSelectedDivision(div);
                                        }}
                                        className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                                          isDivActive
                                            ? 'bg-sky-600 text-white font-bold shadow-xs'
                                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                                        }`}
                                      >
                                        <span>{div}</span>
                                        <span className={`text-[10px] font-mono px-1 rounded-full ${
                                          isDivActive 
                                            ? 'bg-white/20 text-white' 
                                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200'
                                        }`}>
                                          {divCount}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* BREADCRUMB / CHIP DE CLASIFICACIÓN ACTIVA                       */}
      {/* ============================================================== */}
      {(selectedMainGroup !== 'all' || selectedSubclass !== 'all' || selectedDivision !== 'all') && (
        <div className="p-3 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 rounded-xl flex items-center justify-between gap-3 text-xs animate-in fade-in">
          <div className="flex items-center gap-2 text-sky-900 dark:text-sky-200 flex-wrap">
            <span className="font-bold flex items-center gap-1 text-sky-800 dark:text-sky-300">
              <Filter className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              Filtro activo de clasificación:
            </span>

            {selectedMainGroup !== 'all' && (
              <span className="bg-white dark:bg-slate-850 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800 font-semibold">
                {DRUG_TAXONOMY.find(g => g.id === selectedMainGroup)?.shortName || `Grupo ${selectedMainGroup}`}
              </span>
            )}

            {selectedSubclass !== 'all' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-300" />
                <span className="bg-sky-600 text-white px-2 py-0.5 rounded font-bold">
                  {selectedSubclass}
                </span>
              </>
            )}

            {selectedDivision !== 'all' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-300" />
                <span className="bg-white dark:bg-slate-850 text-sky-900 dark:text-sky-200 px-2 py-0.5 rounded border border-sky-300 dark:border-sky-700 font-bold">
                  {selectedDivision}
                </span>
              </>
            )}

            <span className="font-mono text-slate-500 dark:text-slate-300 ml-1">
              ({filtered.length} {filtered.length === 1 ? 'medicamento' : 'medicamentos'})
            </span>
          </div>

          <button
            onClick={() => {
              setSelectedMainGroup('all');
              setSelectedSubclass('all');
              setSelectedDivision('all');
            }}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
            <span>Quitar filtro</span>
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* ESTADO VACÍO                                                   */}
      {/* ============================================================== */}
      {filtered.length === 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-12 text-center">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
            No se encontraron medicamentos en esta selección
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-300 max-w-md mx-auto mb-4">
            No hay ningún fármaco que coincida con los criterios de búsqueda, subclase o división seleccionada.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 rounded-lg hover:bg-sky-100 transition-colors cursor-pointer"
          >
            Restablecer todos los filtros
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* VISTA EN CUADRÍCULA (GRID MODE)                                */}
      {/* ============================================================== */}
      {viewMode === 'grid' && filtered.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((med) => {
            const isSelectedForInter = selectedForInteractionIds.includes(med.id);
            const isConfirmingDelete = confirmDeleteId === med.id;

            return (
              <div
                key={med.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col group shadow-xs"
              >
                {/* Imagen y badges de cabecera */}
                <div className="relative h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  {med.imageUrl ? (
                    <img
                      src={med.imageUrl}
                      alt={med.imageAlt || med.genericName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 dark:text-slate-300 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-850 dark:to-slate-900">
                      <Pill className="w-10 h-10 mb-2 opacity-60" />
                      <span className="text-xs font-mono">Sin imagen clínica</span>
                    </div>
                  )}

                  {/* Badges superiores de alerta, fotos y embarazo */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                    {med.images && med.images.length > 1 && (
                      <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-1" title={`${med.images.length} imágenes clínicas registradas`}>
                        <ImageIcon className="w-3 h-3 text-sky-400" />
                        <span>{med.images.length}</span>
                      </span>
                    )}
                    {med.highAlertMedicine && (
                      <span className="bg-rose-600 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded shadow-xs" title="Fármaco de Alto Riesgo (ISMP)">
                        ALTO RIESGO
                      </span>
                    )}
                    <span 
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded shadow-xs ${
                        med.safety.pregnancyCategory === 'X' 
                          ? 'bg-rose-700 text-white' 
                          : med.safety.pregnancyCategory === 'D'
                          ? 'bg-amber-600 text-white'
                          : med.safety.pregnancyCategory === 'C'
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-emerald-600 text-white'
                      }`}
                      title={`Categoría de riesgo en embarazo: ${med.safety.pregnancyCategory}`}
                    >
                      Cat. {med.safety.pregnancyCategory}
                    </span>
                  </div>

                  {/* Overlay inferior con ATC y Clasificación/Subdivisión */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 pt-6 flex items-end justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {med.atcCode}
                    </span>
                    <span className="text-[11px] text-slate-200 truncate max-w-[200px] font-medium" title={`${med.anatomicalSystem}${med.subdivision ? ` · ${med.subdivision}` : ''}`}>
                      {med.anatomicalSystem} {med.subdivision ? `· ${med.subdivision}` : ''}
                    </span>
                  </div>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Título y nombres comerciales */}
                  <div className="mb-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {med.genericName}
                    </h3>
                    {med.commercialNames && med.commercialNames.length > 0 && (
                      <p className="text-xs text-sky-700 dark:text-sky-400 font-medium mt-0.5 truncate">
                        {med.commercialNames.join(' · ')}
                      </p>
                    )}
                  </div>

                  {/* Clase terapéutica & Subdivisión */}
                  <div className="text-xs text-slate-600 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                    <span className="font-semibold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-1.5 py-0.2 rounded border border-sky-200 dark:border-sky-800">
                      {med.subdivision || med.anatomicalSystem}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500">·</span>
                    <span className="truncate text-slate-500 dark:text-slate-300">{med.therapeuticClass}</span>
                  </div>

                  {/* Resumen clínico */}
                  <p className="text-xs text-slate-600 dark:text-slate-200 line-clamp-2 mb-3 leading-relaxed">
                    {med.description}
                  </p>

                  {/* Presentaciones y Vía */}
                  <div className="bg-slate-50 dark:bg-slate-850 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/80 mb-4 text-xs space-y-1">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-300">
                      <span className="font-medium">Concentración:</span>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">
                        {med.presentations[0]?.concentration || 'Estándar'}
                        {med.presentations.length > 1 ? ` (+${med.presentations.length - 1})` : ''}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-300">
                      <span className="font-medium">Vías:</span>
                      <span className="text-slate-700 dark:text-slate-100 truncate max-w-[150px]">
                        {Array.from(new Set(med.presentations.map(p => p.route))).join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Acciones de la tarjeta */}
                  <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onSelectMedication(med)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-xs cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ficha Completa</span>
                      </button>

                      <button
                        onClick={() => onNavigateToCalculator(med)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title="Calcular posología"
                      >
                        <Calculator className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onSelectForInteraction(med)}
                        className={`p-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          isSelectedForInter
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            : 'text-slate-400 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800'
                        }`}
                        title={isSelectedForInter ? 'Seleccionado para verificar interacciones' : 'Agregar a verificador de interacciones'}
                      >
                        <Layers className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onEditMedication(med)}
                        className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title="Editar información"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      {isConfirmingDelete ? (
                        <div className="flex items-center gap-1 bg-rose-50 dark:bg-rose-950 p-1 rounded-lg">
                          <button
                            onClick={() => {
                              onDeleteMedication(med.id);
                              setConfirmDeleteId(null);
                            }}
                            className="text-rose-600 dark:text-rose-400 font-bold p-1 hover:bg-rose-100 dark:hover:bg-rose-900/60 rounded cursor-pointer"
                            title="Confirmar eliminación"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setConfirmDeleteId(null)}
                            className="text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white p-1 cursor-pointer"
                            title="Cancelar"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmDeleteId(med.id)}
                          className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                          title="Eliminar de catálogo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ============================================================== */}
      {/* VISTA EN TABLA (TABLE MODE)                                    */}
      {/* ============================================================== */}
      {viewMode === 'table' && filtered.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Medicamento (DCI)</th>
                  <th className="py-3 px-3">Clasificación & Subdivisión</th>
                  <th className="py-3 px-3">Código ATC</th>
                  <th className="py-3 px-3">Clase Terapéutica</th>
                  <th className="py-3 px-3">Concentraciones</th>
                  <th className="py-3 px-3">Posología Adulto</th>
                  <th className="py-3 px-3">Embarazo</th>
                  <th className="py-3 px-3">Régimen</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((med) => {
                  const isSelectedForInter = selectedForInteractionIds.includes(med.id);
                  const isConfirmingDelete = confirmDeleteId === med.id;

                  return (
                    <tr 
                      key={med.id}
                      className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          {med.imageUrl && (
                            <img
                              src={med.imageUrl}
                              alt={med.genericName}
                              className="w-8 h-8 rounded-md object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                            />
                          )}
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <span>{med.genericName}</span>
                              {med.highAlertMedicine && (
                                <span className="bg-rose-600 text-white text-[9px] font-bold px-1 rounded">
                                  ALTO RIESGO
                                </span>
                              )}
                            </div>
                            {med.commercialNames && med.commercialNames.length > 0 && (
                              <div className="text-[11px] text-sky-700 dark:text-sky-400 truncate max-w-xs">
                                {med.commercialNames.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-3">
                        <span className="font-medium text-slate-800 dark:text-slate-200 block">
                          {med.anatomicalSystem}
                        </span>
                        {med.subdivision && (
                          <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold block">
                            ↳ {med.subdivision}
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-3 font-mono font-medium text-slate-600 dark:text-slate-300">
                        {med.atcCode}
                      </td>

                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300 max-w-xs truncate">
                        {med.therapeuticClass}
                      </td>

                      <td className="py-3 px-3 text-slate-600 dark:text-slate-200">
                        {med.presentations.map(p => p.concentration).join(' · ')}
                      </td>

                      <td className="py-3 px-3 text-slate-600 dark:text-slate-200 font-mono text-[11px] max-w-xs truncate">
                        {med.posology.adultStandard}
                      </td>

                      <td className="py-3 px-3">
                        <span 
                          className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                            med.safety.pregnancyCategory === 'X' 
                              ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' 
                              : med.safety.pregnancyCategory === 'D'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
                          }`}
                        >
                          {med.safety.pregnancyCategory}
                        </span>
                      </td>

                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300 text-[11px]">
                        {med.prescriptionType}
                      </td>

                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => onSelectMedication(med)}
                            className="p-1.5 text-slate-500 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 rounded-md cursor-pointer"
                            title="Ver ficha completa"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          
                          <button
                            onClick={() => onSelectForInteraction(med)}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                              isSelectedForInter
                                ? 'bg-amber-500 text-white'
                                : 'text-slate-400 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400'
                            }`}
                            title="Verificador de interacciones"
                          >
                            <Layers className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onNavigateToCalculator(med)}
                            className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white rounded-md cursor-pointer"
                            title="Calculadora"
                          >
                            <Calculator className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onEditMedication(med)}
                            className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white rounded-md cursor-pointer"
                            title="Editar"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>

                          {isConfirmingDelete ? (
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
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
