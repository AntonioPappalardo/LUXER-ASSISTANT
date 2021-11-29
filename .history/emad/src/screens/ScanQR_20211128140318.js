import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { StyleSheet, Image, View, Text, Button, Vibration, TouchableOpacity, ScrollView, Appearance, SafeAreaView } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import BackButton from '../components/BackButton';

//Duration of the vibration
const DURATION = 1000;

const ScanQR = ({ navigation }) => {

    const startVibration = () => {
        //To start the vibration for the defined Duration
        Vibration.vibrate(DURATION);
      };
    
      const stopVibration = () => {
        //To Stop the vibration
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

    const barCodeScanned = ({type,data}) => {
        setScanned(true);
        Vibration.vibrate(DURATION);
        setText(data);
        console.log('Type: '+ type + '\nData: '+ data);
    }

   
    return(
        <SafeAreaView>
                <View style={styles.barcodebox}>
                <BarCodeScanner onBarCodeScanned ={scanned ? undefined: barCodeScanned} style={styles.container}/>
                
            </View>
        </SafeAreaView>
    )

};



const styles = StyleSheet.create({
    container: {
      height:'100%',
      
    },
  });

export default ScanQR;