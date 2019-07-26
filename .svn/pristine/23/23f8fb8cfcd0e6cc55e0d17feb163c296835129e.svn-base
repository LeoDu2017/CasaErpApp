import React, {Component} from 'react';
import styles from './_styles'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity, StatusBar
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./_actions";
import {customNavigationOptions} from "../../_Util";



class Index extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '修改手机号',
        ...customNavigationOptions(navigation)
    });
    constructor(pops) {
        super(pops);
        this.state = {
            phone_num: ''
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
        const { phone_num } = this.state;
        if(phone_num === '') {
            alert('请输入你的心手机号码');
        } else {
            const {ucenterAction} = this.props;
            ucenterAction.modifyPhone(this.state)
            // this.props.navigation.navigate('Home');
        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5fcff'}}>
                <View style={styles.loginInput}>
                    <View style={styles.input_wrap}>
                        <Image resizeMode='stretch' style={{height:20,width:14}} source={require('../../assets/images/ucenter/input_phone.png')}/>
                        <TextInput
                            style={styles.textInput}
                            autoFocus={true}
                            secureTextEntry={true}
                            placeholder='请输入新手机号码'
                            onChangeText={(phone_num) =>this.setState({ phone_num })}
                            value={this.state.phone_num}
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

    componentWillUnmount(): void {
        this._navListener.remove();
    };
}


export default connect(null,(dispatch) => ({
    ucenterAction:bindActionCreators(actions,dispatch)
}))(Index);