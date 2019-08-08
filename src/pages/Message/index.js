import React from 'react'
import { View, Text, Image } from 'react-native'

const Message = ({ }) =>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/search/icon_face.png')} />
            <Text style={{ fontSize: 14, color: '#666', marginTop: 20 }}> 暂时还没有消息，去看看别的吧 </Text>
        </View>
    </View>;

export default Message