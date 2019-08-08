import request from './_Request'
import API from './_Api'

// 登录
export function login(data){
    return request({
        url:API.Login,
        method: 'post',
        data:{
            ...data
        }
    })
}

// 菜单
export function menu() {
    return request({
        url:API.Menu,
        method: 'post',
    })
}

// 公共数据字典
export function DataDictionary(data) {
    return request({
        url: API.DataDictionary,
        method: 'post',
        data
    })
}

// 发货单详情
export function invoiceDetails(data) {
    return request({
        url: API.Invoice_getDetails,
        method: 'post',
        data
    })
}

// 待审核
export function reContract(data) {
    return request({
        url: API.Review_Contract_getList,
        method: 'post',
        data
    })
}

export function reOrderChange(data) {
    return request({
        url: API.Review_OrderChange_getList,
        method: 'post',
        data
    })
}

export function reInvoice(data) {
    return request({
        url: API.Review_Invoice_getList,
        method: 'post',
        data
    })
}

export function reOrder(data) {
    return request({
        url: API.Review_Order_getList,
        method: 'post',
        data
    })
}

export function reOrderDetails(data) {
    return request({
        url: API.Review_order_getDetails,
        method: 'post',
        data
    })
}

export function reInvoicePost(data) {
    return request({
        url: API.Review_invoice_postData,
        method: 'post',
        data
    })
}

export function reOrderPost(data) {
    return request({
        url: API.Review_order_postData,
        method: 'post',
        data
    })
}

export function reChangeOrderPost(data) {
    return request({
        url: API.Review_changeOrder_postData,
        method: 'post',
        data
    })
}

export function reContractPost(data) {
    return request({
        url: API.Review_contract_postData,
        method: 'post',
        data
    })
}

export function reContractFilter(data) {
    return request({
        url: API.Review_contract_filter,
        method: 'post',
        data
    })
}

export function reChangeOrderFilter(data) {
    return request({
        url: API.Review_ChangeOrder_filter,
        method: 'post',
        data
    })
}

export function reInvoiceFilter(data) {
    return request({
        url: API.Review_Invoice_filter,
        method: 'post',
        data
    })
}


// 订单与报价
export function myChangeOrder(data) {
    return request({
        url: API.OQ_myChangeOrder_getData,
        method: 'post',
        data
    })
}

export function deChangeOrder(data) {
    return request({
        url: API.OQ_deChangeOrder_getData,
        method: 'post',
        data
    })
}

export function ChangeOrderDetails(data) {
    return request({
        url: API.OQ_changeOrder_getdetails,
        method: 'post',
        data
    })
}

export function myOrder(data) {
    return request({
        url: API.OQ_myOrder_getData,
        method: 'post',
        data
    })
}

export function deContract(data) {
    return request({
        url: API.OQ_deContract_getData,
        method: 'post',
        data
    })
}

export function ContractDetails(data) {
    return request({
        url: API.OQ_Contract_getDetails,
        method: 'post',
        data
    })
}

export function myContract(data) {
    return request({
        url: API.OQ_myContract_getdata,
        method: 'post',
        data
    })
}

export function deOrder(data) {
    return request({
        url: API.OQ_deOrder_getData,
        method: 'post',
        data
    })
}

export function OrderDetails(data) {
    return request({
        url: API.OQ_order_getDetails,
        method: 'post',
        data
    })
}

export function deQuota(data) {
    return request({
        url: API.OQ_deQuota_getData,
        method: 'post',
        data
    })
}

export function QuotaDetails(data) {
    return request({
        url: API.OQ_quota_getDetails,
        method: 'post',
        data
    })
}

export function myQuota(data) {
    return request({
        url: API.OQ_myQuota_getData,
        method: 'post',
        data
    })
}

export function deOrderChangeFilter(data) {
    return request({
        url: API.OQ_deOrderChange_filter,
        method: 'post',
        data
    })
}

export function deContractFilter(data) {
    return request({
        url: API.OQ_deContract_filter,
        method: 'post',
        data
    })
}

export function deOrderFilter(data) {
    return request({
        url: API.OQ_deOrder_filter,
        method: 'post',
        data
    })
}

export function deQuotaFilter(data) {
    return request({
        url: API.OQ_deQuota_filter,
        method: 'post',
        data
    })
}

export function myOrderChangeFilter(data) {
    return request({
        url: API.OQ_myOrderChange_filter,
        method: 'post',
        data
    })
}

export function myContractFilter(data) {
    return request({
        url: API.OQ_myContract_filter,
        method: 'post',
        data
    })
}

export function myOrderFilter(data) {
    return request({
        url: API.OQ_myOrder_filter,
        method: 'post',
        data
    })
}

export function myQuotaFilter(data) {
    return request({
        url: API.OQ_myQuota_filter,
        method: 'post',
        data
    })
}

// 客户系统
export function myClient(data) {
    return request({
        url: API.Client_myClient_getList,
        method: 'post',
        data
    })
}

export function ClientDetails(data) {
    return request({
        url: API.Client_Client_getDetails,
        method: 'post',
        data
    })
}

export function deClient(data) {
    return request({
        url: API.Client_deClient_getList,
        method: 'post',
        data
    })
}

export function ClientEdit(data) {
    return request({
        url: API.Client_edit_post,
        method: 'post',
        data
    })
}

