import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from "react-native";
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

const Notes = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();
    const [language, setLanguage] = useLanguage();
    const tabBarHeight = useBottomTabBarHeight();

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
                    <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{language.note}</Text>
                </View>
            </View>
            <ScrollView overScrollMode="never" style={{ marginBottom: tabBarHeight, marginTop: "20%", marginLeft:25, marginRight:25}}>
            <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 16, textAlign: 'justify', color: colors.theme.subtitle }}>
                {language.infoContent }               
            </Text>
            {isDark ? 
            <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/logo/light_logo.png'}} style={{ width: 80, height: 70, alignSelf: 'center', marginBottom:25 }} />
            :
            <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/logo/dark_logo.png'}} style={{ width: 80, height: 70, alignSelf: 'center', marginBottom:25 }} />

            }
            <Text style={{ fontFamily: "SFProDisplayMedium", fontWeight:'bold',fontSize: 20, textAlign: 'center', color: colors.theme.title }}>
            Luxer Assistant
            </Text>
            
            <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 14, textAlign: 'center', color: colors.theme.subtitle }}>
            {language.versione} 1.0.0
            </Text>

            <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 14, textAlign: 'center', color: colors.theme.subtitle }}>
            © Copyright 2021-2022
            </Text>

            </ScrollView>
            </View>
                )
            }
};

export default Notes;