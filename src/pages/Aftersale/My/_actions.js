import {
    LOADING_AFTERSALE,
    LOADING_SUCCESS,
    SET_MINE,
    SET_STATUS,
    SET_FILTERS
} from "./_actionTypes";
import {
    Aftersale_fetch_mine,
    Aftersale_fetch_status_list,
    Aftersale_fetch_my_fliters
} from "../../../_Service";

const fetch_mine = (data) => {
    return (dispatch) => {
        dispatch(doing());
        Aftersale_fetch_mine(data).then(
            ({status,data}) => {
               if(status){
                   dispatch(success());
                   dispatch(setMine(data));
                   dispatch(fetch_status_list());
                   dispatch(fetch_filter_options())
               }else{
                   dispatch(fail());
               }
            }
        ).catch()
    }
};
const fetch_status_list = () => {
    return (dispatch) => {
        Aftersale_fetch_status_list().then(
            ({status,data}) => {
                if(status){
                    dispatch(setStatus(data));
                }
            }
        ).catch()
    }
};
const fetch_filter_options = () => {
    return (dispatch) => {
        Aftersale_fetch_my_fliters().then(
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
        type:SET_MINE,
        payload:{
            sales: data
        }
    }
}
function fail(){

}

function doing(){
    return {
        type: LOADING_AFTERSALE
    }
}
function success(){
    return {
        type:LOADING_SUCCESS
    }
}

function setStatus(data){
    return {
        type: SET_STATUS,
        payload: data
    }
}
function setFilter(data){
    return {
        type: SET_FILTERS,
        payload: data
    }
}
export default {
    fetch_mine
}
