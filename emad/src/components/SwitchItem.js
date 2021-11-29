import React, {useState} from "react";
import { TouchableOpacity, StyleSheet, Text, Switch,View } from "react-native";
import Divider from "./Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../theme/ThemeProvider";


const SwitchItem = (props) => {

    const {colors, isDark} = useTheme();
    

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{width: "75%",height: 48, alignSelf: "center",justifyContent:'center' }}>
            <View style={{ flexDirection: 'row',height:'100%',justifyContent: 'space-between',alignItems:'center' }}>
                    <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium" }}>{props.title}</Text>
                    <Switch trackColor={{ false: "#767577", true: "#66d871" }} 
                    thumbColor={props.value ? "#f4f3f4" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={props.onValueChange} value={props.value}/>
                </View>
                <Divider width={"100%"} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    
  });

export default SwitchItem;