import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import ReportInput from '../../_Component_input'
import ReportTexteara from '../../_Component_texteara'
import {customNavigationOptions} from "../../../../_Util";
import {connect} from 'react-redux';
import Actions from "./_actions";
import {bindActionCreators} from "redux";
import TabNavigation from '../../../_Component_Tabs'



const {width,height} = Dimensions.get('window');

class Screen extends Component{
    static  navigationOptions = ({navigation}) => ({
        title: navigation.state.params.id ? '周报详情' : '添加周报',
        ...customNavigationOptions(navigation,
        <View style={{flexDirection: 'row',right:14}}>
            {
                !navigation.state.params.show ?
                <TouchableOpacity onPress={() => navigation.state.params.navigatePress()}>
                    {
                        navigation.state.params.edit ?
                            <Text>完成</Text> :
                            <Text style={{color:'#3496FB'}}>编辑</Text>
                    }

                </TouchableOpacity> :  <TouchableOpacity onPress={() => navigation.state.params.Reply()}>
                        <Text style={{color:'#3496FB'}}>批复</Text>
                    </TouchableOpacity>
            }
        </View>
        )
    });
    constructor(props){
        super(props);
        const { params:{id} } = this.props.navigation.state;
        this.state = {
            id,
            edit: !id,
            fixed: false
        }
    };
    setEdit(){
        const edit = !this.state.edit;
        this.props.navigation.setParams({edit});
        this.setState({edit});
    };
    componentDidMount(){
        this.props.navigation.setParams({
            edit: this.state.edit,
            navigatePress: this.setEdit.bind(this),
            Reply:()=>{}
        });
        const {init:{fetch_data}}=this.props;
        const { params:{id}} = this.props.navigation.state;
        fetch_data({id})
    };
    onChange(value){
        alert(value)
    };
    // onMove(e){
    //     let top = e.nativeEvent.contentOffset.y;
    //     this.setState({fixed: top > 292})
    // };
    render(){
        const {details, details:{ id,add_user,report_week_msg}} = this.props;
        const input_titles = {
            report_ddsl: '到店数',
            report_bfsl:'拜访数',
            report_fpsl:'分配数',
            report_yxsl:'有效数'
        };
        const texteara_titles = {
            report_gzwt: '工作遇到的问题',
            report_gsjy: '对公司的建议',
            report_shkn: '生活中的困难',
            report_gzhz: '本周工作汇总',
            report_gzjh: '下周工作计划',
            report_khlx: '面谈客户类型',
            report_qtsy: '见面浅谈事宜'
        };
        const { params:{show}} = this.props.navigation.state;

        const ScreenList = () => {
            return [
                {
                    tabName: '汇报内容',
                    screen:
                        <View style={{
                            backgroundColor:'#fff',
                            padding: 15,
                            flex:1}}>
                            {
                                Object.keys(texteara_titles).map(key=>
                                    <ReportTexteara
                                        key={key}
                                        subtitle= {texteara_titles[key]}
                                        edit={this.state.edit}
                                        data={details[key]}/>)
                            }
                        </View>
                }, {
                    tabName: '批复内容',
                    screen: <View style={{width}}><Text>
                        批复内容
                    </Text></View>
                }
            ]
        };
        return(<ScrollView
            style={{flex:1,position:'relative'}}
            // scrollEventThrottle = {200}
            // onScroll={this.onMove.bind(this)}
            >
                <View style={[styles.container]}>
                    <View style={styles.report_data}>
                        <View style={[styles.report_date,!show && {justifyContent:'flex-end'}]}>
                            {
                                show ?  <Text style={styles.report_date_text}>
                                    汇报人: {add_user}
                                </Text> : null
                            }
                            <Text style={styles.report_date_text}>
                                {report_week_msg}
                            </Text>
                        </View>

                        <View style={styles.report_title}>
                            <Text style={styles.font16}>客户统计</Text>
                        </View>
                        {
                            Object.keys(input_titles).map(key=>
                                <ReportInput key={input_titles[key]}
                                             title={input_titles[key]}
                                             edit={this.state.edit}
                                             data={this.props.details[key]}
                                             name={this.props.details[key]}
                                             onChange={this.onChange.bind(this)}/>
                            )
                        }
                    </View>
                    <View style={{marginTop: 10}}>
                        <TabNavigation
                            // fixed={this.state.fixed}
                            screens={() => ScreenList()}
                            initialScreen='汇报内容'
                        />
                    </View>
                </View>
            </ScrollView>)
    }
}


export default connect(
    ({WRDetails:{details}})=>{
        console.log('details',details);
        return ({details})
    },
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EBEFF2'
    },
    report_data:{
        width,
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 10,
    },
    report_date:{
        height: 40,
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
        color: '#999',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    report_title:{
        borderColor: '#3496FB',
        borderLeftWidth: 4,
        paddingLeft: 10,
        height: 16,
        lineHeight: 16,
        alignItems: 'center',
        flexDirection:'row',
        marginVertical: 10,
    },
    font16:{
        fontSize: 16
    },
    report_date_text:{
        fontSize: 16,
        color: '#999'
    }
});