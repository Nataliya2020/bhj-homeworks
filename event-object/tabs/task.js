'use strict'
let tabs = [...document.querySelectorAll('.tabs')]

tabs.forEach((item) => {
  item.addEventListener('click', showContentTabs);
});

function showContentTabs(event) {
  let target = event.target;

  if (target.className !== 'tab') {
    return;
  }

  let tab = [...event.target.closest('.tabs').querySelectorAll('.tab')];

  for (let tabItem of tab) {
    tabItem.classList.remove('tab_active');
  }

  event.target.classList.add('tab_active');
  let tabIndex = tab.indexOf(event.target);
  let tabContent = [...event.target.closest('.tabs').querySelector('.tab__contents').children];

  for (let tabContentItem of tabContent) {
    tabContentItem.classList.remove('tab__content_active');
  }
  tabContent[tabIndex].classList.add('tab__content_active');
}
