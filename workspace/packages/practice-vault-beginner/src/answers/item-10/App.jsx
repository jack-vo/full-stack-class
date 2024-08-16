import './App.css';
import { useState } from 'react';
import classNames from 'classnames';
import { times } from 'lodash';

function App() {
    const [itemCount, setItemCount] = useState(0);
    const [layout, setLayout] = useState('vertical');
    const listClassname = classNames('list', {
        'horizontal-layout': layout === 'horizontal',
    });
    const onLayoutButtonChange = () => {
        const newLayout = layout === 'vertical' ? 'horizontal' : 'vertical';

        setLayout(newLayout);
    };
    const onAddClick = () => {
        const newCount = itemCount + 1;
        setItemCount(newCount);
    };
    const onRemoveClick = () => {
        const newCount = itemCount - 1;

        if (newCount >= 0) {
            setItemCount(newCount);
        }
    };

    return (
        <div className="container">
            <h2>Manage List Items</h2>
            <div>
                <button onClick={onAddClick}>Insert</button>
                <button onClick={onRemoveClick} className="danger">
                    Remove
                </button>
            </div>

            <button className="warning" onClick={onLayoutButtonChange}>
                Change to "{layout === 'vertical' ? 'Horizontal' : 'Vertical'}"
                layout
            </button>
            <ul className={listClassname}>
                {times(itemCount, (index) => (
                    <li className="item" key={index}>
                        {index + 1}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
