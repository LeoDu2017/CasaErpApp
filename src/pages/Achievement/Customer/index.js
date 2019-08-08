import React from 'react';
import { View } from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from '../_styles'
import actions from './_actions'
import Banner from '../_Component_banner'
import Swiper from '../../../component/react-native-swiper';
import Chart from '../_Component_chart_bar'
import ChartLine from '../_Component_chart_line'
import {blue_a} from "../_Constant";
import Container from '../../../container/YearsNav'
const RenderBanner = ({CUAchievement:{day_customer,month_customer,year_customer}}) =>
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
        year_title='年度客户总数(人)'/>;
const RenderChart = ({CUAchievement:{per_month_customer,dept_customer,late_week_customer}}) => {
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
    return  <Swiper style={styles.Swiper_wrapper}>
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
};
const Screen = Container({
    title:'客户统计',
    RenderBanner,
    RenderChart,
});

export default connect(
    ({CUAchievement}) => ({CUAchievement}),
    (dispatch) => ({init: bindActionCreators(actions, dispatch)})
)(Screen)
