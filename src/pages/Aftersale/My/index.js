import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, ScrollView,Text, TouchableOpacity, View} from 'react-native';
import Loading from '../_Component_loding_status'
import SaleItem from '../_Component_item'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import styles from '../_styles';
import {customNavigationOptions} from "../../../_Util";

class Screen extends Component {
    static  navigationOptions =  ({navigation}) => ({
        title: '我的售后单',
        ...customNavigationOptions(navigation,
        <View style={{flexDirection: 'row',right:14}}>
            <TouchableOpacity
                style={{marginRight:5}}
                onPress={() => alert('filter')}>
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
            keyword: '',
            service_status: '',
            page: 1,
        }
    };
    componentDidMount(): void {
        const {init:{fetch_mine}} = this.props;
        fetch_mine(this.state)
    }
    render() {
        const {navigation:{navigate},sales,status, isSuccess} = this.props;
        return (
            <View style={styles.container}>
                {
                    isSuccess ?
                        <ScrollView style={{flex: 1}}>
                            {
                                (sales && sales.length) ?
                                    sales.map(item =>
                                        <SaleItem
                                        key= {item.id}
                                        {...item}
                                        onNav={navigate}
                                        url= 'AftersaleSystem/Details'/>
                                        ) :
                                    <Text style={{alignSelf:'center',paddingTop:100}}>
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
    ({MAftersale:{sales,status,isSuccess}}) =>{
        return  ({
            sales,
            status,
            isSuccess,
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
