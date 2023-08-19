let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

input.addEventListener('input', updateValue)

function updateValue(name) {
    if (name.target.value.length == 0) {
        output.textContent = "Anonymous";
    } else {
        output.textContent = name.target.value;
    }
}


/*
Write a script that, when typing in the input#name-input input (input event), 
substitutes its current value into span#name-output. If the input is empty, 
the span should display the "Anonymous" string.
*/