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
                <View style={{flexDirection: 'row', marginBottom:20}}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}> Borse Donna</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: "center", marginBottom: 15 }}>

                    <InputText params={{ width: "75%", paddingLeft: 75, textAlign: "left" }}
                        name="Nome o Codice Prodotto" icon="search" rotation="0deg" value={prodotto} onChangeText={setProdotto} secure='false' left='true' />
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
                {show ? <View><FilterColor colors={productColors} /><FilterSize size={size} /><FilterPrice /></View> : null}
                <Divider width="100%" />
                <ScrollView>
                    <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap', alignItems: "center" }}>
                        <ProductBox name={"Mini borsa Prada Cleo in pelle spazzolata"} price={"1780"} reference={"1273100"}
                            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p3_1.webp' }} onPress={() => navigation.navigate('ProductPage')} />
                        <ProductBox name={"Mini borsa in pelle metallizzata"} price={"1300"} reference={"1231283"}
                            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p4_1.webp' }} />
                        <ProductBox name={"Borsa Prada Cleo in raso con applicazioni"} price={"2600"} reference={"1231283"}
                            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p5_1.webp' }} />
                        <ProductBox name={"Borsa Prada Triangle a tracolla in pelle"} price={"1650"} reference={"1273100"}
                            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p6_1.webp' }} />
                        <ProductBox name={"Borsa Prada Signaux in nappa imbottita"} price={"2200"} reference={"1231283"}
                            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p7_1.webp' }} />
                        <ProductBox name={"Borsa shopping in tessuto effetto pelliccia"} price={"1900"} reference={"1231283"}
                            image={{ uri: 'https://storageaccountemadbc1b.blob.core.windows.net/prodotti/p8_1.webp' }} />
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
