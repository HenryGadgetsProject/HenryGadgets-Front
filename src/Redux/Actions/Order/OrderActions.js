import axios from 'axios'
import HOST from '../../../constants'

import {
    ORDER_LOADING,
    ORDER_ERROR,
    GET_ORDERS_SUCCESS,
    DELETE_ORDER_SUCCESS,
    GET_ORDER_BY_ID_SUCCESS,
    UPDATE_ORDER_SUCCESS
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

export const getOrderById = (id) => {
    return (dispatch) => {
        dispatch({ type: ORDER_LOADING })
        axios.get(`${HOST}/orders/orders/${id}`)
            .then(response => {
                const order = response.data
                dispatch(
                    {
                        type: GET_ORDER_BY_ID_SUCCESS,
                        payload: order
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

export const updateOrder = (id, body) => {
    return (dispatch) => {
        dispatch({ type: ORDER_LOADING })
        axios.put(`${HOST}/orders/orders/${id}`, body)
            .then(response => {
                // const order = response.data
                dispatch(
                    {
                        type: UPDATE_ORDER_SUCCESS,
                        payload: body
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

export const deleteOrder = (id) => {
    return (dispatch) => {
        dispatch({ type: ORDER_LOADING })
        axios.delete(`${HOST}/orders/user/${id}`)
            .then(response => {
                dispatch(
                    {
                        type: DELETE_ORDER_SUCCESS,
                        payload: parseInt(id)
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