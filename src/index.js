import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './View';

ReactDOM.render(
    <React.StrictMode>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
