import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import BackButton from "../components/BackButton";
import { AuthContext } from "./context";
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();

const Login = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (colorScheme === 'dark') {
    var colorTheme = dark;
  } else {
    var colorTheme = light;
  }

  const { signIn } = React.useContext(AuthContext)
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screen}>
        <View style={styles.form}>
          <BackButton onPress={() => navigation.navigate('SplashScreen')} />
          <Text style={{ fontSize: 30, fontFamily: 'SFProDisplayBold', width: "100%", color: 'white', alignSelf: "center", marginLeft: "10%" }}>
            Accedi{"\n"}al tuo account
          </Text>
        </View>
        <View style={{ backgroundColor: colorTheme.theme.background, height: "100%", alignItems: "center", paddingTop: "5%" }}>
          <InputText params={{ marginTop: 25, width: "75%" }} name="Email" icon="mail-outline" rotation="0deg" value={username} onChangeText={setUsername} secure='false' />
          <InputText params={{ marginTop: 10, width: "75%" }} name="Password" icon="key-outline" rotation="0deg" value={password} onChangeText={setPassword} secure='true' />

          <InputButton params={{ marginTop: "5%", width: "75%", fontFamily: 'SFProDisplayMedium' }} name="ACCEDI" icon="arrow-forward-outline" rotation="-45deg"
            onPress={() => navigation.navigate('TabBar')} />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#282B32"
  },
  screen: {
    height: "100%",
  }
});

export default Login;
