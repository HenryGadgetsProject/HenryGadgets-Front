import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../Reducers/CategoriesReducer'
import productReducer from '../Reducers/ProductReducer'
import userReducer from '../Reducers/UserReducer'
import globalReducer from '../Reducers/GlobalReducer'
import cartReducer from '../Reducers/CartReducer'
import reviewReducer from '../Reducers/ReviewReducer'
import orderReducer from '../Reducers/OrderReducer'
import authReducer from '../Reducers/AuthReducer'
import branchReducer from '../Reducers/BranchReducer'

const rootReducer = combineReducers({
    product: productReducer,
    category: categoriesReducer,
    global: globalReducer,
    user: userReducer,
    cart: cartReducer,
    review: reviewReducer,
    order: orderReducer,
    auth: authReducer,
    branch: branchReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
