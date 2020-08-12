/* eslint-disable no-undef */
'use strict';
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION AND RENDER FUNCTIONS **********/

// These functions return HTML templates and render them
function renderStartPage(){
  $('main').html(`
    <div class="container">
         <image src = 'img/pokestart.jpg'>
         <h2 class="center">Press the button below to get started</h2>
         <div class="center">
             <button class="gettingStarted button">Start</button>
         </div>
     </div>
 `);
}

function renderFinalPage(){
  if(STORE.score < 5){
    $('main').html(`
        <div class="container">
            <img src="img/overwhelmed.png" alt="screenshot from Pokémon video game where the player was defeated">
            <h2 class="center">You got ${STORE.score} of 5</h2>
            <h3 class="center">Aww...  I thought you were a Pokémon Master.</h3>
            <p class="center">Click restart so you can try to catch them all and be the very best!</p>
            <div class="center">
                <button class="restart button">Restart?</button>
            </div>
        </div>
        `);
  } else {
    $('main').html(`
        <div class="container">
            <img src="img/leagueWin.jpg" alt="Ash holding the Pokémon Legaue trophy with his team">
            <h2 class="center">You got ${STORE.score} of 5</h2>
            <h3 class="center">You wanted to be the very best... and you are.</h3>
            <h2 class="center">Congratulations!</h2>
            <p class="center">Click Restart take the quiz again.</p>
            <div class="center">
                <button class="restart button">Restart?</button>
            </div>
        </div>
        `);
  }
}

function renderQuestionPage(){
  let question = STORE.questions[STORE.questionNumber];
  $('main').html(`
    <div class="container">
        <div class="questions">
            <div class="questionCount">
                <h2>Question ${STORE.questionNumber +1} of ${STORE.questions.length}</h2>
                <div class="scorekeeper">
                    <p>correct: ${STORE.score}</p>
                    <p>incorrect: ${(STORE.questionNumber) - STORE.score}</p>
                </div>
            </div>
            <img class='hero' src='${question.image}' alt=''>
            <h3>${question.question}</h3>
            <form class="answerSelection">
                <label class="answerChoice">
                    <input type="radio" name="answers" id="answer1" value="${question.answers[0]}" required>
                    <span class="checkmark">${question.answers[0]}</span>
                </label>
                <label class="answerChoice">
                    <input type="radio" name="answers" id="answer2" value="${question.answers[1]}">
                    <span class="checkmark">${question.answers[1]}</span>
                </label>
                <label class="answerChoice">
                    <input type="radio" name="answers" id="answer3" value="${question.answers[2]}">
                    <span class="checkmark">${question.answers[2]}</span>
                </label>
                <label class="answerChoice">
                    <input type="radio" name="answers" id="answer4" value="${question.answers[3]}">
                    <span class="checkmark">${question.answers[3]}</span>
                </label>
                <div>
                    <p class="results"></p>
                </div>
                <div class="center">
                    <button class="button">Submit</button>
                </div>
            </form>
        </div>
    </div>
    `);
}

function renderSolutionCorrect(){
  let question = STORE.questions[STORE.questionNumber];
  $('main').html(`
        <div class="container">
            <div class="questions">
                <div class="questionCount">
                    <h2>Question ${STORE.questionNumber +1} of ${STORE.questions.length}</h2>
                    <div class="scorekeeper">
                        <p>correct: ${STORE.score}</p>
                        <p>incorrect: ${STORE.incorrect}</p>
                    </div>
                </div>
                <img class='hero' src='${question.image}' alt=''>
                <h3>${question.question}</h3>
                <form class="nextSelection">
                    <div>
                        <h3>You are correct!</h3>
                        <p>${question.explanation}</p>
                    </div>
                    <div class="center">
                        <button class="button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    `);
}

function renderSolutionIncorrect(){
  let question = STORE.questions[STORE.questionNumber];
  $('main').html(`
          <div class="container">
              <div class="questions">
                  <div class="questionCount">
                      <h2>Question ${STORE.questionNumber +1} of ${STORE.questions.length}</h2>
                      <div class="scorekeeper">
                          <p>correct: ${STORE.score}</p>
                          <p>incorrect: ${STORE.incorrect}</p>
                      </div>
                  </div>
                  <img class='hero' src='${question.image}' alt=''>
                  <h3>${question.question}</h3>
                  <form class="nextSelection">
                    <div>
                        <h3>Sorry, you are incorrect!</h3>
                        <p>${question.explanation}</p>
                    </div>
                    <div class="center">
                        <button class="button">Next</button>
                    </div>
                </form>
              </div>
          </div>
      `);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function submitAnswer(event){
  event.preventDefault();
  let answer = $('input[name=answers]:checked').val();
  if(STORE.questions[STORE.questionNumber].correctAnswer === answer){
    STORE.score++;
    renderSolutionCorrect();
  } else {
    STORE.incorrect++;
    renderSolutionIncorrect();
  }
}

function nextQuestion(event){
  event.preventDefault();
  if(STORE.questionNumber < STORE.questions.length - 1){
    STORE.questionNumber++;
    renderQuestionPage();
  } else {
    renderFinalPage();
  }
}

function getStarted(event){
  event.preventDefault();
  renderQuestionPage();
}

function restartIt(event){
  event.preventDefault();
  STORE.score = 0;
  STORE.questionNumber = 0;
  renderStartPage();
}

function main(){
  renderStartPage();
}

$('main').on('submit','.answerSelection',submitAnswer);
$('main').on('submit','.nextSelection',nextQuestion);
$('main').on('click','.gettingStarted',getStarted);
$('main').on('click','.restart',restartIt);

$(main);