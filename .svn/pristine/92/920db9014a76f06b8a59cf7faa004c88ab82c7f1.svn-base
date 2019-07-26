/**
 * Created by Leo on 2019/7/20 0012
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    Dimensions,
    LayoutAnimation,
    ImageBackground,
    TouchableOpacity, Animated,
} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from './_styles'
import actions from './_actions'

const win = Dimensions.get('window');

class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            top: win.height,
        };
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setTranslucent(true);
            StatusBar.setBarStyle('light-content');
            //!IOS && StatusBar.setBackgroundColor('#6a51ae');
        });
    };
    onShow(show){
        LayoutAnimation.spring();
        show ? this.setState({top:0})
            : this.setState({top: win.height});
    };
    componentDidMount(): void {

    };
    render(){
        const {
            User:{name,title,telephone,department,avatar},
            navigation:{push}
        } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.wrapper_1}>
                    <ImageBackground
                        resizeMode={'stretch'}
                        style={styles.banner}
                        source={require('../../assets/images/ucenter/banner.png')}>
                        <ImageBackground resizeMode='stretch'
                                         style={styles.info_img}
                                         source={require('../../assets/images/ucenter/info_bg.png')}>
                            <View style={styles.content_wrap_1_main}>
                                <View>
                                    <Text style={styles.user_name}>{name}</Text>
                                    <Text style={styles.user_title}>{title}</Text>
                                    <Text style={styles.user_phone}>手机号：{telephone}</Text>
                                    <Text style={styles.user_company}>{department}</Text>
                                </View>
                                <Image
                                    style={styles.user_avatar}
                                    source={avatar}/>
                            </View>
                        </ImageBackground>

                    </ImageBackground>
                </View>
                <View style={styles.space}>
                </View>
                <View style={styles.wrapper_2}>
                    <TouchableOpacity onPress={()=>{push('Ucenter/ModifyPassword')}}>
                        <View style={styles.content_wrap_2_item}>
                            <View style={styles.content_wrap_2_item_left}>
                                <Image style={styles.icon} source={require('../../assets/images/ucenter/edit.png')}/>
                                <Text style={styles.content_wrap_2_item_text}>修改密码</Text>
                            </View>
                            <Image style={styles.icon} source={require('../../assets/images/ucenter/go.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{push('Ucenter/ModifyPhone')}}>
                        <View style={styles.content_wrap_2_item}>
                            <View style={styles.content_wrap_2_item_left}>
                                <Image style={styles.icon} source={require('../../assets/images/ucenter/phone.png')}/>
                                <Text style={styles.content_wrap_2_item_text}>修改手机号</Text>
                            </View>
                            <Image style={styles.icon} source={require('../../assets/images/ucenter/go.png')}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.content_wrap_2_item}>
                        <View style={styles.content_wrap_2_item_left}>
                            <Image style={styles.icon} source={require('../../assets/images/ucenter/down-load.png')}/>
                            <Text style={styles.content_wrap_2_item_text}>版本号V1.0</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.onShow.bind(this,true)}>
                        <View style={styles.content_wrap_2_item}>
                            <View style={styles.content_wrap_2_item_left}>
                                <Image style={styles.icon} source={require('../../assets/images/ucenter/close.png')}/>
                                <Text style={styles.content_wrap_2_item_text}>退出登录</Text>
                            </View>
                            <Image style={styles.icon} source={require('../../assets/images/ucenter/go.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{...styles.drawer, top: this.state.top}}>
                    <View style={styles.drawer_container}>
                        <TouchableOpacity onPress={()=>{this.setState({top:0})}}>
                            <View style={[styles.drawer_item,styles.exit]}>
                                <Text style={[styles.blue,styles.drawer_item_text]}>退出</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onShow.bind(this,false)}>
                            <View style={styles.drawer_item}>
                                <Text style={styles.drawer_item_text}>取消</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        )
    };

    componentWillUnmount(): void {
        this._navListener.remove();
    };
}

export default connect(
    ({User}) => {
        return {
            User
        }
    },
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Page)