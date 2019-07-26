'use strict';
import {
    LOADING_AFTERSALE,
    LOADING_SUCCESS,
    LOADING_ERROR,
    SET_MINE
} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    sales:null
};
const actionHandler = {
    [LOADING_AFTERSALE]:(state,action) => {
        return {
            ...state,
            status:'正在加载...',
        }
    },
    [LOADING_SUCCESS]:(state) => {
        return {
            ...state,
            isSuccess: true
        }
    },
    [LOADING_ERROR]:(state,action) => {
        return {
            ...state,
            isSuccess: false,
            status:'列表加载失败，请稍后重试...'
        }
    },
    [SET_MINE]:(state,{payload}) => {
        return {
            ...state,
            ...payload
        }
    }
};

export default createReducer(initialState,actionHandler)
