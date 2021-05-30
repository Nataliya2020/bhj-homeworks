'use strict'

const form = document.querySelector('#signin__form');
const signIn = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');

let logOutButton = document.createElement('button');
logOutButton.textContent = 'Выйти';
logOutButton.style.display = 'block';
logOutButton.style.marginTop = '20px';

logOutButton.addEventListener('click', (e) => {
  localStorage.removeItem('id');
  signIn.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
})

signIn.classList.add('signin_active');

if (localStorage.getItem('id')) {
  showWelcome(localStorage.getItem('id'));
}

const signinBtn = document.querySelector('#signin__btn');

signinBtn.addEventListener('click', logIn);

function logIn(event) {

  let formData = new FormData(form);
  event.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';
  xhr.send(formData);

  xhr.onload = function () {

    if (xhr.response.success) {
      localStorage.setItem('id', JSON.stringify(xhr.response.user_id));
      showWelcome(xhr.response.user_id);
    } else {
      alert('Неверный логин/пароль');
    }
  }
}

function showWelcome(id) {
  signIn.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  welcome.querySelector('#user_id').textContent = id;
  welcome.appendChild(logOutButton);
}
