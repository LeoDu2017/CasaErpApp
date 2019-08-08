/**
 * Created by Leo on 2019/7/22 0012
 */
import React from 'react';
import {View,ScrollView} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from '../_styles'
import actions from './_actions'
import Banner from '../_Component_banner'
import Swiper from '../../../component/react-native-swiper';
import Chart from '../_Component_chart_bar'
import {blue_a} from "../_Constant";
import Container from '../../../container/YearsNav'
const RenderBanner = ({COAchievement:{month_sale,year_sale}}) =>
    <Banner
        justify='flex-end'
        bottom={50}
        month={month_sale}
        month_title='本月销售总额(元)'
        year={year_sale}
        year_title='年度销售总额(元)'/>;
const RenderChart = ({COAchievement:{per_month_sale,dept_sale,designer_sale,person_sale}}) =>{
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
    return <Swiper style={styles.Swiper_wrapper}>
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
    </Swiper>;
};

const Screen = Container({
    title:'综合统计',
    RenderBanner,
    RenderChart,
});
export default connect(
    ({COAchievement}) => ({COAchievement}),
    (dispatch) => ({init: bindActionCreators(actions, dispatch)})
)(Screen)
