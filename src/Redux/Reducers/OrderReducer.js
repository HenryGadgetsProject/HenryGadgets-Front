import {
    GET_ORDERS_SUCCESS,
    ORDER_ERROR,
    ORDER_LOADING
} from '../Actions/Order/OrderActionTypes'

const initialState = {
    loading: false,
    orders: [],
    error: ''
}

const orderReducer = (state = initialState, action) => {

    switch(action.type) {
        case ORDER_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case ORDER_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case GET_ORDERS_SUCCESS: {
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        }
        default: {
            return state
        }
    }
}

export default orderReducer