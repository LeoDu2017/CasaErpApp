import {
    LOADING_CUSTOMER,
    LOADING_ERROR,
    LOADING_SUCCESS,
    SET_CUSTOMER,
} from "./_actionTypes";


import {
    Achievement_fetch_years,
    Achievement_fetch_customs
} from '../../../_Service'

const fetch_years = (navigation) => {
    return (dispatch) => {
        dispatch(doing());
        Achievement_fetch_years().then(({status,data,msg}) => {
            if(status){
                navigation.setParams({years:data});
                dispatch(fetch_customs(data[0]));
            }else{
                alert(msg)
            }
        })

    }
};
const fetch_customs = (year) => {
  return (dispatch) => {
      Achievement_fetch_customs({year}).then(({status,data,msg}) => {
          if(status){
              dispatch(set_custom(data))
          }else{
              alert(msg)
          }
      })
  }
};
function update_customs(year){
    return (dispatch) => {
        dispatch(doing());
        dispatch(fetch_customs(year));
    }
}
function doing(){
    return {
        type : LOADING_CUSTOMER
    }
}
function success(customer){
    return {
        type : LOADING_SUCCESS,
        customer
    }
}
function error(){
    return {
        type : LOADING_ERROR
    }
}
function set_custom(data) {
    return{
        type: SET_CUSTOMER,
        ...data
    }
}
export default{
    fetch_years,
    update_customs
}