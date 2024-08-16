import './App.css';
import { useState } from 'react';
import { times } from 'lodash';

function App() {
    const [number, setNumber] = useState(0);
    const onFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const submittedFormData = Object.fromEntries(formData);
        const newNumber = Number(submittedFormData.number);

        if (newNumber < 0) {
            setNumber(0);
        } else {
            setNumber(newNumber);
        }
    };

    return (
        <div className="container">
            <h2>List of Names</h2>
            <form className="form" onSubmit={onFormSubmit}>
                <input
                    className="input"
                    min="0"
                    max="999"
                    placeholder="Number"
                    type="number"
                    name="number"
                />
                <button className="button" type="submit">
                    Print
                </button>
            </form>
            <ul className="list">
                {times(number, (index) => (
                    <li className="list-item" key={index}>
                        {index + 1}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
