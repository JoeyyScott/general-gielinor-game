// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const containerWelcome = document.getElementById('container-welcome');
const containerQuiz = document.getElementById('container-quiz')

//Variables that'll change throughout
let currentQuestion = {};
let questionsCounter;
let questionsRemaining = [];

//Initiating the quiz on start button being clicked
buttonStart.addEventListener('click', quizStart);

//The quizStart function will show the questions 

function quizStart() {
    //Hides welcome and displays quiz containers
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
    //increase question count
    questionsCounter++;
    //sets current question to a random number (index) from the array of remaining questions
    currentQuestion = questionsRemaining[(Math.floor(Math.random() * questionsRemaining.length))];
    //sets the questions HTML for the current question
    question.innerHTML = currentQuestion.question;
}

const questions = [{
        //1
        question: `<span class="question-mark">?</span> <br> <h2>What language was the original RuneScape coded in?</h2>`,
        answer1: 'HTML',
        answer2: 'Python',
        answer3: 'Java',
        answer4: 'mIRC',
        correct: '3', //Java
        message: `<p>Correct! It was Java.</p>
        <p>The Gower brothers originally created RuneScape classic all the way back in 2001!</p>
        <p>The game is alive today and is celebrating 20 years of being around, how incredible is that?</p>
        <p>You can't play classic anymore but you can play OldSchool RuneScape which is an updated version of the game from a save around the 2007 era.</p>`,
    },
    {
        //2
        question: `<img src="assets/images/answers/raw-tuna.png" class="question-img" alt="Raw Tuna Image"> <h2>What fishing level do you need to catch raw tuna with a harpoon?</h2>`,
        answer1: '15',
        answer2: '25',
        answer3: '40',
        answer4: '35',
        correct: '4', //35
        message: `
        <p>It is level 35 to catch tuna!</p> <img src="assets/images/answers/raw-tunas.png" alt="Raw Tuna Image">
        <p>You require a harpoon to fish tuna at this fishing level.</p>
        <p>You can fish them at 55 fishing without a harpoon if you have unlocked the barbarian ways of Barehanded fishing!</p>
        <p>Regardless of which way you choose to obtain it you will receive 80 fishing experience for doing so.</p>`,
    }
];