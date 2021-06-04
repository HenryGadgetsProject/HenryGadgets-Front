import axios from 'axios'
import HOST from '../../../constants'

import {
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    POPULAR_PRODUCTS,
    GET_PRODUCTS_BY_ID,
    GET_PRODUCTS_BY_PRODUCT_NAME,
    CREATE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_SUCCESS,
    GET_PRODUCTS_BY_NAME,
    REMOVE_PRODUCT_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_ID,
    GET_PRODUCTS_BY_CATEGORY_NAME_SUCCESS,
    GET_PRODUCTS_BY_STOCK_SUCCESS,
    GET_PRODUCTS_BY_IS_ACTIVE_SUCCESS,

    SET_PROD_BY_CAT_NAME,
    SET_PROD_BY_AVAILABILITY,
    SET_PROD_BY_ACTIVE,
    SET_PROD_BY_PRICE,
    SET_PROD_BY_RATING,
    NOTIFY_STOCK_SUCCESS,


    // FILTER_PRODUCT_BY_PRODUCT
    // GET_PRODUCT_BY_ID_SUCCESS,
    // GET_PRODUCT_BY_ZONE_SUCCESS,
    // GET_PRODUCT_REVIEWS_SUCCESS,
} from './ProductActionTypes'

export const getProducts = () => {
    return (dispatch) => {
        dispatch(
            {
                type: PRODUCT_REQUEST
            }
        )
        axios.get(`${HOST}/products`)
            .then(response => {
                const products = response.data
                dispatch(
                    {
                        type: GET_PRODUCT_SUCCESS,
                        payload: products
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: PRODUCT_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getPopularProducts = () => {
    return {
        type: POPULAR_PRODUCTS
    }
}

export const getProductsById = (productId) => {
    return {
        type: GET_PRODUCTS_BY_ID,
        payload: productId
    }
}

export const getProductsByCategoryId = (categoryId) => {
    return {
        type: GET_PRODUCTS_BY_CATEGORY_ID,
        payload: categoryId
    }
}

export const getProductsByProductName = (name) => {
    return {
        type: GET_PRODUCTS_BY_PRODUCT_NAME,
        payload: name
    }
}

////////////////////////////
export function setProductsByCategoryName(selectedCategory) {
    return {
        type: SET_PROD_BY_CAT_NAME,
        payload: selectedCategory
    }
}

export function setProductsByStock(selectedAvailability) {
    return {
        type: SET_PROD_BY_AVAILABILITY,
        payload: selectedAvailability
    }
}

export function setProductsByActive(selectedActive) {
    return {
        type: SET_PROD_BY_ACTIVE,
        payload: selectedActive
    }
}

export function setProductsByPrice(selectedPrice) {
    return {
        type: SET_PROD_BY_PRICE,
        payload: selectedPrice
    }
}

export function setProductsByRating(selectedRating) {
    return {
        type: SET_PROD_BY_RATING,
        payload: selectedRating
    }
}
////////////////////////////

export const addProduct = (body) => {
    return (dispatch) => {
        dispatch(
            {
                type: PRODUCT_REQUEST
            }
        )
        axios.post(`${HOST}/products`, body)
            .then(response => {
                const product = response.data
                dispatch(
                    {
                        type: CREATE_PRODUCT_SUCCESS,
                        payload: product
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: PRODUCT_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const searchProducts = (query) => {
    return (dispatch) => {
        dispatch(
            {
                type: PRODUCT_REQUEST
            }
        )
        axios.get(`${HOST}/search?query=${query}`)
            .then(response => {
                const products = response.data
                dispatch(
                    {
                        type: GET_PRODUCTS_BY_NAME,
                        payload: products
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: PRODUCT_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}


export const deleteProducts = (id) => {
    return (dispatch) => {
        dispatch({ type: PRODUCT_REQUEST })
        axios.delete(`${HOST}/products/${id}`)
            .then(response => {
                dispatch(
                    {
                        type: REMOVE_PRODUCT_SUCCESS,
                        payload: id
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: PRODUCT_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getProductsByCategoryName = (categoryName) => {
    return {
        type: GET_PRODUCTS_BY_CATEGORY_NAME_SUCCESS,
        payload: categoryName
    }
}

export const getProductsByStock = (term) => {
    return {
        type: GET_PRODUCTS_BY_STOCK_SUCCESS,
        payload: term
    }
}

export const getProductsByIsActive = (term) => {
    return {
        type: GET_PRODUCTS_BY_IS_ACTIVE_SUCCESS,
        payload: term
    }
}

export const updateProduct = (id, input) => {

    return (dispatch) => {
        dispatch(
            {
                type: PRODUCT_REQUEST
            }
        )
        axios.put(`${HOST}/products/${id}`, input)
            .then(response => {
                // const product = response.data
                dispatch(
                    {
                        type: EDIT_PRODUCT_SUCCESS,
                        payload: input
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: PRODUCT_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const sendStockNotification = (productId) => {
    return (dispatch) => {
        dispatch(
            {
                type: PRODUCT_REQUEST
            }
        )
        axios.post(`${HOST}/email/stock/${productId}`).then(response => {
            // const product = response.data
            dispatch(
                {
                    type: NOTIFY_STOCK_SUCCESS,

                }
            )
        })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: PRODUCT_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}


