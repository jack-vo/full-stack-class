import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';

function App() {
    const [limit, setLimit] = useState({ min: 0, max: 10 });
    const onMinChange = (event) => {
        const { value } = event.target;

        setLimit({
            ...limit,
            min: parseInt(value),
        });
    };
    const onMaxChange = (event) => {
        const { value } = event.target;

        setLimit({
            ...limit,
            max: parseInt(value),
        });
    };

    return (
        <div className="container">
            <div className="input-container">
                <label>
                    Min:{' '}
                    <input
                        type="number"
                        value={limit.min}
                        onChange={onMinChange}
                    />
                </label>
                <label>
                    Max:{' '}
                    <input
                        type="number"
                        value={limit.max}
                        onChange={onMaxChange}
                    />
                </label>
            </div>

            <Counter min={limit.min} max={limit.max} />
        </div>
    );
}

export default App;
