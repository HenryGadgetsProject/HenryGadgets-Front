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
    RESET_WISH_LIST
} from '../Wishlist/WishlistActionTypes'

export const getWishlist = (userId) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_REQUEST })
        axios.get(`${HOST}/users/wishlist/${userId}`)
            .then(response => {

                const wishlist = response.data.products
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

export const addToWishlist = (user, product) => {

    return (dispatch) => {
        dispatch({ type: WISHLIST_REQUEST })
        axios.post(`${HOST}/users/wishlist/${user.id}/${product.id}`)
            .then(response => {
                const whishList = response.data

                dispatch(
                    {
                        type: ADD_TO_WISHLIST,
                        payload: product
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




export const removeFromWishlist = (user, product) => {
    return (dispatch) => {
        dispatch({ type: WISHLIST_REQUEST })
        axios.delete(`${HOST}/users/wishlist/${user.id}/${product.id}`)
            .then(response => {

                const products = response.data.products
                dispatch(
                    {
                        type: REMOVE_FROM_WHISHLIST,
                        payload: products
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
// router.delete("/wishlist/:userId/:prodId",deleteItem);
// export const deleteWishlist = (id) => {
//     return (dispatch) => {
//         dispatch({ type: WISHLIST_REQUEST })
//         axios.delete(`${HOST}/users/wishlist/post/${userId}/${listName}`)
//             .then(response => {
//                 const wishlist = response.data
//                 dispatch(
//                     {
//                         type: CREATE_WISHLIST_SUCCESS,
//                         payload: wishlist
//                     }
//                 )
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(
//                     {
//                         type: WISHLIST_ERROR,
//                         payload: errorMsg
//                     }
//                 )
//             })
//     }
// }

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

// export const makeWish = (productId) => {
//     return {
//         type: WISH,
//         payload: productId
//     }
// }

export const resetWishList = () => {
    return {
        type: RESET_WISH_LIST,
    }
}

