import React, { useState } from "react";
import { View, Text, Switch, Image, StyleSheet, ScrollView, Dimensions} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import BackButton from '../components/BackButton';
import MenuItem from '../components/MenuItem';
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SwitchItem from "../components/SwitchItem";


const Impostazioni = ({ navigation }) => {
    const {colors, setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
        console.log(isDark);
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const windowWidth = Dimensions.get('window').width;
    const tabBarHeight = useBottomTabBarHeight();
    
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
        <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
            <BackButton onPress={() => { navigation.goBack() }}/>
            <ScrollView style={{marginBottom: tabBarHeight, marginTop: 50}}>
            <SwitchItem value={isDark} onValueChange={toggleScheme} title={'Tema Scuro'}/>
            <SwitchItem title={'Altro Switch'}/>
            <MenuItem title={'Info su Luxer Assistant'} onPress={() => navigation.navigate('AddUser')} />
            <MenuItem title={'Note sulla versione'} onPress={() => navigation.navigate('Catalogo')} />

            </ScrollView>
        </View>
        )
    }
};


export default Impostazioni;
