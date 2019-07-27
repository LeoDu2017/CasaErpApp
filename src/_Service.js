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