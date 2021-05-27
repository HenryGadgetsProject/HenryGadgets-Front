import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../Reducers/CategoriesReducer'
import productReducer from '../Reducers/ProductReducer'
import userReducer from '../Reducers/UserReducer'
import globalReducer from '../Reducers/GlobalReducer'
import cartReducer from '../Reducers/CartReducer'
<<<<<<< HEAD
import reviewReducer from '../Reducers/ReviewReducer'
=======
import orderReducer from '../Reducers/OrderReducer'

>>>>>>> 0c5f6c18145930e9f3cc72b3db009b159d392d3e

const rootReducer = combineReducers({
    product: productReducer,
    category: categoriesReducer,
    global: globalReducer,
    user: userReducer,
    cart: cartReducer,
<<<<<<< HEAD
    review: reviewReducer
=======
    order: orderReducer
>>>>>>> 0c5f6c18145930e9f3cc72b3db009b159d392d3e
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
