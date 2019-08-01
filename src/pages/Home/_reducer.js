'use strict';

import {createReducer} from '../../_Util'

const initialState = [
    {
        name: '待审核',
        sub: [
            {
                icon: require('../../assets/images/home/contractApproval.png'),
                name: '合同审批',
                path: 'Review/ContractApproval'
            }, {
                icon: require('../../assets/images/home/orderChange.png'),
                name: '订单变更',
                path: 'Review/OrderChange'
            }, {
                icon: require('../../assets/images/home/orderReview.png'),
                name: '售后单',
                path: 'Review/Order'
            }, {
                icon: require('../../assets/images/home/invoice.png'),
                name: '发货单',
                path: 'Review/Invoice'
            }
        ]
    },{
        name: '客户系统',
        sub: [
            {
                icon: require('../../assets/images/home/myClient.png'),
                name: '我的客户',
                path: 'Client/MyClient'
            }, {
                icon: require('../../assets/images/home/departmentClient.png'),
                name: '部门客户',
                path: 'Client/DepartmentClient'
            }, {
                icon: require('../../assets/images/home/myFollow.png'),
                name: '我的跟进',
                path: 'Client/MyFollow'
            }, {
                icon: require('../../assets/images/home/departmentFollow.png'),
                name: '部门跟进',
                path: 'Client/DepartmentFollow'
            }
        ]
    }, {
        name: '订单与报价',
        sub: [
            {
                icon: require('../../assets/images/home/myQuote.png'),
                name: '我的报价',
                path: 'OrderQuota/MyQuota'
            }, {
                icon: require('../../assets/images/home/departmentQuote.png'),
                name: '部门报价',
                path: 'OrderQuota/DepartmentQuota'
            }, {
                icon: require('../../assets/images/home/myOrder.png'),
                name: '我的订单',
                path: 'OrderQuota/MyOrder'
            }, {
                icon: require('../../assets/images/home/departmentOrder.png'),
                name: '部门订单',
                path: 'OrderQuota/DepartmentOrder'
            }, {
                icon: require('../../assets/images/home/myContract.png'),
                name: '我的合同审批',
                path: 'OrderQuota/MyContractApproval'
            }, {
                icon: require('../../assets/images/home/departmentContract.png'),
                name: '部门合同审批',
                path: 'OrderQuota/DepartmentContractApproval'
            }, {
                icon: require('../../assets/images/home/myChangeOrder.png'),
                name: '我的变更订单',
                path: 'OrderQuota/MyChangeOrder'
            }, {
                icon: require('../../assets/images/home/departmentChangeOrder.png'),
                name: '部门变更订单',
                path: 'OrderQuota/DepartmentChangeOrder'
            }
        ]
    }, {
        name: '物流与售后',
        sub: [
            {
                icon: require('../../assets/images/home/myAfterSaleOrder_submit.png'),
                name: '我的售后单',
                path: 'AftersaleSystem/My',
                params: {showHeaderTitle:false,showClear: false}
            }, {
                icon: require('../../assets/images/home/departmentAfterSaleOrder.png'),
                name: '部门售后单',
                path: 'AftersaleSystem/Department'
            }, {
                icon: require('../../assets/images/home/myInvoice.png'),
                name: '我的发货单',
                path: ''
            }, {
                icon: require('../../assets/images/home/departmentInvoice.png'),
                name: '部门发货单',
                path: ''
            }
        ]
    }, {
        name: '日报系统',
        sub: [
            {
                icon: require('../../assets/images/home/myAfterSaleOrder_submit.png'),
                name: '我的日报',
                path: 'ReportSystem/Day/MyReport'
            }, {
                icon: require('../../assets/images/home/myAfterSaleOrder_deal.png'),
                name: '部门日报',
                path: 'ReportSystem/Day/DeReport'
            }, {
                icon: require('../../assets/images/home/departmentAfterSaleOrder.png'),
                name: '我的周报',
                path: 'ReportSystem/Week/MyReport'
            }, {
                icon: require('../../assets/images/home/pendingReviewAfterSaleOrder.png'),
                name: '部门周报',
                path: 'ReportSystem/Week/DeReport'
            }
        ]
    }, {
        name: '业绩系统',
        sub: [
            {
                icon: require('../../assets/images/home/comprehensiveStatistics.png'),
                name: '综合系统',
                path: 'AchievementSystem/Comprehensive',
                params:{years:[]}
            }, {
                icon: require('../../assets/images/home/customerStatistics.png'),
                name: '客户系统',
                path: 'AchievementSystem/Customer',
                params:{years:[]}
            }, {
                icon: require('../../assets/images/home/quotationStatistics.png'),
                name: '报价统计',
                path: 'AchievementSystem/Quotation',
                params:{years:[]}
            }
        ]
    }
];

const actionHandler = {
    default: (state) => {
        return state
    }
};

export default createReducer(initialState, actionHandler)