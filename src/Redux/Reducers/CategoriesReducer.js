import {
    CATEGORY_ERROR,
    CATEGORY_REQUEST,
    GET_CATEGORIES_SUCCESS,
    SEARCH_CATEGORIES,
    UPDATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_SUCCESS,
    GET_CATEGORY_BY_ID_SUCCESS,
    REMOVE_CATEGORY_SUCCESS
} from '../Actions/Categories/CategoriesActionTypes'

const initialState = {
    loading: false,
    categories: [],
    filteredCategories: [],
    category: {},
    foundCategories: [],
    error: ''
}

const CategoryReducer = (state = initialState, action) => {

    console.log('*******************************************************', action.payload)

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
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                loading: false
            }

        case GET_CATEGORY_BY_ID_SUCCESS:
            return {
                ...state,
                category: state.categories.find(cat => cat.id === action.payload)
            }
        case REMOVE_CATEGORY_SUCCESS: {
            return {
                ...state,
                categories: state.categories.filter(cat => cat.id !== parseInt(action.payload))
            }
        }
        case UPDATE_CATEGORY_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                categories: state.categories.map(cat => (cat.id === parseInt(action.payload.id)) ? { ...cat, ...action.payload } : cat)
            }
        }

        default: {
            return state
        }
    }

}

export default CategoryReducer
