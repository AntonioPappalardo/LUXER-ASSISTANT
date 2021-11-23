import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Container from "../components/Container";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Catalogo = ({ }) => {
  const tabBarHeight = useBottomTabBarHeight();
  console.log(tabBarHeight)
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.text}>Catalogo</Text>
      <Container params={{}} image={require('../../assets/4.jpg')} title="Borse e Accessori" subTitle="221 prodotti" />
      <Container params={{}} image={require('../../assets/3.jpg')} title="Scarpe Uomo" subTitle="221 prodotti" />
      <Container params={{}} image={require('../../assets/2.jpg')} title="Scarpe Donna" subTitle="221 prodotti" />
      <Container params={{ marginBottom: tabBarHeight }} image={require('../../assets/1.jpg')} title="Intimo Donna" subTitle="221 prodotti" />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  screen: {
    height: "100%",
    backgroundColor: "#1B1C22"
  }
});

export default Catalogo;
