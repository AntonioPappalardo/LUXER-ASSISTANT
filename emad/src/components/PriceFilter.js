import React from 'react';
import { View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const PriceFilter = (props) => {

    const {colors, isDark} = useTheme();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
                <View style={{ width: props.params.width, marginTop: props.params.marginTop, height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <FloatingLabelInput style={{ fontSize: props.params.fontSize, textAlign: props.params.textAlign, paddingLeft: props.params.paddingLeft }}
                    label={props.name}
                    placeholderTextColor={colors.floatingInput.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType = 'numeric'
                    containerStyles={{
                        height: 28,
                        borderBottomWidth: 1,
                        borderColor: colors.floatingInput.border,
                    }}
                    customLabelStyles={{
                        fontFamily: 'SFProDisplayMedium',
                        colorBlurred: colors.floatingInput.placeholder,
                        colorFocused: colors.floatingInput.placeholder,
                        fontSizeFocused: 8,
                    }}
                    inputStyles={{
                        paddingLeft: 25,
                        fontSize: 12,
                        fontFamily: 'SFProDisplayMedium',
                        color: colors.floatingInput.label,
                    }} 
                    />
                </View>

        )
    }
}
export default PriceFilter;