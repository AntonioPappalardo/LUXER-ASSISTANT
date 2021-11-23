import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from 'react-native-paper';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();


const InputText = (props) => {
    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }

    return (
        <View style={{ width: props.params.width, marginTop: props.params.marginTop, height: 54, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            {displayTextInput(props, colorTheme)}
        </View>
    )
}

function displayTextInput(props, colorTheme) {
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        if (props.secure === 'true') {
            return (
                <FloatingLabelInput style={{ textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                    label={props.name}
                    placeholderTextColor={colorTheme.floatingInput.placeholder}
                    isPassword
                    value={props.value}
                    onChangeText={props.onChangeText}
                    customShowPasswordComponent={<Icon name="eye-outline" size={20} color={colorTheme.floatingInput.label} />}
                    customHidePasswordComponent={<Icon name="eye-off-outline" size={20} color={colorTheme.floatingInput.label} />}
                    containerStyles={{
                        height: 58,
                        borderBottomWidth: 1,
                        borderColor: colorTheme.floatingInput.border,
                    }}
                    customLabelStyles={{
                        fontFamily: 'SFProDisplayMedium',
                        colorBlurred: colorTheme.floatingInput.placeholder,
                        colorFocused: colorTheme.floatingInput.placeholder,
                        fontSizeFocused: 12,
                    }}
                    inputStyles={{
                        fontSize: 18,
                        fontFamily: 'SFProDisplayMedium',
                        paddingTop: 15,
                        paddingLeft: 5,
                        color: colorTheme.floatingInput.label,
                    }} />
            )
        } else {
            return (
                <FloatingLabelInput style={{ fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                    label={props.name}
                    placeholderTextColor={colorTheme.floatingInput.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    rightComponent={<Icon name={props.icon} size={20} style={{ marginTop: 10 }} color={colorTheme.floatingInput.label} />}
                    containerStyles={{
                        height: 58,
                        borderBottomWidth: 1,
                        borderColor: colorTheme.floatingInput.border,
                    }}
                    customLabelStyles={{
                        fontFamily: 'SFProDisplayMedium',
                        colorBlurred: colorTheme.floatingInput.placeholder,
                        colorFocused: colorTheme.floatingInput.placeholder,
                        fontSizeFocused: 12,
                    }}
                    inputStyles={{
                        fontSize: 18,
                        fontFamily: 'SFProDisplayMedium',
                        paddingTop: 15,
                        paddingLeft: 5,
                        color: colorTheme.floatingInput.label,
                    }} />
            )
        }
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
    }
})

export default InputText;