/**
 * Created by Leo on 2019/7/17 0012
 */
import React from 'react';
import {Provider} from 'react-redux'
import Router from './_Router'
import ConfigureStore from './_ConfigureStore'
const store = ConfigureStore();
const Navigation = ()=>{
    return (
        <Provider store = {store}>
            <Router/>
        </Provider>
    )
};
export default Navigation;