import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();

const InputButton = (props) => {
  if (colorScheme === 'dark') {
    var colorTheme = dark;
  } else {
    var colorTheme = light;
  }
  
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (props.fixed) {
      return (
        <View style={{ marginTop: props.params.marginTop, marginBottom: props.params.marginBottom, justifyContent: 'center', alignItems: 'center', width: '100%', }} >
          <View style={{ width: props.params.width }}>
            <TouchableOpacity
              activeOpacity={.75}
              style={{
                width: '100%', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', backgroundColor: "#FFFFFF",
              }}
              onPress={props.onPress}>
              <Text style={[styles.text, { fontFamily: props.params.fontFamily, color: "#17181A" }]}>
                {props.name}
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View style={{ marginTop: props.params.marginTop, marginBottom: props.params.marginBottom, justifyContent: 'center', alignItems: 'center', width: '100%', }} >
          <View style={{ width: props.params.width }}>
            <TouchableOpacity
              activeOpacity={.75}
              style={{
                width: '100%', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', backgroundColor: colorTheme.button.background,
              }}
              onPress={props.onPress}>
              <Text style={[styles.text, { fontFamily: props.params.fontFamily, color: colorTheme.button.color }]}>
                {props.name}
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
}

  function displayicon(props) {
    if (props.secure !== 'undefined') {
    } else {
      <View style={[styles.circleIcon, { backgroundColor: "#789AF3" }]}>
        <Icon name={props.icon} size={25} color={"white"} style={{ transform: [{ rotateZ: props.rotation }], }} />
      </View>
    }
  }

  const styles = StyleSheet.create({
    circleIcon: {
      position: 'absolute',
      right: 15,
      top: 7,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      height: 40,
      width: 40,
      borderRadius: 20
    },
    text: {
      fontSize: 14,
    },
    button: {
      backgroundColor: 'black'
    }
  });
  export default InputButton;