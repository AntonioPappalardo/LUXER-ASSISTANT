import React, { useState } from "react";
import { Image, View, Text, ScrollView, useWindowDimensions, StyleSheet, } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Divider from "../../components/Divider";
import MenuItem from "../../components/MenuItem";
import { BarChart, LineChart } from 'react-native-chart-kit';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Svg, Text as TextSVG, Rect } from 'react-native-svg';
import { getCliente } from "../../back/connect";
import { useLanguage } from "../../localization/Localization";
import moment from 'moment';
import 'moment/locale/it';

moment.locale('it')

const acquisti = []
const mesi=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dec"]
const actualMonth= (new Date()).getMonth()
console.log(actualMonth)
/* Da 0 a 6 Funziona */
const lab =(actualMonth<6)? mesi.slice(actualMonth+6, 12).concat(mesi.slice(0, actualMonth))
:mesi.slice(actualMonth-6, 6).concat(mesi.slice(6, actualMonth));

const CustomerPage = ({ navigation, route }) => {
    const [lang, setLanguage] = useLanguage();
    let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })
    const costumers = getCliente();
    const utente =route.params.user
    const layout = useWindowDimensions();
    const FirstRoute = () => (
        <View style={{ justifyContent: 'center' }}>
            <LineChart
                decorator={() => {
                    return tooltipPos.visible ? <View>
                        <Svg >
                            <Rect x={tooltipPos.x - 16.5}
                                y={tooltipPos.y + 8.5}
                                width="53"
                                height="33"
                                fill={colors.theme.title}
                                rx="6.5"

                            />
                            <Rect x={tooltipPos.x - 15}
                                y={tooltipPos.y + 10}
                                width="50"
                                height="30"
                                fill={colors.theme.background}
                                rx="5"

                            />

                            <TextSVG
                                x={tooltipPos.x + 10}
                                y={tooltipPos.y + 30}
                                fill={colors.theme.title}
                                fontSize="16"
                                fontWeight="bold"
                                textAnchor="middle">
                                {tooltipPos.value}
                            </TextSVG>
                        </Svg>
                    </View> : null
                }}
                onDataPointClick={(data) => {

                    let isSamePoint = (tooltipPos.x === data.x
                        && tooltipPos.y === data.y)

                    isSamePoint ? setTooltipPos((previousState) => {
                        return {
                            ...previousState,
                            value: data.value,
                            visible: !previousState.visible
                        }
                    })
                        :
                        setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });

                }}
                data={{
                    labels: lab,
                    datasets: [
                        {
                            data: [
                                1660,
                                2222,
                                2123,
                                400,
                                2123,
                                1111
                            ]
                        }
                    ]
                }}
                yAxisSuffix={" €"}
                width={350}
                height={220}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: colors.theme.background,
                    backgroundGradientTo: colors.theme.background,

                    color: (opacity = 1) => '#EA9F5A',
                    labelColor: (opacity = 1) => colors.theme.primary,
                    style: { borderRadius: 16 },
                    decimalPlaces: 0,
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#fff"
                    }
                }}
                withInnerLines={false}
                withOuterLines={false}
                bezier
                style={{
                    marginTop: '5%',
                }}
            />
        </View>
    );

    const SecondRoute = () => (
        <BarChart
            data={{
                labels: lab,
                datasets: [
                    {
                        data: [
                            1,
                            3,
                            2,
                            0,
                            3,
                            2
                        ]
                    }
                ]
            }}
            width={layout.width * 0.9}
            height={220}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: colors.theme.background,
                backgroundGradientTo: colors.theme.background,

                color: (opacity = 1) => '#EA9F5A',
                labelColor: (opacity = 1) => colors.theme.primary,
                style: { borderRadius: 16 },
                decimalPlaces: 0,
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#fff"
                }
            }}
            withInnerLines={false}
            bezier
            style={{
                marginTop: '5%',
                marginLeft: -25
            }}
        />
    );

    const ThirdRoute = () => (
        <BarChart
            data={{
                labels: lab,
                datasets: [
                    {
                        data: [
                            5,
                            12,
                            1,
                            3,
                            4,
                            1,
                        ]
                    }
                ]
            }}

            width={350}
            height={220}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: colors.theme.background,
                backgroundGradientTo: colors.theme.background,

                color: (opacity = 1) => '#EA9F5A',
                labelColor: (opacity = 1) => colors.theme.primary,
                style: { borderRadius: 16 },
                decimalPlaces: 0,
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#fff"
                }
            }}
            withInnerLines={false}
            bezier
            style={{
                marginTop: '5%',
                marginLeft: -25
            }}
        />
    );

    const FourthRoute = () => (
        <BarChart
            data={{
                labels: ["Cat1", "Cat2", "Cat3", "Cat4","Cat5"],
                datasets: [
                    {
                        data: [
                            14,
                            38,
                            12,
                            31,
                            4,
                        ]
                    }
                ]
            }}
            width={350}
            height={220}
            yAxisSuffix="%"
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: colors.theme.background,
                backgroundGradientTo: colors.theme.background,
                color: (opacity = 1) => '#EA9F5A',
                labelColor: (opacity = 1) => colors.theme.primary,
                style: { borderRadius: 16 },
                decimalPlaces: 0,
                
            }}
            withInnerLines={false}
            bezier
            style={{
                marginTop: '5%',
                marginLeft: -25
            }}
        />
    );


    const { colors, isDark } = useTheme();

    const tabBarHeight = useBottomTabBarHeight();


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title:  lang.acquisti},
        { key: 'second', title: lang.ordini },
        { key: 'third', title: lang.visite },
        { key: 'fourth', title: lang.preferiti },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    const [cliente, setCliente] = React.useState(costumers.find(us => us.id === route.params.cliente));
    const tot = acquisti.filter(a => a.cliente == cliente.id).map(a => a.saldo).reduce((a, b) => a + b, 0);
    const average = tot / (acquisti.filter(a => a.cliente == cliente.id).length)
    const last = (acquisti.filter(a => a.cliente == cliente.id).map(a => a.data).sort().reverse())[0]
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayRegular': require('../../../assets/fonts/SFProDisplayRegular.otf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, height: '100%' }}>
                <View style={{flexDirection: 'row'}}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>{lang.schedaCliente}</Text>
                    </View>
                </View>                
                <View style={{ flexDirection: "column", width: "100%", alignItems: "center", marginTop: '10%', marginBottom: '5%' }}>
                    <View style={{ flexDirection: "row", width: "80%" }}>
                        <View style={{ justifyContent: "flex-start", height: 120, width: 120, shadowOffset: { width: 1, height: 2 },shadowOpacity: 0.25,shadowRadius: 5, elevation: 5, borderRadius: 5 }}>
                            <Image source={{uri:cliente.avatar}} style={{ height: 120, width: 120, borderRadius: 5, borderWidth: 5, borderColor: "white"}} />
                        </View>
                        <View style={{ flexDirection: "column", paddingLeft: 15, alignItems: "flex-start" }}>
                            <Text style={{ color: colors.theme.title, fontSize: 24, fontFamily: "SFProDisplayBold" }}>{cliente.nome} {cliente.cognome}</Text>

                            <Text style={{ color: colors.theme.subtitle, fontSize: 12, fontFamily: "SFProDisplayRegular", marginBottom: 2 }}>{lang.regCliente} {moment(new Date(cliente.data_registrazione)).format('DD/MM/YYYY')}</Text>

                            <Text style={{ color: colors.theme.title, fontSize: 10, fontFamily: "SFProDisplayMedium" }}>{lang.tassoFedelta}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '50%', height: 6, backgroundColor: '#D4D4D4', borderRadius: 3 }}>
                                    <View style={{ position: 'absolute', width: '35%', height: 6, backgroundColor: '#EA9F5A', borderRadius: 3 }}></View>
                                </View>
                                <Text style={{ marginLeft: 5, color: colors.theme.primary, fontSize: 10, fontFamily: "SFProDisplayMedium", marginBottom: 2 }}>35%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between", marginTop: 20 }}>
                        <View>
                            <Text style={{ fontSize: 12, color: colors.theme.subtitle, fontFamily: "SFProDisplayRegular" }}>{lang.totaleAcquisti}</Text>
                            <Text style={{ fontSize: 16, color: colors.theme.title, fontFamily: "SFProDisplayRegular" }}>{tot} €</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: colors.theme.subtitle, fontFamily: "SFProDisplayRegular" }}>{lang.mediaAcquisti}</Text>
                            <Text style={{ fontSize: 16, color: colors.theme.title, fontFamily: "SFProDisplayRegular" }}>{average} €</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: colors.theme.subtitle, fontFamily: "SFProDisplayRegular" }}>{lang.ultimoAcquisto}</Text>
                            <Text style={{ fontSize: 16, color: colors.theme.title, fontFamily: "SFProDisplayRegular" }}>{last}</Text>
                        </View>
                    </View>
                </View>

                <ScrollView overScrollMode="never" style={{ marginBottom: tabBarHeight, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>

                    <Divider width={"100%"} />
                    <MenuItem title={lang.nuovoAppuntamento} onPress={() => 
                        navigation.navigate('AddAppointment',{cliente:cliente,utente:utente})} />
                    <MenuItem title={lang.contatta} onPress={() => navigation.navigate('Communication')} />
                    <View style={{ height: 300}}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                            contentContainerStyle={{ flexGrow: 1 }}
                            indicatorStyle={{ backgroundColor: 'white' }}
                            tabBarPosition="top"
                            renderTabBar={props =>
                                <TabBar
                                    {...props}
                                    renderLabel={({ focused, route }) => {
                                        return (
                                            <Text style={{ color: colors.theme.title, fontFamily: "SFProDisplayMedium" }}>
                                                {route.title}
                                            </Text>
                                        );
                                    }}
                                    indicatorStyle={{ backgroundColor: colors.theme.title }}
                                    style={{ backgroundColor: colors.theme.background, borderBottomWidth: 0 }}
                                />
                            }

                        />
                    </View>
                </ScrollView>

            </View>
        )
    };
}
export default CustomerPage;