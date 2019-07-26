/**
 * Created by Leo on 2019/7/19 0012
 */
import React from 'react'
import styles from './_styles'
import {
    View,
    Text,
    Image,
    TouchableOpacity} from 'react-native'

const System = ({name,sub,onNav,seprate}) =>
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
                <TouchableOpacity key={item.name} activeOpacity={1} onPress={() => onNav(item.path,item.params)}>
                    <View style={styles.item}>
                        <Image source={item.icon} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>)
            }
        </View>
        {
            seprate && <View style={styles.interval}>
            </View>
        }
    </View>;

export default System