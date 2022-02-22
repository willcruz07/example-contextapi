import React from 'react';
import './styles.scss';

interface IButtonProps {
    title: string;
    onClick: () => void;
    marginTop?: number;
    marginBottom?: number;
}

export const ButtonPrimary: React.FC<IButtonProps> = ({ onClick, title, marginBottom, marginTop }) => (
    <button
        style={{ marginBottom, marginTop }}
        className="buttonPrimary"
        type="button"
        onClick={onClick}
    >
        {title}
    </button>
);
