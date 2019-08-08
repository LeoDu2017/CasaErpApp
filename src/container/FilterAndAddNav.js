import React,{Component} from 'react'
import {Image,TouchableOpacity,View,Text} from "react-native";
import nav_select from '../assets/images/navigation/nav_select.png'
import nav_new from '../assets/images/navigation/new.png'
import {customNavigationOptions} from "../_Util"
import {Drawer} from "teaset"
import FilterComponent from "../pages/_Component_filter_pureComponent"
import styles from "../pages/Aftersale/_styles";

const Container = ({title,newScreen,RenderList,showAdd}) => {
    return class Screen extends Component{
        static  navigationOptions = ({navigation}) => ({
            title,
            ...customNavigationOptions(navigation,
                <View style={{flexDirection: 'row',right: 14}}>
                    {
                        showAdd &&  <TouchableOpacity onPress={() => navigation.push(newScreen, {id: 0})}>
                            <Image style={{height: 20, width: 20,marginRight:10}}  source={nav_new}/>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => navigation.state.params.showFilter('right')}>
                        <Image style={{height: 20, width: 20}}  source={nav_select}/>
                    </TouchableOpacity>
                </View>)
        });
        constructor(props) {
            super(props);
            this.state = {
                parameter: {
                    keyword: '',
                    service_status: '-1',
                    page: 1
                },
                rootTransform: 'none',
            }
        };

        toggleMenu(side) {
            let {rootTransform} = this.state;
            this.drawer = Drawer.open(this.renderDrawerMenu(), side, rootTransform)
        };

        onFilter(parameter) {
            const {init: {fetch_data}} = this.props;
            this.setState({parameter: {...parameter}});
            fetch_data({...this.state.parameter, ...parameter});
        };

        renderDrawerMenu() {
            return <FilterComponent
                onFilter={this.onFilter.bind(this)}
                onClose={() => {
                    this.drawer && this.drawer.close()
                }}
                filterType={{service_status: this.state.parameter.service_status}}
                filters={this.props.filters}/>
        };
        componentDidMount(): void {
            this.props.navigation.setParams({
                showFilter: this.toggleMenu.bind(this)
            })
        };
        render() {
            const props = this.props;
            return (
                <View style={styles.container}>
                    <RenderList {...props}/>
                </View>
            )
        }
    }
};

export default Container
