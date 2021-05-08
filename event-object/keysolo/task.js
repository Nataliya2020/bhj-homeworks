'use strict'

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  timer() {
    if (!document.getElementById('timer')) {
      const timerCreate = document.createElement('span');
      timerCreate.textContent = '00:00:00';
      timerCreate.id = 'timer';
      const status = document.querySelector('.status');
      status.before(timerCreate);
    }

    let self = this;
    self.timeInterval = setInterval(getTime, 1000);
    let time = document.getElementById('timer');
    let numberOfSecond = time.textContent.split(':');

    let hour = +numberOfSecond[0];
    let min = +numberOfSecond[1];
    let sec = this.wordElement.textContent.length;

    hour < 10 ? time.textContent = '00:00:0' + hour : time.textContent = '00:00:' + hour;
    min < 10 ? time.textContent = '00:00:0' + min : time.textContent = '00:00:' + min;
    sec < 10 ? time.textContent = '00:00:0' + sec : time.textContent = '00:00:' + sec;

    hour *= 3600000;
    min *= 60000;
    sec = (sec * 1000) + 50;

    let timeTimestamp = hour + min + sec;

    let endUserTime = Date.now() + timeTimestamp;

    function getTime() {
      let timeDifference = new Date(endUserTime - Date.now());
      let endUserHour = timeDifference.getUTCHours();

      let endUserMin = timeDifference.getMinutes();
      let endUserSec = timeDifference.getSeconds();

      if (endUserHour < 10) {
        endUserHour = `0${endUserHour}`;
      }

      if (endUserMin < 10) {
        endUserMin = `0${endUserMin}`;
      }

      if (endUserSec < 10) {
        endUserSec = `0${endUserSec}`;
      }
      time.textContent = `${endUserHour}:${endUserMin}:${endUserSec}`;

      if (timeDifference <= 0) {
        clearInterval(self.timeInterval);
        time.textContent = `00:00:00`;
        self.fail();
      }
    }
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keyup', event => this.wordComparison(event));
  }

  wordComparison(event) {
    let symbol = event.key;
    let symbolCode = symbol.charCodeAt();

    if (symbol.length > 1 || (symbolCode !== 32 && symbolCode < 65)) {
      return;
    }

    let userKey = event.key.toLowerCase();
    if (userKey === this.currentSymbol.textContent) {
      this.success();
    } else {
      this.fail();
    }
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'я люблю kitkat'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
    .map(
      (s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
    )
    .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    clearInterval(this.timeInterval);
    this.timer();
  }
}

new Game(document.getElementById('game'))

