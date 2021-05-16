import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
    USER_ERROR,
    USER_LOADING,
    GET_USER_SUCCESS,
    GET_USERS_SUCCESS,
    ADD_USER_SUCCESS,
    EDIT_USER_SUCCESS,
    DELETE_USER_SUCCESS
} from '../Actions/User/UserActionTypes'


const initialState = {
    loading: false,
    users: [],
    user: {},
    error: ''
}


const userReducer = (state = initialState.action) => {

    switch (action.type) {
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        }
        case ADD_USER_SUCCESS: {
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false
            }
        }

        case EDIT_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => (user.id === parseInt(action.payload.id)) ? { ...user, ...action.payload } : user),
                loading: false
            }
        }

        case DELETE_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== parseInt(action.payload))
            }
        }
    }
}

