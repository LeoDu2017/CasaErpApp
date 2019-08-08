import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');
export default ({report_week,id,report_gzhz,content, onNav, url, day, children}) => {
    if (!day) {
        return <View style={styles.report_item}>
            <View style={styles.report_item_time}>
                <Text style={styles.report_item_time_text}>{report_week}</Text>
            </View>
            <View  style={styles.report_item_content_wrap}>
                <TouchableOpacity onPress={() => {onNav(url, {id,show:false})}}>
                    <View style={styles.report_item_content_title}>
                        <View style={styles.float}>
                            <Image style={styles.icon}
                                   resizeMode='stretch'
                                   source={require('../../assets/images/report/icon.png')}/>
                            <Text style={styles.report_item_content_title_text}>工作汇报 </Text>
                        </View>
                    </View>
                    <Text numberOfLines={4}>
                        {report_gzhz}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    } else {
        return <View style={styles.report_item}>
            <View style={styles.report_item_time}>
                <Text style={styles.report_item_time_text}>{day}</Text>
            </View>
            {content.map(({id, report_gzhz, add_user,pifu_able}) =>
                <View key={id} style={styles.report_item_content_wrap}>
                    <TouchableOpacity onPress={()=>{ onNav(url, {id,show:true})}}>
                        <View style={styles.report_item_content_title}>
                            <View style={styles.float}>
                                <Image style={styles.icon}
                                       resizeMode='stretch'
                                       source={require('../../assets/images/report/icon.png')}/>
                                <Text style={styles.report_item_content_title_text}>
                                    工作汇报
                                </Text>
                            </View>
                            <Text style={styles.report_item_content_title_text}>
                                汇报人：{add_user}
                            </Text>
                        </View>
                        <Text numberOfLines={4}>
                            {report_gzhz}
                        </Text>
                    </TouchableOpacity>
                    {
                        pifu_able ? <TouchableOpacity>
                            <View style={styles.bottom}>
                                <View style={styles.button}>
                                    <Text style={styles.text}>批复</Text>
                                </View>
                            </View>
                        </TouchableOpacity> : null
                    }

                </View>
            )}
        </View>
    }
};
const styles = StyleSheet.create({
    main: {
        width: width,
    },
    report_item: {
        width: width,
        backgroundColor: '#fff',
        padding: 16,
        marginTop: 10
    },
    report_item_time: {
        height: 28
    },
    report_item_time_text: {
        color: '#333',
        fontSize: 14
    },
    report_item_content_wrap: {
        borderColor: '#E6E6E6',
        borderTopWidth: 1,
        marginBottom: 10,
    },
    report_item_content_title: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    report_item_content_title_text: {
        fontSize: 14,
        color: '#999',
    },
    icon: {
        width: 18,
        height: 18
    },
    report_item_content_main: {
        color: '#333',
        fontSize: 14
    },
    float: {
        flexDirection: 'row'
    },
    bottom: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    button:{
        height: 30,
        width: 90,
        marginTop: 10,
        backgroundColor: '#3496FB',
        borderRadius: 4,

    },
    text:{
        color:'#fff',
        textAlign: 'center',
        lineHeight: 30
    }
});