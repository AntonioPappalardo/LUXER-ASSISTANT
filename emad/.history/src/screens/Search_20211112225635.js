import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';

const Stack = createStackNavigator();

const Search = ({ navigation }) => {
    return (
        <ScrollView style={styles.screen}>
        <Text style={styles.text}>Catalogo</Text>
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
