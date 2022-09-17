import { ImageBackground, StyleSheet, Text, View } from "react-native"
import ButtonCustom from "./buttoncustom";

export default function Screen1C() {
    return <ImageBackground style={styles.main} source={require("../assets/background.png")}>
        <View style={styles.header}>
            <Text style={styles.title}>CODE</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.text1}>VERIFICATION</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.text2}>Enter ontime password sent on ++849092605798</Text>
        </View>
        <View style={styles.listBox}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
        <View style={styles.button}>
            <ButtonCustom title={"VERIFY CODE"}/>
        </View>
    </ImageBackground>;
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 16
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    }, 
    section: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 60,
        fontWeight: "bold"
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold"
    },
    text2: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
        
    },
    listBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: 50,
        height: 50,
        borderWidth: 1,
        marginLeft: -1
    },
    button: {
        flex: 1
    }
});