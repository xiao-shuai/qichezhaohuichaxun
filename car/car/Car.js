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
// import Swiper from 'react-native-swiper'
import {Button,Input,Overlay} from 'react-native-elements'
// import MapView from 'react-native-maps'
import { NavigationActions } from 'react-navigation';
import {Toast} from '@ant-design/react-native'
// import console = require('console');
class Car extends Component{
   constructor(props){
       super(props)
       this.state={
         yl_show:false
       }
   }

 search_info=()=>{
     console.log('vin',this.state.vin)
    //  Toast.loading('232')
   if(this.state.vin==undefined||this.state.vin==''){
     Alert.alert('车架号码不能为空','',[{'text':'知道了',onPress:()=>{}}])
   }else{
       this.props.navigation.navigate('Result')
   }
 }  
   render(){
       return(
       <SafeAreaView style={{flex:1,}}>
           <View style={styles.wa_view}>

           
         <Image source={require('../images/banner.png')} style={{
             width:'100%',
             height:qq.q_h*.25,
         }} 
         resizeMode='stretch'
         />
         <View style={styles.under}>
          <View style={styles.to}>
          <Text style={{fontSize:18,fontWeight:'500'}}>车辆识别代号</Text>
          <TouchableOpacity onPress={()=>{
              this.setState({yl_show:true})
          }}>
              <Text style={{color:qq.q_color}}>车架号示例图</Text>
          </TouchableOpacity>
          </View>

          <Input clearButtonMode={'always'} containerStyle={{marginTop:20}} 
             placeholder='请输入17位的车架号码(VIN码)'

             onChangeText={(vin)=>{
                 console.log(vin)
                this.setState({vin})
             }}
          />
          <Button title='立即查询' buttonStyle={{marginTop:20,backgroundColor:qq.q_color}} 
            onPress={()=>{
                Toast.success('Load success !!!', 1);
                Toast.fail('Load failed !!!');
              this.search_info()
            }}
          />
          <View style={{width:'100%',
          alignItems:'center',marginTop:20,
           justifyContent:'center',
          }}>
          <Text style={{color:'#E67E22'}}>目前可查询2014年以后(含2014年)的车辆召回信息</Text>
          </View>

          <TouchableOpacity style={styles.zhao} onPress={()=>{
              this.props.navigation.navigate('Zhao')
          }}>
              <Text style={{fontSize:16,color:qq.q_color}}>汽车召回小知识>></Text>
          </TouchableOpacity>

         </View>
         
         </View>
         <Overlay isVisible={this.state.yl_show} overlayStyle={{padding:10,height:qq.q_h*.35}} >
         <View>
             <View style={{width:'100%',alignItems:'center',padding:10,}}>
                 <Text>示例图片</Text>
             </View>
             <Image source={require('../images/yl.png')} style={{
                 width:'100%',height:qq.q_h*.2
             }} resizeMode='stretch'/>
             <Button title='我知道了' onPress={()=>{
                 this.setState({yl_show:false})
             }} buttonStyle={{marginTop:20,backgroundColor:qq.q_color}}/>
        </View>  
         </Overlay>
       </SafeAreaView>
       )
   }
}
export default Car
const styles=StyleSheet.create({
    zhao:{
        width:'100%',alignItems:'center',justifyContent:'center',
        padding:20
    },
      wa_view:{
        backgroundColor:qq.q_bg,flex:1,width:'100%',alignItems:'center'
      }  ,
      under:{
        width:qq.q_w*.94,padding:10,backgroundColor:'white',borderRadius:8,
        marginTop:-qq.q_h*.05
      },
      to:{
        flexDirection:'row',justifyContent:'space-between',alignItems:'center'
      }
})