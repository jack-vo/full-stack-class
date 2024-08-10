import React, { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');
    const onClick = () => {
        setValue('A button is clicked');
    };

    return (
        <div className="container">
            <input type="text" className="input" value={value} />
            <button className="button" onClick={onClick}>
                Click me to change the input value
            </button>
        </div>
    );
}

export default App;
