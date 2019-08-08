import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Actions from './_actions';
import Container from '../../../../container/FilterAndAddNav'
import List from '../../../_Component_refresh_list'
import ReportItem from "../../_Component_item"

const RenderList = ({reports, navigation: {navigate}, init: {fetch_data}, ...rest})=>{
    return  <List
        {...rest}
        Cell={ReportItem}
        dataList={reports}
        onNav={navigate}
        fetchData={fetch_data}/>
};
const Screen = Container({
    title:'我的日报',
    newScreen:'ReportSystem/Day/MyReportDetail',
    RenderList,
    showAdd: true
});

export default connect(
    ({MDReport}) => {
        return ({
            reports: MDReport.reports,
            status: MDReport.status,
            isSuccess: MDReport.isSuccess,
            url:'ReportSystem/Day/MyReportDetail'
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
