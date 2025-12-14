import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Quiz } from './components/Quiz';
import { ResultCard } from './components/ResultCard';
import { LoadingScreen } from './components/LoadingScreen';
import { UserAnswers, NutritionPlan } from './types';
import { generateNutritionPlan } from './services/geminiService';

type AppStep = 'landing' | 'quiz' | 'loading' | 'result';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('landing');
  const [nutritionPlan, setNutritionPlan] = useState<NutritionPlan | null>(null);

  const handleStart = () => {
    setStep('quiz');
  };

  const handleQuizComplete = async (answers: UserAnswers) => {
    setStep('loading');
    try {
      const plan = await generateNutritionPlan(answers);
      setNutritionPlan(plan);
      setStep('result');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao gerar o plano. Por favor, tente novamente.');
      setStep('landing');
    }
  };

  const handleReset = () => {
    setNutritionPlan(null);
    setStep('landing');
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
      {step === 'landing' && <LandingPage onStart={handleStart} />}
      {step === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {step === 'loading' && <LoadingScreen />}
      {step === 'result' && nutritionPlan && (
        <ResultCard plan={nutritionPlan} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
