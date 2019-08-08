'use strict';
import {LOADING_DETAILS,LOADING_SUCCESS,LOADING_ERROR,SET_DETAIL} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    send:null,
    prod_list: []
};
const actionHandler = {
    [LOADING_DETAILS]:(state) => {
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
    [SET_DETAIL]:(state,{payload:{send,prod_list}}) =>{
        return {
            ...state,
            send:{...send},
            prod_list:[...prod_list]
        }
    }
};

export default createReducer(initialState,actionHandler)
