import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect}, { Component } from "react";
import { StyleSheet, Image, View, Text, Button, Vibration, PermissionsAndroid, Platform, Linking, Appearance} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import BarcodeMask from 'react-native-barcode-mask';
import { useTheme } from "../theme/ThemeProvider";

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from "react-native-camera";


//Duration of the vibration
const DURATION = 3000;

const ScanQR = ({ navigation }) => {
    const {colors, isDark} = useTheme();

    //To start the vibration for the defined Duration
    const startVibration = () => {
        Vibration.vibrate(DURATION);
      };

    //To Stop the vibration
    const stopVibration = () => {
    Vibration.cancel();
    };

    const[hasPermission,setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not Scanned");

    class ScanScreen extends Component {
        onSuccess = e => {
          Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
          );
        };
    }
    const askCameraPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted');
        })()
    }

    useEffect(() => {
        askCameraPermission();
    },[]);

    const barCodeScanned = ({type,data}) => {
        setScanned(true);
        startVibration();
        stopVibration(); 
        setText(data);
        navigation.goBack();
        console.log('Type: '+ type + '\nData: '+ data);
    }
    if(Platform.OS === 'ios'){
        return(
            
            <View style={styles.barcodebox}>
                <BarCodeScanner onBarCodeScanned ={scanned ? undefined: barCodeScanned} style={styles.container}/>    
                <BarcodeMask width={250} height={250} showAnimatedLine={false} edgeHeight={35} edgeWidth={35} edgeBorderWidth={10} edgeColor={"#FFF"} edgeRadius={10} outerMaskOpacity={0.6}/>
            </View>
        )
    } else{
        return (
            <QRCodeScanner onRead={this.onSuccess} flashMode={RNCamera.Constants.FlashMode.torch}/>
          );
    }
};



const styles = StyleSheet.create({
    container: {
      height:'100%' 
    }
  });

export default ScanQR;