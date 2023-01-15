import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ data, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("playground",{category:data?.categories})}>
      <View style={styles.card}>
        <View >

        </View>

        <Text style={styles.title}>{data?.title}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: 150,
    height: 150,
    padding: 0,
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});
