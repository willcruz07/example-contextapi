import { IProduct } from '../../models/product';
import { EProduct, TProductsActions } from './types';

export const addProduct = (product: IProduct[]): TProductsActions => ({
    type: EProduct.ADD_PRODUCT,
    payload: product,
});

export const clearProduct = (): TProductsActions => ({ type: EProduct.CLEAR_PRODUCT });
