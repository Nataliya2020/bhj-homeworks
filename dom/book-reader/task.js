'use strict'

const fontSize = [...document.querySelectorAll('a.font-size')];
const bookControl = [...document.querySelectorAll('.book__control')];

for (let fontSizeItem of fontSize) {
  fontSizeItem.addEventListener('click', changeSize)
}

function changeSize(event) {

  let size = event.target.dataset.size;

  for (let fontSizeElem of fontSize) {
    fontSizeElem.classList.remove('font-size_active');
  }

  event.target.classList.add('font-size_active');

  if (size === 'small') {
    event.target.closest('.book').classList.remove('book_fs-big');
    event.target.closest('.book').classList.add('book_fs-small');
  } else if (size === 'big') {
    event.target.closest('.book').classList.remove('book_fs-small');
    event.target.closest('.book').classList.add('book_fs-big');
  } else {
    event.target.closest('.book').classList.remove('book_fs-big', 'book_fs-small');
  }
  event.preventDefault();
}

for (let bookControlItem of bookControl) {
  bookControlItem.addEventListener('click', changeColor);
}

function changeColor(event) {
  let target = event.target;

  if (target.tagName !== 'A') {
    return;
  }

  let colorText = event.target.dataset.textColor;
  let colorBg = event.target.dataset.bgColor;
  let bookControlColor = [...event.target.closest('.book__control').querySelectorAll('.color')];

  for (let bookControlColorElem of bookControlColor) {
    bookControlColorElem.classList.remove('color_active');
  }

  if (target.classList.contains('color')) {
    target.classList.add('color_active');
  }

  let paragraph = [...event.target.closest('.book').querySelectorAll('p')];

  if (colorText !== undefined) {
    for (let paragraphItem of paragraph) {
      paragraphItem.style.color = colorText;
    }
  } else if (colorBg !== undefined) {
    document.body.style.background = colorBg;
  }
  event.preventDefault();
}


