import CountrySelection from './countrySelection.js';

let countries = [
  {
    name: {
      common: 'Australia',
    },
    flag: '🇦🇺',
  },
  {
    name: {
      common: 'Germany',
    },
    flag: '🇩🇪',
  },
  {
    name: {
      common: 'Japan',
    },
    flag: '🇯🇵',
  },
];

let onCountrySelectionChange = function (selectedCountry) {
  alert(`Selected country is "${selectedCountry.name.common}"`);
};
let countrySelection = new CountrySelection(
  document.querySelector('#app'),
  countries,
  onCountrySelectionChange
);
