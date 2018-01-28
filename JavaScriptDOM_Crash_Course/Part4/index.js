const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const input = document.querySelector('#item');
const deleteButtons = document.querySelectorAll('.delete');
const filterInput = document.querySelector('#filter');
const listItems = document.querySelectorAll('.list-group-item');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    const textNode = document.createTextNode(input.value);
    listItem.appendChild(textNode);
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'btn btn-danger btn-sm float-right delete';

    deleteButton.appendChild(document.createTextNode('X'));
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
})

function deleteItem(event) {
    itemList.removeChild(event.target.parentNode);
}

deleteButtons.forEach(element => {
    element.addEventListener('click', deleteItem)
});

filterInput.addEventListener('keyup', () => {
    const inputValue = filterInput.value;
    console.log(inputValue);
    listItems.forEach(element => {
        if(element.firstChild.textContent.indexOf(inputValue) == -1) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    })
})