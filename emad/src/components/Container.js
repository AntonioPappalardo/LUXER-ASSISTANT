import React from "react";
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from "react-native";

const Container = (props) => {
  if (props.marginBottom === undefined) {
    var marginBottom = 0;
  } else {
    var marginBottom = props.marginBottom;
  }
  if(props.opacity) {
    var opt = props.opacity
  } else {
    var opt = 0.7
  }
  return (
    <TouchableOpacity activeOpacity={.6} style={{ margin: 20, marginBottom: marginBottom}} onPress={props.onPress}>
      <View style={[styles.container, {marginTop: props.marginTop,}]}>
        <ImageBackground source={props.image} style={{ width: '100%', height: '100%', justifyContent: 'flex-end', }} imageStyle={{ borderRadius: 10, opacity: opt }} >
          <View style={{flexDirection: "row"}}>
            <View style={{ paddingLeft: 10 }}>
              <Text style={[styles.cardTitle, { paddingBottom: 0, paddingTop: 0}]}>
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
    height: 150,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,1)',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  cardTitle: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'left',
    color: "white",
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'System',
    marginLeft: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },
  cardSubTitle: {
    textAlign: 'left',
    color: "white",
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'System',
    marginBottom: 15,
    marginLeft: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
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