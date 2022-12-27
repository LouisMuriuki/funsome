import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../../screens/WelcomeScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='WelcomeScreen' component={WelcomeScreen}/>
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})