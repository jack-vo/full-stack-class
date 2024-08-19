import './SmartCountrySelection.css';
import { find } from 'lodash';
import { useEffect, useState } from 'react';

function SmartCountrySelection(props) {
    const { onChange } = props;
    const [loading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState([]);

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

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setIsLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading countries...</div>;
    }

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

export default SmartCountrySelection;
