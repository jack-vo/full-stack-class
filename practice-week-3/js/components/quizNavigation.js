class QuizNavigation {
  #container;
  #prevButton;
  #nextButton;
  #pagination;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    this.#container.innerHTML = `
        <div class="d-flex gap-4">
          <div>
            <button class="btn btn-secondary" data-component="previous">
              Previous
            </button>
          </div>

          <ul class="pagination" data-component="pagination"></ul>

          <div>
            <button class="btn btn-primary" data-component="next">Next</button>
          </div>
        </div>`;

    this.#setup();
  }

  #setup() {
    this.#prevButton = this.#container.querySelector(
      '[data-component="previous"]'
    );
    this.#prevButton.addEventListener(
      'click',
      this.#onPreviousClicked.bind(this)
    );

    this.#nextButton = this.#container.querySelector('[data-component="next"]');
    this.#nextButton.addEventListener('click', this.#onNextClicked.bind(this));

    this.#pagination = this.#container.querySelector(
      '[data-component="pagination"]'
    );
    this.#pagination.addEventListener(
      'change',
      this.#onPaginationChanged.bind(this)
    );
  }

  #onPreviousClicked() {}

  #onNextClicked() {}

  #onPaginationChanged() {}
}

export default QuizNavigation;
