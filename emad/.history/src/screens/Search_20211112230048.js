import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import InputText from "../components/InputText";

const Stack = createStackNavigator();

const Search = ({ navigation }) => {
    const [prodotto, setProdotto] = React.useState('');
    return (
        <ScrollView style={styles.screen}>
        <Text style={styles.text}>Ricerca Prodotto</Text>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Cerca Prodotto" icon="call-outline" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false'/>
        </ScrollView>
    );
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

export default Search;
