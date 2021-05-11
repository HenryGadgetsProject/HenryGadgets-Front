import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../Reducers/CategoriesReducer'
import handlerReducer from '../Reducers/HandyReducer'
import globalReducer from '../Reducers/GlobalReducer'

const rootReducer = combineReducers({
    handler: handlerReducer,
    category: categoriesReducer,
    global: globalReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
