import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './rootReducer'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store;