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
const questionsMax = 25;

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
        let answerPercentage = (questionsCorrect / questionsMax)*100;
        console.log(answerPercentage);
        answersCorrect.innerHTML = `${questionsCorrect} / ${questionsMax} - ${answerPercentage}%`
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
           console.log(questionsCorrect);
           console.log(questionsMax);
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
    },
    {
        //7
        question: `<img src="assets/images/answers/grandexchange.png" class="question-img" alt="GE Image"><h2>What year was the Grand Exchange released?</h2>`,
        answer1: '2006',
        answer2: '2007',
        answer3: '2008',
        answer4: '2009',
        correct: '2', //2007
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/grandexchange.png" class="question-img" alt="GE Image">
        <p>It was 2007. Prior to this update the only trades that existed were player to player either through ingame or the forums. It provided a way for players to acquire items they required in an easier fashion. <br> Check out the wiki for the GE <a href="https://runescape.wiki/w/Grand_Exchange" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: It was released the same year as the God Wars Dungeon.</p>`
    },
    {
        //8
        question: `<img src="assets/images/answers/fairyring.png" class="question-img" alt="GE Image"><h2>What is the fairy ring code for McGrubor's Wood?</h2>`,
        answer1: 'AKQ',
        answer2: 'AJR',
        answer3: 'ALS',
        answer4: 'AKS',
        correct: '3', //ALS
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/fairyring.png" class="question-img" alt="Fairy Ring Image">
        <p>It was ALS. To access the Fairy ring network you must start A Fairy Tale II - Cure A Queen and it provides a fantastic way of getting around the RuneScape map.<br> Check out the wiki for the Fairy rings <a href="https://runescape.wiki/w/Fairy_ring#Fairy_ring_codes" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: Once you travel to a fairy ring location, the information is shown next time you use the fairy ring.</p>`
    },
    {
        //9
        question: `<img src="assets/images/answers/fairyring.png" class="question-img" alt="GE Image"><h2>What do you need to pay a farmer to look after a patch with a magic tree in it?</h2>`,
        answer1: '25 Yew logs',
        answer2: '25 Papaya Fruit',
        answer3: '25 Cocunuts',
        answer4: '25 Kandarin Hops',
        correct: '3', //25 Coconuts
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/magictree.png" class="question-img" alt="Magic Tree Image">
        <p>It was 25 coconuts. When you plant something in a farming patch, you can pay the farmer to look after your crops so they will not get diseased. There are exceptions to this but it is true for the majority. <br> Check out the wiki for the Magic Tree (farming) <a href="https://runescape.wiki/w/Magic_Tree_(Farming)" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The skill guide ingame provides all required levels for content within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //10
        question: `<img src="assets/images/answers/plaguesend.png" class="question-img" alt="GE Image"><h2>What level do you need in 10 different skills for the quest Plagues End?</h2>`,
        answer1: '65',
        answer2: '70',
        answer3: '75',
        answer4: '80',
        correct: '3', //75
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/plaguesend.png" class="question-img" alt="Plagues End Image">
        <p>It was 75. The skills you need are: Agility, Construction, Crafting, Dungeoneering, Herblore, Mining, Prayer, Ranged, Summoning and Woodcutting. Completion of this quest grants access to Prifddinas, which is one of the most useful unlocks in RuneScape today.<br> Check out the wiki for the quest <a href="https://runescape.wiki/w/Plague%27s_End" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The Quest guide ingame provides all requirements for Quests within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //11
        question: `<img src="assets/images/answers/grandseedpod.png" class="question-img" alt="GE Image"><h2>Where can you obtain a Grand seed pod?</h2>`,
        answer1: 'Fishing Trawler',
        answer2: `Sorceress's Garden`,
        answer3: 'Vinesweeper',
        answer4: 'Gnome Restaurant',
        correct: '4', //Gnome Restaurant
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/grandseedpod.png" class="question-img" alt="Grand seed pod Image">
        <p>It was Gnome Restaurant. You can talk to Aluft Gianne Junior on the 1st floor (UK) on the western side to start this minigame. You learn about gnome cooking and deliver food to gnomes throughout RuneScape for various rewards including the Grand seed pod and the Gnome Scarf.<br> Check out the wiki for the Grand seed pod <a href="https://runescape.wiki/w/Grand_seed_pod" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: Those gnomes have big stomachs don't they?</p>`
    },
    {
        //12
        question: `<img src="assets/images/answers/trollheimtelly.png" class="question-img" alt="GE Image"><h2>What runes are required to teleport to Trollheim?</h2>`,
        answer1: '2 Law, 2 Fire',
        answer2: '2 Law 2 Earth',
        answer3: '1 Law 1 Air 1 Water',
        answer4: '1 Law 3 Air 1 Earth',
        correct: '1', //2 Law, 2 Fire
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/trollheimtelly.png" class="question-img" alt="Trollheim Teleport Image">
        <p>It was 2 Law 2 Fire. You unlock this teleport after completing Eadgar's Ruse quest. It will teleport you to the center of Trollheim and is used for herb runs and questing.<br> Check out the wiki for the Trollheim Teleport here <a href="https://runescape.wiki/w/Trollheim_Teleport" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The teleport tab in the Magic abilities interface ingame provides all requirements for Quests within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //13
        question: `<img src="assets/images/answers/construction.png" class="question-img" alt="GE Image"><h2>What is the name of the Construction pet?</h2>`,
        answer1: 'Ace',
        answer2: `Baby Yaga's House`,
        answer3: 'Brains',
        answer4: 'Sifu',
        correct: '2', //Baby Yaga's House
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/babyyagashouse.png" class="question-img" alt="Baby Yaga's House Image">
        <p>It was Baby Yaga's House. You unlock this skilling pet whilst training Construction. Some activities do not award the chance to roll for the pet such as protean planks and Royal Battleship kits.<br> Check out the wiki for Baby Yaga's House here <a href="https://runescape.wiki/w/Baby_Yaga%27s_House" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The pet interface ingame has a filter to show all pets within RuneScape and how to obtain them. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //14
        question: `<img src="assets/images/answers/rfd.png" class="question-img" alt=" Image"><h2>What was the 100th quest to be released in RuneScape?</h2>`,
        answer1: 'Recipe for Disaster',
        answer2: 'Fremmenik Trials',
        answer3: 'Swan Song',
        answer4: 'Cabin Fever',
        correct: '1', //Recipe for Disaster
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/rfd.png" class="question-img" alt="Recipe for Disaster Image">
        <p>It was Recipe for Disaster. This quest was released back on the 15th March 2006! It was a sequel to the first quest ever released in RuneScape and a staple in any players beginning experience, Cook's Assistance. <br> Check out the wiki for the quest here <a href="https://runescape.wiki/w/Recipe_for_Disaster" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: You make some interesting food in this quest.</p>`
    },
    {
        //15
        question: `<img src="assets/images/answers/brightfire.png" class="question-img" alt="Brightfire Potion Image"><h2>What ingredients do you need to make a Brightfire potion?</h2>`,
        answer1: 'Super antifire (4) and Super Restore (4)',
        answer2: 'Super antifire (4) and Bright potion (4)',
        answer3: 'Super antifire (4) and Prayer potion (4)',
        answer4: 'Super antifire (4) and Prayer Renewal (4)',
        correct: '4', //Super antifire (4) and Prayer Renewal (4)
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/brightfire.png" class="question-img" alt="Brightfire potion Image">
        <p>It was Super antifire (4) and Prayer Renewal (4). They are one of the combination potions released with Prifddinas and require you to buy a recipe from Lady Meilyr for 600,000gp. <br> Check out the wiki for Brightfire potions here <a href="https://runescape.wiki/w/Brightfire_potion#(6)" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The skill guide ingame provides all required levels for content within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //16
        question: `<img src="assets/images/answers/fallymassacre.jpg" class="question-img" alt="Falador Massacre Image"><h2>In what year was the 'Falador Massacre'?</h2>`,
        answer1: '2004',
        answer2: '2006',
        answer3: '2008',
        answer4: '2010',
        correct: '2', //2006
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/fallymassacre.jpg" class="question-img" alt=" Falador Massacre Image">
        <p>It was 2006. When Cursed You, the first player to achieve 99 Construction, he hosted a party in his player owned house and people who had engaged in combat activities were booted out of his house and somehow retained the ability to attack players and in turn abused this thus dubbing this event the Falador Massacre. <br> Check out the wiki for the Falador Massacre here <a href="https://runescape.fandom.com/wiki/Falador_Massacre" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: 6th June and is known as a triple number glitch.</p>`
    },
    {
        //17
        question: `<img src="assets/images/answers/jagex.png" class="question-img" alt="Jagex Image"><h2>In which city is Jagex based?</h2>`,
        answer1: 'Oxford',
        answer2: 'Manchester',
        answer3: 'Cambridge',
        answer4: 'London',
        correct: '3', //Cambridge
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/jagex.png" class="question-img" alt="Jagex Image">
        <p>It was Cambridge. <br> Check out the wiki for  here <a href="https://en.wikipedia.org/wiki/Jagex" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: Maybe their website has this information?</p>`
    },
    {
        //18
        question: `<img src="assets/images/answers/arnold.png" class="question-img" alt="Arnold Lydspor Image"><h2>In what quest do you meet Arnold Lydspor?</h2>`,
        answer1: 'Swan Song',
        answer2: 'Meeting History',
        answer3: 'A Tail of Two Cats',
        answer4: `Cook's Assisant`,
        correct: '1', //Swan Song
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/arnold.png" class="question-img" alt="Arnold Lydspor Image">
        <p>It was Arnold Lydspor. During Swan Song you help the Piscatoris Fishing Colony and it's inhabitants to fight off the sea troll invasion, among which is Arnold Lydspor who ends up being a bank and general store after the quest. <br> Check out the wiki for Arnold here <a href="https://runescape.wiki/w/Arnold_Lydspor" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: I'm sure the Wise Old Man is thankful for your help fighting those trolls!</p>`
    },
    {
        //19
        question: `<img src="assets/images/answers/unferth.png" class="question-img" alt="Unferth Image"><h2>In what quest do help Bob find items for Neite?</h2>`,
        answer1: `A Soul's Bane`,
        answer2: 'Desert Treasure',
        answer3: `Gertrude's Cat`,
        answer4: 'A Tail of Two Cats',
        correct: '4', //
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/tailoftwocats.png" class="question-img" alt=" Tail of Two Cats Image">
        <p>It was a Tail of Two Cats. <br> Check out the wiki for Tail of Two Cats here <a href="https://runescape.wiki/w/A_Tail_of_Two_Cats#Official_description" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: You help two NPCs find love, it's furry fun!</p>`
    },
    {
        //20
        question: `<img src="assets/images/answers/stats.png" class="question-img" alt="Invention Image"><h2></h2>`,
        answer1: 'Dungoneering',
        answer2: 'Fishing',
        answer3: 'Invention',
        answer4: 'Farming',
        correct: '3', //Invention
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/invention.png" class="question-img" alt="Invention Image">
        <p>It was Invention. To even unlock this skill you require level 80 in Divination, Smithing and Crafting. You can then start the invention tutorial north of Falador in the Invention guild. <br> Check out the wiki for Invention here <a href="https://runescape.wiki/w/Invention" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: This skill was released early 2016.</p>`
    },
    {
        //21
        question: `<img src="assets/images/answers/fishingguild.png" class="question-img" alt="Fishing Guild Image"><h2>What Fishing level do you require to enter the Fishing Guild?</h2>`,
        answer1: '40',
        answer2: '53',
        answer3: '68',
        answer4: '81',
        correct: '3', //68
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/fishingguild.png" class="question-img" alt="Fishing Guild Image">
        <p>It was 68. Once you have this Fishing level you can enter the guild north of the Ardougne lodestone. It provides a multitude of Fishing locations and access to the Deep Sea Fishing platform. <br> Check out the wiki for the Fishing Guild here <a href="https://runescape.wiki/w/Fishing_Guild" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The skill guide ingame provides all required levels for content within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //22
        question: `<img src="assets/images/answers/yewtree.png" class="question-img" alt="Yew tree Image"><h2>What Woodcutting level do you need to chop down a Yew tree?</h2>`,
        answer1: '50',
        answer2: '60',
        answer3: '70',
        answer4: '80',
        correct: '2', //60
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/yewtree.png" class="question-img" alt="Yew tree Image">
        <p>It was 60. Yews can be found in multiple locations around the world of Gielinor, most notably west of Catherby bank, south of Edgeville bank and in the Crwys district of Prifddinas. <br> Check out the wiki for Yew trees here <a href="https://runescape.wiki/w/Yew" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The skill guide ingame provides all required levels for content within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    },
    {
        //23
        question: `<img src="assets/images/answers/excalibur.png" class="question-img" alt="Excalibur Image"><h2>What quest must you get a portion of the way through to acquire the sword Excalibur?</h2>`,
        answer1: `Merlin's Crystal`,
        answer2: 'Holy Grail',
        answer3: `King's Ransom`,
        answer4: 'Defender of Varrock',
        correct: '1', //Merlin's Crystal
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/excalibur.png" class="question-img" alt="Excalibur Image">
        <p>It was Merlin's Crystal. This is a quest in which you work with King Arthur to help free Merlin who, like all amazing magicians is stuck inside a crystal. <br> Check out the wiki for Excalibur here <a href="https://runescape.wiki/w/Excalibur" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: This quest is one of the early quests in the Camelot series.</p>`
    },
    {
        //24
        question: `<img src="assets/images/answers/darkmeyer.png" class="question-img" alt="Darkmeyer Image"><h2>What Kingdom is Darkmeyer located in?</h2>`,
        answer1: 'Misthalin',
        answer2: 'Kandarin',
        answer3: 'Desert',
        answer4: 'Morytania',
        correct: '4', //Morytania
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/darkmeyer.png" class="question-img" alt="Darkmeyer Image">
        <p>It was Morytania. After the Branches of Darkmeyer, you have access to this city and have access to the Blisterwood tree which can be used to create weapons which can damage vampyres. <br> Check out the wiki for Darkmeyer here <a href="https://runescape.wiki/w/Darkmeyer" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: Vampyres love this place!</p>`
    },
    {
        //25
        question: `<img src="assets/images/answers/soulsplit.png" class="question-img" alt="Soul Split Image"><h2>What quest unlocks the ability to use the curse Soul Split at level 92 Prayer?</h2>`,
        answer1: 'Curse of Arrav',
        answer2: 'Temple at Senntisten',
        answer3: 'Lunar Diplomacy',
        answer4: 'One of a Kind',
        correct: '2', //Temple at Senntisten
        messageCorrect: `<h2>GG!</h2><img src="assets/images/answers/soulsplit.png" class="question-img" alt="Soul Split Image">
        <p>It was Temple at Senntisten. <br> Check out the wiki for Soul Split here <a href="https://runescape.wiki/w/Soul_Split" target="_blank">here!</a></p>`,
        messageWrong: `<h2>Oof! <i class="fas fa-frown"></i></h2><br><p>That is not correct! <br> Hint: The skill guide ingame provides quest requirements for all content within RuneScape. <i class="fas fa-smile-beam"></i></p>`
    }
];