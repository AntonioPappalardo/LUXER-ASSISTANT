import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Appearance, Dimensions} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from '../../components/BackButton';
import MenuItem from '../../components/MenuItem';
import Divider from '../../components/Divider';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { getUtenteById } from '../../back/connect';
import { useLanguage } from "../../localization/Localization";
import { createCart } from '../../back/cart';

const colorScheme = Appearance.getColorScheme();


const UserHome = ({ navigation, route }) => {
  var utente = getUtenteById(route.params.user)
  const {colors, isDark} = useTheme();
  const [lang, setLanguage] = useLanguage();

  const windowWidth = Dimensions.get('window').width;

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
         <StatusBar style={isDark? 'light': 'dark'}/>
        <Image source={{uri:utente.avatar}} style={{ width: windowWidth/2, height: windowWidth/2, alignSelf: 'center', borderRadius: windowWidth/4, marginTop: "15%" }} />
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 36, color: colors.theme.title, alignSelf: 'center', marginTop: "5%" }}>{utente.sesso ==='Maschio'? lang.helloMaschio: lang.helloFemmina}, {utente.nome}!</Text>
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 18, color: colors.theme.subtitle, alignSelf: 'center', marginBottom: "4%" }}>{lang.dashboard}</Text>
          <ScrollView overScrollMode="never" style={{marginBottom: tabBarHeight}}>
          <Divider width={"100%"} opacity={1} marginBottom={12} />
          <MenuItem title={lang.nuovoCliente} onPress={() => navigation.navigate('AddUser')} />
          {/*<MenuItem title={lang.carrello} onPress={() => navigation.navigate('Cart')}/>*/}
          <MenuItem title={lang.catalogo} onPress={() => navigation.navigate('Catalog')} />
          <MenuItem title={lang.scan} onPress={() => navigation.navigate('ScanQR')} />
          <MenuItem title={lang.impostazioni} onPress={() => navigation.navigate('Settings')} />
          <MenuItem title={lang.logout}  onPress={() => navigation.replace('SplashScreen')} />
        </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
});

export default UserHome;
