import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
const {width} = Dimensions.get('window');
export default ({date,data,onNav,url,children}) =>
        <View style={styles.report_item}>
            <View style={styles.report_item_time}>
                <Text style={styles.report_item_time_text}>{date}</Text>
            </View>
            {data.map( ({id,info,title,name}) =>
                <View key={id}
                    style={styles.report_item_content_wrap}>
                    <TouchableOpacity  onPress={()=>{onNav(url,{id})}}>
                        <View style={styles.report_item_content_title}>
                           <View style={styles.float}>
                               <Image style={styles.icon}
                                      resizeMode='stretch'
                                      source={require('../../assets/images/report/icon.png')}/>
                               <Text style={styles.report_item_content_title_text}>
                                   {title}
                               </Text>
                           </View>
                            {
                                name &&  <Text style={styles.report_item_content_title_text}>
                                    汇报人：{name}
                                </Text>
                            }
                        </View>
                        <Text numberOfLines={4}>
                            {info}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.bottom}>
                            {children}
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>;
const styles = StyleSheet.create({
    main:{
        width:width,
    },
    report_item:{
        width:width,
        backgroundColor: '#fff',
        padding: 16,
        marginTop: 10
    },
    report_item_time:{
        height: 28
    },
    report_item_time_text:{
        color: '#333',
        fontSize: 14
    },
    report_item_content_wrap:{
        borderColor: '#E6E6E6',
        borderTopWidth: 1,
        marginBottom: 10,
    },
    report_item_content_title:{
        marginTop: 10,
        marginBottom: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    report_item_content_title_text:{
        fontSize:14,
        color: '#999',
    },
    icon:{
        width:18,
        height:18
    },
    report_item_content_main:{
        color: '#333',
        fontSize: 14
    },
    float:{
        flexDirection: 'row'
    },
    bottom:{
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
});