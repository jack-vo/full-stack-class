import CountrySelection from './components/CountrySelection';
import './App.css';

const countries = [
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

function App() {
    const onCountrySelectionChange = (selectedCountry) => {
        alert(`Selected country is "${selectedCountry.name.common}"`);
    };

    return (
        <div className="container">
            <CountrySelection
                countries={countries}
                onChange={onCountrySelectionChange}
            />
        </div>
    );
}

export default App;
