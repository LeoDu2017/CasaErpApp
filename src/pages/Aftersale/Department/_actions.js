import {LOADING_AFTERSALE,LOADING_SUCCESS,LOADING_ERROR,SET_DEPARTMENT} from "./_actionTypes";
import {Aftersale_fetch_department} from "../../../_Service";


const fetch_department = (data) => {
    return (dispatch) => {
        dispatch(doing());
        Aftersale_fetch_department(data).then(
            ({status,data,mag}) => {
                if(status){
                    dispatch(success());
                    dispatch(setDepartment(data))
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
    fetch_department
}