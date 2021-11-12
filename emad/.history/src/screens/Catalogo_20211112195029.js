import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import Container from "../components/Container";


const Catalogo = ({}) => {
    
    return (
        <ScrollView style={styles.screen}>
        <Text style={styles.text}>Catalogo</Text>
        <Container params={{backgroundColor: "red"}}/>
       
        </ScrollView> 
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

export default Catalogo;
