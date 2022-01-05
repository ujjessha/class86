import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer"
import BottomTabNavigator from './tabNavigator';
import Profile from '../screens/profile';
const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator}/>
         <Drawer.Screen name="Profile" component={Profile}/>
       
    </Drawer.Navigator>
)
}
export default DrawerNavigator