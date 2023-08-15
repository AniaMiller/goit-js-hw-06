const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const name = nameInput.value;
function checkName(name) {
    if (name === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = name;
    }
}
nameInput.addEventListener("input", checkName);
