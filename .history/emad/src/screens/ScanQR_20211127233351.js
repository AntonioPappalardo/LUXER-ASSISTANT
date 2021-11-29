import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, Appearance } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import ExitButton from '../components/ExitButton';

const ScanQR = ({ navigation }) => {
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
        setText(data);
        console.log('Type: '+ type + '\nData: '+ data);
    }

    if(hasPermission === null){
        return(
            <View>
            <Text>Richiesta permesso Camera</Text>
        </View>
        )
    }

    if(hasPermission === false){
        return (
        <View>
        <Text style={{margin:10}}>Nessun accesso alla camera</Text>
        <Button title={'Allow Camera'} onPress={() => askCameraPermission()}/>
    </View>
        )
    }

    return(
        <View>
            <ExitButton style={{backgroundColor:'trasparent'}} onPress={() => { navigation.goBack() }}/>
            <View style={styles.barcodebox}>
            <BarCodeScanner onBarCodeScanned ={scanned ? undefined: barCodeScanned} style={{height:'100%', width:'100%'}} />
            </View>
        </View>
    )

};



const styles = StyleSheet.create({
        barcodebox: {
            alignItems:'center',
            justifyContent:'center',
            height:'100%',
            overflow:'hidden',
            backgroundColor:'tomato'
        },

});

export default ScanQR;