import axios from 'axios'
import HOST from '../../../constants'


import {
    CREATE_CART,
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART,
    ERROR_CART,
    LOADING_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    SAVE_CART_TO_DB,
    GET_CART_SUCCESS
} from './CartActionsType'



export const createCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify({}))
        return {
            type: CREATE_CART,
            payload: []
        }
    }
}

export const addItemCart = (selectedProduct) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: selectedProduct
    }
}

export const deleteItemFromCart = (selectedProduct) => {
    return {
        type: DELETE_ITEM_FROM_CART,
        payload: selectedProduct
    }
}

export const incrementQuantity = (product) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: product
    }
}

export const decrementQuantity = (product) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}



export const saveCartToDB = (cart, userId) => {

    const body = cart.map(item => {
        return {
            id: item.id,
            quantity: item.quantity,
            unit_price: item.price,
            image: item.big_image,
            name: item.name
        }
    });
    axios.post(`${HOST}/cart/${userId}/items/create/guest`, body)
        .then((response) => {

        })

}

export const deleteCartFromDB = (userId) => {

    const url = `${HOST}/cart/${userId}/items/delete`

    axios.delete(url)
        .then((response) => {

        })
        .catch((e) => {

        })

}




// export const getCart = (id) => {
//     return (dispatch) => {
//         dispatch({ type: LOADING_CART })
//         axios.get(`${HOST}/cart/${id}/cart`)
//             .then(response => {
//                 const cart = response.data
//                 dispatch(
//                     {
//                         type: GET_CART_SUCCESS,
//                         payload: cart
//                     }
//                 )
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(
//                     {
//                         type: ERROR_CART,
//                         payload: errorMsg
//                     }
//                 )
//             })
//     }
// }

export const getCart = (id) => {
    const cartLS = JSON.parse(localStorage.getItem('cart'))
    return (dispatch) => {
        dispatch({ type: LOADING_CART })
        axios.get(`${HOST}/cart/${id}/cart`)
            .then(response => {

                const cart = response.data.map(item => {
                    return {
                        id: item.product.id,
                        quantity: item.quantity,
                        price: item.product.price,
                        big_image: item.product.big_image,
                        name: item.product.name
                    }
                })
                if (!cart || cart.length === 0) {
                    return dispatch({
                        type: GET_CART_SUCCESS,
                        payload: cartLS
                    })
                } else {
                    return dispatch(
                        {
                            type: GET_CART_SUCCESS,
                            payload: cart
                        }
                    )
                }

            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: ERROR_CART,
                        payload: errorMsg
                    }
                )
            })
    }
}


