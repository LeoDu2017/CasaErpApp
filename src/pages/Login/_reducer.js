'use strict';
import * as types from './_actionTypes'
import {createReducer} from '../../_Util'

const initialState = {
    status:'点击登陆',
    isSuccess:false,
    user:null
};
const actionHandler = {
    [types.LOGIN_IN_DOING] : (state,action)=>{
        return {
            ...state,
            status:'正在登陆...',
            isSuccess:false,
            user:null
        }
    },
    [types.LOGIN_IN_DONE]:(state,action)=>{
        return {
            ...state,
            status:'登陆成功',
            isSuccess:true,
            user:action.user
        }
    },
    [types.LOGIN_IN_ERROR]:(state,action)=>{
        return {
            ...state,
            status:'登录出错...',
            isSuccess:true,
            user:null
        }
    },
};

export default createReducer(initialState,actionHandler)