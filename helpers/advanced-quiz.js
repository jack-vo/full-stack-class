import { QuizApp } from '../practice-week-4/js/main.js';

class AdvanvedQuizApp extends QuizApp {
  #options;
  #container;

  constructor(container, options) {
    super(container);
    this.#container = container;
    this.#options = options;
    this.#postSetup();
  }

  #postSetup() {
    let quizSelection = this.#container.querySelector(
      '[data-component="selection"] select'
    );
    let options = quizSelection.querySelectorAll('option');

    for (let i = 0; i < options.length; i++) {
      options[i].remove();
    }

    let content = this.#options.items
      .map((item) => {
        return `<option value="${item.value}">${item.label}</option>`;
      })
      .join('');

    content = '<option>Select your exam</option>' + content;

    quizSelection.innerHTML = content;
  }
}

const container = document.querySelector('#advanced-quiz');

if (container) {
  window.advancedQuiz = new AdvanvedQuizApp(
    container,
    window.advancedQuizOptions
  );
} else {
  throw new Error('hook with id="advanced-quiz" is required');
}
