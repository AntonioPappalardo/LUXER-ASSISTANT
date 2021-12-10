import React from "react";
import { Text, Dimensions, StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import BackButton from "../../components/BackButton";
import ColorFilter from "../../components/ColorFilter";
import InputButton from "../../components/InputButton";
import Icon from 'react-native-vector-icons/FontAwesome5';
import SlidingUpPanel from 'rn-sliding-up-panel';
import BottomSheet from "../../components/BottomProduct";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductPage = ({ navigation }) => {

    const { colors, isDark } = useTheme();

    const tabBarHeight = useBottomTabBarHeight();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayRegular.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flexGrow: 1 }}>
                <BackButton onPress={() => { navigation.goBack() }} inverted/>
                <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination style={{ position: 'absolute', zIndex: -100 }}>
                    <ImageBackground source={{ uri: 'https://tinyurl.com/2p8b95x3' }} resizeMode="cover" style={[styles.child, { backgroundColor: colors.theme.background }]} />
                    <ImageBackground source={{ uri: 'https://tinyurl.com/2p8b95x3' }} resizeMode="cover" style={[styles.child, { backgroundColor: colors.theme.background }]} />
                    <ImageBackground source={{ uri: 'https://tinyurl.com/2p8b95x3' }} resizeMode="cover" style={[styles.child, { backgroundColor: colors.theme.background }]} />
                </SwiperFlatList>
            <BottomSheet colors={colors} tabBarHeight={tabBarHeight} navigation={navigation}/>
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