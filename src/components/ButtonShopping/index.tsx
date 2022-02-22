import React, { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { useAppContext } from '../../hook/AppContext';

import './styles.scss';

interface IButtonShoppingProps {
    onClick: () => void;
}

export const ButtonShopping: React.FC<IButtonShoppingProps> = ({ onClick }) => {
    const [quantityInCart, setQuantityInCart] = useState(2);

    const { state } = useAppContext();

    return (
        <button
            className="buttonShopping"
            type="button"
            onClick={onClick}
        >
            <FaShoppingCart />
            {state.shoppingCart.quantity > 0 && (
                <div className="badge">
                    <span>{state.shoppingCart.quantity}</span>
                </div>
            )}
        </button>
    );
};
