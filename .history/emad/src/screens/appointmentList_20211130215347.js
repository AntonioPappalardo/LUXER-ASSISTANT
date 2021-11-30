import React from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackButton from "../components/BackButton";
import Divider from "../components/Divider";
import InputText from "../components/InputText";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
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
        var locale='it'
        return (
        <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
            <Calendar
            locale={locale}
                // Specify style for calendar container element. Default = {}
            style={{
                marginTop:'10%',
                height: 370
            }}

            renderArrow={(direction) => (<Arrow/>)}
            hideArrows={true}
            hideExtraDays={true}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}


            // Disable left arrow. Default = false
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates


            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
                backgroundColor: colors.theme.background,
                calendarBackground: colors.theme.background,
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: 'white',
                todayBackgroundColor:'orange',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'white',
                indicatorColor: 'white',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
            }}
            />

        </View>
        )
    }

}

export default appointmentList;