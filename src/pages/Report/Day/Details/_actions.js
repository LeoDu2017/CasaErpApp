import {FETCH_REPORT_DETAIL,FETCH_REPORT_SUCCESS,FETCH_REPORT_ERROR,UPDATE_REPORT,SET_REPORT} from './_actionTypes'
import {Report_fetch_mine_detail,Report_update_mine} from "../../../../_Service";
const init_details ={
    details:{
        id: 0,
        report_day: "",
        work_content: "",
        num_fp: 0,
        num_yx: 0,
        num_wx: 0,
        num_dd: 0,
        num_bj: 0,
        num_zs: 0,
        num_wxin: 0,
        num_dds: 0,
        num_bf: 0,
        num_jjwt: "",
        report_status: 0
    }
};
const fetch_report = (data) => {
    const {id} = data;
    return dispatch => {
        dispatch(doing());
        id ? dispatch(()=>{
            Report_fetch_mine_detail(data).then(
                ({status,data,msg}) => {
                    if(status){
                        dispatch(success());
                        dispatch(set_detail(data))
                    }else{

                    }
                }
            ).catch()
        }) : dispatch(()=>{
            dispatch(success());
            dispatch(set_detail(init_details))
        })
    }
};
const update_report = (data,successCallback=null,failCallback=null) => {
    return dispatch => {
        Report_update_mine(data).then(
            ({status,data,msg}) => {
                if(status){
                    dispatch(()=>{successCallback && successCallback()})
                }else{
                    dispatch(()=>{failCallback && failCallback(msg)})
                }
            }
        ).catch()
    }
};
function set_detail(details){
    return {
        type:SET_REPORT,
        payload:{details}
    }
}
function doing(){
    return{
        type:FETCH_REPORT_DETAIL
    }
}
function success(){
    return{
        type:FETCH_REPORT_SUCCESS,
    }
}
function error(){
    return{
        type:FETCH_REPORT_ERROR
    }
}
export default {
    fetch_report,update_report
}