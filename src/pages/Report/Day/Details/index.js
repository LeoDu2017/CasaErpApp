import React, {Component,Fragment} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux'
import ReportInput from '../../_Component_input'
import ReportTexteara from '../../_Component_texteara'
import styles from '../../_styles'
import {bindActionCreators} from "redux";
import Actions from "./_actions";
import ReportLoading from '../../_Component_loding_status'
import {customNavigationOptions} from "../../../../_Util";
import Toast from "react-native-easy-toast";

class Screen extends Component{
    static  navigationOptions = ({navigation}) => ({
        title: navigation.state.params.id ? '日报详情' : '添加日报',
        ...customNavigationOptions(navigation,
            <View style={{flexDirection: 'row',right:14}}>
                <TouchableOpacity onPress={() => navigation.state.params.navigatePress()}>
                    {navigation.state.params.edit ?
                        <Text style={{color:'#3496FB'}}>完成</Text>
                        :
                        <Text>编辑</Text>}

                </TouchableOpacity>
            </View>
        )
    });
    static getDerivedStateFromProps(nextProps, prevState){
        const {MRDetails:{details}} = nextProps;
        if(!prevState.edit){
            return {...details}
        }
        return null;
    };
    constructor(props){
        super(props);
        const { params:{id} } = this.props.navigation.state;
        this.state = {
            id,
            edit: !id
        }
    };
    setEdit(){
        const { params:{id} } = this.props.navigation.state;
        const {init:{update_report}} = this.props;
        const edit = !this.state.edit;
        if(edit){
            this.props.navigation.setParams({edit});
            this.setState({edit});
        }else{
            const {edit,report_day,report_status,...rest} = this.state;
            const type = id ? 2 : 1;
            update_report({...rest,type},()=>{
                this.props.navigation.setParams({edit});
                this.setState({edit});
            },(msg)=>{
                this.refs.toast.show(msg);
            })
        }
    };
    componentDidMount(){
        const { params:{id} } = this.props.navigation.state;
        this.props.navigation.setParams({
            edit: this.state.edit,
            navigatePress: this.setEdit.bind(this)
        });
        const {init:{fetch_report}}= this.props;
        fetch_report({id})
    };
    onChange(state){
        this.setState(state);
    };
    render(){
        const {MRDetails:{details,isSuccess,status}} = this.props;
        const report_data = {
            num_fp:'分配数',
            num_yx:'有效数',
            num_wx:'无效数',
            num_dd:'待定数',
            num_wxin:'微信群数',
            num_bj:'报价数',
            num_bf:'拜访数',
            num_dds:'到店数',
            num_zs:'总有效数',
        };
        return(
            <Fragment>
            {
                isSuccess ?
                    <View style={styles.container}>
                        <ScrollView>
                            <View style={styles.report_data}>
                                {
                                    Object.keys(report_data).map(key=>
                                        <ReportInput key={key}
                                                     name={key}
                                                     edit={this.state.edit}
                                                     title={report_data[key]}
                                                     data={details[key]}
                                                     onChange={this.onChange.bind(this)}/>)
                                }
                            </View>
                            <View style={styles.report_data} key='jjwt'>
                                <ReportTexteara
                                    key='jjwt_input'
                                    name='num_jjwt'
                                    edit={this.state.edit}
                                    data={details['num_jjwt']}
                                    title='需上级解决问题'/>
                            </View>
                            <View style={styles.report_data} key='work_content'>
                                <ReportTexteara
                                    key='work_content_input'
                                    name='work_content'
                                    edit={this.state.edit}
                                    data={details['work_content']}
                                    title='工作内容'/>
                            </View>
                        </ScrollView>
                    </View> :
                    <ReportLoading>{status}</ReportLoading>
            }
                <Toast
                    position='top'
                    style={{backgroundColor:'rgba(0,0,0,.5)'}}
                    ref="toast"/>
            </Fragment>
        )
    }
}

export default connect(
    ({MRDetails}) => ({
        MRDetails
    }),
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)