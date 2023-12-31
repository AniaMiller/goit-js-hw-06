var input = document.querySelector('#validation-input')
var dataLength = document.querySelector('[data-length]').dataset.length
input.addEventListener('blur', validate)

function validate(text) {
    if (text.target.value.length == dataLength) {
        input.className = "valid"
    } else {
        input.className = "invalid"
    }
}


/*
Write a script that, when focus on input is lost (blur event), checks its contents for the correct number 
of entered characters.
The number of characters in the input is specified in its data-length attribute.
If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
To add styles, use the valid and invalid CSS classes, which you can find in the task source files.
*/