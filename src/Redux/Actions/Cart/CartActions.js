import axios from 'axios'


import {
    CREATE_CART,
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART,
    ERROR_CART,
    LOADING_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY
} from './CartActionsType'



export const createCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify({}))
        return {
            type: CREATE_CART,
            payload: []
        }
    }
}

export const addItemCart = (selectedProduct) => {
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

export const incrementQuantity = (product) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: product
    }
}

export const decrementQuantity = (product) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: product
    }
}