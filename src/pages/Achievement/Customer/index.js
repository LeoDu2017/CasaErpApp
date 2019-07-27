import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar
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
import ChartLine from '../_Component_chart_line'
import {blue_a} from "../_Constant";

class Screen extends Component {
    static  navigationOptions = ({navigation}) =>  ({
        title: '客户统计',
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
        this.props.init.update_customs(year)
    };

    render() {
        const {
            day_customer,
            month_customer,
            year_customer,
            per_month_customer,
            late_week_customer,
            dept_customer
        } = this.props.CUAchievement;
        const month_data = {
            labels: per_month_customer.map(({month}) => month),
            datasets: [{
                data: per_month_customer.map(({number}) => number),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const department_data = {
            labels: dept_customer.map(({dept_name}) => dept_name),
            datasets: [{
                data: dept_customer.map(({number}) => number),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }]
        };
        const week_data = {
            labels: late_week_customer.map(({md}) => md ),
            datasets: [
                {
                    data: late_week_customer.map(({number}) => Number(number)),
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
                }
            ]
        };

        return (
            <View style={styles.container}>
                <Banner
                    justify='space-between'
                    top = {100}
                    bottom={20}
                    today={day_customer}
                    show_today={true}
                    today_title= '今日客户总数(人)'
                    month={month_customer}
                    month_title='本月客户总数(人)'
                    year={year_customer}
                    year_title='年度客户总数(人)'/>
                <Swiper style={styles.Swiper_wrapper}>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Chart
                            title='每月客户总数统计图'
                            title_color='#7086f7'
                            chartConfig={blue_a}
                            sale_data={month_data}/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Chart
                            title='各部门分配量统计图'
                            title_color='#7086f7'
                            chartConfig={blue_a}
                            sale_data={department_data}/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <ChartLine
                            title='近七天客户数量统计图'
                            chartConfig={blue_a}
                            sale_data={week_data}
                            height={420}
                            title_color='#7086f7'/>
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
    ({CUAchievement}) => ({CUAchievement}),
    (dispatch) => ({init: bindActionCreators(actions, dispatch)})
)(Screen)