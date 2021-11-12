import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProgressChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

const data = {
  labels: [
    "Statistica 1",
    "Statistica 2"
  ],
  data: [0.33, 0.6],
  colors: [
        `rgba(102, 94, 255, 1)`,
        `rgba(58, 204, 225, 1)`,
  ]
};
const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.25,
}
const chartStyle = {
  paddingRight: 35,  
  margin: 0,
  padding: 0,
  borderRadius: 5,
  borderColor: "#FFF",
}

const UserHome = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1B1C22", flex: 1 }}>
      {/*Blocco Utente*/}
      <LinearGradient
              start={{x: 0.25, y: 1}} end={{x: 0.75, y: 0}}
              colors={['#2557d7','#2374fc']}
              style={[styles.mainCard,{ padding: 15}]
              }>
        <Text style={styles.title}>Bentornata Maria</Text>
        <Text style={styles.subTitle}>Ecco un resoconto della tua giornata</Text>
        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
        
        <ImageBackground style ={{ width: 60, height: 60, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}source={require('../../assets/img/profile.png')} >
          <ProgressChart data={data} width={130} height={130} strokeWidth={8} radius={40} chartConfig={chartConfig} style={chartStyle} hideLegend={true}
        withCustomBarColorFromData={true}/>
        </ImageBackground>
          <View style={{ marginLeft: 70}}>
            <View style={{ flexDirection: "row", paddingTop: 0 }}>
              <View style={styles.dot_turquoise} />
              <Text style={styles.statsTitle}>Appuntamenti</Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 10 }}>
              <Text style={styles.leftStat}>3</Text>
              <Text style={styles.rightStat}>/10</Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <View style={styles.dot_purple} />
              <Text style={styles.statsTitle}>Vendite</Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 10 }}>
              <Text style={styles.leftStat}>11</Text>
              <Text style={styles.rightStat}>/30</Text>
            </View>
          </View>
        </View>
        </LinearGradient>
      {/*Utente*/}
      <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap'}}>
        <TouchableOpacity activeOpacity={.6} style={{ padding: 15, flexBasis: '50%' }} onPress={() => navigation.navigate('Client')}>
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

        <TouchableOpacity activeOpacity={.6} style={{ padding: 15,flexBasis: '50%'}} onPress={() => navigation.navigate('AddUser')}>
        <LinearGradient
              start={{x: 0.25, y: 1}} end={{x: 0.75, y: 0}}
              colors={['#f7bc6b', '#ef6d5e']}
              style={[styles.newUserCard,{ padding: 15 }]}>
            <Ionicons name="add-outline" size={30} color={"white"} />
            <Text style={styles.cardTitle}>
              Nuovo Cliente
            </Text>
            <View style={[styles.dot_button, { backgroundColor: "rgba(0,0,0,0.2)" }]}>
              <Ionicons name="arrow-forward-outline" size={30} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/*Catalogo Outside Touchable Opacity*/}
      <TouchableOpacity activeOpacity={.6} style={{ padding: 15, paddingTop: 0, marginBottom: 40 }} onPress={() => navigation.navigate('Catalogo')>
      <LinearGradient
              start={{x: 0.25, y: 1}} end={{x: 0.75, y: 0}}
              colors={['#347bde', '#1ad3a5']}
              style={[styles.catalogCard,{ padding: 15 }]}>
          <View style={{ flexDirection: "row" }}>
           
            <Image style={styles.catalogueLogo} source={require('../../assets/img/undraw_screen_time_vkev.png')} />
          </View>
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
      </TouchableOpacity >
      
    </ScrollView>
  );
};
{/*backgroundColor: "#2D62ED",*/}
const styles = StyleSheet.create({
  mainCard: {
    margin: 15,
    marginTop: 40,
    height: 220,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0
  },
  userCard: {
    marginRight: 'auto',
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0
  },
  newUserCard: {
    marginLeft: 'auto',
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0
  },
  catalogCard: {
    marginBottom: 0,
    backgroundColor: "#39D5CF",
    height: 160,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0
  },
  customButton: {
    marginBottom: 0,
    backgroundColor: "#39D5CF",
    borderRadius: 20,
    borderWidth: 0,
  },
  title: {
    textAlign: 'center',
    color: "white",
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'System',
  },
  subTitle: {
    paddingBottom: 30,
    textAlign: 'center',
    color: "white",
    opacity: 0.8,
    fontSize: 14,
    fontFamily: 'System',
  },
  statsTitle: {
    paddingLeft: 5,
    color: "white",
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'System',
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
  cardSubTitle: {
    textAlign: 'left',
    color: "white",
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'System',
  },
  dot_turquoise: {
    marginTop: 5,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#3ACCE1",
    borderWidth: 1,
    borderColor: "white",
  },
  dot_purple: {
    marginTop: 5,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#665EFF",
    borderWidth: 1,
    borderColor: "white",
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
  leftStat: {
    color: "white",
    fontSize: 14,
    fontFamily: 'System',
  },
  rightStat: {
    color: "white",
    opacity: 0.4,
    fontSize: 12,
    fontFamily: 'System',
  },
  catalogueLogo: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    width: 120,
    height: 80,
    marginBottom: 0
  }
});

export default UserHome;
