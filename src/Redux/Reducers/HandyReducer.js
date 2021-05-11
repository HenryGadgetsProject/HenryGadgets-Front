import handlers from '../../Data/handlers';
import {
    HANDY_ERROR,
    HANDY_REQUEST,
    POPULAR_HANDYS,
    GET_HANDY_SUCCESS,
    GET_HANDYS_BY_ID,
    GET_HANDYS_BY_CATEGORY_ID,
    GET_HANDYS_BY_CATEGORY_NAME,

    //FILTER_HANDY_BY_CATEGORY
    // GET_HANDY_BY_ID_SUCCESS,
    // GET_HANDY_BY_ZONE_SUCCESS,
    // GET_HANDY_REVIEWS_SUCCESS,
    // ADD_HANDY

} from '../Actions/Handy/HandyActionTypes'

const initialState = {
    loading: false,
    handys: handlers,
    filteredHandys: [],
    popularHandys: [],
    handy: {},
    error: ''
}

const HandyReducer = (state = initialState, action) => {

    switch (action.type) {

        case HANDY_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_HANDY_SUCCESS: {
            return {
                ...state,
                handys: action.payload,
                loading: false
            }
        }

        case HANDY_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case POPULAR_HANDYS: {
            return {
                ...state,
                popularHandys: state.handys.filter(h => h.rating === 5)
            }
        }

        case GET_HANDYS_BY_ID: {

            return {
                ...state,
                handy: state.handys.find(h => h.id === action.payload)
            }
        }

        case GET_HANDYS_BY_CATEGORY_ID: {
            return {
                ...state,
                filteredHandys: state.handys.filter(handy => handy.categories.some(category => category.id === action.payload))
            }
        }

        case GET_HANDYS_BY_CATEGORY_NAME: {
            return {
                ...state,
                filteredHandys: state.handys.filter(handy => handy.categories.some(category => category.name === action.payload))
            }
        }

        // case FILTER_HANDY_BY_CATEGORY: {

        //     return {
        //         ...state,
        //         filteredPokemons: state.pokemons.filter(pokemon => pokemon.types.some(type =>type.name === action.payload))

        //     }
        // }

        default: {
            return state
        }
    }
}

export default HandyReducer
