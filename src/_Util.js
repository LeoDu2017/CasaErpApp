import {Dimensions, Platform, View} from 'react-native';
import React,{Component} from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;


// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 640
const uiWidthPx = 640;

export function pxToDp(uiElementPx) {
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}
export function createReducer(initialState, handlers) {
    return function reducer(state = initialState,action) {
        if (handlers.hasOwnProperty(action.type)){
            // console.log('****************************');
            return handlers[action.type](state,action)
        }else{
            // console.log('==============================');
            return state
        }
    }
}

export  class NavigationCustomBackMenu extends Component {
    constructor(props){
        super(props)
    };
    render() {
        const {state:{routeName},goBack} = this.props.nav;
        const wright = [
            'AchievementSystem/Comprehensive',
            'AchievementSystem/Customer',
            'AchievementSystem/Quotation'
        ].find( item => routeName === item) ;

        return (
            <TouchableOpacity
                onPress={()=>{
                    goBack()
                }}
            >
                <Image style={wright ? styles.large: styles.image}
                       resizeMode='stretch'
                       source={
                           wright ?
                           require('./assets/images/navigation/nav_arrow_left.png') :
                           require('./assets/images/navigation/back.png')
                       } >
                </Image>
            </TouchableOpacity>
        );
    }
}

export function  customNavigationOptions(navigation, headerRight,headerLeft){
    return ({
        headerRight: (headerRight ? headerRight : <View/>),
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
        },
        headerTitleContainerStyle: {
            left: TITLE_OFFSET,
            right: TITLE_OFFSET,
        },
        headerTintColor: '#24292e',
        // headerBackImage: require('./assets/images/navigation/back.png'),
        headerLeft: headerLeft || <NavigationCustomBackMenu nav={navigation}/>,
        headerStyle:{
            backgroundColor: '#fff'
        }
    })
}

export function formatNum(num){
    const str = num.toString();
    const reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg,"$1,");
}

const styles = StyleSheet.create({
    image: {
        left: 12,
        height: 18,
        width: 12,
    },
    large:{
        left: 12,
        height: 20,
        width: 20,
    }
});