/**
 * Created by Leo on 2019/7/19 0012
 */

import React,{Component} from 'react';
import {
    View,
    Image,
    ScrollView, StatusBar,
} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from './_styles'
import actions from './_actions'
import System from './_component'

StatusBar.setBackgroundColor('#fff');
StatusBar.setBarStyle('dark-content');

class Page extends Component{
    constructor(pops) {
        super(pops);
        this._navListener = this.props.navigation.addListener('didFocus', (nav) => {
            StatusBar.setBackgroundColor('#fff');
            StatusBar.setBarStyle('dark-content');
            StatusBar.setTranslucent(false);
            //!IOS && StatusBar.setBackgroundColor('#6a51ae');
        })
    };

    componentDidMount() {
        const { actions: { getMenu } } = this.props;
        getMenu()
    }

    render(){
        const {Menus,navigation:{navigate}} = this.props;
        const length = Menus.length - 1;
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        resizeMode={'cover'}
                        style={styles.banner}
                        source={require('../../assets/images/home/banner.png')}/>
                    {
                        Menus.map((menu,index) =>
                            <System
                                key={menu.name}
                                seprate={index !== length}
                                onNav={navigate}
                                {...menu}
                            />
                        )
                    }
                </View>
            </ScrollView>
        )
    };
    componentWillUnmount(): void {
        this._navListener.remove();
    };
}

export default connect(
    ({Menus: { Menus }}) => {
        return {
            Menus
        }
    },
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Page)