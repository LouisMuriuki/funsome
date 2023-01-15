import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
const PlayGround = ({ route }) => {
  const { category } = route?.params;
  console.log(category);
  const getRandomText = () => {
    return category[Math.floor(Math.random() * category?.length)];
  };
  const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  const [randomtext, setRandomText] = useState(getRandomText());
  const [randomcolor, setRandomColor] = useState(getRandomColor());

  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        console.log(seconds);
        setSeconds((prev) => prev - 1);
      } else if (seconds === 0) {
        setSeconds(30);
        getRandomColor();
        getRandomText();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const randomText = getRandomText();
    const randomColor = getRandomColor();
    console.log(randomColor);
    const interval = setInterval(() => {
      setRandomText(randomText);
      setRandomColor(randomColor);
      setSeconds(30);
    }, 30000);

    return () => clearInterval(interval);
  }, [randomtext]);

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    }
    changeScreenOrientation();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: `#${randomcolor}` }]}>
      <Text style={styles.seconds}>{seconds}</Text>
      <Text style={styles.text}>{randomtext}</Text>
    </View>
  );
};

export default PlayGround;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 70,
  },
  seconds: {
    color: "#fff",
    fontSize: 30,
    position: "absolute",
    top: 40,
  },
});
