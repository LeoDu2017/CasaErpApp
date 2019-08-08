import React from 'react'
import {View,Text} from 'react-native'
import styles from './_styles'
import Title from './_Component_title'
const Logs = ({list}) =>
    <View style={styles.logs}>
        <Title title="处理记录" border={0}/>
        {
            list.map(item => <View style={{ marginTop: 10 }}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#999',fontSize:14}}>{item.add_user_name}</Text>
                    <Text style={{color:'#999',fontSize:14}}>{item.add_datetime}</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:'#333',fontSize:14,lineHeight:20}}>{item.deal_content}</Text>
                </View>
            </View>)
        }
    </View>;

export default Logs