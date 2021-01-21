// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const containerWelcome = document.getElementById('container-welcome');
const containerQuiz = document.getElementById('container-quiz')
const containerGuess  = document.getElementById('container-post-guess');
const responseGuess = document.getElementById('post-guess')
const answers = Array.from(document.getElementsByClassName('buttonAnswer'));

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
    //credit for for each function - Used to iterate through the answers dataSet and set the innerText of each answer button to the correct text
    answers.forEach(answer => { let i = answer.dataset[`number`]; answer.innerText = currentQuestion[`answer${i}`];});
}

answers.forEach(answer => {
    answer.addEventListener('click', userGuess => {
        const selectedAnswer = userGuess.target.dataset[`number`];
        containerGuess.classList.remove('contentHidden'); 
        containerQuiz.classList.add('contentHidden');
        if (selectedAnswer === currentQuestion.correct) {
           responseGuess.innerHTML = currentQuestion.messageCorrect;
        } else {
            responseGuess.innerHTML = currentQuestion.messageWrong;
        }


        // const selectedAnswer = selectedButton.dataset[`number`];
        // console.log(selectedAnswer);
        // console.log(selectedButton);
        // const answerSelected = guess.target;
        // const answer
    });
});

const questions = [{
        //1
        question: `<span class="question-mark">?</span> <br> <h2>What language was the original RuneScape coded in?</h2>`,
        answer1: 'HTML',
        answer2: 'Python',
        answer3: 'Java',
        answer4: 'mIRC',
        correct: '3', //Java
        messageCorrect: `
        <h2>GG!</h2>
        <img src="assets/images/answers/java.png" class="question-img" alt="Java Logo Image">
        <p>It was Java. The Gower brothers originally created RuneScape classic all the way back in 2001! The game is alive today and is celebrating 20 years of being around, how incredible is that?</p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><p>That is not correct! This information exists on the internet, it might be closer than you think <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //2
        question: `<img src="assets/images/answers/raw-tuna.png" class="question-img" alt="Raw Tuna Image"> <h2>What fishing level do you need to catch raw tuna with a harpoon?</h2>`,
        answer1: '15',
        answer2: '25',
        answer3: '40',
        answer4: '35',
        correct: '4', //35
        messageCorrect: `<h2>GG!</h2>
        <img src="assets/images/answers/raw-tuna.png" class="question-img" alt="Raw Tuna Image">
        <p>It is level 35 to catch raw tuna. You can fish them at 55 fishing without a harpoon if you have unlocked the barbarian ways of Barehanded fishing! Either way you'll get 80 Fishing experience!</p>
        <a href="https://runescape.wiki/w/Raw_tuna" target="_blank"> Check out the wiki for this item here!</a>
        `,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct!<br> The skillguide in game provides all required levels for content within RuneScape <i class="fas fa-smile-beam"></i></p>`
    }
];