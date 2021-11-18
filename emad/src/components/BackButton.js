import React from "react";
import {TouchableOpacity, View } from "react-native";
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
      if (props.type === 'fixed') {
        colorTheme.backbutton.color = 'white';
      } 
    return (
        <TouchableOpacity activeOpacity={.75} onPress={props.onPress}>
            <Icon name="chevron-back-outline" size={20} color={"white"} style={{marginTop: "10%"}} />
        </TouchableOpacity>
    )
};

export default BackButton;