// Constants for areas of quiz content in index.html
const buttonStart = document.getElementById('quiz-start');
const buttonRepeat = document.getElementById('quiz-repeat');
const buttonNext = document.getElementById('quiz-next');
const containerWelcome = document.getElementById('container-welcome');
const containerQuiz = document.getElementById('container-quiz')
const containerGuess  = document.getElementById('container-post-guess');
const responseGuess = document.getElementById('post-guess')
const containerFinal = document.getElementById('container-final');
const answersCorrect = document.getElementById('answers-correct');
const answers = Array.from(document.getElementsByClassName('buttonAnswer'));
const questionsMax = 4;

//Variables that'll change throughout
let questionCurrent = {};
let questionsCounter;
let questionsRemaining = [];
let questionsCorrect = [];

//Initiating the quiz on start or repeat button being clicked
buttonStart.addEventListener('click', quizStart);
buttonRepeat.addEventListener('click', quizStart);

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
        answersCorrect.innerHTML = `${questionsCorrect} / ${questionsMax}`
    }
    //increase question count
    questionsCounter++;
    //sets the question to be removed to a random number from the array of remaining questions
    questionToBeRemoved = Math.floor(Math.random() * questionsRemaining.length)
    //sets the current question to the variable questionToBeRemoved from the away of remaining questions
    questionCurrent = questionsRemaining[questionToBeRemoved];
    //sets the questions HTML for the current question
    question.innerHTML = questionCurrent.question;
    //credit for for each function - Used to iterate through the answers dataSet and set the innerText of each answer button to the correct text
    answers.forEach(answer => { let i = answer.dataset[`number`]; answer.innerText = questionCurrent[`answer${i}`];});
    //removes current question from the array of remaining questions
    questionsRemaining.splice(questionToBeRemoved, 1);
}

//Credit for forEach loop
answers.forEach(answer => {
    //checks to see if the user clicks any of the answer buttons
    answer.addEventListener('click', userGuess => {
        //sets their guess to variable and shows the post guess content
        const selectedAnswer = userGuess.target.dataset[`number`];
        containerGuess.classList.remove('contentHidden'); 
        containerQuiz.classList.add('contentHidden');
        //changes the innerHTML of the post guess message based on whether it was correct
        if (selectedAnswer === questionCurrent.correct) {
           responseGuess.innerHTML = questionCurrent.messageCorrect;
           questionsCorrect++;
        } else {
            responseGuess.innerHTML = questionCurrent.messageWrong;
        }
    });
});
//End credit - See README.md for more details

//Checks to see if the next button has been clicked
//Removes the guess content, shows the quiz again and loads the next question
buttonNext.addEventListener('click', () => {
    containerGuess.classList.add('contentHidden');
    containerQuiz.classList.remove('contentHidden');
    questionsLoad();
})

//array with each question as an object
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
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><p>That is not correct! <br> Hint: This information exists on the internet, it might be closer than you think <i class="fas fa-smile-beam"></i></p>`
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
        <p>It is level 35 to catch raw tuna. You can fish them at 55 fishing without a harpoon if you have unlocked the Barbarian ways of barehanded Fishing! Either way you'll get 80 Fishing experience!</p>
        <a href="https://runescape.wiki/w/Raw_tuna" target="_blank"> Check out the wiki for this item here!</a>
        `,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct!<br> Hint: The skillguide in game provides all required levels for content within RuneScape <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //3
        question: `<h2>What NPC in Draynor Village will sell you rope for either 15 coins or 4 balls of wool?</h2>`,
        answer1: 'Bob',
        answer2: 'Gerald',
        answer3: 'Ned',
        answer4: 'Aggie',
        correct: '3', //Ned
        messageCorrect: `<h2>Congrats!</h2><img src="assets/images/answers/ned.png" class="question-img" alt="Ned Image">
        <p>It was Ned. He lives in a house on the eastern side of Draynor Village, just north of the bank. You'll interact with him during Dragon Slayer quest but you can also get rope from him!<br> Check out the wiki for him <a href="https://runescape.wiki/w/Ned" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: You talk to this NPC during the Dragon Slayer quest.</p>`
    },
    {
        //4
        question: `<h2>What NPC in Varrock gives you breathing salts in exchange for an airtight pot during the One Small Favour quest?</h2>`,
        answer1: 'Stray Dog',
        answer2: 'King Roald',
        answer3: 'Horvik',
        answer4: 'Apothecary',
        correct: '4', //Apothecary
        messageCorrect: `<h2>Gratz!</h2><img src="assets/images/answers/apothecary.png" class="question-img" alt="Apothecary Image">
        <p>It was the Apothecary. He works in a building just south east of Varrock Centre, just north of the bank. You'll interact with him during One Small Favour but also in Dimension of Disaster: Curse of Arrav.<br> Check out the wiki for him <a href="https://runescape.wiki/w/Apothecary" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: This NPC can also make potions for you if brought the correct ingredients.</p>`
    },
    {
        //5
        question: `<h2>Who do you talk to buy the Trimmed Completionist Cape?</h2>`,
        answer1: 'Gielinor Guide',
        answer2: 'Musuem Guard',
        answer3: 'Elen Anterth',
        answer4: 'Wizard Sedridor',
        correct: '2', //Museum Guard
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/trimcomp.png" class="question-img" alt="Trimmed Completionist Image">
        <p>It was the Museum Guard. He works in Varrock museum, on the top floor. You interact with him and ask about the mysterious cape and he'll give you a description of the capes history. There is a lot of requirements for this cape, making it prestigious.<br> Check out the wiki for the cape <a href="https://runescape.wiki/w/Completionist_cape_(t)" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: They're surrounded by lots of artefacts from time gone by.</p>`
    },
    {
        //6
        question: `<img src="assets/images/answers/praymelle.png" class="question-img" alt="Pray Melle Image"><h2>What Prayer level do you need to use the Protect from Melle prayer?</h2>`,
        answer1: '22',
        answer2: '29',
        answer3: '37',
        answer4: '43',
        correct: '4', //43
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/praymelle.png" class="question-img" alt="Pray Melle Image">
        <p>It was 43. Back in the days protection prayers granted 100% protection from that style, now they provide a 50% reduction to the hit. Despite this protection prays are still widely used in RuneScape PVM today.<br> Check out the wiki for the prayer <a href="https://runescape.wiki/w/Protect_from_Melee" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The skill guide ingame provides all required levels for content within RuneScape.</p>`
    }
];