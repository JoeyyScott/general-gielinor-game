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

// Audio constants
const guessCorrect = new Audio('assets/sounds/correct.mp3');
const guessIncorrect = new Audio('assets/sounds/incorrect.mp3');
const quizCompleted = new Audio('assets/sounds/complete.mp3');
const music = new Audio('assets/sounds/musicbg.mp3');

// Constants for form data and content in index.html
const questionForm = document.getElementById("formQuestion");
const listAnswer = document.getElementById("answerList");
const correctAnswer = document.getElementById("answerCorrect");
const creditQuestion = document.getElementById ("questionCredit");
const form = document.getElementById('suggestForm');
const errorMessage = document.getElementById("messageError");
const submitButton = document.getElementById('buttonSubmit');

//Variables that'll change throughout
let questions = [];
let questionCurrent = {};
let questionsCounter;
let questionsRemaining = [];
let questionsCorrect = [];
let answerToBeAdded = [];
let correctResponses = [];
let incorrectResponses = [];

//Setting the max questions
const questionsMax = 10;

//Event listeners for initiating the quiz on start or repeat button being clicked and toggling the music
buttonStart.addEventListener('click', quizLoad);
buttonRepeat.addEventListener('click', () => { quizCompleted.pause(); quizCompleted.currentTime = 0; quizLoad(); });
iconMusic.addEventListener('click', toggleMusic);

//Checks to see if the next button has been clicked and removes the guess content, shows the quiz again and loads the next question and pauses/resets current sounds to prevent overlap
buttonNext.addEventListener('click', () => {
    guessCorrect.pause(); guessCorrect.currentTime = 0;
    guessIncorrect.pause(); guessIncorrect.currentTime = 0;
    containerGuess.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    questionsLoad();
});

//Credit for submit event listener to detect form submission
$( "#suggestForm" ).submit(function( event ) { event.preventDefault(); suggestQuestion(this); });

// Credit for adapted on modal hide function
$('#suggestModal').on('hide.bs.modal', function () { submitButton.innerHTML = `Submit your question <i class="fas fa-check-circle"></i>`; });  

//This function loads responses from the json file and sets the two arrays for correct and incorrect responses
function responsesLoad() { $.getJSON('assets/js/responses.json', function (data) { correctResponses = data.correct; incorrectResponses = data.incorrect; });}

//The quizLoad function will load the questions from the json file and store them in an array "questions"
function quizLoad() { $.getJSON('assets/js/questions.json', function (data) { questions = data.questions; })
    //Credit for .then function to wait for json file to be loaded before executing quiz
    .then(function() { quizStart(); });
}

//The quizStart function will display the correct content, set the counter and load the questions/responses
function quizStart() {
    //Hides welcome/final and displays quiz containers
    containerFinal.classList.add('contentHidden');
    containerWelcome.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    //Sets the questions remaining to a spread array from questions, the counter to 0 and loads the questions
    questionsRemaining = [...questions];
    questionsCounter = 0;
    questionsLoad();
    responsesLoad();
}

//This function loads questions and answers into the quiz interface
function questionsLoad() {
    //checks if there are no questions left or the question count is the max amount for this instance of the game
    if (questionsRemaining.length === 0 || questionsCounter === questionsMax) { quizCompleted.play(); quizCompleted.volume = 0.2;
        //displays finishing content
        containerQuiz.classList.add('contentHidden'); containerFinal.classList.remove('contentHidden');
        let answerPercentage = Math.trunc((questionsCorrect / questionsMax)*100);
        answersCorrect.innerHTML = `<h3>Your score: ${questionsCorrect} / ${questionsMax} - ${answerPercentage}%</h3>`;
        questionsCorrect = 0;
    }
    //checks if the user is on their final question and appropriately changes the inner text of buttonNext
    if (questionsCounter === questionsMax - 1) { buttonNext.innerHTML = `Check your score <i class="fas fa-chevron-circle-right"></i>`; }
    else { buttonNext.innerHTML = `Proceed with quiz <i class="fas fa-chevron-circle-right"></i>`; }
    questionsCounter++;
    //sets the question to be removed to a random number from the array of remaining questions
    let questionToBeRemoved = Math.floor(Math.random() * questionsRemaining.length);
    //sets the current question to the variable questionToBeRemoved from the array of remaining questions and fills the quiz content on index.html
    questionCurrent = questionsRemaining[questionToBeRemoved];
    question.innerHTML = `<img src="assets/images/quiz/${questionCurrent.imageQ}" class="question-img" alt="${questionCurrent.altQ} Image"> <br> <h2>${questionCurrent.question}</h2>`;
    remainingCount.innerHTML = `<p>Questions remaining: ${questionsMax - questionsCounter}</p>`;
    //credit for adapted forEach loop (See README.md for details) - Used to randomize answer order by setting the innerText of each answer button to a random answer within the answers array for questionCurrent
    answers.forEach(answer => { 
        let addedAnswer = Math.floor(Math.random() * questionCurrent.answers.length);
        answerToBeAdded = questionCurrent.answers[addedAnswer]; answer.innerText = answerToBeAdded.answer;
        //It then removes that answer from the available list using the same logic as selecting the current question until no answers remain
        questionCurrent.answers.splice(addedAnswer, 1);
    });
    //removes current question from the array of remaining questions
    questionsRemaining.splice(questionToBeRemoved, 1);
}

