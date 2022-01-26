import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Vibration, Dimensions, TouchableOpacity, Platform } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Modal from 'react-native-modal'
import BackButton from '../../components/BackButton';
import InputButton from "../../components/InputButton";
import { useTheme } from "../../theme/ThemeProvider";
import { Camera } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLanguage } from "../../localization/Localization";
import { getProdottoByReference } from "../../back/connect";

//Duration of the vibration
const DURATION = 2000;

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const ScanQR = ({ navigation,route }) => {
  
  const { colors, isDark } = useTheme();
  const tabBarHeight = useBottomTabBarHeight();

  const [lang, setLanguage] = useLanguage();
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorText, setErrorText] = useState('Default');
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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleBarCodeScanned = ({ type, data }) => {
      var prodotto = getProdottoByReference(data)

      if(prodotto == undefined){
        setErrorText(lang.codiceProdotto)
        setModalVisible(true)

      } else{  
          setScanned(true);
          startVibration();
          stopVibration();
          setText(data);
          navigation.replace('ProductPage',{prodotto:prodotto.id,utente:route.params.utente})
      }
      
    
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
     <Modal
          isVisible={isModalVisible}
          statusBarTranslucent={true}
          animationIn="bounceIn"
          animationOut="fadeOutDownBig"
          hasBackdrop={true}
          backdropOpacity={10}
          backdropColor={"rgba(0, 0, 0, 0.3)"}
          useNativeDriverForBackdrop={true}
          hideModalContentWhileAnimating={true}
          deviceHeight={windowHeight}
        >
          <View style={{ padding: 20 }}>
            <View style={colors.topModal}>
              <Ionicons name="close-circle-outline" size={75} color={'#FFFFFF'} />
            </View>
            <View style={colors.modalContent}>
              <Text style={{ color: colors.theme.primary, textAlign: 'center' }}>{errorText}</Text>
              <InputButton params={{ marginTop: '5%', width: "75%" }}
                name={lang.conferma} icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
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