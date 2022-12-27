import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Charades from "../screens/Charades";
const Stack = createStackNavigator();
const CharadesStack = () => {
  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="charedes" component={Charades}/>
    
  </Stack.Navigator>;
};

export default CharadesStack;

const styles = StyleSheet.create({});
