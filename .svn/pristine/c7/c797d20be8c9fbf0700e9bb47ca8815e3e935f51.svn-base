import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import ReportInput from '../../_Component_input'
import ReportTexteara from '../../_Component_texteara'
import {customNavigationOptions} from "../../../../_Util";
const {width} = Dimensions.get('window');
const mock = {
    report_data: [
        {
            title: '分配数',
            data: '1000',
        },{
            title: '有效数',
            data: '800',
        },{
            title: '拜访数',
            data: '120',
        },{
            title: '到店数',
            data: '200',
        }
    ],
    report_work_content: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.',
    report_demand:'沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发.'
};
const mock1 = {
    report_data: [
        {
            title: '分配数',
            data: '',
        },{
            title: '有效数',
            data: '',
        },{
            title: '拜访数',
            data: '',
        },{
            title: '到店数',
            data: '',
        }
    ],
    report_work_content: '',
    report_demand:'',
};
class MyReportDetail extends Component{
    static  navigationOptions = ({navigation}) => ({
        title: navigation.state.params.id ? '周报详情' : '添加周报',
        ...customNavigationOptions(navigation,
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.state.params.navigatePress()}>
        <Text>{navigation.state.params.edit ? '完成' : '编辑'}</Text>
        </TouchableOpacity>
        </View>
        )
    });
    constructor(props){
        super(props);
        const { params:{id} } = this.props.navigation.state;
        this.state = {
            id,
            edit: !id,
            date: '2018.11.01-11.07  第一周',
            name: '星星'
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
            navigatePress: this.setEdit.bind(this)
        })
    };
    onChange(value){
        alert(value)
        // this.setState({
        //
        // })
    };
    render(){
        return(
            <ScrollView>
                <View style={styles.report_data}>
                    <View style={styles.report_date}>
                        <Text style={styles.report_date_text}>
                            汇报人: {this.state.name}
                        </Text>
                        <Text style={styles.report_date_text}>
                            {this.state.date}
                        </Text>
                    </View>

                    <View style={styles.report_title}>
                        <Text style={styles.font16}>客户统计</Text>
                    </View>

                    {   this.state.id ?
                        mock.report_data.map(item=>
                            <ReportInput key={item.title}
                                         edit={this.state.edit}
                                         onChange={this.onChange}
                                         {...item}/>
                        ) : mock1.report_data.map(item=>
                            <ReportInput key={item.title}
                                         edit={this.state.edit}
                                         onChange={this.onChange}
                                         {...item}/>
                        )
                    }
                </View>
                <View style={styles.report_data}>
                    <View style={styles.report_title}>
                        <Text style={styles.font16}>
                            工作内容
                        </Text>
                    </View>
                    <ReportTexteara
                        subtitle="工作中的困难"
                        edit={this.state.edit}
                        data={this.state.id ?mock.report_demand : mock1.report_demand}/>
                    <ReportTexteara
                        subtitle="对公司的建议"
                        edit={this.state.edit}
                        data={this.state.id ? mock.report_work_content : mock1.report_work_content}/>
                    <ReportTexteara
                        subtitle="生活中的困难"
                        edit={this.state.edit}
                        data={this.state.id ? mock.report_work_content : mock1.report_work_content}/>
                    <ReportTexteara
                        subtitle="本周工作内容"
                        edit={this.state.edit}
                        data={this.state.id ? mock.report_work_content : mock1.report_work_content}/>
                    <ReportTexteara
                        subtitle="下周工作计划"
                        edit={this.state.edit}
                        data={this.state.id ? mock.report_work_content : mock1.report_work_content}/>
                    <ReportTexteara
                        subtitle="面谈客户类型"
                        edit={this.state.edit}
                        data={this.state.id ? mock.report_work_content : mock1.report_work_content}/>
                    <ReportTexteara
                        subtitle="见面浅谈事宜"
                        edit={this.state.edit}
                        data={this.state.id ? mock.report_work_content : mock1.report_work_content}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    report_data:{
        width,
        backgroundColor: '#f5fcff',
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
        marginTop: 10,
    },
    font16:{
        fontSize: 16
    },
    report_date_text:{
        fontSize: 16,
        color: '#999'
    }
});
export default MyReportDetail