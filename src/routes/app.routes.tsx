import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/app/home';

export const App: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Layout>
);
