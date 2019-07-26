'use strict';
import {FETCH_REPORT_DETAIL,FETCH_REPORT_SUCCESS,FETCH_REPORT_ERROR} from './_actionTypes'
import {createReducer} from "../../../../_Util";
const initialState = {
    status:'加载信息',
    isSuccess:false,
    report:null
};
const actionHandler = {
    [FETCH_REPORT_DETAIL]:(state,action) => {
        return {
            ...state,
            status:'正在加载信息...',
        }
    },
    [FETCH_REPORT_SUCCESS]:(state,{report}) => {
        return {
            ...state,
            isSuccess:true,
            report,
        }
    },
    [FETCH_REPORT_ERROR]:(state,action) => {
        return {
            ...state,
            status:'加载失败请稍后重试',
        }
    }
};

export default createReducer(initialState,actionHandler)