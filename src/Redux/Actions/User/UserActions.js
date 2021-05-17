import axios from 'axios'

import {
    // USER_LOGIN_SUCCESS,
    // USER_LOGOUT_SUCCESS,
    USER_ERROR,
    USER_LOADING,
    GET_USER_SUCCESS,
    GET_USERS_SUCCESS,
    ADD_USER_SUCCESS,
    EDIT_USER_SUCCESS,
    DELETE_USER_SUCCESS
} from './UserActionTypes'

import HOST from '../../../constants'

export const userLogin = () => {

}
export const userLogut = () => {

}

export const getUsers = () => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.get(`${HOST}/users`)
            .then(response => {
                const users = response.data
                dispatch(
                    {
                        type: GET_USERS_SUCCESS,
                        payload: users
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getUser = (id) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.get(`${HOST}/users/${id}`)
            .then(response => {
                const user = response.data
                dispatch(
                    {
                        type: GET_USER_SUCCESS,
                        payload: user
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const addUser = (body) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.post(`${HOST}/users`, body)
            .then(response => {
                const user = response.data
                dispatch(
                    {
                        type: ADD_USER_SUCCESS,
                        payload: user
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const updateUser = (id, body) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.put(`${HOST}/users/${id}`, body)
            .then(response => {
                const user = response.data
                dispatch(
                    {
                        type: EDIT_USER_SUCCESS,
                        payload: body
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.delete(`${HOST}/users/${id}`)
            .then(response => {
                dispatch(
                    {
                        type: DELETE_USER_SUCCESS,
                        payload: parseInt(id)
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

