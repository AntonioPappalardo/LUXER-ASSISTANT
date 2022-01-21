import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import InputButton from "../../components/InputButton";
import Divider from "../../components/Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useLanguage } from "../../localization/Localization";

const SplashScreen = ({ navigation }) => {
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
            <View style={styles.screen}>
                <StatusBar style='light'/>
                <ImageBackground source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/splash/splash.webp'}} resizeMode="cover" style={styles.image} blurRadius={0}>
                    <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/logo/prada_large.png'}} style={{ position: "absolute", top: '5%', alignSelf: "center", width: 150, height: 61}} />
                    
                    <Divider type="fixed" opacity={0.3} />
                    <InputButton
                        params={{ marginTop: "5%", marginBottom: "20%", width: "75%", fontFamily: 'SFProDisplayMedium', color: '#17181A', }} fixed name={language.accedi}
                        onPress={() => navigation.replace('Login')} />
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayUltraLightItalic', width: "75%", color: 'white', textAlign: "center", alignSelf: "center", marginBottom: "1%" }}>
                        Powered by
                    </Text>
                    <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/logo/light_logo.png'}} style={{ alignSelf: "center", width: 30, height: 25, marginBottom: "5%" }}
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

