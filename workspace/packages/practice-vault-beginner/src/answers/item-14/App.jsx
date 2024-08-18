import './App.css';
import { useState } from 'react';

function App() {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const move = (direction) => {
        let { left, top } = position;

        if (direction === 'up') {
            top = top - 10;
        } else if (direction === 'right') {
            left = left + 10;
        } else if (direction === 'down') {
            top = top + 10;
        } else if (direction === 'left') {
            left = left - 10;
        }

        setPosition({ top, left });
    };

    return (
        <>
            <div className="control-container">
                <button className="button" onClick={() => move('up')}>
                    Up
                </button>
                <div>
                    <button className="button" onClick={() => move('left')}>
                        Left
                    </button>
                    <button className="button" onClick={() => move('down')}>
                        Down
                    </button>
                    <button className="button" onClick={() => move('right')}>
                        Right
                    </button>
                </div>
            </div>
            <div className="box-container">
                <div className="box" style={position} />
            </div>
        </>
    );
}

export default App;
