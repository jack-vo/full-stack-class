import React, { useState } from 'react';
import './App.css';

function App() {
    const [fullName, setFullName] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        const { firstname, lastname } = e.target.elements;

        setFullName(`${firstname.value} ${lastname.value}`);
    };

    return (
        <div className="container">
            <h2>Enter Your Names</h2>

            <form onSubmit={onSubmit}>
                <input type="text" placeholder="First Name" name="firstname" />
                <input type="text" placeholder="Last Name" name="lastname" />
                <button type="submit">Show Full Name</button>
            </form>

            <div className="fullname">{fullName}</div>
        </div>
    );
}

export default App;
