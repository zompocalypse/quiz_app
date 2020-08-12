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
      correctAnswer: 'They are named after colors'
    },
    {
      question: 'What is the most effective Poke Ball in the game?',
      answers: [
        'Great Ball',
        'Ultra Ball',
        'Master Ball',
        'Luxury Ball'
      ],
      correctAnswer: 'Master Ball'
    },
    {
      question: 'Which of these pairs is not a Pokemon game version?',
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
        'Hedgehog',
        'Squirrel',
        'Cat',
        'Mouse'
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