import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView,View} from 'react-native';
import Loading from '../_Component_loding_status'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import styles from '../_styles';
import BaseInfo from '../_Component_base_info';
import Products from '../_Component_products';
import {customNavigationOptions} from "../../../_Util";

class Screen extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '售后单批复详情',
        ...customNavigationOptions(navigation)
    });
    constructor(props) {
        super(props);
    };
    componentDidMount(): void {
        const {init,navigation:{state:{params:{id}}}} = this.props;
        init.fetch_detail({id})
    }
    render() {
        const {base_info,prod_question,status, isSuccess} = this.props;
        return (
            <View style={styles.container}>
                {
                    isSuccess ?
                        <ScrollView style={{flex: 1}}>
                            <BaseInfo base_info={base_info}/>
                            <Products products={prod_question}/>
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
    ({ADtails:{status,isSuccess,base_info,log,prod_question}}) => {
        return ({
            log,
            status,
            isSuccess,
            base_info,
            prod_question
        })
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)
