// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const buttonRepeat = document.getElementById('quiz-repeat');
const buttonNext = document.getElementById('quiz-next');
const containerWelcome = document.getElementById('container-welcome');
const containerQuiz = document.getElementById('container-quiz')
const containerGuess  = document.getElementById('container-post-guess');
const responseGuess = document.getElementById('post-guess-content');
const verdictGuess = document.getElementById('post-guess-verdict');
const containerFinal = document.getElementById('container-final');
const answersCorrect = document.getElementById('answers-correct');
const remainingCount = document.getElementById('remaining-questions');
const answers = Array.from(document.getElementsByClassName('buttonAnswer'));
const questionsMax = 2;

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
function quizLoad() { $.getJSON('/assets/js/questions.json', function (data) { questions = data.questions; console.log("questions: " + questions); })
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

function questionsLoad() {
    //checks if there are no questions left or the question count is the max amount for this instance of the game
    if (questionsRemaining.length === 0 || questionsCounter === questionsMax) {
        //displays finishing content
        containerQuiz.classList.add('contentHidden');
        containerFinal.classList.remove('contentHidden');
        let answerPercentage = Math.trunc((questionsCorrect / questionsMax)*100);
        answersCorrect.innerHTML = `${questionsCorrect} / ${questionsMax} - ${answerPercentage}%`
    }
    //increase question count
    questionsCounter++;
    //sets the question to be removed to a random number from the array of remaining questions
    questionToBeRemoved = Math.floor(Math.random() * questionsRemaining.length);
    //sets the current question to the variable questionToBeRemoved from the away of remaining questions
    questionCurrent = questionsRemaining[questionToBeRemoved];
    //sets the questions HTML for the current question
    question.innerHTML = `<img src="assets/images/questions/${questionCurrent.image}" class="question-img" alt="${questionCurrent.alt} Image"> <br> <h2>${questionCurrent.question}</h2>`
    // question.innerHTML += questionCurrent.question;
    //sets the remainingCount innerHTML to display to the user how many questions they have left
    remainingCount.innerHTML = `<p>Questions remaining: ${questionsMax - questionsCounter}</p>`;
    //credit for adapted forEach loop (See README.md for details) - Used to iterate through the answers dataSet and set the innerText of each answer button to the correct text
    answers.forEach(answer => { let i = (answer.dataset[`number`] - 1); answer.innerText = questionCurrent.answers[i].answer; });
    //removes current question from the array of remaining questions
    questionsRemaining.splice(questionToBeRemoved, 1);
}

//Credit for forEach loop functionality - See README.md for more details
answers.forEach(answer => {
    //checks to see if the user clicks any of the answer buttons
    answer.addEventListener('click', userGuess => {
        //sets their guess to variable and shows the post guess content
        const selectedAnswer = userGuess.target.dataset[`number`];
        containerGuess.classList.remove('contentHidden'); 
        containerQuiz.classList.add('contentHidden');
        //changes the innerHTML of the post guess message based on whether it was correct
        if (selectedAnswer === questionCurrent.correct) {
            //changes the innerHTML of the verdict to a random response within an array
            verdictGuess.innerHTML = `<h2>${correctResponses[Math.floor(Math.random() * correctResponses.length)].message} <i class="fas fa-smile-beam"></i></h2>`;
            responseGuess.innerHTML = questionCurrent.messageCorrect;
            questionsCorrect++;
        } else {
            //changes the innerHTML of the verdict to a random response within an array
            verdictGuess.innerHTML = `<h2>${incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)].message} <i class="fas fa-frown"></i></h2>`;
            responseGuess.innerHTML = questionCurrent.messageWrong;
        }
    });
});

//Checks to see if the next button has been clicked
//Removes the guess content, shows the quiz again and loads the next question
buttonNext.addEventListener('click', () => {
    containerGuess.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    questionsLoad();
})

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
]

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
]