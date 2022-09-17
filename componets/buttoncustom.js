import { Text, StyleSheet, TouchableOpacity } from "react-native";


export default function ButtonCustom({title, onPress, width, height}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} width={width} height={height}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#E3C000",
    padding: 10,
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
});
