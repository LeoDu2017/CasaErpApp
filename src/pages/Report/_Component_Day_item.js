import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
const {width} = Dimensions.get('window');
export default ({report_day,id,work_content,day,content, onNav,url,children}) =>{
    if(report_day){
        return  <View style={styles.report_item}>
            <View style={styles.report_item_time}>
                <Text style={styles.report_item_time_text}>{report_day}</Text>
            </View>
            <View>
                <TouchableOpacity  onPress={()=>{onNav(url)}}>
                    <View style={styles.report_item_content_title}>
                        <View style={styles.float}>
                            <Image style={styles.icon}
                                   resizeMode='stretch'
                                   source={require('../../assets/images/report/icon.png')}/>
                            <Text style={styles.report_item_content_title_text}>
                                工作汇报
                            </Text>
                        </View>
                    </View>
                    <Text numberOfLines={4}>
                        {work_content}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.bottom}>
                        {children}
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    }else{
        return  <View style={styles.report_item}>
            <View style={styles.report_item_time}>
                <Text style={styles.report_item_time_text}>{day}</Text>
            </View>
            <View>
                {
                    content.map( (item,index) => {
                        return <TouchableOpacity
                            key={`item_${index}`}
                            style={[{paddingBottom:10},index+1 !== content.length && {
                                borderBottomWidth:1,borderColor:'#E6E6E6'
                            }]}
                            onPress={()=>{onNav(url,{id:item['id'] })}}>
                            <View style={[styles.report_item_content_title, ]}>
                                <View style={styles.float}>
                                    <Image style={styles.icon}
                                           resizeMode='stretch'
                                           source={require('../../assets/images/report/icon.png')}/>
                                    <Text style={styles.report_item_content_title_text}>
                                        工作汇报
                                    </Text>
                                </View>
                                <Text style={styles.report_item_content_title_text}>
                                    汇报人：{item.add_user}
                                </Text>
                            </View>
                            <Text numberOfLines={4}>
                                {item['work_content']}
                            </Text>
                            <View style={styles.bottom}>
                                {children}
                            </View>
                        </TouchableOpacity>
                    })
                }
            </View>
        </View>;
    }

}

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