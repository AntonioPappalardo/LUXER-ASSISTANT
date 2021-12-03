import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, NativeModules } from "react-native";
import InputButton from "../../components/InputButton";
import Divider from "../../components/Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.screen}>
                <StatusBar style='light'/>
                <ImageBackground source={require('../../../assets/background/splash.png')} resizeMode="cover" style={styles.image} blurRadius={0}>
                    <Image source={require("../../../assets/logo/chanel_large.png")} style={{ position: "absolute", top: '7.5%', alignSelf: "center", width: 150, height: 96}} />
                    <Text style={{ fontSize: 30, fontFamily: 'SFProDisplayBold', width: "75%", color: 'white', alignSelf: "center", marginBottom: "5%" }}>
                        Luxer{"\n"}Assistant
                    </Text>
                    <Divider type="fixed" opacity={0.3} />
                    <InputButton
                        params={{ marginTop: "5%", marginBottom: "20%", width: "75%", fontFamily: 'SFProDisplayMedium', color: '#17181A', }} fixed name="ACCEDI"
                        onPress={() => navigation.navigate('Login')} />
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayUltraLightItalic', width: "75%", color: 'white', textAlign: "center", alignSelf: "center", marginBottom: "1%" }}>
                        Powered by
                    </Text>
                    <Image source={require("../../../assets/logo/light_logo.png")} style={{ alignSelf: "center", width: 30, height: 25, marginBottom: "5%" }}
                    />
                </ImageBackground>
            </View>
        )
    }
};
export default SplashScreen;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "flex-end"
    },
    screen: {
        height: "100%",
        backgroundColor: "#1B1C22"
    }
});

