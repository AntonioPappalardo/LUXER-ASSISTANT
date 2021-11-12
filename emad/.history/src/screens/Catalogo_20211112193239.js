import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import Container from "../components/Container";


const Catalogo = ({navigation}) => {
    
    return (
        <ScrollView style={styles.screen}>

        <Text style={styles.text}>Catalogo</Text>
       
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
    },
    catalogCard: {
        marginBottom: 0,
        backgroundColor: "#FFF",
        height: 160,
        borderRadius: 20,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 0
      },
  });

export default Catalogo;
