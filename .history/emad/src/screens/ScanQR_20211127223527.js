import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, Appearance } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
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
            <Text>Apertura Fotocamera</Text>
            <View style={styles.barcodebox}>
            <BarCodeScanner onBarCodeScanned ={scanned ? undefined: barCodeScanned} style={{height:400, width:400}} />
            <Text style={styles.maintext}>{text}</Text>
           <Button  title={"Scansiona Codice QR"} onPress={() => setScanned(false)} color='tomato' />

            </View>
        </View>
    )

};



const styles = StyleSheet.create({
        barcodebox: {
            alignItems:'center',
            justifyContent:'center',
            height:300,
            width:300,
            overflow:'hidden',
            borderRadius:30,
            backgroundColor:'tomato'
        },

});

export default ScanQR;