class Header {
    #container;

    constructor(container) {
        this.#container = container;
        this.#render();
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
}

export default Header;
