import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView,View} from 'react-native';
import Loading from '../_Component_loding_status'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import styles from '../_styles';
import BaseInfo from './_component_base'
import Products from './_component_products'
import {customNavigationOptions} from "../../../_Util";

class Screen extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '发货单详情',
        ...customNavigationOptions(navigation)
    });
    constructor(props) {
        super(props);
    };
    componentDidMount(): void {
        const {init,navigation:{state:{params:{id}}}} = this.props;
        init.fetch_detail({id})
    }
    onHandle(deal_content){
        const {init,navigation:{goBack,state:{params:{id}}}} = this.props;
        init.post_handle({
            as_id:id,
            deal_content
        },()=>{
            goBack()
        })
    };
    render() {
        const {status,isSuccess,send,prod_list} = this.props;
        return (
            <View style={styles.container}>
                {
                    isSuccess ?
                        <ScrollView style={{flex: 1}}>
                            <BaseInfo {...send}/>
                            <Products prod_list={prod_list}/>
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
    ({LDtails:{status,isSuccess,send,prod_list}}) => {
        return ({
            status,
            isSuccess,
            prod_list,
            send
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
