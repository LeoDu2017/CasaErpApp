'use strict';
import {LOADING_REPORTS, LOADING_SUCCESS, LOADING_ERROR, SET_DETAILS} from "./_actionTypes";
import {createReducer} from '../../../../_Util'

const initialState = {
    status:'加载列表',
    isSuccess:false,
    details:{
        id:'',add_user:'',report_week_msg:'',report_gzwt:'',report_gsjy:'',report_shkn:'',
        report_gzhz:'',report_gzjh:'',report_khlx:'',report_qtsy:'',
        report_ddsl:'',report_bfsl:'',report_fpsl:'',report_yxsl:''
    }
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
    [SET_DETAILS]:(state,action) => {
        const {details} = action.payload;
        return {
            ...state,
            details:{...details}
        }
    }
};

export default createReducer(initialState,actionHandler)
