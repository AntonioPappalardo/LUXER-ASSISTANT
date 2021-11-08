import React from "react";
import { TextInput, StyleSheet, Image, View, Text,TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import { AuthContext } from "./context";

const Login= ({})=> {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext)
    return (
    <View style={styles.screen}>
        <Image style={styles.tinylogo} source={require('../../assets/logo.png')}/>
        <View style={styles.form}>
          <Ionicons style={styles.icon_user} name="person-outline" size={25} color="white"/>
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="white" value={username} onChangeText={setUsername} underlineColorAndroid="transparent" />
          <Ionicons style={styles.icon_password} name="key-outline" size={25} color="white"/>
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="white" value={password} onChangeText={setPassword} secureTextEntry underlineColorAndroid="transparent" />
          <TouchableOpacity style={styles.button} onPress={() => signIn({ username, password })}>
          <Text style={styles.button_text}>Accedi</Text>
          <Ionicons style={styles.icon_arrow} name="arrow-forward-outline" size={25} color="white"/>
          <View style={styles.icon_middle} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinylogo:{
    top:75,
    left: "36%",
    alignItems: 'center',
    justifyContent: 'center',
    width:120, 
    height:90
  },
  maintext: {
    fontSize: 30
  },
  text:{
    fontSize:20
  },
  form:{
    marginTop:100,
    padding:20
  },
  input:{
    textAlign:"center",
    marginTop:25,
    alignSelf:"stretch",
    marginHorizontal:15,
    padding:10,
    height:55,
    width:"90%",
    borderRadius:25,
    color:"white",
    backgroundColor:"#363A4E"
  },
  screen:{
    height:"100%",
    backgroundColor:"#2A2E43"
  },
  button: {
    height:55,
    width:'60%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop:120,
    marginLeft:80,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#39D5CF',
  },
  button_text:{
    marginLeft:50,
    color:"white"
  },
  icon_user:{
    fontWeight:"bold",
    marginLeft:30,
    position: 'absolute',
    top:"17%",
    left: 30,
    zIndex: 1
    },  
  icon_password:{
    fontWeight:"bold",
    marginLeft:30,
    position: 'absolute',
    top:"41%",
    left: 30,
    zIndex: 1
    },
  icon_arrow:{
    fontWeight:"bold",
    marginLeft:"75%",
    position: 'absolute',
    top:"100%",
    left: 30,
    zIndex: 1
    },
    icon_middle:{
      position: 'absolute',
      top:"70%",
      left: "91%",
      height:35,
      width:35,
      backgroundColor:"#789AF3",
      padding:5,
      paddingLeft:5,
      borderRadius:25,
      zIndex: 0
    }
});

export default Login;
