'use strict'

const rotators = [...document.querySelectorAll('.rotator')];

for (let rotator of rotators) {
  const rotatorCaseActive = rotator.querySelector('.rotator__case_active');
  let rotatorsChild = ([...rotator.children]);
  changeAd(rotatorsChild, rotatorCaseActive);
}

function changeAd(arr, active) {
  let indexActive = arr.indexOf(active);
  arr[indexActive].style.color = arr[indexActive].dataset.color;

  setInterval(function () {
    for (let rotatorsItem of arr) {
      rotatorsItem.classList.remove('rotator__case_active');
    }

    if (indexActive < arr.length - 1) {
      arr[indexActive + 1].classList.add('rotator__case_active');
      arr[indexActive + 1].style.color = arr[indexActive + 1].dataset.color;
      indexActive += 1;
    } else {
      indexActive = 0;
      arr[0].classList.add('rotator__case_active');
      arr[0].style.color = arr[0].dataset.color;
    }
  }, 1000);
}

