const Development = 0;
const server = Development ? 'http://app.casaerp.cn' : 'https://app.casaerp.com';

const API = {
    Login: `${server}/Login/login`,
    Menu: `${server}/User/getMenuList`,
    /*业绩系统接口
    * @fetch_years: 业绩统计年份
    * @fetch_sales: 销售业绩数据
    * @fetch_customs: 客户数据
    * @fetch_quotations: 报价数据
    * */
    Achievement: {
        fetch_years: `${server}/Statistics/getStatisticsYear`,
        fetch_sales: `${server}/Statistics/comprehensiveStatistics`,
        fetch_customs: `${server}/Statistics/customerStatistics`,
        fetch_quotations: `${server}/Statistics/quoteStatistics`,
    },
    /*售后系统接口
    * @fetch_mine:我的售后到列表
    * @fetch_department:部门售后单列表
    * @fetch_detail: 售后单详情
    * @fetch_status_list: 售后单状态列表
    * @fetch_filter_options: 售后单处理状态列表
    * @fetch_department_filter_options: 部门售后单筛选条件
    * @fetch_my_filter_options: 我的售后单筛选条件
    * */
    Aftersale: {
        fetch_mine: `${server}/Aftersale/getMyProcessOrderAfterSaleList`,
        fetch_department: `${server}/Aftersale/getDeptOrderAfterSaleList`,
        fetch_detail: `${server}/Aftersale/orderAfterSaleDetail`,
        fetch_status_list: `${server}/Aftersale/getChangeOrderAfterSaleStatusList`,
        fetch_my_filter_options: `${server}/Aftersale/getMyProcessOrderAfterSaleChoose`,
        fetch_department_filter_options: `${server}/Aftersale/getDeptOrderAfterSaleChoose`,
        update_my_status: `${server}/Aftersale/changeOrderAfterSaleStatus`,
        post_my_handle: `${server}/Aftersale/processOrderAfterSale`,
    },
    /*发货单接口
     * @fetch_mine: 我的发货单列表
     * @fetch_department: 部门下的发货单列表
     * @fetch_detail: 发货单详情
     * @fetch_my_filter_options:发货单页面的筛选内容
     * @fetch_department_filter_options:部门列表页筛选内容
     * */
    Logistics: {
        fetch_mine: `${server}/Logistics/getMySendList`,
        fetch_department: `${server}/Logistics/getDeptSendList`,
        fetch_detail: `${server}/Logistics/getSendInfo`,
        fetch_my_filter_options: `${server}/Logistics/getMySendListParam`,
        fetch_department_filter_options: `${server}/Logistics/getDeptSendListParam`,
    },
    /*个人中心
    * @fetch_data: 获取当前用户的信息
    * @update_password: 修改密码
    * @update_mobile: 修改用户手机号
    * */
    Ucenter: {
        fetch_data: `${server}/User/getUserInfo`,
        update_password: `${server}/User/updatePassword`,
        update_mobile:`${server}/User/updateUserMobile`,
    },
    /*日报系统
   * @fetch_mine:我的日报
   * @update_mine:添加我的日报
   * @fetch_mine_detail:我的日报详情
   * @fetch_department：部门日报
   * @fetch_department_filter:部门日报筛选项
   * @fetch_mine_week：我的周报
   * @fetch_department_week：部门周报
   * @fetch_week_detail：周报详情
   * @update_Reply：领导批复
   * @update_week: 新增和编辑周报
   * @filter_week: 部门周报筛选项
   * */
    Report:{
        fetch_mine:`${server}/Quotesales/getMyDayReport`,
        update_mine: `${server}/Quotesales/saveDayReport`,
        fetch_mine_detail:`${server}/Quotesales/getReportDatil`,
        fetch_department:`${server}/Quotesales/getDeptDayReport`,
        fetch_department_filter:`${server}/Quotesales/getDeptSx`,
        fetch_mine_week:`${server}/Reportwork/getMyWorkReport`,
        fetch_department_week:`${server}/Reportwork/getDeptWorkReport`,
        fetch_week_detail:`${server}/Reportwork/getReportWorkView`,
        update_Reply:`${server}/Reportwork/weekldpf`,
        update_week:`${server}/Reportwork/saveReportWorkEdit`,
        filter_week:`${server}/Reportwork/bmzbsx`
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
    Review_invoice_postData: `${server}/Logistics/CheckWaitSend`,
    Review_order_postData: `${server}/Aftersale/checkOrderAfterSale`,
    Review_changeOrder_postData: `${server}/Order/changeChangeOrderStatus`,
    Review_contract_postData: `${server}/Order/changeApprovalStatus`,
    Review_contract_filter: `${server}/Order/waitCheckApprovalListParam`,
    Review_ChangeOrder_filter: `${server}/Order/waitCheckChangeOrderListParam`,
    Review_Invoice_filter: `${server}/Logistics/waitCheckSendListParam`,

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
    OQ_deOrderChange_filter: `${server}/Order/getDeptChangeOrderListParam`,
    OQ_deContract_filter: `${server}/Order/getDeptApprovalListParam`,
    OQ_deOrder_filter: `${server}/Order/getDeptOrderListParam`,
    OQ_deQuota_filter: `${server}/quotesales/quoteSai`,
    OQ_myOrderChange_filter: `${server}/Order/getMyChangeOrderListParam`,
    OQ_myContract_filter: `${server}/Order/getMyApprovalListParam`,
    OQ_myOrder_filter: `${server}/Order/getMyOrderListParam`,
    OQ_myQuota_filter: `${server}/Quotesales/quote_status`,

    // 客户系统
    Client_myClient_getList: `${server}/Customer/getMyCustomerList`,
    Client_Client_getDetails: `${server}/Customer/getCustomerDetail`,
    Client_deClient_getList: `${server}/Customer/getDeptCustomerList`,
    Client_edit_post: `${server}/Customer/updateCustomer`,
    Client_follow_add: `${server}/Customer/addCustomerRecord`,
    Client_distribution_list: `${server}/Customer/getDeptBusinessMemberList`,
    Client_myClient_filter: `${server}/Customer/getMyCustomerChoose`,
    Client_deClient_filter: `${server}/Customer/getDeptCustomerChoose`,
    Client_assign_post: `${server}/Customer/assignCustomer`,
    Client_connect_post: `${server}/Customer/dockCustomer`,

    // 公共字典数据
    DataDictionary: `${server}/Common/getOptionList`
};

export default API