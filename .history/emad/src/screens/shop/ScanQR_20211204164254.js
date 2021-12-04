import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Image, Vibration,  TouchableOpacity, Dimensions } from "react-native";
import BarcodeMask from 'react-native-barcode-mask';
import BackButton from '../../components/BackButton';
import { useTheme } from "../../theme/ThemeProvider";
import { Camera } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Torch from 'react-native-torch';


//Duration of the vibration
const DURATION = 3000;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScanQR = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned");
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

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
      <Camera onBarCodeScanned={scanned ? undefined : handleBarCodeScanned } style={{ height: windowHeight }}>
      <View style={{alignSelf:'center', marginVertical:'40%' ,flexDirection:1,height:250, width:250, borderWidth:5, borderColor:'white', borderRadius:10, padding:20}} />
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonStyle} onPress={handlePress}>
      <Ionicons name='flashlight' size={25} /> 
      </TouchableOpacity>
      </Camera>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  }
});

export default ScanQR;