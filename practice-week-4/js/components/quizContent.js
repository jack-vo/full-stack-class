class QuizContent {
  #container;
  #allAnswers;
  #data;
  #onChange;

  constructor(container, onChange) {
    this.#container = container;
    this.#onChange = onChange;
  }

  setQuizData(data) {
    this.#data = data;

    let allQuestionsContent = this.#buildQuestionContent();

    this.#container.innerHTML = `
      <h1 class="mb-4">${this.#data.title}</h1>
      <div data-component="content" class="mb-3">
        ${allQuestionsContent}
      </div>`;

    this.#setup();
    this.setActiveItem(0);
  }

  #buildQuestionContent() {
    let items = this.#data.items;
    let content = '';

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      let currentItem = items[itemIndex];
      let question = currentItem.question;
      let answers = currentItem.answers;
      let answersContent = '';

      for (let answerIndex = 0; answerIndex < answers.length; answerIndex++) {
        let currentAnswer = answers[answerIndex];

        answersContent += `<button class="btn btn-outline-secondary d-block" data-answer="${answerIndex}">${currentAnswer.text}</button>`;
      }

      content += `
        <div class="d-none" data-item="${itemIndex}">
          <div class="mb-3">
            <span class="fw-bold">Question ${itemIndex + 1}.</span> ${question}
          </div>
          <div class="mb-3 d-flex flex-column gap-3 w-100">${answersContent}</div>
        </div>
      `;
    }

    return content;
  }

  #setup() {
    this.#allAnswers = this.#container.querySelectorAll('[data-answer]');

    for (let i = 0; i < this.#allAnswers.length; i++) {
      let currentElement = this.#allAnswers[i];

      currentElement.addEventListener(
        'click',
        this.#onAnswerSelected.bind(this)
      );
    }
  }

  #onAnswerSelected(event) {
    let answerElement = event.target;
    let parentItemContainer = answerElement.closest('[data-item]');
    let itemIndex = parentItemContainer.getAttribute('data-item');

    itemIndex = Number(itemIndex);

    let currentQuizItem = this.#data.items[itemIndex];
    let answers = currentQuizItem.answers;
    let selectedAnswerIndex = Number(answerElement.getAttribute('data-answer'));
    let selectedAnswer = answers[selectedAnswerIndex];

    // disable all answer elements inside the current item
    let allItemAnswers = parentItemContainer.querySelectorAll('[data-answer]');

    for (let i = 0; i < allItemAnswers.length; i++) {
      let element = allItemAnswers[i];

      element.disabled = true;
    }

    // Update answer style
    answerElement.classList.remove('btn-outline-secondary');

    // Update icon to the selected answer
    let icon = document.createElement('i');

    icon.classList.add('bi', 'ms-2');

    if (selectedAnswer.correct) {
      answerElement.classList.add('btn-success');
      icon.classList.add('bi-check-circle-fill');
    } else {
      answerElement.classList.add('btn-danger');
      icon.classList.add('bi-exclamation-circle-fill');
    }

    answerElement.append(icon);

    // notify the selection to outer component
    let data = {
      itemIndex: itemIndex,
      answerIndex: selectedAnswerIndex,
      correct: selectedAnswer.correct,
    };

    this.#onChange(data);
  }

  setActiveItem(itemIndex) {
    let allItemContainers = this.#container.querySelectorAll('[data-item]');

    for (let i = 0; i < allItemContainers.length; i++) {
      let itemContainer = allItemContainers[i];

      if (i === itemIndex) {
        itemContainer.classList.remove('d-none');
      } else {
        itemContainer.classList.add('d-none');
      }
    }
  }

  destroy() {
    this.#container.innerHTML = '';
  }
}

export default QuizContent;
