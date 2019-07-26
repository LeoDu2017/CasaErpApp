'use strict';
import {LOADING_AFTERSALE,LOADING_SUCCESS,LOADING_ERROR} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    sale:null
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
            sale: action.sale,
        }
    },
    [LOADING_ERROR]:(state,action) => {
        return {
            ...state,
            isSuccess: false,
            status:'列表加载失败，请稍后重试...'
        }
    },
};

export default createReducer(initialState,actionHandler)
