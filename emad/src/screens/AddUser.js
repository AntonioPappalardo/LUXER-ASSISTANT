import React from "react";
import { TextInput, StyleSheet, Image, View, Text,TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import { AuthContext } from "./context";

const AddUser= ({})=> {
    const [nome, setNome] = React.useState('');
    const [cognome, setCognome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tel, setTelefono] = React.useState('');
    const [sesso, setSesso] = React.useState('');
    const [eta, setEta] = React.useState('');
    const [nazionalita, setNazionalita] = React.useState('');

    //const { add } = React.useContext(AuthContext)
    return (
    <View style={styles.screen}>
        <Text style={styles.text}>Nuovo Cliente</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="white" value={nome} onChangeText={setNome} underlineColorAndroid="transparent" />
          <TextInput style={styles.input} placeholder="Cognome" placeholderTextColor="white" value={cognome} onChangeText={setCognome} underlineColorAndroid="transparent" />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="white" value={email} onChangeText={setEmail} underlineColorAndroid="transparent" />
          <TextInput style={styles.input} placeholder="Telefono" placeholderTextColor="white" value={tel} onChangeText={setTelefono} underlineColorAndroid="transparent" />
          <TextInput style={styles.input} placeholder="Sesso" placeholderTextColor="white" value={sesso} onChangeText={setSesso} underlineColorAndroid="transparent" />
          <TextInput style={styles.input} placeholder="Età" placeholderTextColor="white" value={eta} onChangeText={setEta} underlineColorAndroid="transparent" />
          <TextInput style={styles.input} placeholder="Nazionalità" placeholderTextColor="white" value={nazionalita} onChangeText={setNazionalita} underlineColorAndroid="transparent" />
          <TouchableOpacity style={styles.button} onPress={() => add({ nome, cognome, email, tel, sesso, eta, nazionalita })}>
          <View style={{ flexDirection: "row", alignSelf:"auto"}}>
          <Text style={styles.button_text}>Conferma</Text>
            <View style={[styles.dot_button, { backgroundColor: "#789AF3" }]}>
              <Ionicons name="arrow-forward-outline" size={25} color={"white"} style={{ transform: [{ rotateZ: '-45deg' }] }} />
            </View>
          </View>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinylogo:{
    marginTop:75,
    alignSelf:'center',
    width:140, 
    height:110
  },
  maintext: {
    fontSize: 30
  },
  text:{
    alignSelf:'center',
    top:50,
    fontSize:25,
    color:'white',
    fontWeight:'bold'
  },
  form:{
    marginTop:30,
    padding:20
  },
  input:{
    textAlign:"center",
    marginTop:25,
    fontSize:20,
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
    alignSelf:'center',
    flexDirection:'row',
    height:55,
    width:'60%',
    paddingVertical: 17,
    paddingHorizontal: 30,
    marginTop:30,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#4957A6',
    
  },
  button_text:{
    fontSize: 18,
    fontWeight:'bold',
    marginLeft:30,
    marginTop:0,
    color:"white"

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
      alignSelf:'flex-end',
      height:35,
      width:35,
      backgroundColor:"#789AF3",
      padding:5,
      paddingLeft:5,
      borderRadius:25,
      zIndex: 0
    },
    dot_button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      top:10,
      left: 15,
      marginTop: 5,
      height: 40,
      width: 40,
      borderRadius: 20
    }
});

export default AddUser;
