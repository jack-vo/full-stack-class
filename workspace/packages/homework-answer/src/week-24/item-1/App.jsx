import './App.css';

function App() {
    return (
        <form>
            <h1>About me</h1>
            <div className="input-field">
                <label>
                    Name
                    <input className="text-input" type="text" name="name" />
                </label>
            </div>
            <div className="input-field">
                <label>
                    Age
                    <input className="text-input" type="number" name="age" />
                </label>
            </div>
            <div className="input-field">
                <label>
                    DoB
                    <input className="text-input" type="date" name="dob" />
                </label>
            </div>

            <div className="input-field">
                <label>About me</label>
                <textarea name="about-me"></textarea>
            </div>

            <div className="input-field">
                <label>Gender</label>
                <select name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="input-field">
                <div>Hobbies</div>
                <div className="checkbox-field">
                    <label>
                        <input type="checkbox" name="hobbies" value="soccer" />{' '}
                        Soccer
                    </label>
                </div>
                <div className="checkbox-field">
                    <label>
                        <input
                            type="checkbox"
                            name="hobbies"
                            value="video-game"
                        />{' '}
                        Video game
                    </label>
                </div>
                <div className="checkbox-field">
                    <label>
                        <input type="checkbox" name="hobbies" value="sleep" />{' '}
                        Sleep
                    </label>
                </div>
            </div>

            <div className="input-field">
                Are you a code ninja?
                <label>
                    <input type="radio" name="codeninja" value="yes" />
                    Yes
                </label>
                <label>
                    <input type="radio" name="codeninja" value="no" />
                    No
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
