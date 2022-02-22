import { IProductToCart } from "../../models/shoppingCart";
import { EShoppingCart, TShoppingCartActions } from "./types";

export const addProduct = (product: IProductToCart): TShoppingCartActions => ({
    type: EShoppingCart.ADD_PRODUCT,
    payload: product,
});

export const deleteProduct = (product: IProductToCart): TShoppingCartActions => ({
    type: EShoppingCart.DELETE_PRODUCT,
    payload: product,
})