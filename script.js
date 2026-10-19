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
    })
})