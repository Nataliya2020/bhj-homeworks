'use strict'
const picture = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const clicker = document.querySelector('.clicker__cookie');
const divSpeedClicker = document.createElement('div');
divSpeedClicker.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span>';
clicker.before(divSpeedClicker);

const clickerSpeed = document.getElementById('clicker__speed');
let timeStart = Date.now();

picture.onclick = function() {
  clickRate(timeStart);
  picture.width === 200 ? picture.width = 300 : picture.width = 200;
  clickCounter.textContent++;
}

function clickRate(time) {
  const calculateTheClickRate = Date.now() - time;
  clickerSpeed.textContent = (1 / (calculateTheClickRate / 1000)).toFixed(2);
  timeStart = Date.now();
}

