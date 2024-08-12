import './App.css';
import { useState } from 'react';

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software engineer',
};

function App() {
    const [detailVisible, setDetailVisible] = useState(false);
    const onButtonClicked = () => {
        const newDetailVisible = !detailVisible;

        setDetailVisible(newDetailVisible);
    };

    return (
        <div className="card">
            <h2 className="card-title">Person Details</h2>
            <div className="card-body">
                {detailVisible && (
                    <>
                        <p>
                            <span className="label">Name:</span>
                            {person.firstName} {person.lastName}
                        </p>
                        <p>
                            <span className="label">Age:</span> {person.age}
                        </p>
                        <p>
                            <span className="label">Occupation:</span>
                            {person.occupation}
                        </p>
                    </>
                )}
                {!detailVisible && 'Content hidden'}
            </div>
            <div className="card-footer" onClick={onButtonClicked}>
                <button>{detailVisible ? 'Hide' : 'Show'} Details</button>
            </div>
        </div>
    );
}

export default App;
