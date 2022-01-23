import React, { useCallback } from "react";
import { View, Dimensions, Image, Text } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { useTheme } from "../theme/ThemeProvider";
import Divider from "./Divider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {  removeProduct } from "../back/cart";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CartItem = (props) => {
    const { colors, isDark } = useTheme();
    
    
    var nome=props.name.substr(0,20)+"\n"+props.name.substr(20);
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayRegular': require('../../assets/fonts/SFProDisplayRegular.otf'),
        'SFProDisplayThinItalic': require('../../assets/fonts/SFProDisplayThinItalic.otf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ marginTop: '5%' }}>
                <View style={{ flexDirection: 'row', width: '75%', alignSelf: 'center', marginBottom: '5%', marginRight:'5%' }}>
                    <Image source={props.image} style={{ width: (windowWidth * 0.35), height: windowHeight * 0.2, borderRadius: 5, marginBottom: 10 }} />
                    <View style={{padding: 10}}>
                        <Text  style={{ width: (windowWidth * 0.45), fontSize: 18, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary}}>
                            {props.name}
                        </Text>
                        <Text style={{fontSize: 11, fontFamily: 'SFProDisplayRegular', color: colors.theme.secondary}}>
                            Ref {props.reference}
                        </Text>
                        <Text style={{fontSize: 16, fontFamily: 'SFProDisplayRegular', color: colors.theme.primary}}>
                            {props.specifics}
                        </Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop:'25%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayRegular', color: colors.theme.primary }}>
                                {props.price} €
                            </Text>
                            <InputSpinner
                                value={props.value}
                                min={props.min}
                                max={props.max}
                                step={1}
                                colorMax={colors.theme.secondary}
                                colorMin={colors.theme.secondary}
                                color={'#EA9F5A'}
                                skin= 'square'
                                textColor="#17181A"
                                height={25}
                                onDecrease={(num)=>{
                                    props.OnDecrementProduct(props.id)
                                }}
                                onIncrease={(num)=>{
                                    props.OnIncrementProduct(props.id)
                                }}
                                
                                buttonFontFamily={'SFProDisplayRegular'}
                                buttonFontSize={24}
                                fontFamily={'SFProDisplayRegular'}
                                fontSize={14}
                                style={{marginLeft:30,backgroundColor:'transparent', shadowOffset: { width: 1, height: 2 },shadowOpacity: 0.25,shadowRadius: 5, elevation: 0}}
                            />
                        </View>
                    </View>
                </View>
                <Divider width="75%" />
            </View>
        )
    }
};

export default CartItem;