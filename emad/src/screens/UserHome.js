import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Appearance, Dimensions} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../theme/ThemeProvider";
import BackButton from '../components/BackButton';
import MenuItem from '../components/MenuItem';
import Divider from '../components/Divider';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();


const UserHome = ({ navigation }) => {
  
  const {colors, isDark} = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const tabBarHeight = useBottomTabBarHeight();
  
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
        <BackButton onPress={() => { navigation.goBack() }}/>
        <Image source={require("../../assets/img/dashboard_profile.jpg")} style={{ width: windowWidth/2, height: windowWidth/2, alignSelf: 'center', borderRadius: windowWidth/4, marginTop: "5%" }} />
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 36, color: colors.theme.title, alignSelf: 'center', marginTop: "5%" }}>Bentornato!</Text>
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 18, color: colors.theme.subtitle, alignSelf: 'center', marginBottom: "4%" }}>La tua Dashboard</Text>
          <ScrollView style={{marginBottom: tabBarHeight}}>
          <Divider width={"100%"} opacity={1} marginBottom={12} />
          <MenuItem title={'Nuovo Cliente'} onPress={() => navigation.navigate('AddUser')} />
          <MenuItem title={'Scheda Cliente'} onPress={() => navigation.navigate('UserPage')}/>
          <MenuItem title={'Catalogo'} onPress={() => navigation.navigate('Catalogo')} />
          <MenuItem title={'Scannerizza QR Code'} onPress={() => navigation.navigate('ScanQR')} />
          <MenuItem title={'Impostazioni'} onPress={() => navigation.navigate('Impostazioni')} />
          <MenuItem title={'Logout'} />
        </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
});

export default UserHome;
