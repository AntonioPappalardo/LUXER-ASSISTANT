import React from 'react';
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

const SearchProduct = ({ navigation }) => {

  const {colors, isDark} = useTheme();
  const [lang, setLanguage] = useLanguage();

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
        <View style={{ alignItems: "center", marginBottom: 15, marginTop: '12%' }}>
         
            <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
              name={lang.inputProdName} icon="search" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false' left='true' 
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
        <ProductBox name={"Mini borsa Prada Cleo in pelle spazzolata"} price={"1780"} reference={"1273100"}
            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p3_1.webp' }}/>
        <ProductBox name={"Camicia in chiffon con micro borchie"} price={"2600"} reference={"1231283"}
            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p11_1.webp' }} />
        <ProductBox name={"Giacca corta in kid mohair"} price={"1900"} reference={"1273100"}
            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p13_1.webp' }} />
        <ProductBox name={"Borsa Prada Cleo in raso con applicazioni"} price={"2600"} reference={"1231283"}
            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p5_1.webp' }} />
        <ProductBox name={"Borsa Prada Signaux in nappa imbottita"} price={"2200"} reference={"1231283"}
            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p7_1.webp' }} />
        <ProductBox name={"Cappello da pescatore con paillettes"} price={"980"} reference={"1231283"}
            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p14_1.webp' }} />
        </View>
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
        </ScrollView>
      </View>
    )
  }
};


export default SearchProduct;
