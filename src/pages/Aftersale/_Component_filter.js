import React,{Component} from 'react'
import {Text, TouchableOpacity, View,Image,ScrollView} from "react-native";
import styles from "./_styles";
import icon_down from '../../assets/images/filter/arrow_down.png'
import icon_up from '../../assets/images/filter/arrow_up.png'

class Options extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            filterID: '-1'
        }
    };
    setFilterID(filterID){
        this.setState({filterID});
    };
    render(){
        const {filter} = this.props;
        return (<View key={filter.value}>
                    <View
                        style={styles.filter_title}>
                        <Text style={styles.filter_title_text}>
                            {filter.title}
                        </Text>
                        <TouchableOpacity
                            onPress={()=> this.setState({open:!this.state.open})}>
                            <Image
                                style={{height:20,width:20}}
                                source={this.state.open ? icon_up : icon_down}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.filter_wraper,{height: this.state.open ? 'auto' : 70}]}>
                        {
                            filter.data.map(item => {
                                return (
                                    <TouchableOpacity
                                        key={item.value}
                                        onPress={()=> this.setFilterID(item.value)}>
                                        <Text
                                            numberOfLines={1}
                                            style={[styles.filter_data_title,
                                                this.state.filterID === item.value ?
                                                    styles.filter_data_selected : null]}>
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>)
    }
}
const Filter = ({filters}) =>
    <View style={styles.filter_window}>
        <View style={styles.filter_option_wrap}>
            <ScrollView>
                {
                    filters.map(filter => {
                        return <Options filter={filter}/>
                    })
                }
            </ScrollView>
        </View>
        <View style={styles.filter_footer}>
            <TouchableOpacity style={{flex:1,height:42,backgroundColor:'#EDF0F2'}}>
                <Text style={{textAlign: 'center',color:'#333',fontSize:16,lineHeight:42}}>重置</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,height:42,backgroundColor:'#3496FB'}}>
                <Text style={{textAlign:'center',color:'#fff',fontSize:16,lineHeight:42}}>确定</Text>
            </TouchableOpacity>
        </View>
    </View>;

export default Filter