import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
    USER_ERROR,
    USER_LOADING,
    GET_USER_SUCCESS,
    GET_USERS_SUCCESS,
    ADD_USER_SUCCESS,
    EDIT_USER_SUCCESS,
    CHANGE_USER_STATUS_SUCCESS,
    TOGGLE_USER_ADMIN_SUCCESS,
    PROMOTE_USER_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    USER_SUSCRIBE
} from '../Actions/User/UserActionTypes'


const initialState = {
    loading: false,
    users: [],
    user: {},
    error: '',
    reset: false,
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: ''
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: ''
            }
        }
        case ADD_USER_SUCCESS: {
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false,
                error: ''
            }
        }

        case EDIT_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => (user.id === parseInt(action.payload.id)) ? { ...user, ...action.payload } : user),
                loading: false,
                error: ''
            }
        }

        case CHANGE_USER_STATUS_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => (user.id === parseInt(action.payload.id)) ? { ...user, status: action.payload.status } : user),
                loading: false,
                error: ''
                // users: state.users.filter(user => user.id !== parseInt(action.payload)),
                // loading: false
            }
        }

        case USER_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false

            }
        }
        case USER_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                error: '',
                user: action.payload,
                loading: false

            }
        }

        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                user: {},
                loading: false,
                error: ''
            }
        }

        case TOGGLE_USER_ADMIN_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => (user.id === parseInt(action.payload.id)) ? { ...user, first_name: 'cualquierCosa' } : user),
                loading: false,
                error: ''
            }
        }
        case PROMOTE_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => (user.id === parseInt(action.payload.id))
                    ? { ...user, is_admin: action.payload.is_admin } : user),
                loading: false,
                error: ''

            }

        }

        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: state.users.map(user => (user.id === parseInt(action.payload.id)) ? { ...user, reset: true } : user),
                error: ''
            }
        }

        case USER_SUSCRIBE: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        }

        default: {
            return state
        }
    }
}

export default userReducer
