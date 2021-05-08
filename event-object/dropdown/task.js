'use strict'
const dropdownValue = [...document.querySelectorAll('.dropdown__value')];
const dropdownItem = [...document.querySelectorAll('.dropdown__item')];

dropdownValue.forEach((item) => {
  item.addEventListener('click', showMenu);
})

dropdownItem.forEach((item) => {
  item.addEventListener('click', makeAChoice);
});

function showMenu(event) {
  event.target.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
  event.preventDefault();
}

function makeAChoice(event) {
  let value = event.target.textContent;
  event.target.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
  event.target.closest('.dropdown').querySelector('.dropdown__value').textContent = value;
  event.preventDefault();
}
