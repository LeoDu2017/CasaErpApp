'use strict';
import {
    LOADING_AFTERSALE,
    LOADING_SUCCESS,
    LOADING_ERROR,
    SET_MINE,
    SET_STATUS,
    SET_FILTERS
} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    sales:null,
    AfterSaleStatusList:[],
    filters:[]
};
const actionHandler = {
    [LOADING_AFTERSALE]:(state) => {
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
    [SET_MINE]:(state,{payload}) => {
        return {
            ...state,
            ...payload
        }
    },
    [SET_STATUS]:(state,{payload:{data}}) => {
        return {
            ...state,
            AfterSaleStatusList:[...data]
        }
    },
    [SET_FILTERS]:(state,{payload:data}) => {
        return {
            ...state,
            filters:[...data]
        }
    },
};

export default createReducer(initialState,actionHandler)
