'use strict'
let hole = document.getElementsByClassName('hole');
hole = Array.from(hole);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

hole.forEach ((item => item.addEventListener('click', () => {
  if (item.classList.contains('hole_has-mole')) {
    dead.textContent = +dead.textContent + 1;
  } else {
    lost.textContent = +lost.textContent + 1;
  }

  if (dead.textContent === '10') {
    dead.textContent = '0';
    lost.textContent = '0';
    return alert('Вы победили!');
  }

  if (lost.textContent === '5') {
    dead.textContent = '0';
    lost.textContent = '0';
    return alert('Вы проиграли');
  }
})));
