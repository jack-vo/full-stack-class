import './App.css';
import { useState } from 'react';

function App() {
    const [profileData, setProfileData] = useState(null);
    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const submittedProfileData = Object.fromEntries(formData);

        setProfileData(submittedProfileData);
    };

    return (
        <div className="container">
            {!!profileData && (
                <div className="card" data-component="profile-details">
                    <h2 className="card-title">Profile details</h2>
                    <div className="card-body">
                        <div className="col">
                            <img className="avatar" src={profileData.avatar} />
                            <div>
                                <p>
                                    <span className="label">Name:</span>
                                    {profileData.firstname}{' '}
                                    {profileData.lastname}
                                </p>
                                <p>
                                    <span className="label">Age:</span>
                                    {profileData.age}
                                </p>
                                <p>
                                    <span className="label">Occupation:</span>
                                    {profileData.occupation}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="card">
                <h2 className="card-title">Enter and Submit Your Details</h2>
                <form className="card-body" onSubmit={onFormSubmit}>
                    <div className="col">
                        <div>
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="First Name"
                                name="firstname"
                            />
                        </div>
                        <div>
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastname"
                                className="form-input"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <label>Age</label>
                            <input
                                type="number"
                                className="form-input"
                                name="age"
                                min="0"
                                max="100"
                                placeholder="Age"
                            />
                        </div>
                        <div>
                            <label>Occupation</label>
                            <input
                                type="text"
                                name="occupation"
                                className="form-input"
                                placeholder="Occupation"
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label>Avatar URL</label>
                            <input
                                type="text"
                                name="avatar"
                                className="form-input"
                                placeholder="https://..."
                            />
                        </div>
                    </div>

                    <div>
                        <button className="submit-button" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
