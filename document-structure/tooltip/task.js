'use strict'

const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const tooltipPlace = document.createElement('div');
let tooltipText;

for (let tooltip of hasTooltip) {
  tooltip.addEventListener('click', listenHasTooltip)
}

function listenHasTooltip(event) {

  const target = event.target
  checkHasTooltip(target);
  event.preventDefault();
}

function checkHasTooltip(target) {
  if (target.nextElementSibling && target.nextElementSibling.classList.contains('tooltip_active')) {
    target.nextElementSibling.classList.remove('tooltip_active');
    return;
  }

  tooltipText = target.title;
  tooltipPlace.className = 'tooltip tooltip_active';
  tooltipPlace.innerHTML = tooltipText;
  target.after(tooltipPlace);

  let coords = target.getBoundingClientRect();

  tooltipPlace.style.left = coords.left + 'px';
  let tooltipPlaceCoords = tooltipPlace.getBoundingClientRect();
  tooltipPlace.style.top = coords.top + tooltipPlaceCoords.height - 7 + 'px';
}
