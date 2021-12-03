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

const users = [
    { "name": "Maria Rossi", "id": "001", "next_appointment": "1 Dicembre 2021 11:00-12:00", "reserved": "true" },
    { "name": "Antonella Rossi", "id": "002", "next_appointment": "1 Dicembre 2021 13:00-14:00", "reserved": "true" },
    { "name": "Margherita Rosi", "id": "003", "next_appointment": "1 Dicembre 2021 15:00-16:00", "reserved": "true"}
]

const appointmentList = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    
    let [fontsLoaded] = useFonts({
        'SFProDisplayRegular': require('../../assets/fonts/SFProDisplayRegular.otf'),
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
        return (
        <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
            <Calendar
            style={{marginTop:'10%', height: '45%'}}
            dayNames={'Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'}
            monthNames={'Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novebre','Dicembre'}
            dayNamesShort={ 'L', 'M', 'M', 'G', 'V', 'S', 'D'}
            renderArrow={(direction) => (<Arrow/>)}
            hideArrows={true}
            hideExtraDays={true}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            //renderHeader={(date) => {/*Return JSX*/}}
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

            <Divider width="100%" />
            <ScrollView>
                {users.map((item) => (
                    <View key={item.id} style={{height: '30%', width: "90%",flexDirection: "row", alignSelf: "center",marginTop: 10, marginBottom: 5, }}>
                            <View style={{width: '25%'}}>
                            <View style={{ justifyContent: "center", marginLeft: 5, height: 70, width: 70, shadowOffset: { width: 1, height: 2 },shadowOpacity: 0.25,shadowRadius: 5, elevation: 5, marginRight: 10, borderRadius: 5 }}>
                                <Image source={require('../../assets/img/img.jpg')} style={{ height: 70, width: 70, borderRadius: 5, borderWidth: 3, borderColor: "white" }} />
                            </View>

                            </View>
                            <TouchableOpacity style={{flexDirection: 'row', width: '75%'}} activeOpacity={.75} onPress={() => { navigation.navigate('UserPage',{user:item.id}) }}>
                                <View style={{ flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>{item.name}</Text>
                                    <Text style={{ fontSize: 11, fontFamily: 'SFProDisplayRegular', color: colors.theme.subtitle }}>Codice cliente: {item.id}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'SFProDisplayRegular', color: colors.theme.title }}>{item.next_appointment}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: "center", alignItems: 'center', marginLeft: 'auto', top: 15, marginRight: 5, height: 40, width: 40}}>
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

export default appointmentList;