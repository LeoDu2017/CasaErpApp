import {LOADING_REPORTS,LOADING_SUCCESS,LOADING_ERROR} from './_actionTypes'

// 模拟日报列表信息
const reports = [
    {
        date: '2018.11.01-11.07  第一周',
        data: [
            {id: '11',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '周星星'
            },{id: '12',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '李星星'
            }, {id: '13',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '王星星'
            }
        ]
    }, {
        date: '2018.11.08-11.14  第二周',
        data: [
            {id: '21',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '周星星'
            },{id: '22',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '李星星'
            }, {id: '23',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '王星星'
            }
        ]
    }, {
        date: '2018.11.15-11.21  第三周',
        data: [
            {id: '31',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '周星星'
            },{id: '32',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '李星星'
            }, {id: '33',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
                name: '王星星'
            }
        ]
    }
];

const load = () => {
    return (dispatch) => {
        dispatch(doing());
        let result = fetch('https://www.baidu.com/')
            .then((res) => {
                dispatch(success(true, reports)); // 登录请求完成
            }).catch((e) => {
                dispatch(error(false)); // 登录请求出错
            })
    }
};
function doing(){
    return {
        type : LOADING_REPORTS
    }
}
function success(){
    return {
        type : LOADING_SUCCESS,
        reports
    }
}
function error(){
    return {
        type : LOADING_ERROR
    }
}
export default{
    load
}