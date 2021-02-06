// Constants for form data
const questionForm = document.getElementById("formQuestion");
const listAnswer = document.getElementById("answerList");
const correctAnswer = document.getElementById("answerCorrect");
const creditQuestion = document.getElementById ("questionCredit");
const form = document.getElementById('suggestForm');
const errorMessage = document.getElementById("messageError");
const submitButton = document.getElementById('buttonSubmit');

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

// Credit for adapted on modal hide function
$('#suggestModal').on('hide.bs.modal', function () { submitButton.innerHTML = `Submit your question <i class="fas fa-check-circle"></i>`; });  