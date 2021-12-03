import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import InputButton from "../../components/InputButton";
import MessageBox from '../../components/MessageBox';

const Communication = ({ navigation }) => {

  const {colors, isDark} = useTheme();

  const tabBarHeight = useBottomTabBarHeight();

  const [Message, onChangeText] = React.useState('');
  
  return (
    <View style={{ backgroundColor: colors.theme.background, height: "100%" }}>
      <BackButton onPress={() => { navigation.goBack() }} />
      <ScrollView style={{ marginTop: "5%", width: "75%", alignSelf: "center" }}>

        <MessageBox value={Message} onChangeText={onChangeText} theme={colors} icon="mail-open-outline"/>

        <View style={{ marginTop: 25, flexDirection: "row", width: 100, justifyContent: "center" }} alignSelf="center">
          <MaterialCommunityIcons name="telegram" color="#2da5e1" size={35} onPress={() => { console.log("Apri Telegram " + Message) }} style={{ marginRight: 7.5 }} />
          <MaterialCommunityIcons name="whatsapp" color="#2ac54d" size={35} onPress={() => { console.log("Apri Whatsapp " + Message) }} style={{ marginLeft: 7.5 }} />
        </View>
        <InputButton params={{ marginTop: 100, width: "100%" }} name="Invia" icon="arrow-forward-outline" rotation="-45deg"
          onPress={() => { console.log("Invia Messaggio " + Message) }} />
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
      </ScrollView>
    </View>
  )
};

export default Communication;
