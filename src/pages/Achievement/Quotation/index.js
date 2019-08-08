import React from 'react';
import { View } from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from '../_styles'
import actions from './_actions'
import Banner from '../_Component_banner'
import Swiper from '../../../component/react-native-swiper';
import ChartLine from '../_Component_chart_line'
import {blue_a} from "../_Constant";
import Container from '../../../container/YearsNav'

const RenderBanner = ({QUAchievement:{day_quote,month_quote,year_quote}}) =>
    <Banner
        justify='space-between'
        top={100}
        bottom={20}
        show_today={true}
        today={`${day_quote.order_number}/${day_quote.case_number}`}
        today_title='今日报价单数/产品数(份/个)'
        month={`${month_quote.order_number}/${month_quote.case_number}`}
        month_title='本月报价单数/产品数(份/个)'
        year={`${year_quote.order_number}/${year_quote.case_number}`}
        year_title='年度报价单数/产品数(份/个)'/>;

const RenderChart = ({QUAchievement:{per_month_customer,dept_customer,late_week_customer}}) => {
    const month_data = {
        labels: per_month_customer.map(({month}) => month),
        datasets: [
            {
                data: per_month_customer.map(({quote_number}) => Number(quote_number)),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }, {
                data: per_month_customer.map(({quote_prod_number}) => Number(quote_prod_number)),
                color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})` // optional
            }
        ]
    };
    const department_data = {
        labels: dept_customer.map(({dept_name}) => dept_name),
        datasets: [
            {
                data: dept_customer.map(({quote_number}) => Number(quote_number)),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }, {
                data: dept_customer.map(({quote_prod_number}) => Number(quote_prod_number)),
                color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})` // optional
            }
        ]
    };
    const week_data = {
        labels: late_week_customer.map(({md}) => md),
        datasets: [
            {
                data: late_week_customer.map(({quote_number}) => Number(quote_number)),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
            }, {
                data: late_week_customer.map(({quote_prod_number}) => Number(quote_prod_number)),
                color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})` // optional
            }
        ]
    };
    return <Swiper style={styles.Swiper_wrapper}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ChartLine
                title='每月报价单数/产品数统计图'
                legend={[{
                    title: '报价单数',
                    id:'month_quotation',
                    color: 'rgb(134, 65, 244)',
                }, {
                    title: '产品数',
                    id:'month_prod',
                    color: 'rgb(0,255,255)'
                }]}
                chartConfig={blue_a}
                sale_data={month_data}
                height={400}
                title_color='#7086f7'/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ChartLine
                title='部门报价单数/产品数统计图'
                legend={[{
                    title: '报价单数',
                    id:'de_quotation',
                    color: 'rgb(134, 65, 244)',
                }, {
                    title: '产品数',
                    id:'de_prod',
                    color: 'rgb(0,255,255)'
                }]}
                chartConfig={blue_a}
                sale_data={department_data}
                height={400}
                title_color='#7086f7'/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ChartLine
                title='近七天报价单数/产品数统计图'
                legend={[{
                    title: '报价单数',
                    id:'week_quotation',
                    color: 'rgb(134, 65, 244)',
                }, {
                    title: '产品数',
                    id:'week_prod',
                    color: 'rgb(0,255,255)'
                }]}
                chartConfig={blue_a}
                sale_data={week_data}
                height={400}
                title_color='#7086f7'/>
        </View>
    </Swiper>
};
const Screen = Container({
    title:'综合统计',
    RenderBanner,
    RenderChart,
});
export default connect(
    ({QUAchievement}) => ({QUAchievement}),
    (dispatch) => ({init: bindActionCreators(actions, dispatch)})
)(Screen)
