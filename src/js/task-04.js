const valuePage = document.querySelector("#value");
const buttonValueDown = document.querySelector('[data-action="decrement"]');
const buttonValueUp = document.querySelector('[data-action="increment"]');
let counterValue = 0;
function updateCounterValue(value) {
    counterValue = value;
    valuePage.textContent = counterValue;
}
function valueDown() {
    newValue = counterValue + 1;
    updateCounterValue(newValue);
}
function valueUP() {
    newValue = counterValue - 1;
    updateCounterValue(newValue);
}
buttonValueDown.addEventListener("click", valueUP);
buttonValueUp.addEventListener("click", valueDown);
updateCounterValue(counterValue);
