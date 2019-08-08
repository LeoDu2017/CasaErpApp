import React,{PureComponent} from 'react'
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import icon_down from '../../../assets/images/filter/arrow_down.png'
import icon_up from '../../../assets/images/filter/arrow_up.png'
import {formatNum} from "../../../_Util";

class Screen extends PureComponent{
    constructor(props){
        super(props);
        this.state ={
           open: false
        }
    };
    render(){
        const {other_data,price_fixed,price_contract,prod_amount,prod_unit,all_amount} = this.props;
        return <View style={styles.rest_info}>
            <View style={styles.rest_info_header}>
                <Text style={styles.rest_info_header_title}>
                    属性规格
                </Text>
                <TouchableOpacity
                    onPress={()=> this.setState({open:!this.state.open})}>
                    <Image
                        style={{height:20,width:20}}
                        source={this.state.open ? icon_up : icon_down}/>
                </TouchableOpacity>
            </View>
            <View style={[styles.specs_wrap,{height: this.state.open ? 'auto': 0}]}>
                {
                    other_data.map(item =><View key={Math.random()}  style={styles.rest_info_row}>
                        <Text style={styles.specs_title}>{item.title}:</Text>
                        {
                            item.img ?
                            <Image style={styles.image_wrap}
                                   source={{uri:item.img}}/>:
                            <View style={styles.image_wrap}>
                                <Image style={styles.icon}
                                       source={require('../../../assets/images/logo_gray.png')}/>
                            </View>
                        }
                        <Text style={styles.specs_msg}>{item.msg}</Text>
                    </View>)
                }
                <View style={styles.rest_info_row}>
                    <Text style={styles.specs_title}>市场价:</Text>
                    <Text style={styles.specs_msg}>{`￥${formatNum(price_fixed)}`}</Text>
                </View>
                <View style={styles.rest_info_row}>
                    <Text style={styles.specs_title}>合同价:</Text>
                    <Text style={styles.specs_msg}>{`￥${formatNum(price_contract)}`}</Text>
                </View>
                <View style={styles.rest_info_row}>
                    <Text style={styles.specs_title}>数   量:</Text>
                    <Text style={styles.specs_msg}>{`${prod_amount} ${prod_unit}`}</Text>
                </View>
                <View style={styles.rest_info_row}>
                    <Text style={styles.specs_title}>总   价:</Text>
                    <Text style={styles.specs_msg}>{`￥${formatNum(all_amount)}`}</Text>
                </View>
            </View>
        </View>
    }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    rest_info:{
        marginTop: 10,
    },
    rest_info_header:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    rest_info_header_title:{
        color: '#999',
        fontSize: 14
    },
    rest_info_row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: width - 30,
    },
    image_wrap:{
        height: 40,
        width: 60,
        backgroundColor: '#EBEFF2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    icon:{
        width: 25,
        height: 25
    },
    specs_title:{
        color: '#999',
        paddingRight: 10
    },
    specs_msg:{
        flex:1
    },
    specs_wrap:{
        height: 0,
        overflow: 'hidden'
    }
});
export default Screen
