import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, Button } from "react-native";
import RadioGroup from "react-native-radio-buttons-group"
import ButtonCustom from "./buttoncustom";

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Male',
    value: 'Male',
    selected: 'true'
}, {
    id: '2',
    label: 'Female',
    value: 'Female'
}]

export default function Screen1E() {

    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    };

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
            <View style={styles.listButtonRadio}>
                <RadioGroup 
                    radioButtons={radioButtons} 
                    onPress={onPressRadioButton}
                    layout='row'
                />
            </View>
        </View>
        <View style={styles.button}>
            <Button color={'#E53935'} title="REGISTER" ></Button>
            <Text style={styles.textfooter}>When you agree to terms and conditions</Text>
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
        flex: 2,
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
    listButtonRadio: {
        margin: 10
    },
    button: {
        flex: 1
    },
    textfooter: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10
    }
});