import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Divider from "../../components/Divider";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from "../../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import moment from 'moment';
import 'moment/locale/it';

const width = Dimensions.get('window').width;
moment.locale('it')
LocaleConfig.locales['it'] = {
    monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novebre', 'Dicembre'],
    dayNames: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'],
    dayNamesShort: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
    today: 'Oggi'
};
LocaleConfig.defaultLocale = 'it';

const users = [
    { "name": "Maria Rossi", "id": "001", "next_appointment": "1 Dicembre 2021 11:00-12:00", "reserved": "true" },
    { "name": "Antonella Rossi", "id": "002", "next_appointment": "1 Dicembre 2021 13:00-14:00", "reserved": "true" },
    { "name": "Margherita Rosi", "id": "003", "next_appointment": "1 Dicembre 2021 15:00-16:00", "reserved": "true" }
]

const AppointmentList = ({ navigation }) => {

    const { key, colors, setScheme, isDark } = useTheme();

    const [daySelected, setDaySelected] = useState(new Date);
    
    const onDayPress = day => {
        setDaySelected(day.dateString);
    }
    const onMonthChange = day => {
        var today = new Date;
        today.setHours(0,0,0,0)
        var selected = new Date(day.dateString)
        if(today.getTime() != selected.getTime()) {
            setDaySelected(day.dateString);
        } else {
            setDaySelected(undefined)
        }
    }
     
    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    function renderHeader(date) {
        if (date) {
            var Data = new Date(date)
            return (
                <View style={{marginTop:'15%', zIndex:1}}>
                <View style= {{position: 'absolute', top: 0, alignSelf: 'center',zIndex: 1}}>
                    <Text style={{ textTransform: 'capitalize', fontSize: 16, textAlign: 'left', color: colors.theme.primary}}>
                        {moment(Data).format('dddd')}
                    </Text>
                    <Text style={{ textTransform: 'capitalize', fontSize: 28, textAlign: 'left', color: colors.theme.primary, marginBottom: 15 }}>
                        {moment(Data).format('DD MMMM YYYY')}
                    </Text>
                </View>
                </View>
            )
        }
        var Data = new Date()
            return (
            <View style= {{position: 'absolute', top: 0, alignSelf: 'center',zIndex: 1}}>
                    <Text style={{ textTransform: 'capitalize', fontSize: 16, textAlign: 'left', color: colors.theme.primary}}>
                        {moment(Data).format('dddd')}
                    </Text>
                    <Text style={{ textTransform: 'capitalize', fontSize: 28, textAlign: 'left', color: colors.theme.primary, marginBottom: 15 }}>
                        {moment(Data).format('DD MMMM YYYY')}
                    </Text>
                </View>
            )
    }

    let [fontsLoaded] = useFonts({
        'SFProDisplayRegular': require('../../../assets/fonts/SFProDisplayRegular.otf'),
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View style={{ backgroundColor: colors.theme.background, flexGrow: 1 }}>
               
                {renderHeader(daySelected)}
                <Calendar
                    key={key}
                    style={{ backgroundColor: colors.theme.background, monthTextColor: colors.theme.title, marginTop: 5,  }}
                    hideArrows={false}
                    hideExtraDays={false}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                    onDayPress={onDayPress}
                    onMonthChange={onMonthChange}
                    markedDates={{
                        [daySelected]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: colors.calendar_select.circle,
                            selectedTextColor: colors.calendar_select.text,
                        }
                    }}
                    renderHeader={(date) => <View style={{marginBottom: 55}}/>}
                    theme={colors.calendar}

                />
                
                <Divider width="100%" />
                <ScrollView overScrollMode="never">
                    {users.map((item) => (
                        <View key={item.id} style={{ height: 75, width: "90%", flexDirection: "row", alignSelf: "center", marginTop: 10, marginBottom: 5, }}>
                            <View style={{ width: '25%' }}>
                                <View style={{ justifyContent: "center", marginLeft: 5, height: 70, width: 70, shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5, marginRight: 10, borderRadius: 5 }}>
                                    <Image source={require('../../../assets/img/img.jpg')} style={{ height: 70, width: 70, borderRadius: 5, borderWidth: 3, borderColor: "white" }} />
                                </View>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', width: '75%' }} activeOpacity={.75} onPress={() => { navigation.navigate('CustomerPage',{user:item.id}) }}>
                                <View style={{ flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>{item.name}</Text>
                                    <Text style={{ fontSize: 11, fontFamily: 'SFProDisplayRegular', color: colors.theme.subtitle }}>Codice cliente: {item.id}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'SFProDisplayRegular', color: colors.theme.title }}>{item.next_appointment}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: "center", alignItems: 'center', marginLeft: 'auto', top: 15, marginRight: 5, height: 40, width: 40 }}>
                                    <Ionicons name="chevron-forward" size={25} color={colors.theme.title} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    ))}

                </ScrollView>

            </View>

        )
    }

}

export default AppointmentList;