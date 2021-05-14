'use strict'

const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const tooltipPlace = document.createElement('div');
let tooltipText;

for (let tooltip of hasTooltip) {
  tooltip.addEventListener('click', listenDocument)
}

function listenDocument(event) {
  const target = event.target
  checkHasTooltip(target);
  event.preventDefault();
}

function checkHasTooltip(target) {
  if (target.nextElementSibling && target.nextElementSibling.classList.contains('tooltip')) {
    target.nextElementSibling.remove();
    return;
  }

  tooltipText = target.title;
  tooltipPlace.className = 'tooltip tooltip_active';
  tooltipPlace.innerHTML = tooltipText;
  target.after(tooltipPlace);
}
