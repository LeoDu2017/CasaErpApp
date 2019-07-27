/**
 * Created by Leo on 2019/7/22 0012
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from '../_styles'
import actions from './_actions'
import ModalDropdown from "../../../component/ModalDropdown";
import {customNavigationOptions} from '../../../_Util'
import Banner from '../_Component_banner'
import Swiper from '../../../component/react-native-swiper';
import Chart from '../_Component_chart_bar'
import {blue_a} from "../_Constant";

class Screen extends Component {
    static  navigationOptions = ({navigation}) =>  ({
        title: '综合统计',
        ...customNavigationOptions(navigation,
            <View style={{right: 15}}>
                <ModalDropdown
                    defaultValue={'2019年'}
                    textStyle={{color: '#fff', fontSize: 16}}
                    dropdownTextStyle={{
                        width: 120,
                        fontSize: 16,
                        borderBottomWidth: 1,
                        borderColor: '#eee',
                        textAlign: 'center'
                    }}
                    options={ navigation.state.params.years }
                    renderRow = {
                        (data) => <Text style={styles.year}>{`${data}年`}</Text>
                    }
                    renderButtonText = {
                        (data) => <Text>{`${data}年`}</Text>
                    }
                    renderSeparator = {
                        () =>  <View style={styles.separator} />
                    }
                    onSelect={(index,year) => navigation.state.params.selectYear(index,year)}
                />
            </View>),
        headerTransparent: 'true',
        headerTintColor: '#fff',
        headerStyle: {marginTop: 20}
    });

    constructor(props) {
        super(props);
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setTranslucent(true);
            StatusBar.setBarStyle('light-content');
            //!IOS && StatusBar.setBackgroundColor('#6a51ae');
        });
    };

    componentDidMount(): void {
        this.props.init.fetch_years(this.props.navigation);
        this.props.navigation.setParams({
            selectYear: this.onSelect.bind(this)
        });
    };
    onSelect(index,year){
        this.props.init.update_sales(year)
    };
    render() {
        const {year_sale,month_sale,per_month_sale,dept_sale,designer_sale,person_sale} = this.props.COAchievement;
        const month_data = {
            labels: per_month_sale.map(({month}) => month),
            datasets: [{
                data: per_month_sale.map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const area_data = {
            labels: dept_sale.map(({dept_name}) => dept_name),
            datasets: [{
                data: dept_sale.map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };

        const designer_data1 = {
            labels: designer_sale.slice(0,9).map(({user_name}) => user_name),
            datasets: [{
                data: designer_sale.slice(0,9).map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const designer_data2 = {
            labels: designer_sale.slice(9,18).map(({user_name}) => user_name),
            datasets: [{
                data: designer_sale.slice(9,18).map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const designer_data3 = {
            labels: designer_sale.slice(18,27).map(({user_name}) => user_name),
            datasets: [{
                data: designer_sale.slice(18,27).map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };

        const person_data1 = {
            labels: person_sale.slice(0,8).map(({user_name}) => user_name),
            datasets: [{
                data: person_sale.slice(0,8).map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const person_data2 = {
            labels: person_sale.slice(8,16).map(({user_name}) => user_name),
            datasets: [{
                data: person_sale.slice(8,16).map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const person_data3 = {
            labels: person_sale.slice(16,24).map(({user_name}) => user_name),
            datasets: [{
                data: person_sale.slice(16,25).map(({total_money}) => total_money),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };


        return (
            <View style={styles.container}>
                <Banner
                    justify='flex-end'
                    bottom={50}
                    month={month_sale}
                    month_title='本月销售总额(元)'
                    year={year_sale}
                    year_title='年度销售总额(元)'/>
                <Swiper style={styles.Swiper_wrapper}>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Chart
                            title='每月销售统计图'
                            title_color='#7086f7'
                            chartConfig={blue_a}
                            sale_data={month_data}/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Chart
                            title='各部门销量统计图'
                            title_color='#7086f7'
                            chartConfig={blue_a}
                            sale_data={area_data}/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <ScrollView>
                            <Chart
                                title='设计师业绩排行榜'
                                title_color='#7086f7'
                                chartConfig={blue_a}
                                sale_data={designer_data1}/>
                            <Chart
                                title=''
                                title_color='#7086f7'
                                chartConfig={blue_a}
                                sale_data={designer_data2}/>
                            <Chart
                                title=''
                                title_color='#7086f7'
                                chartConfig={blue_a}
                                sale_data={designer_data3}/>
                        </ScrollView>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <ScrollView>
                            <Chart
                                title='销售业绩排行榜'
                                title_color='#7086f7'
                                chartConfig={blue_a}
                                sale_data={ person_data1}/>
                            <Chart
                                title=''
                                title_color='#7086f7'
                                chartConfig={blue_a}
                                sale_data={ person_data2}/>
                            <Chart
                                title=''
                                title_color='#7086f7'
                                chartConfig={blue_a}
                                sale_data={ person_data3}/>
                        </ScrollView>
                    </View>
                </Swiper>
            </View>
        );
    };

    componentWillUnmount(): void {
        this._navListener.remove();
    };
}

export default connect(
    ({COAchievement}) => ({COAchievement}),
    (dispatch) => ({init: bindActionCreators(actions, dispatch)})
)(Screen)