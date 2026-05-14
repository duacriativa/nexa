import React from 'react';
import { Download, RefreshCw, Sparkles, ChevronDown, Plus, MoreHorizontal } from 'lucide-react';

export default function AutomationsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Automações</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded">SOS Frizz</span>
          <span className="flex items-center gap-1">
            <RefreshCw className="w-3 h-3" /> Sincronizado
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        {/* Card Header */}
        <div className="p-6 border-b border-gray-100 flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Automações CRM</h2>
              <p className="text-sm text-gray-500">Matriz de réguas automatizadas • SOS Frizz</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
               <span className="text-gray-400">?</span> Como usar
             </button>
             <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
               <Download className="w-4 h-4" /> Exportar PDF
             </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Você não cria automações. Você garante que a jornada do cliente está coberta.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="p-6 grid grid-cols-4 gap-8">
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Réguas</p>
            <p className="text-4xl font-bold text-gray-900">5</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase flex items-center gap-2">
              Implantadas
            </p>
            <p className="text-4xl font-bold text-emerald-500 flex items-center gap-2">
              1 <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Pendentes</p>
            <p className="text-4xl font-bold text-yellow-500">4</p>
          </div>
          <div>
            <div className="flex justify-between items-end mb-2">
              <p className="text-xs font-bold text-gray-400 tracking-wider uppercase">CRM Implantado</p>
              <p className="text-sm font-bold text-gray-900">20%</p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <p className="text-xs text-gray-400 text-right">1 de 5 réguas ativas</p>
          </div>
        </div>
      </div>

      {/* Insights Dropdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8 flex items-center justify-between cursor-pointer hover:bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">Axoly Insights</h3>
            <p className="text-xs text-gray-500">Análise Cognitiva de Automações (puxou 24h)</p>
          </div>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>

      {/* Segment Coverage */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Cobertura por Segmento
          </h3>
          <div className="flex gap-2">
             <button className="text-sm font-medium text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-2">
               Réguas Prontas
             </button>
             <button className="text-sm font-medium text-blue-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-2">
               <Plus className="w-4 h-4" /> Nova Régua
             </button>
          </div>
        </div>

        {/* Category: Recuperação de Vendas */}
        <div className="mb-4">
          <div className="flex items-center gap-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
                <div className="w-2 h-0.5 bg-red-500"></div>
              </div>
              <h4 className="text-sm font-bold text-blue-600 tracking-wider uppercase">Recuperação de Vendas</h4>
              <span className="text-xs text-gray-400 ml-2">20%</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Baixa cobertura</span>
               <div className="flex gap-1">
                 <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50"><Plus className="w-4 h-4 text-gray-400" /></div>
                 <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50"><MoreHorizontal className="w-4 h-4 text-gray-400" /></div>
               </div>
            </div>
          </div>

          {/* Items */}
          <div className="pl-6">
            <div className="flex items-center justify-between py-4 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
                <span className="text-sm font-medium text-gray-900">Recuperação de Carrinho</span>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded tracking-wider uppercase">Checkout Abandonado</span>
                <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded tracking-wider uppercase border border-yellow-200">Pendente</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                 <div className="flex items-center gap-1 text-gray-400">
                   <span>1 / 5</span>
                   <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-yellow-400 w-1/5"></div>
                   </div>
                   <span>20%</span>
                 </div>
                 <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
