import axios from 'axios'
import HOST from '../../../constants'
import {
    CATEGORY_ERROR,
    CATEGORY_REQUEST,
    GET_CATEGORIES_SUCCESS,
    SEARCH_CATEGORIES,
    UPDATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_SUCCESS,
    GET_CATEGORY_BY_ID_SUCCESS,
    REMOVE_CATEGORY_SUCCESS,
} from './CategoriesActionTypes'

// import data from '../../../Data/categories'

export const getCategories = () => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST })
        axios.get(`${HOST}/categories`)
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

// export const getCategoriasProvisorio = () => {
//     return (dispatch) => {
//         dispatch({ type: CATEGORY_REQUEST })
//         dispatch(
//             {
//                 type: GET_CATEGORIES_SUCCESS,
//                 payload: data
//             }
//         )

//     }
// }

export const searchCategories = (term) => {
    return {
        type: SEARCH_CATEGORIES,
        payload: term
    }
}

export const addCategory = (body) => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST })
        axios.post(`${HOST}/categories`, body)
            .then(response => {
                const category = response.data
                dispatch(
                    {
                        type: CREATE_CATEGORY_SUCCESS,
                        payload: category
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

export const getCategoryById = (id) => {
    return {
        type: GET_CATEGORY_BY_ID_SUCCESS,
        payload: id
    }
}

export const deleteCategories = (id) => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST })
        axios.delete(`${HOST}/categories/${id}`)
            .then(response => {
                // const categories = response.data
                dispatch(
                    {
                        type: REMOVE_CATEGORY_SUCCESS,
                        payload: parseInt(id)
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

export const updateCategory = (id, body) => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST })
        axios.put(`${HOST}/categories/${id}`, body)
            .then(response => {
                // const category = response.data
                dispatch(
                    {
                        type: UPDATE_CATEGORY_SUCCESS,
                        payload: body
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
