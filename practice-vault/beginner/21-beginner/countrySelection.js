class CountrySelection {
    #container;
    #countries;
    #onChange;

    constructor(container, countries, onChange) {
        this.#container = container;
        this.#countries = countries;
        this.#onChange = onChange;

        this.#render();
        this.#setup();
    }

    #render() {
        let items = [];

        
    }

    #setup() {

    }
}

export default CountrySelection;