import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Appearance, Dimensions} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import BackButton from '../components/BackButton';
import MenuItem from '../components/MenuItem';
import Divider from '../components/Divider';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();


const Impostazioni = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const tabBarHeight = useBottomTabBarHeight();
  if (colorScheme === 'dark') {
    var colorTheme = dark;
  } else {
    var colorTheme = light;
  }
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: colorTheme.theme.background, flex: 1 }}>
        <BackButton onPress={() => { navigation.goBack() }}/>
          <ScrollView style={{marginBottom: tabBarHeight}}>
          <Divider width={"100%"} opacity={1} marginBottom={20} />
          <MenuItem title={'Info su Luxer Assistant'} onPress={() => navigation.navigate('AddUser')} />
          <MenuItem title={'Note sulla'} onPress={() => navigation.navigate('Catalogo')} />
        </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
});

export default Impostazioni;
