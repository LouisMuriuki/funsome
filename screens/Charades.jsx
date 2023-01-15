import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/reusables/Card";
import CharedesData from "../charedes.json";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from "@react-navigation/native";

const Charades = ({ navigation }) => {
  const [orientationIsPortrait, setOrientation] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      if (orientationIsPortrait == true) {
        console.log("sosos");
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {CharedesData.map((data, index) => {
          return <Card key={index} navigation={navigation} data={data} />;
        })}
      </View>
    </View>
  );
};

export default Charades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
