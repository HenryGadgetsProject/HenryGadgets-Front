import {
    WISHLIST_ERROR,
    WISHLIST_REQUEST,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WHISHLIST,
    GET_WISHLIST_SUCCESS,
    CREATE_WISHLIST_SUCCESS,
    UPDATE_WISHLIST_SUCCESS,
    // DELETE_WISHLIST_SUCCESS,
    RESET_WISH_LIST
} from '../Actions/Wishlist/WishlistActionTypes'

const initialState = {
    loading: false,
    wishList: [],
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
                wishList: [...state.wishList, action.payload],
                loading: false,
                error: ''
            }
        }
        case REMOVE_FROM_WHISHLIST: {
            return {
                ...state,
                wishList: action.payload,
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
                wishList: action.payload,
                loading: false,
                error: ''
            }
        }
        case CREATE_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishList: [...state.wishList, action.payload],
                loading: false,
                error: ''
            }
        }
        // case DELETE_WISHLIST_SUCCESS: {
        //     return {
        //         ...state,
        //         wishList: state.wishList.filter(wish => wish.id !== parseInt(action.payload)),
        //         loading: false,
        //         error: ''
        //     }
        // }
        case UPDATE_WISHLIST_SUCCESS: {
            return {
                ...state,
                whishList: state.whishList.map(wl => (wl.id === parseInt(action.payload)) ? { ...wl, ...action.payload } : wl),
                loading: false,
                error: ''
            }
        }

        case RESET_WISH_LIST: {
            return {
                ...state,
                wishList: []
            }
        }

        default: {
            return state
        }
    }
}

export default wishlistReducer