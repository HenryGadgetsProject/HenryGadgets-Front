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
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_ERROR,
    // GET_SEARCH_SUCCESS,
    GET_PRODUCTS_BY_NAME,
    REMOVE_PRODUCT_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_ID
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

export const addProduct = (body) => {
    return (dispatch) => {
        dispatch(
            {
                type: CREATE_PRODUCT_REQUEST
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
                        type: CREATE_PRODUCT_ERROR,
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