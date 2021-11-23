import React from "react";
import {TouchableOpacity, Text, Platform } from "react-native";
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import Icon from 'react-native-vector-icons/Ionicons'

const colorScheme = Appearance.getColorScheme();

const BackButton = (props) => {

    if (colorScheme === 'dark') {
        var colorTheme = dark;
      } else {
        var colorTheme = light;
      }
    if (typeof(props.type) === 'string') {
      return (
        <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "10%"}}>
          <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={'#FFF'} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
        </TouchableOpacity>
    )
    } else {
      return (
        <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "10%"}}>
          <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={colorTheme.backbutton.color} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
        </TouchableOpacity>
    )
    }
    
};

export default BackButton;