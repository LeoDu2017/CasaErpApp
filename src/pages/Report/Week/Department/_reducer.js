'use strict';
import {LOADING_REPORTS, LOADING_SUCCESS, LOADING_ERROR, SET_REPORTS} from "./_actionTypes";
import {createReducer} from '../../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    reports:[]
};
const actionHandler = {
    [LOADING_REPORTS]:(state) => {
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
    [LOADING_ERROR]:(state) => {
        return {
            ...state,
            isSuccess: false,
            status:'列表加载失败，请稍后重试...'
        }
    },
    [SET_REPORTS]:(state,action) => {
        const {reports} = action.payload;
        return {
            ...state,
            reports:[...state.reports,...reports]
        }
    }
};

export default createReducer(initialState,actionHandler)
