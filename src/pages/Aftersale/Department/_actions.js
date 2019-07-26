import {LOADING_AFTERSALE,LOADING_SUCCESS,LOADING_ERROR} from "./_actionTypes";

const sales = [
    {
        contract_num:'HBXD20180935BJ',
        customer_name:'安宁',
        project_name:'顺义别墅',
        distributor:'嵩利民',
        status:'销售经理审核',
        id:'001'
    },{
        contract_num:'HBXD20180935BJ',
        customer_name:'安宁',
        project_name:'顺义别墅',
        distributor:'嵩利民',
        status:'销售经理审核',
        id:'002'
    },{
        contract_num:'HBXD20180935BJ',
        customer_name:'安宁',
        project_name:'顺义别墅',
        distributor:'嵩利民',
        status:'销售经理审核',
        id:'003'
    }
];

const load = () =>{
    return dispatch => {
        dispatch(doing());
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                dispatch(success(sales)); // 登录请求完成
            }).catch((e) => {
                dispatch(error(false)); // 登录请求出错
            })
    }
};
function doing(){
    return {
        type: LOADING_AFTERSALE
    }
}
function success(sales){
    return {
        type:LOADING_SUCCESS ,
        sales
    }
}
function error(){
    return {
        type: LOADING_ERROR
    }
}
export default {
    load
}