import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Box from "../components/Box";
import InputText from "../components/InputText";
import { findFocusedRoute } from "@react-navigation/core";
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import { shadow } from "react-native-paper";
const colorScheme = Appearance.getColorScheme();

if (colorScheme === 'dark') {
    var colorTheme = dark;
} else {
    var colorTheme = light;
}

const users = [
    { "name": "Maria Rossi", "id": "001" },
    { "name": "Antonella Rossi", "id": "002" },
    { "name": "Margherita Rosi", "id": "003" },
    { "name": "Maria Bianchi", "id": "004" },
    { "name": "Michela Gargiulo", "id": "005" },
]
const searchUser = ({ navigation }) => {
    const [search, onChangeText] = React.useState('');
    const [user, onSearch] = React.useState([]);
    const ook = (cerca) => {
        console.log(users)
        onChangeText(cerca);
        onSearch(users.filter(user => (user.name.toLowerCase().includes(cerca.toLowerCase()) || user.id.includes(cerca))))

    }
    return (
        <View style={{ backgroundColor: colorTheme.theme.background, height: "100%" }}>
            <View style={{ top: 35, flexDirection: "row", justifyContent: "flex-start" }} >
                <Ionicons name="chevron-back" size={25} color="white" onPress={
                    () => { onChangeText(""); navigation.goBack() }} />
                <Text style={{ fontSize: 20, color:colorTheme.theme.background, fontWeight: 'bold' }} onPress={
                    () => { onChangeText(""); navigation.goBack() }}>
                    Torna Indietro
                </Text>
            </View>
            <View>
                <Text style={styles.text}>Ricerca Cliente</Text>
                <InputText params={{ marginTop: 70, width: "100%", paddingLeft: 75, textAlign: "left" }}
                    name="Cliente" icon="search" rotation="0deg" value={search} onChangeText={cerca => ook(cerca)} secure='false' />
                <ScrollView style={{ marginTop: 50 }}>
                    {user.map((item) => (
                        <TouchableOpacity key={item.id}>
                            <View style={{ height: 75, width: "90%", justifyContent: "space-between", flexDirection: "row", marginBottom: 10, alignSelf: "center", borderRadius: 5 }}>
                                <View style={{ justifyContent: "center", marginLeft: 5, height:70,width: 70 ,borderRadius: 10, border:0.8,borderColor:"black", shadowOffset: { width: 10, height: 10 }, shadowColor: '#000',shadowOpacity: 1,elevation: 10,marginRight:10}}>
                                    <Image source={require('../../assets/img/img.jpg')} style={{ height: 65, width: 65,borderRadius: 10 }}/>
                                </View>
                                <View style={{ height: 75, width: 150, flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 20, color:colorTheme.theme.title}}>{item.name}</Text>
                                    <Text style={{ fontSize: 10, color: colorTheme.theme.subtitle }}>Codice cliente: {item.id}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: "center", alignItems: 'center', marginLeft: 'auto', top: 15, marginRight: 5, height: 40, width: 40}}>
                                    <Ionicons name="chevron-forward" size={25} color={colorTheme.theme.title} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                    )}
                </ScrollView>

            </View>

        </View>
    )
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