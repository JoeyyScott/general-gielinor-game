// Constants for form data
const closeSuggest = document.getElementById('suggestClose');
const questionForm = document.getElementById("formQuestion");
const listAnswer = document.getElementById("answerList");
const correctAnswer = document.getElementById("answerCorrect");
const creditQuestion = document.getElementById ("questionCredit");
const form = document.getElementById('suggestForm');
const errorMessage = document.getElementById("messageError");

// Array for storing error messages
let errors = [];

//This function sends an email using emailJS and pulls the data from my form in index.html using the .value attribute
function suggestQuestion(suggestForm) {
    if (errors.length === 0) {
    emailjs.send("service_yvwm4wp", "questionSuggestion", {
        "formQuestion": questionForm.value,
        "answerList": listAnswer.value,
        "answerCorrect": correctAnswer.value,
        "questionCredit": creditQuestion.value
    })
    .then(
        //If a successful response occurs it will change the button text to convey to the user it was successful
        function (response) { buttonSubmit.innerHTML = `Thanks for your question <i class="fas fa-smile-beam"></i>`; form.reset(); },
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