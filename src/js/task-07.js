var input = document.querySelector('#font-size-control')
var output = document.querySelector('#text')

input.addEventListener("input", function () {
    output.style.fontSize = parseInt(this.value) + "px"
})



/*
Write a script that responds to changes in the value of input#font-size-control (input event) 
and changes the inline style of span#text by updating the font-size property. 
As a result, the text size will change responding to scrollbar dragging.
*/