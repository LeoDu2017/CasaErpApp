import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import Toast from 'react-native-easy-toast'

class List extends Component {
    state: {
        refreshState: number,
        currentPage: number
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshState: RefreshState.Idle,
            currentPage: 1
        }
    }

    componentDidMount() {
        this.onHeaderRefresh()
    }
    fetchFail(status){
        this.setState({ refreshState: RefreshState.Failure })
        if (status === 2) {
            this.refs.toast.show('登录超时，请重新登录!');
            this.props.onNav('LoginScreen')
        } 
    };
    fetchSuccess(dataList){
        

        this.setState({
            refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
        })
    };
    onHeaderRefresh = () => {
        const {fetchData} = this.props;
        this.setState({ refreshState: RefreshState.HeaderRefreshing, currentPage: 1 });
        // 网络请求
        fetchData({page:1},this.fetchSuccess.bind(this),this.fetchFail.bind(this), this.props.onNav)
    };

    onFooterRefresh = () => {
        const {fetchData} = this.props;
        this.setState({ refreshState: RefreshState.FooterRefreshing });
        const page = this.state.currentPage + 1;
        fetchData({page},(dataList)=>{

            this.setState({
                refreshState: dataList.length === 0 ? RefreshState.NoMoreData : RefreshState.Idle,
                currentPage: page
            })
        },this.fetchFail.bind(this))
    };


    keyExtractor = (item: any, index: number) => {
        return index.toString()
    };

    renderCell = (info: Object) => {
        const {Cell,onNav,url,...rest} = this.props;
        return <Cell {...info.item} {...rest} onNav={onNav} url={url}/>
    };

    render() {
        const {dataList} = this.props;
        return (
            <View style={styles.container}>
                <RefreshListView
                    data={dataList}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh.bind(this)}
                    onFooterRefresh={this.onFooterRefresh.bind(this)}

                    // 可选
                    footerRefreshingText='玩命加载中 >.<'
                    footerFailureText='我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText='-我是有底线的-'
                    footerEmptyDataText='-好像什么东西都没有-'
                />
                <Toast
                    position='top'
                    style={{backgroundColor:'rgba(0,0,0,.5)'}}
                    ref="toast"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 20 : 0,
    },
    title: {
        fontSize: 18,
        height: 84,
        textAlign: 'center'
    }
});

export default List
