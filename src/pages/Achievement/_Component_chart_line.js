import React from 'react'
import {View, Dimensions, Text, ScrollView} from 'react-native'
import {
    LineChart
} from '../../component/react-native-chart-kit'
import 'babel-polyfill'

export default class App extends React.Component {
    render() {
        const {title,sale_data,chartConfig,title_color,legend} = this.props;
        const width = Dimensions.get('window').width - 20;
        const height = Dimensions.get('window').width - 20;

        const labelStyle = {
            color: title_color,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '700'
        };
        const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
        };
        return(
            <View style={{padding:10}}>
                <Text style={labelStyle}>{title}</Text>
                {legend &&
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        {
                            legend.map(({color,title,id}) => <View key={id}  style={{heith:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <View style={{marginHorizontal: 10,height: 10,width: 10,borderRadius: 5,backgroundColor:color}}>
                                </View>
                                <Text style={{fontSize: 14,color: '#a4b0be'}}>
                                    {title}
                                </Text>
                            </View> )
                        }
                    </View>
                }
                <LineChart
                    data={sale_data}
                    width={width}
                    height={height}
                    key={Math.random()}
                    withHorizontalLabels={false}
                    chartConfig={chartConfig}
                    paddingRight={0}
                    style={graphStyle}
                />
            </View>
        )
    }
}
