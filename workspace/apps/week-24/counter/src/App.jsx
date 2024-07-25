import { useState } from 'react';
import './app.css';

function App(props) {
    const { min, max } = props;
    const [count, setCount] = useState(0);
    const onDecreaseClicked = () => {
        if (count > min) {
            setCount(count - 1);
        }
    };
    const onIncreaseClicked = () => {
        if (count < max) {
            setCount(count + 1);
        }
    };

    return (
        <div className="container">
            <div className="result">{count}</div>
            <div>
                <button className="button" onClick={onDecreaseClicked}>
                    -
                </button>
                <button className="button" onClick={onIncreaseClicked}>
                    +
                </button>
            </div>
            <div className="muted">
                Min: {min}
                Max: {max}
            </div>
        </div>
    );
}

export default App;
