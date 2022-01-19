import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons'
import Divider from "./Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const MenuItem = (props) => {

    const {colors, isDark} = useTheme();

    if (props.type === 'fixed') {
        colors.backbutton.color = 'white';
    }

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        if(props.rightText) {
            return (
                <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{ width: "75%",height: 48, alignSelf: "center",justifyContent:'center' }}>
                    <View style={{ flexDirection: 'row',height:'100%', paddingTop: 12}}>
                        <View style={{ height: '100%', width: '75%', justifyContent: 'space-between' }}>
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium" }}>{props.title}</Text>
                        </View>
                        <View style={{ height: '100%', width: '25%', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 5 }}>
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium" }}>{props.rightText}</Text>
                        </View>
                    </View>
                    <Divider width={"100%"} />
                </TouchableOpacity>
            )
        }else {
            return (
                <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{ width: "75%",height: 48, alignSelf: "center",justifyContent:'center' }}>
                    <View style={{ flexDirection: 'row',height:'100%',justifyContent: 'space-between',alignItems:'center' }}>
                        <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium" }}>{props.title}</Text>
                        <Icon name="chevron-forward-outline" size={20} color={colors.theme.primary} style={{ alignSelf: 'flex-end', marginBottom: 12}} />
                    </View>
                    <Divider width={"100%"} />
                </TouchableOpacity>
            )
        }
    }
};

export default MenuItem;