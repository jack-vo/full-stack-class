class CounterApp {
  #container;
  #count;
  constructor(container) {
    this.#container = container;
    this.#count = 0;

    this.#render();
  }

  #render() {
    this.#container.innerHTML = `
        <div class="counter-app">
            <h1>Simple Counter</h1>
            <div class="counter-app-display" data-component="display">0</div>
            <button data-component="increase">+ Increase</button>
            <button data-component="decrease">- Decrease</button>
            <button data-component="reset">Reset</button>
        </div>`;

    this.#container
      .querySelector('[data-component="increase"]')
      .addEventListener('click', this.#onIncrease.bind(this));
    this.#container
      .querySelector('[data-component="decrease"]')
      .addEventListener('click', this.#onDecrease.bind(this));
  }

  #onIncrease() {
    this.#count++;
    this.#updateDisplay();
  }

  #onDecrease() {
    this.#count--;
    this.#updateDisplay();
  }

  #updateDisplay() {
    let display = this.#container.querySelector('[data-component="display"]');

    display.innerHTML = this.#count;
  }
}

const appContainer = document.querySelector('#app');

const counterApp = new CounterApp(appContainer);
