'use strict';
import { combineReducers } from 'redux'
import loginIn from './pages/Login/_reducer'
import Menus from './pages/Home/_reducer'
import User from './pages/Ucenter/_reducer'
import { MAftersale, DAftersale, ADtails } from './pages/Aftersale/_reducer'
import {MLogistics,DLogistics,LDtails} from './pages/Logistics/_Reducers'
import { MDReport, MRDetails, DDReport, MWReport,DWReport,WRDetails } from './pages/Report/_reducer'
import { COAchievement, CUAchievement, QUAchievement } from './pages/Achievement/_reducer'
import { OQDechangeOrder, OQMyChangeOrder, OQDeContract, OQDeOrder, OQMyOrder, OQDeQuota, OQMyQuota, OQMyContract } from './pages/OrderQuota/_reducer';
import { ReviewContract, ReviewOrderChange, ReviewInvoice, ReviewOrder } from './pages/Review/_reducer'
import { ClientMyClient, ClientDeClient } from './pages/client/_reducer'


const rootReducer = combineReducers({
    loginIn, Menus, User, MDReport, MRDetails, DDReport, MWReport,DWReport,WRDetails, COAchievement, CUAchievement,
    QUAchievement, MAftersale, DAftersale, ADtails,
    OQDechangeOrder, OQMyChangeOrder, OQDeContract, OQDeOrder, OQMyOrder, OQDeQuota, OQMyQuota, OQMyContract,
    ReviewContract, ReviewOrderChange, ReviewInvoice, ReviewOrder,
    ClientMyClient, ClientDeClient,MLogistics,DLogistics,LDtails
});

export default rootReducer;//导出，作为统一入口