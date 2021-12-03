import React from 'react';
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

const Category = ({ navigation }) => {

    const { colors, isDark } = useTheme();

    const tabBarHeight = useBottomTabBarHeight() + 10;

    const [prodotto, setProdotto] = React.useState('');

    const productColors = ["red", "blue", "green", "purple"];
    const size = ["XS", "S", "M", "L"];

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
                <View style={{flexDirection: 'row'}}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{flexDirection: 'row', width:'100%',alignItems:'flex-start', paddingTop: '15%'}}>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 18, color: colors.theme.subtitle}}>Catalogo ·</Text>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 18, color: colors.theme.title}}> Borse e Accessori</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: "center", marginBottom: 15 }}>

                    <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
                        name="Nome o Codice Prodotto" icon="search" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false' />
                    {show ?
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 5, top: 15, justifyContent: "center", alignItems:'center', padding:15, paddingTop: 0}}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colors.floatingInput.placeholder}
                                onPress={toggleText} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={.75} style={{ position: 'absolute', right: 5, top: 15, justifyContent: "center", alignItems:'center', padding:15, paddingTop: 0 }}>

                            <Icon name={Platform.OS === "ios" ? "ios-filter-outline" : "md-filter-outline"} size={20}
                                style={{}}
                                color={colors.floatingInput.icon}
                                onPress={toggleText} />

                        </TouchableOpacity>
                    }
                </View>
                {show ? <View><FilterColor colors={productColors} /><FilterSize size={size} /><FilterPrice /></View> : null}
                <Divider width="100%" />
                <ScrollView>
                    <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
                        <ProductBox name={"Borsa Chanel 19"} price={"8500"} reference={"1273100"}
                            image={{ uri: 'https://tinyurl.com/29dbrt9m' }} onPress={() => navigation.navigate('ProductPage')} />
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

    const { colors, isDark } = useTheme();

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
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>Colori</Text>
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
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>Taglie</Text>
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
                            <Text style={{ color: colors.theme.primary, fontFamily: "SFProDisplayMedium", paddingBottom: 12 }}>Prezzo</Text>
                        </View>
                        <View style={{justifyContent: 'center', flexDirection: 'row', marginBottom: 5}}>
                            <View style={{ width: '35%' }}>
                                <PriceFilter params={{width: '100%' }}
                                    name="Da" icon="" rotation="0deg" secure='false' value={from} onChangeText={setFrom} />
                            </View>
                            <View style={{ width: '5%' }}></View>
                            <View style={{ width: '35%' }}>
                                <PriceFilter params={{width: '100%' }}
                                    name="A" icon="" rotation="0deg" secure='false' value={to} onChangeText={setTo} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}
export default Category;
