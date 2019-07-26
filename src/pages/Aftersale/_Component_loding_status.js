import React from 'react'
import {View,Text} from 'react-native'


const Screen = ({children}) =>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> {children}</Text>
    </View>;

export default Screen