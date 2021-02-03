// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const buttonRepeat = document.getElementById('quiz-repeat');
const buttonNext = document.getElementById('quiz-next');
const containerWelcome = document.getElementById('container-welcome');
const containerQuiz = document.getElementById('container-quiz');
const containerGuess  = document.getElementById('container-post-guess');
const responseGuess = document.getElementById('post-guess-content');
const verdictGuess = document.getElementById('post-guess-verdict');
const containerFinal = document.getElementById('container-final');
const answersCorrect = document.getElementById('answers-correct');
const remainingCount = document.getElementById('remaining-questions');
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('buttonAnswer'));
const iconMusic = document.getElementById('icon-music');
const questionsMax = 30;

// Audio constants
const guessCorrect = new Audio('assets/sounds/correct.mp3');
const guessIncorrect = new Audio('assets/sounds/incorrect.mp3');
const quizCompleted = new Audio('assets/sounds/complete.mp3');
const music = new Audio('assets/sounds/bgmusic.mp3');

//Function to toggle background music
function toggleMusic() {
    if (music.paused === true) { iconMusic.classList.remove('fa-music'); iconMusic.classList.add('fa-volume-mute'); music.play(); }
    else if (music.paused === false) { iconMusic.classList.add('fa-music'); iconMusic.classList.remove('fa-volume-mute'); music.pause(); }
}

//Variables that'll change throughout
let questions = [];
let questionCurrent = {};
let questionsCounter;
let questionsRemaining = [];
let questionsCorrect = [];

//Initiating the quiz on start or repeat button being clicked
buttonStart.addEventListener('click', quizLoad);
buttonRepeat.addEventListener('click', quizLoad);

//The quizLoad function will load the questions from the json file and store them in an array "questions"
function quizLoad() { $.getJSON('https://joeyyscott.github.io/general-gielinor-game/assets/js/questions.json', function (data) { questions = data.questions; console.log("questions: " + questions); })
    //Credit for .then function to wait for json file to be loaded before executing quiz
    .then(function() { quizStart(); });
}

//The quizStart function will show the questions 
function quizStart() {
    //Hides welcome/final and displays quiz containers
    containerFinal.classList.add('contentHidden');
    containerWelcome.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    //Sets the questions remaining to a spread array from questions
    questionsRemaining = [...questions];
    //Sets the counter to 0 as it is the quiz start
    questionsCounter = 0;
    //Loads the questions into index.html
    questionsLoad();
}

//This function loads questions and answers into the quiz interface
function questionsLoad() {
    //checks if there are no questions left or the question count is the max amount for this instance of the game
    if (questionsRemaining.length === 0 || questionsCounter === questionsMax) {
        quizCompleted.play();
        quizCompleted.volume = 0.2;
        //displays finishing content
        containerQuiz.classList.add('contentHidden');
        containerFinal.classList.remove('contentHidden');
        let answerPercentage = Math.trunc((questionsCorrect / questionsMax)*100);
        answersCorrect.innerHTML = `<h3>Your score: ${questionsCorrect} / ${questionsMax} - ${answerPercentage}%</h3>`;
        questionsCorrect = 0;
    }
    questionsCounter++;
    //sets the question to be removed to a random number from the array of remaining questions
    let questionToBeRemoved = Math.floor(Math.random() * questionsRemaining.length);
    //sets the current question to the variable questionToBeRemoved from the array of remaining questions
    questionCurrent = questionsRemaining[questionToBeRemoved];
    //sets the questions HTML for the current question
    question.innerHTML = `<img src="assets/images/quiz/${questionCurrent.imageQ}" class="question-img" alt="${questionCurrent.altQ} Image"> <br> <h2>${questionCurrent.question}</h2>`;
    //sets the remainingCount innerHTML to display to the user how many questions they have left
    remainingCount.innerHTML = `<p>Questions remaining: ${questionsMax - questionsCounter}</p>`;
    //credit for adapted forEach loop (See README.md for details) - Used to iterate through the answers dataSet and set the innerText of each answer button to the correct text
    answers.forEach(answer => { let i = (answer.dataset[`number`] - 1); answer.innerText = questionCurrent.answers[i].answer; });
    //removes current question from the array of remaining questions
    questionsRemaining.splice(questionToBeRemoved, 1);
}

//Credit for forEach loop functionality - See README.md for more details
//This loop will check whenever an answer button is pressed whether it lines up to the correct answer for the current question
answers.forEach(answer => {
    //checks to see if the user clicks any of the answer buttons
    answer.addEventListener('click', userGuess => {
        //sets their guess to variable and shows the post guess content
        const selectedAnswer = userGuess.target.dataset[`number`];
        containerGuess.classList.remove('contentHidden'); 
        containerQuiz.classList.add('contentHidden');
        //changes the innerHTML of the post guess message based on whether it was correct
        if (selectedAnswer === questionCurrent.correct) {
            guessCorrect.play();
            guessCorrect.volume = 0.2;
            //changes the innerHTML of the verdict to a random response within an array
            verdictGuess.innerHTML = `<h2>${correctResponses[Math.floor(Math.random() * correctResponses.length)].message} <i class="fas fa-smile-beam"></i></h2>`;
            responseGuess.innerHTML = `
                <img src="assets/images/quiz/${questionCurrent.imageA}" class="question-img" alt="${questionCurrent.altA} Image"> <br>
                <p>${questionCurrent.msgCorrect} You can check out the Wiki for ${questionCurrent.linkText} <a href="${questionCurrent.linkURL}" target=_"blank">here</a>!</p>`;
            questionsCorrect++;
        } else {
            guessIncorrect.play();
            guessIncorrect.volume = 0.2;
            //changes the innerHTML of the verdict to a random response within an array
            verdictGuess.innerHTML = `<h2>${incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)].message} <i class="fas fa-frown"></i></h2>`;
            responseGuess.innerHTML = `<p>That is not correct! <br> Hint: ${questionCurrent.msgWrong} <i class="fas fa-smile-beam"></i></p>`;
        }
    });
});

//Checks to see if the next button has been clicked
//Removes the guess content, shows the quiz again and loads the next question
buttonNext.addEventListener('click', () => {
    containerGuess.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    questionsLoad();
});

//array with correct answer messages
const correctResponses = [
    {message:`GG!`},
    {message:`Wahey!`},
    {message:`w00t!`},
    {message:`Grats!`},
    {message:`Congrats!`},
    {message:`Congratulations!`},
    {message:`Well done!`},
    {message:`Great job!`},
    {message:`Valiant effort!`},
    {message:`Kudos!`},
    {message:`Squeck yeah!`},
    {message:`Woohoo!`},
    {message:`Yay!`},
    {message:`Awesome!`},
    {message:`Sweet!`},
    {message:`Holy Saradomin!`},
    {message:`Unholy Zamorak!`},
    {message:`Praise Guthix!`},
    {message:`That rocks!`},
    {message:`!!!!!!11`},
    {message:`You're right!`}
];

//array with incorrect answer messages
const incorrectResponses = [
    {message:`Uh-Oh!`},
    {message:`Oh no!`},
    {message:`Savage!`},
    {message:`RIP!`},
    {message:`Sad times!`},
    {message:`You're wrong!`},
    {message:`Close one!`},
    {message:`Aww!`},
    {message:`Not a great effort!`}
];