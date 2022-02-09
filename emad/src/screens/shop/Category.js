import React, { useCallback, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RangeSlider from 'react-native-range-slider-expo';
import { useTheme } from "../../theme/ThemeProvider";
import PriceFilter from '../../components/PriceFilter';
import InputText from '../../components/InputText';
import ColorFilter from '../../components/ColorFilter';
import SizeFilter from '../../components/SizeFilter';
import BackButton from '../../components/BackButton';
import ProductBox from "../../components/ProductBox";
import Divider from '../../components/Divider';
import { useLanguage } from "../../localization/Localization";
import { getCategoriaById, getColorsDb, getImmagineByProdotto, getProdottiByCategoria, getProductsByColors, getProductsBySize, getMinPrezzo, getMaxPrezzo, getSizeDb } from '../../back/connect';

var selectedcolors = []
var selectedsize = []
var cerco = ''
const Category = ({ navigation, route }) => {
    

   

    var categoria = getCategoriaById(route.params.categoria);
    var ProductCategory = getProdottiByCategoria(categoria.id)
    const [prodotti, setProdotti] = useState(ProductCategory)
    const [prodotto, setProdotto] = React.useState('');
    const [lang, setLanguage] = useLanguage();

    var productColors = getColorsDb(categoria.id);
    var size = getSizeDb(categoria.id);


    var minprezzo = getMinPrezzo(categoria.id)
    var maxprezzo = getMaxPrezzo(categoria.id)
    const [minPrice, setMinPrice] = React.useState(0)
    const [maxPrice, setMaxPrice] = React.useState(0)

    const { colors, isDark } = useTheme();
    const tabBarHeight = useBottomTabBarHeight() + 10;
    
    const OnFiltering = () => {
        var filteredcolor = []
        var filteredsize = []
        var filtered = []
        if (selectedcolors.length == 0 && selectedsize.length == 0 && cerco.length == 0 && minprezzo == undefined && maxprezzo == undefined) filtered = ProductCategory;
        else {
            var coloredProducts = getProductsByColors(selectedcolors)
            coloredProducts.forEach(s => {
                var x = ProductCategory.find(prod => prod.id == s)
                if (x != undefined) filteredcolor.push(x)
            })
            var sizedProducts = getProductsBySize(selectedsize)
            sizedProducts.forEach(p => {
                var x = ProductCategory.find(prod => prod.id == p)
                if (x != undefined) filteredsize.push(x)
            })
            var pricedProducts
            if ((minprezzo == undefined || minprezzo == '') && (maxprezzo == undefined || maxprezzo == '')) {
                pricedProducts = ProductCategory
            } else
                if (minprezzo == undefined) pricedProducts = ProductCategory.filter(prod => (prod.prezzo <= maxprezzo))
                else if (maxprezzo == undefined) pricedProducts = ProductCategory.filter(prod => (prod.prezzo >= minprezzo))
                else pricedProducts = ProductCategory.filter(prod => (prod.prezzo >= minprezzo && prod.prezzo <= maxprezzo))

            var filteredText = ProductCategory.filter(prod => (prod['nome_' + lang.codice].toLowerCase().includes(cerco.toLowerCase()) || prod.ean13.includes(cerco)))

            if (minprezzo == undefined && maxprezzo == undefined) {
                if (selectedcolors.length == 0) {
                    if (selectedsize.length == 0) filtered = filteredText
                    else
                        if (cerco.length == 0) filtered = filteredsize
                        else filtered = (filteredText.filter(v => filteredsize.indexOf(v) > -1))
                }
                else {
                    if (selectedsize.length == 0) {
                        if (cerco.length == 0) { filtered = filteredcolor }
                        else filtered = (filteredText.filter(v => filteredcolor.indexOf(v) > -1))
                    }
                    else
                        if (cerco.length == 0) filtered = (filteredsize.filter(v => filteredcolor.indexOf(v) > -1))
                        else filtered = (filteredcolor.filter(v => filteredsize.indexOf(v) > -1)).filter(v => filteredText.indexOf(v) > -1)
                }
            }
            else {
                if (selectedcolors.length == 0) {
                    if (selectedsize.length == 0)
                        if (cerco.length == 0) filtered = pricedProducts
                        else filtered = (filteredText.filter(v => pricedProducts.indexOf(v) > -1))
                    else
                        if (cerco.length == 0) filtered = filteredsize.filter(v => pricedProducts.indexOf(v) > -1)
                        else filtered = (filteredText.filter(v => filteredsize.indexOf(v) > -1)).filter(v => pricedProducts.indexOf(v) > -1)
                }
                else {
                    if (selectedsize.length == 0) {
                        if (cerco.length == 0) filtered = filteredcolor.filter(v => pricedProducts.indexOf(v) > -1)
                        else filtered = (filteredText.filter(v => filteredcolor.indexOf(v) > -1)).filter(v => pricedProducts.indexOf(v) > -1)
                    }
                    else
                        if (cerco.length == 0) filtered = (filteredsize.filter(v => filteredcolor.indexOf(v) > -1)).filter(v => pricedProducts.indexOf(v) > -1)
                        else filtered = (filteredcolor.filter(v => filteredsize.indexOf(v) > -1)).filter(v => filteredText.indexOf(v) > -1).filter(v => pricedProducts.indexOf(v) > -1)
                }
            }
        }
        setProdotti([...new Set(filtered)])
    }
    const filteringText = (cerca) => {
        setProdotto(cerca)
        cerco = cerca
        OnFiltering()
    }
    const OnColorFilter = useCallback((col) => {
        let exist = selectedcolors.findIndex(a => a == col)
        if (exist == -1) selectedcolors.push(col);
        else selectedcolors.splice(exist, 1)
        OnFiltering()

    })
    const OnPriceFilter = useCallback((min, max) => {
        setMinPrice(min)
        setMaxPrice(max)
        minprezzo = min;
        maxprezzo = max;
        OnFiltering()
    })

    const OnSizeFilter = useCallback((col) => {
        let exist = selectedsize.findIndex(a => a == col)
        if (exist == -1) selectedsize.push(col);
        else selectedsize.splice(exist, 1)
        OnFiltering()

    })


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
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}> {categoria['nome_' + lang.codice]}</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center", marginBottom: 15 }}>

                    <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
                        name={lang.inputProdName} icon="search" rotation="0deg" value={prodotto} onChangeText={cerca => filteringText(cerca)} secure='false' left='true' />
                    {show ?
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 5, top: 20, justifyContent: "center", alignItems: 'center', padding: 15, paddingTop: 0 }}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colors.floatingInput.placeholder}
                                onPress={toggleText} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 5, top: 20, justifyContent: "center", alignItems: 'center', padding: 15, paddingTop: 0 }}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colors.floatingInput.icon}
                                onPress={toggleText} />

                        </TouchableOpacity>
                    }
                </View>
                {show ?
                    <View>
                        <FilterColor colors={productColors} OnColorFilter={OnColorFilter} />
                        <FilterSize size={size} OnSizeFilter={OnSizeFilter} />
                        {/*<FilterPrice min={minPrice} max={maxPrice} OnPriceFilter={OnPriceFilter} />*/}
                        <View style={{ width: '100%' }}>
                            <View style={{ width: "75%", height: 48, alignSelf: "center" }}>
                                <View style={{ flexDirection: 'row', justifyContent:'flex-start', alignItems: 'center'}}>
                                    <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                        <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>{lang.prezzo}</Text>
                                    </View>
                                    <View style={{width:'90%', position: 'absolute', left: 50, paddingTop: 15}}>
                                        <RangeSlider
                                            min={minprezzo} max={maxprezzo}
                                            fromValueOnChange={value => setMinPrice(value)}
                                            toValueOnChange={value => setMaxPrice(value)}
                                            initialFromValue={minprezzo}
                                            styleSize= 'small'
                                            showRangeLabels  = {false}
                                            fromKnobColor='#e78630'
                                            toKnobColor='#e78630'
                                            valueLabelsBackgroundColor='#e78630'
                                            knobSize={20}
                                        />
                                        </View>
                                </View>
                            </View>
                        </View>
                       
                    </View>
                    : null}
                <Divider width="100%" />
                <ScrollView overScrollMode="never">
                    <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
                        {
                            prodotti.map((prodotto) => (
                                <ProductBox key={prodotto.id} name={prodotto['nome_' + lang.codice]} price={prodotto.prezzo} reference={prodotto.ean13}
                                    image={{ uri: getImmagineByProdotto(prodotto.id) }} onPress={() => navigation.navigate('ProductPage', { prodotto: prodotto.id, utente: route.params.utente })} />
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
    const OnColorFilter = useCallback((col) => {
        props.OnColorFilter(col)
    })
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
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12}}>{lang.colori}</Text>
                        </View>
                        <ScrollView overScrollMode="never" horizontal={true}>
                            {props.colors.map((item, key) => (
                                <ColorFilter key={key} color={item} OnColorFilter={OnColorFilter} />
                            ))}
                        </ScrollView>
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
    const OnSizeFilter = useCallback((size) => {
        props.OnSizeFilter(size)
    })
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
                        <ScrollView overScrollMode="never" horizontal={true}>
                            {props.size.map((item, key) => (
                                <SizeFilter key={key} size={item} OnSizeFilter={OnSizeFilter} />
                            ))}
                        </ScrollView>
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
    const OnPriceFilter = useCallback((min, max) => {
        props.OnPriceFilter(min, max)
    })
    const OnFromPriceFilter = (from) => {
        setFrom(from)
        OnPriceFilter(from, to)
    }
    const OnToPriceFilter = (to) => {
        setTo(to)
        OnPriceFilter(from, to)
    }

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
                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom: 5 }}>
                            <View style={{ width: '35%' }}>
                                <PriceFilter params={{ width: '100%' }}
                                    name={lang.da} icon="" rotation="0deg" secure='false' value={from} onChangeText={OnFromPriceFilter} />
                            </View>
                            <View style={{ width: '5%' }}></View>
                            <View style={{ width: '35%' }}>
                                <PriceFilter params={{ width: '100%' }}
                                    name={lang.a} icon="" rotation="0deg" secure='false' value={to} from={from} to={to} onChangeText={OnToPriceFilter} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}
export default Category;
