import { IProduct } from '../../models/product';

export enum EProduct {
    ADD_PRODUCT = '@product/ADD_PRODUCT',
    CLEAR_PRODUCT = '@product/CLEAR_PRODUCT',
}

interface IAddProducts {
    type: EProduct.ADD_PRODUCT,
    payload: IProduct[];
}

interface IDeleteProduct {
    type: EProduct.CLEAR_PRODUCT,
}

export type TProductsActions = IAddProducts | IDeleteProduct;

export interface IProductState {
    products: IProduct[];
}
