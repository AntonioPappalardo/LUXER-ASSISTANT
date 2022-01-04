import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import Container from "../../components/Container";
import { useLanguage } from "../../localization/Localization";
import { getCategoria, getCategoriaById, getNumProCategoria, getSubCategory } from "../../back/connect";
import Category from "./Category";
import uuid from 'react-native-uuid';
import axios from 'axios';

const subtitle = (id) => {
  return "" + getNumProCategoria(id) + " prodotti"
}



const Catalogo = ({ navigation, route }) => {
  const [lang, setLanguage] = useLanguage();

  //Azure Translator Config
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const subscriptionKey = "2ecf9307a6c547f08b21d68299160d60";

  let parent = route.params.categoria;
  let nextPage = 'Catalog';
  let categoria;
  let parentDetails = getCategoriaById(parent);
  if (parent) {
    categoria = getSubCategory(route.params.categoria);
    nextPage = 'Category'
  } else {
    categoria = getSubCategory(0);
  }

  const translateText = (text) => {

    return axios({
       baseURL: endpoint,
       url: '/translate',
       method: 'post',
       headers: {
           'Ocp-Apim-Subscription-Key': subscriptionKey,
           'Ocp-Apim-Subscription-Region': 'westeurope',
           'Content-type': 'application/json',
           'X-ClientTraceId': uuid.v4().toString()
       },
       params: {
           'api-version': '3.0',
           'to': lang.code
       },
       data: [{
           'text': text
       }],
       responseType: 'json'
       }).then(response => {
       return console.log(response.data[0].translations[0].text);
       }).catch(error => {
       console.log(error);
       return Promise.reject(error);
     });
   }

  const toggleBack = () => {
    if (parent) {
      navigation.navigate('Catalog')
    } else {
      navigation.goBack()
    }
  }
  const { colors, isDark } = useTheme();

  const tabBarHeight = useBottomTabBarHeight();

  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <BackButton onPress={toggleBack} />
          <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
            <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, color: colors.theme.title }}>{lang.catalogo}</Text>
          </View>
        </View>
        <ScrollView overScrollMode="never">
          {parent > 0 ?
            <Container
              key={parentDetails.id}
              image={{ uri: parentDetails.cover }}
              title={'Linea ' + parentDetails.nome}
              subTitle={subtitle(parentDetails.id)} opacity={1}
              onPress={() => navigation.navigate(nextPage, { categoria: parentDetails.id, utente: route.params.utente })}
            />
            : null}
          {categoria.map((category) => (

            <Container
              key={category.id}
              image={{ uri: category.cover }}
              title={translateText(category.nome)}
              subTitle={subtitle(category.id)} opacity={1}
              onPress={() => navigation.navigate(nextPage, { categoria: category.id, utente: route.params.utente })}
            />
          ))}

          <View style={{ marginBottom: tabBarHeight + 10 }}></View>
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
});

export default Catalogo;
