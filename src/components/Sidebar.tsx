import React from 'react';
import Link from 'next/link';
import { ChevronLeft, LayoutDashboard, FileText, BarChart2, Users, Settings, Zap, ArrowLeftRight, Mail, MessageSquare } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-200 h-screen bg-white flex flex-col p-4 fixed left-0 top-0 z-50">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">N</div>
        <span className="font-semibold text-lg text-gray-800">Nexa</span>
      </div>

      <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
        {/* Workspace Selector */}
        <div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-pink-500 to-orange-400"></div>
            <div>
              <p className="text-sm font-semibold text-gray-800">SOS Frizz</p>
              <p className="text-xs text-gray-500">Beleza & Cosméticos</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Recolher menu" 
            className="w-full pl-8 pr-4 py-2 text-sm bg-gray-50 border-none rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <ChevronLeft className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
        </div>

        {/* Menu Sections */}
        <nav className="flex flex-col gap-1">
          <NavItem icon={<LayoutDashboard className="w-4 h-4" />} label="Nexa Academy" badge="EM BREVE" />
          <NavItem icon={<FileText className="w-4 h-4" />} label="Nexa User Guide" badge="NEW" />
          <NavItem icon={<BarChart2 className="w-4 h-4" />} label="Nexa Benchmark" badge="NEW" />
        </nav>

        <div className="mt-4">
          <NavSection title="NEXA METRICS" badge="NEW" />
          <NavSection title="GESTÃO" />
          <NavSection title="CONTEÚDO" />
          <NavSection title="PERFORMANCE" />
          <NavSection title="CRM" isOpen>
            <Link href="/">
              <NavItem icon={<Zap className="w-4 h-4" />} label="Automações" />
            </Link>
            <Link href="/acoes-pontuais">
              <NavItem icon={<ArrowLeftRight className="w-4 h-4 text-blue-500" />} label="Ações Pontuais CRM" active />
            </Link>
            <Link href="/email-marketing">
              <NavItem icon={<Mail className="w-4 h-4" />} label="E-Mail Marketing" />
            </Link>
          </NavSection>
          <NavSection title="FEEDBACK" />
        </div>
      </div>

      {/* Footer Nav */}
      <div className="mt-auto pt-4">
        <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
           <ArrowLeftRight className="w-4 h-4" /> Voltar para o Squad
        </button>
      </div>
    </div>
  );
}

function NavSection({ title, badge, isOpen, children }: { title: string, badge?: string, isOpen?: boolean, children?: React.ReactNode }) {
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between py-2 text-xs font-bold text-gray-400 tracking-wider cursor-pointer hover:text-gray-600">
        <div className="flex items-center gap-2">
          {title}
          {badge && <span className="bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-[10px] font-bold">{badge}</span>}
        </div>
        {!isOpen && <ChevronLeft className="w-3 h-3 rotate-180" />}
      </div>
      {isOpen && <div className="mt-1 flex flex-col gap-1">{children}</div>}
    </div>
  );
}

function NavItem({ icon, label, badge, active }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
      <div className="flex items-center gap-3">
        <span className={`${active ? 'text-blue-600' : 'text-gray-400'}`}>{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      {badge && <span className="text-[10px] font-bold text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded">{badge}</span>}
    </div>
  );
}
