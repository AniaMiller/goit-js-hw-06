let counterValue = 0
let span = document.querySelector('#value')
let incrementButton = document.querySelector("[data-action='increment']")
let decrementButton = document.querySelector("[data-action='decrement']")

incrementButton.addEventListener('click', function() {
    span.textContent = parseInt(counterValue+=1)
}, false)

decrementButton.addEventListener('click', function () {
    span.textContent = parseInt(counterValue-=1)
}, false)


/*
- Create a variable, counterValue, that will store the current counter value and initialize it with 0.
- Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
- Update the interface with the new value of the variable counterValue.

*/
