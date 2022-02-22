import { combineReducer } from "../utils/LIB";
import { productInitialState, productsReducer } from "./product/reducer";
import { shoppingCartInitialState, shoppingCartReducer } from "./shoppingCart/reducer";

export const mainReducers = combineReducer({
    shoppingCart: shoppingCartReducer,
    products: productsReducer,
})

export const mainInitialState = {
    shoppingCart: shoppingCartInitialState,
    products: productInitialState,
}