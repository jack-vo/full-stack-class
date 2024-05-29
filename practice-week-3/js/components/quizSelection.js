import { quizList } from '../constants/index.js';

class QuizSelection {
  #container;
  #select;

  constructor(container) {
    this.#container = container;
    this.#render();
  }

  #render() {
    let options = '';

    for (let i = 0; i < quizList.length; i++) {
      let currentQuizItem = quizList[i];

      options += `<option value="${currentQuizItem.value}">${currentQuizItem.title}</option>`;
    }

    this.#container.innerHTML = `
        <select class="form-select d-inline-block w-auto mb-5">
            <option>-- Select a quiz --</option>
            ${options}
        </select>
    `;
    this.#select = this.#container.querySelector('select');
    this.#select.addEventListener('change', this.#onSelectChange.bind(this));
  }

  #onSelectChange() {
    let selectedValue = this.#select.value;

    // Disable first option so they can't select it
    this.#select.querySelector('option').disabled = true;

    this.onChange(selectedValue);
  }

  destroy() {
    this.#container.innerHTML = '';
  }
}

export default QuizSelection;
