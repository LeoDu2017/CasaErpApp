import React from 'react'
import {Dimensions, Image, Text, View} from "react-native";
const {width} = Dimensions.get('window');

const Title = ({title, value, border, icon, normal,top}) =>
    <View style={[
        {minHeight: 44, width: (width - 30), flexDirection: 'row'},
        border ? {borderStyle:'dashed', borderBottomWidth: 1, borderColor: '#f2f2f2'} : null,
        !top ? {alignItems: 'center'} : null
    ]}>
        {
            icon ? <Image style={{height: 16, width: 16}} source={require('../../assets/images/report/icon.png')}/> : null
        }

        <Text style={[{color: '#999',fontSize: 14, marginRight: 10,justifyContent:'space-between',textAlign:'justify'},
            !normal?
                {width: 60, marginRight:20}: null]}>
            {title.replace(/[\r\n]/g, "")}
        </Text>
        {
            value? <Text style={{color: '#333', width:(width - 110), fontSize: 14, textAlign: 'auto'}}>
                {value.replace(/[\r\n]/g, "")}
            </Text> : null
        }
    </View>;

export default Title