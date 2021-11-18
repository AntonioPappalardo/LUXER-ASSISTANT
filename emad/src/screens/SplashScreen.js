import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, } from "react-native";
import InputButton from "../components/InputButton";
import Divider from "../components/Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const SplashScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.screen}>
                <ImageBackground source={require('../../assets/background/splash.png')} resizeMode="cover" style={styles.image}>
                    <Image source={require("../../assets/logo/chanel.png")} style={{ position: "absolute", top: 50, alignSelf: "center", width: 142, height: 80, marginBottom: "5%" }} />
                    <Text style={{ fontSize: 30, fontFamily: 'SFProDisplayBold', width: "75%", color: 'white', alignSelf: "center", marginBottom: "5%" }}>
                        Nome{"\n"}Applicazione
                    </Text>
                    <Divider type="fixed" opacity={0.3} />
                    <InputButton
                        params={{ marginTop: "5%", marginBottom: "20%", width: "75%", fontFamily: 'SFProDisplayMedium', color: '#17181A', }} fixed name="ACCEDI"
                        onPress={() => navigation.navigate('Login')} />
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayUltraLightItalic', width: "75%", color: 'white', textAlign: "center", alignSelf: "center", marginBottom: "1%" }}>
                        Powered by
                    </Text>
                    <Image source={require("../../assets/logo/light_logo.png")} style={{ alignSelf: "center", width: 30, height: 25, marginBottom: "5%" }}
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
    tinylogo: {
        marginTop: 75,
        alignSelf: 'center',
        width: 140,
        height: 110
    },
    maintext: {
        fontSize: 30
    },
    text: {
        alignSelf: 'center',
        top: 10,
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    form: {
        padding: 20
    },
    input: {
        textAlign: "center",
        marginTop: 25,
        alignSelf: "stretch",
        marginHorizontal: 15,
        padding: 10,
        height: 55,
        width: "100%",
        borderRadius: 25,
        color: "white",
        backgroundColor: "#363A4E"
    },
    screen: {
        height: "100%",
        backgroundColor: "#1B1C22"
    },
    button: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: 55,
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 120,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#2D62ED',

    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 0,
        color: "white"

    },
    icon_user: {
        fontWeight: "bold",
        marginLeft: 30,
        position: 'absolute',
        top: "17%",
        left: 30,
        zIndex: 1
    },
    icon_password: {
        fontWeight: "bold",
        marginLeft: 30,
        position: 'absolute',
        top: "41%",
        left: 30,
        zIndex: 1
    },
    icon_arrow: {
        fontWeight: "bold",
        marginLeft: "75%",
        position: 'absolute',
        top: "100%",
        left: 30,
        zIndex: 1
    },
    icon_middle: {
        alignSelf: 'flex-end',
        height: 35,
        width: 35,
        backgroundColor: "#789AF3",
        padding: 5,
        paddingLeft: 5,
        borderRadius: 25,
        zIndex: 0
    },
    dot_button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginLeft: 'auto',
        top: 10,
        left: 15,
        marginTop: 5,
        height: 40,
        width: 40,
        borderRadius: 20
    }
});

