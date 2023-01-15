import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from './main/BottomNav';
import PlayGround from '../screens/PlayGround';
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
  <Stack.Navigator initialRouteName='app' screenOptions={{headerShown: false}}>
    <Stack.Screen name="app" component={BottomNav} />
    <Stack.Screen name="playground" component={PlayGround} />
  </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})