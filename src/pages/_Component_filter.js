import React,{Component} from 'react'
import {Text, TouchableOpacity, View,Image,ScrollView} from "react-native";
import styles from "./Aftersale/_styles";
import icon_down from '../assets/images/filter/arrow_down.png'
import icon_up from '../assets/images/filter/arrow_up.png'

class Options extends Component{
    constructor(props){
        super(props);
        const {filterType} = this.props;
        this.state={
            open: false,
            ...filterType
        }
    };
    setFilterID(filterID){
        const {setFilter,filter:{value}} = this.props;
        this.setState({[value]:filterID});
        setFilter({[value]:filterID})
    };
    render(){
        const {filter} = this.props;
        return (<View>
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
                                                this.state[filter.value] === item.value ?
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
class Filter extends Component{
    constructor(props){
        super(props);
        const {filterType} = this.props;
        this.state = {...filterType};
        this.onSubmit = this.onSubmit.bind(this)
    };
    setFilter(filterOption){
        this.setState(filterOption)
    };
    onSubmit(){
        const {onFilter,onClose} = this.props;
        onFilter(this.state);
        onClose && onClose();
    };
    render(){
        const {filters,filterType} = this.props;
        return (
            <View style={styles.filter_window}>
                <View style={styles.filter_option_wrap}>
                    <ScrollView>
                        {
                            filters.map(filter => {
                                return <Options filterType={filterType}  key={filter.value} setFilter={this.setFilter.bind(this)} filter={filter}/>
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.filter_footer}>
                    <TouchableOpacity style={{flex:1,height:42,backgroundColor:'#EDF0F2'}}>
                        <Text style={{textAlign: 'center',color:'#333',fontSize:16,lineHeight:42}}>重置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.onSubmit()}
                        style={{flex:1,height:42,backgroundColor:'#3496FB'}}>
                        <Text style={{textAlign:'center',color:'#fff',fontSize:16,lineHeight:42}}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Filter