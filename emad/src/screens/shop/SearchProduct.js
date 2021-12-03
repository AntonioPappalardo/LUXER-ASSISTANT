import React from 'react';
import {View, ScrollView, Appearance, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import InputText from "../../components/InputText";
import BackButton from '../../components/BackButton';
import ProductBox from "../../components/ProductBox";
import Divider from '../../components/Divider';

const SearchProduct = ({ navigation }) => {

  const {colors, isDark} = useTheme();

  const tabBarHeight = useBottomTabBarHeight()+10;

  const [prodotto, setProdotto] = React.useState('');

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
        <BackButton onPress={() => { navigation.goBack() }} />
        <View style={{ alignItems: "center", marginBottom: 15 }}>
         
            <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
              name="Nome o Codice Prodotto" icon="search" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false' />
            <TouchableOpacity activeOpacity={.75} style={{position: 'absolute', right: 15,top:15,justifyContent:"center", paddingLeft: 15}}>
              <Icon name={Platform.OS === "ios" ? "ios-qr-code-outline" : "md-qr-code-outline"} size={20} 
              style={{}} 
              color={colors.floatingInput.icon} />
            </TouchableOpacity>
        </View>
        <Divider width="100%" />
        <ScrollView>
          <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
            <ProductBox name={"Borsa Chanel 19"} price={"8500"} reference={"1273100"}
              image={{ uri: 'https://tinyurl.com/29dbrt9m' }} />
            <ProductBox name={"Eau de Parfum\nChanel n°5"} price={"145"} reference={"1231283"}
              image={{ uri: 'https://tinyurl.com/nss9ywwk' }} />
            <ProductBox name={"Chanel Pink Sandals"} price={"8645"} reference={"1231283"}
              image={{ uri: 'https://tinyurl.com/e8dfvbzs' }} />
               <ProductBox name={"Borsa Chanel 19"} price={"8500"} reference={"1273100"}
              image={{ uri: 'https://tinyurl.com/29dbrt9m' }} />
            <ProductBox name={"Eau de Parfum Chanel n°5"} price={"145"} reference={"1231283"}
              image={{ uri: 'https://tinyurl.com/nss9ywwk' }} />
            <ProductBox name={"Chanel Pink Sandals"} price={"8645"} reference={"1231283"}
              image={{ uri: 'https://tinyurl.com/e8dfvbzs' }} />
          </View>
          <View style={{marginBottom: tabBarHeight+ 10}}></View>
        </ScrollView>
      </View>
    )
  }
};


export default SearchProduct;
