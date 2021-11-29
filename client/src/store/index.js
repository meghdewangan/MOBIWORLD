import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// **STORE** //
const store = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk))
);
// const initialState = {};
// const middleWare = [thunk];

// const store = createStore(
//     combineReducers,
//     initialState,
//     compose(
//         applyMiddleware(...middleWare),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

export default store;


