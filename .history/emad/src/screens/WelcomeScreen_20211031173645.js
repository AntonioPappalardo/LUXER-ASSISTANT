import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';

const WelcomeScreen = (props) => {
    return ( <
        View style = { styles.container } >
        <
        ImageBackground source = { require('../../assets/background.jpg') }
        resizeMode = "cover"
        style = { styles.image } >

        <
        Text style = { styles.text } > Sell What You Don 't Need!</Text> <
        /ImageBackground>

        <
        TouchableOpacity style = {
            { width: '100%', height: 55, backgroundColor: '#fc5c65' } }
        onPress = {
            () => props.navigation.navigate('WelcomeScreen') } > < Text style = { styles.text_section } > Section 1 < /Text></TouchableOpacity >
        <
        TouchableOpacity style = {
            { width: '100%', height: 55, backgroundColor: '#4ECDC4' } }
        onPress = {
            () => props.navigation.navigate('WelcomeScreen') } > < Text style = { styles.text_section } > Section 2 < /Text></TouchableOpacity >

        <
        /View>

    );
}

const styles = StyleSheet.create({
    container: {
        top: -10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: "100%",
        height: 840,
    },
    text: {
        textAlign: 'center',
        top: 60,
    },
    tinylogo: {
        top: 50,
        left: 160,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90
    },
    text_section: {
        color: 'white',
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    }

});

export default WelcomeScreen;