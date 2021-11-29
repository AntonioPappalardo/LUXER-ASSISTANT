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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colorTheme.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>{props.title}</Text>
                    <Switch style={styles.switch} trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
                </View>
        )
    }
};

const styles = StyleSheet.create({
    switch: {
      flex:1,
      marginRight:20
    }
  });

export default SwitchItem;