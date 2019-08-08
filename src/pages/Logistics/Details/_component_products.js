import React from 'react'
import {Dimensions, StyleSheet, Text, View,Image} from 'react-native'
import RestInfo from './_component_specs'
const Screen = ({prod_list}) => {
    return <View style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.lable}>
            </Text>
            <Text style={styles.header_title}>
                产品信息
            </Text>
        </View>
        {
            prod_list.map(item =>
            <View key={Math.random()}  style={styles.row}>
                <BaseInfo {...item}/>
                <RestInfo {...item}/>
            </View>)
        }

    </View>
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        width,
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom: 0,
        marginTop: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lable: {
        height: 14,
        width: 3,
        backgroundColor: '#3496FB',
        marginRight: 10
    },
    header_title: {
        color: '#333',
        fontSize: 14,
    },
    row:{
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
        paddingVertical: 15
    },
    base:{
        flexDirection: 'row'
    },
    main_img:{
        width: 120,
        height: 80,
    },
    base_info:{
        flex: 1,
        paddingLeft: 15,
        paddingVertical: 2,
        justifyContent: 'space-between'
    },
    base_info_row:{
        flexDirection:'row'
    },
    base_info_title:{
        fontSize: 14,
        color: '#999999'
    },
    base_info_content:{
        fontSize: 14,
        color: '#333333',
        paddingLeft: 10
    },
    rest_info:{

    },
    rest_info_header:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    rest_info_header_title:{
        color: '#999',
        fontSize: 14
    }
});

const titles = {
    prod_code: '产品编号',
    prod_name: '产品名称',
    brand_name: '产品品牌',
    prod_process_status:'物流状态',
};
const BaseInfo = (item) => <View style={styles.base}>
    <Image
        source={{uri:`${item['prod_image']}@80h_120w_1e_1c`}}
        style={styles.main_img}/>
    <View style={styles.base_info}>
        {
            Object.keys(titles).map(key =><View
                key={key}
                style={styles.base_info_row}>
                <Text style={styles.base_info_title}>
                    {titles[key]}:
                </Text>
                {
                    key === 'prod_process_status' ?
                        <Text style={[styles.base_info_content,{color:item['prod_process_status'].color}]}>
                            {item['prod_process_status'].type.replace(/[\r\n]/g, "")}
                        </Text> :
                        <Text style={styles.base_info_content}>
                            {item[key].replace(/[\r\n]/g, "")}
                        </Text>
                }
            </View>)
        }
    </View>
</View>;
export default Screen