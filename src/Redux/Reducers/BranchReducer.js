import {
    BRANCH_ERROR,
    BRANCH_REQUEST,
    GET_BRANCHES_SUCCESS,
    UPDATE_BRANCH_SUCCESS,
    CREATE_BRANCH_SUCCESS,
    GET_BRANCH_BY_ID_SUCCESS,
    REMOVE_BRANCH_SUCCESS
} from '../Actions/Branch/BranchesActionTypes'

const initialState = {
    loading: false,
    branches: [],
    branch: {},
    error: ''
}

const BranchReducer = (state = initialState, action) => {

    switch (action.type) {

        case BRANCH_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }

        case GET_BRANCHES_SUCCESS: {
            return {
                ...state,
                branches: action.payload,
                loading: false,
                error: ''
            }
        }

        case BRANCH_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case CREATE_BRANCH_SUCCESS:
            return {
                ...state,
                branches: [...state.branches, action.payload],
                loading: false,
                error: ''
            }

        case GET_BRANCH_BY_ID_SUCCESS:
            return {
                ...state,
                branch: state.branches.find(branch => branch.id === action.payload),
                loading: false
            }
        case REMOVE_BRANCH_SUCCESS: {
            return {
                ...state,
                branches: state.branches.filter(branch => branch.id !== parseInt(action.payload)),
                loading: false
            }
        }
        case UPDATE_BRANCH_SUCCESS: {
            return {
                ...state,
                branches: state.branches.map(branch => (branch.id === parseInt(action.payload.id)) ? { ...branch, ...action.payload } : branch)
            }
        }

        default: {
            return state
        }
    }

}

export default BranchReducer
