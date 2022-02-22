import { IProduct } from './product';

export interface IProductToCart extends IProduct {
    quantity: number;
}

export interface IShoppingCart {
    products: IProductToCart[];
    total: number;
    quantity: number;
}
