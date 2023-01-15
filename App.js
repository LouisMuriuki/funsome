import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigation/main/MainStack";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStack />
    </NavigationContainer>
  );
}
