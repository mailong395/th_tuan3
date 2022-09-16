import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import ScreenA1 from "./componets/a_1";

export default function App() {
  return <View style={styles.container}>
    <ScreenA1 />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
