'use strict';
import {LOADING_CUSTOMER, LOADING_ERROR, LOADING_SUCCESS, SET_CUSTOMER} from "./_actionTypes";
import {createReducer,formatNum} from '../../../_Util';

const initialState = {
    status:'加载列表',
    isSuccess:false,
    day_customer: 0,
    month_customer: 0,
    year_customer: 0,
    per_month_customer:[],
    dept_customer:[],
    late_week_customer:[{
        md:[0],
        number:[0],
    }],
};

const actionHandler = {
    [LOADING_CUSTOMER]:(state,action) =>{
        return {
            ...state,
            status:'正在加载...',
        }
    },
    [LOADING_SUCCESS]:(state,action) => {
        return {
            ...state,
            isSuccess: true,
            customer: action.customer,
        }
    },
    [LOADING_ERROR]:(state,action) => {
        return {
            ...state,
            isSuccess: false,
            status:'信息加载失败，请稍后重试...'
        }
    },
    [SET_CUSTOMER]:(state,{
        day_customer,
        month_customer,
        year_customer,
        per_month_customer,
        late_week_customer,
        dept_customer}) => {
        return {
            ...state,
            day_customer:formatNum(day_customer),
            month_customer:formatNum(month_customer),
            year_customer:formatNum(year_customer),
            per_month_customer:[...per_month_customer],
            dept_customer:[...dept_customer],
            late_week_customer:[...late_week_customer],
        }
    }
};
export default createReducer(initialState,actionHandler)