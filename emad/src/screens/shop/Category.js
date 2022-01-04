import React, { useCallback, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import PriceFilter from '../../components/PriceFilter';
import InputText from '../../components/InputText';
import ColorFilter from '../../components/ColorFilter';
import SizeFilter from '../../components/SizeFilter';
import BackButton from '../../components/BackButton';
import ProductBox from "../../components/ProductBox";
import Divider from '../../components/Divider';
import { useLanguage } from "../../localization/Localization";
import { getCategoriaById, getImmagineByProdotto, getProdottiByCategoria } from '../../back/connect';

const Category = ({ navigation,route }) => {
    var categoria=getCategoriaById(route.params.categoria);
    const[prodotti,setProdotti]= useState(getProdottiByCategoria(categoria.id))
    const [prodotto, setProdotto] = React.useState('');
    const [lang, setLanguage] = useLanguage();

    const filteringText=(cerca)=>{
        setProdotto(cerca)
        setProdotti(prodotti.filter(prod => (prod.nome.toLowerCase().includes(cerca.toLowerCase()) || prod.ean13.includes(cerca))))
    }

    const { colors, isDark } = useTheme();
    const tabBarHeight = useBottomTabBarHeight() + 10;
    const productColors = ["000000", "ffffff", "green", "purple"];
    const size = ["XS", "S", "M", "L","XL","2XL","3XL"];

    const [show, setShow] = React.useState(false)
    const toggleText = () => setShow(show => !show)

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
                <View style={{flexDirection: 'row', marginBottom:20}}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}> {categoria.nome}</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: "center", marginBottom: 15 }}>

                    <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
                        name={lang.inputProdName} icon="search" rotation="0deg" value={prodotto} onChangeText={cerca=>filteringText(cerca)} secure='false' left='true' />
                    {show ?
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 5, top: 20, justifyContent: "center", alignItems:'center', padding:15, paddingTop: 0}}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colors.floatingInput.placeholder}
                                onPress={toggleText} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 5, top: 20, justifyContent: "center", alignItems:'center', padding:15, paddingTop: 0 }}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colors.floatingInput.icon}
                                onPress={toggleText} />

                        </TouchableOpacity>
                    }
                </View>
                {show ? 
                    <View>
                        <FilterColor colors={productColors}  />
                        <FilterSize size={size} />
                        <FilterPrice />
                    </View> 
                : null}
                <Divider width="100%" />
                <ScrollView overScrollMode="never">
                    <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
                        {
                            prodotti.map((prodotto)=>(
                                <ProductBox key={prodotto.id} name={prodotto.nome} price={prodotto.prezzo} reference={prodotto.ean13}
                            image={{ uri: getImmagineByProdotto(prodotto.id) }} onPress={() => navigation.navigate('ProductPage',{prodotto:prodotto.id,utente:route.params.utente})} />
                            ))
                        }
                        
                    </View>
                    <View style={{ marginBottom: tabBarHeight + 10 }}></View>
                </ScrollView>
            </View>
        )
    }
};

const FilterColor = (props) => {

    const { colors, isDark } = useTheme();
    const [lang, setLanguage] = useLanguage();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    const [show, setSelected] = React.useState(false)
    const toggleColor = () => setSelected(show => !show)

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ width: '100%' }}>
                <View style={{ width: "75%", height: 48, alignSelf: "center" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>{lang.colori}</Text>
                        </View>
                        {props.colors.map((item, key) => (
                            <ColorFilter key={key} color={item} />
                        ))}
                    </View>
                    <Divider width={"100%"} />
                </View>
            </View>
        )
    }

}
const FilterSize = (props) => {

    const { colors, isDark } = useTheme();
    const [lang, setLanguage] = useLanguage();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    const [show, setSelected] = React.useState(false)
    const toggleColor = () => setSelected(show => !show)

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ width: '100%' }}>
                <View style={{ width: "75%", height: 48, alignSelf: "center" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>{lang.taglie}</Text>
                        </View>
                        {props.size.map((item, key) => (
                            <SizeFilter key={key} size={item} />
                        ))}
                    </View>
                    <Divider width={"100%"} />
                </View>
            </View>
        )
    }

}
const FilterPrice = (props) => {

    const { colors, isDark } = useTheme();
    const [lang, setLanguage] = useLanguage();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [show, setSelected] = React.useState(false)
    const toggleColor = () => setSelected(show => !show)

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ width: '100%' }}>
                <View style={{ width: "75%", height: 48, alignSelf: "center" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>{lang.prezzo}</Text>
                        </View>
                        <View style={{justifyContent: 'center', flexDirection: 'row', marginBottom: 5}}>
                            <View style={{ width: '35%' }}>
                                <PriceFilter params={{width: '100%' }}
                                    name={lang.da} icon="" rotation="0deg" secure='false' value={from} onChangeText={setFrom} />
                            </View>
                            <View style={{ width: '5%' }}></View>
                            <View style={{ width: '35%' }}>
                                <PriceFilter params={{width: '100%' }}
                                    name={lang.a} icon="" rotation="0deg" secure='false' value={to} onChangeText={setTo} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}
export default Category;
