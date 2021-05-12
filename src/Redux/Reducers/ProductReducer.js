// import products from '../../Data/products';
import {
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    POPULAR_PRODUCTS,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCTS_BY_ID,
    GET_PRODUCTS_BY_CATEGORY_ID,
    GET_PRODUCTS_BY_CATEGORY_NAME,

    // FILTER_PRODUCT_BY_CATEGORY,
    // GET_PRODUCT_BY_ID_SUCCESS,
    // GET_PRODUCT_REVIEWS_SUCCESS,
    // ADD_PRODUCT

} from '../Actions/Product/ProductActionTypes'

const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],
    popularProducts: [],
    product: {},
    error: ''
}

const ProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        }

        case PRODUCT_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case POPULAR_PRODUCTS: {
            return {
                ...state,
                popularProducts: state.products.filter(p => p.rating === 5)
            }
        }

        case GET_PRODUCTS_BY_ID: {

            return {
                ...state,
                product: state.products.find(p => parseInt(p.id) === parseInt(action.payload))
            }
        }

        case GET_PRODUCTS_BY_CATEGORY_ID: {
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.categories.some(category => category.id === action.payload))
            }
        }

        case GET_PRODUCTS_BY_CATEGORY_NAME: {
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.categories.some(category => category.name === action.payload))
            }
        }

        // case FILTER_PRODUCT_BY_CATEGORY: {

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

export default ProductReducer
