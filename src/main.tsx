import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';
import { Routes } from './routes';
import { AppProvider } from './hook/AppContext';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Routes />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
