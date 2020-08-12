'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who is Ash Ketchum?',
      answers: [
        'Pokemon Trainer',
        'Yu-Gi-Oh! Master',
        'A Wizard at Hogwarts',
        'A Jedi'
      ],
      correctAnswer: 'Pokemon Trainer'
    },
    {
      question: 'Where is a Yu-Gi-Oh! match played?',
      answers: [
        'Pokemon Arena',
        'Outside',
        'Duel Terminal',
        'On a table'
      ],
      correctAnswer: 'Duel Terminal'
    },
    {
      question: 'What does MTG stand for?',
      answers: [
        'Minimum to get',
        'Magic the Gathering',
        'DMaximum time gained',
        'Meet the group'
      ],
      correctAnswer: 'Magic the Gathering'
    },
    {
      question: 'What is Pikachu?',
      answers: [
        'Hedgehog',
        'Kangaroo',
        'Cat',
        'Mouse'
      ],
      correctAnswer: 'Mouse'
    },
    {
      question: 'What is Yusei searching for?',
      answers: [
        'Millennial puzzle pieces',
        'Dragon Balls',
        'Triforce of Light',
        'Demon Shards'
      ],
      correctAnswer: 'Millennial puzzle pieces'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};