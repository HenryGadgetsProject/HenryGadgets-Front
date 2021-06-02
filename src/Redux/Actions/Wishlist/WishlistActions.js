import axios from 'axios'
import HOST from '../../../constants'

import {
    WISHLIST_ERROR,
    WISHLIST_LOADING,
    GET_WISHLIST,
    POST_WISHLIST,
    UPDATE_WISHLIST,
    DELETE_WISHLIST,
} from '../Wishlist/WishlistActionTypes'

export const getWishlist = (userId) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_LOADING })
        axios.get(`${HOST}/wishlist/${userId}`)
            .then(response => {
                const wishlist = response.data
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

export const addWishlist = (userId, listName) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_LOADING })
        axios.get(`${HOST}/wishlist/post/${userId}/${listName}`)
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
        axios.get(`${HOST}/wishlist/delete/${id}`)
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
