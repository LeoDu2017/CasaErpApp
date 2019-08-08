import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Actions from './_actions';
import FilterAndSearchNav from '../../../container/FilterAndSearchNav'

import Item from '../_Component_item'
import List from '../../_Component_refresh_list'

const RenderList = ({data, navigation: {navigate}, init: {fetch_data}, ...rest}) => {
    return <List
        {...rest}
        Cell={Item}
        dataList={data}
        onNav={navigate}
        fetchData={fetch_data}/>
};

const Screen = FilterAndSearchNav({
    title: '我的发货单',
    RenderList,
    placeholder: '请输入客户姓名/合同号',
});

export default connect(
    ({MLogistics: {data,filters}}) => {
        return ({
            data,
            filters,
            url: 'LogisticsSystem/Details'
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)