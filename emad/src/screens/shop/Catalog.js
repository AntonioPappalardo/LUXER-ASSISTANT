import React from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import Container from "../../components/Container";
import { getCategoria, getNumProCategoria } from "../../db/connect";
import Category from "./Category";

const subtitle=(id)=>{
 return ""+getNumProCategoria(id)+" prodotti"
}
const Catalogo = ({navigation, route}) => {
  const categoria= getCategoria();

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
        <View style={{flexDirection: 'row', marginBottom:20}}>
            <BackButton onPress={() => { navigation.goBack() }} />
            <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
            <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, color: colors.theme.title}}>Catalogo</Text>
            </View>
        </View>
        <ScrollView>
          {
          categoria.map((category)=>(
            <Container key={category.id} image={{uri:category.cover}} title={category.nome} subTitle={subtitle(category.id)} opacity={1} onPress={() => navigation.navigate('Category',{categoria:category.id,utente:route.params.utente})}/>
          ))}
        
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
      </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
});

export default Catalogo;
