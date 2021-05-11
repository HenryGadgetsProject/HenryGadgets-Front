import {
    TOGGLE_THEME
} from '../Actions/Global/GlobalActionsTypes'

const initialState = {
    theme: false,
}


const GlobalReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_THEME: {
            return {
                ...state,
                theme: !state.theme
            }
        }

        default: {
            return state
        }
    }
}

export default GlobalReducer
