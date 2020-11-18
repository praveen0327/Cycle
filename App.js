import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Navv from './Navv';

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './components/Home';
import Cart from './components/Cart';
import {
  Image,
  TouchableOpacity,TouchableHighlight
} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from './constants';
import { Component } from 'react';



const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();




export default function App({navigation}) {
      




  return (

    

  <NavigationContainer theme={theme}>

<Stack.Navigator
  screenOptions={{
    headerShown: false
  }} 
  initialRouteName={Cart}>


 
        <Stack.Screen
        name="Home"
        component={Home}
/>
<Stack.Screen 
  name="Cart"
  component={Cart}
/>


               

   </Stack.Navigator>
    </NavigationContainer> 




  
  );
}





const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
