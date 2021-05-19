import axios from 'axios'

import {
    CREATE_CART,
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART,
    ERROR_CART,
    LOADING_CART
} from './CartActionsType'

export const createCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
        localStorage.setItem('cart', '{}')
        return {
            type: CREATE_CART,
            payload: []
        }
    }
}

export const addItemCart = (selectedProduct) => {
    if (selectedProduct.id)
        return {
            type: ADD_ITEM_TO_CART,
            payload: selectedProduct
        }
}

export const deleteItemFromCart = (selectedProduct) => {
    return {
        type: DELETE_ITEM_FROM_CART,
        payload: selectedProduct
    }
}