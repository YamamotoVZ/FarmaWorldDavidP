import React from 'react';
import { Pill, ShieldAlert, Calculator, Database, Plus, Moon, Sun } from 'lucide-react';

export type ActiveTab = 'catalog' | 'interactions' | 'calculator' | 'database';

interface TopNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenNewModal: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  interactionCount: number;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  onTabChange,
  onOpenNewModal,
  isDark,
  onToggleTheme,
  interactionCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Brand wordmark (single line, no descriptor in DOM) */}
          <button
            onClick={() => onTabChange('catalog')}
            className="flex items-center gap-2.5 text-left text-slate-900 dark:text-white font-bold tracking-tight text-xl whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-600 dark:bg-sky-500 flex items-center justify-center text-white shadow-sm">
              <Pill className="w-4 h-4" />
            </div>
            <span className="font-extrabold tracking-tight">Farma<span className="text-sky-600 dark:text-sky-400">World</span></span>
          </button>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onTabChange('catalog')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'catalog'
                  ? 'bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <Pill className="w-4 h-4" />
              <span>Catálogo Clínico</span>
            </button>

            <button
              onClick={() => onTabChange('interactions')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'interactions'
                  ? 'bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Interacciones</span>
              {interactionCount > 0 && (
                <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono font-bold">
                  {interactionCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onTabChange('calculator')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'calculator'
                  ? 'bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora</span>
            </button>

            <button
              onClick={() => onTabChange('database')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'database'
                  ? 'bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Gestor BD</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
              aria-label="Alternar tema"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenNewModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Medicamento</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => onTabChange('catalog')}
            className={`flex flex-col items-center py-1 px-2 text-xs font-medium ${
              activeTab === 'catalog' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Pill className="w-4 h-4 mb-0.5" />
            <span>Catálogo</span>
          </button>
          <button
            onClick={() => onTabChange('interactions')}
            className={`flex flex-col items-center py-1 px-2 text-xs font-medium relative ${
              activeTab === 'interactions' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <ShieldAlert className="w-4 h-4 mb-0.5" />
            <span>Interacciones</span>
            {interactionCount > 0 && (
              <span className="absolute top-0 right-2 w-2 h-2 rounded-full bg-amber-500" />
            )}
          </button>
          <button
            onClick={() => onTabChange('calculator')}
            className={`flex flex-col items-center py-1 px-2 text-xs font-medium ${
              activeTab === 'calculator' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Calculator className="w-4 h-4 mb-0.5" />
            <span>Dosis</span>
          </button>
          <button
            onClick={() => onTabChange('database')}
            className={`flex flex-col items-center py-1 px-2 text-xs font-medium ${
              activeTab === 'database' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Database className="w-4 h-4 mb-0.5" />
            <span>Base Datos</span>
          </button>
        </div>
      </div>
    </header>
  );
};
