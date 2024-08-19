import SmartCountrySelection from './components/SmartCountrySelection';
import './App.css';

function App() {
    const onCountrySelectionChange = (selectedCountry) => {
        alert(`Selected country is "${selectedCountry.name.common}"`);
    };

    return (
        <div className="container">
            <SmartCountrySelection onChange={onCountrySelectionChange} />
        </div>
    );
}

export default App;
