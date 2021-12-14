import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { Text, View, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import Icon from 'react-native-vector-icons/FontAwesome5';
import ColorFilter from "./ColorFilter";
import InputButton from "./InputButton";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const productColors = ["red", "blue", "green", "purple"];
var selectedValue = undefined;
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
class ScrollViewInsidePanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <SlidingUpPanel
                ref={c => (this._panel = c)}
                draggableRange={{ top: height * 0.8, bottom: 90 + this.props.tabBarHeight }}
                animatedValue={this._draggedValue}
                showBackdrop={true}>
                {dragHandler => (
                    <View style={[styles.container, { backgroundColor: this.props.colors.theme.background }]}>

                        <View style={styles.dragHandler} {...dragHandler}>
                            <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.subtitle }}>
                                1780,00 €
                            </Text>
                            <Text style={{ fontSize: 18, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.title, paddingTop: 5 }}>
                                Mini borsa Prada Cleo{'\n'}in pelle spazzolata
                            </Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.5} style={{
                            height: 45, width: 45, borderRadius: 22.5, backgroundColor: '#EA9F5A', position: 'absolute', top: '4%', right: '10%',
                            justifyContent: 'center', alignItems: 'center', alignContent: 'center', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5,
                        }} onPress={() => this.props.navigation.navigate('Cart')}>
                            <Icon name="cart-plus" size={24} color={'white'} style={{ marginRight: 2 }} />
                        </TouchableOpacity>

                        <ScrollView style={{ width: '100%', backgroundColor: this.props.colors.theme.background, marginBottom: this.props.tabBarHeight }}>
                            <View style={{ width: '75%', alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                    <View style={{ flexDirection: 'row', paddingTop: 15, width: '50%' }}>
                                    {productColors.map((item, key) => (
                                        <ColorFilter key={key} color={item} />

                                    ))}
                                    </View>
                                    <Picker
                                        selectedValue={selectedValue}
                                        style={{ width: '50%', alignSelf:'center' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            selectedValue = itemValue
                                        }>
                                        <Picker.Item label="XS" value="1" />
                                        <Picker.Item label="S" value="2" />
                                        <Picker.Item label="M" value="3" />
                                        <Picker.Item label="L" value="4" />
                                        <Picker.Item label="XL" value="5" />
                                    </Picker>
                                </View>

                                <View style={{ paddingTop: '5%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.primary }}>
                                        Disponibilità
                                    </Text>
                                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: this.props.colors.theme.primary }}>
                                            In Negozio:
                                        </Text>
                                        <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.primary, paddingLeft: 10 }}>
                                            0
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: this.props.colors.theme.primary }}>
                                            In altri store:
                                        </Text>
                                        <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.primary, paddingLeft: 5 }}>
                                            12
                                        </Text>
                                    </View>
                                </View>
                                <InputButton params={{ marginTop: "5%", width: "60%", height: 30, fontFamily: 'SFProDisplayMedium', fontSize: 14 }}
                                    name="VEDI IN ALTRI STORE" outline onPress={() => this.props.navigation.navigate('StoreList')} />
                                <View style={{ paddingTop: '5%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.primary }}>
                                        Scheda Prodotto
                                    </Text>
                                    <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: this.props.colors.theme.primary }}>
                                            · Pelle con interno in Re-Nylon siglato{'\n'}
                                            · Altezza: 17cm{'\n'}
                                            · Lunghezza: 6cm{'\n'}
                                            · Larghezza: 22cm
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ paddingTop: '5%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayBold', color: this.props.colors.theme.primary }}>
                                        Descrizione
                                    </Text>
                                    <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'SFProDisplayRegular', color: this.props.colors.theme.primary, textAlign:'justify' }}>
                                        Una perfetta sintesi di classicismo e futurismo, la borsa Prada Cleo reinterpreta un design iconico proveniente dagli archivi del marchio. </Text>
                                    </View>
                                </View>
                                <InputButton params={{ marginTop: "5%", width: "100%", fontFamily: 'SFProDisplayMedium', fontSize: 14 }} name="VISUALIZZA IN AR" onPress={() => { this.props.navigation.navigate('ExpoAR') }} />
                            </View>
                            <View style={{ marginBottom: '5%' }}></View>
                        </ScrollView>
                    </View>
                )}
            </SlidingUpPanel>
        )
    }
}

export default ScrollViewInsidePanel