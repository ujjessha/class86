
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedScreen from '../screens/feed';
import CreateStory from '../screens/createStory';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {RFValue} from "react-native-responsive-fontsize";

import Ionicons from "react-native-vector-icons/Ionicons";
const Tab=createMaterialBottomTabNavigator()
const BottomTabNavigator=()=>{
    return (
    
          <Tab.Navigator labeled={false} barStyle={styles.bottomTabStyle} screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
             var iconName
              if(route.name==="Feed"){
                iconName=focused ? "book":"book-outline"
              }else if(route.name==="CreateStory"){
                iconName=focused ? "create":"create-outline"
              }
              return <Ionicons style={styles.icons} name={iconName} size={size} color={color}/>
            }
          })}
          activeColor={"tomato"}
          inactiveColor={"gray"}
          >
            <Tab.Screen name="Feed" component={FeedScreen}/>
            <Tab.Screen name="CreateStory" component={CreateStory}/>
    
          </Tab.Navigator>
       
      );
}
export default BottomTabNavigator
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(50),
    height: RFValue(50)
  }
});
