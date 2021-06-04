import axios from 'axios'
import HOST from '../../../constants'
import {
    OFFER_ERROR,
    OFFER_REQUEST,
    CREATE_OFFER_SUCCESS,
    GET_OFFERS_SUCCESS,
    GET_OFFER_BY_ID_SUCCESS,
    UPDATE_OFFER_SUCCESS,
    REMOVE_OFFER_SUCCESS,
} from './OfferActionTypes'

// import data from '../../../Data/categories'

export const getOffers = () => {
    return (dispatch) => {
        dispatch({ type: OFFER_REQUEST })
        axios.get(`${HOST}/offer`)
            .then(response => {
                const offers = response.data
                dispatch(
                    {
                        type: GET_OFFERS_SUCCESS,
                        payload: offers
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: OFFER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}



export const addOffer = (body) => {
    console.log(body)
    return (dispatch) => {
        dispatch({ type: OFFER_REQUEST })
        axios.post(`${HOST}/offer`, body)
            .then(response => {
                const offer = response.data
                dispatch(
                    {
                        type: CREATE_OFFER_SUCCESS,
                        payload: offer
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: OFFER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getOfferById = (id) => {
    return {
        type: GET_OFFER_BY_ID_SUCCESS,
        payload: id
    }
}

export const deleteOffer = (id) => {
    return (dispatch) => {
        dispatch({ type: OFFER_REQUEST })
        axios.delete(`${HOST}/offer/${id}`)
            .then(response => {
                // const categories = response.data
                dispatch(
                    {
                        type: REMOVE_OFFER_SUCCESS,
                        payload: parseInt(id)
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: OFFER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const updateOffer = (id, body) => {
    return (dispatch) => {
        dispatch({ type: OFFER_REQUEST })
        axios.put(`${HOST}/offer/${id}`, body)
            .then(response => {
                const offer = response.data
                dispatch(
                    {
                        type: UPDATE_OFFER_SUCCESS,
                        payload: offer
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: OFFER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}
