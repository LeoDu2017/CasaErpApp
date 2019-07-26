import React, {Component} from 'react';
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

class Index extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '修改密码',
        ...customNavigationOptions(navigation)
    });
    constructor(pops) {
        super(pops);
        this.state = {
            origin_pwd: '',
            new_pwd: ''
        };
        this._navListener = this.props.navigation.addListener('didFocus', (nav) => {
            StatusBar.setBackgroundColor('#f5fcff');
            StatusBar.setBarStyle('dark-content');
            StatusBar.setTranslucent(false);
            //!IOS && StatusBar.setBackgroundColor('#6a51ae');
        });
    };
    componentDidMount(): void {

    };
    onSubmit() {
        const { origin_pwd, new_pwd } = this.state;
        if(origin_pwd === '' || new_pwd === '') {
            alert('请填写完整');
        } else {
            const {ucenterAction} = this.props;
            ucenterAction.modifyPwd(this.state)
            // this.props.navigation.push('Home');
        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5fcff'}}>
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
                            onChangeText={(origin_pwd) =>this.setState({ origin_pwd })}
                            value={this.state.origin_pwd}
                        />
                    </View>
                    <View style={styles.input_wrap}>
                        <Image resizeMode='stretch' style={styles.icon} source={require('../../assets/images/ucenter/input_key.png')}/>

                        <TextInput
                            style={styles.textInput}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            placeholder='请输入新密码'
                            onChangeText={(new_pwd) =>this.setState({new_pwd })}
                            value={this.state.new_pwd}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.onSubmit.bind(this)}>
                        <Text style={styles.buttonText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    // componentWillUnmount(): void {
    //     this._navListener.remove();
    // };
}

export default connect(null, (dispatch)=>({
    ucenterAction:bindActionCreators(actions,dispatch)
}))(Index);