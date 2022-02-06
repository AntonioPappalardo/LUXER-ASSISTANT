import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import CartItem from "../../components/CartItem";
import InputButton from "../../components/InputButton";
import InputText from "../../components/InputText";
import Divider from "../../components/Divider";
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons';
import { ShoppingCart } from "../../back/cart";
import { getCliente, getImmagineByProdotto, CheckCustomer, SendQRCodeCash } from "../../back/connect";
import { useLanguage } from "../../localization/Localization";

const height = Dimensions.get('screen').height;

const Cart = ({ navigation, route }) => {
    
    const cart= ShoppingCart();
    const users = getCliente();
    const utente= route.params.user;
    const [user, onSearch] = React.useState([]);
    const [refresh, setRefresh] = useState(Date(Date.now()).toString())
    const { colors, isDark } = useTheme();
    const [lang, setLanguage] = useLanguage();
    const tabBarHeight = useBottomTabBarHeight();
    const [search, onChangeText] = React.useState('');
    const [display, setDisplay] = React.useState("flex");
    const [isModalVisible, setModalVisible] = useState(false);
    const [errorText, setErrorText] = useState('Default');
    const [isSuccess, setIsSuccess] = useState(false);
    const [items,setItems] = useState(cart.getCart());
    const [totale, setTotale] = useState(cart.getTotale());
    const [numOfArticle, setNumOfArticle] = useState(cart.getNumOfArticle());
    const [toPayment,onPayment]=useState(0);

    const ook = (cerca) => {
        onChangeText(cerca);
        onSearch(users.filter(user => (user.nome.toLowerCase().includes(cerca.toLowerCase()) || user.cognome.toLowerCase().includes(cerca.toLowerCase()) || user.codice_cliente.includes(cerca))))
        if(JSON.stringify(cerca).length === 2){
            setDisplay("none");
            return;
        }
        if(JSON.stringify(cerca).length === 3){
         setDisplay("flex");
         return;
        }
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const toggleModalReturn = async() => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(300);
        setModalVisible(false);
        await delay(300);
        setIsSuccess(false);
        onChangeText('');
    };

    useEffect(() => {
        setItems(cart.getCart())
        setTotale(cart.getTotale())
        setNumOfArticle(cart.getNumOfArticle())
    });

    const OnIncrementProduct = (index) => {
        let newCart = cart.increaseProduct(index)
        setItems(newCart);
        setTotale(cart.getTotale())
        setNumOfArticle(cart.getNumOfArticle())
    }
    const OnDecrementProduct = (index) => {
        let newCart = cart.decreaseProduct(index);
        if(newCart) {
            setTotale(cart.getTotale())
            setNumOfArticle(cart.getNumOfArticle())
            setRefresh(Date(Date.now()).toString())
            navigation.navigate('TabBar', { screen: 'Cart' });
        } else {
            setItems(newCart);
            setTotale(cart.getTotale())
            setNumOfArticle(cart.getNumOfArticle())
        }
    }

    const handleSubmitPressNow = () => {

        if (cart.getTotale() == 0) {
            setErrorText(lang.campoErroreTotale)
            setModalVisible(true)
            return;
        }
        if(search === ""){
            setErrorText(lang.customerError)
            setModalVisible(true)
            return;
        }

        let email = CheckCustomer(search);
        if(email == undefined){
            setErrorText(lang.userError)
            setModalVisible(true)
            return;
        }
        onChangeText('');
        navigation.navigate('Payment',{ user: utente, carrello: cart, payment: toPayment, nome:search});

    }

    const handleSubmitPressCash = async() => {

        if (cart.getTotale() == 0) {
            setErrorText(lang.campoErroreTotale)
            setModalVisible(true)
            return;
        }
        if(search === ""){
            setErrorText(lang.customerError)
            setModalVisible(true)
            return;
        }

        let email = CheckCustomer(search);
        if(email == undefined){
            setErrorText(lang.userError)
            setModalVisible(true)
            return;
        }

        SendQRCodeCash(email,totale,numOfArticle)
        setIsSuccess(true);
        setErrorText(lang.invioCodice)
        setModalVisible(true)
        
    }
   
    let [fontsLoaded] = useFonts({
        'SFProDisplayRegular': require('../../../assets/fonts/SFProDisplayRegular.otf'),
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
            
            <Modal
                isVisible={isModalVisible}
                statusBarTranslucent={true}
                animationIn="bounceIn"
                animationOut="fadeOutDownBig"
                hasBackdrop={true}
                backdropOpacity={10}
                backdropColor={"rgba(0, 0, 0, 0.3)"}
                useNativeDriverForBackdrop={true}
                hideModalContentWhileAnimating={true}
                deviceHeight={height}
                >
                <View style={{ padding: 20 }}>
                    {isSuccess ?
                    <>
                        <View style={[colors.topModal, { backgroundColor: 'green' }]}>
                        <Icon name="checkmark-circle-outline" size={75} color={'#FFFFFF'} />
                        </View>
                        <View style={colors.modalContent}>
                        <Text style={{ color: colors.theme.primary, textAlign: 'center' }}>{errorText}</Text>
                        <InputButton params={{ marginTop: '5%', width: "75%" }}
                            name={lang.confermaOperazione} icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModalReturn} />
                        </View>
                    </>
                    :
                    <>
                        <View style={colors.topModal}>
                        <Icon name="close-circle-outline" size={75} color={'#FFFFFF'} />
                        </View>
                        <View style={colors.modalContent}>
                        <Text style={{ color: colors.theme.primary, textAlign: 'center' }}>{errorText}</Text>
                        <InputButton params={{ marginTop: '5%', width: "75%" }}
                            name={lang.conferma} icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModal} />
                        </View>
                    </>}

                </View>
            </Modal>

                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    {/*<BackButton onPress={() => { navigation.goBack() }} />*/}
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: '15%' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{lang.carrello}</Text>
                    </View>
                </View>
                <ScrollView overScrollMode="never">
                    {items.map((prod,index) => (
                        <CartItem key={index}
                            OnIncrementProduct={() => OnIncrementProduct(index)}
                            OnDecrementProduct={() => OnDecrementProduct(index)}
                            value={prod.qta} 
                            id={prod.prodotto.id}
                            name={prod.prodotto['nome_' + lang.codice]}
                            reference={prod.prodotto.ean13}
                            selectedSize={prod.selectedSize}
                            selectedColor= {prod.selectedColor}
                            size={prod.selectedSize != undefined ? prod.selectedSize : undefined}
                            color={prod.selectedColor != undefined ? prod.selectedColor : undefined}
                            price={prod.prodotto.prezzo}
                            image={{ uri: getImmagineByProdotto(prod.prodotto.id) }}
                            min={0}
                            max={prod.prodotto.qta}
                        />
                    ))}
                    <View style={{ width: '75%', alignSelf: 'center', marginTop: '5%', marginBottom: '5%' }}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary }}>
                                    {lang.articoliTot}:
                                </Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.primary, textAlign: 'right' }}>
                                    {numOfArticle}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginBottom: '5%' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'SFProDisplayMedium', fontWeight: "bold", color: colors.theme.primary }}>
                                    {lang.totale}:
                                </Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'SFProDisplayMedium', fontWeight: "bold", color: colors.theme.primary, textAlign: 'right' }}>
                                    € {totale}
                                </Text>
                            </View>
                        </View>
                        <Divider width={"100%"} opacity={1} marginBottom={12} />
                        <View style={{ alignItems: "center", marginBottom: 15, marginTop: '12%' }}>
                        <InputText params={{ width: "100%", paddingLeft: 75, textAlign: "left" }}
                            name={lang.inputName} icon="search" rotation="0deg" value={search} onChangeText={cerca => ook(cerca)} secure='false' left='true'/>
                        </View>
                    </View>
                    
                <ScrollView overScrollMode="never" style={{marginTop:-35, display:`${display}`}}>
                    {user.slice(0,3).map((item) => (
                        <TouchableOpacity  key={item.id} activeOpacity={.95}  onPress={()=>{onChangeText(item.nome +" "+item.cognome);onPayment(item.id); setDisplay("none")}}>
                            <View style={{height: 50, width: "75%",flexDirection: "row", alignSelf: "center",marginTop: 0, marginBottom: 5, backgroundColor:'#EA9F5A' }} activeOpacity={.75}>
                                <View style={{width: '25%'}}>
                                </View>
                                <View style={{ flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>{item.nome} {item.cognome}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: "center", alignItems: 'center', marginLeft: 'auto', top: 5, marginRight: 5, height: 40, width: 40}}>
                                    <Icon name="chevron-forward" size={25} color={colors.theme.title} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                    <View style={{ marginBottom: 10 }}></View>
                        <InputButton params={{ marginTop: 26, width: "75%" }} name={lang.pagaCassa} icon="arrow-forward-outline" rotation="-45deg" onPress={handleSubmitPressCash} />
                        <InputButton params={{ marginTop: 26, width: "75%" }} name={lang.pagaOra} icon="arrow-forward-outline" rotation="-45deg" onPress={handleSubmitPressNow} />
                    <View style={{ marginBottom: tabBarHeight + 100 }}></View>
                
            </ScrollView>
        </View>
        )
    }
};
const styles = StyleSheet.create({
});

export default React.memo(Cart);
