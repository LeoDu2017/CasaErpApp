import React from 'react'
import {View} from 'react-native'
import {Svg, Rect, G, Text} from 'react-native-svg'
import {formatNum} from "../../../_Util";
import AbstractChart from './abstract-chart'

const barWidth = 22;

class BarChart extends AbstractChart {
    // 柱形图
    renderBars = config => {
        const {data, width, height, paddingTop, paddingRight} = config;
        const baseHeight = this.calcBaseHeight(data, height);

        return data.map((x, i) => {
            const barHeight = this.calcHeight(x, data, height);
            return (
                <Rect
                    key={Math.random()}
                    x={
                        paddingRight +
                        (i * (width - paddingRight)) / (data.length) +
                        barWidth / 2 - 5
                    }
                    y={
                        ((barHeight > 0 ? baseHeight - barHeight : baseHeight) / 4) * 3 +
                        paddingTop
                    }
                    width={barWidth}
                    height={(Math.abs(barHeight) / 4) * 3}
                    fill="url(#fillShadowGradient)"
                />
            )
        })
    };
    // 头部横线与数字
    renderBarTops = config => {
        const {data, width, height, paddingTop, paddingRight} = config;
        const baseHeight = this.calcBaseHeight(data, height);
        return data.map((x, i) => {
            const barHeight = this.calcHeight(x, data, height);
            let _x = i === 0 ? (paddingRight +
                (i * (width - paddingRight)) / data.length +
                barWidth / 2 + x.length * 4 -5) : (paddingRight +
                (i * (width - paddingRight)) / data.length +
                barWidth / 2 -5);
            if(x === 0){
                _x += (barWidth / 2)
            }
            const _y = ((baseHeight - barHeight) / 4) * 3 + paddingTop - 5;
            return (
                <View key={Math.random()}>
                    <Text
                        x={_x}
                        y={_y}
                        fontSize={14}
                        fill='#f6bc3a'
                        textAnchor="middle">
                        {formatNum(x)}
                    </Text>
                    <Rect
                        x={
                            paddingRight +
                            (i * (width - paddingRight)) / data.length +
                            barWidth / 2 - 5
                        }
                        y={((baseHeight - barHeight) / 4) * 3 + paddingTop}
                        width={barWidth}
                        height={2}
                        fill={this.props.chartConfig.color(0.6)}
                    />
                </View>
            )
        })
    };

    render() {
        const {
            width,
            height,
            data,
            paddingTop = 50,
            paddingRight = 0,
            style = {},
            withHorizontalLabels = false,
            withVerticalLabels = true,
        } = this.props;
        const {borderRadius = 0} = style;
        const config = {
            width,
            height
        };
        return (
            <View style={style}>
                <Svg height={height} width={width}>
                    {this.renderDefs({
                        ...config,
                        ...this.props.chartConfig
                    })}

                    <Rect
                        width="100%"
                        height={height}
                        rx={borderRadius}
                        ry={borderRadius}
                        fill="url(#backgroundGradient)"
                    />
                    <G>
                        {this.renderHorizontalLines({
                            ...config,
                            count: 4,
                            paddingTop
                        })}
                    </G>
                    <G>
                        {withHorizontalLabels
                            ? this.renderHorizontalLabels({
                                ...config,
                                count: 10,
                                data: data.datasets[0].data,
                                paddingTop,
                                paddingRight
                            })
                            : null}
                    </G>
                    <G>
                        {withVerticalLabels
                            ? this.renderVerticalLabels({
                                ...config,
                                labels: data.labels,
                                paddingRight,
                                paddingTop,
                                horizontalOffset: barWidth
                            })
                            : null}
                    </G>
                    <G>
                        {this.renderBars({
                            ...config,
                            data: data.datasets[0].data,
                            paddingTop,
                            paddingRight
                        })}
                    </G>
                    <G>
                        {this.renderBarTops({
                            ...config,
                            data: data.datasets[0].data,
                            paddingTop,
                            paddingRight
                        })}
                    </G>
                </Svg>
            </View>
        )
    }
}

export default BarChart
