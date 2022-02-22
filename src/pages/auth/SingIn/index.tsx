import React, { useState } from 'react';
import { ButtonPrimary } from '../../../components/ButtonPrimary';
import { Input } from '../../../components/Input';
import { Logo } from '../../../components/Logo';
import './styles.scss';

export const SingIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingIn = () => {
        alert('Entrou');
    };

    return (
        <div className="containerSingIn">
            <div className="singIn">
                <div className="containerLogo">
                    <Logo
                        size="large"
                    />
                </div>
                <form className="containerInputs">
                    <Input
                        type="text"
                        icon="user"
                        value={email}
                        onChange={setEmail}
                    />

                    <Input
                        type="password"
                        marginTop={16}
                        icon="lock"
                        value={password}
                        onChange={setPassword}
                    />

                    <ButtonPrimary
                        marginTop={32}
                        title="Entrar"
                        onClick={() => handleSingIn()}
                    />
                </form>
            </div>
        </div>
    );
};
