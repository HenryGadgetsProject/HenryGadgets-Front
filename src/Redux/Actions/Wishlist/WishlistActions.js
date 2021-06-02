import axios from 'axios'
import HOST from '../../../constants'

import {
    WISHLIST_ERROR,
    WISHLIST_REQUEST,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WHISHLIST,
    GET_WISHLIST_SUCCESS,
    CREATE_WISHLIST_SUCCESS,
    UPDATE_WISHLIST_SUCCESS,
    DELETE_WISHLIST_SUCCESS
} from '../Wishlist/WishlistActionTypes'

export const getWishlist = (userId) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_REQUEST })
        axios.get(`${HOST}/users/wishlist/${userId}`)
            .then(response => {
                const wishlist = response.data.wishlists
                dispatch(
                    {
                        type: GET_WISHLIST_SUCCESS,
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
export const removeFromWishlist = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: REMOVE_FROM_WHISHLIST,
                payload: id
            }
        )
    }
}

export const postWishlist = (userId, listName) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_REQUEST })
        axios.get(`${HOST}/users/wishlist/post/${userId}/${listName}`)
            .then(response => {
                const wishlist = response.data
                dispatch(
                    {
                        type: CREATE_WISHLIST_SUCCESS,
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
        dispatch({ type: WISHLIST_REQUEST })
        axios.get(`${HOST}/users/wishlist/delete/${id}`)
            .then(response => {

                dispatch(
                    {
                        type: DELETE_WISHLIST_SUCCESS,
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

export const updateWishlist = (wishListId, productId) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_REQUEST })
        axios.put(`${HOST}/users/wishlist/${wishListId}/${productId}`)
            .then(response => {

                dispatch(
                    {
                        type: UPDATE_WISHLIST_SUCCESS,
                        payload: parseInt(wishListId)
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
