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

const colorScheme = Appearance.getColorScheme();


const UserHome = ({ navigation, route }) => {
  
  const {colors, isDark} = useTheme();

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
        <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/utente/profile_1.jpg'}} style={{ width: windowWidth/2, height: windowWidth/2, alignSelf: 'center', borderRadius: windowWidth/4, marginTop: "15%" }} />
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 36, color: colors.theme.title, alignSelf: 'center', marginTop: "5%" }}>Bentornato, Marco!</Text>
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 18, color: colors.theme.subtitle, alignSelf: 'center', marginBottom: "4%" }}>La tua Dashboard</Text>
          <ScrollView style={{marginBottom: tabBarHeight}}>
          <Divider width={"100%"} opacity={1} marginBottom={12} />
          <MenuItem title={'Nuovo Cliente'} onPress={() => navigation.navigate('AddUser')} />
          <MenuItem title={'Scheda Cliente'} onPress={() => navigation.navigate('SearchUser')}/>
          <MenuItem title={'Catalogo'} onPress={() => navigation.navigate('Catalog')} />
          <MenuItem title={'Scannerizza QR Code'} onPress={() => navigation.navigate('ScanQR')} />
          <MenuItem title={'Impostazioni'} onPress={() => navigation.navigate('Settings')} />
          <MenuItem title={'Logout'}  onPress={() => navigation.replace('SplashScreen')} />
        </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
});

export default UserHome;
