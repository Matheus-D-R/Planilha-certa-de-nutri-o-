import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { UserAnswers } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: UserAnswers) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const question = QUESTIONS[currentIdx];
  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (!currentAnswer && question.type !== 'multiselect') return;

    const newAnswers = { ...answers, [question.id]: currentAnswer };
    setAnswers(newAnswers);
    setCurrentAnswer('');

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleOptionSelect = (option: string) => {
    // Auto-advance for single select to make it snappy
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);
    
    if (currentIdx < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentIdx(prev => prev + 1);
        setCurrentAnswer('');
      }, 250); // Small delay for visual feedback
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
      
      {/* Progress Bar */}
      <div className="w-full mb-12">
        <div className="flex justify-between text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">
          <span>Questão {currentIdx + 1} de {QUESTIONS.length}</span>
          <span>{Math.round(progress)}% Completo</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="w-full bg-slate-800/50 border border-slate-700 backdrop-blur-xl p-8 rounded-3xl shadow-2xl animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
          {question.text}
        </h2>

        {question.type === 'text' && (
          <div className="relative">
            <input
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
              placeholder={question.placeholder}
              className="w-full bg-slate-900/80 border border-slate-600 text-white px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
              autoFocus
            />
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="absolute right-3 top-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}

        {question.type === 'select' && (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-blue-500 bg-slate-900/50 hover:bg-blue-900/20 text-slate-200 hover:text-white transition-all duration-200 flex items-center justify-between group"
              >
                <span className="text-lg">{option}</span>
                <span className="w-6 h-6 rounded-full border-2 border-slate-600 group-hover:border-blue-500 flex items-center justify-center">
                   <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 text-slate-500 text-sm">
        Responda com honestidade para o melhor resultado.
      </div>
    </div>
  );
};
