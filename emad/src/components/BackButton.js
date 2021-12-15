import React from "react";
import {TouchableOpacity, View, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../theme/ThemeProvider";

const BackButton = (props) => {

  const {colors, isDark} = useTheme();

    if (props.fixed) {
      return (
        <View>
          <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "15%",width: '15%'}}>
            <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={'#FFF'} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
          </TouchableOpacity>
        </View>
    )
    }
    if (props.black) {
      return (
        <View>
          <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "15%",width: '15%'}}>
            <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={'#17181A'} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
          </TouchableOpacity>
        </View>
    )
    }
    if (props.inverted) {
      return (
        <View>
          <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "15%",width: '15%'}}>
            <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={colors.backbutton_inverted.color} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
          </TouchableOpacity>
        </View>
    )
    }
      return (
        <TouchableOpacity activeOpacity={.75} onPress={props.onPress} style={{paddingLeft: "5%", paddingTop: "15%",width: '15%'}}>
          <Icon name={Platform.OS === "ios" ? "ios-chevron-back-outline" : "md-chevron-back-outline"} size={24} color={colors.backbutton.color} style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}/>
        </TouchableOpacity>
    )
    
    
};

export default BackButton;