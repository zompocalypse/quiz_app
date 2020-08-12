/* eslint-disable no-unused-vars */
'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the one common thing that links all towns in the Kanto Region?',
      answers: [
        'They are named after colors',
        'They are named after Pokémon',
        'They all have Pokémon Gyms',
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
      correctAnswer: 'Master Ball',
      image: 'img/pokeball.jpg',
      explanation: 'The Master Ball is the best ball in the game. It will capture any Pokémon with a 0% chance of failure, including Legendaries.'
    },
    {
      question: 'Which of these pairs is not a Pokémon game version?',
      answers: [
        'Diamond and Pearl',
        'Sword and Shield',
        'Rock and Stone',
        'FireRed and LeafGreen'
      ],
      correctAnswer: 'Rock and Stone',
      image:'img/pokef.jpg',
      explanation: 'Rock and Stone is not a version of Pokémon game franchise. Rock is a type of Pokémon only.'
    },
    {
      question: 'What is Pikachu exactly?',
      answers: [
        'Mouse',
        'Squirrel',
        'Cat',
        'Hedgehog'
      ],
      correctAnswer: 'Mouse',
      image:'img/pikama.jpg',
      explanation: 'Although the inspiration for Pikachu was a squirrel, they are mouse Pokémon or electric rodents.'
    },
    {
      question: 'How many times has Ash died?',
      answers: [
        '0',
        '3',
        '7',
        '12'
      ],
      correctAnswer: '3',
      image:'img/ashd.jpg',
      explanation: 'Much to the destruction of the mental states of children everywhere, Ash died three times.  Lucky for him, the tears of his beloved companion, Pikachu, can bring him back to life.'
    }
  ],
  questionNumber: 0,
  score: 0,
  incorrect: 0
};