import React from 'react';
import { View, ScrollView, Appearance, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import PriceFilter from '../components/PriceFilter';
import InputText from '../components/InputText';
import ColorFilter from '../components/ColorFilter';
import SizeFilter from '../components/SizeFilter';
import BackButton from '../components/BackButton';
import ProductBox from "../components/ProductBox";
import Divider from '../components/Divider';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';

const colorScheme = Appearance.getColorScheme();

const Category = ({ navigation }) => {
    const tabBarHeight = useBottomTabBarHeight() + 10;
    const [prodotto, setProdotto] = React.useState('');
    const colors = ["red", "blue", "green", "purple"];
    const size = ["XS", "S", "M", "L"];

    const [show, setShow] = React.useState(false)
    const toggleText = () => setShow(show => !show)

    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colorTheme.theme.background, flex: 1 }}>
                <BackButton onPress={() => { navigation.goBack() }} />
                <View style={{ alignItems: "center", marginBottom: 15 }}>

                    <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
                        name="Nome o Codice Prodotto" icon="search" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false' />
                    {show ?
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 15, top: 15, justifyContent: "center", paddingLeft: 15 }}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colorTheme.floatingInput.placeholder}
                                onPress={toggleText} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 15, top: 15, justifyContent: "center", paddingLeft: 15 }}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colorTheme.floatingInput.icon}
                                onPress={toggleText} />

                        </TouchableOpacity>
                    }
                </View>
                {show ? <View><FilterColor colors={colors} /><FilterSize size={size} /><FilterPrice /></View> : null}
                <Divider width="100%" />
                <ScrollView>
                    <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
                        <ProductBox name={"Borsa Chanel 19"} price={"8500"} reference={"1273100"}
                            image={{ uri: 'https://tinyurl.com/29dbrt9m' }} />
                        <ProductBox name={"Eau de Parfum\nChanel n°5"} price={"145"} reference={"1231283"}
                            image={{ uri: 'https://tinyurl.com/nss9ywwk' }} />
                        <ProductBox name={"Chanel Pink Sandals"} price={"8645"} reference={"1231283"}
                            image={{ uri: 'https://tinyurl.com/e8dfvbzs' }} />
                        <ProductBox name={"Borsa Chanel 19"} price={"8500"} reference={"1273100"}
                            image={{ uri: 'https://tinyurl.com/29dbrt9m' }} />
                        <ProductBox name={"Eau de Parfum Chanel n°5"} price={"145"} reference={"1231283"}
                            image={{ uri: 'https://tinyurl.com/nss9ywwk' }} />
                        <ProductBox name={"Chanel Pink Sandals"} price={"8645"} reference={"1231283"}
                            image={{ uri: 'https://tinyurl.com/e8dfvbzs' }} />
                    </View>
                    <View style={{ marginBottom: tabBarHeight + 10 }}></View>
                </ScrollView>
            </View>
        )
    }
};

const FilterColor = (props) => {
    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
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
                            <Text style={{ color: colorTheme.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>Colori</Text>
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
    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
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
                            <Text style={{ color: colorTheme.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>Taglie</Text>
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
    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
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
                            <Text style={{ color: colorTheme.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>Prezzo</Text>
                        </View>
                        <View style={{ width: '35%' }}>
                            <PriceFilter params={{ marginTop: 0, width: '100%' }}
                                name="Da" icon="" rotation="0deg" secure='false' value={from} onChangeText={setFrom} />
                        </View>
                        <View style={{ width: '5%' }}></View>
                        <View style={{ width: '35%' }}>
                            <PriceFilter params={{ marginTop: 0, width: '100%' }}
                                name="A" icon="" rotation="0deg" secure='false' value={to} onChangeText={setTo} />
                        </View>
                    </View>
                    <Divider width={"100%"} />
                </View>
            </View>
        )
    }

}
export default Category;
