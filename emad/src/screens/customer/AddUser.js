import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import Modal from 'react-native-modal'
import { AuthContext } from "../context";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons';
import InputButton from "../../components/InputButton";
import InputText from "../../components/InputText";
import BackButton from "../../components/BackButton";
import MenuItem from '../../components/MenuItem';
import { Picker } from '@react-native-picker/picker';
import { useLanguage } from "../../localization/Localization";
import { AddCostumer } from "../../back/connect";
import Divider from "../../components/Divider";

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

const AddUser = ({ navigation }) => {

  const { colors, isDark } = useTheme();
  const styles = StyleSheet.create({
    form: {
      alignSelf: "center",
    },
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

  const [lang, setLanguage] = useLanguage();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleGender, setModalVisibleGender] = useState(false);
  const [isModalVisibleNation, setModalVisibleNation] = useState(false);

  const [errorText, setErrorText] = useState('Default');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const genere = [
    {'label': lang.maschio, 'value': lang.maschio},
    {'label': lang.femmina, 'value': lang.femmina},
    {'label': lang.altro, 'value': lang.altro},
  ];

  const nazione = [
    {'label': `🇦🇱 ${lang.albania}`, 'value': lang.albania},
    {'label': `🇩🇿 ${lang.algeria}`, 'value': lang.algeria},
    {'label': `🇦🇷 ${lang.argentina}`, 'value': lang.argentina},
    {'label': `🇦🇺 ${lang.australia}`, 'value': lang.australia},
    {'label': `🇦🇹 ${lang.austria}`, 'value': lang.austria},
    {'label': `🇦🇿 ${lang.azerbaigian}`, 'value': lang.azerbaigian},
    {'label': `🇧🇭 ${lang.bahrain}`, 'value': lang.bahrain},
    {'label': `🇧🇪 ${lang.belgio}`, 'value': lang.belgio},
    {'label': `🇧🇬 ${lang.bulgaria}`, 'value': lang.bulgaria},
    {'label': `🇧🇷 ${lang.brasile}`, 'value': lang.brasile},
    {'label': `🇨🇳 ${lang.cina}`, 'value': lang.cina},
    {'label': `🇰🇷 ${lang.coreaDelSud}`, 'value': lang.coreaDelSud},
    {'label': `🇭🇷 ${lang.croazia}`, 'value': lang.croazia},
    {'label': `🇩🇰 ${lang.danimarca}`, 'value': lang.danimarca},
    {'label': `🇫🇮 ${lang.finlandia}`, 'value': lang.finlandia},
    {'label': `🇫🇷 ${lang.francia}`, 'value': lang.francia},
    {'label': `🇩🇪 ${lang.germania}`, 'value': lang.germania},
    {'label': `🇯🇵 ${lang.giappone}`, 'value': lang.giappone},
    {'label': `🇬🇷 ${lang.grecia}`, 'value': lang.grecia},
    {'label': `🇭🇰 ${lang.hongKong}`, 'value': lang.hongKong},
    {'label': `🇮🇪 ${lang.irlanda}`, 'value': lang.irlanda},
    {'label': `🇮🇹 ${lang.italia}`, 'value': lang.italia},
    {'label': `🇲🇽 ${lang.messico}`, 'value': lang.messico},
    {'label': `🇳🇱 ${lang.paesiBassi}`, 'value': lang.paesiBassi},
    {'label': `🇵🇹 ${lang.portogallo}`, 'value': lang.portogallo},
    {'label': `🇲🇨 ${lang.principatoMonaco}`, 'value': lang.principatoMonaco},
    {'label': `🇶🇦 ${lang.quatar}`, 'value': lang.quatar},
    {'label': `🇬🇧 ${lang.regnoUnito}`, 'value': lang.regnoUnito},
    {'label': `🇷🇺 ${lang.russia}`, 'value': lang.russia},
    {'label': `🇪🇸 ${lang.spagna}`, 'value': lang.spagna},
    {'label': `🇨🇭 ${lang.svizzera}`, 'value': lang.svizzera},
    {'label': `🇦🇪 ${lang.uae}`, 'value': lang.uae},
    {'label': `🇺🇸 ${lang.usa}`, 'value': lang.usa},
  ];

  const tabBarHeight = useBottomTabBarHeight() + 20;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleGender = (itemValue) => {
    setSesso(itemValue);
    setModalVisibleGender(false);
  };

  const toggleNation = (itemValue) => {
    setNazionalita(itemValue);
    setModalVisibleNation(false);
  };

  const [nome, setNome] = React.useState('');
  const [cognome, setCognome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [tel, setTelefono] = React.useState('');
  const [sesso, setSesso] = React.useState('-');
  const [eta, setEta] = React.useState('');
  const [nazionalita, setNazionalita] = React.useState('-');

  const { add } = React.useContext(AuthContext)

  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });
  const handleSubmitPress = async () => {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var phoneformat = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/;
    const delay = ms => new Promise(res => setTimeout(res, ms));

    if (!nome) {
      setErrorText(lang.campoErroreNome)
      setModalVisible(true)
      return;
    }
    if (!cognome) {
      setErrorText(lang.campoErroreCognome)
      setModalVisible(true)
      return;
    }
    if (!email.match(mailformat)) {
      setErrorText(lang.campoErroreEmail)
      setModalVisible(true)
      return;
    }
    if (!tel.match(phoneformat)) {
      setErrorText(lang.campoErroreTelefono)
      setModalVisible(true)
      return;
    }
    if (!eta) {
      setErrorText(lang.campoErroreEta)
      setModalVisible(true)
      return;
    }
    if (sesso == '-') {
      setErrorText(lang.campoErroreSesso)
      setModalVisible(true)
      return;
    }
    if (nazionalita == '-') {
      setErrorText(lang.campoErroreNazionalita)
      setModalVisible(true)
      return;
    }
    else {
      var user = {}
      user.nome = nome;
      user.cognome = cognome;
      user.email = email;
      user.telefono = tel;
      user.genere = sesso;
      user.eta = eta;
      user.nazione = nazionalita;
      AddCostumer(user);
      setIsSuccess(true);
      setErrorText(lang.operazioneConclusa)
      setModalVisible(true)
      await delay(3000);
      setModalVisible(false);
      setIsSuccess(false);
      navigation.goBack();
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: colors.theme.background }}>

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
                    name="Conferma" icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModal} />
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
                    name="Conferma" icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModal} />
                </View>
              </>}

          </View>
        </Modal>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <BackButton onPress={() => { navigation.goBack() }} />
          <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
            <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{lang.nuovoCliente}</Text>
          </View>
        </View>
        <ScrollView overScrollMode="never" style={{ height: "100%"}}>
          <View style={styles.form}>
            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.nome} icon="" rotation="0deg" value={nome} onChangeText={setNome} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.cognome} icon="" rotation="0deg" value={cognome} onChangeText={setCognome} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name="Email" icon="mail-outline" rotation="0deg" value={email} onChangeText={setEmail} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 60, textAlign: "left" }}
              name="+39 111 222 33 44" icon="call-outline" rotation="0deg" value={tel} onChangeText={setTelefono}/>
            <View style={{ padding: 5, width: '99%', borderBottomWidth: 1, borderColor: colors.floatingInput.border }}>
              <MenuItem title={lang.sesso} rightText={sesso} onPress={() => setModalVisibleGender(true)} />
            </View>
      
            <Modal
              isVisible={isModalVisibleGender}
              statusBarTranslucent={true}
              animationType="slide"
              hasBackdrop={true}
              onBackdropPress={()=> setModalVisibleGender(false)}
              backdropOpacity={10}
              backdropColor={"rgba(0, 0, 0, 0.7)"}
              useNativeDriverForBackdrop={true}
              hideModalContentWhileAnimating={true}
              style={styles.view}>
              <View style={styles.content}>
              <Picker
                  selectedValue={sesso}
                  style={{width: '50%', fontFamily: 'SFProDisplayBold', color: colors.theme.title, textAlign: 'center', alignSelf: 'center' }}
                  dropdownIconColor={colors.theme.title}
                  onValueChange={(itemValue, itemIndex) =>
                      toggleGender(itemValue)
                  }
                  mode="dialog">
                  {genere.map(item => {
                      if (Platform.OS === 'ios') {
                          return <Picker.Item key={item.value} color={colors.theme.title} label={item.label} value={item.value} />;
                      } else {
                          return <Picker.Item key={item.value} label={item.label} value={item.value} />;
                      }
                  })}

              </Picker>
              </View>
              </Modal>
            
            <InputText params={{ marginTop: 0, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.eta} rotation="0deg" value={eta} onChangeText={setEta} numeric={true}/>

            <View style={{ padding: 5, width: '99%', borderBottomWidth: 1, borderColor: colors.floatingInput.border }}>
              <MenuItem title={lang.nazionalita} rightText={nazionalita} onPress={() => setModalVisibleNation(true)} />
            </View>
            <Modal
              isVisible={isModalVisibleNation}
              statusBarTranslucent={true}
              animationType="slide"
              hasBackdrop={true}
              onBackdropPress={()=> setModalVisibleNation(false)}
              backdropOpacity={10}
              backdropColor={"rgba(0, 0, 0, 0.7)"}
              useNativeDriverForBackdrop={true}
              hideModalContentWhileAnimating={true}
              style={styles.view}>
              <View style={styles.content}>
              <Picker
                  selectedValue={nazionalita}
                  style={{width: '50%', fontFamily: 'SFProDisplayBold', color: colors.theme.title, textAlign: 'center', alignSelf: 'center' }}
                  dropdownIconColor={colors.theme.title}
                  onValueChange={(itemValue, itemIndex) =>
                      toggleNation(itemValue)
                  }
                  mode="dialog">
                  {nazione.map(item => {
                      if (Platform.OS === 'ios') {
                          return <Picker.Item key={item.value} color={colors.theme.title} label={item.label} value={item.value} />;
                      } else {
                          return <Picker.Item key={item.value} label={item.label} value={item.value} />;
                      }
                  })}

              </Picker>
              </View>
              </Modal>
 
          </View>
          <InputButton params={{ marginTop: 26, width: "75%", marginBottom: tabBarHeight }} name={lang.procedi} icon="arrow-forward-outline" rotation="-45deg" onPress={handleSubmitPress} />
        </ScrollView>
      </View>
    )
  }
};

export default AddUser;
