class Header {
    #container;
    #textInput;
    #selectAllCheckbox;
    #onAddNewTodo;
    #onSelectAllChange;

    constructor(container, onAddNewTodo, onSelectAllChange) {
        this.#container = container;
        this.#onAddNewTodo = onAddNewTodo;
        this.#onSelectAllChange = onSelectAllChange;
        this.#render();
        this.#setup();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="header">
            <h1>todos</h1>
            <input class="toggle-all" type="checkbox">
            <input class="new-todo" type="text" placeholder="What needs to be done?">
        </div>
        `;
    }

    #setup() {
        this.#textInput = this.#container.querySelector('.new-todo');
        this.#selectAllCheckbox = this.#container.querySelector('.toggle-all');

        this.#textInput.addEventListener('keyup', this.#onTextInputKeyUp);
        this.#selectAllCheckbox.addEventListener(
            'change',
            this.#onSelectAllChange,
        );
    }

    #onTextInputKeyUp = (event) => {
        const { key } = event;

        if (key === 'Enter') {
            const { value } = this.#textInput;

            if (value) {
                this.#onAddNewTodo(value);

                this.#textInput.value = '';
            } else {
                alert('Todo item content can not be empty!');
            }
        }
    };

    #onSelectAllCheckboxChange = () => {
        const { checked } = this.#selectAllCheckbox;

        this.#onSelectAllChange(checked);
    };
}

export default Header;
