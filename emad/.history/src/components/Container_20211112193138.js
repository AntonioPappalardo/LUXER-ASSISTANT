import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Container = (props) => {
    return ( <
        TouchableOpacity activeOpacity = { .6 }
        style = {
            { padding: 15, paddingTop: 0, marginBottom: 40 } }
        onPress = {
            () => navigation.navigate('Catalogo') } >
        <
        LinearGradient start = {
            { x: 0.25, y: 1 } }
        end = {
            { x: 0.75, y: 0 } }
        colors = {
            ['#347bde', '#1ad3a5'] }
        style = {
            [styles.catalogCard, { padding: 15 }] } >
        <
        /LinearGradient> <
        /TouchableOpacity > 
    )
};


export default Container;