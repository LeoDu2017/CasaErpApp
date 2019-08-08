'use strict';
import {
    LOADING_LOGISTICS,
    SET_MINE,
    SET_STATUS,
    SET_FILTERS,
    CLEAR_MINE
} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    data: [],
    filters:[]
};

const actionHandler = {
    [SET_MINE]:(state,{payload:{data}}) => {
        return {
            ...state,
            data: [...state.data,...data]
        }
    },
    [SET_FILTERS]:(state,{payload:data}) => {
        return {
            ...state,
            filters:[...data]
        }
    }
};

export default createReducer(initialState,actionHandler)
