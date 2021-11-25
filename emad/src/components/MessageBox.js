import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from 'react-native-paper';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
const colorScheme = Appearance.getColorScheme();

const MessageBox = (props) => {
    return (
        <FloatingLabelInput 
            style={{textAlignVertical:"top",marginLeft:10,fontSize:25 ,width:250,marginTop:75}}
            label="Messaggio"
            editable
            maxLength={250}
            multiline
            numberOfLines={11}
            placeholderTextColor={props.theme.floatingInput.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            rightComponent={<Ionicons name="md-mail-open-outline" color={props.theme.floatingInput.label} size={25} style={{ top:0 ,marginRight:15}} />}
            containerStyles={{
            marginTop:85,
            borderBottomWidth: 0.5,
            borderColor:props.theme.floatingInput.border,
            }}
            customLabelStyles={{
            colorBlurred:props.theme.floatingInput.placeholder,
            colorFocused:props.theme.floatingInput.placeholder,
            fontSizeFocused: 20,
            }}
            inputStyles={{
            fontSize: 25,
            paddingTop: 15,
            textAlignVertical:"top",
            paddingLeft: 5,
            color:props.theme.floatingInput.label}}
        />
    )
}
export default MessageBox;