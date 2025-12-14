import { GoogleGenAI, Type } from "@google/genai";
import { UserAnswers, NutritionPlan } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateNutritionPlan = async (answers: UserAnswers): Promise<NutritionPlan> => {
  const prompt = `
    Atue como um Nutricionista Profissional de classe mundial.
    Analise os dados do paciente abaixo e crie um plano alimentar completo e profissional em Português (Brasil).
    
    Dados do Paciente:
    ${JSON.stringify(answers, null, 2)}
    
    Crie uma ficha técnica detalhada. Seja motivador mas científico.
    O cardápio deve ser realista, com alimentos acessíveis, mas focado no objetivo do usuário.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      patientProfile: {
        type: Type.OBJECT,
        properties: {
          analysis: { type: Type.STRING, description: "Uma análise profissional breve do perfil atual e desafios." },
          bmi: { type: Type.STRING, description: "IMC calculado estimado" },
          classification: { type: Type.STRING, description: "Classificação do IMC" },
          goalAssessment: { type: Type.STRING, description: "Comentário sobre a viabilidade do objetivo." },
        },
        required: ["analysis", "bmi", "classification", "goalAssessment"]
      },
      nutritionalStrategy: {
        type: Type.OBJECT,
        properties: {
          dailyCalories: { type: Type.STRING, description: "Meta calórica diária ex: '2000 kcal'" },
          macroDistribution: { type: Type.STRING, description: "Ex: 40% Carboidratos, 30% Proteínas..." },
          hydrationGoal: { type: Type.STRING, description: "Meta de água diária" },
        },
        required: ["dailyCalories", "macroDistribution", "hydrationGoal"]
      },
      menu: {
        type: Type.ARRAY,
        description: "Lista de refeições do dia",
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Nome da refeição (Café da Manhã, Almoço...)" },
            time: { type: Type.STRING, description: "Horário sugerido" },
            items: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Lista de alimentos específicos para esta refeição"
            },
            calories: { type: Type.STRING, description: "Calorias estimadas da refeição" }
          },
          required: ["name", "items", "calories"]
        }
      },
      recommendations: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "5 a 7 dicas de ouro para o sucesso do plano."
      }
    },
    required: ["patientProfile", "nutritionalStrategy", "menu", "recommendations"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as NutritionPlan;
    }
    throw new Error("No response text from Gemini");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Falha ao gerar o plano nutricional. Tente novamente.");
  }
};
