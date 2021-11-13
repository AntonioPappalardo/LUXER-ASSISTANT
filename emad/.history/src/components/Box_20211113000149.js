import React from "react";
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const Box = (props) => {
    return(
        <TouchableOpacity activeOpacity={.6} style={{ padding: 15, paddingTop: 5,flexBasis: '50%' }} onPress={() => navigation.navigate('Client')}>
        <LinearGradient
              start={{x: 0.25, y: 1}} end={{x: 0.75, y: 0}}
              colors={['#723bf4', '#20b4f2']}
              style={[styles.userCard,{ padding: 15 }]}>
              <Ionicons name="person-outline" size={30} color={"white"} />
              <Text style={styles.cardTitle}>
                Scheda Cliente
              </Text>
              <View style={[styles.dot_button, { backgroundColor: "rgba(0,0,0,0.2)" }]}>
                <Ionicons name="arrow-forward-outline" size={30} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
              </View>
          </LinearGradient>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    
    userCard: {
        marginRight: 'auto',
        width: '100%',
        height: 190,
        borderRadius: 20,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 0
      },
      cardTitle: {
        paddingTop: 20,
        paddingBottom: 10,
        textAlign: 'left',
        color: "white",
        fontSize: 25,
        fontWeight: '700',
        fontFamily: 'System',
    },  
    dot_button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginLeft: 'auto',
        marginTop: 5,
        height: 40,
        width: 40,
        borderRadius: 20
      },

});


export default Box;