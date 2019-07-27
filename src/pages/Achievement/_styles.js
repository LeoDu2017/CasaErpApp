import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    banner:{
        width,
        height:220,
        justifyContent:'flex-end',
        paddingBottom:50,
        paddingTop: 50
    },
    banner_wrapper:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',fontSize:14
    },
    division:{
        width: 1,height: 30,backgroundColor:'rgba(255,255,255,.5)'
    },
    banner_item:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
    },
    year:{
        width:100,
        height:30,
        lineHeight:30,
        // borderColor:'#eee',
        // borderBottomWidth:1,
        color:'#666',
        fontSize: 14,
        textAlign: 'center'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightgray'
    },
    Swiper_wrapper:{
        width,
        flex: 1,
        backgroundColor: '#fff'
    }
});
export default styles