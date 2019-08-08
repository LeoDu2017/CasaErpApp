import React from 'react';
import {connect} from 'react-redux';
import ReportItem from "../../_Component_Week_item";
import Container from '../../../../container/FilterAndAddNav'
import List from "../../../_Component_refresh_list";
import {bindActionCreators} from "redux";
import Actions from "./_actions";

const RenderList = ({DWReport:{reports}, navigation: {navigate}, init: {fetch_data}, ...rest})=>{
    return  <List
        {...rest}
        Cell={ReportItem}
        dataList={reports}
        onNav={navigate}
        fetchData={fetch_data}/>
};
const Screen = Container({
    title:'部门周报',
    RenderList,
    showAdd: false
});

export default connect(
    ({DWReport})=>({
        DWReport,
        url:'ReportSystem/Week/MyReportDetail'
    }),
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
