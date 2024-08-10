import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AdvancedTasks from './components/AdvancedTasks.jsx';
import Counter from './components/Counter.jsx';

function App() {
    const items = [
        { content: 'Go for a walk', completed: false },
        { content: 'Have a good 1hour nap', completed: true },
        { content: 'Game whole night', completed: true },
    ];

    return (
        <div className="container">
            <Header title="Tasks of the day" />
            <div>
                <Tasks>
                    <ul>
                        <li>Had a good diet meal</li>
                        <li>Completed today coding class</li>
                    </ul>
                </Tasks>
            </div>
            <div>
                <AdvancedTasks items={items} />
            </div>
            <div>
                <Counter />
            </div>
        </div>
    );
}

export default App;
