import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
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

    const [isChecked, setChecked] = useState(false);
    const [selectedFirstSlot, setSelectedFirstSlot] = useState();
    const [selectedSecondSlot, setSelectedSecondSlot] = useState();

    const [daySelected, setDaySelected] = useState(new Date);


    const onDayPress = day => {
        setDaySelected(day.dateString);
    }
    const onMonthChange = day => {
        var today = new Date;
        today.setHours(0, 0, 0, 0)
        var selected = new Date(day.dateString)
        if (today.getTime() != selected.getTime()) {
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
                <View style={{ marginTop: '15%', zIndex: 1 }}>
                    <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
                        <Text style={{ textTransform: 'capitalize', fontSize: 16, textAlign: 'left', color: colors.theme.primary }}>
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
            <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
                <Text style={{ textTransform: 'capitalize', fontSize: 16, textAlign: 'left', color: colors.theme.primary }}>
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
                <View style={{ flexDirection: 'row' }}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>Nuovo Appuntamento</Text>
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
                    renderHeader={(date) => <View style={{ marginBottom: 55 }} />}
                    theme={colors.calendar}

                />

                <Divider width="100%" />
                <ScrollView style={{ height: "100%" }}>
                    <View style={{flex: 1, width:'75%', alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
                        <View style={styles.section}>
                            <Checkbox
                                style={{margin: 0, borderRadius: 5 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#e78630' : undefined}
                            />
                            <Text style={{ margin: 25,fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>Riserva l'intero negozio</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ width: '5%' }} />
                        <View style={{ width: '45%' }} >
                            <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>Dalle:</Text>
                        </View>
                        <View style={{ width: '5%' }} />
                        <View style={{ width: '45%' }} >
                            <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>Alle:</Text>
                        </View>
                        <View style={{ width: '5%' }} />
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ width: '5%' }} />
                        <Picker
                            selectedValue={selectedFirstSlot}
                            style={{ width: '40%' }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedFirstSlot(itemValue)
                            }>
                            <Picker.Item label="09:00" value="0" />
                            <Picker.Item label="09:30" value="1" />
                            <Picker.Item label="10:00" value="2" />
                            <Picker.Item label="10:30" value="3" />
                            <Picker.Item label="11:00" value="4" />
                            <Picker.Item label="11:30" value="5" />
                            <Picker.Item label="12:00" value="6" />
                            <Picker.Item label="12:30" value="7" />
                            <Picker.Item label="13:00" value="8" />
                            <Picker.Item label="13:30" value="9" />
                            <Picker.Item label="14:00" value="10" />
                            <Picker.Item label="14:30" value="11" />
                            <Picker.Item label="15:00" value="12" />
                            <Picker.Item label="15:30" value="13" />
                            <Picker.Item label="16:00" value="14" />
                            <Picker.Item label="16:30" value="15" />
                            <Picker.Item label="17:00" value="16" />
                            <Picker.Item label="17:30" value="17" />
                            <Picker.Item label="18:00" value="18" />
                            <Picker.Item label="18:30" value="19" />
                            <Picker.Item label="19:00" value="20" />
                            <Picker.Item label="19:30" value="21" />
                            <Picker.Item label="20:00" value="22" />
                            <Picker.Item label="20:30" value="23" />
                            <Picker.Item label="21:00" value="24" />
                        </Picker>
                        <View style={{ width: '10%' }} />
                        <Picker
                            selectedValue={selectedSecondSlot}
                            style={{ width: '40%' }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedSecondSlot(itemValue)
                            }>

                            <Picker.Item label="09:00" value="0" />
                            <Picker.Item label="09:30" value="1" />
                            <Picker.Item label="10:00" value="2" />
                            <Picker.Item label="10:30" value="3" />
                            <Picker.Item label="11:00" value="4" />
                            <Picker.Item label="11:30" value="5" />
                            <Picker.Item label="12:00" value="6" />
                            <Picker.Item label="12:30" value="7" />
                            <Picker.Item label="13:00" value="8" />
                            <Picker.Item label="13:30" value="9" />
                            <Picker.Item label="14:00" value="10" />
                            <Picker.Item label="14:30" value="11" />
                            <Picker.Item label="15:00" value="12" />
                            <Picker.Item label="15:30" value="13" />
                            <Picker.Item label="16:00" value="14" />
                            <Picker.Item label="16:30" value="15" />
                            <Picker.Item label="17:00" value="16" />
                            <Picker.Item label="17:30" value="17" />
                            <Picker.Item label="18:00" value="18" />
                            <Picker.Item label="18:30" value="19" />
                            <Picker.Item label="19:00" value="20" />
                            <Picker.Item label="19:30" value="21" />
                            <Picker.Item label="20:00" value="22" />
                            <Picker.Item label="20:30" value="23" />
                            <Picker.Item label="21:00" value="24" />
                        </Picker>
                        <View style={{ width: '5%' }} />

                    </View>
                    <InputButton params={{ marginTop: 20, width: "75%" }} name="Conferma" icon="arrow-forward-outline" rotation="-45deg" />
                </ScrollView>

            </View>

        )
    }

}

const styles = StyleSheet.create({

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,

    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
    },
});


export default AddAppointment;