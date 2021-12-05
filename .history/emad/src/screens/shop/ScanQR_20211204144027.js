import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Vibration, Dimensions } from "react-native";
import BarcodeMask from 'react-native-barcode-mask';
import BackButton from '../../components/BackButton';
import { useTheme } from "../../theme/ThemeProvider";
import { Camera } from 'expo-camera';
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

//Duration of the vibration
const DURATION = 3000;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScanQR = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(true);
      
    console.log(hasPermission)
    })();
  }, []);

  const handleBarCodeScanned  = ({ type, data }) => {
  
    setScanned(true);
    startVibration();
    stopVibration();
    setText(data);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.goBack();
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
      <BackButton onPress={() => { navigation.goBack() }} />
      <View style={{ backgroundColor: 'red' }}>
      </View>
      <View>
      <Camera onBarCodeScanned={scanned ? undefined : handleBarCodeScanned } came style={{ height: windowHeight }} />
      <Icon name="ios-qr-scanner" size={windowWidth * 0.75} color={iconScanColor}/>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({

});

export default ScanQR;