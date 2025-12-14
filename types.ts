export interface Question {
  id: string;
  text: string;
  type: 'text' | 'number' | 'select' | 'multiselect';
  options?: string[];
  placeholder?: string;
  suffix?: string;
}

export interface UserAnswers {
  [key: string]: string | string[];
}

export interface Meal {
  name: string;
  time: string;
  items: string[];
  calories: string;
}

export interface NutritionPlan {
  patientProfile: {
    analysis: string;
    bmi: string;
    classification: string;
    goalAssessment: string;
  };
  nutritionalStrategy: {
    dailyCalories: string;
    macroDistribution: string; // e.g., "40% Carbs, 30% Protein..."
    hydrationGoal: string;
  };
  menu: Meal[];
  recommendations: string[];
}
