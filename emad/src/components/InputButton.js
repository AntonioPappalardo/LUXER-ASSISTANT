import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const InputButton = (props) => {

  const { colors, isDark } = useTheme();

  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });
  if (!props.params.height) {
    props.params.height = 50;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (props.outline) {
      return (
        <View style={{ marginTop: props.params.marginTop, marginBottom: props.params.marginBottom, justifyContent: 'center', alignItems: 'center', width: '100%', }} >
          <View style={{ width: props.params.width }}>
            <TouchableOpacity
              activeOpacity={.75}
              style={{
                width: '100%', height: props.params.height, borderRadius: 25, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', backgroundColor: 'transparent',
                borderColor:colors.theme.primary, borderWidth: 1.5
              }}
              onPress={props.onPress}>
              <Text style={[styles.text, { fontFamily: props.params.fontFamily, color: colors.theme.primary }]}>
                {props.name}
              </Text>
  
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (props.fixed) {
      return (
        <View style={{ marginTop: props.params.marginTop, marginBottom: props.params.marginBottom, justifyContent: 'center', alignItems: 'center', width: '100%', }} >
          <View style={{ width: props.params.width, }}>
            <TouchableOpacity
              activeOpacity={.75}
              style={{
                width: '100%', height: props.params.height, borderRadius: 25, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', backgroundColor: "#FFFFFF",
              }}
              onPress={props.onPress}>
              <Text style={[styles.text, { fontFamily: props.params.fontFamily, color: "#17181A" }]}>
                {props.name}
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      )
    }
    return (
      <View style={{ marginTop: props.params.marginTop, marginBottom: props.params.marginBottom, justifyContent: 'center', alignItems: 'center', width: '100%', }} >
        <View style={{ width: props.params.width }}>
          <TouchableOpacity
            activeOpacity={.75}
            style={{
              width: '100%', height: props.params.height, borderRadius: 25, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', backgroundColor: colors.button.background,
            }}
            onPress={props.onPress}>
            <Text style={[styles.text, { fontFamily: props.params.fontFamily, color: colors.button.color }]}>
              {props.name}
            </Text>

          </TouchableOpacity>
        </View>
      </View>
    )
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