const form = document.querySelector('.form')
const pNumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

pNumber.addEventListener("input", (event) => {
    if (pNumber.validity.patternMismatch) {
        pNumber.setCustomValidity("Please enter proper number format.");
        pNumber.reportValidity();
    }
    else {
        pNumber.setCustomValidity("");
    }
});

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter proper e-mail address format.");
        email.reportValidity();
    }
    else {
        email.setCustomValidity("");
    }
});

form.addEventListener('submit', (event) => {
    if(!email.validity.valid || !pNumber.validity.valid) {
        event.preventDefault();
    }
})


password.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = ' ';
        emailError.className = "error";
    }
    else {
        showError();
    }    
})

function showError() {
 if (email.validity.typeMismatch) {
        emailError.textContent = "*Passwords do not match."
    }
}

    emailError.className = "error active";


  
