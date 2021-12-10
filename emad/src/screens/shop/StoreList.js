import React from "react";
import {Image, View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackButton from "../../components/BackButton";
import Divider from "../../components/Divider";
import InputText from "../../components/InputText";
import { useTheme } from "../../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const stores = [
    { "id": "01","name": "Prada - Roma", "ref": "04559811", "qty": "5", "img": require('../../../assets/negozi/Prada-roma.jpg') },
    { "id": "02","name": "Prada - Rinascente Roma", "ref": "04559811", "qty": "5", "img": require('../../../assets/negozi/Prada-rinascente_roma.jpg') },
    { "id": "03","name": "Prada - Firenze", "ref": "04559811", "qty": "5", "img": require('../../../assets/negozi/Prada-firenze.jpg') },
    { "id": "04","name": "Prada - Milano Spiga", "ref": "04559811", "qty": "5", "img": require('../../../assets/negozi/Prada-milano-spiga.jpg') },
    { "id": "05","name": "Prada - Milano Montenap...", "ref": "04559811", "qty": "5", "img": require('../../../assets/negozi/Prada-montenapoleone.jpg') },
    { "id": "06","name": "Prada - Venezia", "ref": "04559811", "qty": "5", "img": require('../../../assets/negozi/Prada-venezia.jpg') },
]

const StoreList = ({ navigation }) => {
    
    const {colors, isDark} = useTheme();

    const tabBarHeight = useBottomTabBarHeight();
    const [search, onChangeText] = React.useState('');
    const [user, onSearch] = React.useState([]);
   
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayRegular': require('../../../assets/fonts/SFProDisplayRegular.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
                <BackButton onPress={() => { navigation.goBack() }} />
                <ScrollView style={{marginTop: 15}}>
                    {stores.map((item) => (
                        <View key={item.id} style={{height: 75, width: "90%",flexDirection: "row", alignSelf: "center",marginTop: 5, marginBottom: 5, }}>
                                <View style={{width: '35%'}}>
                                <View style={{ justifyContent: "center", marginLeft: 5, height: 60, width: 100, shadowOffset: { width: 1, height: 2 },shadowOpacity: 0.25,shadowRadius: 5, elevation: 5, marginRight: 10, borderRadius: 5 }}>
                                    <Image source={item.img} style={{ height: 60, width: 100, borderRadius: 5 }} />
                                </View>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row', width: '65%'}} activeOpacity={.75} onPress={() => { navigation.navigate('Store',{store:item.id}) }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>{item.name}</Text>
                                        <Text style={{ fontSize: 11, fontFamily: 'SFProDisplayRegular', color: colors.theme.subtitle }}>Ref: {item.ref}</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'SFProDisplayRegular', color: colors.theme.title }}>Disponibilità {item.qty}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignContent: "center", alignItems: 'center', marginLeft: 'auto', top: 15, marginRight: 5, height: 40, width: 40}}>
                                        <Ionicons name="chevron-forward" size={25} color={colors.theme.title} />
                                    </View>
                                </TouchableOpacity>
                        </View>
                    ))}
                    <View style={{ marginBottom: tabBarHeight + 10 }}></View>

                </ScrollView>
            </View>
        )
    }
};

export default StoreList;