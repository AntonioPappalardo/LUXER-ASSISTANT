import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { StyleSheet, Image, View, Text, Button, Vibration, Appearance} from "react-native";
import {QRCodeScanner} from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";
import BarcodeMask from 'react-native-barcode-mask';
import BackButton from '../components/BackButton';
import { useTheme } from "../theme/ThemeProvider";


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

    <QRCodeScanner onRead={this.onSuccess} flashMode={RNCamera.Constants.FlashMode.torch}
    topContent={<Text style={styles.centerText}>
                    Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.</Text>
    }
    bottomContent={
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>OK. Got it!</Text>
      </TouchableOpacity>
    }
  />

};



const styles = StyleSheet.create({
    container: {
      height:'100%' 
    }
  });

export default ScanQR;