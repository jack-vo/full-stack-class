import QuizContent from './components/quizContent.js';
import QuizNavigation from './components/quizNavigation.js';
import QuizSelection from './components/quizSelection.js';
import Timer from './components/timer.js';
import Report from './components/report.js';

class QuizApp {
  #container;
  #quizSelection;
  #quizContent;
  #quizNavigation;
  #timer;
  #report;
  #activeQuiz;
  #attemptedItems;

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container mt-5 text-center">
        <div data-component="selection"></div>
        <div data-component="content"></div>
        <div data-component="timer"></div>
        <div data-component="navigation"></div>
        <div data-component="report"></div>
    </div>`;
  }

  #setup() {
    let container = this.#container;

    this.#quizSelection = new QuizSelection(
      container.querySelector('[data-component="selection"]'),
      this.#onQuizSelectionChange.bind(this)
    );

    this.#quizContent = new QuizContent(
      container.querySelector('[data-component="content"]'),
      this.#onQuizAnswerChange.bind(this)
    );

    this.#quizNavigation = new QuizNavigation(
      container.querySelector('[data-component="navigation"]'),
      {
        onChange: this.#onQuizNavigationChange.bind(this),
        onSubmit: this.#onSubmit.bind(this),
      }
    );

    this.#timer = new Timer(
      container.querySelector('[data-component="timer"]')
    );

    this.#report = new Report(
      container.querySelector('[data-component="report"]')
    );
  }

  #onQuizSelectionChange(selectedValue) {
    let url = `data/${selectedValue}.json`;

    this.#timer.stop();

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          console.log('Selected quiz data', result);

          this.#attemptedItems = [];
          this.#activeQuiz = result;
          this.#quizContent.setQuizData(this.#activeQuiz);
          this.#quizNavigation.setQuizData(this.#activeQuiz);
          this.#timer.start();
          this.#report.destroy();
        }.bind(this)
      );
  }

  #onQuizAnswerChange(data) {
    this.#attemptedItems.push(data);
  }

  #onQuizNavigationChange(itemIndex) {
    this.#quizContent.setActiveItem(itemIndex);
  }

  #onSubmit() {
    let score = 0;
    let maxScore = this.#activeQuiz.items.length;
    let testTime = this.#timer.getSeconds();

    for (let i = 0; i < this.#attemptedItems.length; i++) {
      let currentAttemptedItem = this.#attemptedItems[i];

      if (currentAttemptedItem.correct) {
        score += 1;
      }
    }

    let reportData = {
      score: score,
      maxScore: maxScore,
      testTime: testTime,
    };

    this.#report.show(reportData);

    this.#quizContent.destroy();
    this.#quizNavigation.destroy();
    this.#timer.destroy();
  }
}

const app = new QuizApp(document.querySelector('#app'));
