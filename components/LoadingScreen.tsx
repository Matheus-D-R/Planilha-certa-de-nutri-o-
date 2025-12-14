import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
        <Loader2 className="w-16 h-16 text-blue-400 animate-spin relative z-10" />
      </div>
      <h2 className="mt-8 text-2xl font-bold text-white">Analisando seu Metabolismo</h2>
      <p className="mt-2 text-slate-400 max-w-md">
        Nossa IA está cruzando seus dados para formular a estratégia nutricional perfeita para você. Isso leva apenas alguns segundos...
      </p>
      
      <div className="mt-8 flex gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};
