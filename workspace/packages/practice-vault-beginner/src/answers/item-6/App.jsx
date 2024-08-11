import { useState } from 'react';
import './App.css';

const rainbowColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
];

function App() {
    const [colorIndex, setColorIndex] = useState(0);
    const nextColorIndex =
        colorIndex + 1 < rainbowColors.length ? colorIndex + 1 : 0;
    const currentColor = rainbowColors[colorIndex];
    const nextColor = rainbowColors[nextColorIndex];
    const onButtonClick = () => {
        setColorIndex(nextColorIndex);
    };

    return (
        <div className={`container ${currentColor}`}>
            <button className="button" onClick={onButtonClick}>
                To <span className={nextColor}>{nextColor}</span>
            </button>
        </div>
    );
}

export default App;
