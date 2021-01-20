// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const containerWelcome = document.getElementById('welcome-container');
const containerQuiz = document.getElementById('quiz-container')

//Initiating the quiz on start button being clicked
buttonStart.addEventListener('click', quizStart);

//The quizStart function will show the questions 

function quizStart() {
    containerWelcome.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    questionCounter = 0;
}