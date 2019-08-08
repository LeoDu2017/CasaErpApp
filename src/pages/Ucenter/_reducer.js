'use strict';
import {SET_USER_DATA} from './_actionTypes'
import {createReducer} from '../../_Util'
const initialState = {
    user_name: '',
    user_mobile: '',
    comp_name: '',
    role_name:'',
};


const actionHandler = {
   [SET_USER_DATA]: (state,action) => {
       const {payload} = action;
       return {
           ...state,
           ...payload,
       }
    }
};

export default createReducer(initialState, actionHandler)