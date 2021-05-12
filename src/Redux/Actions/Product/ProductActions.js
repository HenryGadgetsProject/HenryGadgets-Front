import axios from 'axios'

import {
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    POPULAR_PRODUCTS,
    GET_PRODUCTS_BY_ID,
    GET_PRODUCTS_BY_CATEGORY_ID,
    GET_PRODUCTS_BY_CATEGORY_NAME,

    // FILTER_PRODUCT_BY_CATEGORY
    // GET_PRODUCT_BY_ID_SUCCESS,
    // GET_PRODUCT_BY_ZONE_SUCCESS,
    // GET_PRODUCT_REVIEWS_SUCCESS,
    // ADD_PRODUCT
} from './ProductActionTypes'

export const getProducts = () => {
    return (dispatch) => {
        dispatch(
            {
                type: PRODUCT_REQUEST
            }
        )
        // const BASE_URL = 'https://dummyapi.io/data/api'
        // const APP_ID = '5ffd995bfae5180ad0926c02'
        // axios.get(`${BASE_URL}/user/`, { headers: { 'app-id': APP_ID } })
        axios.get('http://localhost:3001/products')
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

export const getProductsByCategoryName = (name) => {
    return {
        type: GET_PRODUCTS_BY_CATEGORY_NAME,
        payload: name
    }
}
