import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Loading from '../_Component_loding_status'
import SaleItem from '../_Component_item'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import styles from '../_styles';
import {customNavigationOptions} from "../../../_Util";
import {Drawer} from 'teaset';
import FilterComponent from '../_Component_filter'

class Screen extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '我的售后单',
        ...customNavigationOptions(navigation,
            <View style={{flexDirection: 'row', right: 14}}>
                <TouchableOpacity
                    style={{marginRight: 15}}
                    onPress={() => navigation.state.params.onFilter('right')}>
                    <Image style={{height: 20, width: 20}}
                           source={require('../../../assets/images/navigation/nav_select.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('search')}>
                    <Image style={{height: 20, width: 20}}
                           source={require('../../../assets/images/navigation/nav_search.png')}/>
                </TouchableOpacity>
            </View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            parameter: {
                keyword: '',
                service_status: '',
                page: 1,
            },
            rootTransform: 'none',
            filterID: '-1'
        }
    };

    toggleMenu(side){
        let { rootTransform,filterID} = this.state;
        this.drawer = Drawer.open(this.renderDrawerMenu(filterID), side, rootTransform);
    };

    renderDrawerMenu(filterID){
        return <FilterComponent filterID={filterID} filters={this.props.filters}/>
    };

    componentDidMount(): void {
        const {init: {fetch_mine}} = this.props;
        fetch_mine(this.state.parameter);
        this.props.navigation.setParams({
            onFilter: this.toggleMenu.bind(this)
        });
    }

    render() {
        const {navigation: {navigate}, sales, status, AfterSaleStatusList, isSuccess} = this.props;
        return (
            <View style={styles.container}>
                {
                    isSuccess ?
                        <ScrollView style={{flex: 1}}>
                            {
                                (sales && sales.length) ?
                                    sales.map(item =>
                                        <SaleItem
                                            key={item.id}
                                            {...item}
                                            onNav={navigate}
                                            status={AfterSaleStatusList}
                                            url='AftersaleSystem/Details'/>
                                    ) :
                                    <Text style={{alignSelf: 'center', paddingTop: 100}}>
                                        暂无更多数据哦~
                                    </Text>
                            }
                        </ScrollView>
                        : <Loading>
                            {status}
                        </Loading>
                }
            </View>
        )
    }
}

export default connect(
    ({MAftersale: {sales, status, AfterSaleStatusList,filters, isSuccess}}) => {
        return ({
            sales,
            AfterSaleStatusList,
            filters,
            status,
            isSuccess,
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
