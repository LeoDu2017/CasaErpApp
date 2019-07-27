/**
 * Created by Leo on 2019/7/19
 */
import React, {Component} from 'react'
import md5 from "react-native-md5"
import {
    Text,
    View,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import {StackActions, NavigationActions} from 'react-navigation'
import loginAction from './_actions'
import {bindActionCreators} from 'redux'
import styles from './_styles'

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'MainScreen'})
    ]
});

class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'ll',
            password:md5.hex_md5('casa*2018')
        }
    };
    static  navigationOptions = ({navigation, screenProps}) => ({
        header: null
    });

    componentDidMount(): void {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBackgroundColor('#fff');
            StatusBar.setBarStyle('dark-content');
            //!IOS && StatusBar.setBackgroundColor('#6a51ae');
        });
    };
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction);
            return false;
        }
        return true;
    };
    onLogin(){
        const {loginAction:{login}} = this.props;
        // if(!this.state.username||!this.state.password){
        //     alert('请输入用户名或密码');
        //     return
        // }
        login(this.state)
    };
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.png')}/>
                <Text style={styles.name}>C A S A ·  E R P</Text>
                <View style={styles.input_wrap}>
                    <Image style={styles.icon} source={require('../../assets/images/person.png')}/>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#ccc'
                        placeholder='请输入您的用户名'
                        underlineColorAndroid='transparent'
                        onChangeText = {(username) => this.setState({username})}
                    />
                </View>
                <View style={styles.input_wrap}>
                    <Image style={styles.icon} source={require('../../assets/images/key.png')}/>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder='请输入您的密码'
                        placeholderTextColor='#ccc'
                        underlineColorAndroid='transparent'
                        onChangeText = {(password) => this.setState({password:md5.hex_md5(password)})}
                    />
                </View>
                <TouchableOpacity onPress={this.onLogin.bind(this)} style={styles.button}>
                    <Text style={styles.button_text}>登陆</Text>
                </TouchableOpacity>
            </View>
        );
    };

    componentWillUnmount(): void {
        this._navListener.remove();
    };
}


export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user
    }),
    (dispatch) => ({
        loginAction: bindActionCreators(loginAction, dispatch)
    })
)(Screen)

