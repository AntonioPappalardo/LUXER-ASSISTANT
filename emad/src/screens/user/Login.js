import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Checkbox from 'expo-checkbox';
import InputButton from "../../components/InputButton";
import InputText from "../../components/InputText";
import BackButton from "../../components/BackButton";
import { AuthContext } from "../context";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal'
import { getUtente,getUtenteByLogin } from "../../back/connect";
import { useLanguage } from "../../localization/Localization";

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

const Login = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const [language, setLanguage] = useLanguage();

  const [isModalVisible, setModalVisible] = useState(false);
  const [errorText, setErrorText] = useState('Default');
  const [isChecked, setChecked] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { signIn } = React.useContext(AuthContext)
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  const handleSubmitPress = () => {
    if (!userEmail) {
      setErrorText(language.emailError)
      setModalVisible(true)
      return;
    }
    if (!userPassword) {
      setErrorText(language.passwordError)
      setModalVisible(true)
      return;
    }
    let idUser=getUtenteByLogin(userEmail,userPassword)
    
    if(idUser== undefined) {
      setErrorText(language.userError)
      setModalVisible(true)
      return;
    }
    
    navigation.navigate('TabBar',{user:idUser})
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screen}>
        <StatusBar style='light' />

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
            <View style={colors.topModal}>
              <Icon name="close-circle-outline" size={75} color={'#FFFFFF'} />
            </View>
            <View style={colors.modalContent}>
              <Text style={{ color: colors.theme.primary, textAlign: 'center' }}>{errorText}</Text>
              <InputButton params={{ marginTop: '5%', width: "75%" }}
                name={language.conferma} icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
        <View style={styles.headerTop}>
          <BackButton onPress={() => { navigation.replace('SplashScreen') }} fixed />
          <Text style={{ fontSize: 30, fontFamily: 'SFProDisplayBold', width: "100%", color: 'white', alignSelf: "center", marginLeft: "20%", marginBottom: "5%" }}>
            {language.loginLabel}
          </Text>
        </View>
        <View style={{ backgroundColor: colors.theme.background, height: "100%", alignItems: "center", paddingTop: 15 }}>
          <InputText params={{ marginTop: 25, width: "75%" }} name="Email" icon="mail-outline" rotation="0deg" value={userEmail} onChangeText={setUserEmail} secure='false' />
          <InputText params={{ marginTop: 10, width: "75%" }} name={language.password} icon="key-outline" rotation="0deg" value={userPassword} onChangeText={setUserPassword} secure='true' />
          <View style={styles.section}>
            <Checkbox
              style={{ margin: 0, borderRadius: 5 }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#e78630' : undefined}
            />
            <Text style={{ margin: 25, fontSize: 16, fontFamily: 'SFProDisplayMedium', color: colors.theme.title }}>{language.rememberme}</Text>
          </View>
          <InputButton params={{ marginTop: "5%", width: "75%", fontFamily: 'SFProDisplayMedium' }} name={language.accedi} icon="arrow-forward-outline" rotation="-45deg"
            onPress={handleSubmitPress} />
        </View>



      </View>
    )
  }
};

const styles = StyleSheet.create({
  headerTop: {
    backgroundColor: "#282B32"
  },
  screen: {
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'flex-start',
    paddingLeft: '12.5%'
  },
  checkbox: {
    margin: 8,
  },
});
export default Login;
