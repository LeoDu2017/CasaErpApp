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
// 售后系统_订单处理状态
export function Aftersale_fetch_my_fliters(){
    return request({
        url: API.Aftersale.fetch_my_filter_options,
        method: 'post'
    })
}