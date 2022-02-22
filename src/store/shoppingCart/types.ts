import { IProductToCart, IShoppingCart } from "../../models/shoppingCart";

export enum EShoppingCart {
    ADD_PRODUCT = "@shoppingCart/ADD_PRODUCT",
    DELETE_PRODUCT = "@shoppingCart/DELETE_PRODUCT"
}

interface IAddProduct {
    type: EShoppingCart.ADD_PRODUCT,
    payload: IProductToCart;
}

interface IDeleteProduct {
    type: EShoppingCart.DELETE_PRODUCT,
    payload: IProductToCart;
}

export type TShoppingCartActions = IAddProduct | IDeleteProduct;

export interface IShoppingCartState extends IShoppingCart {}