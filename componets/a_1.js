import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function ScreenA1() {
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
        <AppButton title="Login" />
        <AppButton title="Sign Up" />
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  appButtonContainer: {
    backgroundColor: "#E3C000",
    width: 125,
    height: 45,
    justifyContent: "center",
    alignContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  textFooter: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
});
