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
        height: 200
    }
});
export default styles