'use strict'
const menuLink = [...document.querySelectorAll('ul.menu_main > li.menu__item > a')];

menuLink.forEach((item) => {
  item.addEventListener('click', activateTheMenu);
});

function activateTheMenu(event) {
  if (!event.target.closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active')) {
    closeAllMenuSub(event);
    event.target.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
    event.preventDefault();
  } else {
    event.target.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active');
    event.preventDefault();
  }
}

function closeAllMenuSub(event) {
  const menuSub = [...event.target.closest('.menu_main').querySelectorAll('.menu_sub')];
  for (let sub of menuSub) {
    sub.classList.remove('menu_active');
  }
}
