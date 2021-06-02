import {
    WISHLIST_ERROR,
    WISHLIST_LOADING,
    GET_WISHLIST,
    POST_WISHLIST,
    UPDATE_WISHLIST,
    DELETE_WISHLIST,
} from '../Actions/Wishlist/WishlistActionTypes'

const initialState = {
    loading: false,
    wishlist: [],
    error: ''
}

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case WISHLIST_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case WISHLIST_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case GET_WISHLIST: {
            return {
                ...state,
                wishlist: action.payload,
                loading: false
            }
        }
        case POST_WISHLIST: {
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
                loading: false
            }
        }
        case DELETE_WISHLIST: {
            return {
                ...state,
                wishlist: state.wishlist.filter(wish => wish.id !== parseInt(action.payload) )
            }
        }
        case UPDATE_WISHLIST: {
            return {
                ...state,
                // Hacelo vos Edu jajaja
            }
        }
        default: {
            return state
        }
    }    
}

export default wishlistReducer