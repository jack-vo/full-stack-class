class Footer {
    #container;
    #footer;
    #counter;
    #allFilters;
    #onFilterChange;
    #onClearCompleted;

    constructor(container, onFilterChange, onClearCompleted) {
        this.#container = container;
        this.#onFilterChange = onFilterChange;
        this.#onClearCompleted = onClearCompleted;
        this.#render();
        this.#setup();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="footer hidden">
            <span class="todo-count">1 item left!</span>
            <ul class="filters">
                <li><button class="selected" data-filter="all">All</button></li>
                <li><button data-filter="incompleted">Active</button></li>
                <li><button data-filter="completed">Completed</button></li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </div>
        `;
    }

    #setup() {
        this.#counter = this.#container.querySelector('.todo-count');
        this.#footer = this.#container.querySelector('.footer');

        this.#allFilters = this.#container.querySelectorAll('[data-filter]');

        for (let i = 0; i < this.#allFilters.length; i++) {
            this.#allFilters[i].addEventListener(
                'click',
                this.#onFilterTypeButtonClick,
            );
        }

        const clearCompletedButton =
            this.#container.querySelector('.clear-completed');

        clearCompletedButton.addEventListener(
            'click',
            this.#onClearCompletedClick,
        );
    }

    #onFilterTypeButtonClick = (event) => {
        const button = event.target;
        const filterType = button.getAttribute('data-filter');

        for (let i = 0; i < this.#allFilters.length; i++) {
            const currentFilterButton = this.#allFilters[i];

            if (currentFilterButton === button) {
                currentFilterButton.classList.add('selected');
            } else {
                currentFilterButton.classList.remove('selected');
            }
        }

        this.#onFilterChange(filterType);
    };

    #onClearCompletedClick = () => {
        this.#onClearCompleted();
    };

    updateCount(todos) {
        const incompletedItems = todos.filter((todo) => !todo.completed);

        this.#counter.innerHTML = `${incompletedItems.length} item left!`;

        if (todos.length) {
            this.#footer.classList.remove('hidden');
        } else {
            this.#footer.classList.add('hidden');
        }
    }
}

export default Footer;
