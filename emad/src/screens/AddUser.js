import React from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import { AuthContext } from "./context";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../theme/ThemeProvider";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import BackButton from "../components/BackButton";

const AddUser = ({navigation}) => {

  const {colors, isDark} = useTheme();

  const tabBarHeight = useBottomTabBarHeight()+20;

  const [nome, setNome] = React.useState('');
  const [cognome, setCognome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [tel, setTelefono] = React.useState('');
  const [sesso, setSesso] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [nazionalita, setNazionalita] = React.useState('');

  const { add } = React.useContext(AuthContext)
  
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{backgroundColor: colors.theme.background }}>
      <BackButton onPress={() => { navigation.goBack() }}/>
      <ScrollView style={{height: "100%"}}>
        <View style={styles.form}>
          <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
            name="Nome" icon="" rotation="0deg" value={nome} onChangeText={setNome} />

          <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
            name="Cognome" icon="" rotation="0deg" value={cognome} onChangeText={setCognome} />

          <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
            name="Email" icon="mail-outline" rotation="0deg" value={email} onChangeText={setEmail} />

          <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 60, textAlign: "left" }}
            name="+39 111 222 33 44" icon="call-outline" rotation="0deg" value={tel} onChangeText={setTelefono} />

          <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
            name="Sesso" icon="" rotation="0deg" value={sesso} onChangeText={setSesso} />

          <InputText params={{ marginTop: 10, width: "75%", paddingLeft: 25, textAlign: "left" }}
            name="Età" icon="" rotation="0deg" value={eta} onChangeText={setEta} />

          <InputText params={{ marginTop: 1, width: "75%", paddingLeft: 25, textAlign: "left" }}
            name="Nazionalità" icon="" rotation="0deg" value={nazionalita} onChangeText={setNazionalita} />

        </View>         
         <InputButton params={{ marginTop: 13, width: "75%", marginBottom: tabBarHeight }} name="Conferma" icon="arrow-forward-outline" rotation="-45deg" onPress={() => signIn({ username, password })} />
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
