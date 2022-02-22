/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { CardProduct } from '../../../components/CardProduct';
import { useAppContext } from '../../../hook/AppContext';
import { IProduct } from '../../../models/product';
import { addProduct } from '../../../store/product/actions';

import './styles.scss';

const listProduct:IProduct[] = [
    {
        id: '1',
        name: 'Moto G60',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_2X_811442-MLA48157804490_112021-F.webp',
        price: 1900,
    },
    {
        id: '2',
        name: 'Notebook Lenovo',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_2X_689984-MLB46711037069_072021-F.webp',
        price: 3000,
    },
    {
        id: '3',
        name: 'Mouse sem fio',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_2X_938725-MLB46008271415_052021-F.webp',
        price: 99,
    },
    {
        id: '4',
        name: 'Furadeira Makita',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_976168-MLB46007996604_052021-O.webp',
        price: 780,
    },
    {
        id: '5',
        name: 'Mesa gamer',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_919401-MLB43250493011_082020-O.webp',
        price: 290,
    },

    {
        id: '6',
        name: 'Cadeira gamer',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_990087-MLB46868420289_072021-O.webp',
        price: 900,
    },
    {
        id: '7',
        name: 'Tv Smart 32"',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_742795-MLB48352831872_112021-O.webp',
        price: 1900,
    },
    {
        id: '8',
        name: 'Moto E20',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_974266-MLA48254501676_112021-O.webp',
        price: 1450,
    },
    {
        id: '9',
        name: 'Bike Ksvj',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_777801-MLB47902101250_102021-O.webp',
        price: 950,
    },
    {
        id: '10',
        name: 'Carregador portátil',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_751304-MLB47711385393_092021-O.webp',
        price: 220,
    },

    {
        id: '11',
        name: 'Samsung Galaxy A21',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_693122-MLA47202891061_082021-O.webp',
        price: 1100,
    },
    {
        id: '12',
        name: 'Capinha Iphone',
        imageUri: 'https://http2.mlstatic.com/D_NQ_NP_850235-MLB48949420126_012022-O.webp',
        price: 45,
    },

];

export const Home: React.FC = () => {

    const { state, dispatch } = useAppContext();
    
    useEffect(() => {
        dispatch(addProduct(listProduct));
    }, []);
    
    if (!listProduct) return <span>Loading...</span>;

    return (
        <div className="containerProductsGrid">
            {state.products.products.map((product) => (
                <CardProduct
                    key={product.id}
                    name={product.name}
                    imageUri={product.imageUri}
                    price={product.price}
                />
            ))}
        </div>
    ); 
};
