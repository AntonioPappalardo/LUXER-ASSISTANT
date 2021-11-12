import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import InputButton from "../components/InputButton";


const Catalogo = ({}) => {
    
    return (
        <ScrollView style={{ backgroundColor: "#1B1C22", flex: 1 }}>
        <Text style={styles.text}>Nuovo Cliente</Text>

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
    form:{
      marginTop:30,
      padding:20
    },
    screen:{
      height:"100%",
      backgroundColor:"#2A2E43"
    }
  });

  export default Catalogo;
