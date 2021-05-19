// import products from '../../Data/products';
import {
    PRODUCT_ERROR,
    PRODUCT_REQUEST,
    POPULAR_PRODUCTS,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCTS_BY_ID,
    GET_PRODUCTS_BY_CATEGORY_ID,
    // GET_PRODUCTS_BY_CATEGORY_NAME,
    CREATE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_SUCCESS,
    // GET_SEARCH_SUCCESS,
    GET_PRODUCTS_BY_NAME,
    REMOVE_PRODUCT_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_NAME_SUCCESS,
    GET_PRODUCTS_BY_STOCK_SUCCESS,
    GET_PRODUCTS_BY_IS_ACTIVE_SUCCESS
    // FILTER_PRODUCT_BY_CATEGORY,
    // GET_PRODUCT_BY_ID_SUCCESS,
    // GET_PRODUCT_REVIEWS_SUCCESS,
    // ADD_PRODUCT

} from '../Actions/Product/ProductActionTypes'

const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],
    searchProducts: [],
    popularProducts: [],
    product: {},
    error: ''
}

const ProductReducer = (state = initialState, action) => {
    // console.log('en reducer', typeof(action.payload))
    console.log('en reducer trae un', action.payload)

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
                filteredProducts: action.payload,
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
                product: state.products.find(p => p.id === action.payload)
            }
        }

        case GET_PRODUCTS_BY_CATEGORY_ID: {
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.categories.some(category => category.id === action.payload))
            }
        }

        case GET_PRODUCTS_BY_CATEGORY_NAME_SUCCESS: {
            if (action.payload === 'todas') {
                return {
                    ...state,
                    filteredProducts: state.products,
                    loading: false
                }
            }
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.categories.some(category => category.name === action.payload))
            }
        }

        case GET_PRODUCTS_BY_STOCK_SUCCESS: {
            if (action.payload === 'todas') {
                return {
                    ...state,
                    filteredProducts: state.products,
                    loading: false
                }
            }

            if (action.payload === 'disponible') {
                return {
                    ...state,
                    filteredProducts: state.products.filter(product => product.stock > 0),
                    loading: false
                }
            }

            return {
                ...state,
                filteredProducts: state.products.filter(product => product.stock === 0),
                loading: false
            }
        }

        case GET_PRODUCTS_BY_IS_ACTIVE_SUCCESS: {
            if (action.payload === 'todas') {
                return {
                    ...state,
                    filteredProducts: state.products,
                    loading: false
                }
            }

            let flagOption = ''

            if (action.payload === 'inactivo') {
                flagOption = 'false'
                return {
                    ...state,
                    filteredProducts: state.products.filter(product => product.is_active.toString() === flagOption),
                    loading: false
                }
            }

            if (action.payload === 'activo') {
                flagOption = 'true'
                return {
                    ...state,
                    filteredProducts: state.products.filter(product => product.is_active.toString() === flagOption),
                    loading: false
                }
            }

            // return {
            //     ...state,
            //     filteredProducts: state.products.filter(product => product.is_active === action.payload),
            //     loading: false
            // }
        }

        case CREATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: [...state.products, action.payload],
                filteredProducts: [...state.filteredProducts, action.payload],
                loading: false
            }
        }

        // case GET_SEARCH_SUCCESS: {
        //     return {
        //         ...state,
        //         filteredProducts: action.payload,
        //         loading: false,
        //     }
        // }

        case GET_PRODUCTS_BY_NAME: {
            return {
                ...state,
                searchProducts: action.payload,
                loading: false
            }
        }

        case REMOVE_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
                filteredProducts: state.products.filter(product => product.id !== action.payload),
                loading: false
            }
        }

        case EDIT_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: state.products.map(prod => (prod.id === action.payload.id) ? { ...prod, ...action.payload } : prod),
                loading: false
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
