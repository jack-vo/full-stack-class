import Header from './components/header';

class TodoApp {
    #container;
    #header;
    #list;
    #footer;

    constructor(container) {
        this.#container = container;

        this.#render();
        this.#setup();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="todoapp">
            <div data-component="header"></div>
            <div data-component="list"></div>
            <div data-component="footer"></div>
        </div>`;
    }

    #setup() {
        this.#header = new Header(
            document.querySelector('[data-component="header"]'),
        );
        this.#list = new Header(
            document.querySelector('[data-component="list"]'),
        );
        this.#footer = new Header(
            document.querySelector('[data-component="footer"]'),
        );
    }
}

export default TodoApp;
