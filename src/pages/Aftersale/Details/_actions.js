import {LOADING_AFTERSALE,SET_DETAIL} from "./_actionTypes";
import {Aftersale_fetch_detail,Aftersale_post_my_handle} from "../../../_Service";

const fetch_detail = (data) => {
    return (dispatch) => {
        dispatch(doing());
        Aftersale_fetch_detail(data).then(
            ({status,data})=>{
                if(status){
                    dispatch(setDetail(data))
                }else{

                }
            }
        ).catch()
    }
};
const post_handle = (data,callBack) => {
    return (dispatch) => {
        Aftersale_post_my_handle(data).then(
            ({status})=>{
                if(status){
                    callBack()
                }
            }
        ).catch()
    }
};
function doing(){
    return {
        type: LOADING_AFTERSALE
    }
}

function setDetail(data){
    return {
        type: SET_DETAIL,
        payload: data
    }
}
export default {
    fetch_detail,
    post_handle
}