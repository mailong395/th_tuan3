import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Screen1D() {
    return <View style={styles.main}>
        <View style={styles.title}>
            <Text style={styles.textTitle}>REGISTER</Text>
        </View>
        <View style={styles.input}>
            <View style={styles.inputText}>
                <TextInput style={styles.editText} placeholder="Name"/>
            </View>
            <View style={styles.inputText}>
                <TextInput style={styles.editText}  placeholder="Phone"/>
            </View>
            <View style={styles.inputText}>
                <TextInput style={styles.editText}  placeholder="Email"/>
            </View>
            <View style={styles.inputpass}>
                <TextInput style={styles.editTextPass} placeholder="Password"/>
                <Image style={styles.imgeEye} source={require('../assets/eye.png')}/>
            </View>
            <View style={styles.inputText}>
                <TextInput style={styles.editText}  placeholder="Birthday"/>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(49, 170, 82, 0.19)",
        padding: 14
    },
    title: {
        flex: 1,
        justifyContent:"center"
    },
    textTitle: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        flex: 1,
    },
    inputText: {
        backgroundColor: "rgba(196, 196, 196, 0.3)",
        marginTop: 10
    },
    editText: {
        padding: 10,
    },
    editTextPass: {
        padding: 10,
        width: "80%"
    },
    inputpass: {
        flexDirection: "row",
        backgroundColor: "rgba(196, 196, 196, 0.3)",
        marginTop: 10,
        alignItems: "center"
    },
    imgeEye: {
        resizeMode: 'stretch', 
        width: 38, 
        height: 36,
        marginLeft: 10
    },
});