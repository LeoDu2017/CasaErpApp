import {SAVE_REPORT} from './_actionTypes'
import {createReducer} from '../../../../_Util'

const initialState = {
    isSuccess: false,
    report:{
        data: [
            {
                title: '分配数',
                name:'distribution',
                data: '',
            },{
                title: '有效数',
                name:'effective',
                data: '',
            },{
                title: '待定数',
                name:'undetermined',
                data: '',
            },{
                title: '微信群数',
                name: 'wechat',
                data: '',
            },{
                title: '拜访数',
                name: 'visits',
                data: '',
            },{
                title: '报价数',
                name: 'quotations',
                data: '',
            },{
                title: '到店数',
                name: 'arrivals',
                data: '',
            },{
                title: '总有效数',
                name:'total',
                data: '',
            }
        ],
        report_work_content: '',
        report_demand:'',
    }
};

const actionHandler = {
    [SAVE_REPORT]:(state,action) => {
        return {
            ...state,
            status:'正在加载...',
        }
    }
};

export default createReducer(initialState,actionHandler)
