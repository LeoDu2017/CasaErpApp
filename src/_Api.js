const Development = false;
const server = Development ?'http://app.casaerp.cn':'https://app.casaerp.com';

const API = {
    Login: `${server}/Login/login`,
    /*业绩系统接口
   * fetch_years: 业绩统计年份
   * fetch_sales: 销售业绩数据
   * fetch_customs: 客户数据
   * fetch_quotations: 报价数据
   * */
    Achievement:{
        fetch_years: `${server}/Statistics/getStatisticsYear`,
        fetch_sales: `${server}/Statistics/comprehensiveStatistics`,
        fetch_customs: `${server}/Statistics/customerStatistics`,
        fetch_quotations: `${server}/Statistics/quoteStatistics`,
    },
    /*售后系统接口
    * fetch_mine:我的售后到列表
    * fetch_department:部门售后单列表
    * fetch_detail: 售后单详情
    * fetch_status_list: 售后单状态列表
    * fetch_filter_options: 售后单处理状态列表
    * */
    Aftersale:{
        fetch_mine:`${server}/Aftersale/getMyProcessOrderAfterSaleList`,
        fetch_department:`${server}/Aftersale/getDeptOrderAfterSaleList`,
        fetch_detail:`${server}/Aftersale/orderAfterSaleDetail`,
        fetch_status_list:`${server}/Aftersale/getChangeOrderAfterSaleStatusList`,
        fetch_my_filter_options:`${server}/Aftersale/getMyProcessOrderAfterSaleChoose`,
    },

    // 发货单详情
    Invoice_getDetails: `${server}/Logistics/getSendInfo`,

    // 跟进接口
    Follow_getList: `${server}/Customer/getCustomerRecordList`,

    // 待审核接口
    Review_Contract_getList: `${server}/Order/waitCheckApprovalList`,
    Review_OrderChange_getList: `${server}/Order/waitCheckChangeOrderList`,
    Review_Invoice_getList: `${server}/Logistics/waitCheckSendList`,
    Review_Order_getList: `${server}/Aftersale/auditOrderAfterSaleList`,
    Review_order_getDetails: `${server}/Aftersale/auditOrderAfterSaleDetail`,

    // 订单与报价接口
    OQ_myChangeOrder_getData: `${server}/Order/getMyChangeOrderList`,
    OQ_deChangeOrder_getData: `${server}/Order/getDeptChangeOrderList`,
    OQ_changeOrder_getdetails: `${server}/Order/getOrderChangeInfo`,
    OQ_myOrder_getData: `${server}/Order/getMyOrderList`,
    OQ_deContract_getData: `${server}/Order/getDeptApprovalList`,
    OQ_Contract_getDetails: `${server}/Order/getApprovalInfo`,
    OQ_myContract_getdata: `${server}/Order/getMyApprovalList`,
    OQ_deOrder_getData: `${server}/Order/getDeptOrderList`,
    OQ_order_getDetails: `${server}/Order/getOrderInfo`,
    OQ_deQuota_getData: `${server}/Quotesales/getDeptQuoteList`,
    OQ_quota_getDetails: `${server}/Quotesales/getQuoteView`,
    OQ_myQuota_getData: `${server}/Quotesales/getQuoteList`,

    // 客户系统
    Client_myClient_getList: `${server}/Customer/getMyCustomerList`,
    Client_Client_getDetails: `${server}/Customer/getCustomerDetail`,
    Client_deClient_getList: `${server}/Customer/getDeptCustomerList`,
    
};

export default API