import {
    LOADING_AFTERSALE,
    LOADING_SUCCESS,
    LOADING_ERROR,
    SET_MINE
} from "./_actionTypes";
import {Aftersale_fetch_mine} from "../../../_Service";


const load = () =>{
    return dispatch => {
        dispatch(doing());
        // let result = fetch('https://www.baidu.com/')
        //     .then((res) => {
        //         dispatch(success(sales)); // 登录请求完成
        //     }).catch((e) => {
        //         dispatch(error(false)); // 登录请求出错
        //     })
    }
};
const fetch_mine = (data) => {
    return (dispatch) => {
        dispatch(doing());
        Aftersale_fetch_mine(data).then(
            ({status,data,mag}) => {
               if(status){
                   dispatch(success());
                   dispatch(setMine(data))
               }else{
                   dispatch(fail());
               }
            }
        ).catch()
    }
};

function setMine(data){
    return {
        type:SET_MINE,
        payload:{
            sales: data
        }
    }
}
function fail(){

}

function doing(){
    return {
        type: LOADING_AFTERSALE
    }
}
function success(){
    return {
        type:LOADING_SUCCESS
    }
}
function error(){
    return {
        type: LOADING_ERROR
    }
}
export default {
    fetch_mine
}

// const sales = [
//     {
//         contract_num:'HBXD20180935BJ',
//         customer_name:'安宁',
//         project_name:'顺义别墅',
//         distributor:'嵩利民',
//         status:'销售经理审核',
//         id:'001'
//     },{
//         contract_num:'HBXD20180935BJ',
//         customer_name:'安宁',
//         project_name:'顺义别墅',
//         distributor:'嵩利民',
//         status:'销售经理审核',
//         id:'002'
//     },{
//         contract_num:'HBXD20180935BJ',
//         customer_name:'安宁',
//         project_name:'顺义别墅',
//         distributor:'嵩利民',
//         status:'销售经理审核',
//         id:'003'
//     }
// ];