import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../Reducers/CategoriesReducer'
import productReducer from '../Reducers/ProductReducer'
import userReducer from '../Reducers/UserReducer'
import globalReducer from '../Reducers/GlobalReducer'
import cartReducer from '../Reducers/CartReducer'
import orderReducer from '../Reducers/OrderReducer'


const rootReducer = combineReducers({
    product: productReducer,
    category: categoriesReducer,
    global: globalReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
