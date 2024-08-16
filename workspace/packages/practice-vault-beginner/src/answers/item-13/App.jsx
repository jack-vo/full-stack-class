import './App.css';
import { useState } from 'react';

function App() {
    const [profiles, setProfiles] = useState([]);
    const onPrintProfilesClick = () => {
        setProfiles([
            {
                fullName: 'Alice Johnson',
                gender: 'Female',
                occupation: 'Web Developer',
                avatar: {
                    images: {
                        large: 'https://t3.ftcdn.net/jpg/05/98/48/88/360_F_598488869_fiLUgajDxyaoxE9D3SuHMZfD56IjrBXe.jpg',
                    },
                },
            },
            {
                fullName: 'Bob Smith',
                gender: 'Male',
                occupation: 'Graphic Designer',
                avatar: {
                    images: {
                        large: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                    },
                },
            },
            {
                fullName: 'Carol White',
                gender: 'Female',
                occupation: 'Project Manager',
                avatar: {
                    images: {
                        large: 'https://t3.ftcdn.net/jpg/05/98/48/88/360_F_598488869_fiLUgajDxyaoxE9D3SuHMZfD56IjrBXe.jpg',
                    },
                },
            },
            {
                fullName: 'Dave Brown',
                gender: 'Male',
                occupation: 'Software Engineer',
                avatar: {
                    images: {
                        large: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                    },
                },
            },
        ]);
    };

    return (
        <>
            <div className="container shadow">
                <h2>List of Profiles</h2>
                <button className="button" onClick={onPrintProfilesClick}>
                    Print Profiles
                </button>
            </div>
            <ul className="list">
                {profiles.map((profile, index) => (
                    <li className="list-item shadow">
                        <img src={profile.avatar.images.large} />
                        <div className="list-item-content">
                            <div>
                                <span className="label">Name</span>
                                {profile.fullName}
                            </div>
                            <div>
                                <span className="label">Gender</span>
                                {profile.gender}
                            </div>
                            <div>
                                <span className="label">Occupation</span>
                                {profile.occupation}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
