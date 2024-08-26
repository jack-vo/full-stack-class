import './App.css';
import { useState } from 'react';

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black'];

function App() {
    const [currentColor, setCurrentColor] = useState('');
    const onButtonClick = (color) => {
        setCurrentColor(color);
    };

    return (
        <div className={`container ${currentColor}`}>
            <div className="buttons">
                {colors.map((color) => (
                    <button
                        key={color}
                        className={`button ${color}`}
                        onClick={() => onButtonClick(color)}
                    >
                        {color}
                    </button>
                ))}
            </div>
            <h1>Current color is: "{currentColor}"</h1>
        </div>
    );
}

export default App;
