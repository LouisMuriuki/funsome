import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Charades from '../../screens/Charades';
import Questions from '../../screens/Questions';

const Tab=createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="charedes" component={Charades} />
        <Tab.Screen name="questions" component={Questions}/>
    </Tab.Navigator>
  )
}

export default BottomNav

