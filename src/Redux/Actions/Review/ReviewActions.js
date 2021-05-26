import axios from 'axios'
import HOST from '../../../constants'

import {
    CREATE_REVIEW_SUCCESS,
    REVIEW_ERROR,
    REVIEW_ADD,
    REVIEW_REQUEST,
    GET_REVIEW_REQUEST,
    EDIT_REVIEW_SUCCESS
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
                dispatch(
                    {
                        type: GET_REVIEW_REQUEST,
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

