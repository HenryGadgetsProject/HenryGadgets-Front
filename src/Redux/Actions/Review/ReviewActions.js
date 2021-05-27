import axios from 'axios'
import HOST from '../../../constants'

import {
    CREATE_REVIEW_SUCCESS,
    REVIEW_ERROR,
    REVIEW_ADD,
    REVIEW_REQUEST,
    GET_REVIEW_SUCCESS,
    EDIT_REVIEW_SUCCESS,
    CREATED_FALSE,
    GET_REVIEW_BY_PRODUCT
} from './ReviewActionTypes'

export const getReview = (productId) => {
    return (dispatch) => {
        dispatch(
            {
                type: REVIEW_REQUEST
            }
        )
        axios.get(`${HOST}/products/${productId}/review`)
            .then(response => {
                const reviews = response.data
                console.log('ESTA ES TU REVIEW PAPURRI',reviews)
                dispatch(
                    {
                        type: GET_REVIEW_SUCCESS,
                        payload: reviews
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: REVIEW_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const addReview = (input) => {
    return (dispatch) => {
        dispatch(
            {
                type: REVIEW_ADD
            }
        )
        axios.post(`${HOST}/products/${input.productId}/review`, input)
            .then(response => {
                const reviews = response.data
                console.log(reviews)
                dispatch(
                    {
                        type: CREATE_REVIEW_SUCCESS,
                        payload: reviews
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: REVIEW_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const updateReview = () => {
    return (dispatch) => {
        dispatch(
            {
                type: REVIEW_ADD
            }
        )
        axios.put(`${HOST}/reviews`)
            .then(response => {
                const reviews = response.data
                dispatch(
                    {
                        type: EDIT_REVIEW_SUCCESS,
                        payload: reviews
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: REVIEW_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const createdFalse = (bool) => {
    return (dispatch) => {
        dispatch(
            {
                type: CREATED_FALSE
            }
        )
    }
}

