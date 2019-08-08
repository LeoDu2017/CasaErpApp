import React, { Component } from 'react'
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import nav_close from '../assets/images/navigation/nav_close.png'
import nav_select from '../assets/images/navigation/nav_select.png'
import nav_search from '../assets/images/navigation/nav_search.png'
import nav_back from '../assets/images/navigation/back.png'
import styles from "../pages/Aftersale/_styles";
import { customNavigationOptions } from "../_Util";
import { Drawer } from "teaset";
import FilterComponent from "../pages/_Component_filter_pureComponent";

const Container = ({ title, RenderList, placeholder }) => {
    const headerTitle = (navigation) => navigation.state.params.showHeaderTitle ?
        <View style={styles.search_input_wrap}>
            {
                [<TextInput
                    key={'searchInput'}
                    onChangeText={(value) => navigation.state.params.onInput(value)}
                    value={navigation.state.params.value}
                    placeholder={placeholder}
                    placeholderColor='#CCCCCC'
                    style={styles.search_input} />,
                navigation.state.params.showClear ?
                    <TouchableOpacity
                        key={'searchClear'}
                        onPress={() => { navigation.state.params.onClear() }}
                        style={{ height: 28, width: 28, alignSelf: 'center' }}>
                        <Image style={{ height: 28, width: 28 }} source={nav_close} />
                    </TouchableOpacity> : null]
            }
        </View> : null;
    const headerRight = (navigation) => <View style={{ flexDirection: 'row', right: 14 }}>
        {
            !navigation.state.params.showHeaderTitle ? [<TouchableOpacity
                key={'filterIcon'}
                style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.state.params.showFilter('right')}>
                <Image style={{ height: 20, width: 20 }}
                    source={nav_select} />
            </TouchableOpacity>,
            <TouchableOpacity
                key={'searchIcon'}
                style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.state.params.toggleSearch(true)}>
                <Image style={{ height: 20, width: 20 }}
                    source={nav_search} />
            </TouchableOpacity>] : <TouchableOpacity
                onPress={() => navigation.state.params.onSearch()}>
                    <Image style={{ height: 20, width: 20 }} source={nav_search} />
                </TouchableOpacity>
        }
    </View>;
    const headerLeft = (navigation) => (navigation.state.params.showHeaderTitle ? <TouchableOpacity
        style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => { navigation.state.params.onBack() }}>
        <Image style={{ height: 18, width: 12 }}
            source={nav_back} />
    </TouchableOpacity> : null);

    return class Container extends Component {
        static navigationOptions = ({ navigation }) => ({
            title: title, headerTitle: headerTitle(navigation),
            ...customNavigationOptions(navigation, headerRight(navigation), headerLeft(navigation))
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
            let { rootTransform } = this.state;
            this.drawer = Drawer.open(this.renderDrawerMenu(), side, rootTransform)
        };

        onFilter(parameter) {
            const { init: { fetch_data } } = this.props;
            this.setState({ parameter: { ...parameter } });
            fetch_data({ ...this.state.parameter, ...parameter });
        };

        renderDrawerMenu() {
            return <FilterComponent
                onFilter={this.onFilter.bind(this)}
                onClose={() => {
                    this.drawer && this.drawer.close()
                }}
                filterType={{ service_status: this.state.parameter.service_status }}
                filters={this.props.filters} />
        };

        componentDidMount(): void {
            this.props.navigation.setParams({
                showFilter: this.toggleMenu.bind(this),
                toggleSearch: this.toggleSearch.bind(this),
                onInput: this.setKeyword.bind(this),
                onClear: this.onClear.bind(this),
                value: this.state.parameter.keyword,
                onBack: this.onBack.bind(this),
                onSearch: this.onSearch.bind(this),
            });
        };
        onClear() {
            this.props.navigation.setParams({
                value: '',
                showClear: false
            })
        };
        toggleSearch(show) {
            this.props.navigation.setParams({ showHeaderTitle: show });
        };
        onSearch() {
            const { init: { fetch_data } } = this.props;
            fetch_data(this.state.parameter);
        };
        onBack() {
            const { init: { fetch_data } } = this.props;
            this.toggleSearch(false);
            fetch_data({ page: 1 });
        };
        setKeyword(keyword) {
            this.setState({
                parameter: { ...this.state.parameter, keyword }
            });
            this.props.navigation.setParams({
                value: keyword,
                showClear: keyword.length > 1
            })
        };

        render() {
            return (
                <View style={styles.container}>
                    <RenderList {...this.props} />
                </View>
            )
        }
    }
};
export default Container