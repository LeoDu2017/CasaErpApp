import React from 'react';
import {connect} from 'react-redux';
import SaleItem from '../_Component_item'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import List from "../../_Component_refresh_list";
import FilterAndSearchNav from "../../../container/FilterAndSearchNav";


const RenderList = ({sales, navigation: {navigate}, init: {fetch_data}, ...rest}) => {
    return <List
        {...rest}
        Cell={SaleItem}
        dataList={sales}
        onNav={navigate}
        fetchData={fetch_data}/>
};

const Screen = FilterAndSearchNav({
    title: '部门售后单',
    RenderList,
    placeholder: '请输入客户姓名/合同号',
});
export default connect(
    ({DAftersale:{sales, status, AfterSaleStatusList, filters}}) => {
        return ({
            sales,
            AfterSaleStatusList,
            filters,
            status,
            url: 'AftersaleSystem/Details'
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
