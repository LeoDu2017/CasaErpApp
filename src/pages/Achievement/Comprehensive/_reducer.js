'use strict';
import {
    LOADING_ERROR,
    LOADING_SUCCESS,
    LOADED_YEARS,
    SET_SALES
} from "./_actionTypes";
import {createReducer,formatNum} from '../../../_Util';

const initialState = {
    status:'加载列表',
    isSuccess:false,
    year_sale: 0,
    month_sale: 0,
    per_month_sale: [],
    dept_sale: [],
    designer_sale: [],
    person_sale: [],
};
const actionHandler = {

    [LOADING_SUCCESS]:(state,action) => {
        return {
            ...state,
            isSuccess: true,
            comprehensive: action.comprehensive,
        }
    },
    [LOADING_ERROR]:(state,action) => {
        return {
            ...state,
            isSuccess: false,
            status:'信息加载失败，请稍后重试...'
        }
    },
    [LOADED_YEARS]:(state,action) => {
        return {
            ...state,
            isSuccess: true,
            years: action.years
        }
    },
    [SET_SALES]:(state,action) => {
        const {year_sale,month_sale,per_month_sale,dept_sale,designer_sale,person_sale} = action;
        return {
            ...state,
            year_sale:formatNum(year_sale),
            month_sale:formatNum(month_sale),
            per_month_sale,
            dept_sale,
            designer_sale,
            person_sale,
        }
    },
};
export default createReducer(initialState,actionHandler)