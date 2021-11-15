import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Box from "../components/Box";
import InputText from "../components/InputText";
import { findFocusedRoute } from "@react-navigation/core";

const users=[
    {"name":"Maria Rossi","id":"001"},
    {"name":"Antonella Rossi","id":"002"},
    {"name":"Margherita Rosi","id":"003"},
    {"name":"Maria Bianchi","id":"004"},
    {"name":"Michela Gargiulo","id":"005"},
]
const searchUser = ({navigation}) => {
    const [search,onChangeText]= React.useState('');
    const [user, onSearch]=React.useState([]);
    const ook=(cerca)=>{
        console.log(users)
        onChangeText(cerca);
        onSearch(users.filter(user=> (user.name.toLowerCase().includes(cerca.toLowerCase())|| user.id.includes(cerca) )))
        
    }
    return (
     <View style={{backgroundColor:"#2A2E43",height:"100%"}}>
        <View style={{top:35,flexDirection:"row",justifyContent:"flex-start"}} >
          <Ionicons name="chevron-back" size={25} color="white" onPress= {
            () => { onChangeText("");navigation.goBack()}}/>
          <Text style={{ fontSize:20,color:'white',fontWeight:'bold'}} onPress= {
            () => { onChangeText("");navigation.goBack()}}>
              Torna Indietro
          </Text>
        </View>
        <View>
            <Text style={styles.text}>Ricerca Cliente</Text>
            <InputText params={{ marginTop: 70, width: "100%" , paddingLeft: 75, textAlign: "left"}} 
                name="Cliente" icon="search" rotation="0deg" value={search} onChangeText={cerca=>ook(cerca)} secure='false'/>
            <ScrollView style={{marginTop:50}}>  
                {user.map((item)=>(
                    <TouchableOpacity key={item.id}>
                        <View style={{height:75,width:"90%",backgroundColor:"#2374fc",justifyContent:"space-between",flexDirection:"row",marginBottom:10,alignSelf:"center",borderRadius:5}}>
                            <View style={{justifyContent:"center",marginLeft:5,width:70}}>
                                <Image source={require('../../assets/img/img.jpg')} style={{height:65,width:65,borderRadius:50}}/>
                            </View>
                            <View  style={{height:75,width:150,flexDirection:"column",justifyContent:"center"}}>
                                <Text  style={{fontSize:20,color:"white"}}>{item.name}</Text>
                                <Text  style={{fontSize:10,color:"white"}}>Codice cliente: {item.id}</Text>
                            </View>
                            <View style={{ backgroundColor: "#789AF3" ,justifyContent: 'center',alignContent:"center", alignItems: 'center', marginLeft: 'auto',top:15,marginRight:5, height: 40, width: 40, borderRadius: 20}}>
                                <Ionicons name="arrow-forward-outline" size={25} color={"white"} style={{ transform: [{ rotateZ: "-45deg" }], }} />
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

export default searchUser;