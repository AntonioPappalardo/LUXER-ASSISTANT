import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackButton from "../components/BackButton";
import Divider from "../components/Divider";
import InputText from "../components/InputText";
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();

if (colorScheme === 'dark') {
    var colorTheme = dark;
} else {
    var colorTheme = light;
}

const users = [
    { "name": "Maria Rossi", "id": "001", "next_appointment": "", "reserved": "true" },
    { "name": "Antonella Rossi", "id": "002", "next_appointment": "", "reserved": "true" },
    { "name": "Margherita Rosi", "id": "003", "next_appointment": "", "reserved": "true" },
    { "name": "Maria Bianchi", "id": "004", "next_appointment": "", "reserved": "true" },
    { "name": "Michela Gargiulo", "id": "005", "next_appointment": "29 Novembre 2021 15:00-16:00", "reserved": "true" },
]

const searchUser = ({ navigation }) => {
    const tabBarHeight = useBottomTabBarHeight();
    const [search, onChangeText] = React.useState('');
    const [user, onSearch] = React.useState([]);
    const ook = (cerca) => {
        console.log(users)
        onChangeText(cerca);
        onSearch(users.filter(user => (user.name.toLowerCase().includes(cerca.toLowerCase()) || user.id.includes(cerca))))

    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayRegular': require('../../assets/fonts/SFProDisplayRegular.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            
            <View style={{ backgroundColor: colorTheme.theme.background, flex: 1 }}>
                <BackButton onPress={() => { navigation.goBack() }} />
                <View style={{ alignItems: "center", marginBottom: 15 }}>
                    <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
                        name="Cliente" icon="search" rotation="0deg" value={search} onChangeText={cerca => ook(cerca)} secure='false' />
                </View>
                <Divider width="100%" />
                <ScrollView>
                    {user.map((item) => (
                        <View key={item.id} style={{height: 75, width: "90%",flexDirection: "row", alignSelf: "center",marginTop: 5, marginBottom: 5, }}  >
                                <View style={{width: '25%'}}>
                                <View style={{ justifyContent: "center", marginLeft: 5, height: 70, width: 70, shadowColor: '#000', shadowOpacity: 1, elevation: 10, marginRight: 10, borderRadius: 5 }}>
                                    <Image source={require('../../assets/img/img.jpg')} style={{ height: 70, width: 70, borderRadius: 5, borderWidth: 3, borderColor: "white" }} />
                                </View>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row', width: '75%'}} activeOpacity={.75} onPress={() => { navigation.navigate('UserPage',{user:item.id}) }}>
                                    <View style={{ flexDirection: "column", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colorTheme.theme.title }}>{item.name}</Text>
                                        <Text style={{ fontSize: 11, fontFamily: 'SFProDisplayRegular', color: colorTheme.theme.subtitle }}>Codice cliente: {item.id}</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'SFProDisplayRegular', color: colorTheme.theme.title }}>{item.next_appointment}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignContent: "center", alignItems: 'center', marginLeft: 'auto', top: 15, marginRight: 5, height: 40, width: 40}}>
                                        <Ionicons name="chevron-forward" size={25} color={colorTheme.theme.title} />
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

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        top: 50,
        fontSize: 25,
        color: colorTheme.theme.title,
        fontWeight: 'bold'
    },
    screen: {
        height: "100%",
        backgroundColor: "#2A2E43"
    }
});

export default searchUser;