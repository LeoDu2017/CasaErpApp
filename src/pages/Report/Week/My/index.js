import React from 'react';
import {connect} from 'react-redux';
import ReportItem from "../../_Component_Week_item";
import Container from '../../../../container/FilterAndAddNav'
import List from "../../../_Component_refresh_list";
import {bindActionCreators} from "redux";
import Actions from "./_actions";

const RenderList = ({MWReport:{reports}, navigation: {navigate}, init: {fetch_data}, ...rest})=>{
    return  <List
        {...rest}
        Cell={ReportItem}
        dataList={reports}
        onNav={navigate}
        fetchData={fetch_data}/>
};
const Screen = Container({
    title:'我的周报',
    RenderList,
    showAdd: true,
    newScreen:'ReportSystem/Week/MyReportDetail'
});

export default connect(
    ({MWReport})=>({
        MWReport,
        url:'ReportSystem/Week/MyReportDetail'
    }),
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
