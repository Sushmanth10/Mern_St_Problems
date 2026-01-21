const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const registerBtn = document.getElementById("register-Btn");


registerBtn.addEventListener("click", function(){
    const fullNameValue = fullNameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const submissionDetails = {
        fullName: fullNameValue,
        email: emailValue,
        password: passwordValue
    }

    console.log(submissionDetails); // API Backend Server Call
})



// 1. gender : 