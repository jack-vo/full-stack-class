class QuizNavigation {
  #container;
  #prevButton;
  #nextButton;
  #paginationItems;
  #activeItemIndex;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    let paginationContent = '';
    let quizItemsLength = data.items.length;

    for (let i = 0; i < quizItemsLength; i++) {
      let extraClass = '';

      if (i === 0) {
        extraClass = 'active';
      }

      paginationContent += `
        <li class="page-item ${extraClass}" data-index="${i}">
          <button class="page-link">${i + 1}</button>
        </li>
      `;
    }

    this.#container.innerHTML = `
        <div class="d-flex justify-content-center gap-4 mt-2">
          <div>
            <button class="btn btn-secondary" data-component="previous" disabled>
              Previous
            </button>
          </div>

          <ul class="pagination" data-component="pagination">${paginationContent}</ul>

          <div>
            <button class="btn btn-primary" data-component="next">
              Next
            </button>
          </div>
        </div>`;

    this.#setup();
  }

  #setup() {
    // reset index
    this.#activeItemIndex = 0;

    this.#prevButton = this.#container.querySelector(
      '[data-component="previous"]'
    );
    this.#prevButton.addEventListener(
      'click',
      this.#onPreviousClicked.bind(this)
    );

    this.#nextButton = this.#container.querySelector('[data-component="next"]');
    this.#nextButton.addEventListener('click', this.#onNextClicked.bind(this));

    this.#paginationItems = this.#container.querySelectorAll('[data-index]');

    for (let i = 0; i < this.#paginationItems.length; i++) {
      let paginationItem = this.#paginationItems[i];

      paginationItem.addEventListener(
        'click',
        this.#onPaginationChanged.bind(this)
      );
    }
  }

  #onPreviousClicked() {
    this.#activeItemIndex -= 1;

    this.#updateActivePaginationItem();
  }

  #onNextClicked() {
    if (this.#activeItemIndex === this.#paginationItems.length - 1) {
      this.onSubmit();
    } else {
      this.#activeItemIndex += 1;

      this.#updateActivePaginationItem();
    }
  }

  #onPaginationChanged(event) {
    let paginationItem = event.target.closest('[data-index]');
    let paginationItemIndex = Number(paginationItem.getAttribute('data-index'));

    if (paginationItemIndex !== this.#activeItemIndex) {
      this.#activeItemIndex = paginationItemIndex;
      this.#updateActivePaginationItem();
    }
  }

  #updateActivePaginationItem() {
    for (let i = 0; i < this.#paginationItems.length; i++) {
      let paginationItem = this.#paginationItems[i];

      // make item that has its index matching #activeItemIndex "active"
      if (i === this.#activeItemIndex) {
        paginationItem.classList.add('active');
      } else {
        paginationItem.classList.remove('active');
      }
    }

    let lastPaginationItemIndex = this.#paginationItems.length - 1;

    if (this.#activeItemIndex === lastPaginationItemIndex) {
      this.#nextButton.innerHTML = 'Submit';
    } else {
      this.#nextButton.innerHTML = 'Next';
    }

    if (this.#activeItemIndex === 0) {
      this.#prevButton.disabled = true;
    } else {
      this.#prevButton.disabled = false;
    }

    this.onChange(this.#activeItemIndex);
  }

  destroy() {
    this.#container.innerHTML = '';
  }
}

export default QuizNavigation;
