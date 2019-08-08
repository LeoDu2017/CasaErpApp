import {LOADING_DETAILS,SET_DETAIL,LOADING_SUCCESS} from "./_actionTypes";
import {Logistics_fetch_details} from "../../../_Service";

const fetch_detail = (data) => {
    return (dispatch) => {
        dispatch(doing());
        Logistics_fetch_details(data).then(
            ({status,data})=>{
                if(status){
                    dispatch(success());
                    dispatch(setDetail(data))
                }else{

                }
            }
        ).catch()
    }
};

function doing(){
    return {
        type: LOADING_DETAILS
    }
}
function success(){
    return {
        type: LOADING_SUCCESS
    }
}
function setDetail(data){
    return {
        type: SET_DETAIL,
        payload: data
    }
}
export default {
    fetch_detail
}