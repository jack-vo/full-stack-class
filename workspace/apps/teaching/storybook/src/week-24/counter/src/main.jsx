import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root');
const appRoot = ReactDOM.createRoot(container);

appRoot.render(
    <React.StrictMode>
        <App min={0} max={10} />
    </React.StrictMode>,
);
