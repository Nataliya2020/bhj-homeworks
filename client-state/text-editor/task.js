'use strict'

let textInTextarea = document.querySelector('#editor');

let newButton = document.createElement('button');
newButton.textContent = 'Очистить содержимое';
newButton.style.display = 'block';

newButton.addEventListener('click', (event) => {
  //localStorage.removeItem('text');
  textInTextarea.value = '';
});

textInTextarea.value = localStorage.getItem('text');

textInTextarea.oninput = () => {
  localStorage.setItem('text', textInTextarea.value);
}

document.querySelector('body').appendChild(newButton);
