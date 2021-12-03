import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView, Appearance} from "react-native";
import Container from "../components/Container";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import BackButton from "../components/BackButton";

const colorScheme = Appearance.getColorScheme();

const Impostazioni = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  if (colorScheme === 'dark') {
    var colorTheme = dark;
  } else {
    var colorTheme = light;
  }
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require-('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{backgroundColor: colorTheme.theme.background, flex: 1}}>
        <BackButton onPress={() => { navigation.goBack() }}/>
        <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 32, color: colorTheme.theme.title, alignSelf: 'center', }}> Catalogo</Text>
        <ScrollView>
        <Container params={{}} image={require('../../assets/4.jpg')} title="Borse e Accessori" subTitle="221 prodotti" />
        <Container params={{}} image={require('../../assets/3.jpg')} title="Scarpe Uomo" subTitle="221 prodotti" />
        <Container params={{}} image={require('../../assets/2.jpg')} title="Scarpe Donna" subTitle="221 prodotti" />
        <Container params={{}} image={require('../../assets/1.jpg')} title="Intimo Donna" subTitle="221 prodotti" />
        <Container params={{}} image={require('../../assets/1.jpg')} title="Intimo Donna" subTitle="221 prodotti" />
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
      </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
});

export default Impostazioni;
