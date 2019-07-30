import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
import Car from '../car/Car'
import Zhao from '../car/Zhao'
import Result from '../car/Result'
 const ROUTE_=createStackNavigator({
    Car:{
        screen:Car,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      Zhao:{
        screen:Zhao,
        navigationOptions:()=>({
            // header:null,
            headerBackTitle:null,
            title:'汽车召回小知识'
        })
      },
      Result:{
        screen:Result,
        navigationOptions:()=>({
           
            headerBackTitle:null,
            title:'召回查询结果'
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
