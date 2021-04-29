'use strict'

const sliderItem = [...document.querySelectorAll('.slider__item')];
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const sliderDot = [...document.querySelectorAll('.slider__dot')];
const sliderDots = document.querySelector('.slider__dots');

const sliderItemActive = document.querySelector('.slider__item.slider__item_active');
let indexActive = sliderItem.indexOf(sliderItemActive);
sliderDot[indexActive].classList.add('slider__dot_active');


function changeTheDot(indexActive) {
  for (let dot of sliderDot) {
    dot.classList.remove('slider__dot_active');
  }
  sliderDot[indexActive].classList.add('slider__dot_active');
}

function changeSlide() {
  let sliderItemActive = document.querySelector('.slider__item.slider__item_active');
  indexActive = sliderItem.indexOf(sliderItemActive);
  sliderItem[indexActive].classList.remove('slider__item_active');
}

sliderArrowPrev.onclick = () => {
  changeSlide();
  indexActive === 0 ? indexActive = sliderItem.length - 1 : indexActive -= 1;
  sliderItem[indexActive].classList.add('slider__item_active');
  changeTheDot(indexActive);
};

sliderArrowNext.onclick = () => {
  changeSlide();
  indexActive === sliderItem.length - 1 ? indexActive = 0 : indexActive += 1;
  sliderItem[indexActive].classList.add('slider__item_active');
  changeTheDot(indexActive);
}

sliderDots.addEventListener('click', function (event) {
  let index = sliderDot.indexOf(event.target);

  if (index === -1) {
    return false;
  }

  for (let dot of sliderDot) {
    dot.classList.remove('slider__dot_active');
  }

  sliderDot[index].classList.add('slider__dot_active');

  for (let slide of sliderItem) {
    slide.classList.remove('slider__item_active');
  }

  sliderItem[index].classList.add('slider__item_active');
});
