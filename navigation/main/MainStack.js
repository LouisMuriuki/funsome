import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from './DrawerNavigation';
import HomeStack from '../HomeStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={DrawerNavigation}/>
        <Stack.Screen name="Home" component={HomeStack}/>
    </Stack.Navigator>
    
  )
}

export default MainStack

const styles = StyleSheet.create({})