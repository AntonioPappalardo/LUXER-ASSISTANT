import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import Icon from 'react-native-vector-icons/Ionicons'
import Divider from "./Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();

const MenuItem = (props) => {

    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    if (props.type === 'fixed') {
        colorTheme.backbutton.color = 'white';
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
            <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{ width: "75%", height: 48, alignSelf: "center" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colorTheme.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>{props.title}</Text>
                    <Icon name="chevron-forward-outline" size={20} color={colorTheme.theme.primary} style={{ alignSelf: 'flex-end', paddingBottom: 12}} />
                </View>
                <Divider width={"100%"} />
            </TouchableOpacity>
        )
    }
};

export default MenuItem;