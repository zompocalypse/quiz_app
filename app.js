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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateHTML() {
  let question = STORE.questions[STORE.questionNumber];
  if(STORE.quizStarted === false){
    return `
        <div class="container">
            <h3>Press the button below to get started</h3>
            <button class="gettingStarted">Go!</button>
        </div>
    `;
  } 
  if(STORE.quizCompleted === true){
    return `
        <div class="container">
            <h2>You finished!</h2>
            <h3>You got ${STORE.score} of 5</h3>
            <button class="restart">Restart?</button>
        </div>
    `;
  } else {
    return `
        <div class="container">
            <div class="quesitons">
                <div class="questionCount">
                    <h2>Question ${STORE.questionNumber +1} of 5</h2>
                    <div class="scorekeeper">
                        <p>correct: ${STORE.score}</p>
                        <p>incorrect: ${(STORE.questionNumber) - STORE.score}</p>
                    </div>
                </div>
                <h3>${question.question}</h3>
                <form class="answerSelection">
                    <label class="answerChoice">
                        <input type="radio" name="answers" id="answer1" value="${question.answers[0]}">
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
                    <button>Submit</button>
                </form>
            </div>
        </div>
    `;
  } 
}

function main(){
  renderPage();
  STORE.quizStarted === false;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderPage(){
  let html = generateHTML();
  $('main').html(html);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function submitAnswer(event){
  event.preventDefault();
  let answer = $('input[name=answers]:checked').val();
  STORE.questions[STORE.questionNumber].correctAnswer === answer ? STORE.score++ : console.log('wrong');
  STORE.questionNumber < 4 ? STORE.questionNumber++ : STORE.quizCompleted = true;
  renderPage();
}

function getStarted(event){
  event.preventDefault();
  STORE.quizStarted = true;
  renderPage();
}

function restartIt(event){
  event.preventDefault();
  STORE.quizStarted = false;
  STORE.quizCompleted = false;
  STORE.score = 0;
  STORE.questionNumber = 0;
  renderPage();
}

$('main').on('submit','.answerSelection',submitAnswer);
$('main').on('click','.gettingStarted',getStarted);
$('main').on('click','.restart',restartIt);

$(main);