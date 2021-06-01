import axios from 'axios'
import HOST from '../../../constants'
import Swal from 'sweetalert2'

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
    RESET_PASSWORD_SUCCESS
} from './UserActionTypes'

// import {
//     AUTH
// } from '../Auth/AuthActionsType'

import { addItemCart } from '../Cart/CartActions'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const saveCartToDB = (userId, list, dispatch) => {
    list.forEach(element => {
        dispatch(addItemCart({
            user_id: userId,
            id: element.id,
            quantity: element.quantity
        }))
    });

}

export const userLogin = (input) => {
    return (dispatch) => {
        dispatch({
            type: USER_LOADING
        })
        axios.post(`${HOST}/auth/signin`, input)
            .then(response => {
                const user = response.data.result
                if (user.status === 'disabled') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'no estas habilitado para ingresar'
                    })
                    return
                }
                const jwt = response.data.token
                const fullUser = { ...user, token: jwt }

                localStorage.setItem("JWT", JSON.stringify(fullUser))
                Toast.fire({
                    icon: 'success',
                    title: 'Te has logeado correctamente!'
                })
                dispatch(
                    {
                        type: USER_LOGIN_SUCCESS,
                        payload: fullUser
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Contraseña o usuario incorrecto!'
                })
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const userGoogleLogin = (body, result, token) => {
    return (dispatch) => {
        dispatch({
            type: USER_LOADING
        })
        // console.log(body)
        axios.post(`${HOST}/auth/googleSignin`, body)

            .then(response => {
                const user = response.data.updatedUser

                if (response.data.updatedUser.status === 'disabled') {
                    // dispatch(
                    //     {
                    //         type: USER_ERROR,
                    //         payload: 'no estas habilitado comunicacte con el administrador'
                    //     }
                    // )
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'no estas habilitado para ingresar'
                    })
                    return
                }
                const jwt = response.data.token
                const fullUser = { ...user, token: jwt }
                localStorage.setItem("JWT", JSON.stringify(fullUser))
                // Toast.fire({
                //     icon: 'success',
                //     title: 'Te has logeado correctamente!'
                // })
                dispatch(
                    {
                        type: USER_LOGIN_SUCCESS,
                        payload: fullUser
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Contraseña o usuario incorrecto!'
                })
                dispatch(
                    {
                        type: USER_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const userLogut = () => {
    localStorage.removeItem("JWT")
    localStorage.removeItem('cart')
    localStorage.clear()
    return {
        type: USER_LOGOUT_SUCCESS
    }
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
        axios.post(`${HOST}/auth/signup`, body)
            .then(response => {
                const user = response.data.user
                const jwt = response.data.token
                const fullUser = { ...user, token: jwt }
                localStorage.setItem("JWT", JSON.stringify(fullUser))



                if (user) {
                    dispatch(
                        {
                            type: ADD_USER_SUCCESS,
                            payload: user
                        }
                    )
                } else {
                    alert('No se pudo registrar tu nuevo usuario')
                }
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
                // const user = response.data
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

export const changeUserStatus = (id, status) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.put(`${HOST}/users/${id}/${status}`)
            .then(response => {
                dispatch(
                    {
                        type: CHANGE_USER_STATUS_SUCCESS,
                        payload: { id: parseInt(id), status }
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

export const toggleAdmin = (id, body) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.put(`${HOST}/users/${id}`, body)
            .then(response => {
                // const user = response.data
                dispatch(
                    {
                        type: TOGGLE_USER_ADMIN_SUCCESS,
                        payload: id
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

export const promoteUser = (id) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.post(`${HOST}/promote/${id}`)
            .then(() => {
                dispatch(
                    {
                        type: PROMOTE_USER_SUCCESS,
                        payload: id
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

export const resetPassword = (id) => {
    return (dispatch) => {
        dispatch({ type: USER_LOADING })
        axios.post(`${HOST}/forcepassword/${id}`)
            .then((response) => {
                dispatch(
                    {
                        type: RESET_PASSWORD_SUCCESS,
                        payload: id
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
