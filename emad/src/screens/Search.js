import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import InputText from "../components/InputText";
import Box from "../components/Box";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Search = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [prodotto, setProdotto] = React.useState('');
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.text}>Ricerca Prodotto</Text>

      <InputText params={{ marginTop: 70, width: "100%", paddingLeft: 75, textAlign: "left" }}
        name="Cerca Prodotto" icon="search" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false' />

      <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', marginTop: 50, marginBottom: tabBarHeight }}>
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
        <Box params={{ marginTop: 0 }} />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    top: 50,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  screen: {
    height: "100%",
    backgroundColor: "#1B1C22"
  }
});

export default Search;
