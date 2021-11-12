import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import InputButton from "../components/InputButton";


const Catalogo = ({}) => {
    
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
    }
  });

  export default Catalogo;
