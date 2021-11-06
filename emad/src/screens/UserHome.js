import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from 'react-native-elements/dist/helpers';

const UserHome = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#2A2E43", flex: 1 }}>
      {/*Blocco Utente*/}
      <Card containerStyle={styles.mainCard}>
        <Text style={styles.title}>Bentornata Maria</Text>
        <Text style={styles.subTitle}>Ecco un resoconto della tua giornata</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 50, paddingTop: 20 }}>
            <Image style={{ width: 88, height: 88 }} source={require('../../assets/img/profile.png')} />
          </View>
          <View style={{ marginLeft: 70 }}>
            <View style={{ flexDirection: "row", paddingTop: 15 }}>
              <View style={styles.dot_turquoise} />
              <Text style={styles.statsTitle}>Statistica 1</Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 15 }}>
              <Text style={styles.leftStat}>25</Text>
              <Text style={styles.rightStat}>/100</Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 15 }}>
              <View style={styles.dot_purple} />
              <Text style={styles.statsTitle}>Statistica 2</Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 15 }}>
              <Text style={styles.leftStat}>60</Text>
              <Text style={styles.rightStat}>/100</Text>
            </View>
          </View>
        </View>
      </Card>
      {/*Utente*/}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ padding: 15 }}>
          <View style={[styles.userCard, { padding: 15 }]}>
            <Ionicons name="person-outline" size={30} color={"white"} />
            <Text style={styles.cardTitle}>
              Scheda Cliente
            </Text>
            <View style={[styles.dot_button, { backgroundColor: "#789AF3" }]}>
              <Ionicons name="arrow-forward-outline" size={30} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 15 }}>
          <View style={[styles.newUserCard, { padding: 15 }]}>
            <Ionicons name="add-outline" size={30} color={"white"} />
            <Text style={styles.cardTitle}>
              Nuovo Cliente
            </Text>
            <View style={[styles.dot_button, { backgroundColor: "#BA58E6" }]}>
              <Ionicons name="arrow-forward-outline" size={30} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/*Catalogo Outside Touchable Opacity*/}
      <TouchableOpacity style={{ padding: 15 }}>
        <View style={[styles.catalogCard, { padding: 15 }]}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="pricetags-outline" size={30} color={"white"} />
            <Image style={styles.catalogueLogo} source={require('../../assets/img/undraw_screen_time_vkev.png')} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingLeft: 25 }}>
              <Text style={[styles.cardTitle, { paddingBottom: 0 }]}>
                Catalogo
              </Text>
              <Text style={styles.cardSubTitle}>
                2500+ prodotti
              </Text>
            </View>
            <View style={[styles.dot_button, { backgroundColor: "#1BA7A1" }]}>
              <Ionicons name="arrow-forward-outline" size={30} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
            </View>
          </View>
        </View>
      </TouchableOpacity >
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    marginTop: 50,
    backgroundColor: "#1B233F",
    height: 260,
    borderRadius: 20,
    borderWidth: 0,
  },
  userCard: {
    marginRight: 'auto',
    backgroundColor: "#2D62ED",
    width: 175,
    height: 200,
    borderRadius: 20,
    borderWidth: 0,
  },
  newUserCard: {
    marginLeft: 'auto',
    backgroundColor: "#7D00B5",
    width: 175,
    height: 200,
    borderRadius: 20,
    borderWidth: 0,
  },
  catalogCard: {
    marginBottom: 30,
    backgroundColor: "#39D5CF",
    height: 200,
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
    paddingBottom: 25,
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
    width: 130,
    height: 90,
  }
});

export default UserHome;
