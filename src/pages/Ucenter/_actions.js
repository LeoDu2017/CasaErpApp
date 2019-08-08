import {MODIFY_PASSWORD,MODIFY_PHONE,FETCH_USER_DATA,SET_USER_DATA} from "./_actionTypes";
import {Ucenter_fetch_info,Ucenter_update_password,Ucenter_update_mobile} from "../../_Service";

const fetch_data = () => {
    return (dispatch) => {
        Ucenter_fetch_info().then(
            ({data,msg,status})=>{
                if(status){
                    dispatch(set_user_info(data))
                }
            }
        ).catch()
    }
};
const update_password = (data,succssCallback=null,failCallback=null) => {
    return (dispatch) => {
        Ucenter_update_password(data).then(
            ({data,msg,status})=>{
                if(status){
                    dispatch(()=>{succssCallback && succssCallback()})
                }else{
                    dispatch(()=>{failCallback && failCallback(msg)})
                }
            }
        ).catch()
    }
};
const update_mobile = (data,succssCallback=null,failCallback=null) => {
    return (dispatch) => {
        Ucenter_update_mobile(data).then(
            ({data,msg,status})=>{
                if(status){
                    dispatch(()=>{succssCallback && succssCallback()})
                }else{
                    dispatch(()=>{failCallback && failCallback(msg)})
                }
            }
        ).catch()
    }
};
function set_user_info(data){
    return {
        type:SET_USER_DATA,
        payload: data
    }
}

export default{
    fetch_data,
    update_password,
    update_mobile
}