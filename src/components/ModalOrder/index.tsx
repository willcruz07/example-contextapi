/* eslint-disable array-callback-return */
import React from 'react';
import Modal from 'react-modal';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { IProductToCart, IShoppingCart } from '../../models/shoppingCart';
import { formattedCurrency } from '../../utils/LIB';
import './styles.scss';
import { useAppContext } from '../../hook/AppContext';
import { deleteProduct } from '../../store/shoppingCart/actions';

interface IModalProps {
    modalIsOpen: boolean;
    onRequestClose: () => void;
}

const shoppingCart: IShoppingCart = {
    products: [
        {
            id: '1',
            name: 'Moto G60',
            imageUri: 'https://http2.mlstatic.com/D_NQ_NP_2X_811442-MLA48157804490_112021-F.webp',
            quantity: 2,
            price: 1900,
        },
        {
            id: '2',
            name: 'Moto G60',
            imageUri: 'https://http2.mlstatic.com/D_NQ_NP_2X_811442-MLA48157804490_112021-F.webp',
            quantity: 1,
            price: 1900,
        },
        {
            id: '3',
            name: 'Moto G60',
            imageUri: 'https://http2.mlstatic.com/D_NQ_NP_2X_811442-MLA48157804490_112021-F.webp',
            quantity: 3,
            price: 1900,
        },

    ],
    total: 5700,
    quantity: 3,
};

export const ModalOrder: React.FC<IModalProps> = ({ modalIsOpen, onRequestClose }) => {
    const { state, dispatch } = useAppContext();

    const handleRemoveProductFromCart = (product: IProductToCart) => {        
        dispatch(deleteProduct(product));
    };

    return (
    <Modal
        ariaHideApp={false}
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
    >
        <div className="containerModal">
            <div className="header">
                <h1 className="titleOrder">Pedido</h1>
                <FaTimes
                    onClick={onRequestClose}
                    className="iconClose"
                />

            </div>
            <div className="content">
                {state.shoppingCart.products.map((product) => (
                    <div onClick={() => handleRemoveProductFromCart(product)} key={product.id} className="containerProduct">
                        <span className="product">{`${product.quantity}x ${product.name} - ${formattedCurrency(product.price * product.quantity)}`}</span>
                        <FaTrash className="iconTrash" />
                    </div>
                ))}
            </div>
            <h1 className="totalOrder">{`Total: ${formattedCurrency(state.shoppingCart.total)}`}</h1>
        </div>
    </Modal>
)
};
