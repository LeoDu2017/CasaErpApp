'use strict'

import {createReducer} from '../../_Util'

const initialState = {
    name: '四月天',
    title: 'UI设计师',
    telephone: '18012345678',
    department: '杭州分公司',
    avatar: require('../../assets/images/ucenter/avatar.png'),
    password: ''
};

const actionHandler = {
    modify_password: (state) => {
        return state
    }
};

export default createReducer(initialState, actionHandler)