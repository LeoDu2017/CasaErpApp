import React,{Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import styles from './_styles'
import CustomModal from './_Component_modal'

const Item = ({title,value}) =>
<View style={styles.row}>
    <Text style={styles._left}>
        {title}
    </Text>
    <Text style={styles._right}>
        {value}
    </Text>
</View>;

class Screen extends Component{
    state = {
        visible: false,
        selected: 0
    };
    setModalVisible(visible) {
        this.setState({ visible: visible });
    };
    onSelect(index, value){

    };
    render(){
        const {
            id,
            url,
            onNav,
            contract_code,
            button_process,
            status,
            button_change_status,
        } = this.props;
        const titles = {
            csr_name:'客户姓名',
            project_address:'项目名称',
            delivery_user_name:'配送人',
            service_status_name:'状态',
        };
        return (
            <TouchableOpacity onPress={()=>{onNav(url,{id})}}>
                <View style={styles.item}>
                    <View style={styles.NO}>
                        <Text style={styles.NO_text}>
                            合同编号：{contract_code}
                        </Text>
                    </View>
                    {
                        Object.keys(titles).map( key =>
                            <Item key={Math.random()} title={titles[key]} value={this.props[key]}/>
                        )
                    }

                    <View style={[styles.row,{justifyContent:'flex-end'}]}>
                        {
                            button_change_status.status ?
                            <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                                <Text style={styles.buttonOutLine}>{button_change_status.title}</Text>
                                <CustomModal
                                    title='请选择售后状态'
                                    onCancle={()=>{this.setModalVisible(false)}}
                                    visible={this.state.visible}>
                                     <RadioGroup
                                         size={24}
                                         thickness={1}
                                         color='#E6E6E6'
                                         onSelect = {(index, value) => this.onSelect(index, value)}>
                                         {
                                             status.map(item =>
                                                 <RadioButton
                                                     color='#3496FB'
                                                     activeColor='#3496FB'
                                                     key={item.value}  value={item.value}>
                                                     <Text>{item.title}</Text>
                                                 </RadioButton>
                                             )
                                         }
                                     </RadioGroup>
                                </CustomModal>
                            </TouchableOpacity> : null
                        }{
                            button_process.status ?
                            <TouchableOpacity onPress={()=>{alert(button_process.title)}}>
                                <Text style={styles.buttonBackground}>{button_process.title}</Text>
                            </TouchableOpacity> : null
                        }
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

export default Screen
