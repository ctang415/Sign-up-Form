const form = document.getElementById('form')
const pNumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordconfirm');
const passwordError = document.querySelector('#password + span.error');
const nameF = document.getElementById('firstname');
const nameL = document.getElementById('lastname');

pNumber.addEventListener("input", (event) => {
    if (pNumber.validity.patternMismatch) {
        pNumber.setCustomValidity("Please enter proper phone number format.");
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

nameF.addEventListener('input', (event) => {
    if (nameF.validity.tooShort) {
        nameF.setCustomValidity("First name must be at least 2 characters.");
        nameF.reportValidity();
    }
    else {
        nameF.setCustomValidity("");
    }
})

nameL.addEventListener('input', (event) => {
    if (nameL.validity.tooShort) {
        nameL.setCustomValidity("Last name must be at least 2 characters.");
        nameL.reportValidity();
    }
    else {
        nameL.setCustomValidity("");
    }
})

passwordConfirm.addEventListener('input', (event) => {
    if (passwordConfirm.value !== password.value) {
        password.validity.valid = false;
        passwordConfirm.validity.valid = false;
        passwordError.textContent = '*Passwords do not match';
        password.style.border="2px solid red";
        passwordConfirm.style.border="2px solid red";
    }
    else {
        password.validity.valid = true;
        passwordConfirm.validity.valid = true;
        passwordError.textContent = '';
        password.style.border="";
        passwordConfirm.style.border="";
    }
})


  
form.addEventListener('submit', (event) => {
        if (passwordConfirm.value !== password.value ) {
            event.preventDefault();
        }
})
