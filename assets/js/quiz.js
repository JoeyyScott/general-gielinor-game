// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const containerWelcome = document.getElementById('container-welcome');
const containerQuiz = document.getElementById('container-quiz')

//Initiating the quiz on start button being clicked
buttonStart.addEventListener('click', quizStart);

//The quizStart function will show the questions 

function quizStart() {
    containerWelcome.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    questionCounter = 0;
}

const questions = [{
        //1
        question: `<h2>What language was the original RuneScape coded in?</h2>`,
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
        question: `<h2>What fishing level do you need to catch raw tuna with a harpoon?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="raw-tuna">`,
        answer1: '15',
        answer2: '25',
        answer3: '40',
        answer4: '35',
        correct: '4', //35
        message: `
        <p>It is level 35!</p>
        <p>You require a harpoon to fish tuna at this fishing level.</p>
        <p>You can fish them at 55 fishing without a harpoon if you have unlocked the barbarian ways of Barehanded fishing!</p>
        <p>Regardless of which way you choose to obtain it you will receive 80 fishing experience for doing so.</p>`,
    }
];