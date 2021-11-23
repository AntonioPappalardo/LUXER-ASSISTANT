import React from "react";
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const Container = (props) => {
  if (props.params.marginBottom === undefined) {
    props.params.marginBottom = 0;
  }
  return (
    <TouchableOpacity activeOpacity={.6} style={{ margin: 20, marginBottom: props.params.marginBottom}} onPress={() => navigation.navigate('Catalogo')}>
      <View style={[styles.container, {marginTop: props.params.marginTop,}]}>
        <ImageBackground source={props.image} style={{ width: '100%', height: '100%', justifyContent: 'flex-end', }} imageStyle={{ borderRadius: 10, opacity: 0.7 }} >
          <View style={{ flexDirection: "row", }}>
            <View style={{ paddingLeft: 10 }}>
              <Text style={[styles.cardTitle, { paddingBottom: 0, paddingTop: 0 }]}>
                {props.title}
              </Text>
              <Text style={styles.cardSubTitle}>
                {props.subTitle}
              </Text>
            </View>
            
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity >
  )
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,1)',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'left',
    color: "white",
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'System',
    marginLeft: 15
  },
  cardSubTitle: {
    textAlign: 'left',
    color: "white",
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'System',
    marginBottom: 15,
    marginLeft: 15
  },
  dot_button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginTop: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: 15,
    marginRight: 15
  },
});
export default Container;