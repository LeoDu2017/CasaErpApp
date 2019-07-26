'use strict';
import {LOADING_QUOTATION, LOADING_ERROR, LOADING_SUCCESS, SET_QUOTATIONS} from "./_actionTypes";
import {createReducer} from '../../../_Util';

const initialState = {
    status:'加载列表',
    isSuccess:false,
    year_quote:{
        order_number: 0,
        case_number: 0,
    },
    month_quote:{
        order_number: 0,
        case_number: 0,
    },
    day_quote:{
        order_number: 0,
        case_number: 0,
    },
    per_month_customer:[
        {
            month: 0,
            quote_number: 0,
            quote_prod_number:0
        }
    ],
    dept_customer:[
        {
            dept_name: '',
            quote_number: 0,
            quote_prod_number:0
        }
    ],
    late_week_customer:[
        {
            md: '',
            quote_number: 0,
            quote_prod_number:0
        }
    ]
};
const actionHandler = {
    [LOADING_QUOTATION]:(state,action) =>{
        return {
            ...state,
            status:'正在加载...',
        }
    },
    [LOADING_SUCCESS]:(state,action) => {
        return {
            ...state,
            isSuccess: true,
            quotation: action.quotation,
        }
    },
    [LOADING_ERROR]:(state,action) => {
        return {
            ...state,
            isSuccess: false,
            status:'信息加载失败，请稍后重试...'
        }
    },
    [SET_QUOTATIONS]:(state,action) => {
        return {
            ...state,
            year_quote: {...action.year_quote},
            month_quote: {...action.month_quote},
            day_quote:{...action.day_quote},
            per_month_customer: [...action.per_month_customer],
            dept_customer: [...action.dept_customer],
            late_week_customer: [...action.late_week_customer]
        }
    }
};
export default createReducer(initialState,actionHandler)