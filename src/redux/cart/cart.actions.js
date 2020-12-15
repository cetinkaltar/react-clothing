import { CartActionTypes } from './cart.types';

export const toggleCartHidden = (isVisible) => ({
        type:CartActionTypes.TOGGLE_CART_HIDDEN,
        payload: isVisible
    });

export const addItem = (item) => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
});

export const clearItem = (id) => ({
    type:CartActionTypes.CLEAR_ITEM,
    payload:id
});

export const removeItem = (id) => ({
    type:CartActionTypes.REMOVE_ITEM,
    payload:id
});