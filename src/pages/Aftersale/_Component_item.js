import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './_styles'

const Screen = ({
    id,
    url,
    onNav,
    csr_name,
    contract_code,
    project_address,
    delivery_user_name,
    service_status_name,
}) => (
    <TouchableOpacity onPress={()=>{onNav(url,{id})}}>
        <View style={styles.item}>
            <View style={styles.NO}>
                <Text style={styles.NO_text}>
                    合同编号：{contract_code}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    客户姓名
                </Text>
                <Text style={styles._right}>
                    {csr_name}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    项目名称
                </Text>
                <Text style={styles._right}>
                    {project_address}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    配送人
                </Text>
                <Text style={styles._right}>
                    {delivery_user_name}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    状态
                </Text>
                <Text style={styles._right}>
                    {service_status_name}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default Screen
