import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import Container from "../components/Container";



const Communication = ({navigation}) => {
    const [Message,onChangeText]= React.useState('Message');
    return (
      <View style={{backgroundColor:"#2A2E43",height:"100%"}}>
        <View style={{top:35,flexDirection:"row",justifyContent:"flex-start"}} onPress= {
            () => navigation.navigate('User') }>
          <Ionicons name="chevron-back" size={30} color="white"/>
          <Text style={{ fontSize:25,color:'white',fontWeight:'bold'}}>
              Torna Indietro
          </Text>
        </View>
        <View
          style={{marginTop:75,backgroundColor:"#363A4E",height:375,marginLeft:20,marginRight:20,borderRadius:25}}
        >
          <TextInput
            editable
            maxLength={250}
            multiline
            color="white"
            numberOfLines={10}
            onChangeText={text => onChangeText(text)}
            value={Message}
          />
        </View>
        <View style={{marginTop:25,flexDirection:"row"}} alignSelf="center">
          <MaterialCommunityIcons name="telegram" color="#0078B4"size={30}/>
          <MaterialCommunityIcons name="whatsapp" color="green"size={30}/>
        </View>

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
