import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
    const [state, setState] = useState({
        colorChanged: false,
        sizeChanged: false,
        invisible: false,
    });
    const onColorButtonClick = () => {
        setState({
            ...state,
            colorChanged: !state.colorChanged,
        });
    };
    const onSizeButtonClick = () => {
        setState({
            ...state,
            sizeChanged: !state.sizeChanged,
        });
    };
    const onVisibleButtonClick = () => {
        setState({
            ...state,
            invisible: !state.invisible,
        });
    };
    const boxClassName = classNames(
        {
            red: state.colorChanged,
            larger: state.sizeChanged,
            hidden: state.invisible,
        },
        'box',
    );

    return (
        <>
            <div className="container">
                <button className="button" onClick={onColorButtonClick}>
                    Change the box background to "
                    {state.colorChanged ? 'default' : 'red'}"
                </button>
                <button className="button warning" onClick={onSizeButtonClick}>
                    {state.sizeChanged &&
                        'Make the box goes back to its default size'}
                    {!state.sizeChanged && 'Make the box becomes bigger'}
                </button>
                <button
                    className="button danger"
                    onClick={onVisibleButtonClick}
                >
                    {state.invisible ? 'Show' : 'Hide'} the box
                </button>
            </div>
            <div className={boxClassName}></div>
        </>
    );
}

export default App;
