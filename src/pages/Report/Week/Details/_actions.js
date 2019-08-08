import {LOADING_REPORTS,LOADING_SUCCESS,LOADING_ERROR,SET_DETAILS} from './_actionTypes'
import {Report_fetch_week_detail} from "../../../../_Service";

const fetch_data = (data,successCallback=null,failCallback=null) => {
    return (dispatch) => {
        dispatch(doing());
        Report_fetch_week_detail(data).then(
            ({status,data,msg}) => {
                if(status){
                    dispatch(success());
                    dispatch(set_reports(data));
                    dispatch(()=>{successCallback && successCallback(data)})
                }else{
                    dispatch(()=>{failCallback && failCallback(msg)})
                }
            }
        ).catch()
    }
};
function doing(){
    return {
        type : LOADING_REPORTS
    }
}
function success(){
    return {
        type : LOADING_SUCCESS
    }
}
function error(){
    return {
        type : LOADING_ERROR
    }
}
function set_reports(details){
    return {
        type: SET_DETAILS,
        payload:{details}
    }
}
export default{
    fetch_data
}