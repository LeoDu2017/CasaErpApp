import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import ReportItem from "../../_Component_item";
import ReportLoading from '../../_Component_loding_status'
import {bindActionCreators} from "redux";
import Actions from './_actions';
import {customNavigationOptions} from "../../../../_Util";

class Screen extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: ' 部门日报',
        ...customNavigationOptions(navigation,
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => alert('filter')}>
        <Image style={{height: 20, width: 20}}
        source={require('../../../../assets/images/report/nav_select.png')}/>
        </TouchableOpacity>
        </View>
        )
    });
    constructor(props) {
        super(props);
    };
    componentDidMount(): void {
        const {loadAction} = this.props;
        loadAction.load()
    }
    render() {
        const {navigation:{navigate},reports,status, isSuccess} = this.props;
        return (
            <Fragment>
                {
                    isSuccess ?
                        <ScrollView style={{flex: 1}}>
                            {
                                reports.map(item =>
                                    <ReportItem
                                        key= {item.id}
                                        {...item}
                                        onNav={navigate}
                                        url= 'ReportSystem/Day/MyReportDetail'/>
                                )
                            }
                        </ScrollView>
                        : <ReportLoading>
                            {status}
                        </ReportLoading>
                }
            </Fragment>
        )
    }
}

export default connect(
    ({DDReport}) => ({
        reports: DDReport.reports,
        status: DDReport.status,
        isSuccess: DDReport.isSuccess,
    }),
    (dispatch) => ({
        loadAction: bindActionCreators(Actions, dispatch)
    })
)(Screen)