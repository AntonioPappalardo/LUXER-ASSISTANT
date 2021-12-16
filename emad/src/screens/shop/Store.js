import React from "react";
import { Dimensions, Image, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import Divider from "../../components/Divider";
import InputButton from "../../components/InputButton";

const stores = [
    {
        "id": "01", "name": "Prada - Roma",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-roma.jpg'},
        "address": "Via Arturo Ferrarin, 2", "citta": "Roma", "provincia": "RM", "zip": "00054"
    },
    {
        "id": "02", "name": "Prada - Rinascente Roma",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-rinascente_roma.jpg'},
        "address": "Via del Tritone, 61", "citta": "Roma", "provincia": "RM", "zip": "00187"
    },
    {
        "id": "03", "name": "Prada - Firenze",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-firenze.jpg'},
        "address": "Via Tornabuoni, 53R-67R", "citta": "Firenze", "provincia": "FI", "zip": "50123"
    },
    {
        "id": "04", "name": "Prada - Milano Spiga",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-milano-spiga.jpg'},
        "address": "Via della Spiga, 18", "citta": "Milano", "provincia": "MI", "zip": "20122"
    },
    {
        "id": "05", "name": "Prada - Milano Montenap...",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-montenapoleone.jpg'},
        "address": "Via Montenapoleone, 8", "citta": "Milano", "provincia": "MI", "zip": "20121"
    },
    {
        "id": "06", "name": "Prada - Venezia",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-venezia.jpg'},
        "address": "Salizada San Moise, 1464-1468", "citta": "Venezia", "provincia": "VE", "zip": "30124"
    },
    {
        "id": "07", "name": "Prada - Forte dei Marmi",
        "img": {uri:'https://storageaccountemadbc1b.blob.core.windows.net/negozi/Prada-forte_dei_marmi.jpg'},
        "address": "Via Giosuè Carducci, 2", "citta": "Forte dei Marmi", "provincia": "LU", "zip": "55042"
    },
];
const days = [
    { "id": "01", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "02", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "03", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "04", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "05", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "06", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "07", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },
    { "id": "08", "days": [{ "giorno": "Lunedì", "orario": "07:00 - 21:00" }, { "giorno": "Martedì", "orario": "07:00 - 21:00" }, { "giorno": "Mercoledì", "orario": "07:00 - 21:00" }, { "giorno": "Giovedì", "orario": "07:00 - 21:00" }, { "giorno": "Venerdì", "orario": "07:00 - 21:00" }, { "giorno": "Sabato", "orario": "07:00 - 21:00" }, { "giorno": "Domenica", "orario": "07:00 - 21:00" }] },

];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Store = ({ navigation, route }) => {

    const { colors, isDark } = useTheme();
    
    const [store, setStore] = React.useState(stores.find(us => us.id === route.params.store));
    const [day, setDays] = React.useState(days.find(us => us.id === route.params.store));
    var weekDays = ['Domenica','Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    
    var now = weekDays[new Date().getDay()];
    const tabBarHeight = useBottomTabBarHeight();


    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
                <View style={{flexDirection: 'row'}}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>{store.name}</Text>
                    </View>
                </View>
                <ScrollView overScrollMode="never">
                    <View style={{ maxWidth: width, maxHeight: 250, marginTop: '5%' }}>
                        <Image source={store.img} style={{ maxWidth: width, minHeight:220, maxHeight: 240 }} />
                    </View>
                    <View style={{marginTop: '5%'}}>
                        {day.days.map((item) => (
                            <View key={item.giorno} style={{ width: '80%', alignSelf: 'center', marginBottom: '2%', flexDirection: 'row' }}>
                                {now == item.giorno ?
                                    <View style={{ width: '5%', justifyContent: 'center' }}>
                                        <View style={{ width: 7, height: 7, backgroundColor: '#EA9F5A', borderRadius: 3.5 }} />
                                    </View>
                                    :
                                    <View style={{ width: '5%', justifyContent: 'center' }} />}
                                <View style={{ width: '48%' }}>
                                    {now == item.giorno ?
                                        <Text style={{ fontFamily: "SFProDisplayBold", fontSize: 15, color: colors.theme.title }}>{item.giorno}</Text>
                                        :
                                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 14, color: colors.theme.title }}>{item.giorno}</Text>
                                    }
                                </View>
                                <View style={{ width: '48%' }}>
                                    {now == item.giorno ?
                                        <Text style={{ textAlign: 'right', fontFamily: "SFProDisplayBold", fontSize: 15, color: colors.theme.subtitle }}>{item.orario}</Text>
                                        :
                                        <Text style={{ textAlign: 'right', fontFamily: "SFProDisplayMedium", fontSize: 14, color: colors.theme.subtitle }}>{item.orario}</Text>
                                    }
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={{ marginTop: '5%' }}></View>
                    <Divider width={'85%'} />
                    <View style={{ width: "75%", alignSelf: 'center' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 14, color: colors.theme.title, marginTop: '5%' }}>{store.address}, {store.zip}{'\n'}{store.citta} {store.provincia}</Text>
                    </View>
                    <InputButton params={{ marginTop: '5%', width: "75%" }} name="CHIAMA" icon="arrow-forward-outline" rotation="-45deg" />
                    <View style={{ marginBottom: tabBarHeight + 10 }} />
                </ScrollView>
            </View>
        )
    }
};

export default Store;
