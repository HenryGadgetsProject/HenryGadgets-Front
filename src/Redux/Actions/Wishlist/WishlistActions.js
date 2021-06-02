import axios from 'axios'
import HOST from '../../../constants'

import {
    WISHLIST_ERROR,
    WISHLIST_LOADING,
    GET_WISHLIST,
    POST_WISHLIST,
    UPDATE_WISHLIST,
    DELETE_WISHLIST,
    ADD_TO_WISHLIST
} from '../Wishlist/WishlistActionTypes'

export const getWishlist = (userId) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_LOADING })
        axios.get(`${HOST}/users/wishlist/${userId}`)
            .then(response => {
                const wishlist = response.data.wishlists
                dispatch(
                    {
                        type: GET_WISHLIST,
                        payload: wishlist
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: WISHLIST_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const addToWishlist = (product) => {
    return (dispatch) => {
            dispatch(
                {
                    type: ADD_TO_WISHLIST,
                    payload: product
                }
            )
    }
}

export const postWishlist = (userId, listName) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_LOADING })
        axios.get(`${HOST}/users/wishlist/post/${userId}/${listName}`)
            .then(response => {
                const wishlist = response.data
                dispatch(
                    {
                        type: POST_WISHLIST,
                        payload: wishlist
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: WISHLIST_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const deleteWishlist = (id) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_LOADING })
        axios.get(`${HOST}/users/wishlist/delete/${id}`)
            .then(response => {

                dispatch(
                    {
                        type: DELETE_WISHLIST,
                        payload: parseInt(id)
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: WISHLIST_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const updateWishlist = () => {
    // Hacelo vos Edu jajaja
}
