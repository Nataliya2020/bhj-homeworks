'use strict'

const imageLoad = document.getElementById('loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onload = function () {
  let data = xhr.response;
  let dataParse = JSON.parse(data);
  printDataForTheUser(dataParse);
}

function printDataForTheUser(data) {
  imageLoad.classList.remove('loader_active');

  for (let elem in data.response.Valute) {
    let dataCode = data.response.Valute[elem].CharCode;
    let dataValue = data.response.Valute[elem].Value;
    templateValute(dataCode, dataValue);
  }
}

function templateValute(code, valute) {
  items.innerHTML += `
      <div class = "item">
        <div class = "item__code">
          ${code}
          </div>
        <div class = "item__value">
          ${valute}
        </div>
        <div class = "item__currency">
          руб.
        </div>
      </div>`
}
