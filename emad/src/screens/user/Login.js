import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import InputButton from "../../components/InputButton";
import InputText from "../../components/InputText";
import BackButton from "../../components/BackButton";
import { AuthContext } from "../context";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const { colors, isDark } = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);
  const [errorText, setErrorText] = useState('Default');

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
      setErrorText("Il campo Email è obbligatorio!")
      setModalVisible(true)
      return;
    }
    if (!userPassword) {
      setErrorText("Il campo Password è obbligatorio!")
      setModalVisible(true)
      return;
    }
    navigation.replace('TabBar');
  }
 
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screen}>
        <Modal isVisible={isModalVisible}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}>
          <View style={colors.topModal}>
            <Icon name="close-circle-outline" size={75} color={'#FFFFFF'}/>
          </View>
          <View style={colors.modalContent}>
            <Text style={{color: colors.theme.primary, textAlign: 'center'}}>{errorText}</Text>
            <InputButton params={{marginTop: '5%', width: "75%" }} 
            name="Conferma" icon="arrow-forward-outline" rotation="-45deg" onPress={toggleModal} />
          </View>
        </Modal>
        <View style={styles.headerTop}>
          <BackButton onPress={() => { navigation.goBack() }} fixed />
          <Text style={{ fontSize: 30, fontFamily: 'SFProDisplayBold', width: "100%", color: 'white', alignSelf: "center", marginLeft: "20%", marginBottom: "5%" }}>
            Accedi{"\n"}al tuo account
          </Text>
        </View>
        <View style={{ backgroundColor: colors.theme.background, height: "100%", alignItems: "center", paddingTop: 15 }}>
          <InputText params={{ marginTop: 25, width: "75%" }} name="Email" icon="mail-outline" rotation="0deg" value={userEmail} onChangeText={setUserEmail} secure='false' />
          <InputText params={{ marginTop: 10, width: "75%" }} name="Password" icon="key-outline" rotation="0deg" value={userPassword} onChangeText={setUserPassword} secure='true' />

          <InputButton params={{ marginTop: "5%", width: "75%", fontFamily: 'SFProDisplayMedium' }} name="ACCEDI" icon="arrow-forward-outline" rotation="-45deg"
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
});
export default Login;
