import React from 'react'
import {View, Text, StyleSheet, TextInput, Image, Dimensions} from 'react-native'
export default ({edit,title,subtitle,data,name}) =>
    <View  style={styles.texteara_wrap}>
        {
            [
                title &&
                <View key={title}  style={styles.title}>
                    <Text style={styles.font16}>
                        {title}
                    </Text>
                </View>,
                subtitle &&
                <View key={subtitle}  style={styles.subtitle}>
                    <Image style={styles.icon}
                           source={require('../../assets/images/report/icon.png')}/>
                    <Text style={styles.subtitle_text}>
                        {subtitle}
                    </Text>
                </View>
            ]
        }
        <View style={styles.texteara_box}>
            {
                edit ?
                    <View style={{minHeight:92,backgroundColor:'#fff'}}>
                        <View style={{minHeight:92, padding: 5,borderColor:'#ccc',borderWidth:1}}>
                            <TextInput
                                style={styles.texteara}
                                multiline={true}
                                name={name}
                                key={name}
                                placeholder={`请输入${title || subtitle}`}
                                defaultValue={data}/>
                        </View>
                    </View> : [
                        <Text
                            key='content_title'
                            style={styles.font16}>
                            {data}
                        </Text>, subtitle &&
                        <View key='content_subtitle'  style={styles.line}/>
                    ]
            }
        </View>
    </View>;
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    texteara_wrap:{
        width,
        paddingHorizontal:15
    },
    font16:{
        fontSize: 16,
    },
    title:{
        borderColor: '#3496FB',
        borderLeftWidth: 4,
        paddingLeft: 10,
        height: 16,
        lineHeight: 16,
        alignItems: 'center',
        flexDirection:'row'
    },
    subtitle:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    texteara_box:{
        marginTop:10,
    },
    texteara:{
        paddingVertical: 0,
    },
    icon:{
        width:16,
        height: 16,
        marginLeft: -2
    },
    subtitle_text:{
        fontSize: 16,
        color: '#999'
    },
    line:{
        height:10,
        borderColor:'#e6e6e6',
        borderBottomWidth: 1
    }
});