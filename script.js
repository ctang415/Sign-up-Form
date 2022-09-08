const pNumber = document.getElementById('phonenumber');

pNumber.addEventListener("input", (event) => {
    if (pNumber.validity.typeMismatch) {
        pNumber.setCustomValidity("Please enter proper number format.");
        pNumber.reportValidity();
    }
    else {
        pNumber.setCustomValidity(" ");
    }
});
