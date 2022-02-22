import { EShoppingCart, IShoppingCartState, TShoppingCartActions } from "./types";

const getStorage = () => {
    const storage = localStorage.getItem('shoppingCart');
    return JSON.parse(storage as string);
}

export const shoppingCartInitialState: IShoppingCartState = getStorage() || {
    products: [],
    quantity: 0,
    total: 0,
}

export const shoppingCartReducer = (state: IShoppingCartState, action: TShoppingCartActions): IShoppingCartState => {
    switch (action.type) {
        case EShoppingCart.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                quantity: state.quantity + action.payload.quantity,
                total: state.total + (action.payload.price * action.payload.quantity),
            };            

        case EShoppingCart.DELETE_PRODUCT: 
            return {
                ...state,
                products: state.products.filter((product) => product !== action.payload),
                quantity: state.quantity - action.payload.quantity,
                total: state.total - (action.payload.price * action.payload.quantity),
            };
                
    
        default: return state;            
    }
}