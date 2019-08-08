import {LOADING_AFTERSALE,LOADING_ERROR,SET_DEPARTMENT,CLEAR_DEPARTMENT,SET_STATUS,SET_FILTERS} from "./_actionTypes";
import {
    Aftersale_fetch_department,
    Aftersale_fetch_department_fliters,
    Aftersale_fetch_status_list,
} from "../../../_Service";



const fetch_data = (data,successCallback=null,failCallback=null) => {
    const {page} = data;
    return (dispatch) => {
        dispatch(doing());
        Aftersale_fetch_department(data).then(
            ({status,data}) => {
                if(status){

                    if(page === 1){
                        dispatch(clearState());
                    }
                    dispatch(setDepartment(data));
                    dispatch(fetch_status_list());
                    dispatch(fetch_filter_options());
                    dispatch(()=>{successCallback && successCallback(data)})
                }else{
                    dispatch(fail());
                    dispatch(()=>{failCallback && failCallback(data)})
                }
            }
        ).catch()
    }
};
// 获取修改状态列表
const fetch_status_list = () => {
    return (dispatch) => {
        Aftersale_fetch_status_list().then(
            ({status,data}) => {
                if(status){
                    dispatch(setStatus(data));
                }
            }
        ).catch()
    }
};
// 获取过滤选项列表
const fetch_filter_options = () => {
    return (dispatch) => {
        Aftersale_fetch_department_fliters().then(
            ({status,data}) => {
                if(status){
                    dispatch(setFilter(data));
                }else{
                    dispatch(fail());
                }
            }
        ).catch()
    }
};





function setDepartment(data){
    return {
        type:SET_DEPARTMENT,
        payload:{
            sales: data
        }
    }
}
function doing(){
    return {
        type: LOADING_AFTERSALE
    }
}
function error(){
    return {
        type: LOADING_ERROR
    }
}
function clearState() {
    return {
        type: CLEAR_DEPARTMENT
    }
}
function setStatus(data){
    return {
        type: SET_STATUS,
        payload: data
    }
}
function setFilter(data){
    return {
        type: SET_FILTERS,
        payload: data
    }
}
export default {
    fetch_data
}