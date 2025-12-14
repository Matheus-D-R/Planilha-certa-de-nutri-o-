import React from 'react';
import { NutritionPlan } from '../types';
import { CheckCircle2, Clock, Flame, Info, RotateCcw, Utensils } from 'lucide-react';

interface ResultCardProps {
  plan: NutritionPlan;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ plan, onReset }) => {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8 max-w-5xl mx-auto animate-fade-in">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8 no-print">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw size={18} />
          <span>Novo Diagnóstico</span>
        </button>
      </div>

      {/* Main Fiche */}
      <div className="bg-white text-slate-900 rounded-xl overflow-hidden shadow-2xl print:shadow-none print:w-full">
        
        {/* Fiche Header */}
        <div className="bg-slate-100 p-8 border-b border-slate-200 flex flex-col md:flex-row justify-between md:items-start gap-6">
          <div>
            <div className="uppercase tracking-widest text-xs font-bold text-slate-500 mb-1">Relatório Nutricional</div>
            <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Plano Personalizado</h1>
            <p className="text-slate-600 max-w-xl">{plan.patientProfile.analysis}</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center min-w-[100px]">
              <div className="text-xs text-slate-500 uppercase font-bold">IMC Estimado</div>
              <div className="text-2xl font-bold text-blue-900">{plan.patientProfile.bmi}</div>
              <div className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full inline-block mt-1">
                {plan.patientProfile.classification}
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50 border-b border-slate-200">
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-orange-600 mb-2">
              <Flame size={20} />
              <span className="font-bold uppercase text-xs tracking-wider">Meta Calórica</span>
            </div>
            <div className="text-3xl font-bold text-slate-800">{plan.nutritionalStrategy.dailyCalories}</div>
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
              <Utensils size={20} />
              <span className="font-bold uppercase text-xs tracking-wider">Distribuição Macro</span>
            </div>
            <div className="text-sm font-medium text-slate-700">{plan.nutritionalStrategy.macroDistribution}</div>
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
              <CheckCircle2 size={20} />
              <span className="font-bold uppercase text-xs tracking-wider">Objetivo</span>
            </div>
            <div className="text-sm font-medium text-slate-700">{plan.patientProfile.goalAssessment}</div>
          </div>
        </div>

        <div className="p-8">
          {/* Menu */}
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-900 text-white rounded-lg flex items-center justify-center text-sm">01</span>
            Cardápio Sugerido
          </h2>
          
          <div className="grid gap-6 mb-12">
            {plan.menu.map((meal, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors bg-white shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{meal.name}</h3>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                      <Clock size={14} />
                      <span>{meal.time}</span>
                    </div>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                    {meal.calories}
                  </span>
                </div>
                <ul className="space-y-2">
                  {meal.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-slate-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Info size={20} />
              Recomendações Essenciais
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {plan.recommendations.map((rec, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="bg-white text-blue-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-blue-200 text-center">
              <p className="text-blue-800 font-medium">Meta de Hidratação: <span className="font-bold">{plan.nutritionalStrategy.hydrationGoal}</span></p>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-400 text-xs">
            <p>Este plano é gerado por inteligência artificial e serve como orientação inicial.</p>
            <p>Sempre consulte um médico ou nutricionista antes de iniciar mudanças drásticas na dieta.</p>
          </div>

        </div>
      </div>
    </div>
  );
};