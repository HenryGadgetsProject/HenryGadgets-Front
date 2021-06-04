import axios from 'axios'
import HOST from '../../../constants'
import {
    BRANCH_ERROR,
    BRANCH_REQUEST,
    CREATE_BRANCH_SUCCESS,
    GET_BRANCHES_SUCCESS,
    GET_BRANCH_BY_ID_SUCCESS,
    UPDATE_BRANCH_SUCCESS,
    REMOVE_BRANCH_SUCCESS,
    SEARCH_CATEGORIES,
} from './BranchesActionTypes'

// import data from '../../../Data/categories'

export const getBranches = () => {
    return (dispatch) => {
        dispatch({ type: BRANCH_REQUEST })
        axios.get(`${HOST}/branch`)
            .then(response => {
                const branches = response.data
                dispatch(
                    {
                        type: GET_BRANCHES_SUCCESS,
                        payload: branches
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: BRANCH_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}



export const addBranch = (body) => {
    console.log(body)
    return (dispatch) => {
        dispatch({ type: BRANCH_REQUEST })
        axios.post(`${HOST}/branch/new`, body)
            .then(response => {
                const branch = response.data
                dispatch(
                    {
                        type: CREATE_BRANCH_SUCCESS,
                        payload: branch
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: BRANCH_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const getBranchById = (id) => {
    return {
        type: GET_BRANCH_BY_ID_SUCCESS,
        payload: id
    }
}

export const deleteBranch = (id) => {
    return (dispatch) => {
        dispatch({ type: BRANCH_REQUEST })
        axios.delete(`${HOST}/branch/${id}`)
            .then(response => {
                // const categories = response.data
                dispatch(
                    {
                        type: REMOVE_BRANCH_SUCCESS,
                        payload: parseInt(id)
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: BRANCH_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}

export const updateBranch = (id, body) => {
    return (dispatch) => {
        dispatch({ type: BRANCH_REQUEST })
        axios.put(`${HOST}/branch/${id}`, body)
            .then(response => {
                const branch = response.data
                dispatch(
                    {
                        type: UPDATE_BRANCH_SUCCESS,
                        payload: branch
                    }
                )
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(
                    {
                        type: BRANCH_ERROR,
                        payload: errorMsg
                    }
                )
            })
    }
}
