// import products from '../../Data/products';
import {
    CREATE_REVIEW_SUCCESS,
    REVIEW_ERROR,
    REVIEW_ADD,
    REVIEWS_REQUEST,
    GET_REVIEW_SUCCESS,
    EDIT_REVIEW_SUCCESS,
    DELETE_REVIEW_SUCCESS,
    CREATED_FALSE,
    GET_REVIEWS_BY_USER_ID
} from '../Actions/Review/ReviewActionTypes'

const initialState = {
    loading: false,
    reviews: [],
    created: false,
    // filteredreviews: [],
    //searchProducts: [],
    error: '',
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {

        case REVIEWS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_REVIEW_SUCCESS: {
            return {
                ...state,
                reviews: action.payload,
                loading: false
            }
        }

        case EDIT_REVIEW_SUCCESS: {
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
                loading: false
                // para revisar si queremos dejar editar las revies
            }
        }

        case DELETE_REVIEW_SUCCESS: {
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload),
                loading: false
            }
        }

        case CREATE_REVIEW_SUCCESS: {
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
                loading: false,
                created: true
            }
        }

        case REVIEW_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case REVIEW_ADD: {
            return {
                ...state,
                loading: true
            }
        }

        case CREATED_FALSE: {
            return {
                ...state,
                created: false
            }
        }


        case GET_REVIEWS_BY_USER_ID: {
            return {
                ...state,
                reviews: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export default reviewReducer