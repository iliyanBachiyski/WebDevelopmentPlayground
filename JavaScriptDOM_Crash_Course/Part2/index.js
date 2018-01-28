/**
 * Basic parent and child query examples, create new Element and add to the DOM.
 */

// Get element parentNode and add additional style to him.
let element = document.querySelector('#items');
let parentNodeElement = element.parentNode;
parentNodeElement.style.background = 'grey'
console.log(parentNodeElement.parentNode);

// Get childNodes(Inside the array we also have a 'text' elements that represend new line)
console.log(element.childNodes);

// Get childNodes(Better way than childNodes because here we don't have 'text' elements, only items that we need).
console.log(element.children);
element.children[0].style.background = 'purple'

// Get firstElementChild and lastElementChild
element.firstElementChild.textContent = 'First Child Element'
element.lastElementChild.textContent = 'Last Child Element'

// Get nextSibling, actually get next element in the tree
let title = document.querySelectorAll('.title')[1];
console.log(title.nextElementSibling);

// Get previousSibling, actually get previous element in the tree
let ulElement = document.querySelector('#items');
console.log(ulElement.previousElementSibling);

// Create new element and add atributes
let newElement = document.createElement('div');
newElement.id = 'newElementId';
newElement.className = 'newElementClass';
newElement.setAttribute('title', 'Hello From the new Element!');

let newParagraphText = document.createTextNode('Text Node!');
let newParagraphElement = document.createElement('p');
newParagraphElement.appendChild(newParagraphText);
newElement.appendChild(newParagraphElement);
// Get container and append newElement to the DOM(We can use container.insertBefore(newElement, oldElement))
document.querySelector('.container').appendChild(newElement);
console.log(newElement);