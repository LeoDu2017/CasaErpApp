import React from 'react'
import styles from "./_styles";
import {ImageBackground, Text, View} from "react-native";

const Banner = ({today,show_today,today_title,month,month_title, year,year_title,bottom,top,justify}) => {
    return (
        <ImageBackground
            resizeMode={'stretch'}
            style={{...styles.banner,
                paddingTop: top,
                paddingBottom: bottom,
                justifyContent: justify}}
            source={require('../../assets/images/achievement/banner.png')}>
            {
                show_today &&
                <View style={styles.banner_wrapper}>
                    <View style={styles.banner_item}>
                        <Text style={styles.title}>{today_title}</Text>
                        <Text style={styles.title}>{today}</Text>
                    </View>
                </View>
            }
            <View style={styles.banner_wrapper}>
                <View style={styles.banner_item}>
                    <Text style={styles.title}>{month_title}</Text>
                    <Text style={styles.title}>{month}</Text>
                </View>
                <View style={styles.division}>

                </View>
                <View style={styles.banner_item}>
                    <Text style={styles.title}>{year_title}</Text>
                    <Text style={styles.title}>{year}</Text>
                </View>
            </View>
        </ImageBackground>
    )
};

export default Banner