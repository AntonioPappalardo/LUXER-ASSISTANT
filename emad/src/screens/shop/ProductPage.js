import React from "react";
import { Dimensions, StyleSheet, View, ImageBackground } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import BackButton from "../../components/BackButton";
import BottomSheet from "../../components/BottomProduct2";
import { getImmaginiByProdotto, getProdottoById,getAttributoColoreByProduct } from "../../back/connect";
import { useLanguage } from "../../localization/Localization";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductPage = ({ navigation,route }) => {
    var prodotto=getProdottoById(route.params.prodotto);
    var Immagini=getImmaginiByProdotto(route.params.prodotto)
   
    const { colors, isDark } = useTheme();
    const [lang, setLanguage] = useLanguage();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayRegular': require('../../../assets/fonts/SFProDisplayRegular.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flexGrow: 1 }}>
                <BackButton onPress={() => { navigation.goBack() }} black/>
                <SwiperFlatList autoplay
                    autoplayDelay={5}
                    autoplayLoop
                    index={0}
                    showPagination
                    paginationStyle={{position:'absolute', bottom:'22.5%'}}
                    paginationStyleItemActive={{backgroundColor: '#EA9F5A'}}
                    style={{ position: 'absolute', zIndex: -100 }}>
                    {Immagini.map((item) => 
                        <ImageBackground key={item.id} source={{ uri: item.remote_path }} resizeMode="cover" style={[styles.child, { backgroundColor: colors.theme.background }]} />
                    )}
                </SwiperFlatList>
            <BottomSheet 
            /*colors={colors} 
            tabBarHeight={tabBarHeight} */
            navigation={navigation}
            prodotto={prodotto}
            utente={route.params.utente}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, backgroundColor: 'white' },
    child: { width, height: height*0.9, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});
export default ProductPage;