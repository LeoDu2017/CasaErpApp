'use strict';
import {LOADING_AFTERSALE,LOADING_SUCCESS,LOADING_ERROR,SET_DETAIL} from "./_actionTypes";
import {createReducer} from '../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    base_info: {},
    log:[],
    prod_question: [],
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
    [SET_DETAIL]:(state,{payload:{base_info,log,prod_question}}) =>{
        return {
            ...state,
            base_info:{...base_info},
            log:[...log],
            prod_question:[...prod_question]
        }
    }
};

export default createReducer(initialState,actionHandler)
