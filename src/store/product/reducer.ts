import { EProduct, IProductState, TProductsActions } from './types';

export const productInitialState: IProductState = { products: [] };

export const productsReducer = (state: IProductState, action: TProductsActions): IProductState => {
    switch (action.type) {
        case EProduct.ADD_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };

        case EProduct.CLEAR_PRODUCT:
            return { ...productInitialState };

        default: return state;
    }
};
