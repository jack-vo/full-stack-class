class QuizContent {
  #container;
  #data;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    this.#data = data;
    this.#container.innerHTML = `
    <h1 class="mb-4">${this.#data.title}</h1>
    <div data-component="question" class="mb-3"></div>
    <div data-component="answers" class="mb-3 d-flex flex-column gap-3 w-100"></div>`;
  }
}

export default QuizContent;
