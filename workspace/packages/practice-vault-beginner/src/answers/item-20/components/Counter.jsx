import { useState } from 'react';
import './Counter.css';

function Counter(props) {
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
        <div className="counter">
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
                <div>Min: {min}</div>
                <div>Max: {max}</div>
            </div>
        </div>
    );
}

export default Counter;
