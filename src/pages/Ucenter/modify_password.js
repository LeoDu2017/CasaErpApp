import React, {Component} from 'react';
import Toast from 'react-native-easy-toast'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity, StatusBar
} from 'react-native';
import {connect} from 'react-redux';
import actions from './_actions'
import styles from './_styles'
import {bindActionCreators} from 'redux'
import {customNavigationOptions} from "../../_Util";
import md5 from "react-native-md5"

class Index extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '修改密码',
        ...customNavigationOptions(navigation)
    });
    constructor(pops) {
        super(pops);
        this.state = {
            old_password: '',
            new_password: ''
        };
        this._navListener = this.props.navigation.addListener('didFocus', (nav) => {
            StatusBar.setBackgroundColor('#fff');
            StatusBar.setBarStyle('dark-content');
            StatusBar.setTranslucent(false);
            //!IOS && StatusBar.setBackgroundColor('#6a51ae');
        });
    };
    componentDidMount(): void {

    };
    onSubmit() {
        const { old_password, new_password } = this.state;
        if(old_password === '') {
            this.refs.toast.show('请填写原密码');
        }else if(new_password === ''){
            this.refs.toast.show('请填写新密码');
        }else {
            const {init} = this.props;
            init.update_password({
                old_password: md5.hex_md5(old_password),
                new_password: md5.hex_md5(new_password)
            },()=>{
                this.props.navigation.push('Home')
            },(msg)=>{
                this.refs.toast.show(msg);
            })
        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.loginInput}>
                    <View style={styles.input_wrap}>
                        <Image
                            style={styles.icon}
                            resizeMode='stretch'
                            source={require('../../assets/images/ucenter/input_key.png')}/>
                        <TextInput
                            style={styles.textInput}
                            autoFocus={true}
                            secureTextEntry={true}
                            placeholder='请输入原密码'
                            onChangeText={(old_password) =>this.setState({ old_password })}
                            value={this.state.old_password}
                        />
                    </View>
                    <View style={styles.input_wrap}>
                        <Image resizeMode='stretch' style={styles.icon} source={require('../../assets/images/ucenter/input_key.png')}/>

                        <TextInput
                            style={styles.textInput}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            placeholder='请输入新密码'
                            onChangeText={(new_password) =>this.setState({new_password })}
                            value={this.state.new_password}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.onSubmit.bind(this)}>
                        <Text style={styles.buttonText}>提交</Text>
                    </TouchableOpacity>
                </View>
                <Toast
                    position='top'
                    style={{backgroundColor:'rgba(0,0,0,.5)'}}
                    ref="toast"/>
            </View>
        )
    }
}

export default connect(null, (dispatch)=>({
    init:bindActionCreators(actions,dispatch)
}))(Index);