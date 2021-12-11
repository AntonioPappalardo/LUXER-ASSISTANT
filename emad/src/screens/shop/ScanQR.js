import React, { useState, useEffect } from "react";
import { StyleSheet, View, Vibration, Dimensions, TouchableOpacity } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import BackButton from '../../components/BackButton';
import { useTheme } from "../../theme/ThemeProvider";
import { Camera } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Duration of the vibration
const DURATION = 3000;

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const ScanQR = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const tabBarHeight = useBottomTabBarHeight();
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
      <View style={{paddingTop: '5%'}}>
      <Camera onBarCodeScanned={scanned ? undefined : handleBarCodeScanned } flashMode={flash} style={{ height: windowHeight-tabBarHeight, width: windowWidth }}>
      <View style={styles.marker} />
      <TouchableOpacity style={colors.buttonTorch}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off);
            }}>
      {flash ? 
       <Ionicons name='flashlight' size={30} color={colors.iconTorch.on} style={{padding:10}}/>
       : 
       <Ionicons name='flashlight' size={30} color={colors.iconTorch.off} style={{padding:10}}/>
       }
      </TouchableOpacity>
      </Camera>

      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  buttonStyle: {
      backgroundColor: '#8ad24e',
      borderRadius:10
  },
  marker:{
    alignSelf:'center', 
    marginVertical:'40%',
    height:250, 
    width:250, 
    borderWidth:5, 
    borderColor:'white', 
    borderRadius:20, 
    padding:20
  }
});

export default ScanQR;