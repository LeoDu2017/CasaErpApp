'use strict';
import {FETCH_REPORT_DETAIL,FETCH_REPORT_SUCCESS,FETCH_REPORT_ERROR,UPDATE_REPORT,SET_REPORT} from './_actionTypes'
import {createReducer} from "../../../../_Util";
const initialState = {
    status:'加载信息',
    isSuccess:false,
    details:{
        id: 0,
        report_day: "",
        work_content: "",
        num_fp: 0,
        num_yx: 0,
        num_wx: 0,
        num_dd: 0,
        num_bj: 0,
        num_zs: 0,
        num_wxin: 0,
        // add_date: "",
        // add_time: "",
        // add_user: 0,
        num_dds: 0,
        num_bf: 0,
        num_jjwt: "",
        report_status: 0
    }
};
const actionHandler = {
    [FETCH_REPORT_DETAIL]:(state,action) => {
        return {
            ...state,
            status:'正在加载信息...',
        }
    },
    [FETCH_REPORT_SUCCESS]:(state) => {
        return {
            ...state,
            isSuccess:true
        }
    },
    [FETCH_REPORT_ERROR]:(state,action) => {
        return {
            ...state,
            status:'加载失败请稍后重试',
        }
    },
    [SET_REPORT]:(state,action) => {
        const {details} = action.payload;
        return {
            ...state,
            details: {...details}
        }
    }
};

export default createReducer(initialState,actionHandler)