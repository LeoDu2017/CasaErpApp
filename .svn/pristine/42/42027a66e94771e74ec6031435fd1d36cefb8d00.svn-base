'use strict'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './_Reducer'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function _ConfigureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}