import { StatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { StyleSheet, Image, View, Text, Button, TouchableOpacity, ScrollView, Appearance } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
const ScanQR = ({ navigation }) => {
    const[hasPermission,setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not Scanned");

    const askPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted');
        })()
    }

};



const styles = StyleSheet.create({});

export default ScanQR;