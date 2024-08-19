import './CountrySelection.css';
import { find } from 'lodash';

function CountrySelection(props) {
    const { countries, onChange } = props;

    if (!countries) {
        return <div>There is nothing to see</div>;
    }

    const onSelectChange = (event) => {
        if (onChange) {
            const selectedValue = event.target.value;
            const selectedCountry = find(
                countries,
                (country) => country.name.common === selectedValue,
            );

            onChange(selectedCountry);
        }
    };

    return (
        <select className="country-selection" onChange={onSelectChange}>
            {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                    {country.flag} {country.name.common}
                </option>
            ))}
        </select>
    );
}

export default CountrySelection;
