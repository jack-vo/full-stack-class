class CountrySelection {
  #container;
  #countries;
  #select;
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

    for (let i = 0; i < this.#countries.length; i++) {
      let country = this.#countries[i];
      items.push(
        `<option value="${country.name.common}">${country.flag} ${country.name.common}</option>`
      );
    }

    let allItemsContent = items.join('');

    this.#container.innerHTML = `<select class="country-selection">${allItemsContent}</select>`;
  }

  #setup() {
    this.#select = this.#container.querySelector('.country-selection');

    this.#select.addEventListener(
      'change',
      this.#onCountrySelectionChange.bind(this)
    );
  }

  #onCountrySelectionChange() {
    let selectedValue = this.#select.value;
    let selectedCountry;

    for (let i = 0; i < this.#countries.length; i++) {
      let country = this.#countries[i];

      if (country.name.common === selectedValue) {
        selectedCountry = country;
        break;
      }
    }

    this.#onChange(selectedCountry);
  }
}

export default CountrySelection;
