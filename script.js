/* ========================================================= 
Lab 5 - script.js
========================================================= */

document.addEventListener("DOMContentLoaded", function (){
    const inputs = document.querySelectorAll("#username, #email, #password");
    inputs.forEach(input => {
        input.addEventListener("focus", function(){
            input.style.backgroundColor = "#fffae0";
        });
        input.addEventListener("blur", function(){
            input.style.backgroundColor= "white";
        });
    });


    const form = document.querySelector("#signup-form");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        let isValid = true;

        //Username validation
        const usernameInput= document.querySelector('#username');
        const usernameError= document.querySelector('#error-username');
        const usernameValue= usernameInput.value.trim();

        if (usernameValue ===""){
            usernameError.textContent = "User name is required";
            usernameError.style.display = "inline";
            usernameInput.classList.add("error-border");
            isValid = false;

        }
        else {
            usernameError.textContent = "";
            usernameError.style.display = "none";
            usernameInput.classList.remove("error-border");
        }

        // Email validation
        const emailInput= document.querySelector('#email');
        const emailError= document.querySelector('#error-email');
        const emailValue= emailInput.value.trim();
        const hasAt = emailValue.includes("@");
        const hasDot = emailValue.includes(".");

        if (emailValue ==="" || !hasAt || !hasDot){
            emailError.textContent = "Enter a valid email address";
            emailError.style.display = "inline";
            emailInput.classList.add("error-border");
            isValid = false;

        }
        else {
            emailError.textContent = "";
            emailError.style.display = "none";
            emailInput.classList.remove("error-border");
        }

        // Password validation
        const passwordInput= document.querySelector('#password');
        const passwordError= document.querySelector('#error-password');
        const passwordValue= passwordInput.value;

        if (passwordValue.length <8 ){
            passwordError.textContent = "Password must be at least 8 characters";
            passwordError.style.display = "inline";
            passwordInput.classList.add("error-border");
            isValid = false;

        }
        else {
            passwordError.textContent = "";
            passwordError.style.display = "none";
            passwordInput.classList.remove("error-border");
        }

        //Term Checkbox
        const termsCheckbox = document.querySelector("#terms");
        const termsError= document.querySelector("#error-terms");

        if (!termsCheckbox.checked){
            termsError.textContent = "You must accept the terms";
            termsError.style.display = "inline";
            isValid = false;

        }
        else{
            termsError.textContent="";
            termsError.style.display= "none";
        }

        //Submission messgae
        if (isValid === true){
            alert("Registration is successful");
        }

    });
});