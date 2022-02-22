import React, { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import './styles.scss';

interface IButtonShoppingProps {
    onClick: () => void;
}

export const ButtonShopping: React.FC<IButtonShoppingProps> = ({ onClick }) => {
    const [quantityInCart, setQuantityInCart] = useState(0);

    return (
        <button
            className="buttonShopping"
            type="button"
            onClick={onClick}
        >
            <FaShoppingCart />
            {quantityInCart > 0 && (
                <div className="badge">
                    <span>{quantityInCart}</span>
                </div>
            )}
        </button>
    );
};
