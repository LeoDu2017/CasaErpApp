import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Actions from './_actions';
import FilterAndSearchNav from '../../../container/FilterAndSearchNav'
import SaleItem from '../_Component_item'
import List from '../../_Component_refresh_list'

const RenderList = ({sales, navigation: {navigate}, init: {fetch_data}, ...rest}) => {
    return <List
        {...rest}
        Cell={SaleItem}
        dataList={sales}
        onNav={navigate}
        fetchData={fetch_data}/>
};

const Screen = FilterAndSearchNav({
    title: '我的售后单',
    RenderList,
    placeholder: '请输入客户姓名/合同号',
});

export default connect(
    ({MAftersale: {sales, AfterSaleStatusList, filters}}) => {
        return ({
            sales,
            AfterSaleStatusList,
            filters,
            url: 'AftersaleSystem/Details'
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
