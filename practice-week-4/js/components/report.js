import { formatTime } from './timer.js';

class Report {
  #container;
  #data;
  constructor(container) {
    this.#container = container;
  }

  show(data) {
    let testTimeString = formatTime(data.testTime);

    this.#container.innerHTML = `
        <h2>Quiz completed!</h2>
        <div class="alert alert-primary mt-2">
            Your score is <span class="fw-bold">${data.score} / ${data.maxScore}</span>
        </div>
        <div class="alert alert-secondary">Your test time is <strong>${testTimeString}</strong></div></div>
    `;
  }

  destroy() {
    this.#container.innerHTML = '';
  }
}

export default Report;
