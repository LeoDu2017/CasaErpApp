import React,{Component} from 'react'
import {Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./_styles";

class CustomModal extends Component{
    render(){
        const {title,children} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                presentationStyle= 'overFullScreen'
                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalWrap}>
                    <View style={styles.modal}>
                        <Text style={styles.modalHeader} >{title}</Text>
                        <ScrollView>
                            {children}
                        </ScrollView>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.onCancle()
                                }}
                            >
                                <Text style={styles.close_btn}>关闭</Text>
                            </TouchableOpacity>
                            <Text style={styles.space}> </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.visible);
                                }}
                            >
                                <Text style={styles.ok_btn}>确认</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default CustomModal