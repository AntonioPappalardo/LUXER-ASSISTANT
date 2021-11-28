import React from "react";
import {TouchableOpacity, View, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../theme/ThemeProvider";

const BackButton = (props) => {

  const {colors, isDark} = useTheme();

    if (typeof(props.type) === 'string') {
      return (
        <View>
          <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "10%",width: 50}}>
            <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={'#FFF'} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
          </TouchableOpacity>
        </View>
    )
    } else {
      return (
        <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "10%",width: 50}}>
          <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={colors.backbutton.color} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
        </TouchableOpacity>
    )
    }
    
};

export default BackButton;