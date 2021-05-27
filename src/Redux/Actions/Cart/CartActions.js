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
    //SAVE_CART_TO_DB,
    GET_CART_SUCCESS,
    SAVE_ORDER_ID,
    ORDER_LOADING,
    ORDER_ERROR,
    MAIL_SENDING,
    MAIL_SUCCESS,
    MAIL_ERROR,
    CHANGE_ORDER_STATUS_SUCCESS
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




// export const createOrder = (userId, body,) => {
//     return (dispatch) => {
//         dispatch({ type: ORDER_LOADING })
//         axios.put(`http://localhost:3001/orders/orders/${userId}`, body)
//             .then(response => {
//                 const id = response.data.id
//                 console.log(response.data.id)
//                 dispatch(
//                     {
//                         type: SAVE_ORDER_ID,
//                         payload: id
//                     }
//                 )
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(
//                     {
//                         type: ORDER_ERROR,
//                         payload: errorMsg
//                     }
//                 )
//             })
//     }
// }


export const createOrder = (userId, body,) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_LOADING })

            const idReq = await axios.put(`http://localhost:3001/orders/orders/${userId}`, body)
            const id = idReq.data.id
            console.log(idReq.data.id)

            dispatch(
                {
                    type: SAVE_ORDER_ID,
                    payload: id
                }
            )

            const dataReq = await axios.put(`http://localhost:3001/orders/admin/${id}/processing`)


            const order = {
                description: "Henry Gadgets",
                price: dataReq.data.total_price,
                quantity: 1
            }

            console.log(dataReq.data.id)
            const paymentUrlReq = await axios.post(`http://localhost:3001/payment/${dataReq.data.id}`, order)
            window.open(paymentUrlReq.data.url)

        } catch (error) {
            const errorMsg = error.message
            dispatch(
                {
                    type: ORDER_ERROR,
                    payload: errorMsg
                }
            )
        }
    }
}

export const sendMail = (body) => {
    console.log(body)
    return (dispatch) => {
        dispatch({ type: MAIL_SENDING })
        axios.post(`http://localhost:3001/email/buy-confirmation`, body)
            .then(response => {

                console.log("RESPONSE", response.status)
                dispatch(
                    {
                        type: MAIL_SUCCESS,
                        payload: response.status

                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: MAIL_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

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



export const changeToCompleted = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_LOADING })

            const dataReq = await axios.put(`http://localhost:3001/orders/admin/${orderId}/completed`)



            dispatch(
                {
                    type: CHANGE_ORDER_STATUS_SUCCESS,
                    payload: orderId
                }
            )

        } catch (error) {
            const errorMsg = error.message
            dispatch(
                {
                    type: ORDER_ERROR,
                    payload: errorMsg
                }
            )
        }
    }
}


