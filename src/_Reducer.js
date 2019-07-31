'use strict';
import { combineReducers } from 'redux'
import loginIn from './pages/Login/_reducer'
import Menus from './pages/Home/_reducer'
import User from './pages/Ucenter/_reducer'
import { MAftersale, DAftersale, ADtails } from './pages/Aftersale/_reducer'
import { MDReport, NMDReport, MRDetails, DDReport, MWReport } from './pages/Report/_reducer'
import { COAchievement, CUAchievement, QUAchievement } from './pages/Achievement/_reducer'
import { OQDechangeOrder, OQDeChangeOrderDetails, OQMyChangeOrder, OQMyChangeOrderDetails, OQDeContract, OQDeContractDetails, OQDeOrder, OQDeOrderDetails, OQMyOrder, OQDeQuota, OQDeQuotaDetails, OQMyQuota, OQMyContract, OQMyContractDetails, OQMyOrderDetails, OQMyQuotaDetails } from './pages/OrderQuota/_reducer';
import { ReviewContract, ReviewContractDetails, ReviewOrderChange, ReviewOrderChangeDetails, ReviewInvoice, ReviewInvoiceDetails, ReviewOrder, ReviewOrderDetails } from './pages/Review/_reducer'
import { ClientMyClient, ClientMyClientDetails, MyFollowList, ClientDeClient, ClientDeClientDetails, DeFollowList } from './pages/client/_reducer'


const rootReducer = combineReducers({
    loginIn, Menus, User, MDReport, NMDReport, MRDetails, DDReport, MWReport, COAchievement, CUAchievement,
    QUAchievement, MAftersale, DAftersale, ADtails,
    OQDechangeOrder, OQDeChangeOrderDetails, OQMyChangeOrder, OQMyChangeOrderDetails, OQDeContract, OQDeContractDetails, OQDeOrder, OQDeOrderDetails, OQMyOrder, OQDeQuota, OQDeQuotaDetails, OQMyQuota, OQMyContract, OQMyContractDetails, OQMyOrderDetails, OQMyQuotaDetails,
    ReviewContract, ReviewContractDetails, ReviewOrderChange, ReviewOrderChangeDetails, ReviewInvoice, ReviewInvoiceDetails, ReviewOrder,
    ClientMyClient, ClientMyClientDetails, MyFollowList, ClientDeClient, ClientDeClientDetails, DeFollowList, ReviewOrderDetails
});

export default rootReducer;//导出，作为统一入口