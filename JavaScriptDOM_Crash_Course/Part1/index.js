/**
 * Basic query examples, select and manipulate DOM Items.
 */

// Get element by id selector and print innertext
let headerTitle = document.getElementById('header-title');
console.log('Old title: ' + headerTitle.innerText);

// Change innertext of element
headerTitle.textContent = 'New Title';
console.log('New title: ' + headerTitle.innerText);

// Add style to element
headerTitle.style.borderBottom = 'solid 3px white';

// Get elements by class selector and add style and print each of them
let listGroupItems = document.getElementsByClassName('list-group-item');

for (let i = 0; i < listGroupItems.length; i++) {
    // We can select all odd and even elements with document.querySelectorAll('li:nth-clild(odd)');
    if (i % 2 == 0) {
        listGroupItems[i].style.backgroundColor = 'green';
    } else {
        listGroupItems[i].style.backgroundColor = 'red';
    }
    console.log(listGroupItems[i]);
}

// Get element by query selector and set style
let mainHeader = document.querySelector('#main-header');
mainHeader.style.borderTop = 'solid 3px yellow';
mainHeader.style.borderBottom = 'solid 3px yellow';

// !QuerySelector grab the first element that match
let input = document.querySelector('input');
input.value = 'Test Value';

// QuerySelector that return array with all elements with this selector
let titles = document.querySelectorAll('.title');
for (let i = 0; i < titles.length; i++) {
    console.log(titles[i]);
}
