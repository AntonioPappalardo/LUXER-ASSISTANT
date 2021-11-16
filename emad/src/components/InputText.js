import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from 'react-native-paper';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Ionicons';



const InputText = (props) => {
    
    
    return (
        <View style={{ marginTop: props.params.marginTop, height: 54, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            
            {displayTextInput(props)}
        </View>
    )
}

function displayTextInput(props) {
    if (props.secure === 'true') {
        return (
            <FloatingLabelInput style={[styles.input, { fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }]}
                label={props.name}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                isPassword
                value={props.value}
                onChangeText={props.onChangeText}
                customShowPasswordComponent={<Icon name="eye-outline" size={25} color={"white"}/>}
                customHidePasswordComponent={<Icon name="eye-off-outline" size={25} color={"white"}/>}
                containerStyles={{
                    height: 55,
                    width: "90%",
                    color: "white",
                    borderBottomWidth: 1,
                    borderColor: '#e6e6e6'
                }}
                customLabelStyles={{
                    colorBlurred: '#e6e6e6',
                    colorFocused: '#d4d4d4',
                    fontSizeFocused: 12,
                }}
                inputStyles={{
                    paddingTop:15,
                    paddingLeft: 5,
                    color: '#fff',
                }}/>
        )
    } else {
        return (
            <FloatingLabelInput style={[styles.input, { fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }]}
                label={props.name}
                placeholderTextColor="white"
                value={props.value}
                onChangeText={props.onChangeText}
                underlineColorAndroid="transparent" 
                containerStyles={{
                    height: 55,
                    width: "90%",
                    color: "white",
                    borderBottomWidth: 1,
                    borderColor: '#e6e6e6'
                }}
                customLabelStyles={{
                    colorBlurred: '#e6e6e6',
                    colorFocused: '#d4d4d4',
                    fontSizeFocused: 12,
                }}
                inputStyles={{
                    paddingTop:15,
                    paddingLeft: 5,
                    color: '#fff',
                }}/>
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
        
    }
})

export default InputText;