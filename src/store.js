import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import entryReducer from './reducer/entryReducer';



export default createStore(combineReducers({
    entry: entryReducer,
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);  

    // applyMiddleware(logger, promise(), thunk)