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
import Toast from 'react-native-easy-toast'


class Index extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: '修改手机号',
        ...customNavigationOptions(navigation)
    });
    constructor(pops) {
        super(pops);
        this.state = {
            mobile_number: ''
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
        const { mobile_number } = this.state;
        if(mobile_number === '') {
            this.refs.toast.show('请输入你的心手机号码');
        } else {
            const {init:{update_mobile}} = this.props;
            update_mobile(this.state,()=>{
                this.props.navigation.navigate('Home')
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
                <Toast
                    position='top'
                    style={{backgroundColor:'rgba(0,0,0,.5)'}}
                    ref="toast"/>
            </View>
        )
    }

    componentWillUnmount(): void {
        this._navListener.remove();
    };
}


export default connect(null,(dispatch) => ({
    init:bindActionCreators(actions,dispatch)
}))(Index);