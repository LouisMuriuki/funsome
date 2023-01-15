import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/reusables/Button";
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <View style={styles.btncontainer}>
        <Button
          text="Play"
          backgroundColor="yellow"
          borderRadius={35}
          height={40}
          alignItems="center"
          justifyContent="center"
          fontSize={24}
          borderColor="yellow"
          paddingHorizontal={70}
          marginBottom={15}
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          text="Settings"
          backgroundColor="yellow"
          borderRadius={35}
          height={40}
          alignItems="center"
          justifyContent="center"
          fontSize={24}
          borderColor="yellow"
          paddingHorizontal={70}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#A020F0",
    height:"100%",
    flexDirection:"column"
  },
  btncontainer: {
    position:"absolute",
    bottom:"20%",
    
    
  },
});
