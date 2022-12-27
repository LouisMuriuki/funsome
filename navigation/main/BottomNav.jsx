import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharadesStack from '../CharadesStack';
import QuestionsStack from '../QuestionsStack';

const Tab=createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator >
        <Tab.Screen name="Charades" component={CharadesStack}/>
        <Tab.Screen name="Questions" component={QuestionsStack}/>
    </Tab.Navigator>
  )
}

export default BottomNav

