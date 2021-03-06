import {
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_CART,
    ERROR_CART,
    LOADING_CART,
    CREATE_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    GET_CART_SUCCESS,
    SAVE_ORDER_ID,
    ORDER_LOADING,
    ORDER_ERROR,
    MAIL_SENDING,
    MAIL_SUCCESS,
    MAIL_ERROR,
    CHANGE_ORDER_STATUS_SUCCESS
} from '../Actions/Cart/CartActionsType'



const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const initialState = {
    loading: false,
    cartList: cartFromLocalStorage,
    error: '',
    total: 0.00,
    itemCount: cartFromLocalStorage.length,
    orderId: null,
    status: null
}

const CartReducer = ((state = initialState, action) => {

    switch (action.type) {

        case CREATE_CART: {
            return {
                ...state,
                error: '',
                loading: false,
                cartList: action.payload

            }

        }

        case ADD_ITEM_TO_CART: {

            const item = action.payload;
            const existItem = state.cartList.find((p) => p.id === item.id);

            if (existItem) {

                return {
                    ...state,
                    cartList: state.cartList.map((elem) =>
                        elem.id === existItem.id ? { ...item, quantity: elem.quantity + 1 } : elem
                    ),
                };
            } else {
                return {
                    ...state,
                    cartList: [...state.cartList, item],
                    itemCount: [...state.cartList, action.payload].length
                };
            }

        }

        case DELETE_ITEM_FROM_CART: {
            return {
                ...state,
                cartList: [...state.cartList.filter(product => product.id !== action.payload.id)],
                itemCount: ([...state.cartList].length) - 1

            }
        }

        case INCREMENT_QUANTITY: {
            return {
                ...state,
                cartList: state.cartList.map((elem) =>
                    elem.id === action.payload.id ? { ...elem, quantity: elem.quantity + 1 } : elem
                ),

            }
        }

        case DECREMENT_QUANTITY: {
            return {
                ...state,
                cartList: state.cartList.map((elem) =>
                    elem.id === action.payload.id ? { ...elem, quantity: elem.quantity - 1 } : elem
                ),

            }
        }

        case CLEAR_CART: {
            return {
                ...state,
                cartList: [],
                itemCount: 0
            }

        }

        case LOADING_CART: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_CART_SUCCESS: {
            return {
                ...state,
                cartList: action.payload,
                loading: false,
                error: '',
                itemCount: action.payload.length
            }
        }
        case ERROR_CART: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case SAVE_ORDER_ID: {
            return {
                ...state,
                loading: false,
                error: '',
                orderId: action.payload
            }
        }

        case ORDER_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case ORDER_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case MAIL_SENDING: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case MAIL_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                status: action.payload
            }
        }

        case MAIL_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        case CHANGE_ORDER_STATUS_SUCCESS: {
            return {
                ...state,
                cartList: state.cartList.map((elem) =>
                    elem.id === action.payload.id ? { ...elem, status: 'completed' } : elem
                ),
            }
        }

        default: return state
    }
})

export default CartReducer