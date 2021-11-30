import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../theme/ThemeProvider";
import BackButton from "../components/BackButton";
import Container from "../components/Container";


const Catalogo = ({ navigation }) => {

    const { colors, isDark } = useTheme();

    const tabBarHeight = useBottomTabBarHeight();

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
            Text style = {
                { fontFamily: "SFProDisplayMedium", fontSize: 24, color: colors.theme.title, alignSelf: 'center', } } > Catalogo < /Text> <
            ScrollView >
            <
            Container params = {
                {} }
            image = { require('../../assets/4.jpg') }
            title = "Borse e Accessori"
            subTitle = "221 prodotti"
            onPress = {
                () => navigation.navigate('Category') }
            /> <
            Container params = {
                {} }
            image = { require('../../assets/3.jpg') }
            title = "Scarpe Uomo"
            subTitle = "221 prodotti" / >
            <
            Container params = {
                {} }
            image = { require('../../assets/2.jpg') }
            title = "Scarpe Donna"
            subTitle = "221 prodotti" / >
            <
            Container params = {
                {} }
            image = { require('../../assets/5.jpg') }
            title = "Intimo Uomo"
            subTitle = "221 prodotti" / >
            <
            Container params = {
                {} }
            image = { require('../../assets/1.jpg') }
            title = "Intimo Donna"
            subTitle = "221 prodotti" / >
            <
            View style = {
                { marginBottom: tabBarHeight + 10 } } > < /View> <
            /ScrollView> <
            /View>
        )
    }
};

const styles = StyleSheet.create({});

export default Catalogo;