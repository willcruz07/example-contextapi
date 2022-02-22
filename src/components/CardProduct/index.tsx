import React, { useState } from 'react';
import { IProduct } from '../../models/product';
import { formattedCurrency } from '../../utils/LIB';
import { ButtonPrimary } from '../ButtonPrimary';
import { ButtonQuantity } from '../ButtonQuantity';

import './styles.scss';

interface ICardProduct extends IProduct {}

export const CardProduct: React.FC<ICardProduct> = ({ name, imageUri, price }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="containerProduct">
            <img className="containerImage" src={imageUri} alt={name} />
            <ButtonQuantity
                value={quantity}
                onAction={setQuantity}
            />
            <div className="containerDescription">
                <span className="description">{name}</span>
                <span className="price">{formattedCurrency(price * quantity)}</span>
                <ButtonPrimary
                    title="Adicionar"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
};
