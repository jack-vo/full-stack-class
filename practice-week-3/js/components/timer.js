let getTimeStringFromNumber = function (num) {
  if (num < 10) {
    return `0${num}`;
  }

  return `${num}`;
};

// This formatTime is from CHAT GPT
let formatTime = function (sec) {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  let hoursText = getTimeStringFromNumber(hours);
  let minutesText = getTimeStringFromNumber(minutes);
  let secondsText = getTimeStringFromNumber(seconds);

  return `${hoursText}:${minutesText}:${secondsText}`;
};

class Timer {
  #container;
  #clock;
  #interval;
  #seconds;
  constructor(container) {
    this.#container = container;
    this.#render();
  }

  #render() {
    this.#container.innerHTML = `
        <div class="alert alert-info p-1 px-3 mt-3">
          <i class="bi bi-clock"></i>
          <span data-component="clock">00:00:00</span>
        </div>`;

    this.#clock = this.#container.querySelector('[data-component="clock"]');
  }

  start() {
    let onInterval = function () {
      this.#seconds++;

      let formattedTimeString = formatTime(this.#seconds);

      this.#clock.innerHTML = formattedTimeString;
    };

    this.#seconds = 0;
    this.#interval = setInterval(onInterval.bind(this), 1000);
  }

  stop() {
    if (this.#interval) {
      clearInterval(this.#interval);
      this.#seconds = 0;
    }
  }
}

export default Timer;
