import {
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART,
    ERROR_CART,
    LOADING_CART,
    CREATE_CART
} from '../Actions/Cart/CartActionsType'

import {
    addItemCart,
    createCart
} from '../Actions/Cart/CartActions'

const initialState = {
    loading: false,
    cartList: [],
    error: '',
    total: 0.00,
    itemCount: 0
}

const CartReducer = ((state = initialState, action) => {

    switch (action.type) {

        case CREATE_CART: {
            return {
                ...state,
                error: '',
                loading: false,
                cartList: action.payload

            }

        }

        case ADD_ITEM_TO_CART: {
            return {
                ...state,
                cartList: [...state.cartList, action.payload],
                itemCount: state.itemCount + action.payload.quantity
            }
        }

        case DELETE_ITEM_FROM_CART: {
            return {
                ...state,
                cartList: [...state.cartList.filter(product => product.id !== action.payload.id)],
                itemCount: state.itemCount - action.payload.quantity

            }
        }

        default: return state
    }
})

export default CartReducer