import './App.css';
import { useState } from 'react';

function App() {
    const [names, setNames] = useState([]);
    const onPrintNamesClick = () => {
        setNames(['Alice', 'Bob', 'Charlie', 'Diana', 'Edward']);
    };

    return (
        <>
            <div className="container shadow">
                <h2>List of Names</h2>
                <button className="button" onClick={onPrintNamesClick}>
                    Print Names
                </button>
            </div>
            <ul className="list">
                {names.map((name, index) => (
                    <li className="list-item shadow" key={index}>
                        {name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
