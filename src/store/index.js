import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancers(
//     // applyMiddleware(thunk)
//     applyMiddleware(sagaMiddleware)
// )

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;