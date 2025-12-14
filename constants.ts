import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'name',
    text: 'Qual é o seu nome?',
    type: 'text',
    placeholder: 'Ex: Ana Silva',
  },
  {
    id: 'age_gender',
    text: 'Qual sua idade e gênero biológico?',
    type: 'select',
    options: [
      'Masculino - 18 a 29 anos',
      'Masculino - 30 a 49 anos',
      'Masculino - 50+ anos',
      'Feminino - 18 a 29 anos',
      'Feminino - 30 a 49 anos',
      'Feminino - 50+ anos',
    ],
  },
  {
    id: 'measurements',
    text: 'Informe seu Peso (kg) e Altura (cm):',
    type: 'text',
    placeholder: 'Ex: 70kg, 175cm',
  },
  {
    id: 'goal',
    text: 'Qual é o seu objetivo principal?',
    type: 'select',
    options: [
      'Emagrecer (Perder gordura)',
      'Hipertrofia (Ganhar massa muscular)',
      'Manutenção (Manter o peso atual)',
      'Reeducação Alimentar (Melhorar saúde)',
    ],
  },
  {
    id: 'activity_level',
    text: 'Como você descreveria seu nível de atividade física?',
    type: 'select',
    options: [
      'Sedentário (Pouco ou nenhum exercício)',
      'Levemente ativo (1-3 dias por semana)',
      'Moderadamente ativo (3-5 dias por semana)',
      'Muito ativo (6-7 dias por semana)',
      'Atleta profissional',
    ],
  },
  {
    id: 'meals_per_day',
    text: 'Quantas refeições você prefere fazer por dia?',
    type: 'select',
    options: ['3 Refeições', '4 Refeições', '5 Refeições', '6 ou mais Refeições'],
  },
  {
    id: 'dietary_restrictions',
    text: 'Você possui alguma restrição alimentar?',
    type: 'select',
    options: [
      'Nenhuma',
      'Intolerância a Lactose',
      'Intolerância a Glúten',
      'Vegetariano',
      'Vegano',
      'Diabetes',
      'Hipertensão',
    ],
  },
  {
    id: 'water_intake',
    text: 'Quanta água você costuma beber por dia?',
    type: 'select',
    options: [
      'Menos de 1 litro',
      'Entre 1 e 2 litros',
      'Entre 2 e 3 litros',
      'Mais de 3 litros',
    ],
  },
  {
    id: 'sleep_quality',
    text: 'Como é a qualidade do seu sono?',
    type: 'select',
    options: [
      'Ruim (Menos de 6h, agitado)',
      'Regular (6-7h)',
      'Boa (7-8h, reparador)',
      'Excelente (8h+, acordo renovado)',
    ],
  },
  {
    id: 'dislikes',
    text: 'Existe algum alimento que você NÃO come de jeito nenhum?',
    type: 'text',
    placeholder: 'Ex: Fígado, Jiló, Coentro...',
  },
];
