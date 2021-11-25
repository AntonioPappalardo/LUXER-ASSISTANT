import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputButton from "../components/InputButton";
import { Appearance } from 'react-native';
import MessageBox from '../components/MessageBox'
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
const colorScheme = Appearance.getColorScheme();

const Communication = ({navigation}) => {

    const [Message,onChangeText]= React.useState('');
    if (colorScheme === 'dark') {
      var colorTheme = dark;
  } else {
      var colorTheme = light;
  }
    return (
      <View style={{backgroundColor:colorTheme.theme.background,height:"100%"}}>
        <View style={{top:35,flexDirection:"row",justifyContent:"flex-start"}} >
          <Ionicons name="chevron-back" size={30} color={colorTheme.backbutton.color} onPress= {
            () => { onChangeText("");navigation.goBack()}}/>
        </View>
      
          <MessageBox value={Message} onChangeText={onChangeText} theme={colorTheme}/>
            

        <View style={{marginTop:25,flexDirection:"row",width:100,justifyContent:"center"}} alignSelf="center">
          <MaterialCommunityIcons name="telegram" color="#0078B4"size={35}  onPress={() => {console.log("Apri Telegram "+Message)}}style={{marginRight:7.5}}/>
          <MaterialCommunityIcons name="whatsapp" color="green"size={35}  onPress={() => {console.log("Apri Whatsapp "+Message)}}style={{marginLeft:7.5}}/>
        </View>
        <InputButton params={{ marginTop: 100, width: "75%" }} name="Invia" icon="arrow-forward-outline" rotation="-45deg" onPress={() => {console.log("Invia Messaggio "+Message)}} />


      </View>
    )
};

const styles = StyleSheet.create({
    text:{
      alignSelf:'center',
      top:50,
      fontSize:25,
      color:'white',
      fontWeight:'bold'
    },
    screen:{
      height:"100%",
      backgroundColor:"#2A2E43"
    }
  });

export default Communication;
