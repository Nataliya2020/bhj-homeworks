'use strict'

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");

  if (parts.length !== 2) {
    const subscribeModal = document.querySelector('#subscribe-modal');
    subscribeModal.classList.add('modal_active');

    let modalClose = document.querySelector('.modal__close');

    modalClose.addEventListener('click', (e) => {
      let close = e.target;
      close.closest('.modal').classList.remove('modal_active');
      document.cookie = 'display=close; SameSite=Lax';
    });
  }
}

getCookie('display');
