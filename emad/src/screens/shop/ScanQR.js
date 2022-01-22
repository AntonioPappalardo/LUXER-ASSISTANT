import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Vibration, Dimensions, TouchableOpacity, Platform } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import BackButton from '../../components/BackButton';
import { useTheme } from "../../theme/ThemeProvider";
import { Camera } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLanguage } from "../../localization/Localization";
import { getProdottoByReference } from "../../back/connect";
//Duration of the vibration
const DURATION = 3000;

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const ScanQR = ({ navigation,route }) => {
  
  const { colors, isDark } = useTheme();
  const tabBarHeight = useBottomTabBarHeight();

  const [lang, setLanguage] = useLanguage();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  
  const [text, setText] = useState("Not Scanned");
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(true);
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    
    setScanned(true);
    startVibration();
    stopVibration();
    setText(data);
    var prodotto = getProdottoByReference(data)
    navigation.replace('ProductPage',{prodotto:prodotto.id,utente:route.params.utente})
  }
  const setScannedFalse = () => {
    setScanned(false);
  }

  //To start the vibration for the defined Duration
  const startVibration = () => {
    Vibration.vibrate(DURATION);
  };

  //To Stop the vibration
  const stopVibration = () => {
    Vibration.cancel();
  };

  return (

    <View style={{ backgroundColor: colors.theme.background, flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <BackButton onPress={() => { navigation.goBack() }} />
        <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
          <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{lang.scan}</Text>
        </View>
      </View>
      <Camera onBarCodeScanned={scanned ? setScannedFalse : handleBarCodeScanned} flashMode={flash} style={{ height: windowHeight - tabBarHeight, width: windowWidth }}>
        <View style={styles.marker} />
        <TouchableOpacity style={colors.buttonTorch}
          activeOpacity={0.75}
          onPress={() => {
            setFlash(
              flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off);
          }}>
          {flash ?
            <Ionicons name='flashlight' size={30} color={colors.iconTorch.on} style={{ padding: 10 }} />
            :
            <Ionicons name='flashlight' size={30} color={colors.iconTorch.off} style={{ padding: 10 }} />
          }
        </TouchableOpacity>
      </Camera>

    </View>
  )

};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#8ad24e',
    borderRadius: 10
  },
  marker: {
    alignSelf: 'center',
    marginVertical: Platform.OS === "android" ? '40%':'30%',
    height: 250,
    width: 250,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    padding: 20
  }
});

export default ScanQR;