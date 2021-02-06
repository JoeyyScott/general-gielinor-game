// Constants for form data
const closeSuggest = document.getElementById('suggestClose');
const questionForm = document.getElementById("formQuestion");
const listAnswer = document.getElementById("answerList");
const correctAnswer = document.getElementById("answerCorrect");
const creditQuestion = document.getElementById ("questionCredit");
const form = document.getElementById('suggestForm');
const errorMessage = document.getElementById("messageError");


//This function sends an email using emailJS and pulls the data from my form in index.html using the .value attribute
function suggestQuestion(suggestForm) {
    // Array for storing error messages
    let errors = [];
    let emptyQuestion = (questionForm.value === null || questionForm.value === "");
    if (emptyQuestion) { errors.push("Please enter a question"); }
    let emptyAnswers = (listAnswer.value === null || listAnswer.value === "");
    if (emptyAnswers) { errors.push("Please enter the available answers"); }
    let emptyCorrect = (correctAnswer.value ===  null || correctAnswer.value === "");
    if (emptyCorrect) { errors.push("Please enter the correct answer"); }
    let emptyCredit = (creditQuestion.value ===  null || creditQuestion.value === "");
    if (emptyCredit) { errors.push("Please enter a username to credit"); }
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
        //If a successful response occurs it will change the button text to convey to the user it was successful
        function (response) { buttonSubmit.innerHTML = `Thank you <i class="fas fa-smile-beam"></i>`; form.reset(); },
        //If an error occurs it will change the button text to prompt the user
        function (error) { buttonSubmit.innerHTML = `Please Try Again <i class="fas fa-frown"></i>`; }
    );
    return false;
    } else {
          for (i = 0; i < errors.length; i++) {
            errorMessage.innerHTML = errorMessage.innerHTML + errors [i] + '<br>';
        }
    return false;      
    }
}

// Credit for adapted on modal hide function
$('#suggestModal').on('hide.bs.modal', function () { buttonSubmit.innerHTML = `Submit your question <i class="fas fa-check-circle"></i>`; });  