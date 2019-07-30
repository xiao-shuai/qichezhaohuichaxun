import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert,Linking
} from 'react-native'
import {qq} from '../global/ju'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,Input,Overlay} from 'react-native-elements'
import { Accordion, List } from '@ant-design/react-native';



class Zhao extends Component {
    constructor(props){
      super(props)
      this.state={

      }
    }

    state = {
        activeSections: [],
      };
      onChange = (activeSections) => {
          
        this.setState({ activeSections });
      };
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
  <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}
        >
          <Accordion.Panel  header={
          <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
              <View style={{backgroundColor:qq.q_color,padding:5}}>
                  <Text style={{fontWeight:'500',color:'white'}}>01</Text>
              </View>
              <Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>什么是汽车召回 ?</Text>
         </View>
            }>

            <View style={{padding:20,flex:1}}>
                <Text style={{color:'#616A6B',lineHeight:20}}>汽车召回就是投放市场的汽车,发现由于设计或制造方面的原因存在缺陷，不符合有关法规，标准 有可能导致安全及环保问题，厂家必须及时向国家有关部门报告改产品存在的问题，并提出召回申请 经过批准后对于在用车辆进行改造，以消除事故隐患</Text>
            </View>
          </Accordion.Panel>
          <Accordion.Panel header={
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
              <View style={{backgroundColor:qq.q_color,padding:5}}>
                  <Text style={{fontWeight:'500',color:'white'}}>02</Text>
              </View>
              <Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>汽车召回是否就是退车或换车 ?</Text>
         </View>
          }>
            <View style={{padding:20,flex:1}}>
                <Text style={{color:'#616A6B',lineHeight:20}}>汽车召回不等于退换。根据《缺陷汽车产品召回管理规定》，召回是生产者采取修补措施来消除隐患，其目的是消除产品带来的隐患，一般情况下通过修理或换件都能解决问题，很少有退车或换车的情况</Text>
            </View>
          </Accordion.Panel>
          <Accordion.Panel header={
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
              <View style={{backgroundColor:qq.q_color,padding:5}}>
                  <Text style={{fontWeight:'500',color:'white'}}>03</Text>
              </View>
              <Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>如何知道我的汽车被召回 ?</Text>
         </View>
          }>
            <View style={{padding:20,flex:1}}>
                <Text style={{color:'#616A6B',lineHeight:20}}>汽车召回都要通过官方网站或公共媒体对外发布，通常汽车厂商会通过电话，短信等方式发送相关通知，接到通知你可以就近到附近授权店沟通维修事宜，如果授权经销商拒绝对你的车辆维修，你可以直接与厂商联系沟通</Text>
            </View>
          </Accordion.Panel>

          <Accordion.Panel header={
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
              <View style={{backgroundColor:qq.q_color,padding:5}}>
                  <Text style={{fontWeight:'500',color:'white'}}>04</Text>
              </View>
              <Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>我的汽车在召回范围内该怎么办?</Text>
         </View>
          }>
            <View style={{padding:20,flex:1}}>
                <Text style={{color:'#616A6B',lineHeight:20}}>如果你的车辆再召回范围内，请不必着急 你可以先致电当地的维修站 同时预约下维修时间到维修站维修，需提醒的是 不管过程简单或复杂 消费者都应当积极配合进行维修，消除可能存在的隐患</Text>
            </View>
          </Accordion.Panel>
          <Accordion.Panel header={
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
              <View style={{backgroundColor:qq.q_color,padding:5}}>
                  <Text style={{fontWeight:'500',color:'white'}}>05</Text>
              </View>
              <Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>汽车召回是否要承担费用?</Text>
         </View>
          }>
          <View style={{padding:20,flex:1}}>
                <Text style={{color:'#616A6B',lineHeight:20}}>国家质量监督检验总局负责人明确表示，召回对消费者是免费的 汽车召回是已消除缺陷 避免造成伤害为目的，一般召回活动已更换，维修为主要特征 广大车主应积极配合每次召回 在接到通知后尽快到指定地点维修</Text>
            </View>
          </Accordion.Panel>
        </Accordion>

        
            </SafeAreaView>
        )
    }
}
export default Zhao