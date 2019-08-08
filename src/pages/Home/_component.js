/**
 * Created by Leo on 2019/7/19 0012
 * 
 * fix by whl on 2019/8/6 分权限显示用户可视菜单， 添加待审核表示数量的角标
 */
import React from 'react'
import styles from './_styles'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

const System = ({ name, sub, onNav, seprate }) =>
    <View style={styles.wrap}>
        <View style={styles.menuTitle}>
            <View style={styles.lightBox}>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {name}
                </Text>
            </View>
        </View>
        <View style={styles.menuItems}>
            {sub.map(item =>
                <TouchableOpacity key={item.name} activeOpacity={1} onPress={() => onNav(item.path, item.params)}>
                    <View style={styles.item}>
                        <Image source={item.icon} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                    {
                        !item.msg_num ? <View /> :
                            item.msg_num === 0 ? <View /> : <Text style={styles.subscript}>{item.msg_num}</Text>
                    }
                </TouchableOpacity>)
            }
        </View>
        {
            seprate && <View style={styles.interval}>
            </View>
        }
    </View>;

export default System