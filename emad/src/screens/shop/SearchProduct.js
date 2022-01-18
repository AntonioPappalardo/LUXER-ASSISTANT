import React, { useState } from 'react';
import {View, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import InputText from "../../components/InputText";
import BackButton from '../../components/BackButton';
import ProductBox from "../../components/ProductBox";
import Divider from '../../components/Divider';
import { useLanguage } from "../../localization/Localization";
import { getImmagineByProdotto, getProdotto } from '../../back/connect';

var cerco=''
const SearchProduct = ({ navigation,route }) => {
  const[prodotti,setProdotti]=useState(getProdotto());
  const {colors, isDark} = useTheme();
  const [lang, setLanguage] = useLanguage();

  const tabBarHeight = useBottomTabBarHeight()+10;

  const [prodotto, setProdotto] = React.useState('');

  const filteringText=(cerca)=>{
    setProdotto(cerca)
    cerco=cerca
    setProdotti(getProdotto().filter(prod => (prod.nome.toLowerCase().includes(cerco.toLowerCase()) || prod.ean13.includes(cerco))))
}
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
        <View style={{ alignItems: "center", marginBottom: 15, marginTop: '12%' }}>
         
            <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
              name={lang.inputProdName} icon="search" rotation="0deg" value={prodotto} onChangeText={cerca=>filteringText(cerca)} secure='false' left='true' 
              right={
            <TouchableOpacity onPress={() => navigation.navigate('ScanQR')} activeOpacity={.75} style={{marginTop: 5}}>
              <Icon name={Platform.OS === "ios" ? "ios-qr-code-outline" : "md-qr-code-outline"} size={20} 
              style={{marginLeft:15, marginTop:3}} 
              color={colors.floatingInput.icon} />
            </TouchableOpacity>}/>
        </View>
        <Divider width="100%" />
        <ScrollView overScrollMode="never">
        <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
        {
          prodotti.map((prodotto)=>(
            <ProductBox key={prodotto.id} name={prodotto.nome} price={prodotto.prezzo} reference={prodotto.ean13}
            image={{ uri:getImmagineByProdotto(prodotto.id) }}  onPress={() => navigation.navigate('ProductPage',{prodotto:prodotto.id,utente:route.params.user})}/>
          ))
        }
        </View>
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
        </ScrollView>
      </View>
    )
  }
};


export default SearchProduct;
