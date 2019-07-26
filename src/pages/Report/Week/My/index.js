import React, {Component, Fragment} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import ReportItem from "../../_Component_item";
import {customNavigationOptions} from "../../../../_Util";

const mock = [
    {
        date: '2018.11.01-11.07  第一周',
        data: [
            {id: '11',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
            }
        ]
    }, {
        date: '2018.11.08-11.14  第二周',
        data: [
            {id: '21',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
            }
        ]
    }, {
        date: '2018.11.15-11.21  第三周',
        data: [
            {   id: '31',
                title: '工作汇报',
                info: '沙发是家中的必备家具，是装点客厅的利器，在一定程度上能决定整个家居环境的美观度。从形状分，沙发可被分为单人沙发、双人沙发、长形沙发和圆形沙发等。意大利之家原装进口欧洲的沙发.',
            }
        ]
    }
];

class Index extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '部门周报',
        ...customNavigationOptions(navigation,
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => alert('filter')}>
        <Image style={{height: 20, width: 20}}
        source={require('../../../../assets/images/report/nav_select.png')}/>
        </TouchableOpacity>
        </View>)
    });
    constructor(props) {
        super(props);
    };

    render() {
        const {navigate} = this.props.navigation;
        //
        return (
            <Fragment>
                <ScrollView style={{flex: 1}}>
                    {
                        mock.map(item =>
                            <ReportItem
                                {...item}
                                key={item.id}
                                onNav={navigate}
                                url='ReportSystem/Week/MyReportDetail'/>
                        )
                    }
                </ScrollView>
            </Fragment>
        )
    }
}
export default Index
