import {
    WISHLIST_ERROR,
    WISHLIST_REQUEST,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WHISHLIST,
    GET_WISHLIST_SUCCESS,
    CREATE_WISHLIST_SUCCESS,
    UPDATE_WISHLIST_SUCCESS,
    DELETE_WISHLIST_SUCCESS
} from '../Actions/Wishlist/WishlistActionTypes'

const initialState = {
    loading: false,
    holdWishlist: [],
    wishlist: [],
    error: ''
}

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case WISHLIST_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                holdWishlist: [...state.holdWishlist, action.payload],
                loading: false,
                error: ''
            }
        }
        case REMOVE_FROM_WHISHLIST: {
            return {
                ...state,
                holdWishlist: state.holdWishlist.filter(p => p.id !== action.payload),
                loading: false,
                error: ''
            }
        }
        case WISHLIST_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case GET_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishlist: action.payload,
                holdWishlist: action.payload,
                loading: false,
                error: ''
            }
        }
        case CREATE_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
                loading: false,
                error: ''
            }
        }
        case DELETE_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishlist: state.wishlist.filter(wish => wish.id !== parseInt(action.payload)),
                loading: false,
                error: ''
            }
        }
        case UPDATE_WISHLIST_SUCCESS: {
            return {
                ...state,
                whishlist: state.whishlist.map(wl => (wl.id === parseInt(action.payload)) ? { ...wl, ...action.payload } : wl),
                loading: false,
                error: ''
            }
        }
        default: {
            return state
        }
    }
}

export default wishlistReducer