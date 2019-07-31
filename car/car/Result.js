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
import {Icon} from '@ant-design/react-native'
class Result extends Component{
    constructor(props){
        super(props)
        this.state={
          
        }
    }
componentWillMount(){
    fetch('https://www.easy-mock.com/mock/5d40175076bc4e7ad6696209/car/getcar')
    .then(res=>res.json())
    .then(res=>{})
    .catch(err=>{
  
    })
}
    render(){
        return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,width:'100%',backgroundColor:qq.q_bg,}}>

                <View style={styles.da}>
                <Icon name='check-circle' size={qq.q_w*.15} color={qq.q_color} style={{marginTop:20}}/>
                <Text style={{fontSize:18,fontWeight:'500',marginTop:10}}>你的车辆不在召回范围内！</Text>
                </View>

                <View style={styles.da}>
                   <View style={{backgroundColor:'#F8F9F9',width:'100%',padding:10}}>
                       <Text style={{color:'#616A6B',marginTop:10}}>可能原因是:</Text>
                       <Text style={{color:'#616A6B',marginTop:10}}>1, 你的爱车不在召回范围内;</Text>
                       <Text style={{color:'#616A6B',marginTop:10}}>2, 最新发布的VIN码尚未上传，请稍后查询;</Text>
                       <Text style={{color:'#616A6B',marginTop:10}}>3, 你输入的VIN码有误，请检查重新输入;</Text>
                       <Text style={{color:'#616A6B',marginTop:10}}>4, 对于2019年以前的召回，部分厂家未备案被召回的车辆VIN码列表，对于这些召回，无法通过VIN码查询是否再召回范围内;</Text>
                   </View>
                </View>
          
            </View>
            
        </SafeAreaView>
        )
    }

}
export default Result
const styles=StyleSheet.create({
   da:{
    width:'100%',marginTop:10,backgroundColor:'white',
    alignItems:'center',padding:20
   }
})