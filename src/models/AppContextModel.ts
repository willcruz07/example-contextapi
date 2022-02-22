import React from "react";
import { IProductState, TProductsActions } from "../store/product/types";
import { IShoppingCartState, TShoppingCartActions } from "../store/shoppingCart/types";

interface IAppState {
    shoppingCart: IShoppingCartState,    
    products: IProductState,
}

type TAppActions = TShoppingCartActions | TProductsActions;

export interface IAppContextModel {
    state: IAppState,
    dispatch: React.Dispatch<TAppActions>
}