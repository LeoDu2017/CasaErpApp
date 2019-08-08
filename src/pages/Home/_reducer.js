'use strict';
import * as types from './_actionTypes';
import { createReducer } from '../../_Util'

const initialState = {
    Menus: []
}


const actionHandler = {
    [types.MENU_GET]: (state, action) => {
        return {
            ...state,
            Menus: action.Menus
        }
    },
    default: (state) => {
        return state
    }
};

export default createReducer(initialState, actionHandler)