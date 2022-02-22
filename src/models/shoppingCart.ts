import { IProduct } from './product';

interface IProductToCart extends IProduct {
    quantity: number;
}

export interface IShoppingCart {
    products: IProductToCart[];
    total: number;
    quantity: number;
}
