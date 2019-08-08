'use strict';
import {LOADING_AFTERSALE,LOADING_SUCCESS,LOADING_ERROR,SET_STATUS,SET_DEPARTMENT,CLEAR_DEPARTMENT,SET_FILTERS} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    AfterSaleStatusList: [],
    sales:[],
    filters:[],
};
const actionHandler = {
    [LOADING_AFTERSALE]:(state,action) => {
        return {
            ...state,
            status:'正在加载...',
        }
    },
    [LOADING_SUCCESS]:(state,action) => {
        return {
            ...state,
            isSuccess: true,
            sales: action.sales,
        }
    },
    [LOADING_ERROR]:(state,action) => {
        return {
            ...state,
            isSuccess: false,
            status:'列表加载失败，请稍后重试...'
        }
    },
    [SET_DEPARTMENT]:(state,{payload:{sales}}) => {
        return {
            ...state,
            sales: [...state.sales,...sales]
        }
    },
    [CLEAR_DEPARTMENT]:(state) => {
        return {
            ...state,
            sales:[]
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
