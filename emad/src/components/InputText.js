import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const InputText = (props) => {
    return (
        <View style={{ marginTop: props.params.marginTop, height: 54, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            <View style={{ position: "absolute", zIndex: 1, left: '10%', bottom: -10, }}>
                <Icon name={props.icon} size={25} color={"white"} style={{ transform: [{ rotateZ: props.rotation }], }} />
            </View>
            {displayTextInput(props)}
        </View>
    )
}
function displayTextInput(props) {
    console.log(props);
    if (props.secure === 'true') {
        return (
            <TextInput style={styles.input}
                placeholder={props.name}
                placeholderTextColor="white"
                value={props.value}
                onChangeText={props.onChangeText}
                underlineColorAndroid="transparent"
            />
        )
    } else {
        return (
            <TextInput style={styles.input}
                placeholder={props.name}
                placeholderTextColor="white"
                value={props.value}
                onChangeText={props.onChangeText}
                underlineColorAndroid="transparent" />
        )
    }
}
function clearText() {
    TextInput.clear();
    console.log('is this being reached???')
}
const styles = StyleSheet.create({
    passwordContainer: {
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        height: 54,
    },
    inputStyle: {
        flex: 1,
    },
    input: {
        flex: 1,
        textAlign: "center",
        marginTop: 25,
        alignSelf: "stretch",
        marginHorizontal: 15,
        padding: 10,
        height: 55,
        width: "90%",
        borderRadius: 25,
        color: "white",
        backgroundColor: "#363A4E"
    }
});
export default InputText;