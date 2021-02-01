//This function sends an email using emailJS and pulls the data from my form in index.html using the .value attribute
function suggestQuestion(suggestForm) {
    emailjs.send("service_yvwm4wp", "questionSuggestion", {
        "formQuestion": suggestForm.formQuestion.value,
        "answerList": suggestForm.answerList.value,
        "answerCorrect": suggestForm.answerCorrect.value,
        "questionCredit": suggestForm.questionCredit.value
    })
    .then(
        //If a successful response occurs it will change the button text to convey to the user it was successful
        function (response) { buttonSubmit.innerHTML = `Thanks for your question <i class="fas fa-smile-beam"></i>`; },
        //If an error occurs it will change the button text to prompt the user
        function (error) { buttonSubmit.innerHTML = `Please Try Again <i class="fas fa-frown"></i>`; }
    );
    document.getElementById('suggestForm').reset();
    return false;
}