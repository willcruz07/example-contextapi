import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SingIn } from '../pages/auth/SingIn';

export const Auth: React.FC = () => (
    <Routes>
        <Route path="/" element={<SingIn />} />
    </Routes>
);
