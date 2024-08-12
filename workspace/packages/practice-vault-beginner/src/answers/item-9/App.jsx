import './App.css';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const onAddClick = () => {
        const newItem = items.length + 1;
        setItems([...items, newItem]);
    };
    const onRemoveClick = () => {
        const newItems = items.slice(0, -1);

        setItems(newItems);
    };

    return (
        <div className="container">
            <h2>Manage List Items</h2>
            <button onClick={onAddClick}>Insert new item</button>
            <button className="danger" onClick={onRemoveClick}>
                Remove last item
            </button>
            <ul className="list">
                {items.map((item, index) => (
                    <li className="item" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
