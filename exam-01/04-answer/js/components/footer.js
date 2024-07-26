class Footer {
    #container;

    constructor(container) {
        this.#container = container;
        this.#render();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="footer">
            <span class="todo-count">1 item left!</span>
            <ul class="filters">
                <li><button class="selected">All</button></li>
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </div>
        `;
    }
}
