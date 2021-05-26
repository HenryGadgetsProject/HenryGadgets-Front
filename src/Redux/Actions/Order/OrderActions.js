import axios from 'axios'
import HOST from '../../../constants'

import {
    GET_ORDERS_SUCCESS,
    ORDER_ERROR,
    ORDER_LOADING
} from '../Order/OrderActionTypes'

export const getOrders = () => {
    return (dispatch) => {
        dispatch({ type: ORDER_LOADING })
        axios.get(`${HOST}/orders/admin`)
            .then(response => {
                const orders = response.data
                dispatch(
                    {
                        type: GET_ORDERS_SUCCESS,
                        payload: orders
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: ORDER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}