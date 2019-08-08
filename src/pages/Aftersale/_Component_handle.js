import React,{PureComponent} from 'react'
import styles from './_styles'
import {View,TextInput,TouchableOpacity,Text} from 'react-native'

class Handle extends PureComponent{
    state = {
        content: ''
    };
    onSubmit(){
        this.props.onHandle(this.state.content)
    };
    render(){
        return <View style={styles.handle_wrap}>
            <View style={styles.textarea_wrapper}>
                <TextInput
                    style={styles.texteara}
                    onChangeText={(content)=>this.setState({content})}
                    multiline={true}
                    name= 'handle'
                    key='handle'
                    placeholder= '请输入您要处理的工作内容'/>
            </View>
            <TouchableOpacity
                onPress={this.onSubmit.bind(this)}
                style={styles.submit_button}>
                <Text style={{color:'#fff',fontSize:14}}>提交</Text>
            </TouchableOpacity>
        </View>
    }
}

export default Handle