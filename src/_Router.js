import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import StackRouteConfigs from './_Pages'

const StackNavigatorConfigs = {
    // 初始化哪个界面为根界面
    initialRouteName: 'LoginScreen',
    // initialRouteName: 'AchievementSystem/Comprehensive',
    // 跳转方式：默认的card，在iOS上是从右到左跳转，在Android上是从下到上，都是使用原生系统的默认跳转方式。
    mode: 'card',
    // 导航条动画效果：float表示会渐变，类似于iOS的原生效果，screen表示没有渐变。none表示隐藏导航条
    headerMode: 'screen',
    navigationOptions: {
        gesturesEnabled: false,
    }
};
const AppNavigator = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);//删除每个页面的头（一般使用自定义的）

export default createAppContainer(AppNavigator);

