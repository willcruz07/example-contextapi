import React from 'react';
import { Header } from '../Header';

import './styles.scss';

export const Layout: React.FC = ({ children }) => (
    <div className="containerLayout">
        <Header />
        <main>
            {children}
        </main>
    </div>
);
