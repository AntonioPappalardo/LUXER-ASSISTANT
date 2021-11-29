import React, {useState} from "react";
import { TouchableOpacity, StyleSheet, Text, Switch,View } from "react-native";
import { Appearance } from 'react-native';
import dark from '../theme/dark';
import light from '../theme/light';
import Icon from 'react-native-vector-icons/Ionicons'
import Divider from "./Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();

const SwitchItem = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    if (props.type === 'fixed') {
        colorTheme.backbutton.color = 'white';
    }

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{ width: "75%", height: 48, alignSelf: "center", marginBottom:13, marginTop:-1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:10}}>
                    <Text style={{ color: colorTheme.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 15 }}>{props.title}</Text>
                    <Switch style={styles.switch} trackColor={{ false: "#767577", true: "#66d871" }} thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
                </View>
                <Divider width={"100%"} />
                </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    switch: {
        zIndex:0,
        marginTop:-10
    }
  });

export default SwitchItem;