import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import CartItem from "../../components/CartItem";
import InputButton from "../../components/InputButton";


const Cart = ({ navigation }) => {

    const { colors, isDark } = useTheme();

    const tabBarHeight = useBottomTabBarHeight();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
                <BackButton onPress={() => { navigation.goBack() }} />
                <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 24, color: colors.theme.title, alignSelf: 'center', }}> Carrello</Text>
                <ScrollView>
                    <CartItem name="Prodotto 1" reference="10231023" specifics={"Specifiche"} price={50} image={{ uri: 'https://tinyurl.com/29dbrt9m' }} min={0} max={2} />
                    <CartItem name="Prodotto 1" reference="10231023" specifics={"Specifiche"} price={50} image={{ uri: 'https://tinyurl.com/29dbrt9m' }} min={0} max={2} />

                    <CartItem name="Prodotto 1" reference="10231023" specifics={"Specifiche"} price={50} image={{ uri: 'https://tinyurl.com/29dbrt9m' }} min={0} max={2} />

                    <CartItem name="Prodotto 1" reference="10231023" specifics={"Specifiche"} price={50} image={{ uri: 'https://tinyurl.com/29dbrt9m' }} min={0} max={2} />
                    <View style={{ width: '75%', alignSelf: 'center', marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary }}>
                                    Totale:
                                </Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary, textAlign: 'right' }}>
                                    80 €
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary }}>
                                    Articoli totali:
                                </Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary, textAlign: 'right' }}>
                                    4
                                </Text>
                            </View>
                        </View>
                    </View>
                    <InputButton params={{ marginTop: 26, width: "75%" }} name="PAGA IN CASSA" icon="arrow-forward-outline" rotation="-45deg" />
                    <InputButton params={{ marginTop: 26, width: "75%" }} name="PAGA ORA" icon="arrow-forward-outline" rotation="-45deg" onPress={() => navigation.navigate('Payment')} />

                    <View style={{ marginBottom: tabBarHeight + 10 }}></View>
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
});

export default Cart;
