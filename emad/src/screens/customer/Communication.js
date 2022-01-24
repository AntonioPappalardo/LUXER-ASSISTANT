import React from "react";
import {View, ScrollView, Text, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import InputButton from "../../components/InputButton";
import MessageBox from '../../components/MessageBox';
import { useLanguage } from "../../localization/Localization";
import { getClienteById } from "../../back/connect";
const Communication = ({ navigation, route }) => {

  const {colors, isDark} = useTheme();
  const tabBarHeight = useBottomTabBarHeight();
  const [lang, setLanguage] = useLanguage();
  const [Message, onChangeText] = React.useState('');
  const telefono = route.params.cliente.telefono;
  const email = route.params.cliente.email;
  function getSMSDivider() {
    return Platform.OS === "ios" ? "&" : "?";
  }

  return (
    <View style={{ backgroundColor: colors.theme.background, height: "100%" }}>
      <View style={{flexDirection: 'row', marginBottom:20}}>
          <BackButton onPress={() => { navigation.goBack() }} />
          <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
          <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>{lang.contatta}</Text>
          </View>
      </View>
      <ScrollView overScrollMode="never" style={{ marginTop: "20%", width: "75%", alignSelf: "center" }}>

        <MessageBox value={Message} onChangeText={onChangeText} theme={colors} icon="reader-outline"/>

        <View style={{ marginTop: 50, flexDirection: "row", width: 100, justifyContent: "center" }} alignSelf="center">
          <MaterialCommunityIcons name="message-text-outline" color="#a9a303" size={35} onPress={() => { Linking.openURL(`sms:${telefono}${getSMSDivider()}body=${Message}`) }} style={{ marginLeft: 4.5, marginRight:20 }} />
          <MaterialCommunityIcons name="email-outline" color="#2da5e1" size={35} onPress={() => { Linking.openURL(`mailto:${email}?subject=${'Luxer Assistant'}&body=${Message}`) }} style={{ marginRight: 12 }} />
          <MaterialCommunityIcons name="whatsapp" color="#2ac54d" size={35} onPress={() => { Linking.openURL(`whatsapp://send?text=${Message}&phone=${telefono}`) }} style={{ marginLeft: 12 }} />
        </View>
        <InputButton params={{ marginTop: '30%', width: "75%" }} name={lang.chiama} icon="arrow-forward-outline" rotation="-45deg" onPress={()=>{Linking.openURL( `tel:${telefono}`);}}/>

        <View style={{marginBottom: tabBarHeight+ 10}}></View>
      </ScrollView>
    </View>
  )
};

export default Communication;
