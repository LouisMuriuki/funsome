import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from './DrawerNavigation';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={DrawerNavigation}/>
        <Stack.Screen name="Home" component={BottomNav}/>
    </Stack.Navigator>
    
  )
}

export default MainStack

const styles = StyleSheet.create({})