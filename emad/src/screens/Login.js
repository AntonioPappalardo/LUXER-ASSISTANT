import React from "react";
import { TextInput, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import { AuthContext } from "./context";

const Login = ({ }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext)
  return (
    <View style={styles.screen}>
      <Image style={styles.tinylogo} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>Luxor Assistant</Text>
      <View style={styles.form}>
        <InputText params={{ marginTop: 25, width: "100%" }} name="Username" icon="person-outline" rotation="0deg" value={username} onChangeText={setUsername} secure='false'/>
        <InputText params={{ marginTop: 10, width: "100%" }} name="Password" icon="key-outline" rotation="0deg" value={password} onChangeText={setPassword} secure='true'/>

        <InputButton params={{ marginTop: 100, width: "75%" }} name="Accedi" icon="arrow-forward-outline" rotation="-45deg" onPress={() => signIn({ username, password })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinylogo: {
    marginTop: 75,
    alignSelf: 'center',
    width: 140,
    height: 110
  },
  maintext: {
    fontSize: 30
  },
  text: {
    alignSelf: 'center',
    top: 10,
    fontSize: 25,
    color: '#7379B7',
    fontWeight: 'bold'
  },
  form: {
    padding: 20
  },
  input: {
    textAlign: "center",
    marginTop: 25,
    alignSelf: "stretch",
    marginHorizontal: 15,
    padding: 10,
    height: 55,
    width: "90%",
    borderRadius: 25,
    color: "white",
    backgroundColor: "#363A4E"
  },
  screen: {
    height: "100%",
    backgroundColor: "#2A2E43"
  },
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: 55,
    width: '60%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 120,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#2D62ED',

  },
  button_text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 0,
    color: "white"

  },
  icon_user: {
    fontWeight: "bold",
    marginLeft: 30,
    position: 'absolute',
    top: "17%",
    left: 30,
    zIndex: 1
  },
  icon_password: {
    fontWeight: "bold",
    marginLeft: 30,
    position: 'absolute',
    top: "41%",
    left: 30,
    zIndex: 1
  },
  icon_arrow: {
    fontWeight: "bold",
    marginLeft: "75%",
    position: 'absolute',
    top: "100%",
    left: 30,
    zIndex: 1
  },
  icon_middle: {
    alignSelf: 'flex-end',
    height: 35,
    width: 35,
    backgroundColor: "#789AF3",
    padding: 5,
    paddingLeft: 5,
    borderRadius: 25,
    zIndex: 0
  },
  dot_button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    top: 10,
    left: 15,
    marginTop: 5,
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default Login;
