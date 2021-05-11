'use strict'

window.addEventListener('scroll', function () {

  const reveal = [...document.querySelectorAll('.reveal')];

  for (let revealItem of reveal) {
    let revealCoordinatesTop = revealItem.getBoundingClientRect().top;

    if (revealCoordinatesTop <= document.documentElement.clientHeight / 2 && revealCoordinatesTop >= document.documentElement.clientHeight / 3) {

      revealItem.classList.add('reveal_active');
    } else {
      revealItem.classList.remove('reveal_active');
    }
  }
});

