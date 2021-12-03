import React from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackButton from "../components/BackButton";
import Divider from "../components/Divider";
import InputText from "../components/InputText";
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const appointmentList = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading / > ;
    } else {
        return ( <
            View style = {
                { backgroundColor: colors.theme.background, flex: 1 } } >
            <
            BackButton onPress = {
                () => { navigation.goBack() } }
            /> <
            ScrollView style = {
                { marginBottom: tabBarHeight, marginTop: "5%" } } >
            <
            SwitchItem value = { isDark }
            onValueChange = { toggleScheme }
            title = { 'Tema Scuro' }
            /> <
            MenuItem title = { 'Info su Luxer Assistant' }
            onPress = {
                () => navigation.navigate('AddUser') }
            /> <
            MenuItem title = { 'Note sulla versione' }
            onPress = {
                () => navigation.navigate('Catalogo') }
            />

            <
            /ScrollView> <
            /View>
        )
    }

}

export default appointmentList;