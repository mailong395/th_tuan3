import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from "react-native";
import ButtonCustom from "./buttoncustom";

export default function Screen1B() {
  return <ImageBackground style={styles.main} source={require("../assets/background.png")}>
    <View style={styles.logo}>
      <Image source={require("../assets/Lock.png")} />
    </View>
    <View style={styles.flexCenter1}>
      <Text style={styles.textTitle}>FORGET</Text>
      <Text style={styles.textTitle}>PASSWORD</Text>
    </View>
    <View style={styles.flexCenter1}>
      <Text style={styles.textContent}>Provide your account’s email for which you want to reset your password</Text>
    </View>
    <View style={styles.flexCenter1}>
      <View style={styles.input}>
        <Image style={styles.iconInput} source={require('../assets/email.png')} />
        <TextInput style={styles.inputText} placeholder="Email" />
      </View>
    </View>
    <View style={styles.button}>
      <ButtonCustom title={"Next"}/>
    </View>
  </ImageBackground>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 28
  },
  logo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  flexCenter1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold"
  },
  textContent: {
    textAlign: "center",
    fontSize: 15
  },
  iconInput: {
    width: 48,
    height: 45
  },
  input: {
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
    width: 305
  },
  inputText: {
    width: 260,
    padding: 10
  },
  button: {
    flex: 1,
  }
});
