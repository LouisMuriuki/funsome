import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Questions from '../screens/Questions';
const Stack = createStackNavigator();
const QuestionsStack = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
<Stack.Screen name="charedes" component={Questions}/>
  </Stack.Navigator>
  )
}

export default QuestionsStack

const styles = StyleSheet.create({})