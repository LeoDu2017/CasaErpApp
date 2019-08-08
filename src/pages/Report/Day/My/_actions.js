import {LOADING_REPORTS,LOADING_SUCCESS,LOADING_ERROR,SET_REPORTS} from './_actionTypes'
import {Report_fetch_mine} from "../../../../_Service";

const fetch_data = (data,successCallback=null,failCallback=null) => {
    return (dispatch) => {
        Report_fetch_mine(data).then(
            ({status,data,msg}) => {
                if(status === 1){
                    dispatch(set_reports(data));
                    dispatch(()=>{successCallback && successCallback(data)})
                }else{
                    dispatch(()=>{failCallback && failCallback(status)})
                }
            }
        ).catch()
    }
};
function set_reports(reports){
    return {
        type : SET_REPORTS,
        payload: {reports}
    }
}
function doing(){
    return {
        type : LOADING_REPORTS
    }
}
function success(){
    return {
        type : LOADING_SUCCESS,
    }
}
function error(){
    return {
        type : LOADING_ERROR
    }
}
export default{
    fetch_data
}