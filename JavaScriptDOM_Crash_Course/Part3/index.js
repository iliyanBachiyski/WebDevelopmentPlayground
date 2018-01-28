/**
 * Add event listener to some of the elements.
 */

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const input = document.querySelector('input[type="text"]');
const select = document.querySelector('select');

function buttonClick() {
    console.log('First Button Clicked!');
}

button1.addEventListener('click', function () {
    console.log('Second Button Clicked!')
});

button1.addEventListener('click', () => {
    console.log('Second Button Clicked Using Lambda Expression!')
});

button1.addEventListener('click', () => {
    document.querySelector('.container').style.background = 'blue';
    console.log('Second Button Clicked And Added Style!')
});

// From 'event' parameter you can get a different properties like a mouseposition, keyDown and etc.
function emitEvent(event) {
    // event.target return the element that is clicked
    console.log(event.target);
    // event.type returns the type of event
    console.log(event.type);
    // event.shiftKey returns true or false if the shift key is pressed
    console.log(event.shiftKey);
}

button2.addEventListener('click', emitEvent);
button3.addEventListener('dblclick', emitEvent);

input.addEventListener('keydown', (event) => {
    console.log(event.target.value);
})

select.addEventListener('change', (event) => {
    console.log('Value: ' + event.target.value);
})