import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    banner:{
        width,
    },
    titleText: {
        fontSize: 16,
        fontWeight: '200',
    },
    wrap:{
        width,
        justifyContent: 'flex-start',
        backgroundColor: '#f5fcff',
    },
    menuTitle:{
        width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItems: {
        width,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: (width / 4),
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor:'transparent'
    },
    itemText: {
        fontSize: 14,
        marginTop: 10,
    },
    interval: {
        height: 10,
        backgroundColor: '#e9f7fd'
    },
    lightBox: {
        width: 4,
        height: 16,
        backgroundColor: '#3595fb',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 2
    }
});
export default styles