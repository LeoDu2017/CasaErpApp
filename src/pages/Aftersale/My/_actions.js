import {
    LOADING_AFTERSALE,
    LOADING_SUCCESS,
    SET_MINE,
    SET_STATUS,
    SET_FILTERS,
    CLEAR_MINE
} from "./_actionTypes";
import {
    Aftersale_fetch_mine,
    Aftersale_fetch_status_list,
    Aftersale_fetch_my_fliters,
    Aftersale_update_my_status
} from "../../../_Service";

const fetch_data = (data,successCallback=null,failCallback=null) => {
    const {page} = data;
    return (dispatch) => {
        dispatch(doing());
        Aftersale_fetch_mine(data).then(
            ({status,data}) => {
               if(status === 1){
                   if(page === 1){
                       dispatch(clearState());
                   }
                   dispatch(setMine(data));
                   dispatch(fetch_status_list());
                   dispatch(fetch_filter_options());
                   dispatch(()=>{successCallback && successCallback(data)})
               }else{
                   dispatch(fail());
                   dispatch(()=>{failCallback && failCallback(status)})
               }
            }
        ).catch()
    }
};
// 获取修改状态列表
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

const update_mine_status = (data,callback) => {
   return  (dispatch)=> {
       Aftersale_update_my_status(data,callback).then(
           ({status,msg}) => {
               if(status){
                   dispatch(fetch_data({page:1}));
                   dispatch(()=>{callback()})
               }else{
                    alert(msg)
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
function clearState() {
    return {
        type: CLEAR_MINE
    }
}

export default {
    fetch_data,
    update_mine_status
}
