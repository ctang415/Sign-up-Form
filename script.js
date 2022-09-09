const form = document.querySelector('.form')
const pNumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordconfirm');
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

password.addEventListener('input', (event) => {
    if (password.validity.tooShort) {
        password.setCustomValidity("Password must be at least 8 characters.");
        password.reportValidity();
    }
    else {
        password.setCustomValidity("");
    }
})


form.addEventListener('submit', (event) => {
    if(!email.validity.valid || !pNumber.validity.valid) {
        event.preventDefault();
    }
})


passwordConfirm.addEventListener('input', (event) => {
    if (passwordConfirm.value !== password.value) {
        passwordError.textContent = '*Passwords do not match';
    }
    else {
        passwordError.textContent = '';
    }
})



  
