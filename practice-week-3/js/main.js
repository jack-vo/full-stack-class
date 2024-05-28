import QuizContent from './components/quizContent.js';
import QuizNavigation from './components/quizNavigation.js';
import QuizSelection from './components/quizSelection.js';
import Timer from './components/timer.js';

class QuizApp {
  #container;
  #quizSelection;
  #quizContent;
  #quizNavigation;
  #timer;
  #activeQuiz;

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container mt-5">
      <div class="d-flex flex-column align-items-center">
        <div data-component="selection"></div>
        <div data-component="content"></div>
        <div data-component="timer"></div>
        <div data-component="navigation"></div>
      </div>
    </div>`;
  }

  #setup() {
    let container = this.#container;

    this.#quizSelection = new QuizSelection(
      container.querySelector('[data-component="selection"]')
    );

    this.#quizSelection.onChange = this.#onQuizSelectionChange.bind(this);

    this.#quizContent = new QuizContent(
      container.querySelector('[data-component="content"]')
    );
    this.#quizNavigation = new QuizNavigation(
      container.querySelector('[data-component="navigation"]')
    );
    this.#timer = new Timer(
      container.querySelector('[data-component="timer"]')
    );
  }

  #onQuizSelectionChange(selectedValue) {
    let url = `/practice-week-3/data/${selectedValue}.json`;

    this.#timer.stop();

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          this.#activeQuiz = result;
          this.#quizContent.setQuizData(result);
          this.#quizNavigation.setQuizData(result);
          this.#timer.start();
        }.bind(this)
      );
  }
}

const app = new QuizApp(document.querySelector('#app'));
