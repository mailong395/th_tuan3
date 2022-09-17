import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import ButtonCustom from "./buttoncustom";

export default function Screen1A() {
  return (
    <ImageBackground
      style={styles.main}
      source={require("../assets/background.png")}
    >
      <View style={styles.header}>
        <Image source={require("../assets/circle.png")}></Image>
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>GROW</Text>
        <Text style={styles.textTitle}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.listButton}>
        <View style={styles.button}>
            <ButtonCustom title={"Login"}/>
        </View>
        <View style={styles.button}>
            <ButtonCustom title={"Sign Up"}/>
        </View>
        
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>HOW WE WORK?</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 8,
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  listButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 30
  },
  footer: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  textFooter: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
