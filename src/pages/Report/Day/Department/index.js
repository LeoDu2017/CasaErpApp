import React  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Actions from './_actions';
import Container from '../../../../container/FilterAndAddNav'
import List from '../../../_Component_refresh_list'
import ReportItem from "../../_Component_item"

const RenderList = ({reports, navigation: {navigate}, init: {fetch_data}, ...rest})=>{
    return  <List
        {...rest}
        Cell={ReportItem}
        dataList={reports}
        onNav={navigate}
        fetchData={fetch_data}/>
};
const Screen = Container({
    title:'部门日报',
    newScreen:'ReportSystem/Day/MyReportDetail',
    RenderList,
    showAdd: false
});

export default connect(
    ({DDReport}) => ({
        reports: DDReport.reports,
        status: DDReport.status,
        isSuccess: DDReport.isSuccess,
        url: 'ReportSystem/Day/MyReportDetail'
    }),
    (dispatch) => ({
        init: bindActionCreators(Actions, dispatch)
    })
)(Screen)

// class Screen extends Component {
//     static  navigationOptions = ({navigation}) => ({
//         title: ' ',
//         ...customNavigationOptions(navigation,
//             <View style={{flexDirection: 'row'}}>
//                 <TouchableOpacity onPress={() => alert('filter')}>
//                     <Image style={{height: 20, width: 20}}
//                            source={require('../../../../assets/images/report/nav_select.png')}/>
//                 </TouchableOpacity>
//             </View>
//         )
//     });
//     constructor(props) {
//         super(props);
//     };
//     componentDidMount(): void {
//         const {loadAction} = this.props;
//         loadAction.load()
//     }
//     render() {
//         const {navigation:{navigate},reports,status, isSuccess} = this.props;
//         return (
//             <Fragment>
//                 {
//                     isSuccess ?
//                         <ScrollView style={{flex: 1}}>
//                             {
//                                 reports.map(item =>
//                                     <ReportItem
//                                         key= {item.id}
//                                         {...item}
//                                         onNav={navigate}
//                                         />
//                                 )
//                             }
//                         </ScrollView>
//                         : <ReportLoading>
//                             {status}
//                         </ReportLoading>
//                 }
//             </Fragment>
//         )
//     }
// }