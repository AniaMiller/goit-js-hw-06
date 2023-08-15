const validationInput = document.querySelector("#validation-input");
const validationLenght = validationInput.getAttribute("data-length");
function validateLenght() {
    if (validationInput.value.lenght = validationLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
}
validationInput.addEventListener("blur", validateLenght);
 

// Nie jestem pewna ilości = (= czy ==)