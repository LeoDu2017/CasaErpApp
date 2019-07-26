import React from 'react'
import {View,Text} from 'react-native'
import styles from './_styles'

const Screen = ({children}) =>
    <View style={styles.container}>
        <Text> {children}</Text>
    </View>;

export default Screen