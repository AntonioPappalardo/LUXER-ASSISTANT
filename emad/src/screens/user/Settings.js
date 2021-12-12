import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import BackButton from '../../components/BackButton';
import MenuItem from '../../components/MenuItem';
import { useTheme } from "../../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SwitchItem from "../../components/SwitchItem";


const Impostazioni = ({ navigation }) => {
    const {colors, setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const windowWidth = Dimensions.get('window').width;
    const tabBarHeight = useBottomTabBarHeight();
    
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
                <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>Impostazioni</Text>
                </View>
            </View>            
            <ScrollView style={{marginBottom: tabBarHeight, marginTop: "5%"}}>
            <SwitchItem value={isDark} onValueChange={toggleScheme} title={'Tema Scuro'}/>
            <MenuItem title={'Info su Luxer Assistant'} onPress={() => navigation.navigate('AddUser')} />
            <MenuItem title={'Note sulla versione'} onPress={() => navigation.navigate('Catalogo')} />

            </ScrollView>
        </View>
        )
    }
};


export default Impostazioni;
