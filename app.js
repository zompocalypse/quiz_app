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

/********** TEMPLATE GENERATION  **********/

// These functions return HTML templates
function generateStartPage() {
  return `
    <div class="container">
         <image src = 'img/ash-and-pikachu.jpg' alt='Ash and Pikachu looking happy together'>
         <h2 class="center">Are you ready to find out if you are a Pokémon Master?</h2>
         <h3 class="center">Press the button below to get started</h3>
         <div class="center">
             <button class="gettingStarted button">Start</button>
         </div>
     </div>
 `;
}

function generateFinalPage() {
  if(STORE.score < 5) {
    return `
        <div class="container">
            <img src="img/overwhelm.png" alt="screenshot from Pokémon video game where the player was defeated">
            <h2 class="center">You got ${STORE.score} of 5</h2>
            <h3 class="center">Aww...  I thought you were a Pokémon Master.</h3>
            <p class="center">Click restart so you can try to catch them all and be the very best!</p>
            <div class="center">
                <button class="restart button">Restart?</button>
            </div>
        </div>
        `;
  } else {
    return `
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
        `;
  }
}

function generateQuestionPage() {
  let question = STORE.questions[STORE.questionNumber];
  return `
    <div class="container">
        <div class="questions">
            <div class="questionCount">
                <h2>Question ${STORE.questionNumber +1} of ${STORE.questions.length}</h2>
                <div class="scorekeeper">
                    <p>correct: ${STORE.score}</p>
                    <p>incorrect: ${(STORE.questionNumber) - STORE.score}</p>
                </div>
            </div>
            <img class='hero' src='${question.image}' alt='${question.imageAlt}'>
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
    `;
}

function ganerateSolutionCorrect() {
  let question = STORE.questions[STORE.questionNumber];
  return `
        <div class="container">
            <div class="questions">
                <div class="questionCount">
                    <h2>Question ${STORE.questionNumber +1} of ${STORE.questions.length}</h2>
                    <div class="scorekeeper">
                        <p>correct: ${STORE.score}</p>
                        <p>incorrect: ${STORE.incorrect}</p>
                    </div>
                </div>
                <img class='hero' src='${question.image}' alt='${question.imageAlt}'>
                <h3>${question.question}</h3>
                <form class="nextSelection">
                    <div>
                        <h3 class="center bold green">You are correct!</h3>
                        <p>${question.explanation}</p>
                    </div>
                    <div class="center">
                        <button class="button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function generateSolutionIncorrect() {
  let question = STORE.questions[STORE.questionNumber];
  return `
          <div class="container">
              <div class="questions">
                  <div class="questionCount">
                      <h2>Question ${STORE.questionNumber +1} of ${STORE.questions.length}</h2>
                      <div class="scorekeeper">
                          <p>correct: ${STORE.score}</p>
                          <p>incorrect: ${STORE.incorrect}</p>
                      </div>
                  </div>
                  <img class='hero' src='${question.image}' alt='${question.imageAlt}'>
                  <h3>${question.question}</h3>
                  <form class="nextSelection">
                    <div>
                        <h3 class="center bold red">Sorry, you are incorrect!</h3>
                        <p>${question.explanation}</p>
                    </div>
                    <div class="center">
                        <button class="button">Next</button>
                    </div>
                </form>
              </div>
          </div>
      `;
}

/********** RENDER FUNCTIONS  **********/
// These functions render content generated in the html templates
function renderStartPage() {
  $('main').html(generateStartPage);
}

function renderFinalPage() {
  $('main').html(generateFinalPage);
}

function renderQuestionPage() {
  $('main').html(generateQuestionPage);
}

function renderSolutionCorrect() {
  $('main').html(ganerateSolutionCorrect);
}

function renderSolutionIncorrect() {
  $('main').html(generateSolutionIncorrect);
}

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)
function handleSubmitAnswer() {
  $('main').on('submit','.answerSelection', function(event) {
    event.preventDefault();
    let answer = $('input[name=answers]:checked').val();
    if(STORE.questions[STORE.questionNumber].correctAnswer === answer){
      STORE.score++;
      renderSolutionCorrect();
    } else {
      STORE.incorrect++;
      renderSolutionIncorrect();
    }
  });
}

function handleNextQuestion() {
  $('main').on('submit', '.nextSelection', function(event) {
    event.preventDefault();
    if (STORE.questionNumber < STORE.questions.length - 1) {
      STORE.questionNumber++;
      renderQuestionPage();
    } else {
      renderFinalPage();
    }
  });
}

function handleGetStarted() {
  $('main').on('click','.gettingStarted', function(event) {
    event.preventDefault();
    renderQuestionPage();
  });
}

function handleRestartQuiz() {
  $('main').on('click','.restart', function(event){
    event.preventDefault();
    STORE.score = 0;
    STORE.incorrect = 0;
    STORE.questionNumber = 0;
    renderStartPage();
  });
}

$(function() {
  renderStartPage();
  handleNextQuestion();
  handleRestartQuiz();
  handleGetStarted();
  handleSubmitAnswer();
});