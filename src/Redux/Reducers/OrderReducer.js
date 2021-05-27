import {
    ORDER_LOADING,
    ORDER_ERROR,
    GET_ORDERS_SUCCESS,
    DELETE_ORDER_SUCCESS,
    GET_ORDER_BY_ID_SUCCESS,
    UPDATE_ORDER_SUCCESS
} from '../Actions/Order/OrderActionTypes'

const initialState = {
    loading: false,
    orders: [],
    order: {},
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
        case GET_ORDER_BY_ID_SUCCESS: {
            return {
                ...state,
                order: action.payload,
                loadgin: false
            }
        }
        case UPDATE_ORDER_SUCCESS: {
            return {
                ...state,
                orders: state.orders.map(order => (order.id === parseInt(action.payload.id)) ? { ...order, ...action.payload } : order )
            }
        }
        case DELETE_ORDER_SUCCESS: {
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== parseInt(action.payload)),
                loading: false
            }
        }
        default: {
            return state
        }
    }
}

export default orderReducer