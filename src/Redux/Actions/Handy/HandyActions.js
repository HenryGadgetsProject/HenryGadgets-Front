import axios from 'axios'

import {
    HANDY_ERROR,
    HANDY_REQUEST,
    GET_HANDY_SUCCESS,
    POPULAR_HANDYS,
    GET_HANDYS_BY_ID,
    GET_HANDYS_BY_CATEGORY_ID,
    GET_HANDYS_BY_CATEGORY_NAME,

    // FILTER_HANDY_BY_CATEGORY
    // GET_HANDY_BY_ID_SUCCESS,
    // GET_HANDY_BY_ZONE_SUCCESS,
    // GET_HANDY_REVIEWS_SUCCESS,
    // ADD_HANDY
} from './HandyActionTypes'

export const getHandys = () => {
    return (dispatch) => {
        dispatch(
            {
                type: HANDY_REQUEST
            }
        )

        const BASE_URL = 'https://dummyapi.io/data/api'
        const APP_ID = '5ffd995bfae5180ad0926c02'
        axios.get(`${BASE_URL}/user/`, { headers: { 'app-id': APP_ID } })
            .then(response => {


                const handys = response.data.data
                dispatch(
                    {
                        type: GET_HANDY_SUCCESS,
                        payload: handys
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: HANDY_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getPopularHandys = () => {
    return {
        type: POPULAR_HANDYS
    }
}

export const getHandysById = (handyId) => {
    return {
        type: GET_HANDYS_BY_ID,
        payload: handyId
    }
}

export const getHandysByCategoryId = (categoryId) => {
    return {
        type: GET_HANDYS_BY_CATEGORY_ID,
        payload: categoryId
    }
}

export const getHandysByCategoryName = (name) => {
    return {
        type: GET_HANDYS_BY_CATEGORY_NAME,
        payload: name
    }
}
