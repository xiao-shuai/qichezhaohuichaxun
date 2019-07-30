import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
import Car from '../car/Car'

 const ROUTE_=createStackNavigator({
    Car:{
        screen:Car,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
 
    //   Zhiyin:{
    //     screen:Zhiyin, 
    //     navigationOptions:()=>({
    //         title:'北京政务服务平台',
    //         headerBackTitle:null,
    //         // header:null
    //     })
    //   },
 
  
 })   
 export default createAppContainer(ROUTE_)
