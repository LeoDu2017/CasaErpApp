/**
 * Created by Leo on 2019/7/22 0012
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet} from "react-native";
import {
    View,
    Text,
    StatusBar,
} from 'react-native';
import ModalDropdown from "../component/ModalDropdown";
import {customNavigationOptions} from '../_Util'

const Container = ({title,RenderBanner,RenderChart}) => {
    return class Screen extends Component {
        static  navigationOptions = ({navigation}) =>  ({
            title,
            ...customNavigationOptions(navigation,
                <View style={{right: 15}}>
                    <ModalDropdown
                        defaultValue={`${navigation.state.params.years[0]}`}
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
            this.props.init.update_data(year)
        };
        render() {
            const props = this.props;
           return  <View style={styles.container}>
               <RenderBanner {...props}/>
               <RenderChart {...props}/>
            </View>
        };

        componentWillUnmount(): void {
            this._navListener.remove();
        };
    }
};




const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    banner:{
        width,
        height:220,
        justifyContent:'flex-end',
        paddingBottom:50,
        paddingTop: 50
    },
    banner_wrapper:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',fontSize:14
    },
    division:{
        width: 1,height: 30,backgroundColor:'rgba(255,255,255,.5)'
    },
    banner_item:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
    },
    year:{
        width:100,
        height:30,
        lineHeight:30,
        // borderColor:'#eee',
        // borderBottomWidth:1,
        color:'#666',
        fontSize: 14,
        textAlign: 'center'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightgray'
    },
    Swiper_wrapper:{
        width,
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Container
