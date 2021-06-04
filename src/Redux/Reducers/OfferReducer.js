import {
    OFFER_ERROR,
    OFFER_REQUEST,
    CREATE_OFFER_SUCCESS,
    GET_OFFERS_SUCCESS,
    GET_OFFER_BY_ID_SUCCESS,
    UPDATE_OFFER_SUCCESS,
    REMOVE_OFFER_SUCCESS,
} from '../Actions/Offer/OfferActionTypes'

const initialState = {
    loading: false,
    offers: [],
    offer: {},
    error: ''
}

const OfferReducer = (state = initialState, action) => {

    switch (action.type) {

        case OFFER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }

        case GET_OFFERS_SUCCESS: {
            return {
                ...state,
                offers: action.payload,
                loading: false,
                error: ''
            }
        }

        case OFFER_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case CREATE_OFFER_SUCCESS:
            return {
                ...state,
                offers: [...state.offers, action.payload],
                loading: false,
                error: ''
            }

        case GET_OFFER_BY_ID_SUCCESS:
            return {
                ...state,
                offer: state.offers.find(offer => offer.id === action.payload),
                loading: false
            }
        case REMOVE_OFFER_SUCCESS: {
            return {
                ...state,
                offers: state.offers.filter(offer => offer.id !== parseInt(action.payload)),
                loading: false,

            }
        }
        case UPDATE_OFFER_SUCCESS: {
            return {
                ...state,
                offers: state.offers.map(offer => (offer.id === parseInt(action.payload.id)) ? { ...offer, ...action.payload } : offer)
            }
        }

        default: {
            return state
        }
    }

}

export default OfferReducer
