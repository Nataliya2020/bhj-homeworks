'use strict'

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSideText = document.querySelector('.chat-widget__side-text');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.value = '';
let timeOut;

chatWidgetSideText.addEventListener('click', callChatWindow);
chatWidgetInput.addEventListener('keyup', sendUserMessage);
let clientInput = chatWidgetInput.addEventListener('input', resetTimeOut);
let clientClick = chatWidgetInput.addEventListener('click', resetTimeOut);

function callChatWindow() {
  messages.innerHTML += `
    <div class="message">
    <div class="message__time">${getTime().hour}:${getTime().minutes}</div>
    <div class="message__text">
      Добрый день. Задайте, пожалуйста, Ваш вопрос.
    </div>
  </div>`
  timeOut = setTimeout(trackTimeOut, 30000);
  chatWidget.classList.add('chat-widget_active');
}

function getTime() {
  let currentDate = new Date;
  return {
    hour: currentDate.getHours(),
    minutes: currentDate.getMinutes()
  }
}

function trackTimeOut() {
  messages.innerHTML += `
    <div class="message">
    <div class="message__time">${getTime().hour}:${getTime().minutes}</div>
    <div class="message__text">
      Затрудняетесь с выбором? Мы готовы помочь Вам.
    </div>
  </div>`
}

function sendUserMessage(event) {
  let messageUser = chatWidgetInput.value;
  if (event.key !== 'Enter') {
    return;
  }
  let count = 0;
  for (let symbol of messageUser) {
    if (symbol === ' ') {
      count++;
    }
  }

  if (!messageUser || count === messageUser.length) {
    return;
  }

  clearTimeout(timeOut);
  addAUserMessage();
  chatWidgetInput.value = '';
  scrollToTheLastMessage();
  sendABotResponse();
  scrollToTheLastMessage();
}

function addAUserMessage() {
  messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${getTime().hour}:${getTime().minutes}</div>
    <div class="message__text">
      ${chatWidgetInput.value}
    </div>
  </div>`
}

function scrollToTheLastMessage() {
  messages.scrollIntoView(false);
}

let listOfBotAnswers = [
  'Уточните, пожалуйста, Ваш вопрос',
  'Сейчас решим Ваш вопрос',
  'Как давно Вы у нас совершили покупку?',
  'Хорошего дня!',
  'Что Вы хотели узнать?',
  'Пойду подниму документы',
  'Спасибо за обращение',
  'Рады помочь',
  'А Вы точно у нас покупали?',
  'Приготовьте, пожалуйста, чек',
  'Мне нужен Ваш номер телефона',
  'Поздравляю с каким-то праздником',
  'Хотите принять участие в акции?',
  'Рекомендую прогулки на свежем воздухе'
]

function sendABotResponse() {
  let randonResponse = Math.floor(Math.random() * listOfBotAnswers.length);

  messages.innerHTML += `
    <div class="message">
    <div class="message__time">${getTime().hour}:${getTime().minutes}</div>
    <div class="message__text">
     ${listOfBotAnswers[randonResponse]}
    </div>
  </div>`
}

function resetTimeOut() {
  clearTimeout(timeOut);
  timeOut = setTimeout(trackTimeOut, 30000);
}










