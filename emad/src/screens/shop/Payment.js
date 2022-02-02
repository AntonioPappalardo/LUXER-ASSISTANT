import React, {Component} from "react";
import { Image, View, Text, Dimensions, Animated, TouchableOpacity } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import { ShadowBox } from 'react-native-neomorph-shadows';
import { useLanguage } from "../../localization/Localization";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ImageLoader extends Component{
    state  = {
        opacity: new Animated.Value(0),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            delay:3000,
            toValue:1,
            duration:1500,
            useNativeDriver:true,
        }).start();
    }

    render(){
        return(
            <Animated.Image onLoad={this.onLoad}
            {...this.props}
            style={[
                {
                    opacity:this.state.opacity,
                    transform: [
                        {
                            scale: this.state.opacity.interpolate({
                                inputRange:[0,1],
                                outputRange:[0.85,1]
                            })
                        }
                    ]
                },
                this.props.style,
            ]}
            />
        )
    }
}

const Payment = ({ navigation }) => {

    const { colors, isDark } = useTheme();
    const [lang, setLanguage] = useLanguage();

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
                    <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>{lang.paga}</Text>
                    </View>
                </View>       
                    {isDark ? 
                <TouchableOpacity activeOpacity={.85}>
                    <ImageLoader source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/img/american-express.png'}} style={{marginTop: '25%', marginBottom:'10%', alignSelf:'center', height:300, width: width, minWidth:100,maxWidth: 400}} resizeMode="contain"/>
                </TouchableOpacity>
                    :
                <TouchableOpacity activeOpacity={.85}>
                    <ImageLoader source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/img/Natewest.png'}} style={{marginTop: '25%', marginBottom:'10%', alignSelf:'center', height:300, width: width, minWidth:0,maxWidth: 400}} resizeMode="contain"/>
                </TouchableOpacity>
                }
                
                <ShadowBox
                    inner
                    useSvg
                    style={{
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: .6,
                        shadowColor: "#000",
                        shadowRadius: 5,
        
                        backgroundColor: colors.payment.backgroundColor,
                        width: width+5,
                        height: 350,
                    }}>
                        <Text  style={{fontFamily: "SFProDisplayBold", fontSize: 15, color: colors.theme.title, marginTop: '10%', alignSelf: 'center'}}>{lang.notificaPagamento}</Text>
                    {isDark ?
                        <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/img/nfc_light.png'}} style={{ marginTop: '5%', height:100,width: width, maxWidth: 100, alignSelf: 'center'}} resizeMode="contain" />
                        :
                        <Image source={{uri:'https://storageaccountemadbc1b.blob.core.windows.net/img/nfc_dark.png'}} style={{marginTop: '5%', height:100,width: width, maxWidth: 100, alignSelf: 'center'}} resizeMode="contain" />
                    }
                </ShadowBox>

            </View>
        )
    }
};

export default Payment;
