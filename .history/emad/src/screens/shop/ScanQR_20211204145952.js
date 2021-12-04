import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Vibration, Dimensions } from "react-native";
import BarcodeMask from 'react-native-barcode-mask';
import BackButton from '../../components/BackButton';
import { useTheme } from "../../theme/ThemeProvider";
import { Camera } from 'expo-camera';

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
    })();
  }, []);

  const handleBarCodeScanned  = ({ type, data }) => {
    setScanned(true);
    startVibration();
    stopVibration();
    setText(data);
    console.log(`Type: ${type}\nData: ${data}`);
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
      <View>
      <Camera onBarCodeScanned={scanned ? undefined : handleBarCodeScanned } style={{ height: windowHeight }} />
      <BarcodeMask width={250} height={250} showAnimatedLine={true} animatedLineColor={'#FFF'} lineAnimationDuration={0.7} edgeHeight={35} edgeWidth={35} edgeBorderWidth={10} edgeColor={"#FFF"} edgeRadius={10} outerMaskOpacity={0.6} />
      </View>
    </View>
  )

};

const styles = StyleSheet.create({

});

export default ScanQR;