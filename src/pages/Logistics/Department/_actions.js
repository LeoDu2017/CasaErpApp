import {
    SET_DEPARTMENT,
    SET_FILTERS,
    CLEAR_DEPARTMENT
} from "./_actionTypes";
import {
    Logistics_fetch_department,
    Logistics_fetch_department_fliters
} from "../../../_Service";

const fetch_data = (data={page:0},successCallback=null,failCallback=null) => {
    const {page} = data;
    return (dispatch) => {
        Logistics_fetch_department(data).then(
            ({status,data}) => {
                if(status){
                    if(page === 1){
                        dispatch(clearState());
                    }
                    dispatch(setMine(data));
                    dispatch(fetch_filter_options());
                    dispatch(()=>{successCallback && successCallback(data)})
                }else{
                    dispatch(fail());
                    dispatch(()=>{failCallback && failCallback(data)})
                }
            }
        ).catch()
    }
};

const fetch_filter_options = () => {
    return (dispatch) => {
        Logistics_fetch_department_fliters().then(
            ({status,data}) => {
                if(status){
                    dispatch(setFilter(data));
                }else{
                    dispatch(fail());
                }
            }
        ).catch()
    }
};

function setMine(data){
    return {
        type:SET_DEPARTMENT,
        payload:{
             data
        }
    }
}
function fail(){

}

function setFilter(data){
    return {
        type: SET_FILTERS,
        payload: data
    }
}
function clearState() {
    return {
        type: CLEAR_DEPARTMENT
    }
}

export default {
    fetch_data
}
