import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './styles.scss';

interface IButtonProps {
  value: number;
  onAction: (value: number) => void;
}

export const ButtonQuantity: React.FC<IButtonProps> = ({ onAction, value }) => {
    const handleChangeAdd = () => {
        onAction(value + 1);
    };

    const handleChangeSubtract = () => {
        onAction(value - 1);
    };

    return (
        <div className="containerButtonQuantity">
            <button type="button" disabled={value === 1} onClick={() => handleChangeSubtract()}>
                <FaMinus />
            </button>
            <span>
                {value}
            </span>
            <button type="button" onClick={() => handleChangeAdd()}>
                <FaPlus />
            </button>
        </div>
    );
};
