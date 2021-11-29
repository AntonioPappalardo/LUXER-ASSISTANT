import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import BackButton from "../components/BackButton";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Divider from "../components/Divider";
import MenuItem from "../components/MenuItem";
import {LineChart} from 'react-native-chart-kit'
const colorScheme = Appearance.getColorScheme();

if (colorScheme === 'dark') {
    var colorTheme = dark;
} else {
    var colorTheme = light;
}

const users = [
    { "name": "Maria Rossi", "id": "001", "next_appointment": "", "reserved": "true", "signin":"27/07/2018"},
    { "name": "Antonella Rossi", "id": "002", "next_appointment": "", "reserved": "true","signin":"27/07/2018" },
    { "name": "Margherita Rosi", "id": "003", "next_appointment": "", "reserved": "true","signin":"27/07/2018" },
    { "name": "Maria Bianchi", "id": "004", "next_appointment": "", "reserved": "true","signin":"27/07/2018" },
    { "name": "Michela Gargiulo", "id": "005", "next_appointment": "29 Novembre 2021 15:00-16:00", "reserved": "true","signin":"27/07/2018" },
]
const acquisti=[
    {"id":"00001","cliente":"001","data":"2021/07/24","saldo":450.50},
    {"id":"00002","cliente":"002","data":"2021/07/25","saldo":450.50},
    {"id":"00003","cliente":"003","data":"2021/07/25","saldo":450.50},
    {"id":"00004","cliente":"004","data":"2021/07/25","saldo":450.50},
    {"id":"00005","cliente":"005","data":"2021/07/25","saldo":450.50},
    {"id":"00006","cliente":"001","data":"2021/08/25","saldo":450.50},
    {"id":"00007","cliente":"002","data":"2021/08/25","saldo":450.50},
    {"id":"00008","cliente":"003","data":"2021/08/25","saldo":450.50},
    {"id":"00009","cliente":"004","data":"2021/08/25","saldo":450.50},
    {"id":"00010","cliente":"005","data":"2021/08/25","saldo":450.50},
    {"id":"00011","cliente":"001","data":"2021/09/25","saldo":450.50},
    {"id":"00012","cliente":"002","data":"2021/09/25","saldo":450.50},
    {"id":"00013","cliente":"003","data":"2021/09/25","saldo":450.50},
    {"id":"00014","cliente":"004","data":"2021/09/25","saldo":450.50},
    {"id":"00015","cliente":"005","data":"2021/09/25","saldo":450.50},
]



const UserPage = ({ navigation ,route}) => {
    const [user, setUser] = React.useState(users.find(us=> us.id===route.params.user));
    const tot= acquisti.filter(a=>a.cliente==user.id).map(a=>a.saldo).reduce((a,b)=>a+b,0);
    const average= tot/(acquisti.filter(a=>a.cliente==user.id).length)
    const last= (acquisti.filter(a=>a.cliente==user.id).map(a=>a.data).sort().reverse())[0]
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style={{ backgroundColor: colorTheme.theme.background, height: "100%" }}>
           <BackButton onPress={() => { navigation.goBack() }}/>
            <View>

                <View style={{flexDirection:"column",width:"100%",alignItems:"center",marginTop:25}}>
                    <View style={{flexDirection:"row",width:"80%"}}>
                        <View style={{justifyContent:"flex-start"}}>
                            <Image source={require('../../assets/img/img.jpg')} style={{ height: 120, width: 120, borderRadius: 5, borderWidth: 5, borderColor: "white" }} />
                        </View>

                        <View style={{flexDirection:"column",paddingLeft:15 ,alignItems:"flex-start"}}>
                            <Text style={{color: colorTheme.theme.title,fontSize:24,fontFamily:"SFProDisplayBold"}}>{user.name}</Text>
                            <Text style={{color:colorTheme.theme.subtitle,fontSize:12}}>Cliente dal {user.signin}</Text>
                            <View>
                                <Text style={{color:colorTheme.theme.primary,fontSize:10}}>Tasso di fedeltà</Text>
                                <Text>Qui va il grafico</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{flexDirection:"row",width:"80%" ,justifyContent:"space-between",marginTop:10}}>
                        <View>
                            <Text style={{fontSize:12,color:colorTheme.theme.secondary}}>Totale Acquisti</Text>
                            <Text>{tot} €</Text>
                        </View>
                        <View> 
                            <Text style={{fontSize:12,color:colorTheme.theme.secondary}}>Media Acquisti</Text>
                            <Text>{average} €</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:12,color:colorTheme.theme.secondary}}>Ultimo Acquisto</Text>
                            <Text>{last}</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:50, borderTopWidth:1,borderTopColor:colorTheme.theme.secondary}}>
                    <Divider width={"100%"} opacity={1} marginBottom={12} />
                    <MenuItem title={'Nuovo Appuntamento'}  />
                    <MenuItem title={'Contatta'} onPress={() => navigation.navigate('Communication')}/> 

                </View>
                <View style={{marginTop:50}}>
                    <LineChart 
                        data={{
                            labels:["January","February","March","April","May","June"],
                            datasets:[
                                {
                                    data:[
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ]
                                }
                            ]
                        }}
                        width={350}
                        height={220}
                        chartConfig={{
                            backgroundColor:"#e26a00",
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor:(opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style:{borderRadius:16}
                        }}
                    />
                </View>
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
}
export default UserPage; 