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
import { useLanguage } from "../../localization/Localization";
import { AddCostumer } from "../../back/connect";
const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

const AddUser = ({ navigation }) => {

  const { colors, isDark } = useTheme();
  const [lang, setLanguage] = useLanguage();

  const [isModalVisible, setModalVisible] = useState(false);
  const [errorText, setErrorText] = useState('Default');
  const [isSuccess, setIsSuccess] = useState(false);
  const [AlertText, setAlertText] = useState('Default');
  const [isChecked, setChecked] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const tabBarHeight = useBottomTabBarHeight() + 20;

  const [nome, setNome] = React.useState('');
  const [cognome, setCognome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [tel, setTelefono] = React.useState('');
  const [sesso, setSesso] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [nazionalita, setNazionalita] = React.useState('');

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
    if (!sesso) {
      setErrorText(lang.campoErroreSesso)
      setModalVisible(true)
      return;
    }
    if (!eta) {
      setErrorText(lang.campoErroreEta)
      setModalVisible(true)
      return;
    }
    if (!nazionalita) {
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
      console.log(user)
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
          animationIn="jello"
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
        <ScrollView overScrollMode="never" style={{ height: "100%" }}>
          <View style={styles.form}>
            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.nome} icon="" rotation="0deg" value={nome} onChangeText={setNome} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.cognome} icon="" rotation="0deg" value={cognome} onChangeText={setCognome} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name="Email" icon="mail-outline" rotation="0deg" value={email} onChangeText={setEmail} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 60, textAlign: "left" }}
              name="+39 111 222 33 44" icon="call-outline" rotation="0deg" value={tel} onChangeText={setTelefono} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.sesso} icon="" rotation="0deg" value={sesso} onChangeText={setSesso} />

            <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.eta} icon="" rotation="0deg" value={eta} onChangeText={setEta} />

            <InputText params={{ marginTop: 1, width: "75%", paddingLeft: 25, textAlign: "left" }}
              name={lang.nazionalita} icon="" rotation="0deg" value={nazionalita} onChangeText={setNazionalita} />

          </View>
          <InputButton params={{ marginTop: 26, width: "75%", marginBottom: tabBarHeight }} name={lang.conferma} icon="arrow-forward-outline" rotation="-45deg" onPress={handleSubmitPress} />
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  form: {
    alignSelf: "center",
  },
});

export default AddUser;
