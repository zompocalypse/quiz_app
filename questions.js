'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the one common thing that links all towns in the Kanto Region?',
      answers: [
        'They are named after colors',
        'They are named after Pokemon',
        'They all have Pokemon Gyms',
        'They are all named after Olympian Gods'
      ],
      correctAnswer: 'They are named after colors',
      image: 'img/wholepika.jpg',
      explanation: 'All towns in the Kanto region are named after colors.  The towns are named Viridian City, Pewter City, Cerulean City, Vermilion City, Lavender Town, Celadon City, Fuchsia City.  Although not a color, Pallet Town, Ash\'s fits the pattern.'
    },
    {
      question: 'What is the most effective Poké Ball in the game?',
      answers: [
        'Great Ball',
        'Ultra Ball',
        'Master Ball',
        'Luxury Ball'
      ],
      correctAnswer: 'Master Ball'
    },
    {
      question: 'Which of these pairs is not a Pokémon game version?',
      answers: [
        'Diamond and Pearl',
        'Sword and Shield',
        'Rock and Stone',
        'FireRed and LeafGreen'
      ],
      correctAnswer: 'Rock and Stone'
    },
    {
      question: 'What is Pikachu exactly?',
      answers: [
        'Mouse',
        'Squirrel',
        'Cat',
        'Hedgehog'
      ],
      correctAnswer: 'Mouse'
    },
    {
      question: 'How many times has Ash died?',
      answers: [
        '0',
        '3',
        '7',
        '12'
      ],
      correctAnswer: '3'
    }
  ],
  quizStarted: false,
  quizCompleted: false,
  questionNumber: 0,
  score: 0
};