//Credit for forEach loop functionality - See README.md for more details
//This loop will check whenever an answer button is pressed whether it lines up to the correct answer for the current question
answers.forEach(answer => {
    answer.addEventListener('click', userGuess => {
        //sets their guess to a variable and shows the post guess content
        const selectedAnswer = userGuess.target.innerText;
        containerGuess.classList.remove('contentHidden'); 
        containerQuiz.classList.add('contentHidden');
        //changes the innerHTML of the post guess message based on whether it was correct and plays an appropriate sound
        if (selectedAnswer === questionCurrent.correct) {
            guessCorrect.play();
            guessCorrect.volume = 0.2;
            //changes the innerHTML of the verdict to a random response within the correctResponses array
            verdictGuess.innerHTML = `<h2>${correctResponses[Math.floor(Math.random() * correctResponses.length)].message} <i class="fas fa-smile-beam"></i></h2>`;
            responseGuess.innerHTML = `<img src="assets/images/quiz/${questionCurrent.imageA}" class="question-img" alt="${questionCurrent.altA} Image"> <br>
            <p>${questionCurrent.msgCorrect} You can check out the Wiki for ${questionCurrent.linkText} <a href="${questionCurrent.linkURL}" target=_"blank">here</a>!</p>`;
            questionsCorrect++;
        } else {
            guessIncorrect.play();
            guessIncorrect.volume = 0.2;
            //changes the innerHTML of the verdict to a random response within the incorrectResponses array
            verdictGuess.innerHTML = `<h2>${incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)].message} <i class="fas fa-frown"></i></h2>`;
            responseGuess.innerHTML = `<p>That is not correct! <br> Hint: ${questionCurrent.msgWrong} <i class="fas fa-smile-beam"></i></p>`;
        }
    });
});

//This function will toggle background music
function toggleMusic() {
    if (music.paused === true) { iconMusic.classList.remove('fa-music'); iconMusic.classList.add('fa-volume-mute'); music.play(); music.volume = 0.1; music.loop = true; }
    else if (music.paused === false) { iconMusic.classList.add('fa-music'); iconMusic.classList.remove('fa-volume-mute'); music.pause(); }
}

//This function sends an email using emailJS and pulls the data from my form in index.html using the .value attribute
function suggestQuestion() {
    // Array for storing error messages
    let errors = [];
    let emptyQuestion = (questionForm.value === null || questionForm.value === ""); if (emptyQuestion) { errors.push("Please enter a question"); }
    let emptyAnswers = (listAnswer.value === null || listAnswer.value === ""); if (emptyAnswers) { errors.push("Please enter the available answers"); }
    let emptyCorrect = (correctAnswer.value ===  null || correctAnswer.value === ""); if (emptyCorrect) { errors.push("Please enter the correct answer"); }
    let emptyCredit = (creditQuestion.value ===  null || creditQuestion.value === ""); if (emptyCredit) { errors.push("Please enter a username to credit"); }
    if (!emptyQuestion) { if (questionForm.value.length < 10) { errors.push ("Question character minimum is 10"); } }
    if (!emptyQuestion) { if (!RegExp("^[a-zA-Z0-9]+\\S").test(questionForm.value)) { errors.push("Question must be text/numbers."); } }
    if (!emptyCorrect) { if (!RegExp("^[a-zA-Z0-9]+\\S").test(correctAnswer.value)) { errors.push("Correct must be text/numbers"); } }
    if (!emptyCredit) { if (!RegExp("^[a-zA-Z0-9]+\\S").test(creditQuestion.value)) { errors.push("RSN must be text/numbers"); } }
    if (!emptyCredit) { if (creditQuestion.value.length > 13) { errors.push ("RSN is a maximum of 12 characters"); } }
    // If empty answers doesn't exist it will check the string using / as a seperate to make sure there is 4 answers
    if (!emptyAnswers) { if (listAnswer.value.split('/').length !== 4) { errors.push('Use / to seperate answers'); } else { 
        let userAnswers = listAnswer.value.split('/');
        //for loop to check if the length of each answer doesn't contain 0 or invalid characters and throws an appropriate error message with answer number included 
        for (let i = 0; i < userAnswers.length; i++) { 
            if (userAnswers[i].length === 0) { errors.push(`Please enter answer ${i+1}`); }
            else if (!RegExp("^[a-zA-Z0-9]+\\S").test(userAnswers[i])) { errors.push(`Answer ${i+1} needs text/numbers`); } } 
        }
    }
    //if it passes all checks, remove all error messages from messageError div
    $("#messageError").empty();
    if (errors.length === 0) {
        emailjs.send("service_yvwm4wp", "questionSuggestion", {
            "formQuestion": questionForm.value,
            "answerList": listAnswer.value,
            "answerCorrect": correctAnswer.value,
            "questionCredit": creditQuestion.value
    })
    .then(
        //Changes the submitButton text to convey to the user if their submission was successful or not
        function (response) { submitButton.innerHTML = `Thank you <i class="fas fa-smile-beam"></i>`; form.reset(); },
        function (error) { submitButton.innerHTML = `Please Try Again <i class="fas fa-frown"></i>`; }
    );
    return false;
    } else {
          for (let i = 0; i < errors.length; i++) {
            errorMessage.innerHTML = errorMessage.innerHTML + errors [i] + '<br>';
        }
    return false;      
    }
}