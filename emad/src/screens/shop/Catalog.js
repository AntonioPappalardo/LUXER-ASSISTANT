import React from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import Container from "../../components/Container";


const Catalogo = ({navigation}) => {

  const {colors, isDark} = useTheme();

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
      <View style={{backgroundColor: colors.theme.background, flex: 1}}>
        <BackButton onPress={() => { navigation.goBack() }}/>
        <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 24, color: colors.theme.title, alignSelf: 'center', }}> Catalogo</Text>
        <ScrollView>
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/1.webp'}} title="Donna" subTitle="221 prodotti" opacity={1} onPress={() => navigation.navigate('Category')}/>
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/2.webp'}} title="Uomo" subTitle="221 prodotti"  opacity={1}/>
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/3.webp'}} title="Borse Donna" subTitle="221 prodotti"  opacity={1}/>
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/4.webp'}} title="Abbigliamento Donna" subTitle="221 prodotti" opacity={1} />
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/5.webp'}} title="Calzature Donna" subTitle="221 prodotti" opacity={1} />
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/6.webp'}} title="Accessori Donna" subTitle="221 prodotti"  opacity={1}/>
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/7.webp'}} title="Borse Uomo" subTitle="221 prodotti"  opacity={1}/>
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/8.webp'}} title="Abbigliamento Uomo" subTitle="221 prodotti" opacity={1} />
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/9.webp'}} title="Calzature Uomo" subTitle="221 prodotti" opacity={1} />
        <Container image={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/categorie/10.webp'}} title="Accessori Uomo" subTitle="221 prodotti"  opacity={1}/>
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
      </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
});

export default Catalogo;
