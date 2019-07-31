import React from 'react'
import {View, Text, Dimensions, Image} from 'react-native'

const {width} = Dimensions.get('window');
const Products = ({products}) =>
    <View style={{width, flex: 1, backgroundColor: '#fff', paddingVertical: 5, marginTop: 10, paddingBottom: 15}}>
        {products && products.length ? products.map((product, index, list) =>
            <View key={product.prod_id}
                  style={[{width, paddingLeft: 15, paddingRight: 5}, (index + 1) !== list.length && {
                      width,
                      paddingLeft: 15,
                      paddingRight: 5
                  }]}>
                <Item title={product.prod_name} icon={1} border={1} normal={1}/>
                <Item title="产品品牌" value={product.brand_name_en} border={1}/>
                <Item title="产品型号" value={product.prod_model} border={1}/>
                <View style={{width: (width - 25),borderStyle:'dashed', borderBottomWidth: 1, borderColor: '#f2f2f2'}}>
                    <Item title="售后问题" border={0}/>
                    <SubTitle title='售后问题:'/>
                    <Text style={{color: '#333', fontSize: 14, width: (width - 30),}}> {product.service_content} </Text>
                    <SubTitle title='售后图片:'/>
                    <View style={{flexDirection: 'row', flex: 1, width: (width - 20), flexWrap: 'wrap'}}>
                        {
                            product.prod_pic.length ? product.prod_pic.map((item, index) =>
                                <Image key={index}
                                       style={{width: 75, height: 50, marginBottom: 10, marginRight: 10}}
                                       source={{uri: `${item}@50h_75w_1e_1c`}}/>
                            ) : null
                        }
                    </View>
                </View>
                <View>
                    <Item title="处理结果" border={0}/>
                    <Item title="责  任  人:" value={product.process_result.service_duty} border={0}/>
                    <Item title="处理方式:" value={product.process_result.service_deal} border={0}/>
                    <Item title="备        注:" value={product.process_result.remark} border={0} top={1}/>
                </View>
            </View>
        ) : <View>
            <Text>
                产品信息为空
            </Text>
        </View>}
    </View>;

const Item = ({title, value, border, icon, normal,top}) =>
    <View style={[
        {minHeight: 44, width: (width - 30), flexDirection: 'row'},
        border ? {borderStyle:'dashed', borderBottomWidth: 1, borderColor: '#f2f2f2'} : null,
        !top ? {alignItems: 'center'} : null
        ]}>
        {
            icon ? <Image style={{height: 16, width: 16}} source={require('../../assets/images/report/icon.png')}/> : null
        }

        <Text style={[{color: '#999',fontSize: 14, marginRight: 10,justifyContent:'space-between',textAlign:'justify'},
            !normal?
            {width: 60, marginRight:20}: null]}>
            {title.replace(/[\r\n]/g, "")}
        </Text>
        {
            value? <Text style={{color: '#333', width:(width - 110), fontSize: 14, textAlign: 'auto'}}>
                {value.replace(/[\r\n]/g, "")}
            </Text> : null
        }
    </View>;
const SubTitle = ({title}) =>
    <View style={{width, height: 32, justifyContent: 'center'}}>
        <Text style={{color: '#999999', fontSize: 12}}>
            {title.replace(/[\r\n]/g, "")}
        </Text>
    </View>;


export default Products