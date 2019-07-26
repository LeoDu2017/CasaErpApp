import {MODIFY_PASSWORD,MODIFY_PHONE} from "./_actionTypes";

const modifyPwd = (value) => {
    return dispatch => {
        // 模拟用户登录
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                console.log(value)
            }).catch((e) => {

            })
    }
};
const modifyPhone = (value) => {
    return dispatch => {
        // 模拟用户登录
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                console.log(value)
            }).catch((e) => {

            })
    }
};
export default{
    modifyPwd,
    modifyPhone
}