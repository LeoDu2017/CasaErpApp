import {
    LOADING_COMPREHENSIVE,
    LOADING_ERROR,
    LOADING_SUCCESS,
    LOADED_YEARS,
    SET_SALES
} from "./_actionTypes";
import {
    Achievement_fetch_years,
    Achievement_fetch_sales
} from '../../../_Service'

const fetch_years = (navigation) => {
    return (dispatch) => {
        dispatch(doing());
        Achievement_fetch_years().then(({status,data,msg}) => {
            if(status){
                dispatch(fetch_sales(data[0]));
                navigation.setParams({years:data})
            }else{
                alert(msg)
            }
        })

    }
};
const fetch_sales = (year) => {
    return (dispatch) => {
        Achievement_fetch_sales({year}).then(({status,data,msg}) => {
            if(status){
                dispatch(set_sales(data))
            }
        })
    }
};
function update_sales(year){
    return (dispatch) => {
        dispatch(fetch_sales(year))
    }
}
function doing(){
    return {
        type : LOADING_COMPREHENSIVE
    }
}
function success(comprehensive){
    return {
        type : LOADING_SUCCESS,
        comprehensive
    }
}
function error(){
    return {
        type : LOADING_ERROR
    }
}
function setYears(years) {
    return {
        type : LOADED_YEARS,
        years
    }
}
function set_sales(data){
    return {
        type: SET_SALES,
        ...data
    }
}
export default{
    fetch_years,
    update_sales
}