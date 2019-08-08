'use strict'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './_Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware))(createStore);

export default function _ConfigureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}