import axios from 'axios'
import {
    CATEGORY_ERROR,
    CATEGORY_REQUEST,
    GET_CATEGORIES_SUCCESS,
    SEARCH_CATEGORIES,

    // GET_CATEGORY_BY_ID_SUCCESS,
    // ADD_CATEGORY,
    // REMOVE_CATEGORY
} from './CategoriesActionTypes'

import data from '../../../Data/categories'

export const getCategories = () => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST })
        axios.get("http://localhost:3001/categories")
            .then(response => {
                const categories = response.data
                dispatch(
                    {
                        type: GET_CATEGORIES_SUCCESS,
                        payload: categories
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: CATEGORY_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getCategoriasProvisorio = () => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST })
        dispatch(
            {
                type: GET_CATEGORIES_SUCCESS,
                payload: data
            }
        )

    }
}

export const searchCategories = (term) => {
    return {
        type: SEARCH_CATEGORIES,
        payload: term
    }
}
