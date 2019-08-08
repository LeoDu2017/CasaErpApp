import {LOADING_REPORTS,LOADING_SUCCESS,LOADING_ERROR,SET_REPORTS} from './_actionTypes'
import {Report_fetch_mine_week} from "../../../../_Service";

const fetch_data = (data,successCallback=null,failCallback=null) => {
    return (dispatch) => {
        dispatch(doing());
        Report_fetch_mine_week(data).then(
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
function set_reports(reports){
    return {
        type: SET_REPORTS,
        payload:{reports}
    }
}
export default{
    fetch_data
}