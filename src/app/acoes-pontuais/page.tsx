"use client"

import React, { useState } from 'react';
import { Target, Users, DollarSign, Wallet, TrendingUp, Calendar as CalendarIcon, FileText, Plus, List, Sparkles, MessageSquare, X, Check } from 'lucide-react';

export default function AcoesPontuaisPage() {
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [scriptText, setScriptText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateScriptWithAI = () => {
    setIsGenerating(true);
    setScriptText('');
    
    // Simulate AI Generation
    setTimeout(() => {
      setScriptText("Olá [Nome do Cliente], percebemos que você fez sua primeira compra com a gente há 30 dias! Esperamos que esteja amando os produtos. 🥰\n\nComo agradecimento, preparamos um mimo especial para você: use o cupom VOLTA10 e garanta 10% OFF na sua próxima compra.\n\nMas corre, que esse presente expira em 24h! ⏰ Clique no link para aproveitar: [Link da Loja]");
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header Goals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider">META DE RETENÇÃO • ABRIL</p>
            <h2 className="text-3xl font-bold text-gray-900">R$ 10.200</h2>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider text-right">PROJETADO</p>
            <h3 className="text-xl font-bold text-gray-900 text-right">R$ 0</h3>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider text-right">COBERTURA</p>
            <h3 className="text-xl font-bold text-red-500 text-right">0%</h3>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-wider text-right">% RETENÇÃO</p>
            <h3 className="text-xl font-bold text-gray-900 text-right">23%</h3>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <MetricCard icon={<CalendarIcon className="w-4 h-4" />} title="AÇÕES NO MÊS" value="1" />
        <MetricCard icon={<Users className="w-4 h-4" />} title="BASES ATIVADAS" value="0" />
        <MetricCard icon={<DollarSign className="w-4 h-4 text-emerald-500" />} title="RECEITA PROJETADA" value="R$ 0" valueColor="text-emerald-500" />
        <MetricCard icon={<Wallet className="w-4 h-4 text-orange-500" />} title="CUSTO TOTAL" value="R$ 0" valueColor="text-orange-500" />
        <MetricCard icon={<TrendingUp className="w-4 h-4" />} title="ROI MÉDIO" value="0.00x" />
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-6">
            <BarChart2 className="w-4 h-4 text-blue-500" /> Receita por dia
          </h3>
          
          {/* Mock Calendar Chart */}
          <div className="w-full h-32 flex items-end justify-between gap-1 border-b border-gray-200 pb-2 mb-2 px-4 relative">
             <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -z-10"></div>
             {Array.from({ length: 30 }).map((_, i) => (
               <div key={i} className="flex flex-col items-center gap-2 w-full">
                 <div className="w-full bg-blue-100 rounded-t-sm" style={{ height: i === 20 ? '40px' : '4px' }}></div>
               </div>
             ))}
          </div>
          <div className="flex justify-between px-4 text-xs text-gray-400">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        </div>

        {/* Actions Menu */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" /> Nova Ação
            </button>
            <button className="bg-white border border-blue-200 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <FileText className="w-4 h-4" /> Ações Prontas
            </button>
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <button className="text-gray-900 px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 bg-white border border-gray-200 shadow-sm">
              <List className="w-4 h-4" /> Tabela
            </button>
            <button className="text-gray-500 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-gray-100">
              <CalendarIcon className="w-4 h-4" /> Calendário
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="text-gray-900 border-b-2 border-blue-600 pb-1 cursor-pointer">Todas</span>
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer">Planejadas</span>
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer">Enviadas</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 tracking-wider">
                <th className="p-4 uppercase">Data</th>
                <th className="p-4 uppercase">Status</th>
                <th className="p-4 uppercase">Base</th>
                <th className="p-4 uppercase">Objetivo</th>
                <th className="p-4 uppercase">Canais</th>
                <th className="p-4 uppercase">Oferta</th>
                <th className="p-4 uppercase">Tamanho da Base</th>
                <th className="p-4 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="p-4">
                  <div className="font-bold text-gray-900">21/04</div>
                  <div className="text-xs text-gray-400">Ter</div>
                </td>
                <td className="p-4">
                  <span className="text-xs font-bold text-gray-500 border border-gray-200 bg-gray-50 px-2 py-1 rounded">Planejada</span>
                </td>
                <td className="p-4 font-medium text-gray-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" /> Comprou 1x - 30 dia
                </td>
                <td className="p-4 text-gray-500 text-xs max-w-[150px]">
                  Clientes que realizaram a primeira compra nos últimos 30 dias.
                </td>
                <td className="p-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <MessageSquare className="w-3 h-3" />
                  </div>
                </td>
                <td className="p-4">Cupom Desconto</td>
                <td className="p-4 font-medium">124</td>
                <td className="p-4">
                  <button 
                    onClick={() => setIsScriptModalOpen(true)}
                    className="text-blue-600 font-medium text-xs border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-blue-100"
                  >
                    <Sparkles className="w-3 h-3" /> Ver Script IA
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Script AI Modal */}
      {isScriptModalOpen && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-green-500" /> Script da Ação Pontual (WhatsApp)
                </h3>
                <p className="text-xs text-gray-500 mt-1">Base: Comprou 1x - 30 dias • Oferta: Cupom Desconto • Janela: 24h</p>
              </div>
              <button onClick={() => setIsScriptModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {isGenerating && (
                <div className="flex flex-col items-center justify-center py-8">
                  <Sparkles className="w-8 h-8 text-blue-500 animate-pulse mb-3" />
                  <p className="text-sm font-bold text-blue-600">Gerando Script Perfeito...</p>
                  <p className="text-xs text-gray-400 mt-2 text-center max-w-[250px]">
                    A inteligência artificial está analisando o histórico e criando um texto de alta conversão.
                  </p>
                </div>
              )}
              
              {!isGenerating && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Conteúdo do Script</label>
                     <button 
                       onClick={generateScriptWithAI}
                       className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline"
                     >
                       <Sparkles className="w-3 h-3" /> {scriptText ? 'Gerar Novamente' : 'Gerar com I.A.'}
                     </button>
                  </div>
                  <textarea 
                    className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Cole o texto aqui ou gere com I.A..."
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button 
                onClick={() => setIsScriptModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setIsScriptModalOpen(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700"
              >
                <Check className="w-4 h-4" /> Salvar Script
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function MetricCard({ icon, title, value, valueColor = "text-gray-900" }: { icon: React.ReactNode, title: string, value: string, valueColor?: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 tracking-wider uppercase mb-3">
        {icon} {title}
      </div>
      <div className={`text-2xl font-bold ${valueColor}`}>
        {value}
      </div>
    </div>
  );
}

// Icon that wasn't imported from lucide-react in the header
function BarChart2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}
