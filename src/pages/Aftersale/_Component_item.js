import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from './_styles'
const Screen = ({
                    contract_num,
                    customer_name,
                    project_name,
                    distributor,
                    status}) => (
    <TouchableOpacity>
        <View style={styles.item}>
            <View style={styles.NO}>
                <Text style={styles.NO_text}>
                    合同编号：{contract_num}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    客户姓名
                </Text>
                <Text style={styles._right}>
                    {customer_name}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    项目名称
                </Text>
                <Text style={styles._right}>
                    {project_name}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    配送人
                </Text>
                <Text style={styles._right}>
                    {distributor}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles._left}>
                    状态
                </Text>
                <Text style={styles._right}>
                    {status}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default Screen