import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { StyleSheet, Image, View, Text, Button, Vibration, Platform, PermissionsAndroid, Appearance} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
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

    const[hasPermission,setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not Scanned");

    const askCameraPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted');
        })()
    }

    useEffect(() => {
        askCameraPermission();
    },[]);

    

    const barCodeScannedSuccess = ({type,data}) => {
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
                <BarCodeScanner onBarCodeScanned ={scanned ? undefined : barCodeScannedSuccess} style={styles.container}/>    
                <BarcodeMask width={250} height={250} showAnimatedLine={false} edgeHeight={35} edgeWidth={35} edgeBorderWidth={10} edgeColor={"#FFF"} edgeRadius={10} outerMaskOpacity={0.6}/>
            </View>
        )
    } else {
        return(
            <View style={styles.barcodebox}>
                <BarCodeScanner onBarCodeScanned ={scanned ? undefined : barCodeScannedSuccess} style={styles.container}/>    
                <BarcodeMask width={250} height={250} showAnimatedLine={false} edgeHeight={35} edgeWidth={35} edgeBorderWidth={10} edgeColor={"#FFF"} edgeRadius={10} outerMaskOpacity={0.6}/>
            </View>
        )
    }

};



const styles = StyleSheet.create({
    container: {
      height:'100%' 
    }
  });

export default ScanQR;