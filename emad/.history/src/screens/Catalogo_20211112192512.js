import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';


const Catalogo = ({}) => {
    
    return (
        <ScrollView style={styles.screen}>

        <Text style={styles.text}>Catalogo</Text>
        <TouchableOpacity activeOpacity={.6} style={{ padding: 15, paddingTop: 0, marginBottom: 40 }} onPress={() => navigation.navigate('Catalogo')}>
      <LinearGradient
              start={{x: 0.25, y: 1}} end={{x: 0.75, y: 0}}
              colors={['#347bde', '#1ad3a5']}
              style={[styles.catalogCard,{ padding: 15 }]}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingLeft: 10}}>
              <Text style={[styles.cardTitle, { paddingBottom: 0, paddingTop:0 }]}>
                Catalogo
              </Text>
              <Text style={styles.cardSubTitle}>
                2500+ prodotti
              </Text>
            </View>
            <View style={[styles.dot_button, { backgroundColor: "rgba(0,0,0,0.2)"  }]}>
              <Ionicons name="arrow-forward-outline" size={30} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity >        </ScrollView>
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
