import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Checkbox } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Divider from "../../components/Divider";
import BackButton from "../../components/BackButton";
import InputButton from "../../components/InputButton";
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

const AddAppointment = ({ navigation }) => {

    const { key, colors, setScheme, isDark } = useTheme();

    const [daySelected, setDaySelected] = useState(new Date);
    const [isSelected, setSelection] = useState(false);

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
                <View style= {{position: 'absolute', top: "15%", alignSelf: 'center',zIndex: 1}}>
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
                <View style={{flexDirection: 'row'}}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>Nuovo Appuntamento</Text>
                    </View>
                </View>  
                {renderHeader(daySelected)}
                <Calendar
                    key={key}
                    style={{ backgroundColor: colors.theme.background, monthTextColor: colors.theme.title }}
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
                <ScrollView style={{height: "100%"}}>
                    <View style={styles.container}>
                        <View style={styles.checkboxContainer}>
                            <Checkbox status={isSelected ? 'checked' : 'unchecked'} hideBox='false' tintColor='#aaaaaa' onPress={() => { setSelection(!isSelected);}} style/>
                            <Text style={{margin:25, color: colors.theme.primary}}>Riserva l'intero negozio</Text>
                        </View>
                    </View>
                    <InputButton params={{ marginTop: 20, width: "75%" }} name="Conferma" icon="arrow-forward-outline" rotation="-45deg" />
                </ScrollView>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      
    },
    checkbox: {
      alignSelf: "center"
    }
  });
  

export default AddAppointment;