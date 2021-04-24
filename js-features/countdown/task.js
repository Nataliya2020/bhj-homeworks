'use strict'

// Для загрузки файла по ссылке
const statusDiv = document.getElementById('status')
const linkHidden = document.createElement('a');
linkHidden.href = 'http://www.consultant.ru/cons/RTFCACHE/LAW362347_0_20210323_131405.TIF';
linkHidden.download;
linkHidden.target = '_blank';
linkHidden.id = 'link';
statusDiv.append(linkHidden);
const link = document.getElementById('link');

// Таймер обратного отсчета секунд
const timeReduction = function() {
  let numberOfSeconds = document.getElementById('timer');
  let timeInterval = setInterval(function () {
    numberOfSeconds.textContent -= 1;
    if (Number(numberOfSeconds.textContent) === 0) {
      alert('Вы победили в конкурсе!');
      clearInterval(timeInterval);
    }
  }, 1000);
}

timeReduction();

// Таймер с часами и минутами. Загрузка файла.

// const timer = document.getElementById('timer');
// timer.textContent = '00:00:05';
//
// const timeReductionHourMinSec = function() {
//   let timeInterval = setInterval(getTime, 1000);
//   let userNumberOfTime = document.getElementById('timer');
//   let userArrTime = userNumberOfTime.textContent.split(':');
//   let userHour = +userArrTime[0];
//   let userMin = +userArrTime[1];
//   let userSec = +userArrTime[2];
//   let timeTimestamp;
//   let endUserTime;
//   let timeDifference;
//   let endUserHour;
//   let endUserMin;
//   let endUserSec;
//
//   userHour *= 3600000;
//   userMin *= 60000;
//   userSec = (userSec * 1000) + 50;
//
//   timeTimestamp = userHour + userMin + userSec;
//   endUserTime = Date.now() + timeTimestamp;
//
//   function getTime() {
//     timeDifference = new Date(endUserTime - Date.now());
//     endUserHour = timeDifference.getUTCHours();
//     endUserMin = timeDifference.getMinutes();
//     endUserSec = timeDifference.getSeconds();
//
//     if (endUserHour < 10) {
//       endUserHour = `0${endUserHour}`;
//     }
//
//     if (endUserMin < 10) {
//       endUserMin = `0${endUserMin}`;
//     }
//
//     if (endUserSec < 10) {
//       endUserSec = `0${endUserSec}`;
//     }
//
//     userNumberOfTime.textContent = `${endUserHour}:${endUserMin}:${endUserSec}`;
//
//     if (timeDifference <= 0) {
//       clearInterval(timeInterval);
//       userNumberOfTime.textContent = `00:00:00`;
//       alert('Вы победили в конкурсе!');
//       //window.open('http://www.consultant.ru/cons/RTFCACHE/LAW362347_0_20210323_131405.TIF');
//       //link.click();
//     }
//   }
// }
//
// timeReductionHourMinSec();


