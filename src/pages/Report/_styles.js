import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EBEFF2'
    },
    report_data:{
        width,
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 10,
    }
});
export default styles