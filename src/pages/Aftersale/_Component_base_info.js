import React from 'react'
import {View,Text,Dimensions} from 'react-native'
const {width} = Dimensions.get('window');
const info_type = {
    contract_code:"合同编号",
    project_address:"项目名称",
    csr_name:"联系人",
    csr_phone:"联系方式",
    delivery_user_name:"配送人",
    service_date:"配送时间",
    service_type:"售后类型",
};
const BaseInfo = ({base_info}) =>
<View>
    <View style={{width,backgroundColor:'#fff',padding:15,marginTop:10}}>
        {
            Object.keys(info_type).map(item =>
                <View key={item} style={{
                    height: 24,
                    flexDirection:'row',
                    justifyContent:'space-between'}}>
                    <Text style={{color:'#333',fontSize:14}}>{info_type[item]} </Text>
                    <Text style={{color:'#333',fontSize:14}}>{base_info[item]}</Text>
                </View>
            )
        }
    </View>
    {base_info.status_remark && base_info.status_remark.length &&
        <View style={{width,backgroundColor:'#fff',padding:15,marginTop:10,paddingBottom:0}}>
            <View style={{marginBottom:10}}>
                <Text style={{color:'#999',fontSize:14}}>状态记录</Text>
            </View>
            {
                base_info.status_remark.map( (item,index,list) =>
                    <View key={index} style={[{lineHeight:16}, (index+1) !== list.length && {marginBottom:10}]}>
                        <Text style={{color:'#999'}}>{item}</Text>
                    </View>
                )
            }
        </View>
    }
</View>;

export default BaseInfo