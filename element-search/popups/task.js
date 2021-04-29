'use strict'

const modalMain = document.getElementById('modal_main');
let modalCloseTimes = [...document.getElementsByClassName('modal__close_times')];
let showSuccess = [...document.getElementsByClassName('show-success')];
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

modalCloseTimes.forEach((item) => item.onclick = () => {
  item.closest('.modal').classList.remove('modal_active');
});

showSuccess.forEach((item) => item.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active')
});

