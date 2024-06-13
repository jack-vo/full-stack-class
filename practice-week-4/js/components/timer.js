let getTimeStringFromNumber = function (num) {
  if (num < 10) {
    return `0${num}`;
  }

  return `${num}`;
};

// This formatTime is from CHAT GPT
export let formatTime = function (sec) {
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
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
        <div class="alert alert-info p-1 px-3 mt-3 d-inline-block">
          <i class="bi bi-clock"></i>
          <span data-component="clock">00:00:00</span>
        </div>`;
  }

  #setup() {
    this.#container.classList.add('d-none');
    this.#clock = this.#container.querySelector('[data-component="clock"]');
  }

  start() {
    this.#seconds = 0;
    this.#interval = setInterval(this.#onInterval.bind(this), 1000);
    this.#container.classList.remove('d-none');
  }

  #onInterval() {
    this.#seconds++;

    let formattedTimeString = formatTime(this.#seconds);

    this.#clock.innerHTML = formattedTimeString;
  }

  getSeconds() {
    return this.#seconds;
  }

  stop() {
    if (this.#interval) {
      clearInterval(this.#interval);
      this.#seconds = 0;
    }
  }

  destroy() {
    this.stop();
    this.#container.innerHTML = '';
  }
}

export default Timer;
