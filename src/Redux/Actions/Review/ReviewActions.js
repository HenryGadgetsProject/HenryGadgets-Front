import axios from 'axios'
import HOST from '../../../constants'

import {
    CREATE_REVIEW_SUCCESS,
    REVIEW_ERROR,
    REVIEW_ADD,
    REVIEWS_REQUEST,
    GET_REVIEW_SUCCESS,
    EDIT_REVIEW_SUCCESS,
    DELETE_REVIEW_SUCCESS,
    CREATED_FALSE,
    // GET_REVIEW_BY_PRODUCT,
    GET_REVIEWS_BY_USER_ID
} from './ReviewActionTypes'

export const getReview = (productId) => {
    return (dispatch) => {
        dispatch(
            {
                type: REVIEWS_REQUEST
            }
        )
        axios.get(`${HOST}/products/${productId}/review`)
            .then(response => {
                const reviews = response.data.data
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

export const getReviewsByUserId = (userId) => {
    return (dispatch) => {
        dispatch(
            {
                type: REVIEWS_REQUEST
            }
        )
        axios.get(`${HOST}/products/user/${userId}`)
            .then(response => {
                const reviews = response.data.data
                dispatch(
                    {
                        type: GET_REVIEWS_BY_USER_ID,
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

export const deleteReview = (id) => {
    return (dispatch) => {
        dispatch({ type: REVIEWS_REQUEST })
        axios.delete(`${HOST}/products/review/${id}`)
            .then(response => {
                const review = response.data
                dispatch(
                    {
                        type: DELETE_REVIEW_SUCCESS,
                        payload: parseInt(id)
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

