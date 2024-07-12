class SmartCountrySelection {
  #container;
  #countries;
  #select;
  #onChange;

  constructor(container, onChange) {
    this.#container = container;
    this.#onChange = onChange;

    this.#loadCountries();
  }

  #loadCountries() {
    this.#container.innerHTML = '<div>Loading countries ...</div>';
    fetch('https://restcountries.com/v3.1/all')
      .then(function (response) {
        return response.json();
      })
      .then(
        function (countries) {
          this.#countries = countries;
          this.#render();
          this.#setup();
        }.bind(this)
      );
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

export default SmartCountrySelection;
