

import {
    CATEGORY_ERROR,
    CATEGORY_REQUEST,
    GET_CATEGORIES_SUCCESS,
    SEARCH_CATEGORIES
    // GET_CATEGORY_BY_ID_SUCCESS,
    // ADD_CATEGORY,
    // REMOVE_CATEGORY
} from '../Actions/Categories/CategoriesActionTypes'

const initialState = {
    loading: false,
    categories: [],
    filteredCategories: [],
    Category: {},
    foundCategories: [],
    error: ''
}


const CategoryReducer = (state = initialState, action) => {

    switch (action.type) {

        case CATEGORY_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        }

        case CATEGORY_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case SEARCH_CATEGORIES: {
            if (!action.payload) {
                return {
                    ...state,
                    foundCategories: []
                }
            }
            return {
                ...state,
                foundCategories: state.categories.filter(category => category.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }

        default: {
            return state
        }
    }

}

export default CategoryReducer
