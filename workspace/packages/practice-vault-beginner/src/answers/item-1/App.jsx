import React from 'react';
import './App.css';

function App() {
    const onClick = () => {
        alert('Button clicked');
    };

    return (
        <div className="container">
            <button className="button" onClick={onClick}>
                Click me to open an alert
            </button>
        </div>
    );
}

export default App;
