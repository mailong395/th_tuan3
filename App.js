import {
  StyleSheet,
  View
} from "react-native";
import Screen1A from "./componets/1_a";
import Screen1B from "./componets/1_b";
import Screen1C from "./componets/1_c";
import Screen1D from "./componets/1_d";
import Screen1E from "./componets/1_e";


export default function App() {
  return <View style={styles.container}>
    {/* <Screen1A /> */}
    {/* <Screen1B /> */}
    {/* <Screen1C /> */}
    {/* <Screen1D /> */}
    <Screen1E />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
