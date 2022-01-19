import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import BackButton from '../../components/BackButton';
import MenuItem from '../../components/MenuItem';
import { useTheme } from "../../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SwitchItem from "../../components/SwitchItem";
import { Picker } from '@react-native-picker/picker';
import { useLanguage } from "../../localization/Localization";


const Impostazioni = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();
    const styles = StyleSheet.create({
        view: {
          justifyContent: 'flex-end',
          margin: 0,
        },
        content: {
            backgroundColor: colors.theme.background,
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
      });

    const [language, setLanguage] = useLanguage();
    const [selectedLanguage,setSelectedLanguage] = useState(language.code)
    const [isModalVisible, setModalVisible] = useState(false);
    
    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const windowWidth = Dimensions.get('window').width;
    const tabBarHeight = useBottomTabBarHeight();
    const toggleLanguage = (itemValue) => {
        setLanguage(itemValue);
        setSelectedLanguage(itemValue);
        setModalVisible(false);
    }
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
                <View style={{ flexDirection: 'row' }}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{language.impostazioni}</Text>
                    </View>
                </View>
                <ScrollView overScrollMode="never" style={{ marginBottom: tabBarHeight, marginTop: "5%" }}>
                    <SwitchItem value={isDark} onValueChange={toggleScheme} title={language.tema}/>
                    <MenuItem title={language.lingua} rightText={language.label} onPress={() => setModalVisible(true)} />
                    <Modal
                        isVisible={isModalVisible}
                        statusBarTranslucent={true}
                        animationType="slide"
                        hasBackdrop={true}
                        onBackdropPress={()=> setModalVisible(false)}
                        backdropOpacity={10}
                        backdropColor={"rgba(0, 0, 0, 0.7)"}
                        useNativeDriverForBackdrop={true}
                        hideModalContentWhileAnimating={true}
                        style={styles.view}>
                        <View style={styles.content}>
                            <Picker
                                selectedValue={selectedLanguage}
                                style={{width: '50%', fontFamily: 'SFProDisplayBold', color: colors.theme.title, textAlign: 'center', alignSelf: 'center' }}
                                dropdownIconColor={colors.theme.title}
                                onValueChange={(itemValue, itemIndex) =>
                                    toggleLanguage(itemValue)
                                }
                                mode="dialog">
                                <Picker.Item label="Italiano" value="it-IT" />
                                <Picker.Item label="English" value="en-US" />
                                <Picker.Item label="Français" value="fr-FR" />
                                <Picker.Item label="Español" value="es-ES" />
                            </Picker>
                        </View>
                    </Modal>
                    <MenuItem title={language.info} onPress={() => navigation.navigate('AddUser')} />
                    <MenuItem title={language.note} onPress={() => navigation.navigate('Catalogo')} />

                </ScrollView>
            </View>
        )
    }
};


export default Impostazioni;
