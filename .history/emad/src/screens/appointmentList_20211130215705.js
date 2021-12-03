import React from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackButton from "../components/BackButton";
import Divider from "../components/Divider";
import InputText from "../components/InputText";
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import 'moment/locale/it'
const appointmentList = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        LocaleConfig.locales['fr'] = {
            monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
            monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
            dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
            dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
            today: 'Aujourd\'hui'
          };
          LocaleConfig.defaultLocale = 'fr';
        return (
        <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
            <LocaleConfig/>

        </View>
        )
    }

}

export default appointmentList;