import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputButton from "../components/InputButton";



const Communication = ({navigation}) => {
    const [Message,onChangeText]= React.useState('');
    return (
      <View style={{backgroundColor:"#2A2E43",height:"100%"}}>
        <View style={{top:35,flexDirection:"row",justifyContent:"flex-start"}} >
          <Ionicons name="chevron-back" size={30} color="white" onPress= {
            () => { onChangeText("");navigation.goBack()}}/>
          <Text style={{ fontSize:25,color:'white',fontWeight:'bold'}} onPress= {
            () => { onChangeText("");navigation.goBack()}}>
              Torna Indietro
          </Text>
        </View>
        <View
          style={{marginTop:75,backgroundColor:"#363A4E",height:375,marginLeft:20,marginRight:20,borderRadius:25}}
        >
          <View style={{flexDirection:"row",marginLeft:25,marginTop:50,alignContent:"flex-start"}}>
            <Ionicons name="md-mail-open-outline" color="white" size={30}/>
            <TextInput
              editable
              maxLength={250}
              multiline
              color="white"
              fontSize={25}
              numberOfLines={10}
              placeholder="Messaggio"
              placeholderTextColor="white"
              onChangeText={text => onChangeText(text)}
              value={Message}
              style={{textAlignVertical:"top",marginLeft:10,width:250}}
            />
          </View>

        </View>
        <View style={{marginTop:25,flexDirection:"row",width:100,justifyContent:"center"}} alignSelf="center">
          <MaterialCommunityIcons name="telegram" color="#0078B4"size={35}  onPress={() => {console.log("Apri Telegram "+Message)}}/>
          <MaterialCommunityIcons name="whatsapp" color="green"size={35}  onPress={() => {console.log("Apri Whatsapp "+Message)}}/>
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
