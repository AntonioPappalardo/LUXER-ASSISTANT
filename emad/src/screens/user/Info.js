import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons';
import InputButton from "../../components/InputButton";
import InputText from "../../components/InputText";
import BackButton from "../../components/BackButton";
import { Picker } from '@react-native-picker/picker';
import { useLanguage } from "../../localization/Localization";
import { AddCostumer } from "../../back/connect";
import Divider from "../../components/Divider";

const Info = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();
    const [language, setLanguage] = useLanguage();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{language.info}</Text>
                    </View>
                </View>
                
                </View>
                )
            }
};

export default Info;