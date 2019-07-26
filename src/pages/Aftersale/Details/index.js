import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView,View} from 'react-native';
import Loading from '../_Component_loding_status'
import SaleItem from '../_Component_item'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import styles from '../_styles';
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
        const {loadAction} = this.props;
        loadAction.load()
    }
    render() {
        const {navigation:{navigate},sale,status, isSuccess} = this.props;
        return (
            <View style={styles.container}>
                {
                    isSuccess ?
                        <ScrollView style={{flex: 1}}>

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
    ({MAftersale}) => ({
        sale: MAftersale.sale,
        status: MAftersale.status,
        isSuccess: MAftersale.isSuccess,
    }),
    (dispatch) => ({
        loadAction: bindActionCreators(Actions, dispatch)
    })
)(Screen)
