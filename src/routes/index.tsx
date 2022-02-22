import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app.routes';
import { Auth } from './auth.routes';

export const Routes: React.FC = () => {
    const signed = true;

    return (
        <BrowserRouter>
            {signed ? <App /> : <Auth />}
        </BrowserRouter>
    );
};