export function FollowAdd(data) {
    return request({
        url: API.Client_follow_add,
        method: 'post',
        data
    })
}

export function distributionList(data) {
    return request({
        url: API.Client_distribution_list,
        method: 'post',
        data
    })
}

export function myClientFilter(data) {
    return request({
        url: API.Client_myClient_filter,
        method: 'post',
        data
    })
}

export function deClientFilter(data) {
    return request({
        url: API.Client_deClient_filter,
        method: 'post',
        data
    })
}

export function deClientAssign(data) {
    return request({
        url: API.Client_assign_post,
        method: 'post',
        data
    })
}

export function clientConnect(data) {
    return request({
        url: API.Client_connect_post,
        method: 'post',
        data
    })
}

// 跟进
export function FollowList(data) {
    return request({
        url: API.Follow_getList,
        method: 'post',
        data
    })
}

// 综合业绩_年份
export function Achievement_fetch_years(){
    return request({
        url:API.Achievement.fetch_years,
        method: 'post',
    })
}
// 综合业绩_销售数据
export function Achievement_fetch_sales(data){
    return request({
        url:API.Achievement.fetch_sales,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 客户系统_客户数据
export function Achievement_fetch_customs(data){
    return request({
        url:API.Achievement.fetch_customs,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 报价系统_报价信息
export function Achievement_fetch_quotations(data){
    return request({
        url:API.Achievement.fetch_quotations,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 售后系统_我的售后单
export function Aftersale_fetch_mine(data){
    return request({
        url:API.Aftersale.fetch_mine,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 售后系统_部门售后单
export function Aftersale_fetch_department(data){
    return request({
        url:API.Aftersale.fetch_department,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 售后系统_售后单详情
export function Aftersale_fetch_detail(data){
    return request({
        url:API.Aftersale.fetch_detail,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 售后系统_订单状态
export function Aftersale_fetch_status_list(){
    return request({
        url: API.Aftersale.fetch_status_list,
        method: 'post'
    })
}
// 售后系统_我的售后单筛选条件
export function Aftersale_fetch_my_fliters(){
    return request({
        url: API.Aftersale.fetch_my_filter_options,
        method: 'post'
    })
}
// 售后系统_部门售后单筛选条件
export function Aftersale_fetch_department_fliters(){
    return request({
        url: API.Aftersale.fetch_department_filter_options,
        method: 'post'
    })
}
// 售后系统_修改售后单的状态
export function Aftersale_update_my_status(data){
    return request({
        url: API.Aftersale.update_my_status,
        method: 'post',
        data
    })
}
// 售后系统_提交处理
export function Aftersale_post_my_handle(data){
    return request({
        url: API.Aftersale.post_my_handle,
        method: 'post',
        data
    })
}
// 物流系统_我的发货单
export function Logistics_fetch_mine(data){
    return request({
        url:API.Logistics.fetch_mine,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 物流系统_部门发货单
export function Logistics_fetch_department(data){
    return request({
        url:API.Logistics.fetch_department,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 物流系统_发货单详情
export function Logistics_fetch_details(data){
    return request({
        url:API.Logistics.fetch_detail,
        method: 'post',
        data:{
            ...data
        }
    })
}
// 物流系统_我的发货单_筛选条件
export function Logistics_fetch_my_fliters(){
    return request({
        url: API.Logistics.fetch_my_filter_options,
        method: 'post'
    })
}
// 物流系统_部门发货单_筛选条件
export function Logistics_fetch_department_fliters(){
    return request({
        url: API.Logistics.fetch_department_filter_options,
        method: 'post'
    })
}
//个人中心_获取个人信息
export function Ucenter_fetch_info(){
    return request({
        url: API.Ucenter.fetch_data,
        method: 'post'
    })
}
//个人中心_修改密码
export function Ucenter_update_password(data){
    return request({
        url: API.Ucenter.update_password,
        method: 'post',
        data
    })
}
//个人中心_修改手机号
export function Ucenter_update_mobile(data){
    return request({
        url: API.Ucenter.update_mobile,
        method: 'post',
        data
    })
}
//日报系统_我的日报
export function Report_fetch_mine(data){
    return request({
        url: API.Report.fetch_mine,
        method: 'post',
        data
    })
}
//日报系统_添加&编辑我的日报
export function Report_update_mine(data){
    return request({
        url: API.Report.update_mine,
        method: 'post',
        data
    })
}
//日报系统_我的日报详情
export function Report_fetch_mine_detail(data){
    return request({
        url: API.Report.fetch_mine_detail,
        method: 'post',
        data
    })
}
//日报系统_部门日报
export function Report_fetch_department(data){
    return request({
        url: API.Report.fetch_department,
        method: 'post',
        data
    })
}
//日报系统_我的周报
export function Report_fetch_mine_week(data){
    return request({
        url: API.Report.fetch_mine_week,
        method: 'post',
        data
    })
}
//日报系统_部门周报
export function Report_fetch_department_week(data){
    return request({
        url: API.Report.fetch_department_week,
        method: 'post',
        data
    })
}
//日报系统_周报详情
export function Report_fetch_week_detail(data){
    return request({
        url: API.Report.fetch_week_detail,
        method:'post',
        data
    })
}