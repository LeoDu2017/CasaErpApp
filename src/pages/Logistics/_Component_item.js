import React,{PureComponent} from 'react'
import {View, StyleSheet, Text, TouchableOpacity,Dimensions} from 'react-native'
import {formatNum} from "../../_Util";


const Item = ({title,value}) =>
    <View style={styles.row}>
        <Text style={styles._left}>
            {title}
        </Text>
        <Text style={styles._right}>
            {value}
        </Text>
    </View>;

class Screen extends PureComponent{
    constructor(props){
        super(props)
    };
    render(){
        const {id,url,contract_code,onNav,add_time,send_address,pay_amount,add_user,send_status,add_date} = this.props;

        const titles = {
            send_address: '配送地址',
            add_user:'提交人',
            add_date: '提交时间',
            pay_amount:'尾款金额',
            send_status: '状态'
        };
        const values = {
            send_address,
            add_user,
            add_date:`${add_date} ${add_time}`,
            pay_amount:`￥${formatNum(Number(pay_amount))}`,
            send_status,
        };
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={()=>{onNav(url,{id})}}>
                <View>
                    <View style={styles.NO}>
                        <Text style={styles.NO_text}>
                            合同编号：{contract_code}
                        </Text>
                    </View>
                    {
                        Object.keys(titles).map( key =>
                            <Item key={Math.random()}
                                  title={titles[key]}
                                  value={values[key]}/>
                        )
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        width,
        marginTop: 10,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 20,
        paddingBottom: 5,
    },
    NO: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        paddingBottom: 15,
        marginBottom: 15
    },
    NO_text: {
        color: '#999999'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10
    },

    _left: {
        color: '#333',
        fontSize: 14,
        width: 80
    },
    _right: {
        color: '#333',
        fontSize: 14,
        width: (width - 110),
        textAlign: 'right'
    },
});

export default Screen