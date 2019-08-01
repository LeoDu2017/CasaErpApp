import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
        // justifyContent: 'center'
    },
    item: {
        backgroundColor: '#fff',
        width,
        marginTop: 10,
        flex: 1,
        // height: 210,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 20,
        paddingBottom: 20,
    },
    NO: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        paddingBottom: 15,
    },
    NO_text: {
        color: '#999999'
    },
    row: {
        width: '100%',
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    _left: {
        color: '#333'
    },
    _right: {
        color: '#333'
    },
    buttonOutLine: {
        height: 30,
        width: 90,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 3,
        color: '#333',
        textAlign: 'center',
        lineHeight: 30,
    },
    buttonBackground: {
        height: 30,
        width: 90,
        borderRadius: 3,
        backgroundColor: '#3496FB',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 30,
        marginLeft: 10,
    },


    modalWrap: {
        backgroundColor: 'rgba(0,0,0,.5)',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        width: (width - 60),
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    modalHeader: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
        height: 44,
        lineHeight: 44,
        flexDirection: 'row'
    },
    modalFooter: {
        flexDirection: 'row',
        height: 44,
        borderColor: '#E6E6E6',
        borderTopWidth: 1,
    },
    space: {
        height: 43,
        width: 1,
        backgroundColor: '#E6E6E6'
    },
    close_btn: {
        fontSize: 16, color: '#666666',
        width: (width - 61) / 2,
        textAlign: 'center',
        lineHeight: 43,
    },
    ok_btn: {
        fontSize: 16, color: '#3496FB',
        width: (width - 61) / 2,
        textAlign: 'center',
        lineHeight: 43,
    },
    radio_Wrapper: {
        paddingHorizontal: 10
    },
    radio_item: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center'
    },
    radio_title: {
        fontSize: 14,
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#E6E6E6'
    },
    radio_input: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderColor: '#E6E6E6',
        borderWidth: 1,
        marginRight: 10,
    },
    selected: {
        borderColor: '#3496FB'
    },
    drawer_box: {
        height,
        width,
        backgroundColor: 'rgba(0,0,0,.5)',
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    filter_container: {
        height,
        width: width * 4 / 5,
        backgroundColor: '#fff',
        paddingTop: 22,
    },
    filter_window: {
        width: width - 83,
        flex: 1,
    },
    filter_wraper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 70,
        overflow: 'hidden'
    },
    filter_title: {
        width: width - 103,
        height: 30,
        lineHeight: 30,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    filter_title_text: {
        color: '#999'
    },
    filter_data_title: {
        width: (width - 103) / 3 - 20 / 3,
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        borderRadius: 2,
        backgroundColor: '#EDF0F2',
        color: '#333',
        fontSize: 14,
        marginBottom: 10,
    },
    filter_data_selected: {
        backgroundColor: '#3496FB',
        color: '#fff'
    },
    filter_option_wrap: {
        flex: 1,
        padding: 10,
    },
    filter_footer: {
        height: 42,
        flexDirection: 'row'
    },
    search_input: {
        flex:1,
        height:36,
        fontSize: 14,
        padding: 0,
        alignSelf: 'center',
    },
    search_input_wrap:{
        flex:1,
        flexDirection:'row',
        height:36,
        padding: 0,
        paddingLeft: 14,
        paddingRight: 10,
        backgroundColor:'#F5F5F5',
        borderRadius: 18,
        alignSelf: 'center',
        justifyContent: 'space-between'
    }
});
export default styles