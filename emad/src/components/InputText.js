import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from 'react-native-paper';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../theme/ThemeProvider";

const InputText = (props) => {
    const { colors, isDark } = useTheme();

    return (
        <View style={{ width: props.params.width, marginTop: props.params.marginTop, height: 54, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            {displayTextInput(props, colors)}
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
                    customShowPasswordComponent={<Icon name={Platform.OS === "ios" ? "ios-eye-outline" : "md-eye-outline"} size={20} color={colorTheme.floatingInput.icon} />}
                    customHidePasswordComponent={<Icon name={Platform.OS === "ios" ? "ios-eye-off-outline" : "md-eye-off-outline"} size={20} color={colorTheme.floatingInput.icon} />}
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
        } else if (props.icon) {
            if (props.left) {
                if (props.numeric) {
                    return (
                        <FloatingLabelInput style={{ fontSize: props.params.fontSize, paddingLeft: props.params.paddingLeft }}
                            label={props.name}
                            placeholderTextColor={colorTheme.floatingInput.placeholder}
                            value={props.value}
                            onChangeText={props.onChangeText}
                            keyboardType='numeric'
                            leftComponent={<Icon name={Platform.OS === "ios" ? "ios-" + props.icon : "md-" + props.icon} size={20} style={{ marginTop: 5 }} color={colorTheme.floatingInput.icon} />}
                            rightComponent={props.right}
                            containerStyles={{
                                height: 50,
                                borderBottomWidth: 1,
                                borderColor: colorTheme.floatingInput.border,
                            }}
                            customLabelStyles={{
                                fontFamily: 'SFProDisplayMedium',
                                colorBlurred: colorTheme.floatingInput.placeholder,
                                colorFocused: colorTheme.floatingInput.placeholder,
                                fontSizeFocused: 12,
                            }}
                            labelStyles={{
                                paddingLeft: 5,
                            }}
                            inputStyles={{
                                textAlign: props.params.textAlign,
                                fontSize: 18,
                                fontFamily: 'SFProDisplayMedium',
                                paddingTop: 15,
                                paddingLeft: 10,
                                color: colorTheme.floatingInput.label,
                            }} />
                    )
                }
                return (
                    <FloatingLabelInput style={{ fontSize: props.params.fontSize, paddingLeft: props.params.paddingLeft }}
                        label={props.name}
                        placeholderTextColor={colorTheme.floatingInput.placeholder}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        leftComponent={<Icon name={Platform.OS === "ios" ? "ios-" + props.icon : "md-" + props.icon} size={20} style={{ marginTop: 5 }} color={colorTheme.floatingInput.icon} />}
                        rightComponent={props.right}
                        containerStyles={{
                            height: 50,
                            borderBottomWidth: 1,
                            borderColor: colorTheme.floatingInput.border,
                        }}
                        customLabelStyles={{
                            fontFamily: 'SFProDisplayMedium',
                            colorBlurred: colorTheme.floatingInput.placeholder,
                            colorFocused: colorTheme.floatingInput.placeholder,
                            fontSizeFocused: 12,
                        }}
                        labelStyles={{
                            paddingLeft: 5,
                        }}
                        inputStyles={{
                            textAlign: props.params.textAlign,
                            fontSize: 18,
                            fontFamily: 'SFProDisplayMedium',
                            paddingTop: 15,
                            paddingLeft: 10,
                            color: colorTheme.floatingInput.label,
                        }} />
                )
            } else {
                if (props.numeric) {
                    return (
                        <FloatingLabelInput style={{ fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                            label={props.name}
                            placeholderTextColor={colorTheme.floatingInput.placeholder}
                            value={props.value}
                            onChangeText={props.onChangeText}
                            keyboardType='numeric'
                            rightComponent={<Icon name={Platform.OS === "ios" ? "ios-" + props.icon : "md-" + props.icon} size={20} style={{ marginTop: 10 }} color={colorTheme.floatingInput.icon} />}
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
                return (
                    <FloatingLabelInput style={{ fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                        label={props.name}
                        placeholderTextColor={colorTheme.floatingInput.placeholder}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        rightComponent={<Icon name={Platform.OS === "ios" ? "ios-" + props.icon : "md-" + props.icon} size={20} style={{ marginTop: 10 }} color={colorTheme.floatingInput.icon} />}
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
        } else if (props.numeric) {
            return(
                <FloatingLabelInput style={{ fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                label={props.name}
                placeholderTextColor={colorTheme.floatingInput.placeholder}
                value={props.value}
                keyboardType='numeric'
                onChangeText={props.onChangeText}
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
                }}
            />
            )
        } else {
            return (
                <FloatingLabelInput style={{ fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                    label={props.name}
                    placeholderTextColor={colorTheme.floatingInput.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
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
                    }}
                />
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