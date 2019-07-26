import {FETCH_REPORT_DETAIL,FETCH_REPORT_SUCCESS,FETCH_REPORT_ERROR} from './_actionTypes'

const report = {
    report_data: [
        {
            title: '分配数',
            data: '1000',
        },{
            title: '有效数',
            data: '800',
        },{
            title: '待定数',
            data: '100',
        },{
            title: '微信群数',
            data: '20',
        },{
            title: '拜访数',
            data: '120',
        },{
            title: '报价数',
            data: '100',
        },{
            title: '到店数',
            data: '200',
        },{
            title: '总有效数',
            data: '1000',
        }
    ],
    report_work_content: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.',
    report_demand:'沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.'
};

const fetch_report = () => {
    return dispatch => {
        dispatch(doing());
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                dispatch(success(report)); // 登录请求完成
            }).catch((e) => {
                dispatch(error(false)); // 登录请求出错
            })
    }
};
const update_report = () => {
    return dispatch => {

    }
};
function doing(){
    return{
        type:FETCH_REPORT_DETAIL
    }
}
function success(report){
    return{
        type:FETCH_REPORT_SUCCESS,
        report
    }
}
function error(){
    return{
        type:FETCH_REPORT_ERROR
    }
}
export default {
    fetch_report,update_report
}