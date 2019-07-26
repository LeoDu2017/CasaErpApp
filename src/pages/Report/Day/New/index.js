import React, {Component} from 'react';
import {View, Dimensions, ScrollView, TouchableOpacity, Text} from 'react-native';
import ReportInput from '../../_Component_input'
import ReportTexteara from '../../_Component_texteara'
import {connect} from 'react-redux'
import styles from '../../_styles'
import {bindActionCreators} from "redux";
import Actions from "./_actions";
import {customNavigationOptions} from "../../../../_Util";


class Screen extends Component{
    static  navigationOptions =  ({navigation}) => ({
        title: '添加日报',
        ...customNavigationOptions(navigation,
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.state.params.navigatePress()}>
        <Text>完成</Text>
        </TouchableOpacity>
        </View>
        )
    });
    constructor(props){
        super(props);
        this.state = {}
    };
    save(){
        const {addReportAction} = this.props;
        addReportAction.save(this.state)
    };
    componentDidMount(){
        this.props.navigation.setParams({
            navigatePress: this.save.bind(this)
        })
    };
    onChange(state){
        this.setState(state);
        console.log(this.state)
        // alert(value)
    };
    render(){
        const {report} = this.props.NMDReport;
        return(
            <ScrollView>
                <View key='data_wrap' style={styles.report_data}>
                    {
                        report.data.map(item=>
                            <ReportInput key={item.title}
                                         edit={true}
                                         onChange={this.onChange.bind(this)}
                                         {...item}/>
                        )
                    }
                </View>
                <View key='demand_wrap' style={styles.report_data}>
                    <ReportTexteara
                        name='demand'
                        key='demand'
                        edit={true}
                        data=''
                        onChange={this.onChange.bind(this)}
                        title='需上级解决问题'/>
                </View>
                <View key='work_wrap'  style={styles.report_data}>
                    <ReportTexteara
                        name='work'
                        key='work'
                        edit={true}
                        data=''
                        onChange={this.onChange.bind(this)}
                        title='工作内容'/>
                </View>
            </ScrollView>
        )
    }
}

export default connect(
    ({NMDReport}) => ({NMDReport}),
    (dispatch) => ({addReportAction:bindActionCreators(Actions, dispatch)})
)(Screen)