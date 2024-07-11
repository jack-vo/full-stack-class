class Counter {
  #container;
  #options;
  #increaseBtn;
  #decreaseBtn;
  #resultText;
  #count;

  constructor(container, options) {
    this.#container = container;
    this.#options = options;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
        <div class="container">
            <div class="result">0</div>
            <div>
                <button class="button" data-component="decrease">-</button>
                <button class="button" data-component="increase">+</button>
            </div>
            <div class="muted">
                Min: ${this.#options.min}
                Max: ${this.#options.max}
            </div>
        </div>`;
  }

  #setup() {
    this.#count = 0;
    this.#increaseBtn = this.#container.querySelector(
      '[data-component="increase"]'
    );
    this.#decreaseBtn = this.#container.querySelector(
      '[data-component="decrease"]'
    );
    this.#resultText = this.#container.querySelector('.result');
    this.#increaseBtn.addEventListener('click', this.#onIncrease.bind(this));
    this.#decreaseBtn.addEventListener('click', this.#onDecrease.bind(this));
  }

  #onIncrease() {
    if (this.#count + 1 <= this.#options.max) {
      this.#count++;
      this.#resultText.innerHTML = this.#count;
    }
  }

  #onDecrease() {
    if (this.#count - 1 >= this.#options.min) {
      this.#count--;
      this.#resultText.innerHTML = this.#count;
    }
  }
}

export default Counter;
