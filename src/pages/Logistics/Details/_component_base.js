import React from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import {formatNum} from "../../../_Util";

const titles = {
    contract_code: '合同编号',
    send_address: '配送地址',
    csr_name: '联系人',
    csr_contact: '联系方式',
    send_date: '配送时间',
    add_user: '提交人',
    add_date: '提交时间',
    remark: '备注',
    pay_amount: '尾款金额',
    send_status: '状态'
};

const Screen = (props) => {
        return <View>
            <View style={styles.wrapper}>
                {
                    Object.keys(titles).map(key => <View key={Math.random()} style={styles.row}>
                        <Text style={styles.title}>{titles[key]}</Text>
                        {
                            [key === 'pay_amount' &&
                            <Text key={Math.random()} style={styles.text}>{`￥${formatNum(Number(props[key]))}`}</Text>,
                            key === 'add_date' &&
                            <Text key={Math.random()} style={styles.text}>{`${props[key]} ${props['add_time']}`}</Text>,
                            <Text key={Math.random()} style={styles.text}>{props[key]}</Text>
                            ]
                        }
                    </View>)
                }
            </View>
            {
                props.status_remark ?
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Text style={styles.lable}>
                        </Text>
                        <Text style={styles.header_title}>
                            状态记录
                        </Text>
                    </View>
                    <View style={styles.log_wrap}>
                        {
                            props.status_remark.map(remark =>
                                <Text key={Math.random()} style={styles.log}>{remark}</Text>
                            )
                        }
                    </View>
                </View> : null
            }
        </View>
    };

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        width,
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom: 0,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    text: {
        color: '#333',
        fontSize: 14,
        width: (width - 110),
        textAlign: 'right'
    },
    title: {
        color: '#333',
        fontSize: 14,
        width: 80
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lable: {
        height: 14,
        width: 3,
        backgroundColor: '#3496FB',
        marginRight: 10
    },
    header_title: {
        color: '#333',
        fontSize: 14,
    },
    log_wrap:{
        paddingVertical: 15
    },
    log:{
        color: '#999'
    }
});
export default Screen