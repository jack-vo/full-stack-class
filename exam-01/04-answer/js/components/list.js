class List {
    #container;

    constructor(container) {
        this.#container = container;
        this.#render();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="main">
            <ul class="todo-list">
                <li>
                    <input class="toggle" type="checkbox">
                    <input class="item" type="text" value="abc">
                    <button class="destroy"></button>
                </li>
                <li>
                    <input class="toggle" type="checkbox">
                    <input class="item" type="text" value="abc">
                    <button class="destroy"></button>
                </li>
            </ul>
        </div>
        `;
    }
}
