import {LOADING_QUOTATION,LOADING_ERROR,LOADING_SUCCESS,SET_QUOTATIONS} from "./_actionTypes";
import {
    Achievement_fetch_years,
    Achievement_fetch_quotations
} from "../../../_Service";


// 模拟综合系统信息

const fetch_years = (navigation) => {
    return (dispatch) => {
        dispatch(doing());
        Achievement_fetch_years().then(({status,data,msg}) => {
            if(status){
                navigation.setParams({years:data});
                dispatch(fetch_quotations(data[0]));
            }else{
                alert(msg)
            }
        })

    }
};

function fetch_quotations(year){
    return (dispatch) => {
        Achievement_fetch_quotations({year}).then(
            ({status,data,msg}) => {
                if(status){
                    dispatch(setQuotations(data))
                }
            }
        )
    }
}

function update_quotations(year){
    return (dispatch) => {
        dispatch(doing());
        dispatch(fetch_quotations(year));
    }
}

function setQuotations(data){
    return {
        type: SET_QUOTATIONS,
        ...data
    }
}
function doing(){
    return {
        type : LOADING_QUOTATION
    }
}
function success(quotation){
    return {
        type : LOADING_SUCCESS,
        quotation
    }
}
function error(){
    return {
        type : LOADING_ERROR
    }
}
export default{
    fetch_years,
    update_quotations
}