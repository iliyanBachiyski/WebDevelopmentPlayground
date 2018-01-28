const buttonTextFileElement = document.querySelector('#button_text_file');
const buttonJSONFileElement = document.querySelector('#button_json_object');
const paragraphElement = document.querySelector('#responseParagraph');
const userDivElement = document.querySelector('#user')
const userHeaderElement = document.querySelector('#header_user');

let xhr = new XMLHttpRequest();

buttonTextFileElement.addEventListener('click', () => {
    xhr.open('GET', 'text.txt', true);

    xhr.onload = onLoad;

    xhr.onerror = onError;

    xhr.send();
})

buttonJSONFileElement.addEventListener('click', () => {
    xhr.open('GET', 'user.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            userDivElement.style.display = 'block';
            userHeaderElement.innerHTML = 'Hello ' + JSON.parse(this.responseText).name;
        }
    }

    xhr.send();
})

function onLoad() {
    paragraphElement.style.display = 'block';
    if (this.status == 200) {
        paragraphElement.style.background = 'green';
        paragraphElement.textContent = 'Response From Server: ' + this.responseText;
    } else {
        paragraphElement.style.background = 'red';
        paragraphElement.textContent = 'On Load Error!';
    }
}

function onError() {
    console.log('Error');
}