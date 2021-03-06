'use strict';
import axios from "axios";
import * as types from './_actionTypes'
import {login as loginService} from '../../_Service'

const login = (data, loginErr=null) => {
    return dispatch => {
        dispatch(isLogining());
        loginService(data).then(({status,data, msg}) => {
            if (status) {
                axios.defaults.headers.common['token'] = data;
                dispatch(loginSuccess())
            } else {
                // alert(msg)
                dispatch(()=>{loginErr && loginErr(msg)})
                // dispatch(loginSuccess())
            }
        }).catch(() => {
            dispatch(loginError(false))
        })
    }
};

function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function loginSuccess(user) {
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    }
}

function loginError() {
    return {
        type: types.LOGIN_IN_ERROR,
    }
}

export default {
    login
}