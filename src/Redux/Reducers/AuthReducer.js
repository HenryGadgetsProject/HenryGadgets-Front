import { AUTH, LOGOUT } from '../Actions/Auth/AuthActionsType'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data, user: action.data }
        case LOGOUT:
            // Ésto va a limpiar la localStorage total
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state
    }
}

export default authReducer