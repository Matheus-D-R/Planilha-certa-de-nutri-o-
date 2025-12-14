import React from 'react';
import { Activity, Apple, ChevronRight, HeartPulse } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl w-full animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/50 border border-blue-700/50 rounded-full mb-8 backdrop-blur-md">
          <HeartPulse size={16} className="text-red-500" />
          <span className="text-blue-200 text-sm font-medium tracking-wide">Saúde&Dieta</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Seu Plano Nutricional <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Perfeito e Personalizado
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubra a dieta ideal para o seu corpo usando nossa IA avançada. 
          Seja para emagrecer, ganhar massa ou manter a saúde, nós criamos 
          a ficha técnica completa para você.
        </p>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transform hover:-translate-y-1"
        >
          <span>Iniciar Diagnóstico Gratuito</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
              <Activity />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Análise Metabólica</h3>
            <p className="text-slate-400 text-sm">Avaliamos seu nível de atividade e biotipo para cálculos precisos.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400">
              <Apple />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Cardápio Real</h3>
            <p className="text-slate-400 text-sm">Sugestões de refeições práticas baseadas nas suas preferências.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
              <HeartPulse />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Foco na Saúde</h3>
            <p className="text-slate-400 text-sm">Estratégias para melhorar sono, hidratação e bem-estar geral.</p>
          </div>
        </div>
      </div>
    </div>
  );
};