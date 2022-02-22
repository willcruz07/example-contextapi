/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable default-param-last */

export const combineReducer = (reducers: any) => (state: any = {}, action: any) => {
    const newState: any = {};

    for (const key in reducers) {
        newState[key] = reducers[key](state[key], action);
    }
    return newState;
};

export const formattedCurrency = (value: number) => {
    const formatter = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL',
    });
    return formatter.format(value);
};
