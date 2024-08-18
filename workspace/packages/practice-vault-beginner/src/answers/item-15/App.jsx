import './App.css';
import { useEffect, useRef, useState } from 'react';

const acceptedKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];

function App() {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const boxContainerRef = useRef();
    const boxRef = useRef();
    const move = (direction) => {
        setPosition((prevPosition) => {
            let { left, top } = prevPosition;
            let boxContainerWidth = boxContainerRef.current?.clientWidth;
            let boxContainerHeight = boxContainerRef.current?.clientHeight;
            let boxSize = boxRef.current?.clientWidth;

            if (direction === 'up') {
                top = top - 10;
            } else if (direction === 'right') {
                left = left + 10;
            } else if (direction === 'down') {
                top = top + 10;
            } else if (direction === 'left') {
                left = left - 10;
            }

            // Check if the new position is valid or not
            // if not, reset it to the last possible values
            if (left < 0) {
                left = 0;
            } else if (left + boxSize > boxContainerWidth) {
                left = boxContainerWidth - boxSize;
            }

            if (top < 0) {
                top = 0;
            } else if (top + boxSize > boxContainerHeight) {
                top = boxContainerHeight - boxSize;
            }

            return { top, left };
        });
    };
    const onKeydown = (event) => {
        const { key } = event;

        if (acceptedKeys.includes(key)) {
            const direction = key.toLowerCase().replace('arrow', '');

            move(direction);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
    }, []);

    return (
        <div className="box-container" ref={boxContainerRef}>
            <div className="box" style={position} ref={boxRef} />
        </div>
    );
}

export default App;
