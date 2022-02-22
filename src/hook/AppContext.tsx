import React, { useEffect } from "react";
import { IAppContextModel } from "../models/AppContextModel";
import { mainInitialState, mainReducers } from "../store";

const AppContext = React.createContext({} as IAppContextModel);

export const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(mainReducers, mainInitialState);

    useEffect(() => {
        if (state.shoppingCart.products.length > 0) {
            localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
        } else localStorage.removeItem('shoppingCart');
    }, [state.shoppingCart])

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): IAppContextModel => {
    const context = React.useContext(AppContext);

    return context;
}