import React, { useRef, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { Text, View, Dimensions, TouchableOpacity, ScrollView, Animated } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ColorFilter from "./ColorFilter";
import InputButton from "./InputButton";
import { useTheme } from "../theme/ThemeProvider";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BottomProduct2 = ({ navigation }) => {
    function renderTabBar (props)  {
        const inputRange = props.navigationState.routes.map((x, i) => i);
    
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                  inputIndex === i ? 1 : 0.5
                ),
              });
    
              return (
                <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => this.setState({ index: i })}>
                  <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      };
    const [index, setIndex] = useState(0);
    const FirstRoute = () => (
        <View style={{ width: '95%', alignSelf: 'center' }}>
            <View style={{ paddingTop: '5%' }}>
                <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: colors.theme.primary }}>
                    Disponibilità
                </Text>
                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: colors.theme.primary }}>
                        In Negozio:
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: colors.theme.primary, paddingLeft: 10 }}>
                        0
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: colors.theme.primary }}>
                        In altri store:
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: colors.theme.primary, paddingLeft: 5 }}>
                        12
                    </Text>
                </View>
            </View>
            <InputButton params={{ marginTop: "5%", width: "80%", fontFamily: 'SFProDisplayMedium', fontSize: 14 }}
                name="VEDI IN ALTRI STORE" onPress={() => navigation.navigate('StoreList')} />
            {/*<InputButton params={{ marginTop: "5%", width: "60%", height: 30, fontFamily: 'SFProDisplayMedium', fontSize: 14 }}
                name="VEDI IN ALTRI STORE" outline onPress={() => navigation.navigate('StoreList')} />*/}
        </View>
    );
    const SecondRoute= () => (
        <ScrollView style={{ width: '100%', alignSelf: 'center' }}>
            <View style={{ paddingTop: '5%' }}>
                <Text style={{ width: '90%', fontSize: 14, fontFamily: 'SFProDisplayBold', color: colors.theme.primary, alignSelf: 'center' }}>
                    Descrizione
                </Text>
                <View style={{ width: '90%',flexDirection: 'column', paddingTop: 5 , alignSelf: 'center'}}>
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: colors.theme.primary, textAlign: 'justify' }}>
                        Una perfetta sintesi di classicismo e futurismo, la borsa Prada Cleo reinterpreta un design iconico proveniente dagli archivi del marchio.
                        Linee curve ed essenziali, enfatizzate dalla particolare costruzione inclinata sul fondo e ai lati, donano a questo modello con pattina
                        un'allure sofisticata, mentre il manico con prolunga rende l'accessorio funzionale e permette di indossarlo sia a spalla che a mano.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
    const ThirdRoute = () => (
        <ScrollView style={{ width: '95%', alignSelf: 'center' }}>
            <View style={{ paddingTop: '5%' }}>
            <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: colors.theme.primary }}>
                    Specifiche
                </Text>
                <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: colors.theme.primary }}>
                        · Pelle con interno in Re-Nylon siglato{'\n'}
                        · Altezza: 17cm{'\n'}
                        · Lunghezza: 6cm{'\n'}
                        · Larghezza: 22cm
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
    const [routes] = useState([
        { key: 'first', title: 'Disponibilità' },
        { key: 'second', title: 'Descrizione' },
        { key: 'third', title: 'Scheda Prodotto' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });
    const animatedValue1 = new Animated.Value(1);
    const slidePadding = height * 0.15;

    const productColors = ["red", "blue", "green", "purple"];
    const { colors, isDark } = useTheme();
    const tabBarHeight = useBottomTabBarHeight();
    const elementRef = useRef();
    const [selected, setSelect] = useState(undefined);

    const styles = {
        container: {
            flexGrow: 1,
            zIndex: 1
        },
        dragHandler: {
            height: 80,
            width: '75%',
            alignSelf: 'center',
            marginTop: '5%'
        }
    }
    return (
        <SlidingUpPanel
            ref={elementRef}
            draggableRange={{ top: height * 0.75, bottom: slidePadding + tabBarHeight }}
            showBackdrop={true}>
            {dragHandler => (
                <View style={[styles.container, { backgroundColor: colors.theme.background }]}>
                    <View style={styles.dragHandler} {...dragHandler}>
                        <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayBold', color: colors.theme.subtitle }}>
                            1780,00 €
                        </Text>
                        <Text style={{ fontSize: 18, fontFamily: 'SFProDisplayBold', color: colors.theme.title, paddingTop: 5 }}>
                            Mini borsa Prada Cleo{'\n'}in pelle spazzolata
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={{
                        height: 45, width: 45, borderRadius: 22.5, backgroundColor: '#EA9F5A', position: 'absolute', top: '4%', right: '10%',
                        justifyContent: 'center', alignItems: 'center', alignContent: 'center', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5,
                    }} onPress={() => navigation.navigate('Cart')}>
                        <Icon name="cart-plus" size={24} color={'white'} style={{ marginRight: 2 }} />
                    </TouchableOpacity>
                    <ScrollView style={{ width: '100%', backgroundColor: colors.theme.background, marginBottom: tabBarHeight }}>
                        
                        <View style={{width: '75%', alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                <View style={{ flexDirection: 'row', paddingTop: 15, width: '50%' }}>
                                    {productColors.map((item, key) => (
                                        <ColorFilter key={key} color={item} />
                                    ))}
                                </View>

                                <Picker
                                    selectedValue={selected}
                                    style={{ width: '50%', fontFamily: 'SFProDisplayBold', color: colors.theme.title, textAlign: 'center' }}
                                    dropdownIconColor={colors.theme.title}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelect(itemValue)
                                    }
                                    mode="dropdown">
                                    <Picker.Item label="XS" value="1" />
                                    <Picker.Item label="S" value="2" />
                                    <Picker.Item label="M" value="3" />
                                    <Picker.Item label="L" value="4" />
                                    <Picker.Item label="XL" value="5" />
                                </Picker>
                            </View>
                            <InputButton params={{ marginTop: "5%", width: "100%", fontFamily: 'SFProDisplayMedium', fontSize: 14 }} name="VISUALIZZA IN AR" onPress={() => { navigation.navigate('ExpoAR') }} />
                        </View>

                        <View style={{ height: height*0.325, marginTop: '5%' }}>
                            <TabView
                                navigationState={{ index, routes }}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                initialLayout={{ width: width }}
                                contentContainerStyle={{ flexGrow: 1 }}
                                indicatorStyle={{ backgroundColor: 'white' }}
                                tabBarPosition="top"
                                renderTabBar={props =>
                                    <TabBar
                                        {...props}
                                        renderLabel={({ focused, route }) => {
                                            if (focused) {
                                                return (
                                                    <Text style={{ color: colors.theme.title, fontFamily: "SFProDisplayMedium" }}>
                                                        {route.title}
                                                    </Text>
                                                );
                                            }
                                            return (
                                                <Text style={{ color: colors.theme.subtitle, fontFamily: "SFProDisplayMedium" }}>
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
                        <View style={{ marginBottom: '5%' }}></View>
                    </ScrollView>
                </View>
            )}
        </SlidingUpPanel>
    )
};
export default BottomProduct2;