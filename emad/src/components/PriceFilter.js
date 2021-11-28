import React from 'react';
import { View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();

const PriceFilter = (props) => {
    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
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
                    placeholderTextColor={colorTheme.floatingInput.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType = 'numeric'
                    containerStyles={{
                        height: 28,
                        borderBottomWidth: 1,
                        borderColor: colorTheme.floatingInput.border,
                    }}
                    customLabelStyles={{
                        fontFamily: 'SFProDisplayMedium',
                        colorBlurred: colorTheme.floatingInput.placeholder,
                        colorFocused: colorTheme.floatingInput.placeholder,
                        fontSizeFocused: 8,
                    }}
                    inputStyles={{
                        paddingLeft: 25,
                        fontSize: 12,
                        fontFamily: 'SFProDisplayMedium',
                        color: colorTheme.floatingInput.label,
                    }} 
                    />
                </View>

        )
    }
}
export default PriceFilter;