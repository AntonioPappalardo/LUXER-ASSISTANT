import React from "react";
import { Image, View, Text, Dimensions } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import { ShadowBox } from 'react-native-neomorph-shadows';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Payment = ({ navigation }) => {

    const { colors, isDark } = useTheme();


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
                <BackButton onPress={() => { navigation.goBack() }} />
                
                    {isDark ? 
                <Image source={require("../../../assets/img/card_light.png")} style={{marginTop: '10%', width: width,maxWidth: 400}} resizeMode="contain"/>
                    :
                <Image source={require("../../../assets/img/card_dark.png")} style={{marginTop: '10%', width: width, maxWidth: 400}} resizeMode="contain"/>

                    }
                
                <ShadowBox
                    inner
                    useSvg
                    style={{
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: .6,
                        shadowColor: "#000",
                        shadowRadius: 5,
        
                        backgroundColor: colors.payment.backgroundColor,
                        width: width+5,
                        height: 350,
                    }}>
                        <Text  style={{fontFamily: "SFProDisplayBold", fontSize: 15, color: colors.theme.title, marginTop: '10%', alignSelf: 'center'}}>Avvicina il dispositivo abilitato</Text>
                    {isDark ?
                        <Image source={require("../../../assets/img/nfc_light.png")} style={{ marginTop: '5%', width: width, maxWidth: 100, alignSelf: 'center'}} resizeMode="contain" />
                        :
                        <Image source={require("../../../assets/img/nfc_dark.png")} style={{ marginTop: '5%', width: width, maxWidth: 100, alignSelf: 'center'}} resizeMode="contain" />
                    }
                </ShadowBox>

            </View>
        )
    }
};

export default Payment;
